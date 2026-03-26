import React from 'react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/health-hygiene-logo.png';

interface HeaderProps {
  showNavigation?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNavigation = true }) => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Health and Hygiene Logo" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">Health & Hygiene</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">AI Wellness Assistant</p>
            </div>
          </div>

          {/* Navigation */}
          {showNavigation && (
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/symptoms-az" className="text-foreground hover:text-primary transition-colors">
                Symptoms A-Z
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <Button variant="medical" size="sm">
                Emergency Guide
              </Button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;