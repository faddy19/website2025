"use client";

import { HighlightGroup, HighlighterItem } from "../ui/highlighter";

export function FeatureSection() {
  return (
    <div className="container mx-auto px-4">
      <HighlightGroup>
        <HighlighterItem>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {/* Strategic Insights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Strategic AI Insights</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-black/[0.96] text-white">
                  <h4 className="font-semibold mb-2">AI Strategy Development</h4>
                  <p className="text-sm text-gray-300">
                    Build a comprehensive AI roadmap that aligns with your business objectives. We help identify high-impact opportunities while considering technical feasibility and ROI.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white">
                  <h4 className="font-semibold mb-2">Knowledge & Innovation</h4>
                  <p className="text-sm text-gray-300">
                    Stay ahead with cutting-edge AI research and practical applications. Our expertise spans from foundational machine learning to advanced neural architectures.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white">
                  <h4 className="font-semibold mb-2">Responsible AI</h4>
                  <p className="text-sm text-gray-300">
                    Implement AI solutions with a focus on transparency, fairness, and ethical considerations. We ensure your AI initiatives create sustainable value.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise & Impact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/[0.96] text-white text-center">
                  <p className="text-3xl font-bold mb-2">200+</p>
                  <p className="text-sm text-gray-300">AI Solutions Deployed</p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white text-center">
                  <p className="text-3xl font-bold mb-2">15+</p>
                  <p className="text-sm text-gray-300">Industries Served</p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white text-center">
                  <p className="text-3xl font-bold mb-2">50+</p>
                  <p className="text-sm text-gray-300">Research Papers</p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white text-center">
                  <p className="text-3xl font-bold mb-2">98%</p>
                  <p className="text-sm text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Knowledge Hub */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Knowledge Hub</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-black/[0.96] text-white">
                  <h4 className="font-semibold mb-2">AI Research Insights</h4>
                  <p className="text-sm text-gray-300">
                    Access our latest research findings and practical insights on AI applications, methodologies, and best practices.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white">
                  <h4 className="font-semibold mb-2">Industry Applications</h4>
                  <p className="text-sm text-gray-300">
                    Explore real-world case studies and success stories of AI implementation across various sectors.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/[0.96] text-white">
                  <h4 className="font-semibold mb-2">Future Perspectives</h4>
                  <p className="text-sm text-gray-300">
                    Gain insights into emerging AI trends and their potential impact on business and society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HighlighterItem>
      </HighlightGroup>
    </div>
  );
} 