import type { Metadata } from "next";
import Landing from "@/components/landing/Landing";

export const metadata: Metadata = {
  title: "Dukani | Iduka ryawe, mu mufuka wawe",
  description:
    "Kurikirana ibicuruzwa, andika ibyo wagurishije kandi umenye neza abakurimo amadeni. Dukani ikora kuri telefoni yawe, nubwo nta interineti ihari.",
};

export default function HomeRw() {
  return <Landing lang="rw" />;
}
