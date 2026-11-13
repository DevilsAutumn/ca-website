import { getWebsiteOptions } from "@/lib/website-api/server";

export function GET() {
  return getWebsiteOptions("/website/constants/phone-country-codes/");
}
