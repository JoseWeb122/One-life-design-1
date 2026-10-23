// ------------------------------------------------------------------
// Single source of truth for all business content.
// Everything here is sourced from https://www.olomconsulting.org/ unless
// it is flagged `proposed` (editable placeholder copy for client review).
// ------------------------------------------------------------------

export const asset = (p: string) => `./${p}`;

export const company = {
  name: "One Life One Mile Consulting, Inc.",
  short: "One Life One Mile",
  tagline: "Transforming Driver Well-Being. One Mile at a Time.",
  mission:
    "Providing innovative mobile healthcare solutions—one life, one mile at a time.",
  phone: "(888) 543-3763",
  phoneHref: "tel:+18885433763",
  email: "info@olomconsulting.org",
  emailHref: "mailto:info@olomconsulting.org",
  address: ["13100 Wortham Center Dr, 3rd Floor, Suite 310", "Houston, Texas 77065"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=13100+Wortham+Center+Dr+3rd+floor+suite+310+Houston+TX+77065",
  founder: "Tremcia Roddy",
  experience: "25+ years",
  compliance: "CLIA-waived testing, HIPAA & OSHA compliant",
  labsUrl: "https://www.ultalabtests.com/partners/onelifeonemileconsultinginc",
  privacyUrl: "https://olomconsulting.org/privacy-policy",
  termsUrl: "https://olomconsulting.org/terms-and-conditions",
  liveSite: "https://www.olomconsulting.org/",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591630138035" },
    { label: "Instagram", href: "https://www.instagram.com/olomconsultinginc" },
    { label: "TikTok", href: "https://pro.tiktok.com/t/ZP96t62cGQWqd-hmIK7/" },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/tremcia-roddy-1b444841b" },
  ],
};

export const disclaimer =
  "Preventive screening services only. We do not provide medical diagnosis, treatment, or emergency care. In a medical emergency, call 911.";

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  short: string;
  challenge: string;
  outcome: string;
  image: string;
  imageAlt: string;
  primary?: boolean;
  heroHeadline: string;
  intro: string;
  audience: string[];
  includes: string[];
  approach: { title: string; text: string }[];
  note?: string;
  related: string[];
  cta?: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "preventive-screening-programs",
    title: "Preventive Health Screening Programs",
    kicker: "Transportation & community organizations",
    short:
      "Structured, on-site screening programs that bring preventive health education and early-detection screenings to drivers, teams, and communities.",
    challenge:
      "Cardiovascular and metabolic risk factors can go unnoticed when people are busy keeping industries and communities moving.",
    outcome:
      "Earlier awareness of potential health concerns, and a clear next step to discuss results with a personal healthcare provider.",
    image: "img/fleet-depot.jpg",
    imageAlt:
      "Truck drivers speaking with a healthcare professional at a pop-up screening table at a fleet depot",
    primary: true,
    heroHeadline: "Structured screening programs for the people who keep us moving.",
    intro:
      "Our flagship offering brings professional preventive screening and wellness education to transportation organizations and community groups. Programs are coordinated end to end, customized to your event size, and delivered on location.",
    audience: [
      "Transportation and fleet organizations",
      "Community centers, churches, and nonprofit organizations",
      "Employers and schools planning a wellness event",
    ],
    includes: [
      "Preventive health screenings coordinated for your location",
      "Wellness education and resources for participants",
      "Event coordination across the United States, based on scope and staffing availability",
      "Customized pricing based on a consultation",
    ],
    approach: [
      {
        title: "Consult",
        text: "We learn about your organization, participants, and goals for the event.",
      },
      {
        title: "Customize",
        text: "Services, staffing, laboratory coordination, and location are scoped together.",
      },
      {
        title: "Deliver",
        text: "Our team and qualified partners run the screening event professionally on site.",
      },
    ],
    note:
      "Certain services may be performed by qualified independent third-party vendors who maintain their own compliance standards.",
    related: ["corporate-occupational-health", "mobile-healthcare-services", "laboratory-testing"],
  },
  {
    slug: "corporate-occupational-health",
    title: "Corporate & Occupational Health",
    kicker: "For employers and fleets",
    short:
      "Customized wellness programs, drug testing, biometric screenings, and employee health services, with DOT physicals and cardiac ultrasound screening through preferred partners.",
    challenge:
      "Employers need compliant, convenient employee health services without pulling teams away from the job for long.",
    outcome:
      "A coordinated, professional on-site program that supports employee wellness and your compliance requirements.",
    image: "img/corporate-screening.jpg",
    imageAlt: "A healthcare worker checking an employee's blood pressure at a workplace screening table",
    heroHeadline: "Employee health services that come to your workplace.",
    intro:
      "From biometric screenings to drug testing and wellness programs, we help employers organize occupational health services with professionalism and attention to regulatory requirements.",
    audience: [
      "Employers and HR or safety teams",
      "Transportation and fleet operators",
      "Organizations planning a corporate wellness event",
    ],
    includes: [
      "Customized corporate wellness programs",
      "Drug testing",
      "Biometric screenings",
      "Employee health services",
      "DOT physicals, provided through our preferred partners",
      "Cardiac ultrasound screening, provided through our preferred partners",
    ],
    approach: [
      {
        title: "Consult",
        text: "We review your workforce, scheduling needs, and the services you want to offer.",
      },
      {
        title: "Coordinate",
        text: "We arrange staffing, partner services, and logistics for your location.",
      },
      {
        title: "Deliver",
        text: "Screenings and services are carried out on site, with professionalism and care.",
      },
    ],
    note:
      "DOT physicals and cardiac ultrasound screening are provided through preferred partners that operate independently.",
    related: ["preventive-screening-programs", "laboratory-testing", "mobile-healthcare-services"],
  },
  {
    slug: "laboratory-testing",
    title: "Comprehensive Laboratory Testing",
    kicker: "Individuals, families & employers",
    short:
      "Choose from hundreds of affordable lab tests, with professional mobile phlebotomists and fast, convenient concierge-style service.",
    challenge:
      "Getting routine lab work often means delays, travel, and waiting rooms.",
    outcome:
      "Convenient access to the lab tests you choose, collected by a professional who comes to you.",
    image: "img/lab-testing.jpg",
    imageAlt: "A laboratory professional labeling blood sample tubes in a modern lab",
    heroHeadline: "Hundreds of lab tests, without the unnecessary delays.",
    intro:
      "Order the lab work you need and let a professional mobile phlebotomist handle collection at a location that suits you. Testing is CLIA-waived, and we operate in line with HIPAA and OSHA requirements.",
    audience: [
      "Individuals and families ordering personal lab work",
      "Employers arranging lab testing for teams",
      "Healthcare providers and community groups",
    ],
    includes: [
      "Hundreds of affordable laboratory tests",
      "Professional mobile phlebotomists",
      "Fast, convenient concierge-style service",
      "Online ordering through our lab-testing partner, Ulta Lab Tests",
    ],
    approach: [
      {
        title: "Order",
        text: "Choose your tests online through our partner, Ulta Lab Tests.",
      },
      {
        title: "Collect",
        text: "A mobile phlebotomist arranges blood collection where it's convenient.",
      },
      {
        title: "Review",
        text: "Discuss your results with your personal healthcare provider.",
      },
    ],
    note:
      "Laboratory services may be performed by qualified independent third-party vendors. Participants are encouraged to consult their healthcare provider regarding results.",
    related: ["mobile-healthcare-services", "dna-testing", "corporate-occupational-health"],
    cta: { label: "Order Your Labs", href: company.labsUrl },
  },
  {
    slug: "mobile-healthcare-services",
    title: "Mobile Healthcare Services",
    kicker: "Home, office & community",
    short:
      "Professional blood collection and select healthcare services brought to your home, office, community center, church, and more.",
    challenge:
      "Travel and scheduling can keep people from getting the care and testing they intend to.",
    outcome:
      "Professional collection and select services delivered at a location that works for you.",
    image: "img/mobile-draw.jpg",
    imageAlt: "A mobile phlebotomist preparing a blood draw for a seated client in an office",
    heroHeadline: "Professional healthcare services, wherever you are.",
    intro:
      "Our mobile team brings blood collection and select healthcare services directly to homes, offices, community centers, churches, and other locations.",
    audience: [
      "Individuals and families who prefer care at home",
      "Offices and employers",
      "Community centers, churches, and schools",
    ],
    includes: [
      "Mobile blood collection by professional phlebotomists",
      "Select healthcare services at your home, office, community center, or church",
      "Fast, convenient concierge-style service",
    ],
    approach: [
      {
        title: "Request",
        text: "Tell us what you need and where you'd like the service.",
      },
      {
        title: "Schedule",
        text: "We coordinate timing and location with you.",
      },
      {
        title: "Visit",
        text: "A professional comes to you for collection or the selected service.",
      },
    ],
    related: ["laboratory-testing", "dna-testing", "preventive-screening-programs"],
  },
  {
    slug: "dna-testing",
    title: "DNA Testing Services",
    kicker: "Personal, legal & immigration needs",
    short:
      "Confidential, reliable DNA testing for personal, legal, and immigration needs.",
    challenge:
      "DNA testing is personal and often time-sensitive, and it calls for privacy and a reliable process.",
    outcome:
      "A confidential testing experience handled with professionalism and respect.",
    image: "img/dna-testing.jpg",
    imageAlt: "Gloved hands handling a sealed DNA collection kit on a clean desk",
    heroHeadline: "Confidential, reliable DNA testing.",
    intro:
      "We provide DNA testing for personal, legal, and immigration needs, delivered with the confidentiality and care these situations deserve.",
    audience: [
      "Individuals and families with personal testing needs",
      "People who need testing for legal matters",
      "People who need testing for immigration purposes",
    ],
    includes: [
      "Confidential DNA testing for personal needs",
      "DNA testing for legal needs",
      "DNA testing for immigration needs",
    ],
    approach: [
      {
        title: "Reach out",
        text: "Contact us to talk through the type of testing you need.",
      },
      {
        title: "Coordinate",
        text: "We help arrange the appropriate next steps.",
      },
      {
        title: "Test",
        text: "Collection is handled professionally and confidentially.",
      },
    ],
    note:
      "Specific requirements vary by purpose. Please contact us to discuss your situation before scheduling.",
    related: ["laboratory-testing", "mobile-healthcare-services", "corporate-occupational-health"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const challenges = [
  {
    n: "01",
    title: "Health risks that go unnoticed",
    why: "Our philosophy page notes that hypertension, diabetes, and untreated metabolic conditions raise long-term health costs and safety risks, especially for commercial drivers.",
    help: "Structured preventive screenings and education that help surface concerns early.",
    link: "preventive-screening-programs",
  },
  {
    n: "02",
    title: "Care that's hard to get to",
    why: "Busy schedules, routes, and shifts make it difficult for people to visit a lab or clinic.",
    help: "Mobile phlebotomists who come to your home, office, community center, or church.",
    link: "mobile-healthcare-services",
  },
  {
    n: "03",
    title: "Compliance that can't be an afterthought",
    why: "Employers and transportation organizations need drug testing, DOT physicals, and employee health services delivered professionally.",
    help: "CLIA-waived testing, HIPAA & OSHA-compliant delivery, and preferred partners for DOT physicals.",
    link: "corporate-occupational-health",
  },
  {
    n: "04",
    title: "Events that take real coordination",
    why: "Corporate and community screening events involve staffing, laboratory coordination, and location planning.",
    help: "End-to-end event coordination, customized to your size, services, and location.",
    link: "preventive-screening-programs",
  },
];

// Proposed structure — the live website does not document a formal process.
export const process = [
  {
    n: "01",
    title: "Consult",
    text: "Share your goals, participants, and timeline. We recommend contacting us 3–4 weeks ahead of an event when possible.",
  },
  {
    n: "02",
    title: "Customize",
    text: "We scope services, staffing, laboratory coordination, and location. Pricing is customized after consultation.",
  },
  {
    n: "03",
    title: "Coordinate",
    text: "We arrange logistics with our team and qualified partners across the United States, depending on scope and staffing.",
  },
  {
    n: "04",
    title: "Screen & follow up",
    text: "Screenings are delivered on site. Participants are encouraged to review results with their personal healthcare provider.",
  },
];

export const principles = [
  { title: "Early detection", text: "Screenings, education, and wellness resources that help surface concerns sooner." },
  { title: "Professional delivery", text: "Experienced healthcare professionals, accurate testing, and compassionate care." },
  { title: "Regulatory compliance", text: "CLIA-waived testing, HIPAA & OSHA compliant." },
  { title: "Community partnership", text: "Working alongside employers, churches, schools, and nonprofits." },
  { title: "Measurable impact", text: "Structured programs that strengthen individuals, organizations, and communities." },
];

export const audiences = [
  "Individuals",
  "Families",
  "Employers",
  "Healthcare providers",
  "Schools",
  "Churches",
  "Nonprofit organizations",
  "Communities nationwide",
];

export const faqs = [
  {
    q: "Are your services medical treatment?",
    a: "No. Our services are preventive screening services only. We do not provide medical diagnosis, treatment, or emergency care. Participants are encouraged to consult their personal healthcare provider regarding results.",
  },
  {
    q: "Do you provide emergency services?",
    a: "No. If you are experiencing a medical emergency, call 911 immediately.",
  },
  {
    q: "Are laboratory and ultrasound services performed by your company?",
    a: "Certain services may be performed by qualified independent third-party vendors. Those providers operate independently and maintain their own compliance standards.",
  },
  {
    q: "How far in advance should we schedule an event?",
    a: "Corporate and community events require advance coordination. We recommend scheduling at least 3–4 weeks in advance when possible.",
  },
  {
    q: "Do you offer nationwide services?",
    a: "Yes. We coordinate services across the United States depending on event scope and staffing availability.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing is customized based on event size, services selected, staffing requirements, laboratory coordination, and location. Quotes are provided after consultation.",
  },
];

// NOTE: the live form uses a dropdown whose options are not publicly visible.
// These are proposed options — confirm against the live form.
export const orgTypes = [
  "Transportation / fleet organization",
  "Employer / corporate",
  "Healthcare provider",
  "School",
  "Church / faith-based organization",
  "Nonprofit organization",
  "Community organization",
  "Individual or family",
  "Other",
];

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", children: true },
  { label: "Philosophy", to: "/about", scrollTo: "philosophy" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];
