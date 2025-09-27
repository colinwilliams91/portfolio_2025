using Api.Models;
using Api.Services;
using MediatR;

namespace Api.Features.Projects;

public record GetProjectsQuery() : IRequest<IEnumerable<Project>>;

public class GetProjectsHandler(ProjectsRepository repo) : IRequestHandler<GetProjectsQuery, IEnumerable<Project>>
{
    public Task<IEnumerable<Project>> Handle(GetProjectsQuery request, CancellationToken cancellationToken)
        => Task.FromResult(repo.GetAll());
}
