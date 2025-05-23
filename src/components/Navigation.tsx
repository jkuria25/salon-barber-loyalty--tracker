
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-slate-900 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-teal-600">Salon</span>Loyalty
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/services')}
              className={`text-slate-700 hover:text-teal-600 transition-colors ${
                location.pathname === '/services' ? 'text-teal-600 font-semibold' : ''
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className={`text-slate-700 hover:text-teal-600 transition-colors ${
                location.pathname === '/dashboard' ? 'text-teal-600 font-semibold' : ''
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/admin')}
              className={`text-slate-700 hover:text-teal-600 transition-colors ${
                location.pathname === '/admin' ? 'text-teal-600 font-semibold' : ''
              }`}
            >
              Admin
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {location.pathname !== '/login' && (
              <Button 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
