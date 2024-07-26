import ExperienceCard from "@/components/experiencecard";
import Section from "@/components/section";
import { Briefcase } from "lucide-react";

function Experiences(){
    const experiences=[
        {
            title:"Software Developer",
            startDate:"May 2024",
            endDate:"Jul 2024",
            description:"Volunteered as a Software Developer for Driven II Develop, a nonprofit initiative focused on providing software solutions to underprivileged communities. Led the development of an Inventory management app that helps people to manage their business in a easier way. Developed Homepage using React.js. Implemented Automated notification using Supabase.",
            mode:"Remote",
            company:"Driven II Develop",
            skills:["React","Supabase"]
        },
        {
            title:"Software Engineer",
            startDate:"Aug 2021",
            endDate:"Dec 2023",
            description:`Improved application performance 20%-30% by reducing number of API calls made to server. Designed a generic app component in user interface utilized globally in application. 
                        Implemented an automated mailing trigger utilizing Spring Boot to notify users daily.
                        Volunteered to perform research on Azure cloud API to get file data stored on cloud.
                        Aided three web applications as a developer and efficiently communicated with various teams.
                        Collaborated with senior developers and team leads to solve critical problems in applications.
                        Managed multiple microservices and programmed APIs to satisfy business requirements.
                        Created Mockito unit test function for testing controller and service layer to ensure code quality.
                        Tested applications and resolved bugs efficiently through Postman, SonarQube, and JMeter.
                        Valued member of application team during merger of Mindtree and LTI.`,
            location:"Chennai, Tamil Nadu, India",
            mode:"Hybrid",
            type:"Full-time",
            company:"LTIMindtree",
            skills:["Java","Angular","Spring Boot","MYSQL","Postman","SonarQube","JMeter","Mockito","Azure","Microservices","APIs","Unit Testing"]
        }
    ]
    return (
        <Section title="Experiences" icon={<Briefcase></Briefcase>}>
            <div className="w-full h-full flex flex-col justify-center items-start gap-4 flex-wrap p-5">
                {experiences.map(experience => 
                    <ExperienceCard {...experience} key={experience.company}></ExperienceCard>
                )}
            </div>
        </Section>
    )
}

export default Experiences;