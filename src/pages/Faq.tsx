import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is bouc.io?",
    a: "A self-hostable AI platform combining a chatbot, agents, memory, a user portal and an admin console.",
  },
  {
    q: "Which models can I use?",
    a: "The platform is model-agnostic. You can connect local models via Ollama or hosted providers through compatible APIs.",
  },
  {
    q: "How does login work?",
    a: "The Login button takes you to the chat subdomain of this site (chat.<your-domain>), where authentication is handled.",
  },
  {
    q: "Can I run it on-premises?",
    a: "Yes. The system is designed to be deployed inside your own infrastructure for full data and identity control.",
  },
  {
    q: "Is there an admin interface?",
    a: "Yes — the Admin module lets you manage users, models, permissions and usage with fine-grained controls.",
  },
];

export default function Faq() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Questions &amp; Answers</h1>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
