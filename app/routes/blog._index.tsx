import { Link } from "@remix-run/react";
import { HighlightGroup, HighlighterItem } from "../components/ui/highlighter";

const blogPosts = [
  {
    title: "The Future of Contract Management",
    description: "Discover how AI and automation are transforming the way businesses handle contracts in 2024 and beyond.",
    date: "March 15, 2024",
    category: "Industry Insights",
    image: "/placeholder-blog1.jpg",
    author: {
      name: "Sarah Johnson",
      role: "Contract Specialist",
      avatar: "/placeholder-avatar1.jpg"
    }
  },
  {
    title: "5 Essential Business Growth Strategies",
    description: "Learn the key strategies that successful businesses are using to scale their operations effectively.",
    date: "March 12, 2024",
    category: "Business Growth",
    image: "/placeholder-blog2.jpg",
    author: {
      name: "Michael Chen",
      role: "Business Consultant",
      avatar: "/placeholder-avatar2.jpg"
    }
  },
  {
    title: "Streamlining Project Management",
    description: "Expert tips on optimizing your project management processes for better efficiency and results.",
    date: "March 8, 2024",
    category: "Project Management",
    image: "/placeholder-blog3.jpg",
    author: {
      name: "Emily Rodriguez",
      role: "Project Manager",
      avatar: "/placeholder-avatar3.jpg"
    }
  },
  {
    title: "Understanding Contract Law Basics",
    description: "A comprehensive guide to the fundamental principles of contract law for business owners.",
    date: "March 5, 2024",
    category: "Legal Insights",
    image: "/placeholder-blog4.jpg",
    author: {
      name: "David Thompson",
      role: "Legal Consultant",
      avatar: "/placeholder-avatar4.jpg"
    }
  },
  {
    title: "Digital Transformation in Business",
    description: "How modern businesses are leveraging technology to stay competitive in the digital age.",
    date: "March 1, 2024",
    category: "Technology",
    image: "/placeholder-blog5.jpg",
    author: {
      name: "Lisa Zhang",
      role: "Digital Strategist",
      avatar: "/placeholder-avatar5.jpg"
    }
  },
  {
    title: "Effective Business Communication",
    description: "Tips and strategies for improving communication within your organization and with clients.",
    date: "February 28, 2024",
    category: "Business Skills",
    image: "/placeholder-blog6.jpg",
    author: {
      name: "James Wilson",
      role: "Communications Director",
      avatar: "/placeholder-avatar6.jpg"
    }
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16">
        <HighlightGroup>
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white">
              Latest Insights
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Stay updated with our latest thoughts on business, contracts, and industry trends.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <HighlighterItem key={index} className="rounded-3xl">
                <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="group block">
                  <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-black/[0.96] border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-black/[0.98]">
                    <div className="aspect-[16/9] overflow-hidden">
                      <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-white/90">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {post.description}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5" />
                  </div>
                </Link>
              </HighlighterItem>
            ))}
          </div>
        </HighlightGroup>
      </main>
    </div>
  );
} 