import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Video, 
  MessageCircle,
  Brain,
  Upload,
  BarChart3,
  Globe,
  Star,
  ChevronDown,
  Play,
  Menu,
  X,
  Moon,
  Sun,
  FolderOpen,
  Lock,
  Calendar,
  Target,
  FileText,
  Award,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/hero-investi.jpg';
import aiMatchingImage from '@/assets/ai-matching.jpg';
import dashboardImage from '@/assets/dashboard-preview.jpg';
import ContactForm from '@/pages/ContactForm';
import VideoModal from '@/pages/VideoModal';

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentLang, setCurrentLang] = useState<'fr' | 'en'>('fr');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    funding: 0,
    investors: 0,
    countries: 0
  });
  const [activeNav, setActiveNav] = useState<string>('features');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Animation des statistiques
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    const targets = {
      projects: 1300,
      funding: 180,
      investors: 350,
      countries: 17
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        projects: Math.floor(targets.projects * progress),
        funding: Math.floor(targets.funding * progress),
        investors: Math.floor(targets.investors * progress),
        countries: Math.floor(targets.countries * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  // Scroll animation for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'demo', 'pricing', 'contact'];
      let found = 'features';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) found = id;
        }
      }
      setActiveNav(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const texts = {
    fr: {
      nav: {
        features: 'Fonctionnalités',
        demo: 'Démo', 
        pricing: 'Tarifs',
        contact: 'Contact'
      },
      hero: {
        title: 'Connectez les Idées au Capital',
        subtitle: 'Construisez l\'Avenir, Aujourd\'hui',
        description: 'La plateforme qui révolutionne la rencontre entre entrepreneurs visionnaires et investisseurs qualifiés. Simplifiez votre levée de fonds avec l\'IA.',
        ctaProject: 'Créer mon projet',
        ctaDemo: 'Voir la démo'
      },
      problem: {
        title: 'Les défis des entrepreneurs',
        subtitle: 'Transformer les obstacles en opportunités',
        challenges: [
          { title: 'Difficulté d\'accès aux investisseurs', desc: 'Trouver les bons contacts prend des mois' },
          { title: 'Pitch non optimisé', desc: 'Manque de retours constructifs sur la présentation' },
          { title: 'Suivi dispersé', desc: 'Gestion chaotique des échanges et documents' }
        ]
      },
      solution: {
        title: 'Investi révolutionne votre levée de fonds',
        features: [
          { icon: Brain, title: 'Matching IA Intelligent', desc: 'Algorithme qui connecte automatiquement votre projet aux investisseurs pertinents selon vos critères.' },
          { icon: Upload, title: 'Dossier Projet Complet', desc: 'Centralisez pitch deck, business plan, prévisionnel et vidéos dans un dossier sécurisé.' },
          { icon: Video, title: 'Réunions Intégrées', desc: 'Organisez vos meetings directement depuis la plateforme avec calendrier synchronisé.' },
          { icon: BarChart3, title: 'Suivi KPI Levée', desc: 'Tableaux de bord en temps réel pour suivre l\'avancement de votre campagne.' },
          { icon: MessageCircle, title: 'Messagerie Sécurisée', desc: 'Communication chiffrée avec vos investisseurs potentiels et gestion des NDA.' },
          { icon: Shield, title: 'Coach IA Personnel', desc: 'Assistant intelligent qui analyse et améliore votre pitch avec des conseils personnalisés.' }
        ]
      },
      powerfulFeatures: {
        title: 'Fonctionnalités puissantes & expérience unique',
        subtitle: 'Investi ne se contente pas de connecter. Il propulse les idées vers leur réalité.',
        features: [
          { 
            icon: Brain, 
            title: 'Matching Intelligent avec IA', 
            desc: 'Associe automatiquement votre projet aux investisseurs les plus pertinents selon le secteur, la maturité, le montant visé et les précédents investissements.',
            badge: '🔥 Intérêt élevé'
          },
          { 
            icon: FolderOpen, 
            title: 'Dossier d\'investissement intelligent', 
            desc: 'Assistant guidé pour constituer un dossier structuré : pitch écrit, business plan, vidéo de présentation, objectifs de levée et statuts.',
            badge: '✅ Compatible'
          },
          { 
            icon: Lock, 
            title: 'Coffre-fort numérique sécurisé', 
            desc: 'Stockage chiffré AES-256 de tous vos documents avec accès granularisé et historique des consultations.',
            badge: '🔒 Sécurisé'
          },
          { 
            icon: Calendar, 
            title: 'Réunions intégrées en visio', 
            desc: 'Organisez des rendez-vous avec calendrier connecté, visio intégrée et gestion de documents en direct.',
            badge: '📅 Planifié'
          },
          { 
            icon: MessageCircle, 
            title: 'Messagerie directe & fil de discussions', 
            desc: 'Discussion instantanée avec les investisseurs intéressés, historique centralisé et notifications intelligentes.',
            badge: '💬 Actif'
          },
          { 
            icon: BarChart3, 
            title: 'Suivi de vos performances & KPIs', 
            desc: 'Tableau de bord animé avec statut des demandes, taux de réponse, montant levé vs cible et feedback investisseurs.',
            badge: '📊 Analytique'
          }
        ]
      },
      future: {
        title: 'Vision Future d\'Investi',
        subtitle: 'L\'avenir de l\'investissement décentralisé',
        roadmap: [
          { date: 'Q1 2026', title: 'Signature Web3', desc: 'Contrats intelligents pour les accords d\'investissement' },
          { date: 'Q2 2026', title: 'Lancement international', desc: 'Expansion sur de nouveaux marchés européens' },
          { date: 'Q3 2026', title: 'Nouveaux produits IA', desc: 'Lancement de solutions IA avancées pour l\'investissement' }
        ]
      },
      stats: {
        title: 'Investi en chiffres',
        subtitle: 'Une croissance qui parle d\'elle-même',
        items: [
          { value: '+1300', label: 'Projets publiés', suffix: '' },
          { value: '+180M', label: 'Montant levé (TND)', suffix: '' },
          { value: '350+', label: 'Investisseurs actifs', suffix: '' },
          { value: '17', label: 'Pays représentés', suffix: '' }
        ]
      },
      pricing: {
        title: 'Tarifs transparents',
        subtitle: 'Choisissez le plan qui correspond à vos besoins',
        plans: [
          {
            name: 'Starter',
            price: '0',
            period: 'TND/mois',
            description: 'Parfait pour commencer',
            features: [
              'Profil entrepreneur basique',
              'Jusqu\'à 3 projets',
              'Matching IA limité',
              'Support communauté'
            ],
            cta: 'Commencer gratuitement',
            popular: false
          },
          {
            name: 'Professional',
            price: '89',
            period: 'TND/mois',
            description: 'Pour les entrepreneurs sérieux',
            features: [
              'Profil entrepreneur complet',
              'Projets illimités',
              'Matching IA avancé',
              'Coach IA personnel',
              'Analytics détaillés',
              'Support prioritaire'
            ],
            cta: 'Essayer 14 jours gratuit',
            popular: true
          },
          {
            name: 'Enterprise',
            price: '249',
            period: 'TND/mois',
            description: 'Pour les grandes entreprises',
            features: [
              'Tout du plan Professional',
              'Équipe collaborative',
              'API personnalisée',
              'Support dédié',
              'Formation personnalisée',
              'Intégrations avancées'
            ],
            cta: 'Nous contacter',
            popular: false
          }
        ]
      },
      testimonials: {
        title: 'Ils nous font confiance',
        items: [
          { name: 'Amira Ben Salah', role: 'CEO, TechFlow Tunisie', content: 'Grâce à Investi, j\'ai levé 500,000 TND en 3 mois. Le matching IA est bluffant !', rating: 5 },
          { name: 'Mehdi Gharbi', role: 'Partner, Innovation Capital Tunis', content: 'Enfin une plateforme qui filtre les projets de qualité. Un gain de temps énorme.', rating: 5 },
          { name: 'Sarra Karoui', role: 'Fondatrice, GreenTech Tunisia', content: 'L\'interface est intuitive et le coach IA m\'a aidé à perfectionner mon pitch.', rating: 5 }
        ]
      },
      cta: {
        title: 'Prêt à révolutionner votre levée de fonds ?',
        subtitle: 'Rejoignez les entrepreneurs qui réussissent avec Investi',
        entrepreneur: 'Je suis Entrepreneur',
        investor: 'Je suis Investisseur'
      }
    },
    en: {
      nav: {
        features: 'Features',
        demo: 'Demo',
        pricing: 'Pricing', 
        contact: 'Contact'
      },
      hero: {
        title: 'Connect Ideas to Capital',
        subtitle: 'Build the Future, Today',
        description: 'The platform that revolutionizes meetings between visionary entrepreneurs and qualified investors. Simplify your fundraising with AI.',
        ctaProject: 'Create my project',
        ctaDemo: 'Watch demo'
      },
      problem: {
        title: 'Entrepreneur challenges',
        subtitle: 'Transform obstacles into opportunities',
        challenges: [
          { title: 'Difficult access to investors', desc: 'Finding the right contacts takes months' },
          { title: 'Non-optimized pitch', desc: 'Lack of constructive feedback on presentation' },
          { title: 'Scattered tracking', desc: 'Chaotic management of exchanges and documents' }
        ]
      },
      solution: {
        title: 'Investi revolutionizes your fundraising',
        features: [
          { icon: Brain, title: 'Smart AI Matching', desc: 'Algorithm that automatically connects your project to relevant investors based on your criteria.' },
          { icon: Upload, title: 'Complete Project File', desc: 'Centralize pitch deck, business plan, forecast and videos in a secure folder.' },
          { icon: Video, title: 'Integrated Meetings', desc: 'Organize your meetings directly from the platform with synchronized calendar.' },
          { icon: BarChart3, title: 'Fundraising KPI Tracking', desc: 'Real-time dashboards to monitor your campaign progress.' },
          { icon: MessageCircle, title: 'Secure Messaging', desc: 'Encrypted communication with potential investors and NDA management.' },
          { icon: Shield, title: 'Personal AI Coach', desc: 'Intelligent assistant that analyzes and improves your pitch with personalized advice.' }
        ]
      },
      powerfulFeatures: {
        title: 'Powerful features & unique experience',
        subtitle: 'Investi doesn\'t just connect. It propels ideas towards their reality.',
        features: [
          { 
            icon: Brain, 
            title: 'Smart AI Matching', 
            desc: 'Automatically associates your project with the most relevant investors according to sector, maturity, target amount and previous investments.',
            badge: '🔥 High interest'
          },
          { 
            icon: FolderOpen, 
            title: 'Smart investment file', 
            desc: 'Guided assistant to build a structured file: written pitch, business plan, presentation video, fundraising objectives and statutes.',
            badge: '✅ Compatible'
          },
          { 
            icon: Lock, 
            title: 'Secure digital vault', 
            desc: 'AES-256 encrypted storage of all your documents with granular access and consultation history.',
            badge: '🔒 Secure'
          },
          { 
            icon: Calendar, 
            title: 'Integrated video meetings', 
            desc: 'Organize appointments with connected calendar, integrated video and real-time document management.',
            badge: '📅 Scheduled'
          },
          { 
            icon: MessageCircle, 
            title: 'Direct messaging & discussion thread', 
            desc: 'Instant discussion with interested investors, centralized history and smart notifications.',
            badge: '💬 Active'
          },
          { 
            icon: BarChart3, 
            title: 'Performance & KPI tracking', 
            desc: 'Animated dashboard with request status, response rate, amount raised vs target and investor feedback.',
            badge: '📊 Analytics'
          }
        ]
      },
      future: {
        title: 'Investi Future Vision',
        subtitle: 'The future of decentralized investment',
        roadmap: [
          { date: 'Q1 2026', title: 'Web3 Signature', desc: 'Smart contracts for investment agreements' },
          { date: 'Q2 2026', title: 'International Launch', desc: 'Expansion to new European markets' },
          { date: 'Q3 2026', title: 'New AI Products', desc: 'Launch of advanced AI solutions for investment' }
        ]
      },
      stats: {
        title: 'Investi in numbers',
        subtitle: 'Growth that speaks for itself',
        items: [
          { value: '+1300', label: 'Published projects', suffix: '' },
          { value: '+180M', label: 'Amount raised (TND)', suffix: '' },
          { value: '350+', label: 'Active investors', suffix: '' },
          { value: '17', label: 'Countries represented', suffix: '' }
        ]
      },
      pricing: {
        title: 'Transparent pricing',
        subtitle: 'Choose the plan that fits your needs',
        plans: [
          {
            name: 'Starter',
            price: '0',
            period: 'TND/month',
            description: 'Perfect to get started',
            features: [
              'Basic entrepreneur profile',
              'Up to 3 projects',
              'Limited AI matching',
              'Community support'
            ],
            cta: 'Start for free',
            popular: false
          },
          {
            name: 'Professional',
            price: '89',
            period: 'TND/month',
            description: 'For serious entrepreneurs',
            features: [
              'Complete entrepreneur profile',
              'Unlimited projects',
              'Advanced AI matching',
              'Personal AI coach',
              'Detailed analytics',
              'Priority support'
            ],
            cta: 'Try 14 days free',
            popular: true
          },
          {
            name: 'Enterprise',
            price: '249',
            period: 'TND/month',
            description: 'For large companies',
            features: [
              'Everything in Professional',
              'Team collaboration',
              'Custom API',
              'Dedicated support',
              'Custom training',
              'Advanced integrations'
            ],
            cta: 'Contact us',
            popular: false
          }
        ]
      },
      testimonials: {
        title: 'They trust us',
        items: [
          { name: 'Amira Ben Salah', role: 'CEO, TechFlow Tunisia', content: 'Thanks to Investi, I raised 500,000 TND in 3 months. The AI matching is amazing!', rating: 5 },
          { name: 'Mehdi Gharbi', role: 'Partner, Innovation Capital Tunis', content: 'Finally a platform that filters quality projects. Huge time saver.', rating: 5 },
          { name: 'Sarra Karoui', role: 'Founder, GreenTech Tunisia', content: 'The interface is intuitive and the AI coach helped me perfect my pitch.', rating: 5 }
        ]
      },
      cta: {
        title: 'Ready to revolutionize your fundraising?',
        subtitle: 'Join entrepreneurs who succeed with Investi',
        entrepreneur: 'I\'m an Entrepreneur',
        investor: 'I\'m an Investor'
      }
    }
  };

  const t = texts[currentLang];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">Investi</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" onClick={e => {e.preventDefault(); handleNavClick('features')}}
                  className={`text-foreground hover:text-primary transition-smooth relative px-2 py-1 ${activeNav==='features' ? 'font-bold text-primary underline underline-offset-4' : ''}`}>{t.nav.features}</a>
                <a href="#demo" onClick={e => {e.preventDefault(); handleNavClick('demo')}}
                  className={`text-foreground hover:text-primary transition-smooth relative px-2 py-1 ${activeNav==='demo' ? 'font-bold text-primary underline underline-offset-4' : ''}`}>{t.nav.demo}</a>
                <a href="#pricing" onClick={e => {e.preventDefault(); handleNavClick('pricing')}}
                  className={`text-foreground hover:text-primary transition-smooth relative px-2 py-1 ${activeNav==='pricing' ? 'font-bold text-primary underline underline-offset-4' : ''}`}>{t.nav.pricing}</a>
                <a href="#contact" onClick={e => {e.preventDefault(); handleNavClick('contact')}}
                  className={`text-foreground hover:text-primary transition-smooth relative px-2 py-1 ${activeNav==='contact' ? 'font-bold text-primary underline underline-offset-4' : ''}`}>{t.nav.contact}</a>
              </div>
            </div>

            {/* Theme & Language Toggle */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
                className="px-3 py-1 rounded-lg glass-button text-sm font-medium"
              >
                {currentLang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
              </button>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg glass-button"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg glass-button"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card border-t border-glass-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#features" 
                className={`block px-3 py-2 text-foreground hover:text-primary transition-smooth ${activeNav==='features' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
                onClick={e => {e.preventDefault(); handleNavClick('features')}}
              >
                {t.nav.features}
              </a>
              <a 
                href="#demo" 
                className={`block px-3 py-2 text-foreground hover:text-primary transition-smooth ${activeNav==='demo' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
                onClick={e => {e.preventDefault(); handleNavClick('demo')}}
              >
                {t.nav.demo}
              </a>
              <a 
                href="#pricing" 
                className={`block px-3 py-2 text-foreground hover:text-primary transition-smooth ${activeNav==='pricing' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
                onClick={e => {e.preventDefault(); handleNavClick('pricing')}}
              >
                {t.nav.pricing}
              </a>
              <a 
                href="#contact" 
                className={`block px-3 py-2 text-foreground hover:text-primary transition-smooth ${activeNav==='contact' ? 'font-bold text-primary underline underline-offset-4' : ''}`}
                onClick={e => {e.preventDefault(); handleNavClick('contact')}}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 glass-button border-primary/50">
                <Zap className="w-3 h-3 mr-1" />
                Révolution IA
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">{t.hero.title}</span>
                <br />
                <span className="text-foreground">{t.hero.subtitle}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  onClick={() => navigate('/register')}
                >
                  {t.hero.ctaProject}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-button group"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({behavior: 'smooth'})}
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  {t.hero.ctaDemo}
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <img 
                src={heroImage} 
                alt="Investi Platform" 
                className="w-full h-auto rounded-3xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.problem.title}</h2>
            <p className="text-xl text-muted-foreground">{t.problem.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.challenges.map((challenge, index) => (
              <Card key={index} className="glass-card hover-lift animate-scale-in">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <X className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-glass">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.solution.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.solution.features.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift animate-scale-in group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.powerfulFeatures.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.powerfulFeatures.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.powerfulFeatures.features.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift animate-scale-in group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <Badge className="glass-button text-xs border-primary/50">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.future.title}</h2>
            <p className="text-xl text-muted-foreground">{t.future.subtitle}</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
            <div className="space-y-12">
              {t.future.roadmap.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="glass-card hover-lift">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-gradient-primary text-white">{item.date}</Badge>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background animate-pulse-glow"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.stats.title}</h2>
            <p className="text-xl text-muted-foreground">{t.stats.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <Card key={index} className="glass-card hover-lift animate-scale-in text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {index === 0 && `+${animatedStats.projects}`}
                    {index === 1 && `+${animatedStats.funding}M`}
                    {index === 2 && `${animatedStats.investors}+`}
                    {index === 3 && animatedStats.countries}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.pricing.title}</h2>
            <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.pricing.plans.map((plan, index) => (
              <Card key={index} className={`glass-card hover-lift animate-scale-in relative ${
                plan.popular ? 'border-2 border-primary shadow-glow' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Le plus populaire
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'glass-button hover:border-primary/50'
                    } transition-all duration-300`}
                    onClick={() => navigate('/register')}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contactez-nous</h2>
            <p className="text-xl text-muted-foreground">Nous serions ravis de répondre à vos questions ou de discuter de votre projet.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Découvrez Investi en action</h2>
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <img 
                src={dashboardImage}
                alt="Demo Investi"
                className="w-full rounded-3xl shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-primary ml-1" />
                </div>
              </div>
              {/* Play overlay text */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-lg font-semibold mb-2">Regarder la démo complète</p>
                <p className="text-sm opacity-90">Découvrez comment Investi transforme votre levée de fonds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t.testimonials.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({length: testimonial.rating}).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">{t.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-12">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 group"
              onClick={() => navigate('/register')}
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t.cta.entrepreneur}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-button text-lg px-8 py-4 group"
              onClick={() => navigate('/register')}
            >
              <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t.cta.investor}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-glass border-t border-glass-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Investi</h3>
              <p className="text-muted-foreground mb-4">
                La plateforme qui connecte les entrepreneurs aux investisseurs.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                  <span className="text-white font-bold">tw</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Fonctionnalités</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Tarifs</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Sécurité</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">API</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Blog</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Guides</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Webinaires</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Support</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">Recevez nos dernières actualités</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-gradient-primary rounded-l-none hover:shadow-glow">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Investi. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Mentions légales</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Confidentialité</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">CGU</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=yG4-gNYDwcc&pp=ygULZ2hhemkgcmFiZWg%3D"
      />
    </div>
  );
};

export default Index;