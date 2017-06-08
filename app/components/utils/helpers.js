var axios = require("axios");

var api_key = "8cf6b6eca89543d984b23acd76caaeb0";

var helper =  {

	runQuery: function(searchInput, numberofRecords, startDate, endDate){
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
        'api-key': api_key,
        'q': searchInput,
        'begin_date': endDate,
        'end_date': startDate
      });

      return axios.get(queryURL).then(function(result){
        
        var AllArticles = result.response.docs;

      	for (var i = 0; i < numberOfRecords; i++) {

      		var current_article = AllArticles[i];
	        var title = current_article.headline.main;
			var writer = current_article.byline.original;
			var section = current_article.section_name;
			var publish_date = current_article.pub_date;
			var link = current_article.web_url;

			var articleNumber = i+1;
        }//end of loop
  	  })//end of axios.get(queryURL)
	},//end of runQuery
}//end of helper

module.exports = helper;