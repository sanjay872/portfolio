import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="w-1/3 flex items-center justify-center">
        <Image className='rounded-lg' src="/images/profile_pic.jpg" alt='profile pic' width={400} height={400}></Image>
      </div>
      <div className='w-1/2 flex flex-col item-start justify-start h-full gap-5'>
        <h1 className="text-3xl font-bold">Hello, I&#x2019;m Sanjay Sakthivel.</h1>
        <p className="text-lg">I&#x2019;m a CS graduate Student with 2.5 years of experience as a full-stack Java developer, I have technical expertise in different programming languages, frameworks, tools, and platforms, such as Docker, AWS, Angular and Spring boot. My passion for problem-solving and application development has led me to take many courses and participate in multiple hackathons.</p>
      </div>
    </div>    
  );
}
