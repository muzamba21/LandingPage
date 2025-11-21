import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, User, Cpu } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: '0', 
      role: 'model', 
      text: "Sistema Online. Sou o Assistente de Portfólio Automatizado. Como posso ajudar com as qualificações de engenharia do Marcus?" 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const newMsgId = Date.now().toString();
    
    // Add User Message
    const newMessages: ChatMessage[] = [
      ...messages,
      { id: newMsgId, role: 'user', text: userText }
    ];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(
        userText, 
        newMessages.map(m => ({ role: m.role, text: m.text }))
      );
      
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', text: responseText }
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
       {/* Background detail */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-primary-500/20 bg-primary-500/5">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-500 text-xs font-mono uppercase tracking-widest">Ferramenta de Diagnóstico IA</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-2 uppercase">Consulta Interativa de Currículo</h2>
          <p className="text-slate-500 text-sm font-mono">Acesse o banco de dados sobre habilidades técnicas e histórico de projetos.</p>
        </div>

        <div className="bg-dark-900 border border-slate-700 rounded-sm shadow-2xl overflow-hidden flex flex-col h-[500px] relative">
          {/* Terminal Header */}
          <div className="bg-dark-800 p-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-2 text-[10px] font-mono text-slate-400">bash -- interactive-mode</div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-sm">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' 
                    ? 'bg-slate-800 border-slate-600 text-slate-300' 
                    : 'bg-primary-900/20 border-primary-500 text-primary-500'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <Terminal size={14} />}
                </div>
                
                <div className={`max-w-[80%] p-4 border ${
                  msg.role === 'user' 
                    ? 'bg-dark-800 border-slate-700 text-slate-200' 
                    : 'bg-dark-950 border-primary-500/30 text-primary-100'
                }`}>
                  <div className="mb-1 text-[10px] opacity-50 uppercase tracking-wider">
                      {msg.role === 'user' ? 'Entrada Usuário >' : 'Saída Sistema >'}
                  </div>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-4 flex-row">
                <div className="w-8 h-8 border border-primary-500 bg-primary-900/20 flex items-center justify-center flex-shrink-0 text-primary-500">
                  <Terminal size={14} />
                </div>
                <div className="p-4 border border-primary-500/30 bg-dark-950 text-primary-500 flex items-center gap-2">
                   <span className="animate-pulse">PROCESSANDO_CONSULTA...</span>
                </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-dark-800 border-t border-slate-700">
            <div className="flex items-center gap-2 bg-dark-950 border border-slate-600 px-4 py-3 focus-within:border-primary-500 transition-colors">
              <span className="text-primary-500 font-mono">{'>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite o comando (ex: 'Listar experiência com PLC')"
                className="flex-1 bg-transparent text-white text-sm font-mono focus:outline-none placeholder:text-slate-600"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 text-slate-400 hover:text-primary-500 disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};