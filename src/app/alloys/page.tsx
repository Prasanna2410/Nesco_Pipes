import { permanentRedirect } from "next/navigation";

export default function LegacyAlloysPage() {
  permanentRedirect("/materials");
}
