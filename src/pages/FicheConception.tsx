import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Users, Code, Palette, Type, Layout, Navigation, Sparkles, Accessibility, BookOpen, Lightbulb, GraduationCap, Target, Brain, Eye, Mouse, Layers } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const FicheConception = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(["section-1"]);

  const techStack = [
    { name: "React 18", description: "Architecture à base de composants, DOM virtuel pour des performances optimales, hooks pour la gestion d'état" },
    { name: "TypeScript", description: "Typage statique pour une meilleure maintenabilité, détection d'erreurs à la compilation, autocomplétion IDE" },
    { name: "Tailwind CSS", description: "Classes utilitaires pour un développement rapide, système de design cohérent, responsive design natif" },
    { name: "Framer Motion", description: "Animations fluides et engageantes pour les enfants, transitions de page, micro-interactions" },
    { name: "React Router", description: "Navigation SPA sans rechargement, transitions fluides entre les pages, gestion des routes dynamiques" },
    { name: "Shadcn/ui", description: "Composants accessibles et personnalisables, respect des standards ARIA, design moderne" },
  ];

  const ergonomicPrinciples = [
    { 
      name: "Loi de Fitts", 
      icon: Mouse,
      description: "Le temps pour atteindre une cible dépend de sa taille et de sa distance",
      application: "Boutons larges (min 44px), zones de clic généreuses, éléments importants proches du centre d'attention"
    },
    { 
      name: "Loi de Hick", 
      icon: Brain,
      description: "Le temps de décision augmente avec le nombre de choix",
      application: "Maximum 6 histoires affichées, navigation simple avec 3-4 options, menus épurés"
    },
    { 
      name: "Principes de Gestalt", 
      icon: Layers,
      description: "Le cerveau organise les éléments visuels en groupes cohérents",
      application: "Cartes d'histoires groupées, proximité des éléments liés, similarité visuelle des catégories"
    },
    { 
      name: "Heuristiques de Nielsen", 
      icon: Eye,
      description: "10 principes pour l'utilisabilité des interfaces",
      application: "Feedback immédiat (toasts), prévention d'erreurs, cohérence visuelle, aide contextuelle"
    },
  ];

  const colorPalette = [
    { name: "Vert Éco", hsl: "142 76% 36%", hex: "#16a34a", meaning: "Nature, recyclage, croissance", usage: "Actions principales, succès" },
    { name: "Bleu Océan", hsl: "199 89% 48%", hex: "#0ea5e9", meaning: "Eau, propreté, confiance", usage: "Liens, éléments interactifs" },
    { name: "Jaune Soleil", hsl: "45 93% 47%", hex: "#eab308", meaning: "Énergie, bonheur, attention", usage: "Badges, alertes positives" },
    { name: "Orange Chaleur", hsl: "25 95% 53%", hex: "#f97316", meaning: "Créativité, enthousiasme", usage: "Catégories, accents" },
    { name: "Violet Magie", hsl: "271 91% 65%", hex: "#a855f7", meaning: "Imagination, mystère", usage: "Éléments spéciaux, quiz" },
  ];

  const stories = [
    { title: "Les Aventures du Recyclage dans la Jungle", theme: "Recyclage général", chapters: 5 },
    { title: "Capitaine Terre Sauve la Journée", theme: "Héroïsme écologique", chapters: 14 },
    { title: "Les Gardiens de la Forêt Enchantée", theme: "Conservation forestière", chapters: 4 },
    { title: "Le Jardin Magique de Luna", theme: "Compostage", chapters: 4 },
    { title: "Mission Océan: Les Dauphins en Danger", theme: "Pollution marine", chapters: 4 },
    { title: "La Grande Aventure du Tri", theme: "Tri des déchets", chapters: 5 },
  ];

  const accessibilityFeatures = [
    { feature: "Labels ARIA", description: "Tous les éléments interactifs ont des labels descriptifs pour les lecteurs d'écran" },
    { feature: "Navigation clavier", description: "L'application est entièrement navigable au clavier (Tab, Enter, Espace)" },
    { feature: "Contraste des couleurs", description: "Ratio de contraste minimum de 4.5:1 conforme aux directives WCAG 2.1 AA" },
    { feature: "Cibles tactiles", description: "Taille minimum de 44x44 pixels pour tous les boutons et liens" },
    { feature: "Mode sombre/clair", description: "Adaptation aux préférences système et réduction de la fatigue oculaire" },
    { feature: "Texte redimensionnable", description: "L'interface reste fonctionnelle jusqu'à 200% de zoom" },
  ];

  const futureImprovements = [
    { title: "Narration audio", description: "Ajout de voix narratives pour les enfants qui ne savent pas encore lire" },
    { title: "Sauvegarde de progression", description: "Système de comptes utilisateurs pour sauvegarder l'avancement dans les histoires" },
    { title: "Jeux interactifs", description: "Mini-jeux éducatifs sur le tri des déchets et le recyclage" },
    { title: "Support multilingue", description: "Traduction en arabe et autres langues pour une portée plus large" },
    { title: "Mode hors-ligne", description: "PWA permettant la lecture des histoires sans connexion internet" },
    { title: "Tableau de bord parental", description: "Suivi des progrès et statistiques de lecture pour les parents" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'application
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="hidden sm:flex gap-1">
                <GraduationCap className="h-3 w-3" />
                Document Académique
              </Badge>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-eco-green/10 text-eco-green border-eco-green/20">
            Université Oran1 Ahmed Ben Bella • L3 Informatique • IHM
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-story">
            Fiche de Conception
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interface de sensibilisation à la gestion des déchets pour enfants
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-eco-green to-eco-blue flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Eco Heroes</span>
          </div>
        </div>

        {/* Accordion Sections */}
        <Accordion 
          type="multiple" 
          value={expandedSections} 
          onValueChange={setExpandedSections}
          className="space-y-4"
        >
          {/* Section 1: Project Overview */}
          <AccordionItem value="section-1" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-green/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-eco-green" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">1. Présentation du Projet</h2>
                  <p className="text-sm text-muted-foreground">Vue d'ensemble et objectifs</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Card className="border-eco-green/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Target className="w-4 h-4 text-eco-green" />
                      Objectif Principal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sensibiliser les enfants âgés de 5 à 12 ans à l'importance du tri des déchets, 
                      du recyclage et de la protection de l'environnement à travers des histoires 
                      interactives et engageantes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-eco-blue/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-eco-blue" />
                      Approche Pédagogique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Utilisation de la narration interactive (storytelling) pour transmettre 
                      des concepts écologiques de manière ludique, avec des personnages attachants 
                      et des quiz de compréhension.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Contexte Académique</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Établissement:</strong> Université Oran1 Ahmed Ben Bella</li>
                  <li>• <strong>Département:</strong> Informatique</li>
                  <li>• <strong>Niveau:</strong> Licence 3 (L3)</li>
                  <li>• <strong>Module:</strong> Interface Homme-Machine (IHM)</li>
                  <li>• <strong>Année universitaire:</strong> 2024-2025</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 2: Target Audience */}
          <AccordionItem value="section-2" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-blue/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-eco-blue" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">2. Analyse du Public Cible</h2>
                  <p className="text-sm text-muted-foreground">Personas et caractéristiques</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">👧 Enfants (5-12 ans)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">Caractéristiques cognitives</h5>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        <li>• Capacité d'attention limitée (5-20 minutes)</li>
                        <li>• Apprentissage par l'exemple et la répétition</li>
                        <li>• Pensée concrète, besoin de visualisation</li>
                        <li>• Sensibilité aux récompenses et feedback positif</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Besoins interface</h5>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        <li>• Couleurs vives et attrayantes</li>
                        <li>• Illustrations engageantes</li>
                        <li>• Navigation simple et intuitive</li>
                        <li>• Texte court avec police lisible</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">👨‍👩‍👧 Parents / Éducateurs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">Rôle</h5>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        <li>• Accompagnement dans la lecture</li>
                        <li>• Discussion des thèmes abordés</li>
                        <li>• Renforcement des apprentissages</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Attentes</h5>
                      <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                        <li>• Contenu éducatif de qualité</li>
                        <li>• Interface sécurisée sans publicités</li>
                        <li>• Temps d'écran limité et contrôlable</li>
                        <li>• Valeurs positives transmises</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 3: Technical Stack */}
          <AccordionItem value="section-3" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-purple/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-eco-purple" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">3. Choix Techniques</h2>
                  <p className="text-sm text-muted-foreground">Stack technologique et justifications</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid gap-4 mt-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Badge variant="outline" className="shrink-0 font-mono">
                      {tech.name}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-eco-purple/5 border border-eco-purple/20 rounded-lg">
                <h4 className="font-semibold mb-2 text-eco-purple">Architecture Globale</h4>
                <p className="text-sm text-muted-foreground">
                  L'application suit une architecture <strong>Single Page Application (SPA)</strong> avec 
                  un système de composants réutilisables. Le routage côté client permet des transitions 
                  fluides sans rechargement de page, offrant une expérience utilisateur optimale.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 4: Ergonomic Principles */}
          <AccordionItem value="section-4" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-orange/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-eco-orange" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">4. Principes Ergonomiques</h2>
                  <p className="text-sm text-muted-foreground">Fondements IHM appliqués</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {ergonomicPrinciples.map((principle, index) => (
                  <Card key={index} className="border-eco-orange/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <principle.icon className="w-4 h-4 text-eco-orange" />
                        {principle.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <em>{principle.description}</em>
                      </p>
                      <div className="p-2 bg-eco-orange/5 rounded text-sm">
                        <strong>Application:</strong> {principle.application}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 5: Color System */}
          <AccordionItem value="section-5" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-eco-green via-eco-blue to-eco-purple flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">5. Système de Couleurs</h2>
                  <p className="text-sm text-muted-foreground">Palette et psychologie des couleurs</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4 mt-4">
                {colorPalette.map((color, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <div 
                      className="w-12 h-12 rounded-lg shrink-0 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{color.name}</span>
                        <Badge variant="outline" className="font-mono text-xs">{color.hex}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Signification:</strong> {color.meaning}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Usage:</strong> {color.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Psychologie des Couleurs pour Enfants</h4>
                <p className="text-sm text-muted-foreground">
                  Les couleurs choisies sont <strong>vives mais non agressives</strong>, stimulant 
                  l'engagement tout en évitant la surcharge visuelle. Chaque couleur est associée 
                  à un thème écologique spécifique, renforçant l'apprentissage par association visuelle.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 6: Typography */}
          <AccordionItem value="section-6" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-yellow/10 flex items-center justify-center">
                  <Type className="w-5 h-5 text-eco-yellow" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">6. Choix Typographiques</h2>
                  <p className="text-sm text-muted-foreground">Polices et lisibilité</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-story text-2xl">Fredoka</CardTitle>
                    <p className="text-sm text-muted-foreground">Police principale (titres)</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Police arrondie et amicale, parfaite pour les contenus destinés aux enfants.
                    </p>
                    <div className="p-3 bg-muted/50 rounded font-story">
                      <p className="text-2xl mb-1">Eco Heroes</p>
                      <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
                      <p className="text-lg">0123456789</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">System Font Stack</CardTitle>
                    <p className="text-sm text-muted-foreground">Police de corps de texte</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Polices système pour une meilleure performance et lisibilité sur tous les appareils.
                    </p>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="text-base mb-1">Corps de texte standard</p>
                      <p className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p className="text-sm">abcdefghijklmnopqrstuvwxyz</p>
                      <p className="text-sm">0123456789</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-3xl font-bold mb-1">16px</p>
                  <p className="text-sm text-muted-foreground">Taille minimale de texte</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-3xl font-bold mb-1">1.6</p>
                  <p className="text-sm text-muted-foreground">Interligne (line-height)</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-3xl font-bold mb-1">4.5:1</p>
                  <p className="text-sm text-muted-foreground">Ratio de contraste</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 7: Interface Layout */}
          <AccordionItem value="section-7" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-green/10 flex items-center justify-center">
                  <Layout className="w-5 h-5 text-eco-green" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">7. Structure de l'Interface</h2>
                  <p className="text-sm text-muted-foreground">Organisation et composants</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Pages Principales</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-eco-green/20">
                      <CardContent className="pt-4">
                        <h5 className="font-medium mb-2">🏠 Page d'Accueil</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Hero section animée</li>
                          <li>• Présentation des fonctionnalités</li>
                          <li>• Grille de 6 histoires</li>
                          <li>• Section À propos</li>
                          <li>• Formulaire de contact</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-eco-blue/20">
                      <CardContent className="pt-4">
                        <h5 className="font-medium mb-2">📖 Lecteur d'Histoire</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Navigation entre chapitres</li>
                          <li>• Illustrations immersives</li>
                          <li>• Indicateur de progression</li>
                          <li>• Quiz de compréhension</li>
                          <li>• Système de notation</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-eco-purple/20">
                      <CardContent className="pt-4">
                        <h5 className="font-medium mb-2">📋 Fiche de Conception</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Documentation complète</li>
                          <li>• Sections accordéon</li>
                          <li>• Format académique</li>
                          <li>• Diagrammes explicatifs</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Système de Scroll Snap</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    La page d'accueil utilise un système de <strong>scroll snap</strong> qui permet 
                    aux sections de s'aligner automatiquement lors du défilement, créant une 
                    expérience de navigation fluide et engageante.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Hero Section</Badge>
                    <Badge variant="outline">→</Badge>
                    <Badge variant="outline">Features</Badge>
                    <Badge variant="outline">→</Badge>
                    <Badge variant="outline">About</Badge>
                    <Badge variant="outline">→</Badge>
                    <Badge variant="outline">Stories</Badge>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 8: Navigation Flow */}
          <AccordionItem value="section-8" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-blue/10 flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-eco-blue" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">8. Flux de Navigation</h2>
                  <p className="text-sm text-muted-foreground">Parcours utilisateur</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="mt-4">
                <h4 className="font-semibold mb-4">Diagramme de Navigation</h4>
                <div className="p-6 bg-muted/30 rounded-lg overflow-x-auto">
                  <div className="min-w-[600px]">
                    <div className="flex items-center justify-between gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center text-white text-2xl mb-2">🏠</div>
                        <span className="text-sm font-medium">Accueil</span>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-eco-green relative">
                        <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-background px-2 text-xs text-muted-foreground">Sélection</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-eco-blue flex items-center justify-center text-white text-2xl mb-2">📚</div>
                        <span className="text-sm font-medium">Histoire</span>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-eco-blue relative">
                        <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-background px-2 text-xs text-muted-foreground">Lecture</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-eco-purple flex items-center justify-center text-white text-2xl mb-2">❓</div>
                        <span className="text-sm font-medium">Quiz</span>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-eco-purple relative">
                        <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-background px-2 text-xs text-muted-foreground">Évaluation</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-eco-yellow flex items-center justify-center text-white text-2xl mb-2">⭐</div>
                        <span className="text-sm font-medium">Note</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2">Actions Principales</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Parcourir les histoires disponibles</li>
                        <li>• Sélectionner et lire une histoire</li>
                        <li>• Naviguer entre les chapitres</li>
                        <li>• Répondre au quiz de fin</li>
                        <li>• Noter l'histoire</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2">Retours Possibles</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Retour à l'accueil depuis n'importe quelle page</li>
                        <li>• Navigation entre chapitres (précédent/suivant)</li>
                        <li>• Scroll to top fluide</li>
                        <li>• Recherche rapide d'histoires</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 9: Interactive Elements */}
          <AccordionItem value="section-9" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-purple/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-eco-purple" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">9. Éléments Interactifs</h2>
                  <p className="text-sm text-muted-foreground">Animations et micro-interactions</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2">🎴 Cartes d'Histoires</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Effet de survol (scale + shadow)</li>
                      <li>• Animation de révélation au scroll</li>
                      <li>• Badges de catégorie colorés</li>
                      <li>• Transition de couleur fluide</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2">📊 Indicateur de Progression</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Barre de progression animée</li>
                      <li>• Marqueurs de chapitres cliquables</li>
                      <li>• Animation de complétion</li>
                      <li>• Feedback visuel immédiat</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2">❓ Quiz Interactif</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Feedback immédiat (correct/incorrect)</li>
                      <li>• Animation de validation</li>
                      <li>• Score en temps réel</li>
                      <li>• Encouragements personnalisés</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2">🎵 Lecteur Musical</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bouton play/pause flottant</li>
                      <li>• Musique d'ambiance apaisante</li>
                      <li>• Contrôle de volume</li>
                      <li>• Persistance de l'état</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 p-4 bg-eco-purple/5 border border-eco-purple/20 rounded-lg">
                <h4 className="font-semibold mb-2 text-eco-purple">Principe de Feedback</h4>
                <p className="text-sm text-muted-foreground">
                  Chaque action de l'utilisateur reçoit un <strong>feedback visuel immédiat</strong> 
                  (changement de couleur, animation, toast notification) pour confirmer que l'action 
                  a été prise en compte, réduisant ainsi l'incertitude et améliorant la confiance 
                  de l'utilisateur dans l'interface.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 10: Accessibility */}
          <AccordionItem value="section-10" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-green/10 flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-eco-green" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">10. Accessibilité</h2>
                  <p className="text-sm text-muted-foreground">Conformité WCAG et inclusivité</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {accessibilityFeatures.map((item, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-1">{item.feature}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-eco-green/5 border border-eco-green/20 rounded-lg">
                <h4 className="font-semibold mb-2 text-eco-green">Conformité WCAG 2.1 AA</h4>
                <p className="text-sm text-muted-foreground">
                  L'application respecte les critères d'accessibilité de niveau AA des 
                  <strong> Web Content Accessibility Guidelines (WCAG) 2.1</strong>, garantissant 
                  une expérience utilisable pour les personnes en situation de handicap visuel, 
                  moteur ou cognitif.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 11: Educational Content */}
          <AccordionItem value="section-11" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-blue/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-eco-blue" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">11. Structure Pédagogique</h2>
                  <p className="text-sm text-muted-foreground">Contenu éducatif et thématiques</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="mt-4">
                <h4 className="font-semibold mb-4">Catalogue des Histoires</h4>
                <div className="grid gap-3">
                  {stories.map((story, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h5 className="font-medium">{story.title}</h5>
                        <p className="text-sm text-muted-foreground">{story.theme}</p>
                      </div>
                      <Badge variant="outline">{story.chapters} chapitres</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <Card className="border-eco-blue/20">
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2">Thèmes Écologiques Abordés</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tri sélectif des déchets</li>
                      <li>• Recyclage et réutilisation</li>
                      <li>• Protection des océans</li>
                      <li>• Conservation des forêts</li>
                      <li>• Compostage domestique</li>
                      <li>• Réduction des déchets plastiques</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-eco-green/20">
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2">Approche Narrative</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Personnages héroïques et attachants</li>
                      <li>• Situations problématiques identifiables</li>
                      <li>• Solutions concrètes et applicables</li>
                      <li>• Messages positifs et encourageants</li>
                      <li>• Fin heureuse et inspirante</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 12: Future Improvements */}
          <AccordionItem value="section-12" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eco-yellow/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-eco-yellow" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">12. Améliorations Futures</h2>
                  <p className="text-sm text-muted-foreground">Évolutions planifiées</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {futureImprovements.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-1">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-eco-yellow/5 border border-eco-yellow/20 rounded-lg">
                <h4 className="font-semibold mb-2 text-eco-yellow">Vision à Long Terme</h4>
                <p className="text-sm text-muted-foreground">
                  L'objectif est de créer une <strong>plateforme éducative complète</strong> sur 
                  l'écologie pour les enfants, avec un contenu en constante expansion, des 
                  fonctionnalités sociales (partage, classements), et une application mobile 
                  native pour une accessibilité maximale.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Footer */}
        <div className="mt-12 text-center pb-8">
          <div className="p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Document réalisé dans le cadre du module <strong>Interface Homme-Machine (IHM)</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Université Oran1 Ahmed Ben Bella • Département d'Informatique • L3 • 2024-2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FicheConception;
