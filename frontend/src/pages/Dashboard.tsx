import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  TrendingDown, 
  Calendar, 
  BookOpen, 
  FileText,
  AlertCircle,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - would come from API
  const riskLevel: "low" | "medium" | "high" = "medium";
  const riskScore = 65;
  const topFactors = [
    { factor: "3 assignments due this week", impact: "high" },
    { factor: "Midterm exams approaching", impact: "medium" },
    { factor: "GPA slightly below target", impact: "medium" }
  ];
  
  const upcomingTasks = [
    { type: "Assignment", title: "Data Structures Project", due: "2 days", course: "CS 201" },
    { type: "Exam", title: "Calculus Midterm", due: "5 days", course: "MATH 101" },
    { type: "Assignment", title: "Research Paper Draft", due: "1 week", course: "ENG 102" },
  ];

  const getRiskStyles = (level: "low" | "medium" | "high") => {
    if (level === "low") return {
      border: "border-success",
      text: "text-success",
      icon: <CheckCircle2 className="h-8 w-8" />,
      label: "Low Risk"
    };
    if (level === "medium") return {
      border: "border-warning",
      text: "text-warning",
      icon: <AlertCircle className="h-8 w-8" />,
      label: "Moderate Risk"
    };
    return {
      border: "border-danger",
      text: "text-danger",
      icon: <AlertCircle className="h-8 w-8" />,
      label: "High Risk"
    };
  };

  const riskStyles = getRiskStyles(riskLevel);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground text-lg">Here's your stress & wellbeing overview</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Risk Indicator */}
          <Card className={`lg:col-span-2 p-8 shadow-soft border-l-4 ${riskStyles.border}`}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Current Stress Level</h2>
                <p className="text-muted-foreground">Based on your latest data and check-ins</p>
              </div>
              <div className={riskStyles.text}>
                {riskStyles.icon}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-3xl font-bold ${riskStyles.text}`}>{riskStyles.label}</span>
                <span className="text-2xl font-semibold text-muted-foreground">{riskScore}%</span>
              </div>
              <Progress value={riskScore} className="h-3" />
            </div>

            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Your stress levels are elevated this week. Consider reviewing the recommended tips and taking breaks.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="font-semibold mb-3">Top Contributing Factors</h3>
              <div className="space-y-2">
                {topFactors.map((item, idx) => {
                  const isHigh = item.impact === 'high';
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <TrendingDown className={isHigh ? 'h-5 w-5 text-danger' : 'h-5 w-5 text-warning'} />
                      <span className="flex-1">{item.factor}</span>
                      <span className={isHigh ? 'text-sm px-2 py-1 rounded bg-danger/10 text-danger' : 'text-sm px-2 py-1 rounded bg-warning/10 text-warning'}>
                        {item.impact}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/survey">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Take Quick Check-In
                </Button>
              </Link>
              <Link to="/tips">
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Stress Tips
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button className="w-full justify-start" variant="outline">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Talk to AI Support
                </Button>
              </Link>
              <Link to="/trends">
                <Button className="w-full justify-start" variant="outline">
                  <TrendingDown className="mr-2 h-4 w-4" />
                  View Trends
                </Button>
              </Link>
            </div>
          </Card>

          {/* Upcoming Workload */}
          <Card className="lg:col-span-3 p-8 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Upcoming Workload</h2>
                <p className="text-muted-foreground">Assignments and exams in the next 2 weeks</p>
              </div>
              <Calendar className="h-6 w-6 text-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {upcomingTasks.map((task, idx) => (
                <div key={idx} className="p-4 border border-border rounded-xl hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${task.type === 'Exam' ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary'}`}>
                      {task.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{task.course}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{task.title}</h3>
                  <p className="text-sm text-muted-foreground">Due in {task.due}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="ghost" className="gap-2">
                View Full Calendar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
