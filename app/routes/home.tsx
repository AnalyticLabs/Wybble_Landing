import { LandingPage } from "~/page/landingPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wybble AI" },
    {
      name: "Innovating the Future with AI Solutions",
      content:
        "Revolutionize your business with cutting-edge technology, advanced analytics, and transformative products",
    },
  ];
}

export default function Home() {
  return <LandingPage />;
}
