export interface Solutions {
  title: string;
  href: string;
  description: string;
}

export interface Features {
  title: string;
  href: string;
  description: string;
}

export const Solutions: Solutions[] = [
  {
    title: "Daai Sheets",
    href: "/sheets",
    description:
      "AI-powered spreadsheet with automatic data cleaning and insights",
  },
  {
    title: "Daai Tables",
    href: "/tables",
    description:
      "Intelligent data tables with instant visualization recommendations",
  },
  {
    title: "CSV Analyzer",
    href: "/csv-analyzer",
    description:
      "Upload and instantly analyze CSV files with AI-powered insights",
  },
  {
    title: "Formula Generator",
    href: "/formula-generator",
    description: "AI-assisted formula creation without Excel expertise",
  },
  {
    title: "Dashboard Builder",
    href: "/dashboard-builder",
    description: "Automated dashboard creation from your spreadsheet data",
  },
  {
    title: "Data Cleaner",
    href: "/data-cleaner",
    description: "AI-powered data cleaning and transformation tool",
  },
  {
    title: "Report Generator",
    href: "/report-generator",
    description: "Generate professional reports from your data in minutes",
  },
] as const;

export const Features: Features[] = [
  {
    title: "AI Data Cleaning",
    href: "/features/ai-cleaning",
    description: "Automatically clean messy data with AI-powered suggestions"
  },
  {
    title: "Smart Insights",
    href: "/features/smart-insights",
    description: "Get instant AI-generated insights from your spreadsheet data"
  },
  {
    title: "Auto Charts & Dashboards",
    href: "/features/auto-dashboards",
    description: "AI suggests and creates the perfect visualizations for your data"
  },
  {
    title: "Formula Assistant",
    href: "/features/formula-assistant",
    description: "Describe what you need and AI generates the formulas for you"
  },
  {
    title: "Cross-Platform Sync",
    href: "/features/cross-platform",
    description: "Work seamlessly across web, desktop, and mobile apps"
  },
  {
    title: "One-Click Reports",
    href: "/features/one-click-reports",
    description: "Generate professional reports from your data with a single click"
  },
  {
    title: "Offline Mode",
    href: "/features/offline-mode",
    description: "Full functionality even without internet connection"
  }
] as const;