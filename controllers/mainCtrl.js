name = {
  name: "Kyle Feinauer"
};

location = {
  location: "Dallas, TX"
};

occupations = {
  occupations: ["Fast Food Worker", "Facilties Worker", "Sports Marketing Researcher", "Art Checker", "Web Developer"]
};

hobbies = [
	{
	  "name": "Programming",
	  "type": "current",
	}, 
	{
	  "name": "Sports",
	  "type": "current",
	}, 
	{
	  "name": "TV shows",
	  "type": "current"
	},
	{
	  "name": "Video Games",
	  "type": "current",
	},
	{
	  "name": "Board/Card Games",
	  "type": "current",
	},
	{
	  "name": "Fitness",
	  "type": "past",
	},
	{
	  "name": "Pottery Making",
	  "type": "past",
	},
];

skillz = [
	{
	  "id": 1,
	  "name": "Javascript",
	  "experience": "n00b"
	}
];

secrets = {
  "secret": "n/a",
};


module.exports = {

	getName: function(req, res, next){
		res.status(200).json(name);
	},

	getLocation: function(req, res, next){
		res.status(200).json(location);
	},

	getOccupations: function(req, res, next){
		res.status(200).json(occupations)
	},

	getLatestOcc: function(req, res, next){
		var latestOcc = occupations.occupations[occupations.occupations.length - 1];
		res.status(200).json(latestOcc);
	},

	getHobbies: function(req, res, next){
		res.status(200).json(hobbies);
	},

	getTypeHobby: function(req, res, next){
		var  allOfType = [];
		var type = req.params.type;
		for(var i = 0; i < hobbies.length; i++){
			if(hobbies[i].type === type){
				allOfType.push(hobbies[i]);
			}
		}
		if(allOfType.length === 0){
			res.json({message: "Sorry, no hobbies of this type."})
		} else {
			res.status(200).json(allOfType);
		}
	},

};




