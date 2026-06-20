export const navSolutions = [
  ["Bewerbermanagement", "/loesungen/bewerbermanagement"],
  ["Arbeitgeber & Stellen", "/loesungen/arbeitgeberverwaltung"],
  ["KI-Matching", "/loesungen/ki-matching"],
  ["CV-Generator", "/loesungen/cv-generator"],
  ["Akquise-Agent", "/loesungen/akquise-agent"],
  ["WhatsApp & Kommunikation", "/loesungen/whatsapp-kommunikation"],
  ["Integrationen", "/loesungen/integrationen"],
] as const;

export const navPortals = [
  ["Für Personalvermittler", "/portale/personalvermittler"],
  ["Für Arbeitgeber", "/portale/arbeitgeber"],
  ["Für Bewerber", "/portale/bewerber"],
  ["Für Vertriebsteams", "/portale/vertrieb"],
] as const;

export const features = [
  {
    iconName: "brain",
    title: "KI-Dokumentenanalyse",
    text: "CVs, Pässe und Zertifikate werden automatisch ausgelesen und in strukturierte Profile übersetzt.",
    href: "/loesungen/bewerbermanagement",
  },
  {
    iconName: "target",
    title: "Intelligentes Matching",
    text: "Bewerber und offene Stellen werden über Qualifikation, Sprache, Erfahrung und Verfügbarkeit bewertet.",
    href: "/loesungen/ki-matching",
  },
  {
    iconName: "fileText",
    title: "CV-Generator",
    text: "Anonymisierte, mehrsprachige PDF-CVs entstehen in Sekunden aus geprüften Profildaten.",
    href: "/loesungen/cv-generator",
  },
  {
    iconName: "bot",
    title: "Akquise-Agent",
    text: "Offene Stellen finden, Firmen anreichern und passende Outreach-Nachrichten vorbereiten.",
    href: "/loesungen/akquise-agent",
  },
  {
    iconName: "messageCircle",
    title: "WhatsApp-Bot",
    text: "Bewerberkommunikation läuft direkt im bevorzugten Kanal und bleibt sauber dokumentiert.",
    href: "/loesungen/whatsapp-kommunikation",
  },
  {
    iconName: "plug",
    title: "10+ Integrationen",
    text: "Meta Lead Ads, Teams, WordPress, Stripe, Twilio, WhatsApp, Indeed und Apify verbinden deine Workflows.",
    href: "/loesungen/integrationen",
  },
] as const;

export const targetGroups = [
  {
    label: "Personalvermittler",
    title: "Dein komplettes Recruiting-Cockpit.",
    text: "Bewerber erfassen, Dokumente prüfen, Matching starten, CVs exportieren und Platzierungen verfolgen.",
    bullets: ["KI-Profilanalyse", "Matching-Shortlists", "CV-Export", "Visa- und Dokumentenstatus"],
  },
  {
    label: "Arbeitgeber",
    title: "Offene Stellen besetzen. Einfach.",
    text: "Eigene Stellen verwalten, Kandidaten anonym prüfen und Entscheidungen schneller treffen.",
    bullets: ["Stellenportal", "Anonyme Kandidatenprofile", "Statusübersicht", "DSGVO-konforme Freigaben"],
  },
  {
    label: "Bewerber",
    title: "Mehr Transparenz im gesamten Prozess.",
    text: "Profile pflegen, Dokumente hochladen und jederzeit sehen, was als Nächstes passiert.",
    bullets: ["Dokumenten-Upload", "Mehrsprachige Begleitung", "Bewerbungsstatus", "WhatsApp-Updates"],
  },
  {
    label: "Vertrieb",
    title: "Eine Pipeline, die mitdenkt.",
    text: "Leadquellen bündeln, Arbeitgeber qualifizieren und Outreach mit KI vorbereiten.",
    bullets: ["Akquise-Runs", "Template-System", "Lead-Pipeline", "Outreach-Tracking"],
  },
] as const;

export const integrations = [
  "Meta",
  "Microsoft Teams",
  "WordPress",
  "Stripe",
  "Twilio",
  "WhatsApp",
  "Indeed",
  "Apify",
  "MinIO",
] as const;

export const plans = [
  {
    name: "Starter",
    price: "99€",
    text: "Für kleine Vermittlungsteams, die strukturierter starten wollen.",
    featured: false,
    features: ["Bis 100 Bewerber", "KI-Dokumentenanalyse", "Basis-Matching", "E-Mail Support"],
  },
  {
    name: "Professional",
    price: "299€",
    text: "Für wachsende Teams mit KI-Agenten, Portalen und Automatisierung.",
    featured: true,
    features: ["Unbegrenzte Bewerber", "Alle KI-Agenten", "Alle Portale", "WhatsApp-Kommunikation"],
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    text: "Für Plattformen, White-Label, eigene Prozesse und besondere Compliance.",
    featured: false,
    features: ["White-Label", "On-Premise Option", "Dedizierter Support", "Individuelle Integrationen"],
  },
] as const;

export const testimonials = [
  {
    name: "Aylin Karaca",
    role: "Geschäftsführerin",
    company: "TalentBridge DACH",
    quote: "Jobdenker bündelt unsere verstreuten Prozesse. Besonders Matching und CV-Generator sparen uns jeden Tag echte Zeit.",
    image: "/testimonials/aylin-karaca.svg",
    imageAlt: "Portrait von Aylin Karaca",
  },
  {
    name: "Martin Scholz",
    role: "Head of Recruiting",
    company: "MittelstandPlus",
    quote: "Die anonymisierten Profile machen die erste Auswahl sauberer, schneller und für unsere Fachbereiche deutlich verständlicher.",
    image: "/testimonials/martin-scholz.svg",
    imageAlt: "Portrait von Martin Scholz",
  },
  {
    name: "Selin Demir",
    role: "Operations Lead",
    company: "EuropeWork",
    quote: "WhatsApp, Dokumente und Status sind endlich an einem Ort. Das merkt man sofort in der Kommunikation mit Kandidaten.",
    image: "/testimonials/selin-demir.svg",
    imageAlt: "Portrait von Selin Demir",
  },
] as const;

export const processSteps = [
  "Lead erfassen",
  "Dokumente analysieren",
  "Profil vervollständigen",
  "Matching starten",
  "CV generieren",
  "Platzierung begleiten",
] as const;

export const valueCards = [
  { iconName: "heartHandshake", title: "Menschlich", text: "Automatisierung unterstützt die Beziehung, sie ersetzt sie nicht." },
  { iconName: "zap", title: "Schnell", text: "Weniger manuelle Schritte, kürzere Wege, bessere Entscheidungen." },
  { iconName: "shieldCheck", title: "Sicher", text: "DSGVO, Anonymisierung und klare Freigaben von Anfang an." },
  { iconName: "globe2", title: "International", text: "Mehrsprachige Prozesse für Bewerber, Teams und Arbeitgeber." },
] as const;

export const adminFeatures = [
  { iconName: "usersRound", title: "Bewerberverwaltung", text: "Alle Kandidaten, Dokumente, Aufgaben und Stati in einem Cockpit." },
  { iconName: "sparkles", title: "KI-Profilanalyse", text: "Automatische Extraktion aus CV, Pass, Zertifikat und Freitext." },
  { iconName: "target", title: "Matching", text: "Score, Begründung und Top-Vorschläge pro offener Stelle." },
  { iconName: "fileText", title: "CV-Export", text: "Anonyme PDF-CVs in verschiedenen Sprachen und Layouts." },
  { iconName: "messageCircle", title: "Kommunikation", text: "WhatsApp-Updates und interne Notizen bleiben am Profil." },
  { iconName: "calendarCheck", title: "Visa-Tracking", text: "Statusführung für internationale Vermittlungsprozesse." },
] as const;

export const blogPosts = [
  {
    category: "KI & Automatisierung",
    title: "Wie KI-Matching Vermittler entlastet",
    teaser: "Warum Scores nur dann gut sind, wenn sie erklärbar bleiben.",
    image: "/blog/ai-recruiting-automation.png",
    imageAlt: "KI-gestützte Recruiting-Automatisierung mit Kandidatenprofilen",
    date: "19 Jun 2026",
    readTime: "4 min read",
  },
  {
    category: "Recruiting-Praxis",
    title: "Anonyme CVs im Arbeitgebergespräch",
    teaser: "So schützt du Bewerberdaten und beschleunigst die Vorauswahl.",
    image: "/blog/cv-generation-privacy.png",
    imageAlt: "Anonymisierte CV-Profile und Datenschutz im Recruiting",
    date: "12 Jun 2026",
    readTime: "5 min read",
  },
  {
    category: "Integrationen",
    title: "Meta Lead Ads direkt in den Bewerberflow",
    teaser: "Aus Kampagnen-Leads werden strukturierte Kandidatenprofile.",
    image: "/blog/integrations-workflow.svg",
    imageAlt: "Vernetzte Recruiting-Integrationen und Datenflüsse",
    date: "5 Jun 2026",
    readTime: "3 min read",
  },
  {
    category: "International",
    title: "Visa-Prozesse sichtbar machen",
    teaser: "Status-Tracking verhindert Rückfragen und unnötige Wartezeit.",
    image: "/blog/visa-status-tracking.svg",
    imageAlt: "Status-Board für Visa- und Dokumentenprozesse",
    date: "29 Mai 2026",
    readTime: "4 min read",
  },
  {
    category: "Sales",
    title: "Akquise automatisieren ohne beliebig zu wirken",
    teaser: "Gute Templates, bessere Daten und saubere Nachverfolgung.",
    image: "/blog/acquisition-agent.png",
    imageAlt: "Akquise-Agent mit Pipeline und Arbeitgeberdaten",
    date: "21 Mai 2026",
    readTime: "6 min read",
  },
  {
    category: "Operations",
    title: "Dokumente aus Teams und Mail bündeln",
    teaser: "Warum zentrale Dokumentenprozesse die Fehlerquote senken.",
    image: "/blog/whatsapp-recruiting.png",
    imageAlt: "Kommunikations- und Dokumentenworkflow für Recruiting-Teams",
    date: "14 Mai 2026",
    readTime: "3 min read",
  },
] as const;

export const faqItems = [
  {
    question: "Für wen ist Jobdenker gedacht?",
    answer:
      "Jobdenker richtet sich an Personalvermittler, Recruiting-Teams, Arbeitgeberportale und Vertriebsteams, die Bewerber, Stellen, Kommunikation und Akquise in einer Plattform bündeln wollen.",
    category: "Plattform",
  },
  {
    question: "Kann Jobdenker CVs und Dokumente automatisch auslesen?",
    answer:
      "Ja. CVs, Pässe, Zertifikate und weitere Dokumente können in strukturierte Kandidatenprofile übersetzt werden, damit weniger manuelle Dateneingabe nötig ist.",
    category: "KI",
  },
  {
    question: "Wie funktioniert das KI-Matching?",
    answer:
      "Kandidaten und Stellen werden anhand von Qualifikation, Sprache, Erfahrung und Verfügbarkeit bewertet. Der Score ist nachvollziehbar und kann operativ für Shortlists genutzt werden.",
    category: "Matching",
  },
  {
    question: "Sind anonymisierte Arbeitgeber-CVs möglich?",
    answer:
      "Ja. Aus geprüften Profildaten lassen sich anonymisierte und mehrsprachige PDF-CVs erzeugen, bevor personenbezogene Daten freigegeben werden.",
    category: "CV",
  },
  {
    question: "Welche Integrationen sind vorgesehen?",
    answer:
      "Jobdenker ist für Workflows mit Meta Lead Ads, Microsoft Teams, WordPress, Stripe, Twilio, WhatsApp, Indeed, Apify und Storage-Lösungen wie MinIO ausgelegt.",
    category: "Integrationen",
  },
  {
    question: "Kann die Kommunikation über WhatsApp laufen?",
    answer:
      "Ja. Kandidatenkommunikation kann über WhatsApp-Flows unterstützt und am Profil dokumentiert werden, damit Informationen nicht in privaten Chats verloren gehen.",
    category: "Kommunikation",
  },
  {
    question: "Gibt es verschiedene Portale für Rollen?",
    answer:
      "Ja. Jobdenker sieht eigene Ansichten für Personalvermittler, Arbeitgeber, Bewerber und Vertriebsteams vor, die trotzdem auf derselben Datenbasis arbeiten.",
    category: "Portale",
  },
  {
    question: "Wie starte ich am besten?",
    answer:
      "Am einfachsten ist eine Demo. Dort sehen wir gemeinsam, welche Workflows bei dir zuerst automatisiert werden sollten und welche Module dafür relevant sind.",
    category: "Start",
  },
] as const;
