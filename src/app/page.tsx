import ProjectCard from "@/components/projectcard";
import Section from "@/components/section";
import { Folder } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-10">
      <Section title="Projects" icon={<Folder></Folder>} >
        <ProjectCard image="/angularIcon.png" title="Angular basic project"  description="app to download image from cloud" href="https://test.com" tags={["Angular","Supabase"]}/>
        <ProjectCard image="/reactIcon.png" title="React advanced project" description="app to manage tasks" href="https://example.com" tags={["React", "Firebase"]} />
        <ProjectCard image="/vueIcon.png" title="Vue.js starter project" description="app to display user profiles" href="https://example.com" tags={["Vue.js", "GraphQL"]} />
      </Section>
    </main>
  );
}
