import { useQuery } from '@tanstack/react-query'
import { fetchProjects, type Project } from '../api'

export default function ProjectsGrid() {
  const { data, isLoading, error } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })

  if (isLoading) return <div className="loading loading-dots loading-md" />
  if (error) return <div className="alert alert-error">Failed to load projects</div>

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((p) => (
        <div key={p.id} className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">{p.title}</h2>
            <p>{p.description}</p>
            <div className="card-actions justify-end">
              <a className="btn btn-primary" href={p.url} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
