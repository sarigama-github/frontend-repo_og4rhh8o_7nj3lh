import Hero from './components/Hero'
import SigilVault from './components/SigilVault'
import LeadForm from './components/LeadForm'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl">Royal Star</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#grim" className="hover:text-indigo-600">Grimoire</a>
            <a href="#dashboard" className="hover:text-indigo-600">Hallintapaneeli</a>
            <a href="#contact" className="hover:text-indigo-600">Tarjouspyyntö</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <SigilVault />
        <Dashboard />
        <LeadForm />
      </main>
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Royal Star • 43110 Purkutyöt</p>
          <p className="text-sm opacity-80">Pääsigilli näkyy tässä paikassa</p>
        </div>
      </footer>
    </div>
  )
}

export default App
