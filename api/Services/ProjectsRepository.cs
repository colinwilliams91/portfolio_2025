using Api.Models;

namespace Api.Services;

public class ProjectsRepository
{
    private readonly List<Project> _projects =
    [
        new Project(1, "Portfolio Website", "Personal portfolio built with React + Vite", "https://example.com/portfolio"),
        new Project(2, "API Service", ".NET Web API sample with CQRS via MediatR", "https://example.com/api")
    ];

    public IEnumerable<Project> GetAll() => _projects;
}
