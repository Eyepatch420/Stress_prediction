import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bell, Moon, Mail, Shield, Trash2 } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved!",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground text-lg">
            Manage your account preferences and notification settings
          </p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Notifications</h2>
                <p className="text-sm text-muted-foreground">Manage how you receive updates</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts when stress risk is high</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Weekly wellbeing summary via email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Check-in Reminders</Label>
                  <p className="text-sm text-muted-foreground">Daily reminder to complete stress check-in</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Appearance */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Moon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Appearance</h2>
                <p className="text-sm text-muted-foreground">Customize your viewing experience</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark theme for reduced eye strain</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          {/* Privacy */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Privacy</h2>
                <p className="text-sm text-muted-foreground">Control your data and privacy</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Data Sharing for Research</Label>
                  <p className="text-sm text-muted-foreground">Allow anonymized data for improving predictions</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Share with Counselors</Label>
                  <p className="text-sm text-muted-foreground">Allow campus counselors to view your high-risk alerts</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          {/* Email Settings */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Email Preferences</h2>
                <p className="text-sm text-muted-foreground">Manage email communications</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Tips & Resources</Label>
                  <p className="text-sm text-muted-foreground">Receive helpful stress management content</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Product Updates</Label>
                  <p className="text-sm text-muted-foreground">Stay informed about new features</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="p-6 shadow-soft border-danger/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-danger/10 flex items-center justify-center">
                <Trash2 className="h-5 w-5 text-danger" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Danger Zone</h2>
                <p className="text-sm text-muted-foreground">Irreversible actions</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start text-danger border-danger/30 hover:bg-danger/10">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete All My Data
              </Button>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
