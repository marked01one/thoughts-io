using API.Database;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  public class AppUserController : BaseApiController
  {
    private readonly DataContext _context;
    public AppUserController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<AppUser>>> GetUsersAsync()
    {
      return await _context.Users.ToListAsync();
    }
  }
}