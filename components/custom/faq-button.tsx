"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Copy,
  ThumbsUp,
  Smile,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FloatingFAQButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Array<{ 
    id: string; 
    text: string; 
    isUser: boolean; 
    timestamp: Date;
    isTyping?: boolean;
  }>>([
    { 
      id: '1', 
      text: "Hello! I'm your Daai assistant. How can I help you with your spreadsheet or data analysis today?", 
      isUser: false, 
      timestamp: new Date(Date.now() - 300000)
    },
    { 
      id: '2', 
      text: "Try asking me to 'clean this CSV file' or 'explain this formula'!", 
      isUser: false, 
      timestamp: new Date(Date.now() - 240000)
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessageId = `user-${Date.now()}`;
    const newMessages = [...messages, { 
      id: userMessageId, 
      text: userInput, 
      isUser: true, 
      timestamp: new Date()
    }];
    setMessages(newMessages);
    setUserInput('');

    // Show typing indicator
    const typingMessageId = `typing-${Date.now()}`;
    setMessages(prev => [...prev, { 
      id: typingMessageId, 
      text: '', 
      isUser: false, 
      timestamp: new Date(),
      isTyping: true
    }]);

    // Simulate AI response after a delay
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== typingMessageId));
      
      const responses = [
        `I can help with "${userInput}". For CSV cleaning, I'd recommend checking for duplicate rows first, then standardizing date formats.`,
        `For "${userInput}", try using the formula: =SUMIF(range, criteria). I can generate the exact formula if you share your data structure.`,
        `Regarding "${userInput}", Daai's AI can automatically detect patterns and suggest visualizations. Would you like me to analyze a sample?`,
        `I understand you need help with "${userInput}". Our AI can process that in seconds. Try uploading a file for instant analysis.`
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: `ai-${Date.now()}`,
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      }]);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.floating-chat-container') && !target.closest('.floating-button-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <motion.div 
        className="floating-button-container fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
      >
        <Button
          onClick={toggleChat}
          className={cn(
            "h-14 w-14 rounded-full shadow-2xl p-0 relative overflow-hidden",
            "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
            "hover:shadow-3xl hover:scale-110",
            "transition-all duration-300 border-2 border-white/20",
            "group"
          )}
        >
          <motion.div
            animate={{ 
              rotate: isOpen ? 90 : 0,
              scale: isOpen ? 0.9 : 1
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageSquare className="h-6 w-6" />
            )}
          </motion.div>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Notification badge */}
          <AnimatePresence>
            {!isOpen && messages.length > 2 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive flex items-center justify-center border-2 border-background"
              >
                <span className="text-xs font-bold text-white">!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Floating Chat Window */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="floating-chat-container fixed bottom-24 right-6 z-50 w-[380px]"
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              y: 20,
              transformOrigin: "bottom right"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              y: 20,
              transition: { duration: 0.2 }
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30
            }}
          >
            <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden flex flex-col h-[500px]">
              {/* Header */}
              <motion.div 
                className="border-b bg-gradient-to-r from-primary/5 to-primary/10 p-4 flex items-center justify-between"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <motion.div 
                      className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-background"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Daai Assistant</h3>
                    <p className="text-xs text-muted-foreground">
                      {messages[messages.length - 1]?.isTyping 
                        ? "AI is typing..." 
                        : "Online • Ask anything about data"}
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        delay: index * 0.05
                      }}
                      className={cn(
                        "flex gap-3 group",
                        msg.isUser ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      {/* Avatar */}
                      <motion.div 
                        className={cn(
                          "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                          msg.isUser 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-gradient-to-br from-primary/10 to-primary/5"
                        )}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {msg.isUser ? 
                          <User className="h-4 w-4" /> : 
                          <Bot className="h-4 w-4" />
                        }
                      </motion.div>

                      {/* Message Bubble */}
                      <div className="flex flex-col max-w-[75%]">
                        <motion.div 
                          className={cn(
                            "rounded-2xl px-4 py-2.5",
                            msg.isUser
                              ? "bg-primary text-primary-foreground rounded-br-none"
                              : "bg-muted rounded-bl-none"
                          )}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {msg.isTyping ? (
                            <div className="flex gap-1 items-center">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="h-2 w-2 rounded-full bg-current"
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.15
                                  }}
                                />
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm">{msg.text}</p>
                          )}
                        </motion.div>
                        
                        {/* Message actions */}
                        <div className={cn(
                          "flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity",
                          msg.isUser ? "justify-end" : "justify-start"
                        )}>
                          <span className="text-xs text-muted-foreground">
                            {formatTime(msg.timestamp)}
                          </span>
                          {!msg.isUser && !msg.isTyping && (
                            <>
                              <Button variant="ghost" size="icon" className="h-5 w-5">
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-5 w-5">
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <motion.div 
                className="border-t p-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-end gap-2">
                  <div className="flex-1 relative">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Ask anything..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      className="pr-10"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Smile className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="icon"
                      onClick={handleSend}
                      disabled={!userInput.trim()}
                      className="h-10 w-10 rounded-full shrink-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFAQButton;