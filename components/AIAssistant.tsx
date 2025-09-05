
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { askAssistant } from '../services/geminiService';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

interface AIAssistantProps {
    cvContext: string;
    onTrackClick: (elementName: string) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ cvContext, onTrackClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: '¡Hola! Soy el asistente de IA de Fermin. ¿En qué puedo ayudarte sobre su currículum?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const toggleOpen = useCallback(() => {
      setIsOpen(prev => {
          if (!prev) { // If opening for the first time
              onTrackClick('open_ai_assistant');
          }
          return !prev;
      });
    }, [onTrackClick]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        onTrackClick(`ask_ai_assistant_question`);

        try {
            const aiResponse = await askAssistant(input, cvContext);
            const aiMessage: Message = { sender: 'ai', text: aiResponse };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage: Message = { sender: 'ai', text: 'Hubo un error al procesar tu pregunta.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 invisible' : 'opacity-100 scale-100 visible'}`}>
                <button
                    onClick={toggleOpen}
                    className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 animate-pulse"
                    aria-label="Open AI Assistant"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="8" y="12" width="8" height="8" rx="2"/><path d="M8 12v-2a2 2 0 0 1 2-2h4"/></svg>
                </button>
            </div>

            <div className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full h-full sm:w-96 sm:h-[600px] bg-slate-800 rounded-t-lg sm:rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full sm:translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-slate-900 rounded-t-lg">
                    <h3 className="text-lg font-bold text-white">Asistente IA</h3>
                    <button onClick={toggleOpen} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-gray-200'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-lg bg-slate-700 text-gray-200 flex items-center space-x-2">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-0"></span>
                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-150"></span>
                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Haz una pregunta..."
                            className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            disabled={isLoading}
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed" disabled={isLoading || !input.trim()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AIAssistant;
