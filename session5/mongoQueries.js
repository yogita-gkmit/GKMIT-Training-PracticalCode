 Question 1
 db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
 				{
 					$set:{
 						newname:[
 							{name:'mnb'},
 							{name:'pqr'},
 							{name:'stu'}
 						]
 					}
 				}
 			)


db.users.update({_id: ObjectId('66fa795258a005ce88964034')},
		{
			$pull:{
				'newname':
					{name:'pqr'}
				}
		}
	)



Question 2 (increment)
db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
				{
					$set: {rollno:0}
				}

db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
				{
					$inc:{rollno:2}
				}
			)



Question 2 (currentDate)
db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
			{
				$currentDate:
						{
							Date:{$type : 'date'}
						}
			}
		)

db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
			{
				$currentDate:
					{
						Date:{$type : 'timestamp'}
					}
			}
		)

Question 2 (min)
db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
			{
				$min : {likes: 5}
			}
		)



Question 2 (max)
db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
			{
				$max : {likes: 7}
			}
		)


Question 2 (rename)
db.users.updateOne({_id: ObjectId('66fa795258a005ce88964034')}, 
			{
				$rename : {rollno: 'comments'}
			}
		)

Question 2 (unset)
db.users.update({_id:ObjectId('66fa795258a005ce88964034')}, 
			{
				$unset: {rollno:0}
			}
		)

Question 2 (push)
db.users.update({_id:ObjectId('66fa795258a005ce88964034')}, 
			{
				$push:
					{
						newname:{rollno:0}
					}
			}
		)

Question 2 (pop)
db.users.update({_id:ObjectId('66fa795258a005ce88964034')}, 
			{
				$pop : {newname:1}
			}
		)


Question 2 (pull)
db.users.update({_id: ObjectId('66fa795258a005ce88964034')},
		{
			$pull:{
				'newname':
					{name:'pqr'}
				}
		}
	)

Question 2 (addToSet)
db.users.update({_id:ObjectId('66fa795258a005ce88964034')}, 
		{
			$addToSet : {random:'hello'}
		}
	)




Question 3 (limit)
db.movies.find().limit(5)


Question 3 (sort)
db.movies.find().sort({title:1})

Question 3 (sort, skip, limit)
db.movies.find().sort({year:1}).skip(5).limit(5)

Question 4 (and, or)
db.movies.find(
				{
					$and:[
							{
								$or:
									[
										{rated:'NOT RATED'}, 
										{type:'movie'} 
										
									]

							}
							{year:1956}
						]
				}
			)


Question 5 (regex)
db.movies.find({plot:{$regex:/Drama/}}).limit(3)



Other Methods

Count()
db.movies.find({$and:[{$or:[{rated:'NOT RATED'}, {type:'movie'}, {year:1956}]}]}).count()

Remove (remove is depricated, we should use deleteOne, deleteMany)
db.users.remove({_id:ObjectId('66fa795258a005ce88964035')})