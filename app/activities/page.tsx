import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Home, BookOpen, BarChart2, Settings } from "lucide-react"

export default function ActivitiesPage() {
  const activities = [
    {
      id: "alphabet",
      title: "Abecedario",
      icon: "A",
      color: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    {
      id: "numbers",
      title: "Números",
      icon: "3",
      color: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
    },
    {
      id: "syllables",
      title: "Sílabas",
      icon: "Ma",
      color: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
    },
    {
      id: "animals",
      title: "Animales",
      icon: "🐶",
      color: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
    },
    {
      id: "colors",
      title: "Colores",
      icon: "🎨",
      color: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
    {
      id: "games",
      title: "Juegos",
      icon: "⭐",
      color: "bg-orange-100",
      textColor: "text-orange-800",
      borderColor: "border-orange-300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-2">
          <Link href="/" className="p-2 bg-white/20 rounded-full">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Actividades</h1>
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
        <div className="grid gap-4">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
              className={`flex items-center p-4 ${activity.color} rounded-2xl shadow-sm border ${activity.borderColor} transition-transform hover:scale-102`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                <span className={`text-2xl font-bold ${activity.textColor}`}>{activity.icon}</span>
              </div>
              <div>
                <h2 className={`text-lg font-bold ${activity.textColor}`}>{activity.title}</h2>
                <div className="flex mt-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-1 border border-gray-200"
                    >
                      <Star className="w-4 h-4 text-yellow-400" fill={i < 2 ? "currentColor" : "none"} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-auto flex flex-col items-end">
                <span className="text-sm font-medium text-gray-600">2/3</span>
                <span className="text-xs text-gray-500">Completado</span>
              </div>
            </Link>
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
          <Link href="/activities" className="flex flex-col items-center p-2 text-pink-500">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Actividades</span>
          </Link>
          <Link href="/progress" className="flex flex-col items-center p-2 text-gray-400">
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

