'use client'

import { useEffect, useRef, useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content:
    "Hi! I'm the ONIX AI assistant. Ask me about our engineering capabilities, offices, or how we can collaborate on your next project."
}

const QUICK_PROMPTS = [
  'What services does ONIX provide?',
  'Where are your offices located?',
  'How can we start a project together?',
  'Tell me about ONIX Plus.'
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [messages, isOpen])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      if (!response.ok) {
        throw new Error('Unable to reach ONIX AI right now. Please try again shortly.')
      }

      const data = await response.json()
      const assistantMessage: Message = { role: 'assistant', content: data.reply }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
    setTimeout(() => handleSend(), 0)
  }

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-3">
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-gray-950/95 text-white shadow-[0_35px_70px_-40px_rgba(56,189,248,0.55)] backdrop-blur-xl">
          <div className="relative border-b border-white/10 px-6 py-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.38),_transparent_72%)]" aria-hidden />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-blue-100/80">ONIX AI</p>
                <p className="text-lg font-semibold mt-1">How can we help?</p>
                <p className="mt-2 text-xs text-blue-100/75">
                  Expert in engineering, construction, fit-out, and landscaping knowledge across ONIX Group.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/10 p-2 text-gray-300 transition-all hover:bg-white/20"
                aria-label="Close chatbot"
              >
                ×
              </button>
            </div>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-wide text-gray-200 transition-all hover:border-white/35 hover:bg-white/10"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div ref={containerRef} className="max-h-[320px] overflow-y-auto px-5 py-4 space-y-4 text-sm">
            {messages.map((message, idx) => (
              <div
                key={`${message.role}-${idx}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-3xl px-4 py-3 leading-relaxed shadow-lg transition-all duration-300 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-white/12 text-gray-100 backdrop-blur'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-blue-200">Thinking…</div>}
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                {error}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 px-5 py-4">
            <textarea
              ref={textareaRef}
              placeholder="Ask about capabilities, availability, or next steps"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-white/30 focus:outline-none focus:ring-0"
            />
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => setMessages([INITIAL_MESSAGE])}
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                type="button"
              >
                Reset conversation
              </button>
              <button
                onClick={handleSend}
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-900 transition-transform hover:scale-[1.03]"
                disabled={isLoading}
              >
                Send ↗
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex items-center gap-3 rounded-full bg-gray-950/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_25px_60px_-30px_rgba(56,189,248,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(56,189,248,0.75)]"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/35 to-purple-500/35 opacity-60 transition-opacity duration-300 group-hover:opacity-90" aria-hidden />
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 animate-ping rounded-full bg-emerald-400" aria-hidden />
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-emerald-400" aria-hidden />
        <span className="relative text-lg">🤖</span>
        <div className="relative flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-blue-100/90">ONIX AI</span>
          <span>{isOpen ? 'Close assistant' : 'Chat with us'}</span>
        </div>
      </button>
    </div>
  )
}