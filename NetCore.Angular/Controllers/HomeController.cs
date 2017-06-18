using Microsoft.AspNetCore.Mvc;

namespace NetCore.Angular.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return PartialView();
        }

        public IActionResult Start()
        {
            return View();
        }
    }
}
