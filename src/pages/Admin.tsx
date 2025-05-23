
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const Admin = () => {
  const [searchPhone, setSearchPhone] = useState("");
  const { toast } = useToast();

  const todayStats = {
    visits: 15,
    revenue: 18500,
    newCustomers: 3,
    loyaltyRedemptions: 2
  };

  const recentCustomers = [
    { name: "Jane Doe", phone: "+254712345678", visits: 8, points: 240, lastVisit: "Today" },
    { name: "John Smith", phone: "+254723456789", visits: 12, points: 360, lastVisit: "Yesterday" },
    { name: "Mary Johnson", phone: "+254734567890", visits: 5, points: 150, lastVisit: "3 days ago" },
    { name: "Peter Kamau", phone: "+254745678901", visits: 20, points: 600, lastVisit: "1 week ago" }
  ];

  const handleLogVisit = () => {
    if (!searchPhone) {
      toast({
        title: "Error",
        description: "Please enter a customer phone number",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Visit Logged Successfully",
      description: "Customer visit and points have been recorded",
    });
    setSearchPhone("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Manage your salon operations and customer loyalty program</p>
        </div>

        {/* Today's Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Today's Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{todayStats.visits}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Revenue Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">KSh {todayStats.revenue.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">New Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{todayStats.newCustomers}</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Rewards Redeemed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{todayStats.loyaltyRedemptions}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="log-visit" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="log-visit">Log Visit</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="log-visit">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Log Customer Visit</CardTitle>
                <CardDescription>Record a customer visit and automatically award loyalty points</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-phone">Customer Phone Number</Label>
                    <Input
                      id="customer-phone"
                      placeholder="+254712345678"
                      value={searchPhone}
                      onChange={(e) => setSearchPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Provided</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="haircut">Haircut</SelectItem>
                        <SelectItem value="manicure">Manicure</SelectItem>
                        <SelectItem value="pedicure">Pedicure</SelectItem>
                        <SelectItem value="facial">Facial Treatment</SelectItem>
                        <SelectItem value="massage">Massage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount Paid (KSh)</Label>
                    <Input id="amount" placeholder="1500" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="points">Points to Award</Label>
                    <Input id="points" placeholder="30" type="number" />
                  </div>
                </div>
                <Button onClick={handleLogVisit} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Log Visit & Award Points
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>View and manage your loyal customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCustomers.map((customer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">{customer.name}</div>
                        <div className="text-sm text-slate-600">{customer.phone}</div>
                        <div className="text-xs text-slate-500">Last visit: {customer.lastVisit}</div>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                          {customer.visits} visits
                        </Badge>
                        <div className="text-sm text-slate-600">{customer.points} points</div>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Loyalty Program Settings</CardTitle>
                  <CardDescription>Configure your loyalty program rules and rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="points-rate">Points per KSh Spent</Label>
                      <Input id="points-rate" placeholder="1" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="free-visit">Free Visit After (visits)</Label>
                      <Input id="free-visit" placeholder="10" type="number" />
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage customer notifications and marketing messages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Send Promotional Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    Notify About Rewards
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
