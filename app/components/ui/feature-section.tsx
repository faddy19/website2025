"use client";

import { HighlightGroup, HighlighterItem } from "../ui/highlighter";

export function FeatureSection() {
  return (
    <div className="container mx-auto px-4">
      <HighlightGroup>
        <HighlighterItem>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {/* Strategic Insights */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
                Strategic AI Insights
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-white/90">AI Strategy Development</h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    Transform your business with a comprehensive AI roadmap. We identify high-impact opportunities aligned with your objectives, ensuring technical feasibility and maximizing ROI.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-white/90">Innovation Lab</h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    Stay at the forefront of AI advancement. Our expertise spans from foundational machine learning to cutting-edge neural architectures, ensuring you leverage the latest innovations.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-white/90">Responsible AI</h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    Build trust with ethical AI solutions. We prioritize transparency, fairness, and responsible innovation to ensure your AI initiatives create sustainable long-term value.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Impact */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors text-center">
                  <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">200+</p>
                  <p className="text-base text-neutral-300">AI Solutions Deployed</p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors text-center">
                  <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">15+</p>
                  <p className="text-base text-neutral-300">Industries Served</p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors text-center">
                  <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">50+</p>
                  <p className="text-base text-neutral-300">Research Papers</p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors text-center">
                  <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">98%</p>
                  <p className="text-base text-neutral-300">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Knowledge Hub */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
                Knowledge Hub
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-white/90">Research & Insights</h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    Access cutting-edge research and practical insights on AI applications. Stay informed about the latest methodologies and industry best practices.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-white/90">Success Stories</h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    Discover real-world case studies showcasing successful AI implementations. Learn how organizations like yours achieved transformative results.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-black/[0.96] text-white border border-white/[0.1] hover:border-white/[0.2] transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-white/90">Future Vision</h4>
                  <p className="text-base text-neutral-300 leading-relaxed">
                    Explore emerging AI trends and their potential impact. Stay ahead of the curve with insights into the future of business and technology.
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