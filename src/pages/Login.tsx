import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Chrome,
  Linkedin,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation de connexion
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setNotification({
        type: 'success',
        message: 'Connexion réussie ! Redirection en cours...'
      });
      
      // En pratique, redirection vers le dashboard
      setTimeout(() => {
        console.log('Redirection vers dashboard');
      }, 1000);
      
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Identifiants incorrects. Veuillez réessayer.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // Simulation connexion sociale
    setTimeout(() => {
      setNotification({
        type: 'success',
        message: `Connexion ${provider} réussie !`
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-variant/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-smooth group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        {/* Login Card */}
        <Card className="glass-card hover-lift animate-scale-in">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gradient">
              Connexion à Investi
            </CardTitle>
            <p className="text-muted-foreground">
              Accédez à votre plateforme de levée de fonds
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Notification */}
            {notification && (
              <div className={`p-4 rounded-xl border animate-slide-up ${
                notification.type === 'success' 
                  ? 'bg-success/10 border-success/20 text-success' 
                  : 'bg-destructive/10 border-destructive/20 text-destructive'
              }`}>
                <div className="flex items-center">
                  {notification.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 mr-3" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-3" />
                  )}
                  <span className="text-sm font-medium">{notification.message}</span>
                </div>
              </div>
            )}

            {/* Social Login */}
            <div className="space-y-3">
              <Button 
                variant="outline"
                className="w-full glass-button group"
                onClick={() => handleSocialLogin('Google')}
                disabled={isLoading}
              >
                <Chrome className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Continuer avec Google
              </Button>
              
              <Button 
                variant="outline"
                className="w-full glass-button group"
                onClick={() => handleSocialLogin('LinkedIn')}
                disabled={isLoading}
              >
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Continuer avec LinkedIn
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <Badge variant="secondary" className="px-3 bg-background border">ou</Badge>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Adresse email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="pl-10 glass-button border-glass-border focus:border-primary/50 focus:ring-primary/20"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 glass-button border-glass-border focus:border-primary/50 focus:ring-primary/20"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-glass-border" />
                  <span className="text-sm text-muted-foreground">Se souvenir de moi</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:text-primary-variant transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Connexion...
                  </div>
                ) : (
                  <>
                    Se connecter
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center pt-4">
              <p className="text-muted-foreground text-sm">
                Pas encore de compte ?{' '}
                <Link 
                  to="/register" 
                  className="text-primary hover:text-primary-variant font-medium transition-colors"
                >
                  Créer un compte
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Badge */}
        <div className="mt-6 text-center">
          <Badge variant="outline" className="glass-button border-primary/30">
            <Lock className="w-3 h-3 mr-1" />
            Connexion sécurisée SSL
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Login;