
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && password) {
      toast({
        title: "Login Successful",
        description: "Welcome back to SalonLoyalty!",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter your phone number and password.",
        variant: "destructive",
      });
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && adminCode) {
      toast({
        title: "Admin Login Successful",
        description: "Welcome to the admin panel!",
      });
      navigate('/admin');
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter your phone number and admin code.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-600">Sign in to access your loyalty account</p>
          </div>

          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="customer" className="text-sm">Customer</TabsTrigger>
              <TabsTrigger value="admin" className="text-sm">Shop Owner</TabsTrigger>
            </TabsList>

            <TabsContent value="customer">
              <Card className="border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl text-center">Customer Login</CardTitle>
                  <CardDescription className="text-center">
                    Enter your phone number to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCustomerLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g., +254712345678"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border-slate-300 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-slate-300 focus:border-teal-500"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2"
                    >
                      Sign In
                    </Button>
                    <div className="text-center">
                      <button 
                        type="button"
                        className="text-sm text-teal-600 hover:text-teal-700"
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card className="border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl text-center">Shop Owner Login</CardTitle>
                  <CardDescription className="text-center">
                    Access your shop's admin panel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-phone">Phone Number</Label>
                      <Input
                        id="admin-phone"
                        type="tel"
                        placeholder="e.g., +254712345678"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border-slate-300 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-code">Admin Code</Label>
                      <Input
                        id="admin-code"
                        type="password"
                        placeholder="Enter your admin code"
                        value={adminCode}
                        onChange={(e) => setAdminCode(e.target.value)}
                        className="border-slate-300 focus:border-teal-500"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2"
                    >
                      Access Admin Panel
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
