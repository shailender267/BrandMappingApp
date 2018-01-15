using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrandMappingService
{
    public class BrandReviewResults
    {
        public string[] whoWeAre { get; set; }

        public string[] weWouldLike { get; set; }

        public string[] weDontWant { get; set; }

        public Reviewer userDetails { get; set; }
    }

    public class Reviewer
    {
        public string identifier { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
    }

}
