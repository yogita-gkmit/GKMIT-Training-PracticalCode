db.movies.aggregate([
					{
						$match: {"imdb.rating": {$gt: 5}}}, 
						{
							$addFields: {"average": 
									{
										$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
									}
						}
					}, 
					{
						$match:{"year":{$gte:1910}}
					},
					{
						$count:"CountDocument"
					}
					
					])

db.movies.aggregate([
					{
						$match: {"imdb.rating": {$gt: 5}}}, 
						{
							$addFields: {"average": 
									{
										$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
									}}
						}
					, 
					{
						$match:{"year":{$gte:1910}}
					},
					{
						$unwind: "$genres"
					},
					{
						$count:"GenreCount"
					}					
					])



					db.movies.aggregate([
					{
						$match: {"imdb.rating": {$gt: 5}}}, 
						{
							$addFields: {"average": 
									{
										$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
									}}
						}
					, 
					{
						$match:{"year":{$gte:1910}}
					},
					{
						$unwind: "$genres"
					},
					{
						$project:{
							viewerProject : "$tomatoes.viewer",

						}
					}					
					])


					db.movies.aggregate([
					{
						$match: {"imdb.rating": {$gt: 5}}}, 
						{
							$addFields: {"average": 
									{
										$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
									}}
						}
					, 
					{
						$match:{"year":{$gte:1910}}
					},
					{
						$group:{
							_id:"$year",
							title:{
								$push:"$title"
							},
							count:{
								$count:{}
							}
						},
					}					
					])



db.movies.aggregate([{$match: {'imdb.rating': {$gt: 5}}}, {$addFields: {'average': {$avg: ['$imdb.rating', '$tomatoes.viewer.rating']}}}, {$match: {'year': {$gte: 1910}}}, {$sort: {year: 1}}, {$lookup: {from: "comments", foreignField: "movies_id", localField: "_id", as: "Comments"}}])


					db.movies.aggregate([
						{
   							$lookup:
      								{
         								from: "comments",
         								foreignField: "movies_id",
         								localField: "_id"
        								as: "comments"
      								}
						},
						{
							$match: {"imdb.rating": {$gt: 5}}}, 
								{
									$addFields: {"average": 
										{
											$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
										}}
								}
						}
						, 
						{
							$match:{"year":{$gte:1910}}
						},
										
					])


					db.movies.aggregate([
						
						{
							$match: {"imdb.rating": {$gt: 5}}}, 
								{
									$addFields: {"average": 
										{
											$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
										}}
								}
						}
						, 
						{
							$match:{"year":{$gte:1910}}
						},
										
					])





					db.movies.aggregate([
					{
						$match: {"imdb.rating": {$gt: 5}}}, 
						{
							$addFields: {"average": 
									{
										$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
									}}
						}
					, 
					{
						$match:{"year":{$gte:1910}}
					},
					{
						$facet:{
							field1:[{
								$group:{
									_id:"$year",
									title:{
										$push:"$title"
									},
									count:{
										$count:{}
									}
									
							}
							}],

							field2:[{
								$count:"CountDocument"
							}]
						}
					}
										
					])


db.movies.aggregate([
					{
						$match: {"imdb.rating": {$gt: 5}}}, 
						{
							$addFields: {"average": 
									{
										$avg: ["$imdb.rating", "$tomatoes.viewer.rating"]
									}}
						}
					, 
					{
						$match:{"year":{$gte:1910}}
					},
					{
						$facet:{
							field1:[{
								$skip:10

							},{
								$limit:20
							}],

							field2:[{
								$count:"CountDocument"
							}]
						}
					}
										
					])



function abc(){
	print("hellooooo");
}
abc();
