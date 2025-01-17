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

export function Footerdemo() {
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
                AI Strategy & Consulting
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
                MVP Development & Prototyping
              </Link>
              <Link to="/services/data-science" className="block transition-colors hover:text-primary">
                Data Science Consulting
              </Link>
              <Link to="/services/data-training" className="block transition-colors hover:text-primary">
                Trainings & Workshops
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
                Machine Learning Course
              </Link>
              <Link to="/trainings/ai" className="block transition-colors hover:text-primary">
                AI Course
              </Link>
              <Link to="/trainings/prompting" className="block transition-colors hover:text-primary">
                Prompting Course
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
            <h3 className="mb-4 text-lg font-semibold">Focus Areas</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/topics/generative-ai" className="block transition-colors hover:text-primary">
                Generative AI Services - GenAI
              </Link>
              <Link to="/topics/predictive-analytics" className="block transition-colors hover:text-primary">
                Forecasting and Predictive Analytics
              </Link>
              <Link to="/topics/customer-analytics" className="block transition-colors hover:text-primary">
                Customer Analytics
              </Link>
              <Link to="/topics/customer-support" className="block transition-colors hover:text-primary">
                Customer Support AI
              </Link>
              <Link to="/topics/nlp" className="block transition-colors hover:text-primary">
                Natural Language Processing
              </Link>
              <Link to="/topics/computer-vision" className="block transition-colors hover:text-primary">
                Computer Vision
              </Link>
              <Link to="/topics/ai-agents" className="block transition-colors hover:text-primary">
                AI Agents
              </Link>
              <Link to="/topics/machine-learning" className="block transition-colors hover:text-primary">
                Machine Learning
              </Link>
              <Link to="/topics/deep-learning" className="block transition-colors hover:text-primary">
                Deep Learning
              </Link>
              <Link to="/topics/cybersecurity" className="block transition-colors hover:text-primary">
                AI-Powered Cybersecurity
              </Link>
              <Link to="/topics/multimodal" className="block transition-colors hover:text-primary">
                Multimodal AI Models
              </Link>
              <Link to="/topics/chatbots" className="block transition-colors hover:text-primary">
                ChatBots
              </Link>
              <Link to="/topics/predictive-maintenance" className="block transition-colors hover:text-primary">
                Predictive Maintenance
              </Link>
              <Link to="/topics/chatgpt" className="block transition-colors hover:text-primary">
                ChatGPT
              </Link>
              <Link to="/topics/sustainable-ai" className="block transition-colors hover:text-primary">
                Sustainable AI
              </Link>
              <Link to="/topics/rag" className="block transition-colors hover:text-primary">
                Retrieval Augmented Generation - RAG
              </Link>
              <Link to="/topics/healthcare" className="block transition-colors hover:text-primary">
                AI in Healthcare
              </Link>
              <Link to="/topics/education" className="block transition-colors hover:text-primary">
                AI in Education
              </Link>
              <Link to="/topics/autonomous-vehicles" className="block transition-colors hover:text-primary">
                Autonomous Vehicles
              </Link>
              <Link to="/topics/quantum-ai" className="block transition-colors hover:text-primary">
                Quantum AI
              </Link>
              <Link to="/topics/llm" className="block transition-colors hover:text-primary">
                Large Language Models - LLM
              </Link>
              <Link to="/topics/search-engines" className="block transition-colors hover:text-primary">
                AI Powered Search Engines
              </Link>
              <Link to="/topics/local-ai" className="block transition-colors hover:text-primary">
                Local AI Models
              </Link>
              <Link to="/topics/agentic-ai" className="block transition-colors hover:text-primary">
                Agentic AI
              </Link>
              <Link to="/topics/academic-search" className="block transition-colors hover:text-primary">
                AI Powered Academic Search
              </Link>
              <Link to="/topics/openai" className="block transition-colors hover:text-primary">
                OpenAI
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
              <p>Opening Hours:</p>
              <p>Open · Closes at 18:00</p>
            </address>
            <div className="mt-4 text-xs text-muted-foreground">
              <Link to="/community" className="hover:text-primary">
                ❤️ We offer free consultations to support students, individuals with limited financial resources, and organizations serving the community
              </Link>
            </div>
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
                      <a href="https://www.linkedin.com/company/68487962/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
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
