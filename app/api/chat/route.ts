import { NextResponse } from 'next/server'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are ONIX AI, a helpful assistant for Onix Engineering Consultancy. Answer concisely using a professional yet friendly tone. Highlight ONIX capabilities across engineering, construction, fit-out, landscaping, and consultation. If you don't know an answer, invite the user to contact info@onixengineering.com or call +971 50 123 4567.`

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as { messages: ChatMessage[] }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key is not configured.' }, { status: 500 })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.5,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map((message) => ({ role: message.role, content: message.content }))
        ]
      })
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', error)
      return NextResponse.json({ error: 'Unable to generate a response right now.' }, { status: 502 })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      return NextResponse.json({ error: 'No response generated.' }, { status: 502 })
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat route error:', error)
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 })
  }
}





