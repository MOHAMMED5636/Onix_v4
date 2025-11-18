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
    <>
      {/* Backdrop overlay that fades the website */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[60] flex flex-col items-start gap-3">
        {isOpen && (
          <div className="w-[90vw] sm:w-[420px] md:w-[480px] lg:w-[540px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 transform transition-all duration-300 translate-y-0 opacity-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 sm:px-6 py-4 sm:py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">ONIX AI Assistant</h3>
                    <p className="text-blue-100 text-xs sm:text-sm mt-0.5">How can I help you today?</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
                  aria-label="Close chatbot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 px-4 sm:px-5 py-3 border-b border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="text-left px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-xs sm:text-sm text-gray-700 transition-all shadow-sm hover:shadow"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

          <div ref={containerRef} className="max-h-[320px] sm:max-h-[380px] md:max-h-[420px] overflow-y-auto px-4 sm:px-5 py-4 sm:py-5 space-y-4 bg-white">
            {messages.map((message, idx) => (
              <div
                key={`${message.role}-${idx}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span>Thinking...</span>
              </div>
            )}
            {error && (
              <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 bg-gray-50 px-4 sm:px-5 py-4">
            <div className="flex gap-2">
              <textarea
                ref={textareaRef}
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button
                onClick={handleSend}
                type="button"
                disabled={isLoading || !input.trim()}
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => setMessages([INITIAL_MESSAGE])}
              className="mt-2 text-xs text-gray-500 hover:text-gray-700 transition-colors"
              type="button"
            >
              Reset conversation
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group relative flex items-center gap-2.5 sm:gap-3 rounded-lg bg-white shadow-lg border border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${isOpen ? 'bg-blue-50 border-blue-300' : ''}`}
      >
        <div className="relative flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-green-500 border-2 border-white shadow-sm animate-pulse" aria-hidden />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-gray-700">ONIX AI</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">{isOpen ? 'Close' : 'Chat with us'}</span>
          </div>
        </div>
      </button>
    </div>
    </>
  )
}