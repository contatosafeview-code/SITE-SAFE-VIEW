
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../services/gemini';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Sistemas SafeView Online. Sou sua inteligência artificial de proteção. Como posso garantir a segurança do seu lar hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithAssistant(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessages(prev => [...prev, { role: 'model', text: "Erro na rede neural. Por favor, tente novamente em alguns instantes ou use o WhatsApp." }]);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {isOpen ? (
        <div className="bg-slate-950/95 border border-blue-500/30 w-72 md:w-[350px] h-[500px] rounded-[2rem] shadow-[0_0_50px_rgba(37,99,235,0.2)] flex flex-col overflow-hidden backdrop-blur-2xl animate-in slide-in-from-left-4 duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex justify-between items-center relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-mesh opacity-20"></div>
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                <span className="text-sm">🤖</span>
              </div>
              <div>
                <span className="font-black text-[10px] tracking-widest uppercase">SAFEVIEW AI</span>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-green-400"></span>
                  <span className="text-[8px] font-bold uppercase tracking-tighter">
                    Online
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/70 hover:text-white transition-colors relative z-10 p-1.5 hover:bg-white/10 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-950/40">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div className={`max-w-[90%] p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-900/20' 
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl rounded-tl-none flex gap-1 shadow-md">
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-slate-900/50 border-t border-slate-800/50 flex gap-2 items-center backdrop-blur-md">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Sua dúvida..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-all shadow-inner"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-600 p-2.5 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 active:scale-95 disabled:opacity-50 disabled:bg-slate-800 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={toggleChat}
          className="bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-500/20 transition-all hover:scale-110 active:scale-95 flex items-center gap-2 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <div className="relative">
            <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-600`}></div>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-blue-500 group-hover:text-blue-400 transform transition-transform group-hover:rotate-12`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-300 hidden sm:block">Consultoria IA</span>
        </button>
      )}
    </div>
  );
};

export default AIChat;
