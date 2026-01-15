// components/custom/faq-button.tsx
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
  const [isMinimized, setIsMinimized] = useState(false);
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
      // Remove typing indicator
      setMessages(prev => prev.filter(msg => msg.id !== typingMessageId));
      
      // Add AI response
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
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Close chat when clicking outside
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
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Button
          onClick={toggleChat}
          className={cn(
            "h-14 w-14 rounded-full shadow-2xl p-0 relative",
            "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
            "hover:shadow-3xl hover:scale-105",
            "transition-all duration-300 border-2 border-white/20",
            "group"
          )}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageSquare className="h-6 w-6" />
            )}
          </motion.div>
          
          {/* Notification badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: messages.length > 2 ? 1 : 0 }}
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive flex items-center justify-center"
          >
            <span className="text-xs font-bold text-white">!</span>
          </motion.div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 right-0 px-3 py-2 rounded-lg bg-popover text-popover-foreground text-sm shadow-lg border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="flex items-center gap-2">
              <span>talk to daai</span>
            </div>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-popover rotate-45" />
          </div>
        </Button>
      </motion.div>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="floating-chat-container fixed bottom-24 right-6 z-50"
            initial={{ 
              opacity: 0, 
              scale: 0.2, 
              y: 100,
              x: -10, 
              transformOrigin: "bottom right"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              x: 0,
              height: isMinimized ? 'auto' : '500px',
              width: isMinimized ? '300px' : '380px'
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.2, 
              y: 100,
              x: -10,
              transformOrigin: "bottom right"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 350, 
              damping: 25,
              mass: 0.8
            }}
          >
            <div className={cn(
              "bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden flex flex-col",
              isMinimized ? "h-16" : "h-[500px]"
            )}>
              {/* Header - Always visible */}
              <div 
                className={cn(
                  "border-b bg-gradient-to-r from-primary/5 to-primary/10 p-4 cursor-pointer",
                  "flex items-center justify-between"
                )}
                onClick={() => isMinimized && setIsMinimized(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Daai Assistant</h3>
                    {!isMinimized && (
                      <p className="text-xs text-muted-foreground">
                        {messages[messages.length - 1]?.isTyping 
                          ? "AI is typing..." 
                          : "Online • Ask anything about data"}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages - Hidden when minimized */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex-1 overflow-hidden flex flex-col"
                  >
                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={cn(
                            "flex gap-3 group",
                            msg.isUser ? "flex-row-reverse" : "flex-row"
                          )}
                        >
                          {/* Avatar */}
                          <div className={cn(
                            "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                            msg.isUser 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-gradient-to-br from-primary/10 to-primary/5"
                          )}>
                            {msg.isUser ? 
                              <User className="h-4 w-4" /> : 
                              <Bot className="h-4 w-4" />
                            }
                          </div>

                          {/* Message Bubble */}
                          <div className="flex flex-col max-w-[75%]">
                            <div className={cn(
                              "rounded-2xl px-4 py-2.5",
                              msg.isUser
                                ? "bg-primary text-primary-foreground rounded-br-none"
                                : "bg-muted rounded-bl-none"
                            )}>
                              {msg.isTyping ? (
                                <div className="flex gap-1 items-center">
                                  <div className="h-2 w-2 rounded-full bg-current animate-pulse" />
                                  <div className="h-2 w-2 rounded-full bg-current animate-pulse delay-75" />
                                  <div className="h-2 w-2 rounded-full bg-current animate-pulse delay-150" />
                                </div>
                              ) : (
                                <p className="text-sm">{msg.text}</p>
                              )}
                            </div>
                            
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
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="border-t p-3">
                      <div className="flex items-end gap-2">
                        <div className="flex-1 relative">
                          <Input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask..."
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
                        <Button
                          size="icon"
                          onClick={handleSend}
                          disabled={!userInput.trim()}
                          className="h-10 w-10 rounded-full shrink-0"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimized State - Show last message */}
              {isMinimized && (
                <div className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm truncate text-muted-foreground">
                      {messages[messages.length - 1]?.isTyping 
                        ? "AI is typing..." 
                        : `Last: ${messages[messages.length - 1]?.text.substring(0, 40)}...`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingFAQButton;