import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Volume2, Globe, Moon, Bell, HelpCircle, Home, BookOpen, BarChart2, Settings } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-b-3xl shadow-md">
        <div className="flex items-center gap-2">
          <Link href="/" className="p-2 bg-white/20 rounded-full">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Ajustes</h1>
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
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16 overflow-hidden rounded-full bg-yellow-200 border-2 border-teal-300 mr-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Perfil de usuario"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Pequeño Explorador</h2>
              <p className="text-sm text-gray-500">Nivel: Principiante</p>
            </div>
          </div>

          {/* Settings List */}
          <div className="space-y-5">
            {/* Language */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Idioma</h3>
                  <p className="text-xs text-gray-500">Español</p>
                </div>
              </div>
              <button className="text-sm font-medium text-teal-600">Cambiar</button>
            </div>

            {/* Volume */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Volume2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Volumen</h3>
                  <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Night Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <Moon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-medium text-gray-800">Modo Nocturno</h3>
              </div>
              <Switch id="night-mode" />
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <Bell className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-medium text-gray-800">Notificaciones</h3>
              </div>
              <Switch id="notifications" checked />
            </div>

            {/* Help */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <HelpCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-800">Ayuda y Soporte</h3>
              </div>
              <button className="text-sm font-medium text-teal-600">Abrir</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-6 py-2 bg-white text-gray-500 rounded-full text-sm font-medium shadow-sm">
            Cerrar Sesión
          </button>
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
          <Link href="/progress" className="flex flex-col items-center p-2 text-gray-400">
            <BarChart2 className="w-6 h-6" />
            <span className="text-xs font-medium">Progreso</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center p-2 text-pink-500">
            <Settings className="w-6 h-6" />
            <span className="text-xs font-medium">Ajustes</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

