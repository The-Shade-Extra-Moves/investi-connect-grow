import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <Card className="glass-card max-w-md w-full animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-gradient mb-4">404</div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Page introuvable</h1>
            <p className="text-muted-foreground">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/')}
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="w-full glass-button"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Page précédente
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-glass-border">
            <p className="text-sm text-muted-foreground mb-2">Page demandée :</p>
            <code className="text-xs bg-background/50 px-2 py-1 rounded text-primary">
              {location.pathname}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
