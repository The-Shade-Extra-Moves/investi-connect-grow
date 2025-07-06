import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  ArrowLeft,
  Mail, 
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setNotification({
        type: 'success',
        message: 'Email de réinitialisation envoyé avec succès !'
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Erreur lors de l\'envoi. Veuillez réessayer.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <div className="w-full max-w-md relative z-10">
          <Card className="glass-card hover-lift animate-scale-in">
            <CardContent className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gradient">Email envoyé !</h2>
                <p className="text-muted-foreground">
                  Vérifiez votre boîte mail et suivez les instructions pour réinitialiser votre mot de passe.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/login')}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                >
                  Retourner à la connexion
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="w-full glass-button"
                >
                  Renvoyer l'email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <Link to="/login" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-smooth group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Retour à la connexion
        </Link>

        <Card className="glass-card hover-lift animate-scale-in">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gradient">
              Mot de passe oublié ?
            </CardTitle>
            <p className="text-muted-foreground">
              Saisissez votre email pour recevoir un lien de réinitialisation
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  <>
                    Envoyer le lien de réinitialisation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center pt-4">
              <p className="text-muted-foreground text-sm">
                Vous vous souvenez de votre mot de passe ?{' '}
                <Link 
                  to="/login" 
                  className="text-primary hover:text-primary-variant font-medium transition-colors"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Badge variant="outline" className="glass-button border-primary/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Processus sécurisé
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;