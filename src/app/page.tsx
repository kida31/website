import DomainCard from "@/components/domain-card";
import type { Metadata } from "next";
import AboutSection from "./_components/about-section";
import ExperienceSection from "./_components/experience-section";
import SkillsSection from "./_components/skills";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "[K] Home",
    description: "Personal Website",
};

export default function HomePage() {
    return (
        <div className="flex flex-col items-center min-h-screen justify-between p-24 bg-base-300">
            <Navbar/>
            <h1 className="prose lg:prose-xl">My Name</h1>
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <div className="container grid grid-flow-col auto-cols-max gap-8 justify-center">
                <DomainCard title="Development" />
                <DomainCard title="Games" />
                <DomainCard title="Music" />
            </div>
        </div>
    );
}
