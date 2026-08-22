import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-semibold tracking-tight">404</h1>
      <p className="mt-4 text-muted-foreground">This page could not be found.</p>
      <Button asChild className="mt-8">
        <Link to="/">Return home</Link>
      </Button>
    </section>
  );
}
