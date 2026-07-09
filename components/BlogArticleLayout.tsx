import { ReactNode } from "react";
import { Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";
import AuthorInfo from "./AuthorInfo";
import RelatedPosts from "./RelatedPosts";
import TableOfContents from "./TableOfContents";
import StructuredData from "./StructuredData";

interface BlogArticleLayoutProps {
  children: ReactNode;
  title: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  tags: string[];
  category: string;
  href?: string;
  excerpt?: string;
  relatedPosts?: Array<{
    title: string;
    excerpt: string;
    href: string;
    date: string;
  }>;
}

export default function BlogArticleLayout({
  children,
  title,
  date,
  readTime,
  author,
  tags,
  category,
  href,
  excerpt,
  relatedPosts = [],
}: BlogArticleLayoutProps) {
  const baseUrl = "https://143it.com";
  const articleUrl = href ? `${baseUrl}${href}` : `${baseUrl}/blog/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
  
  // Generate BlogPosting structured data
  const blogPostingData = {
    headline: title,
    description: excerpt || title,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "143IT",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    keywords: tags.join(", "),
    articleSection: category,
  };

  return (
    <>
      <StructuredData type="BlogPosting" data={blogPostingData} />
      <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-12 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          {/* Category Badge */}
          <Link
            href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-block text-accent-1 text-sm font-semibold mb-4 hover:text-ctaHover transition-colors"
          >
            {category}
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-text/60 text-sm">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center space-x-1 bg-accent-1/10 border border-accent-1/30 rounded-full px-3 py-1 text-xs text-accent-1 hover:bg-accent-1/20 transition-colors"
              >
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9">
              <div className="bg-background/30 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 md:p-12">
                <div className="prose-blog max-w-none">{children}</div>
              </div>

              {/* Author Bio */}
              <div className="mt-12">
                <AuthorInfo author={author} />
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <RelatedPosts posts={relatedPosts} />
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-lg text-text/80 mb-6">
            Let's discuss how we can help you automate, evolve, and dominate.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
