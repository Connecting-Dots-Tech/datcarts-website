import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import CaseStudies from "../components/CaseStudies";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <CaseStudies />
    </div>
  );
}
