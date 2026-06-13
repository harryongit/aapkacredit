import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aapka Credit Blog - Personal Finance & Loan Tips",
  description: "Expert advice on personal loans, improving your credit score, home loan tax benefits, EMI calculation, and debt management.",
  keywords: ["finance blog", "personal loan tips", "credit score guide", "loan advice india"],
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Financial Insights & Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master your personal finances with our expert guides on credit scores, loan eligibility, and smart debt management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
              <article className="glass rounded-3xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant border border-border">
                <div className="flex items-center gap-3 text-xs font-medium text-primary mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors font-display leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold mt-auto">
                  Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
