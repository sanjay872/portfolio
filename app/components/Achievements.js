import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Winner - Best Use of MongoDB",
    event: "Uncommon Hackathon, UC",
    date: "2024",
    description: "Built 'Interstellar Investigator,' an action shooting game with Python & MongoDB.",
    icon: <Trophy size={28} className="text-yellow-500" />,
  },
  {
    title: "Best Use of MongoDB",
    event: "University of Chicago Hackathon",
    date: "2023",
    description: "Created a real-time leaderboard for a game using MongoDB Atlas.",
    icon: <Star size={28} className="text-blue-500" />,
  },
  {
    title: "Finalist - Orahack Hackathon",
    event: "OraHack",
    date: "2024",
    description: "Developed an education platform for decentralized storage of teacher resources.",
    icon: <Award size={28} className="text-red-500" />,
  },
  {
    title: "Software Developer Volunteer",
    event: "Community Project",
    date: "2023",
    description: "Built an inventory management system using React and Supabase.",
    icon: <Medal size={28} className="text-green-500" />,
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
