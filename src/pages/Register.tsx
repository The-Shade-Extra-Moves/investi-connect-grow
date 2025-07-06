import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight, 
  ArrowLeft,
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User,
  Building,
  Globe,
  Upload,
  Video,
  Brain,
  CheckCircle,
  Users,
  TrendingUp,
  Zap,
  Play,
  FileText,
  Target,
  Euro
} from 'lucide-react';
import { Link } from 'react-router-dom';

type UserRole = 'entrepreneur' | 'investor';

interface FormData {
  // Step 1
  role: UserRole | null;
  
  // Step 2
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  company: string;
  website: string;
  
  // Step 3 - Onboarding
  projectName: string;
  sector: string;
  description: string;
  stage: string;
  fundingGoal: string;
  files: {
    pitch: File | null;
    businessPlan: File | null;
    financial: File | null;
  };
  videoUrl: string;
  objectives: string[];
}

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    role: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    website: '',
    projectName: '',
    sector: '',
    description: '',
    stage: '',
    fundingGoal: '',
    files: {
      pitch: null,
      businessPlan: null,
      financial: null
    },
    videoUrl: '',
    objectives: []
  });

  const sectors = [
    'FinTech', 'HealthTech', 'EdTech', 'GreenTech', 'E-commerce', 
    'SaaS', 'IoT', 'AI/ML', 'Blockchain', 'Marketplace', 'Autre'
  ];

  const stages = [
    'Idée', 'Prototype', 'MVP', 'Première vente', 'Croissance', 'Scale-up'
  ];

  const objectiveOptions = [
    'Lever des fonds', 'Trouver des associés', 'Développer le réseau',
    'Obtenir des conseils', 'Valider le marché', 'Accélérer la croissance'
  ];

  const progress = (currentStep / 3) * 100;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleFileUpload = (type: keyof FormData['files'], file: File) => {
    setFormData(prev => ({
      ...prev,
      files: {
        ...prev.files,
        [type]: file
      }
    }));
  };

  const toggleObjective = (objective: string) => {
    setFormData(prev => ({
      ...prev,
      objectives: prev.objectives.includes(objective)
        ? prev.objectives.filter(obj => obj !== objective)
        : [...prev.objectives, objective]
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulation d'inscription
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(4); // Success step
    } catch (error) {
      console.error('Erreur inscription:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const canProceedStep2 = formData.firstName && formData.lastName && formData.email && 
                          formData.password && formData.password === formData.confirmPassword;

  const canProceedStep3 = formData.projectName && formData.sector && formData.description;

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-smooth group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        {/* Progress Bar */}
        {currentStep <= 3 && (
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Étape {currentStep} sur 3
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <Card className="glass-card hover-lift animate-scale-in">
          {/* Step 1: Role Selection */}
          {currentStep === 1 && (
            <>
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gradient">
                  Quel est votre profil ?
                </CardTitle>
                <p className="text-muted-foreground">
                  Choisissez votre rôle pour personnaliser votre expérience
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData(prev => ({...prev, role: 'entrepreneur'}))}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-elegant ${
                      formData.role === 'entrepreneur' 
                        ? 'border-primary bg-primary/10 shadow-glow' 
                        : 'border-glass-border glass-card hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Entrepreneur</h3>
                        <p className="text-sm text-muted-foreground">Je cherche des investisseurs</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Présenter mon projet
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Matching IA avec investisseurs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Coaching personnalisé
                      </li>
                    </ul>
                  </button>

                  <button
                    onClick={() => setFormData(prev => ({...prev, role: 'investor'}))}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-elegant ${
                      formData.role === 'investor' 
                        ? 'border-primary bg-primary/10 shadow-glow' 
                        : 'border-glass-border glass-card hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Investisseur</h3>
                        <p className="text-sm text-muted-foreground">Je recherche des projets</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Découvrir des projets qualifiés
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Outils d'analyse avancés
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Réseau d'investisseurs
                      </li>
                    </ul>
                  </button>
                </div>

                <Button 
                  onClick={handleNext}
                  disabled={!formData.role}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group mt-6"
                >
                  Continuer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </>
          )}

          {/* Step 2: User Information */}
          {currentStep === 2 && (
            <>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gradient">
                  Informations personnelles
                </CardTitle>
                <p className="text-muted-foreground">
                  Créons votre compte Investi
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        placeholder="Votre prénom"
                        className="pl-10"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        placeholder="Votre nom"
                        className="pl-10"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData(prev => ({...prev, confirmPassword: e.target.value}))}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {formData.role === 'entrepreneur' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="company"
                          placeholder="Nom de votre entreprise"
                          className="pl-10"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Site web</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="website"
                          placeholder="https://votre-site.com"
                          className="pl-10"
                          value={formData.website}
                          onChange={(e) => setFormData(prev => ({...prev, website: e.target.value}))}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={handlePrevious} className="glass-button">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button 
                    onClick={handleNext}
                    disabled={!canProceedStep2}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Onboarding (Entrepreneur only) */}
          {currentStep === 3 && formData.role === 'entrepreneur' && (
            <>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gradient">
                  Présentez votre projet
                </CardTitle>
                <p className="text-muted-foreground">
                  Aidez-nous à mieux comprendre votre projet
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Nom du projet *</Label>
                    <Input
                      id="projectName"
                      placeholder="Nom de votre projet"
                      value={formData.projectName}
                      onChange={(e) => setFormData(prev => ({...prev, projectName: e.target.value}))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sector">Secteur *</Label>
                    <select
                      id="sector"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.sector}
                      onChange={(e) => setFormData(prev => ({...prev, sector: e.target.value}))}
                    >
                      <option value="">Sélectionner un secteur</option>
                      {sectors.map(sector => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description du projet *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre projet en quelques phrases..."
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stage">Stade de développement</Label>
                    <select
                      id="stage"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.stage}
                      onChange={(e) => setFormData(prev => ({...prev, stage: e.target.value}))}
                    >
                      <option value="">Sélectionner un stade</option>
                      {stages.map(stage => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fundingGoal">Montant recherché</Label>
                    <div className="relative">
                      <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fundingGoal"
                        placeholder="ex: 500000"
                        className="pl-10"
                        value={formData.fundingGoal}
                        onChange={(e) => setFormData(prev => ({...prev, fundingGoal: e.target.value}))}
                      />
                    </div>
                  </div>
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Upload className="mr-2 h-5 w-5" />
                    Documents du projet
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {(['pitch', 'businessPlan', 'financial'] as const).map((fileType) => (
                      <div key={fileType} className="space-y-2">
                        <Label className="text-sm">
                          {fileType === 'pitch' && 'Pitch Deck'}
                          {fileType === 'businessPlan' && 'Business Plan'}
                          {fileType === 'financial' && 'Prévisionnel'}
                        </Label>
                        <div className="glass-card p-4 border-dashed border-2 border-glass-border hover:border-primary/50 transition-colors">
                          <input
                            type="file"
                            accept=".pdf,.ppt,.pptx,.doc,.docx"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleFileUpload(fileType, file);
                            }}
                            className="hidden"
                            id={`file-${fileType}`}
                          />
                          <label htmlFor={`file-${fileType}`} className="cursor-pointer block text-center">
                            <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              {formData.files[fileType] ? 
                                formData.files[fileType]!.name : 
                                'Cliquez pour uploader'
                              }
                            </p>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video URL */}
                <div className="space-y-2">
                  <Label htmlFor="videoUrl" className="flex items-center">
                    <Video className="mr-2 h-4 w-4" />
                    Vidéo de pitch (optionnel)
                  </Label>
                  <Input
                    id="videoUrl"
                    placeholder="https://youtube.com/watch?v=..."
                    value={formData.videoUrl}
                    onChange={(e) => setFormData(prev => ({...prev, videoUrl: e.target.value}))}
                  />
                </div>

                {/* Objectives */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Vos objectifs
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {objectiveOptions.map((objective) => (
                      <button
                        key={objective}
                        type="button"
                        onClick={() => toggleObjective(objective)}
                        className={`p-3 rounded-lg border text-left transition-all duration-300 ${
                          formData.objectives.includes(objective)
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-glass-border glass-card hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center">
                          {formData.objectives.includes(objective) && (
                            <CheckCircle className="h-4 w-4 mr-2" />
                          )}
                          <span className="text-sm">{objective}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handlePrevious} className="glass-button">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={!canProceedStep3 || isLoading}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Création...
                      </div>
                    ) : (
                      <>
                        Créer mon compte
                        <CheckCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Simple completion for Investor */}
          {currentStep === 3 && formData.role === 'investor' && (
            <>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gradient">
                  Dernière étape !
                </CardTitle>
                <p className="text-muted-foreground">
                  Votre compte investisseur est presque prêt
                </p>
              </CardHeader>

              <CardContent className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-glow">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Accès investisseur activé</h3>
                  <p className="text-muted-foreground">
                    Vous allez pouvoir découvrir des projets qualifiés et connecter avec des entrepreneurs prometteurs.
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevious} className="glass-button">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Création...
                      </div>
                    ) : (
                      <>
                        Créer mon compte
                        <CheckCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {/* Success Step */}
          {currentStep === 4 && (
            <>
              <CardContent className="text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                  <CheckCircle className="h-12 w-12 text-success" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gradient">
                    🎉 Félicitations !
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Votre projet est prêt à briller
                  </p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Votre compte a été créé avec succès. Vous allez recevoir un email de confirmation dans quelques instants.
                  </p>
                </div>

                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg px-8 py-4"
                  onClick={() => console.log('Redirection vers dashboard')}
                >
                  Accéder à mon dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  Vous pouvez également{' '}
                  <Link to="/login" className="text-primary hover:text-primary-variant">
                    vous connecter
                  </Link>
                  {' '}à tout moment
                </p>
              </CardContent>
            </>
          )}
        </Card>

        {/* Footer */}
        {currentStep <= 3 && (
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Déjà un compte ?{' '}
              <Link 
                to="/login" 
                className="text-primary hover:text-primary-variant font-medium transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;