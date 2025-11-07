import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Trends = () => {
  // Mock data
  const stressData = [
    { date: "Week 1", stress: 45, workload: 30 },
    { date: "Week 2", stress: 52, workload: 40 },
    { date: "Week 3", stress: 68, workload: 65 },
    { date: "Week 4", stress: 65, workload: 60 },
    { date: "Week 5", stress: 58, workload: 50 },
    { date: "Week 6", stress: 72, workload: 75 },
  ];

  const gpaData = [
    { month: "Sep", gpa: 3.6, stress: 45 },
    { month: "Oct", gpa: 3.5, stress: 58 },
    { month: "Nov", gpa: 3.4, stress: 68 },
    { month: "Dec", gpa: 3.5, stress: 65 },
  ];

  const checkInFrequency = [
    { day: "Mon", count: 1 },
    { day: "Tue", count: 0 },
    { day: "Wed", count: 1 },
    { day: "Thu", count: 1 },
    { day: "Fri", count: 0 },
    { day: "Sat", count: 1 },
    { day: "Sun", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Your Trends & Analytics</h1>
          <p className="text-muted-foreground text-lg">
            Understand patterns in your stress levels and identify what affects your wellbeing
          </p>
        </div>

        <Tabs defaultValue="stress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="stress">Stress</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="stress" className="space-y-6">
            <Card className="p-6 shadow-soft">
              <h2 className="text-2xl font-semibold mb-4">Stress Level Over Time</h2>
              <p className="text-muted-foreground mb-6">6-week trend showing your stress and workload correlation</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={stressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="stress" 
                    stroke="hsl(var(--danger))" 
                    strokeWidth={3}
                    name="Stress Level"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="workload" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Workload"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 shadow-soft">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Average Stress</p>
                  <p className="text-3xl font-bold text-warning">60%</p>
                  <p className="text-xs text-muted-foreground mt-2">Last 6 weeks</p>
                </div>
              </Card>
              <Card className="p-6 shadow-soft">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Peak Stress Week</p>
                  <p className="text-3xl font-bold text-danger">72%</p>
                  <p className="text-xs text-muted-foreground mt-2">Week 6</p>
                </div>
              </Card>
              <Card className="p-6 shadow-soft">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Lowest Stress</p>
                  <p className="text-3xl font-bold text-success">45%</p>
                  <p className="text-xs text-muted-foreground mt-2">Week 1</p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <Card className="p-6 shadow-soft">
              <h2 className="text-2xl font-semibold mb-4">GPA vs. Stress Correlation</h2>
              <p className="text-muted-foreground mb-6">Track how your academic performance relates to stress levels</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={gpaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" domain={[3.0, 4.0]} />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="gpa" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={3}
                    name="GPA"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="stress" 
                    stroke="hsl(var(--danger))" 
                    strokeWidth={3}
                    name="Stress %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="p-6 shadow-soft">
              <h2 className="text-2xl font-semibold mb-4">Check-In Frequency</h2>
              <p className="text-muted-foreground mb-6">Your check-in activity over the past week</p>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={checkInFrequency}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} name="Check-ins" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="font-semibold mb-2">💪 Keep it up!</h3>
              <p className="text-sm text-muted-foreground">
                You've completed 5 check-ins this week. Regular check-ins help us provide more accurate predictions 
                and personalized support. Try to complete at least 3-4 check-ins per week for best results.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Trends;
