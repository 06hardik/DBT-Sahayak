import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AISahayakChatProps {
  status: "yellow" | "red";
}

const AISahayakChat = ({ status }: AISahayakChatProps) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "It looks like there's an issue with your account. I am here to help. How can I assist you?",
    },
  ]);
  const { toast } = useToast();

  const suggestedPrompts = [
    "What should I tell the bank?",
    "What documents do I need?",
    "Draft an application for me.",
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { role: "user", content: message }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I understand your concern. Let me help you with that...",
        },
      ]);
    }, 1000);

    toast({
      title: "Message sent",
      description: "AI Sahayak is processing your request.",
    });
  };

  const handlePromptClick = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/20">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">AI Sahayak</CardTitle>
            <CardDescription>Your personal assistant for DBT account issues</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={() => handlePromptClick(prompt)}
                className="text-xs"
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Textarea
            placeholder="Type your question in any language..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[60px]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage} size="icon" className="h-[60px] w-[60px]">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AISahayakChat;
