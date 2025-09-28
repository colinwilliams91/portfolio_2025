import './App.css'

import { useEffect, useState } from 'react'
import ProjectsGrid from './components/ProjectsGrid'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('theme') as 'light' | 'dark') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen">
      <div className="navbar bg-base-100 border-b">
        <div className="flex-1 px-2 text-xl font-semibold">Portfolio</div>
        <div className="flex-none">
          <button className="btn btn-ghost" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
      <main className="container mx-auto p-6">
        <ProjectsGrid />
      </main>
      <footer className="container mx-auto px-6 pb-6 opacity-60 text-sm">
        <div>
          Build: {typeof __BUILD_VERSION__ !== 'undefined' ? __BUILD_VERSION__ : ''}
          {typeof __BUILD_COMMIT__ !== 'undefined' && __BUILD_COMMIT__ ? ` · ${__BUILD_COMMIT__}` : ''}
        </div>
      </footer>
    </div>
  )
}
