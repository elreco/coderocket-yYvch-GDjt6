import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Transform Your Digital Experience Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Join thousands of satisfied customers who have already taken their online presence to the next level. Our platform provides everything you need to succeed.
          </p>
          
          <Card className="p-6 bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg max-w-md">
            {!isSubmitted ? (
              <>
                <h3 className="text-xl font-semibold mb-4">Get Started Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your submission. Check your inbox soon!
                </p>
              </div>
            )}
          </Card>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <img
            src="https://picsum.photos/id/3/600/600"
            alt="Hero illustration"
            className="rounded-lg shadow-xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}