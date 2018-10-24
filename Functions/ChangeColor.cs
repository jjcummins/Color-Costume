using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Jeremy.Function
{
    public static class ChangeColor
    {
        [FunctionName("ChangeColor")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", "options", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation($"Change Color function processed a request of method {req.Method}.");

            if (req.Method.Equals(HttpMethods.Options, StringComparison.OrdinalIgnoreCase))
            {
                return new OkResult();
            } 

            string color = req.Query["color"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            color = color ?? data?.color;

            log.LogInformation($"Color: {color}");

            return color != null
                ? (ActionResult)new OkResult()
                : new BadRequestObjectResult("Please pass a color on the query string or in the request body");
        }
    }
}
