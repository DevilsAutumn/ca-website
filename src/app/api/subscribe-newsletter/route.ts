import { newsletterFields } from "@/lib/website-api/forms";
import { postWebsiteForm } from "@/lib/website-api/server";

export function POST(request: Request) {
  return postWebsiteForm(
    request,
    "/website/subscribe-newsletter/",
    newsletterFields,
  );
}
