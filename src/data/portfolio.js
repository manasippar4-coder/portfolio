export const portfolioData = {
  personal: {
    name: 'Manas Ippar',
    title: 'B.Sc. Computer Science Student',
    location: 'Nashik, Maharashtra, India',
    phone: '8483903602',
    email: 'YOUR_EMAIL_HERE',
    initials: 'MI',
    bio: 'I am Manas Ippar, a B.Sc. Computer Science student from Nashik, Maharashtra, currently building my foundation in software development and modern web technologies. I enjoy learning by building practical projects and exploring how technology can solve real-world problems.',
    tagline: 'Building ideas into digital experiences.',
    status: 'OPEN TO LEARNING',
  },
  
  education: {
    institution: 'Indira College of Commerce and Science',
    degree: 'B.Sc. Computer Science',
    university: 'Savitribai Phule Pune University',
    startYear: 2023,
    endYear: 2026,
    cgpa: 7.14,
  },

  skills: {
    programming: [
      { name: 'Java', icon: '☕', description: 'Object-oriented programming' },
      { name: 'C', icon: '⚙️', description: 'Systems programming' },
      { name: 'Python', icon: '🐍', description: 'Scripting and data processing' },
    ],
    web: [
      { name: 'HTML', icon: '🌐', description: 'Semantic markup' },
      { name: 'CSS', icon: '🎨', description: 'Styling and responsive design' },
      { name: 'JavaScript', icon: '⚡', description: 'Interactive web experiences' },
    ],
    database: [
      { name: 'PostgreSQL', icon: '🗄️', description: 'Relational database management' },
    ],
  },

  projects: [
    {
      id: 1,
      number: '01',
      title: 'Smart Parking System',
      description: 'A smart parking management system designed to help manage parking spaces efficiently and provide a structured digital parking experience.',
      technologies: ['Java', 'HTML', 'CSS', 'PostgreSQL'],
      github: 'YOUR_GITHUB_REPO_URL',
      liveDemo: 'YOUR_LIVE_DEMO_URL',
      featured: true,
    },
  ],

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  social: {
    github: 'YOUR_GITHUB_URL',
    linkedin: 'YOUR_LINKEDIN_URL',
  },

  interests: [
    'Software Development',
    'Web Development',
    'Database Design',
    'Problem Solving',
    'Technology Innovation',
  ],
}
