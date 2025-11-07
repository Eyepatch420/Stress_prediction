import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI wellness assistant. I'm here to support you with stress management, study tips, and general wellbeing. How are you feeling today?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response (in production, this would call an AI API)
    setTimeout(() => {
      const responses = [
        "I understand you're feeling stressed. Let's work through this together. Can you tell me more about what's bothering you?",
        "That sounds challenging. Remember, it's okay to take breaks. Have you tried the 4-7-8 breathing technique?",
        "It's great that you're reaching out. Based on what you've shared, I'd recommend checking out the stress management tips in your Tips section.",
        "I hear you. Many students experience similar feelings. Would it help to break down your tasks into smaller, manageable steps?",
      ];
      const aiMessage: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    "I'm feeling overwhelmed",
    "Help me prioritize tasks",
    "I can't focus on studying",
    "I'm not sleeping well",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">AI Wellness Support</h1>
          <p className="text-muted-foreground text-lg">
            Chat with our AI assistant for personalized stress management support
          </p>
        </div>

        <Card className="shadow-soft overflow-hidden">
          <div className="bg-gradient-hero p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-semibold">Wellness AI Assistant</h2>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>Online & ready to help</span>
                </div>
              </div>
            </div>
          </div>

          <ScrollArea className="h-[500px] p-6">
            <div className="space-y-6">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="flex-shrink-0">
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t border-border p-4 bg-muted/30">
            {messages.length <= 1 && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Quick prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => setInput(prompt)}
                      className="text-xs"
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="mt-6 p-4 bg-accent/10 border-accent">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This AI assistant provides general wellness support and stress management tips. 
            For serious mental health concerns, please contact a licensed professional or your campus counseling center.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
