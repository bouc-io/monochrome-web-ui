import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/site/LoginButton";
import { Bot, Workflow, Database, LayoutDashboard, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Bot,
    title: "Chatbot",
    desc: "Conversational interface to talk to your models, your data, and your tools — all in one place.",
  },
  {
    icon: Workflow,
    title: "Agent",
    desc: "Autonomous workers that plan, call tools, and complete multi-step tasks on your behalf.",
  },
  {
    icon: Database,
    title: "Memory",
    desc: "Long-term, structured memory so your assistants remember context across sessions.",
  },
  {
    icon: LayoutDashboard,
    title: "Portal",
    desc: "A single workspace for users to access chats, agents, files and shared workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Admin",
    desc: "Manage users, models, permissions and usage with fine-grained controls.",
  },
];

export default function Landing() {
  return (
    <>
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            One AI platform. Every layer covered.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Chatbot, Agent, Memory, Portal and Admin — a complete system to build, run
            and govern AI assistants for your organization.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <LoginButton />
            <Button variant="outline" asChild>
              <Link to="/about">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border">
              <CardHeader>
                <f.icon className="h-6 w-6" />
                <CardTitle className="mt-4">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to get started?</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Sign in to access the chat experience and start building with the platform.
          </p>
          <div className="mt-8">
            <LoginButton />
          </div>
        </div>
      </section>
    </>
  );
}
