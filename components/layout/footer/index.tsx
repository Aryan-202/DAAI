"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Bot,
  Code,
  FileText,
  Globe,
  HelpCircle,
  Mail,
  MessageSquare,
  Shield,
  Sparkles,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Zap,
  TrendingUp,
  BarChart,
  Database,
  Users,
  BookOpen,
  Briefcase,
  Heart,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background border-t">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">Daai</span>
                <div className="text-xs text-muted-foreground">Data AI Intelligence</div>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              The intelligent spreadsheet that transforms your data into actionable insights. 
              Clean, analyze, and visualize data with AI-powered automation.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="font-medium">Stay in the loop</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  type="email"
                  className="flex-1"
                />
                <Button size="icon" className="shrink-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Subscribe to get product updates and AI data tips.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Product */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Product
                </h3>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <link.icon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutionsLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <link.icon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resourcesLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <link.icon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        <link.icon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Daai AI. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all"
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="hover:text-foreground transition-colors">
                <Shield className="h-3 w-3 inline mr-1" />
                Security
              </Link>
            </div>
          </div>

          {/* Made with love */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground inline-flex items-center gap-1">
              Made with
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 animate-pulse" />
              by the Daai team
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Powered by AI • Built for data analysts • Loved by teams worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Data
const productLinks = [
  { name: 'Features', href: '/features', icon: Sparkles },
  { name: 'Pricing', href: '/pricing', icon: TrendingUp },
  { name: 'Use Cases', href: '/use-cases', icon: Briefcase },
  { name: 'Integrations', href: '/integrations', icon: Zap },
  { name: 'Roadmap', href: '/roadmap', icon: BarChart },
  { name: 'Changelog', href: '/changelog', icon: Code },
];

const solutionsLinks = [
  { name: 'Data Cleaning', href: '/solutions/cleaning', icon: Database },
  { name: 'Analytics', href: '/solutions/analytics', icon: TrendingUp },
  { name: 'Visualization', href: '/solutions/visualization', icon: BarChart },
  { name: 'For Teams', href: '/solutions/teams', icon: Users },
  { name: 'For Enterprises', href: '/solutions/enterprise', icon: Briefcase },
  { name: 'For Startups', href: '/solutions/startups', icon: Zap },
];

const resourcesLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Tutorials', href: '/tutorials', icon: Sparkles },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Help Center', href: '/help', icon: HelpCircle },
];

const companyLinks = [
  { name: 'About', href: '/about', icon: Briefcase },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: Mail },
  { name: 'Press', href: '/press', icon: MessageSquare },
  { name: 'Status', href: '/status', icon: Globe },
  { name: 'Partners', href: '/partners', icon: Users },
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/daai', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/daai', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/daai', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/daai', icon: Youtube },
  { name: 'Instagram', href: 'https://instagram.com/daai', icon: Instagram },
];

export default Footer;