
db;

db.getMongo().getDBs();

db.getMongo().getDBs();

use('db(legend)');

db.getCollectionNames();

db.createCollection("course");

db.course.find();

db.course.insertOne({  // inserting data 
    name:"Physics",
    type:"practical",
    marks:100
});

db.course.insertOne({
    name:"chemistry",
    type:"practical",
    marks:100
});

db.course.find();


use('new_db');
db.createCollection("new_collection");
db.new_collection.in({
    name:"damdoar",
    roll_no:50,
    course:"computer science ",
    college:"Thakur college",
    Nick_name:"Golu"
});

/// student data now

use("test");

db.getCollectionNames();

db.course.insertMany([{
    name:"English",
    type:"Theory"
},{
    name:"P.Ed",
    mandatory:"NO"
}
]);

db.course.find();


