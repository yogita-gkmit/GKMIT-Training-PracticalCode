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

Question 6

// isme pehle unwind krdiya, fir castName k basis pr movies nikal li...code base me honge ye changes 
// [{
//    castName:
//    movies = [a, b, c]
// }]

db.movies.aggregate([    
    {
    $match: {
      "cast": {
      $exists: true
      }

    }
    },

    {
      $project: {
        castPairs: {
          $reduce: {
            input: { $range: [0, { $subtract: [{ $size: "$cast" }, 1] }] },
            initialValue: [],
            in: {
              $concatArrays: [
                "$$value",
                {
                  $map: {
                    input: { $slice: ["$cast", { $add: ["$$this", 1] }, { $size: "$cast" }] },
                    as: "pairActor",
                    in: [{ $arrayElemAt: ["$cast", "$$this"] }, "$$pairActor"]
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      $unwind: "$castPairs"
    },
    {
      $project: {
        actorPair: {
          $let: {
            vars: {
              first: { $arrayElemAt: ["$castPairs", 0] },
              second: { $arrayElemAt: ["$castPairs", 1] }
            },
            in: {
              $cond: { if: { $lt: ["$$first", "$$second"] }, then: ["$$first", "$$second"], else: ["$$second", "$$first"] }
            }
          }
        }
      }
    },
    {
      $group: {
        _id: "$actorPair",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ])