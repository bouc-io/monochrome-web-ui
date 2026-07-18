import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Questions, feedback, or partnership ideas — get in touch.
      </p>
      <div className="mt-10 space-y-4">
        <a
          href="mailto:hello@bouc.io"
          className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
        >
          <Mail className="h-5 w-5" />
          <span>hello@bouc.io</span>
        </a>
        <a
          href="https://github.com/MartinCote1978"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
        >
          <Github className="h-5 w-5" />
          <span>github.com/MartinCote1978</span>
        </a>
      </div>
    </section>
  );
}
