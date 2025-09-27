using Api.Features.Projects;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectsController(IMediator mediator) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var projects = await mediator.Send(new GetProjectsQuery());
        return Ok(projects);
    }
}
