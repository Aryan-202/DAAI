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
import { Menu } from "lucide-react";

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
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Daai</span>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Solutions Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
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
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
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
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            {/* Documentation */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs" className={navigationMenuTriggerStyle()}>
                  Docs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Auth Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started Free</Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 py-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Solutions</h3>
                  <div className="space-y-2">
                    {Solutions.map((solution) => (
                      <Link
                        key={solution.title}
                        href={solution.href}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
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
                  <h3 className="text-lg font-semibold">Features</h3>
                  <div className="space-y-2">
                    {Features.map((feature) => (
                      <Link
                        key={feature.title}
                        href={feature.href}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {feature.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 border-t pt-6">
                  <Link href="/pricing">
                    <Button variant="ghost" className="w-full justify-start">
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button variant="ghost" className="w-full justify-start">
                      Documentation
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full">Get Started Free</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;