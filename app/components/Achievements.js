import { Trophy, Star, Award } from "lucide-react";

const achievements = [
  {
    title: "First Place – Agentic AI Hackathon",
    event: "eAlliance Corporation | Northern Illinois University",
    date: "2025",
    description:
      "Won first place for building PowerAI, an agentic AI contract generation and review system that automated clause creation, detected missing terms, and flagged compliance risks using LLMs and workflow automation—delivered within a 7-hour build window.",
    icon: <Trophy size={28} className="text-yellow-500" />,
  },
  {
    title: "Hackathon Winner – Best Use of MongoDB",
    event: "Uncommon Hackathon, University of Chicago",
    date: "2024",
    description:
      "Awarded for best use of MongoDB by building Interstellar Investigator, a Python-based action game featuring real-time scoring, persistent leaderboard storage, and scalable game-state management.",
    icon: <Trophy size={28} className="text-yellow-500" />,
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    event: "Microsoft Certification",
    date: "2022",
    description:
      "Earned Azure Fundamentals certification, validating knowledge of core cloud services, security, governance, pricing models, and deployment concepts (Credential ID: 992769679).",
    icon: <Star size={28} className="text-blue-500" />,
  },
  {
    title: "A-Team Award",
    event: "LTIMindtree",
    date: "2022",
    description:
      "Recognized for rapid cross-team collaboration in resolving 50+ critical UI and UX issues within two weeks, stabilizing production and enabling an early, defect-free release.",
    icon: <Award size={28} className="text-red-500" />,
  },
  {
    title: "Hats Off Award",
    event: "LTIMindtree",
    date: "2022",
    description:
      "Awarded for consistently delivering 2–3 high-priority sprint tasks with zero defects, eliminating backlog spillover and improving release predictability.",
    icon: <Award size={28} className="text-red-500" />,
  },
  {
    title: "Mastermind Award",
    event: "LTIMindtree",
    date: "2022",
    description:
      "Honored for translating complex business requirements into a production-ready application within two weeks, achieving full client approval and on-time delivery.",
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
