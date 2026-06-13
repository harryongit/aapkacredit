import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MagneticButton } from "@/components/fx/MagneticButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Aapka Credit`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Aapka Credit Finance Team"],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Aapka Credit",
    },
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>

        <header className="mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </header>

        <div 
          className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-li:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-electric/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">Ready to take control of your finances?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Check your exact eligibility across multiple lenders instantly. No impact on your credit score.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="/calculator" variant="ghost" className="bg-background">
              Calculate EMI
            </MagneticButton>
            <MagneticButton href="/#home" variant="primary">
              Check Eligibility Now
            </MagneticButton>
          </div>
        </div>
      </article>
    </main>
  );
}
