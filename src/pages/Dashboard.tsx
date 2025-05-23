
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const navigate = useNavigate();

  const customerData = {
    name: "Jane Doe",
    phone: "+254712345678",
    visits: 8,
    points: 240,
    nextReward: 10,
    memberSince: "March 2024"
  };

  const recentVisits = [
    { date: "2024-01-15", service: "Haircut & Style", points: 30, cost: "KSh 1,200" },
    { date: "2024-01-08", service: "Manicure", points: 25, cost: "KSh 1,000" },
    { date: "2024-01-02", service: "Facial Treatment", points: 45, cost: "KSh 2,500" },
    { date: "2023-12-20", service: "Pedicure", points: 35, cost: "KSh 1,500" }
  ];

  const availableRewards = [
    { title: "Free Haircut", pointsRequired: 300, description: "Get a complimentary haircut on your next visit" },
    { title: "20% Off Any Service", pointsRequired: 200, description: "Enjoy 20% discount on any service" },
    { title: "Free Manicure", pointsRequired: 250, description: "Complimentary manicure service" }
  ];

  const progressToNextReward = (customerData.visits / customerData.nextReward) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back, {customerData.name}! 👋
          </h1>
          <p className="text-slate-600">
            Member since {customerData.memberSince} • {customerData.phone}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-teal-100">Total Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{customerData.visits}</div>
              <p className="text-teal-100 text-sm">Keep visiting to earn more rewards!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-orange-100">Loyalty Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{customerData.points}</div>
              <p className="text-orange-100 text-sm">Use points for amazing rewards!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-slate-700">Next Reward</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 mb-2">
                {customerData.nextReward - customerData.visits} visits away
              </div>
              <Progress value={progressToNextReward} className="h-2" />
              <p className="text-slate-600 text-sm mt-2">
                {Math.round(progressToNextReward)}% complete
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Visits */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Recent Visits</CardTitle>
              <CardDescription>Your latest salon visits and earned points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentVisits.map((visit, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{visit.service}</div>
                    <div className="text-sm text-slate-600">{visit.date}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800 mb-1">
                      +{visit.points} pts
                    </Badge>
                    <div className="text-sm text-slate-600">{visit.cost}</div>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                View All Visits
              </Button>
            </CardContent>
          </Card>

          {/* Available Rewards */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Available Rewards</CardTitle>
              <CardDescription>Redeem your points for these amazing rewards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableRewards.map((reward, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-slate-900">{reward.title}</div>
                    <Badge 
                      variant={customerData.points >= reward.pointsRequired ? "default" : "secondary"}
                      className={customerData.points >= reward.pointsRequired ? 
                        "bg-teal-600 hover:bg-teal-700" : "bg-slate-300 text-slate-600"}
                    >
                      {reward.pointsRequired} pts
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{reward.description}</p>
                  <Button 
                    size="sm" 
                    disabled={customerData.points < reward.pointsRequired}
                    className="bg-orange-500 hover:bg-orange-600 text-white disabled:bg-slate-300"
                  >
                    {customerData.points >= reward.pointsRequired ? "Redeem" : "Need More Points"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8"
              onClick={() => navigate('/services')}
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8"
            >
              Refer a Friend
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
