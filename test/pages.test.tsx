import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const renderRoute = (path: string) =>
  render(
    <TooltipProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </TooltipProvider>,
  );

describe("page smoke tests", () => {
  it("renders the landing page", () => {
    renderRoute("/");
    expect(
      screen.getByRole("heading", {
        name: /one ai platform\. every layer covered\./i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the about page", () => {
    renderRoute("/about");
    expect(
      screen.getByRole("heading", { name: "About", level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the FAQ page", () => {
    renderRoute("/faq");
    expect(
      screen.getByRole("heading", { name: /questions & answers/i }),
    ).toBeInTheDocument();
  });

  it("renders the contact page", () => {
    renderRoute("/contact");
    expect(
      screen.getByRole("heading", { name: "Contact", level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the 404 page for unknown routes", () => {
    renderRoute("/does-not-exist");
    expect(
      screen.getByRole("heading", { name: "404", level: 1 }),
    ).toBeInTheDocument();
  });
});
