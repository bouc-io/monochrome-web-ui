export default function About() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <div className="prose prose-neutral mt-8 max-w-none text-muted-foreground">
        <p>
          bouc.io is a complete AI platform that brings together a conversational
          chatbot, autonomous agents, persistent memory, a user portal, and an
          administrative control plane.
        </p>
        <p>
          The platform is designed to be model-agnostic and deployable on your own
          infrastructure, giving teams full control over data, identity, and cost.
        </p>
        <p>
          Each subsystem is independent but composable — use just the chatbot, or
          orchestrate agents that read and write to shared memory while admins
          monitor usage from a single portal.
        </p>
      </div>
    </section>
  );
}
