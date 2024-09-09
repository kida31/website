import DomainCard from "@/components/domain-card";
import type { Metadata } from "next";
import AboutSection from "./_components/about-section";
import ExperienceSection from "./_components/experience-section";
import SkillsSection from "./_components/skills";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";

export const metadata: Metadata = {
    title: "[K] Home",
    description: "Personal Website",
};

const timelineItems = [
    {
        time: "2021",
        title: "[Example] Started working at Company",
        content: "[Example] I started working at Company as a developer",
    },
    {
        time: "2020",
        title: "[Example] Graduated from University",
        content: "[Example] I graduated from University with a degree in Computer Science",
    },
    {
        time: "2018",
        title: "[Example] Started University",
        content: "[Example] I started University and began studying Computer Science",
    }
]

export default function HomePage() {

    return (
        <div className="flex flex-col items-center min-h-screen justify-between p-24 bg-base-100">
            <Navbar />
            <h1 className="prose lg:prose-xl">My Name</h1>
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <Timeline items={timelineItems} />
            <div className="container grid grid-flow-col auto-cols-max gap-8 justify-center">
                <DomainCard
                    title="Development"
                    description="this is dev stuff"
                    imgUrl="data:image/png;base64,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" />
                <DomainCard title="Games" description="This is games stuff" />
                <DomainCard title="Music" description="Hello this is some music" />
            </div>
        </div>
    );
}
