using SendGrid;
using SendGrid.Helpers.Mail;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BrandMappingService
{
    public class EmailSender
    {
        public async Task SendEmail(string to, string ccTo, string subject, string htmlContent)
        {
            var apiKey = "";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("no-reply@BrandMapping.com", "BrandMapping");
            var toMail = new EmailAddress(to);
            var ccMail = new EmailAddress(ccTo);
            var emailReceipients = new List<EmailAddress>
            {
                toMail,
                ccMail
            };
            var plainTextContent = Regex.Replace(htmlContent, "<[^>]*>", "");
            var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, emailReceipients, 
                                        subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
            
        }
    }
}
