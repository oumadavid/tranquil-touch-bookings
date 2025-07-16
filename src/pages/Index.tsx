import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BookingSection } from "@/components/BookingSection";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - in real app, this would connect to your backend
    setIsLoggedIn(true);
    setUserEmail(email);
    toast({
      title: "Welcome back!",
      description: `You've been successfully signed in as ${email}`,
    });
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // Mock registration - in real app, this would connect to your backend
    setIsLoggedIn(true);
    setUserEmail(email);
    toast({
      title: "Account created!",
      description: `Welcome to Serenity Spa, ${name}! Your account has been created successfully.`,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    toast({
      title: "Signed out",
      description: "You've been successfully signed out. See you next time!",
    });
  };

  const handleAuthRequired = () => {
    toast({
      title: "Sign in required",
      description: "Please sign in to your account to make a booking.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
      />
      <Hero />
      <Services />
      <BookingSection 
        isLoggedIn={isLoggedIn} 
        onAuthRequired={handleAuthRequired}
      />
    </div>
  );
};

export default Index;
