import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Moon, 
  Activity, 
  Users, 
  BookOpen, 
  Heart,
  Coffee,
  Wind
} from "lucide-react";

const Tips = () => {
  const categories = [
    {
      id: "immediate",
      label: "Immediate Relief",
      icon: <Wind className="h-5 w-5" />,
      tips: [
        {
          title: "4-7-8 Breathing",
          description: "Breathe in for 4 counts, hold for 7, exhale for 8. Repeat 4 times.",
          time: "2 min",
          icon: <Wind className="h-6 w-6" />,
        },
        {
          title: "5-4-3-2-1 Grounding",
          description: "Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
          time: "3 min",
          icon: <Brain className="h-6 w-6" />,
        },
        {
          title: "Quick Walk",
          description: "Take a 5-10 minute walk outside. Fresh air and movement reduce cortisol.",
          time: "5-10 min",
          icon: <Activity className="h-6 w-6" />,
        },
      ]
    },
    {
      id: "daily",
      label: "Daily Habits",
      icon: <Heart className="h-5 w-5" />,
      tips: [
        {
          title: "Sleep Schedule",
          description: "Maintain consistent sleep and wake times. Aim for 7-9 hours per night.",
          time: "Daily",
          icon: <Moon className="h-6 w-6" />,
        },
        {
          title: "Break Technique",
          description: "Use Pomodoro: 25 min focused work, 5 min break. After 4 cycles, take 15-30 min break.",
          time: "Daily",
          icon: <Coffee className="h-6 w-6" />,
        },
        {
          title: "Physical Activity",
          description: "30 minutes of moderate exercise daily. Even a brisk walk helps.",
          time: "30 min",
          icon: <Activity className="h-6 w-6" />,
        },
      ]
    },
    {
      id: "academic",
      label: "Academic Strategies",
      icon: <BookOpen className="h-5 w-5" />,
      tips: [
        {
          title: "Time Blocking",
          description: "Schedule specific time blocks for each task. Include buffer time between tasks.",
          time: "Weekly",
          icon: <BookOpen className="h-6 w-6" />,
        },
        {
          title: "Start Early",
          description: "Begin assignments as soon as they're assigned. Break large projects into smaller tasks.",
          time: "Ongoing",
          icon: <Brain className="h-6 w-6" />,
        },
        {
          title: "Office Hours",
          description: "Use professor/TA office hours when confused. Don't wait until it's too late.",
          time: "Weekly",
          icon: <Users className="h-6 w-6" />,
        },
      ]
    },
    {
      id: "social",
      label: "Social Support",
      icon: <Users className="h-5 w-5" />,
      tips: [
        {
          title: "Talk to Someone",
          description: "Share your feelings with a trusted friend, family member, or counselor.",
          time: "As needed",
          icon: <Users className="h-6 w-6" />,
        },
        {
          title: "Study Groups",
          description: "Join or form study groups. Collaborative learning reduces stress and improves understanding.",
          time: "Weekly",
          icon: <Users className="h-6 w-6" />,
        },
        {
          title: "Campus Resources",
          description: "Visit the counseling center, wellness programs, or peer support groups.",
          time: "As needed",
          icon: <Heart className="h-6 w-6" />,
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Stress Management Tips</h1>
          <p className="text-muted-foreground text-lg">
            Evidence-based strategies to help you manage stress and prevent burnout
          </p>
        </div>

        <Tabs defaultValue="immediate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {categories.map(cat => (
              <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                {cat.icon}
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              {category.tips.map((tip, idx) => (
                <Card key={idx} className="p-6 shadow-soft hover:shadow-glow transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {tip.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{tip.title}</h3>
                        <Badge variant="outline">{tip.time}</Badge>
                      </div>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-8 p-6 bg-danger/5 border-danger/20">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Heart className="h-5 w-5 text-danger" />
            Need Immediate Help?
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            If you're experiencing a mental health crisis or having thoughts of self-harm:
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>National Crisis Hotline:</strong> Call or text 988</p>
            <p><strong>Crisis Text Line:</strong> Text "HELLO" to 741741</p>
            <p><strong>Campus Counseling:</strong> Visit your student health center</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tips;
