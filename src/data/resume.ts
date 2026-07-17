/**
 * resume.ts
 * ─────────────────────────────────────────────────────
 * Single source of truth for all CV / resume content.
 * Update this file to change anything displayed on the site.
 */

// ── Personal Info ─────────────────────────────────────
export const PERSONAL = {
  name:     'Dorth Arenas',
  nameJp:   'ドース・アレナス',
  phone:    '786-643-3818',
  email:    'dorth0908@gmail.com',
  location: 'Orlando, FL',
  linkedin: 'linkedin.com/in/dortharenas',
  tagline:
    'Biomedical Sciences student · Researcher · Lifeguard · Honors Scholar',
};

// ── Education ─────────────────────────────────────────
export const EDUCATION = [
  {
    degree:   'Bachelor of Science in Biomedical Sciences',
    school:   'University of Central Florida',
    date:     'Expected December 2026',
    gpa:      '3.65 / 4.0',
    courses: [
      'Honors Human Anatomy & Lab',
      'Human Physiology & Lab',
      'Immunology & Lab',
      'Laboratory Virtual Simulations in Physiology',
    ],
  },
  {
    degree:  'Associate in Arts — Honors',
    school:  'Valencia College',
    date:    'July 2024',
    gpa:     null,
    courses: [],
  },
];

// ── Stats ─────────────────────────────────────────────
export const STATS = [
  { value: '3.65', label: 'GPA' },
  { value: '150+', label: 'Volunteer Hours' },
  { value: '5+',   label: 'Certifications' },
  { value: '3',    label: 'Years Research' },
];

// ── Work Experience ────────────────────────────────────
export const EXPERIENCE = [
  {
    title:   'Deep Water Lifeguard',
    org:     'Volcano Bay — Universal Orlando Resorts',
    date:    'January 2025 – Present',
    location:'Orlando, FL',
    bullets: [
      'Perform emergency rescues and provide First Aid, CPR, and AED care in high-risk aquatic environments.',
      'Maintain continuous surveillance of deep-water attractions to ensure guest safety.',
      'Apply aquatic rescue, spinal management, and emergency action protocols.',
      'Prevent incidents through proactive hazard recognition and continuous monitoring.',
    ],
  },
  {
    title:   'Guest Services & Attractions Associate',
    org:     'Walt Disney World Resorts',
    date:    'July 2024 – February 2025',
    location:'Lake Buena Vista, FL',
    bullets: [
      'Delivered exceptional guest service in a fast-paced, high-volume environment.',
      'Adapted to multiple operational roles and changing guest needs.',
      'Resolved guest concerns through effective communication and critical thinking.',
      'Maintained Disney\'s standard of professionalism and service excellence.',
    ],
  },
  {
    title:   'Medical Assistant',
    org:     'Orthopedic & Podiatric Center Caracas',
    date:    '2018 – 2020',
    location:'Caracas, Venezuela',
    bullets: [
      'Assisted orthopedic surgeons and podiatrists in patient care and clinical procedures.',
      'Collaborated with healthcare professionals to ensure efficient patient flow.',
      'Coordinated patient scheduling, documentation, and administrative operations.',
      'Maintained accurate patient records supporting daily clinical operations.',
    ],
  },
];

// ── Research ──────────────────────────────────────────
export const RESEARCH = [
  {
    title:   'Gait Event Detection & Torque Adjustment for Multi-Terrain Locomotion',
    org:     'University of Central Florida',
    date:    'January 2026 – Present',
    mentors: 'Dr. Sy Nguyen & Dr. Hwan Choi',
    bullets: [
      'Contribute to biomechanics research on gait analysis and adaptive locomotion across terrains.',
      'Assist in development and calibration of sensor-based systems for motion detection.',
      'Support data collection and analysis to evaluate gait events and movement efficiency.',
      'Participate in experimental setup, testing, and validation of system performance.',
    ],
  },
  {
    title:   'PPARA Gene & Athletic Performance: Genetic Relationships through Sequence Analysis',
    org:     'Valencia College Honors Research',
    date:    '2023 – 2024',
    mentors: null,
    bullets: [
      'Developed the proposal "Effect of PPARA Gene SNPs on Athletic Performance."',
      'Completed Honors Research Process (IDH 2911) and Honors Research Project (IDH 2912).',
      'Presented findings at the Valencia Undergraduate Research Showcase (April 2024).',
      'Applied bioinformatics tools including VISTA Gateway and PROMO ALGGEN.',
    ],
  },
];

// ── Certifications ─────────────────────────────────────
export const CERTIFICATIONS = [
  { icon: '🩺', name: 'CPR, First Aid & AED Certification',             org: 'American Red Cross · January 2025' },
  { icon: '🧠', name: 'Adult Mental Health First Aid (MHFA)',            org: 'National Council for Mental Wellbeing · February 2026' },
  { icon: '🩸', name: 'Stop the Bleed Certification',                    org: 'American College of Surgeons · February 2026' },
  { icon: '📋', name: 'Research Ethics & Integrity',                     org: 'CITI Program · November 2023' },
  { icon: '🔬', name: 'Biomedical Responsible Conduct of Research',      org: 'CITI Program · November 2023' },
  { icon: '💻', name: 'Basic Training in Bioinformatics',                org: 'VISTA Gateway & PROMO ALGGEN · April 2024' },
];

// ── Skills ────────────────────────────────────────────
export const SKILLS = {
  Languages:    ['English (Professional)', 'Spanish (Native) — CLEP 78/80'],
  Laboratory:   ['Bioinformatics', 'Sequence Analysis', 'Biomechanical Data Collection', 'Motion Analysis', 'Scientific Literature Review'],
  Computer:     ['Microsoft Office Suite', 'VISTA Gateway', 'PROMO ALGGEN'],
  Clinical:     ['CPR / AED', 'First Aid', 'Aquatic Rescue', 'Spinal Management', 'Emergency Action Protocols'],
};

// ── Honors & Awards ───────────────────────────────────
export const HONORS = [
  { title: "President's List", org: 'Valencia College', date: 'May 2023 – July 2024' },
  { title: 'Seneff Honors College Scholarship', org: 'Valencia College', date: 'Aug 2023 – July 2024' },
  { title: 'Burnett Honors Scholar', org: 'University of Central Florida', date: 'August 2024 – Present' },
  { title: 'T-LEARN Scholar', org: 'University of Central Florida', date: 'Aug 2024 – May 2025' },
];

// ── Activities & Clubs ─────────────────────────────────
export const ACTIVITIES = [
  { name: 'Phi Delta Epsilon Pre-Medical Fraternity', org: 'UCF', date: 'Jan 2025 – Present' },
  { name: 'Phi Theta Kappa Honor Society', org: 'Valencia College', date: 'May 2024 – Present' },
  { name: 'Volunteer — Surgery Guest Services', org: 'Orlando Health (~150 hrs)', date: 'June 2025 – Present' },
  { name: 'AAOS Annual Meeting (Chicago & Orlando)', org: 'Conference Attendee', date: '2016 · 2022' },
  { name: 'Deportivo La Guaria — Soccer', org: 'Caracas, Venezuela', date: '2010 – 2019' },
  { name: 'Club Táchira — Baseball', org: 'Caracas, Venezuela', date: '2012 – 2019' },
];
