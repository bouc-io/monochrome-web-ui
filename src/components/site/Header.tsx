import { NavLink, Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/faq", label: "Q&A" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="font-semibold tracking-tight">
          bouc<span className="text-muted-foreground">.io</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <LoginButton />
      </div>
    </header>
  );
}
