using System.ComponentModel.DataAnnotations;

namespace API.Models
{
  public class AppUser : BaseModel
  {
    [Required]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
  }
}