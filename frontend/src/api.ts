export type Project = { id: number; title: string; description: string; url: string }

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5248'

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE}/projects`)
  if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`)
  return res.json()
}
