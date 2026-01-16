// Footer Constants
export const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Changelog', href: '/changelog' },
  ],
  solutions: [
    { name: 'Data Cleaning', href: '/solutions/cleaning' },
    { name: 'Analytics', href: '/solutions/analytics' },
    { name: 'Visualization', href: '/solutions/visualization' },
    { name: 'For Teams', href: '/solutions/teams' },
    { name: 'For Enterprises', href: '/solutions/enterprise' },
    { name: 'For Startups', href: '/solutions/startups' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community', href: '/community' },
    { name: 'Help Center', href: '/help' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press', href: '/press' },
    { name: 'Status', href: '/status' },
    { name: 'Partners', href: '/partners' },
  ],
} as const;

export const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/daai', icon: 'twitter' },
  { name: 'GitHub', href: 'https://github.com/daai', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/daai', icon: 'linkedin' },
  { name: 'YouTube', href: 'https://youtube.com/daai', icon: 'youtube' },
  { name: 'Instagram', href: 'https://instagram.com/daai', icon: 'instagram' },
] as const;

export const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
] as const;