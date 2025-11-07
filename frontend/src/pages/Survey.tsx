import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const Survey = () => {
  const { toast } = useToast();
  const [responses, setResponses] = useState({
    stress: [5],
    sleep: [5],
    motivation: [5],
    overwhelmed: [5],
    support: [5],
  });

  const questions = [
    {
      id: "stress",
      question: "How stressed have you felt this week?",
      lowLabel: "Not at all",
      highLabel: "Extremely",
    },
    {
      id: "sleep",
      question: "How would you rate your sleep quality?",
      lowLabel: "Very poor",
      highLabel: "Excellent",
    },
    {
      id: "motivation",
      question: "How motivated have you felt?",
      lowLabel: "Not motivated",
      highLabel: "Very motivated",
    },
    {
      id: "overwhelmed",
      question: "How overwhelmed do you feel by your workload?",
      lowLabel: "Not at all",
      highLabel: "Completely",
    },
    {
      id: "support",
      question: "How supported do you feel?",
      lowLabel: "Not supported",
      highLabel: "Very supported",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Check-in submitted!",
      description: "Your responses help us provide better predictions and support.",
    });
  };

  const handleSliderChange = (id: string, value: number[]) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Quick Stress Check-In</h1>
          <p className="text-muted-foreground text-lg">
            Answer these 5 quick questions to help us understand how you're feeling
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-8 shadow-soft mb-6">
            <div className="space-y-8">
              {questions.map((q, idx) => (
                <div key={q.id} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {idx + 1}
                    </span>
                    <Label className="text-lg font-medium pt-1">{q.question}</Label>
                  </div>
                  
                  <div className="pl-11 space-y-3">
                    <Slider
                      value={responses[q.id as keyof typeof responses]}
                      onValueChange={(value) => handleSliderChange(q.id, value)}
                      max={10}
                      min={1}
                      step={1}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{q.lowLabel}</span>
                      <span className="font-semibold text-foreground">
                        {responses[q.id as keyof typeof responses][0]}/10
                      </span>
                      <span>{q.highLabel}</span>
                    </div>
                  </div>
                  
                  {idx < questions.length - 1 && <div className="border-t border-border mt-6" />}
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Takes less than 2 minutes • Completely confidential
            </p>
            <Button type="submit" size="lg" className="gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Submit Check-In
            </Button>
          </div>
        </form>

        <Card className="mt-8 p-6 bg-secondary/20 border-secondary">
          <h3 className="font-semibold mb-2">💡 Why these questions?</h3>
          <p className="text-sm text-muted-foreground">
            These questions help our AI model understand your current wellbeing state. 
            Regular check-ins improve prediction accuracy and help identify patterns in your stress levels.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Survey;
