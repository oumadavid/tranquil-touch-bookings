import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, User, Menu, X } from "lucide-react";
import { AuthModal } from "./AuthModal";

interface HeaderProps {
  isLoggedIn: boolean;
  userEmail?: string;
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, password: string, name: string) => void;
  onLogout: () => void;
}

export function Header({ isLoggedIn, userEmail, onLogin, onSignup, onLogout }: HeaderProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-card rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">Serenity Spa</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#staff" className="text-muted-foreground hover:text-primary transition-colors">
              Our Team
            </a>
            <a href="#booking" className="text-muted-foreground hover:text-primary transition-colors">
              Book Now
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Welcome, {userEmail}</span>
                <Button variant="spa" size="sm">
                  <Calendar className="w-4 h-4" />
                  My Bookings
                </Button>
                <Button variant="ghost" size="sm" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="elegant" onClick={() => setShowAuthModal(true)}>
                <User className="w-4 h-4" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#staff" className="text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </a>
              <a href="#booking" className="text-muted-foreground hover:text-primary transition-colors">
                Book Now
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              {isLoggedIn ? (
                <div className="flex flex-col space-y-2 pt-2">
                  <span className="text-sm text-muted-foreground">Welcome, {userEmail}</span>
                  <Button variant="spa" size="sm" className="w-full">
                    <Calendar className="w-4 h-4" />
                    My Bookings
                  </Button>
                  <Button variant="ghost" size="sm" onClick={onLogout} className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <Button variant="elegant" onClick={() => setShowAuthModal(true)} className="w-full">
                  <User className="w-4 h-4" />
                  Sign In
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={onLogin}
        onSignup={onSignup}
      />
    </header>
  );
}