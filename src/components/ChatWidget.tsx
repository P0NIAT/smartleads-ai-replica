import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [iconColor, setIconColor] = useState('text-beauty-pink');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your beauty assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setTimeout(() => {
          setShowPopup(true);
          // Auto-hide popup after 5 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 5000);
        }, 1000);
      }

      // Determine icon color based on background
      const currentSection = getCurrentSection();
      if (currentSection && (currentSection.includes('hero') || currentSection.includes('pricing') || currentSection.includes('footer'))) {
        setIconColor('text-white');
      } else {
        setIconColor('text-beauty-pink');
      }
    };

    const getCurrentSection = () => {
      const sections = document.querySelectorAll('section, header, footer');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          return section.className || section.tagName.toLowerCase();
        }
      }
      return '';
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      // Prepare conversation history for context
      const conversationHistory = messages
        .filter(msg => msg.id !== '1') // Skip initial greeting
        .map(msg => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.text
        }));

      const { data, error } = await supabase.functions.invoke('chat', {
        body: {
          message: currentMessage,
          messages: conversationHistory
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Popup Message */}
        {showPopup && (
          <div 
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-3 mb-2 max-w-xs animate-fade-in-up cursor-pointer"
            onClick={openChat}
            style={{ 
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' 
            }}
          >
            <div className="text-sm text-gray-700 font-medium">
              Hi! I'm your beauty assistant. How can I help you today?
            </div>
            {/* Arrow pointing to chat button */}
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        )}
        
        <Button
          onClick={openChat}
          className="w-16 h-16 rounded-full bg-white hover:bg-gray-50 shadow-lg transition-all duration-300 transform hover:scale-110 border-2 border-gray-100"
          size="icon"
          style={{ 
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' 
          }}
        >
          <MessageCircle size={28} className={iconColor} />
        </Button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat Container */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md h-96 flex flex-col animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-beauty-purple to-beauty-pink text-white rounded-t-lg">
              <h3 className="font-montserrat font-bold text-lg">Beauty Assistant</h3>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-gray-100 text-gray-800 ml-auto'
                        : 'bg-beauty-lavender text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-beauty-lavender text-white px-3 py-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!currentMessage.trim() || isLoading}
                  className="bg-beauty-pink hover:bg-beauty-pink/90 text-white px-3"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
