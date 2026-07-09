"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, Search, Tag } from "lucide-react";
export default function BlogPage() {
  const featured = {
    category: "Automation Chronicles",
    title: "The Complete Guide to Infrastructure as Code in 2024",
    excerpt: "Discover how Infrastructure as Code is revolutionizing IT operations, from Terraform basics to advanced GitOps workflows.",
    date: "2024-03-18",
    readTime: "15 min read",
    href: "/blog/infrastructure-as-code-guide-2024",
    image: "🚀",
  };

  const allPosts = [
    {
      category: "Automation Chronicles",
      title: "Building Self-Healing Infrastructure with PowerShell",
      excerpt: "Learn how to implement automated remediation workflows that fix common issues before they impact users.",
      date: "2024-03-15",
      readTime: "8 min read",
      href: "/blog/self-healing-infrastructure",
    },
    {
      category: "DevOps Deep Dive",
      title: "Infrastructure as Code: Terraform vs Ansible",
      excerpt: "A practical comparison of two popular IaC tools and when to use each one in your DevOps pipeline.",
      date: "2024-03-10",
      readTime: "12 min read",
      href: "/blog/terraform-vs-ansible",
    },
    {
      category: "AI + IT Series",
      title: "Integrating ChatGPT with n8n for IT Workflows",
      excerpt: "How to leverage AI to automate ticket classification, documentation, and first-line support.",
      date: "2024-03-05",
      readTime: "10 min read",
      href: "/blog/chatgpt-n8n-workflows",
    },
    {
      category: "Learning Moments",
      title: "5 Azure Misconfigurations That Cost Companies Thousands",
      excerpt: "Common cloud configuration mistakes and how to prevent them with automated policy enforcement.",
      date: "2024-03-01",
      readTime: "7 min read",
      href: "/blog/azure-misconfigurations",
    },
    {
      category: "DevOps Deep Dive",
      title: "CI/CD Pipeline Security: Best Practices for 2024",
      excerpt: "Secure your deployment pipelines with these essential security practices and tools.",
      date: "2024-02-25",
      readTime: "11 min read",
      href: "/blog/cicd-security-best-practices",
    },
    {
      category: "Automation Chronicles",
      title: "Automating M365 Administration with Microsoft Graph API",
      excerpt: "Practical examples of using Graph API and PowerShell to automate common M365 tasks.",
      date: "2024-02-20",
      readTime: "9 min read",
      href: "/blog/m365-automation-graph-api",
    },
  ];

  const categories = [
    "All Posts",
    "Automation Chronicles",
    "DevOps Deep Dive",
    "AI + IT Series",
    "Learning Moments",
    "Cloud Infrastructure",
  ];

  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  // Filter and search posts
  const filteredPosts = (() => {
    let filtered = allPosts;

    // Filter by category
    if (selectedCategory !== "All Posts") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  })();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Technical <span className="gradient-text">Article Archive</span>
          </h1>
          <p className="text-xl text-text/80 mb-8">
            Earlier technical articles preserved for reference. Publication dates
            are shown so readers can evaluate their currency.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-background/50 border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
                aria-label="Search blog articles"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 border-b border-accent-1/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category
                    ? "bg-accent-1 text-background border-accent-1"
                    : "border-accent-1/30 text-text/80 hover:border-accent-1/50 hover:text-text"
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Only show if no search/filter active */}
      {searchQuery.trim() === "" && selectedCategory === "All Posts" && (
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-accent-1/10 to-accent-2/10 border border-accent-1/30 rounded-2xl p-8 md:p-12 card-glow">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-4 w-4 text-accent-1" />
                <span className="text-accent-1 text-sm font-semibold">Archive Highlight</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-accent-2 text-sm font-semibold mb-3">
                    {featured.category}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    <Link href={featured.href} className="hover:text-accent-1 transition-colors">
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-text/80 mb-6">{featured.excerpt}</p>

                  <div className="flex items-center space-x-4 text-sm text-text/60 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>

                  <Link href={featured.href} className="btn-primary">
                    Read Article
                  </Link>
                </div>

                <div className="text-8xl md:text-9xl text-center">
                  {featured.image}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold">
              {searchQuery.trim() || selectedCategory !== "All Posts" 
                ? `Search Results (${filteredPosts.length})` 
                : "Recent Articles"}
            </h2>
            {(searchQuery.trim() || selectedCategory !== "All Posts") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Posts");
                }}
                className="text-sm text-accent-1 hover:text-ctaHover transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text/60 text-lg mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Posts");
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl overflow-hidden hover:border-accent-1/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="text-accent-1 text-sm font-semibold mb-3">
                      {post.category}
                    </div>

                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent-1 transition-colors">
                      <Link href={post.href}>{post.title}</Link>
                    </h3>

                    <p className="text-text/70 mb-4">{post.excerpt}</p>

                    <div className="flex items-center space-x-4 text-sm text-text/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More - Only show if no filters active */}
          {filteredPosts.length > 0 && searchQuery.trim() === "" && selectedCategory === "All Posts" && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
