using API.Database;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class AccountController : BaseApiController
  {
    private readonly DataContext _context;
    public AccountController(DataContext context)
    {
      _context = context;
    }

    [HttpPost("register")]
    public async Task<ActionResult<AppUser>> Register(RegisterDto requestBody)
    {
      var user = new AppUser
      {
        Username = requestBody.Username,
        Password = requestBody.Password
      };

      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      return user;
    }
  }
}