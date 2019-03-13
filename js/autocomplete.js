$(function (){

	// Easy Autocomplete plugin for search <input>

	var options = {
		url: "json/data.json",
		placeholder: "Chercher",
		maxNumberOfElements: 5,

		// Specify data key
		getValue: "name",


		// Specify name of tables to perform search in 
		categories: [
			{
				listLocation: "product",
				header: "-- Product --"
			},
			{
				listLocation: "brand",
				header: "-- Brand --"
			}
		],

		list: {
			match: {
				enabled: true
			}
		}

	};

	$("#provider-json").easyAutocomplete(options);

}); // END
