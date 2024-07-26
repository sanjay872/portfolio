import ProjectCard from "@/components/projectcard";
import Section from "@/components/section";
import { Folder} from "lucide-react";

function Projects(){
  const projects = [ 
   {
      title:"Inventory management app",
      description:"Volunteered as a Software Developer for Driven II Develop, a nonprofit initiative focused on providing software solutions to underprivileged communities. Led the development of an Inventory management app that helps people to manage their business in a easier way.",
      image:"",
      href:"",
      tags:["React","Supabase"],
      startDate: "May 2024",
      endDate: "Jul 2024"
    },
    {
      title:"Chicago Food Network",
      description:"Food shortage and wastage is a huge problem in Chicago. Lots of homeless people are suffering and starving and lost of food is getting wasted and thrown away. Many events and in homes leftover food is being thrown away. We have developed a platform for solving this very issue.",
      image:"",
      href:"",
      tags:["React","Spring Boot","MYSQL","Google Maps API","Postman"],
      startDate: "Apr 2024",
      endDate: "Apr 2024"
    },
    {
      title:"Minerva",
      description:"We have created an online learning platform using web3. The users can upload educational videos. And can view what others have uploaded through the platform.",
      image:"",
      href:"https://github.com/sanjay872/Minerva",
      tags:["React","Solidity","Ethereum","Web3","IPFS","Truffle","Ganache","Metamask","Web2storage"],
      startDate: "Apr 2024",
      endDate: "Apr 2024"
    },
    {
      title:"Interstellar investigator",
      description:"Built Cicada shooter game (view) at Uncommon Hacks Hackathon. Collaborated closely with team members to design functionality of object movement, component management, and object collision, implemented app leveraging Python, Pygame, and MongoDB.",
      image:"",
      href:"https://github.com/sanjay872/interstellar-investigator",
      tags:["Python","Pygame","MongoDB"],
      startDate: "Mar 2024",
      endDate: "Mar 2024"
    },
    {
      title:"Shopping portal",
      description:"Designed a single page app with Angular and devised micro-services-oriented backends in spring boot. Deployed to AWS with infrastructure as code",
      image:"",
      href:"https://github.com/sanjay872/ShoppingPortal",
      tags:["Angular","Spring Boot","AWS"],
      startDate: "Mar 2022",
      endDate: "Apr 2022"
    }
    ,
    {
      title:"Dyscalculia Helper App",
      description:"Acted as a team leader and developed a web app leveraging Angular, Spring boot, MYSQL and Flask. Applied voice recognition deep learning model to verify spoken numbers and provide math practice problems.",
      image:"",
      href:"https://github.com/sanjay872/DyscalculiaHelperApp",
      tags:["Angular","Spring Boot","Flask","MYSQL", "Machine Learning"],
      startDate: "May 2021",
      endDate: "Aug 2021"
    },
    {
      title:"Weather App",
      description:"Display Weather forecast for the city user search",
      image:"",
      href:"https://github.com/sanjay872/WeatherApp",
      tags:["Angular","Accurate Weather API"],
      startDate: "Jul 2020",
      endDate: "Jul 2020"
    },
    {
      title:"Intellectual Screening Test",
      description:"IQ testing for students",
      image:"",
      href:"https://github.com/sanjay872/intellectual-screening-test",
      tags:["Angular","Spring Boot","Flask","MYSQL", "Machine Learning"],
      startDate: "Mar 2020",
      endDate: "Apr 2020"
    },
    {
      title: "Welfare Portal",
      description: "Website application that acts as a communication bridge between welfare organization and donors.",
      image: "",
      href: "https://github.com/sanjay872/welfare-portal",
      tags: ["Angular","Supabase"],
      startDate: "FEB 2020",
      endDate: "Mar 2020"
    },
  ]
   return(
    <div className="w-full">
    <Section title="Projects" icon={<Folder></Folder>}>
      <div className='w-full h-full flex flex-row justify-center items-start gap-4 flex-wrap p-5'>
    {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} image={project.image} href={project.href} tags={project.tags} startDate={project.startDate} endDate={project.startDate}></ProjectCard>
        ))}     
      </div>
    </Section>
  </div>
   )
}
export default Projects;