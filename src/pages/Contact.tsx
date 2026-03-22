import { useState, type FormEvent } from "react";
import SectionReveal from "@/components/SectionReveal";
import { toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <main className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container max-w-xl">
        <SectionReveal>
          <h1 className="font-display text-3xl md:text-5xl font-medium text-center" style={{ lineHeight: 1.1 }}>
            Get in Touch
          </h1>
          <p className="mt-4 text-center text-muted-foreground font-body">
            Questions, custom orders, or just want to say hello — we'd love to hear from you.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="block text-sm font-body font-medium mb-1.5" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded border bg-background px-4 py-2.5 text-sm font-body outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium mb-1.5" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded border bg-background px-4 py-2.5 text-sm font-body outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded border bg-background px-4 py-2.5 text-sm font-body outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-3 rounded font-body text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.97] disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground font-body mb-3">Find us elsewhere</p>
            <div className="flex justify-center gap-6 text-sm font-body">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Pinterest</a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Etsy</a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
