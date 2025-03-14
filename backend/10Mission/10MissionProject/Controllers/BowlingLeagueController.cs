using _10MissionProject.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _10MissionProject.Controllers;

[ApiController]
[Route("[controller]")]
public class BowlingLeagueController : ControllerBase
{
    private readonly BowlerDbContext _context;
    public BowlingLeagueController(BowlerDbContext temp)
    {
        _context = temp;
    }

    [HttpGet(Name = "BowlingLeagueGet")]
    public IActionResult Get()
    {
        var BowlerData = _context.Bowlers
            .Include(x => x.Team)
            .Where(x=>x.Team.TeamId == 1 || x.Team.TeamId == 2)
            .Select(b => new
            {
                BowlerId = b.BowlerId,
                BowlerFirstName = b.BowlerFirstName,
                BowlerLastName = b.BowlerLastName,
                BowlerMidName = b.BowlerMiddleInit,
                TeamName = b.Team.TeamName,
                TeamId = b.Team.TeamId,
                Address = b.BowlerAddress,
                City = b.BowlerCity,
                State = b.BowlerState,
                Zip = b.BowlerZip,
                PhoneNumber = b.BowlerPhoneNumber
            })
            .ToList();
        return Ok(BowlerData);
    }
}