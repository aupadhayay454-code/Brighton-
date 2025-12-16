
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Globe } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatWidgetProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  initialMessage?: string;
  setInitialMessage?: (msg: string) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ 
  isOpen: propIsOpen, 
  setIsOpen: propSetIsOpen, 
  initialMessage, 
  setInitialMessage 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hello! I am your AI counselor from Brighton. Ask me about universities, visas, or our services.', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Control visibility
  const isOpen = propIsOpen !== undefined ? propIsOpen : internalIsOpen;
  const setIsOpen = propSetIsOpen || setInternalIsOpen;

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Handle initial message query from other components
  useEffect(() => {
    if (isOpen && initialMessage) {
      handleSend(initialMessage);
      if (setInitialMessage) setInitialMessage('');
    }
  }, [isOpen, initialMessage]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Format history for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await sendMessageToGemini(history, textToSend);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text,
        sources: response.sources,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window - Neo-Glass */}
      {isOpen && (
        <div className="pointer-events-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl backdrop-saturate-150 w-[90vw] sm:w-96 h-[500px] rounded-[2rem] shadow-2xl border border-white/50 dark:border-gray-700 flex flex-col mb-4 animate-slideUp overflow-hidden ring-1 ring-black/5 supports-[backdrop-filter]:bg-white/60">
          {/* Header */}
          <div className="bg-primary-600/90 dark:bg-primary-800/90 backdrop-blur-md p-4 flex justify-between items-center text-white shadow-lg transition-colors duration-500 z-10">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-2xl backdrop-blur-sm border border-white/30 shadow-inner">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">Brighton AI</h3>
                <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-primary-100 opacity-90 font-medium">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors active:scale-90">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm shadow-sm relative ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-tr-sm font-medium shadow-primary-500/20' 
                    : 'bg-white/70 dark:bg-gray-800/60 backdrop-blur-md text-gray-800 dark:text-gray-200 border border-white/50 dark:border-gray-600 rounded-tl-sm'
                }`}>
                  <div className="leading-relaxed">{msg.text}</div>

                  {/* Render Grounding Sources */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-gray-200/30 dark:border-gray-700/30">
                      <p className="text-[10px] font-bold opacity-70 uppercase tracking-wider mb-1.5 flex items-center">
                        <Globe size={10} className="mr-1" /> Sources
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.sources.map((source, idx) => (
                          <a 
                            key={idx}
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] bg-black/5 dark:bg-white/10 px-2 py-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/20 transition-colors truncate max-w-[150px] backdrop-blur-sm"
                            title={source.title}
                          >
                            {source.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-gray-600 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-white/40 dark:border-gray-700">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about universities..."
                className="flex-grow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full px-5 py-3 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all outline-none shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className={`p-3 rounded-full text-white transition-all shadow-md ${
                  !input.trim() || isLoading 
                    ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:scale-105 active:scale-95'
                }`}
              >
                <Send size={18} className={isLoading ? 'opacity-50' : ''} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <div className="pointer-events-auto">
            <button 
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-600 border border-white/20 text-white p-4 rounded-full shadow-2xl hover:shadow-primary-600/40 transition-all transform hover:scale-110 flex items-center justify-center group z-50 relative overflow-hidden"
            >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full blur-md"></div>
            <MessageCircle size={28} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-800 dark:text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-white/40 dark:border-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none transform translate-x-4 group-hover:translate-x-0">
                AI Assistant
            </span>
            </button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
