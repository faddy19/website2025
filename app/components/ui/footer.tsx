"use client";

import * as React from "react";
import { Link } from "@remix-run/react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Switch } from "./switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Linkedin, Moon, Send, Sun } from "lucide-react";

export function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/services/strategy" className="block transition-colors hover:text-primary">
                Strategy & Consulting
              </Link>
              <Link to="/services/infrastructure" className="block transition-colors hover:text-primary">
                Infrastructure & Engineering
              </Link>
              <Link to="/services/solutions" className="block transition-colors hover:text-primary">
                Solutions & Development
              </Link>
              <Link to="/services/ai-strategy" className="block transition-colors hover:text-primary">
                AI Strategy
              </Link>
              <Link to="/services/training" className="block transition-colors hover:text-primary">
                Trainings & Upskilling
              </Link>
              <Link to="/services/starter" className="block transition-colors hover:text-primary">
                Starter Offerings
              </Link>
              <Link to="/services/data-science" className="block transition-colors hover:text-primary">
                Data Science Consulting
              </Link>
              <Link to="/services/data-training" className="block transition-colors hover:text-primary">
                Data Science Trainings
              </Link>
            </nav>
          </div>

          {/* Trainings */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Trainings</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/trainings/chatgpt" className="block transition-colors hover:text-primary">
                ChatGPT Training
              </Link>
              <Link to="/trainings/data-science" className="block transition-colors hover:text-primary">
                Data Science Course
              </Link>
              <Link to="/trainings/machine-learning" className="block transition-colors hover:text-primary">
                Machine Learning Kurs
              </Link>
              <Link to="/trainings/ai" className="block transition-colors hover:text-primary">
                AI Course
              </Link>
            </nav>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Industries</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/industries/automotive" className="block transition-colors hover:text-primary">
                Automotive
              </Link>
              <Link to="/industries/retail" className="block transition-colors hover:text-primary">
                Retail
              </Link>
              <Link to="/industries/logistics" className="block transition-colors hover:text-primary">
                Logistics
              </Link>
              <Link to="/industries/manufacturing" className="block transition-colors hover:text-primary">
                Manufacturing
              </Link>
              <Link to="/industries/insurance" className="block transition-colors hover:text-primary">
                Insurance
              </Link>
              <Link to="/industries/pharma" className="block transition-colors hover:text-primary">
                Pharma
              </Link>
              <Link to="/industries/finance" className="block transition-colors hover:text-primary">
                Finance
              </Link>
              <Link to="/industries/healthcare" className="block transition-colors hover:text-primary">
                Healthcare
              </Link>
              <Link to="/industries/aviation" className="block transition-colors hover:text-primary">
                Aviation
              </Link>
              <Link to="/industries/energy" className="block transition-colors hover:text-primary">
                Energy
              </Link>
              <Link to="/industries/telecom" className="block transition-colors hover:text-primary">
                Telecommunications
              </Link>
              <Link to="/industries/sme" className="block transition-colors hover:text-primary">
                SMEs
              </Link>
            </nav>
          </div>

          {/* Topics */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Topics</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/topics/agentic-ai" className="block transition-colors hover:text-primary">
                Agentic AI
              </Link>
              <Link to="/topics/generative-ai" className="block transition-colors hover:text-primary">
                Generative AI Services
              </Link>
              <Link to="/topics/predictive-analytics" className="block transition-colors hover:text-primary">
                Forecasting and Predictive Analytics
              </Link>
              <Link to="/topics/customer-analytics" className="block transition-colors hover:text-primary">
                Customer Analytics
              </Link>
              <Link to="/topics/nlp" className="block transition-colors hover:text-primary">
                Natural Language Processing
              </Link>
              <Link to="/topics/computer-vision" className="block transition-colors hover:text-primary">
                Computer Vision
              </Link>
              <Link to="/topics/deep-learning" className="block transition-colors hover:text-primary">
                Deep Learning
              </Link>
              <Link to="/topics/predictive-maintenance" className="block transition-colors hover:text-primary">
                Predictive Maintenance
              </Link>
              <Link to="/topics/recommendation" className="block transition-colors hover:text-primary">
                Recommendation Systems
              </Link>
              <Link to="/topics/price-optimization" className="block transition-colors hover:text-primary">
                Price Optimization
              </Link>
              <Link to="/topics/frontend" className="block transition-colors hover:text-primary">
                Frontend Solutions
              </Link>
              <Link to="/topics/data-culture" className="block transition-colors hover:text-primary">
                Data Culture
              </Link>
              <Link to="/topics/chatgpt" className="block transition-colors hover:text-primary">
                ChatGPT
              </Link>
              <Link to="/topics/sustainable-ai" className="block transition-colors hover:text-primary">
                Sustainable AI
              </Link>
              <Link to="/topics/ai-sustainability" className="block transition-colors hover:text-primary">
                AI for Sustainability
              </Link>
              <Link to="/topics/explainable-ai" className="block transition-colors hover:text-primary">
                Explainable AI
              </Link>
            </nav>
          </div>
        </div>

        {/* Company Info & Social */}
        <div className="mt-12 grid gap-8 border-t pt-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">capsula.ai</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Martinistraße 62-66</p>
              <p>28195 Bremen</p>
              <p>Tel: 0421 37703470</p>
              <p>Öffnungszeiten:</p>
              <p>Geöffnet · Schließt um 18:00</p>
              <p>Weitere Öffnungszeiten</p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="relative">
            <h2 className="mb-4 text-lg font-semibold">Stay Connected</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Join our newsletter for the latest updates in AI and business innovation.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

          {/* Social & Theme */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://linkedin.com/company/capsula" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} capsula.ai. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/imprint" className="transition-colors hover:text-primary">
              Imprint
            </Link>
            <button className="transition-colors hover:text-primary">
              Cookie Settings
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
} 