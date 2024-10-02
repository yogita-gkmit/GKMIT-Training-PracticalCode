Question 1
db.movies.find({cast:{$in:db.movies.findOne({title:'Blacksmith Scene'},{cast: 1}).cast}})

Question 2
db.movies.aggregate([
               {
                  $match:{"year":{$lt:1900}}
               },
               {
                  $sort:{
                     "imdb.rating":-1
                  }
               },
               {
                  $limit:5
               }          
            ])

Question 3
db.movies.find({directors:"William K.L. Dickson"},{title:1,year:1, "imdb.rating":1})

Question 4
db.movies.aggregate([
         {$match:{
            genres:"Short"
         }},
         {$unwind:"$directors"},
         {$group:{_id:"$directors",
                  movieCount:{$sum:1}}
            },
         {$sort:{
            movieCount:-1
         }},
         {$limit:3},
         {$project:{directors:"$_id",movieCount:1, _id:0}}

   ]) 