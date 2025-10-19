import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AISahayakChatProps {
  status?: "yellow" | "red";
}

const AISahayakChat = ({ status }: AISahayakChatProps) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "It looks like there's an issue with your account. I am here to help. How can I assist you?",
    },
  ]);
  const { toast } = useToast();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom when chat history changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const suggestedPrompts = [
    "What should I tell the bank?",
    "What documents do I need?",
    "Draft an application for me.",
  ];

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = { role: "user", content: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // **REAL API CALL**
      const response = await fetch('/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          status: status, // Send the user's DBT status for context
          history: chatHistory // Send previous messages for context
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await response.json();
      const assistantMessage = { role: "assistant", content: data.data.reply };
      
      setChatHistory((prev) => [...prev, assistantMessage]);

    } catch (error) {
      const errorMessage = { role: "assistant", content: "Sorry, I'm having trouble connecting. Please check your internet and try again." };
      setChatHistory((prev) => [...prev, errorMessage]);
      toast({
        title: "Error",
        description: "Could not get a response from the assistant.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <Card className="border-blue-200 shadow-xl mt-8">
      <CardHeader className="bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <CardTitle className="text-xl text-slate-900">AI Sahayak</CardTitle>
            <CardDescription>Your personal assistant for DBT account issues</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div ref={chatContainerRef} className="space-y-4 h-72 overflow-y-auto p-4 border rounded-lg bg-white">
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"><Bot size={16} className="text-slate-600"/></div>}
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
               <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"><Bot size={16} className="text-slate-600"/></div>
              <div className="bg-slate-200 text-slate-800 p-3 rounded-lg flex items-center space-x-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-0"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.map((prompt, idx) => (
            <Button
              key={idx}
              variant="outline"
              size="sm"
              onClick={() => handlePromptClick(prompt)}
              className="text-xs"
              disabled={isLoading}
            >
              {prompt}
            </Button>
          ))}
        </div>

        <div className="flex gap-2">
          <Textarea
            placeholder="Type your question in any language..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[60px]"
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage} size="icon" className="h-[60px] w-[60px]" disabled={isLoading}>
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AISahayakChat;