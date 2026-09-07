import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const FALLBACK_CHAT_URL = "https://chat.example.com";

function resolveChatUrl(): string {
  if (typeof window === "undefined") return FALLBACK_CHAT_URL;
  const host = window.location.hostname.replace(/^www\./, "");
  const isLocal =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".lovable.app") ||
    host.endsWith(".lovable.dev");
  if (isLocal) return FALLBACK_CHAT_URL;
  return `${window.location.protocol}//chat.${host}`;
}

export function LoginButton() {
  return (
    <Button
      onClick={() => {
        window.location.href = resolveChatUrl();
      }}
      className="gap-2"
    >
      <LogIn className="h-4 w-4" />
      Login
    </Button>
  );
}
