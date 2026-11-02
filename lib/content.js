// All of the portfolio's copy lives here, so updating the site means editing
// this one file rather than hunting through components.

export const profile = {
  name: "Md Robiul Islam",
  role: "Software Engineer",
  focus: "Backend systems & data pipelines",
  location: "Dhaka, Bangladesh",
  availability: "Open to opportunities",
  summary:
    "I build ETL pipelines, search infrastructure and the APIs that sit on top of them — currently as a Software Engineer Intern at W3 Engineers Ltd.",
  email: "islamrobiul5444@gmail.com",
  phone: { display: "+880 1701 508229", href: "tel:+8801701508229" },
  github: { display: "github.com/robiulislam99", href: "https://github.com/robiulislam99" },
  linkedin: {
    display: "in/md-robiul-islam-a926aa206",
    href: "https://www.linkedin.com/in/md-robiul-islam-a926aa206/",
  },
  // To show a "Résumé" button, add the PDF as public/resume.pdf and set this to
  // "/resume.pdf". Leave it null to hide the button.
  resume: null,
};

export const sections = [
  { id: "about", label: "About", stage: "SOURCE" },
  { id: "experience", label: "Experience", stage: "INGEST" },
  { id: "projects", label: "Projects", stage: "TRANSFORM" },
  { id: "skills", label: "Skills", stage: "VALIDATE" },
  { id: "achievements", label: "Achievements", stage: "SERVE" },
  { id: "contact", label: "Contact", stage: "SINK" },
];

export const pipeline = [
  { stage: "ingest", items: "Python · Go · Java · C++ · SQL" },
  { stage: "transform", items: "Django · Next.js · PySpark · Iceberg" },
  { stage: "validate", items: "Ruff · SonarQube · Pytest · Playwright" },
];

export const about = {
  // \u2011 is a non-breaking hyphen: it keeps "data-heavy" on one line on phones.
  title: "I build the plumbing behind data\u2011heavy products.",
  paragraphs: [
    "I'm a Software Engineer Intern at W3 Engineers Ltd., working on a local data engineering pipeline: ETL workflows in PySpark and Apache Iceberg, with Elasticsearch, DynamoDB and Qdrant powering search, analytics and semantic similarity.",
    "I studied Computer Science and Engineering at Khulna University of Engineering & Technology (KUET), where my thesis tackled traffic sign recognition under rain, fog, blur and low light using YOLO-based detection.",
    "Outside of pipelines, I've shipped full-stack apps in Next.js and Go, and solved 500+ problems on Codeforces and LeetCode.",
  ],
  facts: [
    { label: "Based in", value: "Dhaka, Bangladesh" },
    { label: "Currently", value: "SWE Intern, W3 Engineers" },
    { label: "Education", value: "BSc in CSE, KUET" },
    { label: "Problem solving", value: "500+ solved" },
  ],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "W3 Engineers Ltd.",
    period: "May 2026 — Present",
    points: [
      "Build ETL workflows for a local data engineering pipeline with PySpark and Apache Iceberg, using Elasticsearch, DynamoDB and Qdrant for scalable processing, search and semantic similarity.",
      "Develop and maintain containerized data pipelines on Docker-based infrastructure, covering automated exports, image ranking and labeling, and data-quality workflows.",
      "Ramped up on Python, Django, Next.js and Docker alongside code-quality tooling (Ruff, SonarQube) and CI/CD practices.",
    ],
    stack: ["Python", "PySpark", "Apache Iceberg", "Elasticsearch", "DynamoDB", "Qdrant", "Docker"],
  },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    school: "Khulna University of Engineering & Technology (KUET)",
    period: "Graduated 2025",
    detail:
      "Coursework and lab work in systems, databases and computer vision, capped by a thesis on traffic sign recognition in adverse conditions.",
  },
];

export const projects = [
  {
    name: "Booking Lake",
    tag: "Data pipeline",
    description:
      "Dockerized ETL pipeline for Booking.com-style data processing, with search, analytics and semantic similarity layered on top. CI/CD and code quality automated with Ruff and SonarQube.",
    stack: ["PySpark", "Apache Iceberg", "Docker", "Elasticsearch", "DynamoDB", "Qdrant"],
    href: "https://github.com/robiulislam99/booking-lake",
  },
  {
    name: "TravelSphere",
    tag: "Web app",
    description:
      "Travel discovery app with country exploration, attractions and weather integration. RESTful APIs, session-based auth, AJAX UI updates and a modular MVC design with 90%+ controller test coverage.",
    stack: ["Go", "Beego", "REST", "Session auth"],
    href: "https://github.com/robiulislam99/TravelSphere",
  },
  {
    name: "KenaKata",
    tag: "E-commerce",
    description:
      "Production-style storefront on the Next.js App Router using SSR, ISR and SSG. Product browsing, cart, checkout, auth and a role-protected admin dashboard, tested with Vitest.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "Zod"],
    href: "https://github.com/robiulislam99/kenakata-online-store-nextjs",
  },
];

export const thesis = {
  name: "Traffic Sign Recognition in Adverse Conditions",
  tag: "Undergraduate thesis · KUET",
  description:
    "A YOLO-based detection system built to hold up under rain, fog, blur, low light and occlusion, with a custom dataset annotation pipeline and augmentation techniques to close the gap with real-world conditions.",
  stack: ["YOLO", "Computer vision", "Data annotation", "Augmentation"],
};

export const skills = [
  { label: "Languages", items: ["Python", "Go", "Java", "C++", "C", "SQL"] },
  {
    label: "Frameworks",
    items: ["Django", "Django REST Framework", "Beego", "Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "PostGIS", "MySQL", "SQLite", "Apache Iceberg", "Qdrant"],
  },
  { label: "Data engineering", items: ["PySpark", "Elasticsearch", "Kibana"] },
  {
    label: "Tools & quality",
    items: ["Docker", "Git", "GitHub Actions", "Playwright", "Pytest", "Scrapy", "Ruff", "SonarQube"],
  },
];

export const achievements = [
  {
    icon: "code",
    title: "500+ problems solved",
    detail: "Across Codeforces and LeetCode; competed in the Intra KUET Programming Contest (IKPC).",
  },
  {
    icon: "flag",
    title: "Executive, BitFest 2025",
    detail: "Executive for the 3rd KUET CSE National Fest.",
  },
  {
    icon: "award",
    title: "Sports Secretary",
    detail: "CSE Association, Khulna University of Engineering & Technology.",
  },
];
