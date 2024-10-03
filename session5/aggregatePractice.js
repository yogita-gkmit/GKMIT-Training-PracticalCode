db.movies.aggregate([
	{
		$match:{"imdb.rating":{$gte:5}},
		{
			$addField:{
				"avgdata":{$avg:["$imdb.rating", "$tomatoes.viewer.rating"]}
			}
		}
	}
])

db.movies.aggregate([
	{$match:{"imdb.rating":{$gte:5}}},
	{
		$addField:{
			"avgdata":{$avg:["$imdb.rating", "$tomatoes.viewer.rating"]}
		}
	},
	{
		$match:{"year":{$gte:1910}}
	},
	{
		$unwind:"genres"
	},
	{
		$count:"genreCount"
	}

])

db.movies.aggregate([
	{$match:{"imdb.rating":{$gte:5}}},
	{
		$addField:{
			"avgdata":{$avg:["$imdb.rating", "$tomatoes.viewer.rating"]}
		}
	},
	{
		$match:{"year":{$gte:1910}}
	},
	{
		$unwind:"genres"
	},
	{
		$project:{
			title:1,
			"titleUpdate":title,
			title:0
		}
	}

])