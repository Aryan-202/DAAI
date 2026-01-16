"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Solutions, Features } from "./constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bot } from "lucide-react";
import { motion } from "motion/react";

const Header = () => {
  const NavMenuItem = ({
    title,
    href,
    description,
  }: {
    title: string;
    href: string;
    description: string;
  }) => (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">Daai</span>
              <div className="text-xs text-muted-foreground">Data AI Intelligence</div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation - Hidden on mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {/* Solutions Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50 border-0 shadow-none">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {Solutions.map((solution) => (
                    <NavMenuItem key={solution.title} {...solution} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Features Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50 border-0 shadow-none">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {Features.map((feature) => (
                    <NavMenuItem key={feature.title} {...feature} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Pricing */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/pricing"
                  className="bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 border-0 shadow-none text-foreground hover:text-foreground h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            {/* Documentation */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/docs" 
                  className="bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 border-0 shadow-none text-foreground hover:text-foreground h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Docs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/contact" 
                  className="bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 border-0 shadow-none text-foreground hover:text-foreground h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Desktop Auth Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hover:bg-accent/50">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden hover:bg-accent/50">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-8 py-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2 px-4">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-lg font-bold tracking-tight">Daai</span>
                    <div className="text-xs text-muted-foreground">Data AI Intelligence</div>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-4">
                      Solutions
                    </h3>
                    <div className="space-y-1">
                      {Solutions.map((solution) => (
                        <Link
                          key={solution.title}
                          href={solution.href}
                          className="block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="font-medium">{solution.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {solution.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-4">
                      Features
                    </h3>
                    <div className="space-y-1">
                      {Features.map((feature) => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          className="block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="font-medium">{feature.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {feature.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    {['pricing', 'docs', 'contact'].map((item) => (
                      <Link
                        key={item}
                        href={`/${item}`}
                        className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="space-y-3 border-t pt-6 px-4">
                  <Link href="/login" className="block">
                    <Button variant="outline" className="w-full hover:bg-accent/50">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" className="block">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;