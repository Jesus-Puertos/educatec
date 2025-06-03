import Link from "next/link"
import Image from "next/image"
import { Star, Settings, Home, BookOpen, BarChart2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header with mascot */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-12 overflow-hidden rounded-full bg-yellow-200 border-2 border-white">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Mascota educativa"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">¡Hola Amigo!</h1>
        </div>
        <Link href="/settings" className="p-2 bg-white/20 rounded-full">
          <Settings className="w-6 h-6 text-white" />
        </Link>
      </header>

      {/* Main Bento Grid */}
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Abecedario */}
          <Link
            href="/activities/alphabet"
            className="relative flex flex-col items-center justify-center p-6 bg-green-100 rounded-3xl shadow-md h-40 md:h-48 overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute -right-4 -top-4 bg-green-400 w-16 h-16 rounded-full flex items-center justify-center rotate-12">
              <span className="text-3xl font-bold text-white">A</span>
            </div>
            <h2 className="text-xl font-bold text-green-800 mt-auto">Abecedario</h2>
            <p className="text-sm text-green-600">Aprende las letras</p>
          </Link>

          {/* Números */}
          <Link
            href="/activities/numbers"
            className="relative flex flex-col items-center justify-center p-6 bg-blue-100 rounded-3xl shadow-md h-40 md:h-48 overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute -right-4 -top-4 bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center rotate-12">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h2 className="text-xl font-bold text-blue-800 mt-auto">Números</h2>
            <p className="text-sm text-blue-600">Cuenta y aprende</p>
          </Link>

          {/* Sílabas */}
          <Link
            href="/activities/syllables"
            className="relative flex flex-col items-center justify-center p-6 bg-purple-100 rounded-3xl shadow-md h-40 md:h-48 overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute -right-4 -top-4 bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center rotate-12">
              <span className="text-2xl font-bold text-white">Ma</span>
            </div>
            <h2 className="text-xl font-bold text-purple-800 mt-auto">Sílabas</h2>
            <p className="text-sm text-purple-600">Forma palabras</p>
          </Link>

          {/* Animales */}
          <Link
            href="/activities/animals"
            className="relative flex flex-col items-center justify-center p-6 bg-yellow-100 rounded-3xl shadow-md h-40 md:h-48 overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute -right-4 -top-4 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">🐶</span>
            </div>
            <h2 className="text-xl font-bold text-yellow-800 mt-auto">Animales</h2>
            <p className="text-sm text-yellow-600">Conoce la fauna</p>
          </Link>

          {/* Colores */}
          <Link
            href="/activities/colors"
            className="relative flex flex-col items-center justify-center p-6 bg-red-100 rounded-3xl shadow-md h-40 md:h-48 overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute -right-4 -top-4 bg-red-400 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">🎨</span>
            </div>
            <h2 className="text-xl font-bold text-red-800 mt-auto">Colores</h2>
            <p className="text-sm text-red-600">Descubre colores</p>
          </Link>

          {/* Juegos */}
          <Link
            href="/activities/games"
            className="relative flex flex-col items-center justify-center p-6 bg-orange-100 rounded-3xl shadow-md h-40 md:h-48 overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute -right-4 -top-4 bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-orange-800 mt-auto">Juegos</h2>
            <p className="text-sm text-orange-600">Diviértete</p>
          </Link>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 bg-white p-2 rounded-t-3xl shadow-lg">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center p-2 text-pink-500">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Inicio</span>
          </Link>
          <Link href="/activities" className="flex flex-col items-center p-2 text-gray-400">
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

