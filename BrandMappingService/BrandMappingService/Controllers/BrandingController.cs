using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace BrandMappingService.Controllers
{
    [Produces("application/json")]
    [Route("api/BrandingController")]
    public class BrandingController : Controller
    {
        // GET: api/BradningController
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/BradningController/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/BradningController
        [HttpPost]
        public void Post([FromBody]BrandReviewResults value)
        {
           
            var emailTo = "";

            var subject = value.userDetails.firstName +  " " + value.userDetails.lastName + 
                          " has submitted his brand review for " + value.userDetails.identifier;
            var body = new StringBuilder();
            body.AppendLine("<b>Who we are:</b> " + string.Join(", ", value.whoWeAre) + "<br/>");
            body.AppendLine("<b>Who we would like to be:</b> " + string.Join(", ", value.weWouldLike) + "<br/>");
            body.AppendLine("<b>Who we don't like to be:</b> " + string.Join(", ", value.weDontWant) + "<br/>");

            var emailSender = new EmailSender();
            emailSender.SendEmail(emailTo, value.userDetails.email, subject, body.ToString());
        }
            
        // PUT: api/BradningController/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        } 
    }
}
