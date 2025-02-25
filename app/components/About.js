import Image from "next/image";

export default function About(){
    return(
        <>
            <Image src="/profile.png" alt="Profile Picture" width={150} height={150} className="rounded-full mb-4" />
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            <p className="mt-4 max-w-2xl text-gray-600">
            I am a passionate software engineer with experience in full-stack development,
            cloud-native technologies, and intelligent automation. I have participated in multiple
            hackathons, winning awards for innovative solutions. My expertise includes React, Angular,
            Spring Boot, Flask, and cloud deployment strategies. I love solving complex problems and
            building scalable applications that make a difference.
            </p>
            <div className="mt-4 flex space-x-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-lg">React</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-lg">Spring Boot</span>
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-lg">AWS</span>
            </div>
            <div className="mt-6 flex space-x-4">
            <a href="https://github.com/yourgithub" target="_blank" className="text-gray-600 hover:text-gray-900">
                GitHub
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-gray-600 hover:text-gray-900">
                LinkedIn
            </a>
            <a href="/resume.pdf" download className="text-blue-600 hover:underline">
                Download Resume
            </a>
            </div>
        </>
    )
}