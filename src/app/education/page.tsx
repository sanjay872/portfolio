import { GraduationCap } from "lucide-react";
import Section from "@/components/section";
import EducationCard from "@/components/educationcard";

function Education(){
    const educations = [
        {
            school: "Illinois Institute of Technology",
            course: "Master of Computer Science",
            startYear: "Jan 2024",
            endYear: "Dec 2025",
            grade: "4.0"
        },
        {
            school: "St.Joseph's Institute of Technology",
            course: "BE Computer Science and Engineering",
            startYear: "2017",
            endYear: "2021",
            grade:"3.38"        
        }
    ]
    return(
        <Section title="Education" icon={<GraduationCap />}>
            <div className="flex flex-row gap-4 p-5 flex-wrap">
                {educations.map(education => (
                    <EducationCard {...education} key={education.school} />
                ))}
            </div>
        </Section>
    )
}

export default Education;