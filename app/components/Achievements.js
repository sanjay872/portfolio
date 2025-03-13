import { Trophy, Star, Award } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Winner - Best Use of MongoDB",
    event: "Uncommon Hackathon, UC",
    date: "2024",
    description: "Built 'Interstellar Investigator,' an action shooting game with Python & MongoDB.",
    icon: <Trophy size={28} className="text-yellow-500" />,
  },
  {
    title: "Azure Cloud Fundamentals",
    event: "Cloud Exam",
    date: "2022",
    description: "Certificate ID - 992769679",
    icon: <Star size={28} className="text-blue-500" />,
  },
  {
    title: "A-team award",
    event: "LTIMindtree",
    date: "2022",
    description: "Received an 'A-team' award for collaborating on resolving UI and UX issues within 1-2 weeks, allowing early application release. ",
    icon: <Award size={28} className="text-red-500" />,
  },
  {
    title: "Hats Off award",
    event: "LTIMindtree",
    date: "2022",
    description: "Earned a 'Hats Off' award for consistently completing 2-3 new tasks weekly with precision 100%, achieving zero backlog transfer to the next sprint.",
    icon: <Award size={28} className="text-red-500" />,
  },
  {
    title: "Mastermind award",
    event: "LTIMindtree",
    date: "2022",
    description: "Awarded 'Mastermind' for aligning with business requirements and providing an app in two weeks, achieving 100% client satisfaction.",
    icon: <Award size={28} className="text-red-500" />,
  },
];

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🎖 Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center bg-white shadow-md rounded-xl p-4">
            <div className="mr-4">{achievement.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-black">{achievement.title}</h3>
              <p className="text-sm text-gray-500">{achievement.event} - {achievement.date}</p>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
