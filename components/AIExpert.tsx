import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIExpert: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'أهلاً بكِ عزيزتي! أنا خبيرة الجمال في "السدر النقي". يسعدني مساعدتك في كل ما يخص العناية بشعرك وبشرتك باستخدام السدر. هل تبحثين عن وصفة لتكثيف الشعر أو ماسك لنضارة الوجه؟',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for API (excluding the last user message we just added locally for optimistic UI)
      const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await getGeminiResponse(userMsg.text, historyForApi);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: 'عذراً، واجهت مشكلة بسيطة. هل يمكنك إعادة السؤال؟', 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-100px)] flex flex-col">
      <div className="text-center mb-8">
         <div className="inline-flex items-center justify-center p-3 bg-nature-100 rounded-full mb-4">
            <Sparkles className="text-nature-600 h-8 w-8" />
         </div>
        <h2 className="text-3xl font-extrabold text-gray-900">خبيرة الجمال الذكية</h2>
        <p className="mt-2 text-gray-600">
          استشيري الذكاء الاصطناعي للحصول على أفضل الخلطات والروتين المناسب لشعرك وبشرتك.
        </p>
      </div>

      <div className="flex-grow bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-nature-100">
        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-gray-200 ml-3' : 'bg-nature-500 mr-3'
                }`}>
                  {msg.role === 'user' ? <User size={20} className="text-gray-600" /> : <Bot size={20} className="text-white" />}
                </div>
                
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-white text-gray-800 rounded-tr-none' 
                    : 'bg-nature-600 text-white rounded-tl-none'
                }`}>
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                  <span className={`text-[10px] block mt-2 opacity-70 ${msg.role === 'user' ? 'text-left' : 'text-right'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-end w-full">
               <div className="flex flex-row-reverse max-w-[80%]">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-nature-500 mr-3 flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center">
                    <Loader2 className="animate-spin text-nature-600 h-5 w-5" />
                    <span className="mr-2 text-sm text-gray-500">جاري الكتابة...</span>
                  </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2 space-x-reverse bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-nature-400 focus-within:ring-1 focus-within:ring-nature-400 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتبي سؤالك هنا... (مثلاً: طريقة عمل ماسك السدر للشعر الجاف؟)"
              className="flex-grow bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400 py-2 outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`p-2 rounded-full transition-colors ${
                input.trim() && !isLoading 
                  ? 'bg-nature-600 text-white hover:bg-nature-700 shadow-md' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-gray-400">
              الردود يتم توليدها بواسطة الذكاء الاصطناعي للمساعدة في الاستخدام التجميلي.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};