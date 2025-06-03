import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Award, Trophy, Home, BookOpen, BarChart2, Settings } from "lucide-react"

export default function ProgressPage() {
  const subjects = [
    {
      id: "alphabet",
      title: "Abecedario",
      progress: 75,
      color: "bg-green-100",
      progressColor: "bg-green-500",
      textColor: "text-green-800",
    },
    {
      id: "numbers",
      title: "Números",
      progress: 60,
      color: "bg-blue-100",
      progressColor: "bg-blue-500",
      textColor: "text-blue-800",
    },
    {
      id: "syllables",
      title: "Sílabas",
      progress: 40,
      color: "bg-purple-100",
      progressColor: "bg-purple-500",
      textColor: "text-purple-800",
    },
    {
      id: "animals",
      title: "Animales",
      progress: 90,
      color: "bg-yellow-100",
      progressColor: "bg-yellow-500",
      textColor: "text-yellow-800",
    },
    {
      id: "colors",
      title: "Colores",
      progress: 100,
      color: "bg-red-100",
      progressColor: "bg-red-500",
      textColor: "text-red-800",
    },
  ]

  const achievements = [
    { title: "Primera Letra", icon: <Award className="w-6 h-6 text-yellow-500" />, completed: true },
    { title: "Cuenta hasta 10", icon: <Trophy className="w-6 h-6 text-yellow-500" />, completed: true },
    { title: "Maestro Animal", icon: <Award className="w-6 h-6 text-yellow-500" />, completed: true },
    { title: "Experto en Colores", icon: <Trophy className="w-6 h-6 text-yellow-500" />, completed: true },
    { title: "Rey de las Sílabas", icon: <Award className="w-6 h-6 text-gray-300" />, completed: false },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-2">
          <Link href="/" className="p-2 bg-white/20 rounded-full">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Mi Progreso</h1>
        </div>
        <div className="relative w-12 h-12 overflow-hidden rounded-full bg-yellow-200 border-2 border-white">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Mascota educativa"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        {/* Overall Progress */}
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Progreso Total</h2>
            <span className="text-2xl font-bold text-pink-500">73%</span>
          </div>
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
              style={{ width: "73%" }}
            ></div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="bg-yellow-100 px-4 py-2 rounded-full flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" />
              <span className="text-sm font-medium text-yellow-800">¡Vas muy bien! Sigue así</span>
            </div>
          </div>
        </div>

        {/* Subject Progress */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Por Temas</h2>
        <div className="space-y-4 mb-6">
          {subjects.map((subject) => (
            <div key={subject.id} className={`${subject.color} p-4 rounded-2xl shadow-sm`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-bold ${subject.textColor}`}>{subject.title}</h3>
                <span className={`font-bold ${subject.textColor}`}>{subject.progress}%</span>
              </div>
              <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
                <div className={`h-full ${subject.progressColor}`} style={{ width: `${subject.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Logros</h2>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl flex items-center ${achievement.completed ? "bg-white" : "bg-gray-100"} shadow-sm`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-2 ${achievement.completed ? "bg-yellow-100" : "bg-gray-200"}`}
              >
                {achievement.icon}
              </div>
              <span className={`text-sm font-medium ${achievement.completed ? "text-gray-800" : "text-gray-400"}`}>
                {achievement.title}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 bg-white p-2 rounded-t-3xl shadow-lg">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center p-2 text-gray-400">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Inicio</span>
          </Link>
          <Link href="/activities" className="flex flex-col items-center p-2 text-gray-400">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Actividades</span>
          </Link>
          <Link href="/progress" className="flex flex-col items-center p-2 text-pink-500">
            <BarChart2 className="w-6 h-6" />
            <span className="text-xs font-medium">Progreso</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center p-2 text-gray-400">
            <Settings className="w-6 h-6" />
            <span className="text-xs font-medium">Ajustes</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

