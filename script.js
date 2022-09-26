//CRUD OPERATIONS
//Tables - Collections
// Columns - Fields
// Rows - Documents


//CREATE 
//Syntax: db.collectionName.insertOne({object})
//JS SYNTAX: object.object.method({object})

//insertOne -- insert a single document
db.collection.insertOne({document})

db.users.insertOne(
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "123456",
            email: "janedoe@mail.com"
        },
        courses: ["CSS", "JavaScript", "Python"]
    }
);


//insertMany - insert multiple documents or an array of documents
//Syntax: db.collectionName.insertMany([(objectA), (objectB)]);

db.collection.insertMany({document}, {document})

db.users.insertMany(
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "123455",
            email: "stephenhawking@mail.com"
        },
        courses: ["Python", "React", "PHP"],
        department: "none",
    }, 
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "123457",
            email: "neilarmstrong@mail.com"
        },
        courses: ["Python", "Laravel", "SaSS"],
        department: "none",
    }, 
);


//READ

//SYNTAX: db.collectionName.find();
//SYNTAX: db.collectionName.find({field: value});

db.collection.find({query}, {projection});

db.users.find();
//returns all documents/rows

//using multiple query parameters
//Syntax: db.collectionName.find({fieldA: valueA, fieldB: valueB});

db.users.find({
    lastName: "Armstrong",
    age: 82
});

//UPDATE 
db.collectionName.updateOne();
db.collectionName.updateMany();


//updateOne() -- manipulate a single document
//SYNTAX: db.collectionName.updateOne({criteria}, {$set: {field:value}});


//insert a document for updateOne()
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "000000",
        email: "test@example.com"
    }, 
    course: [],
    department: "none"
});


//update a single document
db.users.updateOne({query}, {update});

db.users.updateOne(
    {
       firstName: "Test" 
    },
    {
        $set: {
        firstName: "Bill",
        lastName: "Gates",
        age: 65,
        contact: {
            phone: "123459",
            email: "bill@mail.com"
        },
        course: ["PHP", "Laravel", "HTML"],
        department: "Operations",
        status: "active"
        }
    }
);

db.users.updateOne(
    {
       firstName: "Jane" 
    },
    {
        $set: {
        firstName: "Paula",
        department: "none",
        }
    }
);


//Exercises
//Update the document with firstName “Jane” with field department value “none”.
db.users.updateOne({ firstName: "Jane" }, { $set: { department: "none" } });


db.users.updateMany(
    {
        department: "none"
    },

    {
        $set: {
            department: "HR"
        }
    }
);

//insert another document for replaceOne
db.users.insertOne((
    firstName: "Test",
    lastName: "Test",


));



db.users.replaceOne(
    {
        firstName: "Test",
    }, 
    {
        firstName: "Billy",
        lastName: "Crawford",
        age: 35,
        contact: {
            phone: "123456789",
            email: "billycrawford@mail.com"
        },
        course: ["React", "Node", "Express"],
        department: "Finance"
    }
);


db.users.replaceOne(
    {
        firstName: "Bill",
    }, 
    {
        firstName: "Elon",
        lastName: "Musk",
        age: 45,
        contact: {
            phone: "555555",
            email: "elon@mail.com"
        },
        course: ["Typescript", "Angular", "Machine Learning"],
        department: "CEO"
    }
);


db.users.replaceOne(
    {
        firstName: "Bill",
    },
    {
        firstName: "Bill",
        lastName: "Gates",
        age: 65,
        contact: {
            phone: "123456789",
            email: "billgates@mail.com",
        },
        courses: ["PHP", "Laravel", "HTML"],
        department: "operations",
    }
);

db.users.updateOne(
    {
        firstName: "Bill",
    },

    {
        $unset: {
            status: "active"
        }
    }
);

//DELETE
//Syntax: db.collectionName.deleteOne({criteria})


//insert a document for deleteOne() operation
db.users.insertOne(
    {
        firstName: "Test",
        lastName: "Test",
        age: 0,
        contact: {
            phone: "00000000",
            email: "test@mail.com",
        },
        courses: [],
        department: "none"
    }
);


//delete a single document
db.users.deleteOne(
    {
        firstName: "Test"
    }
);


//delete multiple documents
db.users.deleteMany({department: "HR"});
//Trigger warning: be careful to use deleteMany method. If no search criteria is provided, it will delete all documents in the database


//How to add back deleted documents?
db.users.insertMany(
    
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 21,
            contact: {
                phone: "123456",
                email: "janedoe@mail.com"
            },
            courses: ["CSS", "JavaScript", "Python"]
        },
        {
            firstName: "Neil",
            lastName: "Armstrong",
            age: 82,
            contact: {
                phone: "123457",
                email: "neilarmstrong@mail.com"
            },
            courses: ["Python", "Laravel", "SaSS"],
            department: "none",
        }, 
    
);

//Advance Queries
//-retrieve data with complex data structure
// essential to ensure that we are able to retrieve any information that we would need in our application

//Query on nested fields/columns
db.users.find(
    {
        "contact.phone": "1234567",
    }
); //json script approach

//Query on an embedded document
db.users.find(
    {
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        }
    }
);
 




// --------------------------------------------?
//VALUES THAT ARE INPUT IN METHODS ARE CASE SENSITIVE

//CRUD OPERATIONS

//CREATE
//SYNTAX: db.collectionName.insertOne({object})
//JS SYNTAX: object.object.method({object})

//insertOne - insert a single document
db.collection.insertOne({document})

db.users.insertOne(
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "87654321",
            email: "janedoe@mail.com"
        },
        courses: ["CSS", "JavaScript", "Python"]
    }
);

//insertMany - insert multiple documents or an array of documents
//Syntax: db.collectionName.insertMany([{objectA}, {objectB}]);

db.collection.insertMany ([{document}, {document}])

db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
        courses: ["Python", "React", "PHP"],
        department: "none"
    },

    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@mail.com"
        },
        courses: ["React", "Laravel", "SaSS"],
        department: "none"
    }

]);

//READ

//SYNTAX: db.collectionName.find();
//SYNTAX: db.collectionName.find({field:value});

db.collection.find({query}, {projection});

db.users.find();
//returns all documents/rows

//using multiple query parameters
//Syntax: db.collectionName.find({fieldA:valueA, fieldB: valueB});

db.users.find({
    lastName: "Armstrong",
    age:82
});

//UPDATE
db.collectionName.updateOne();
db.collection.updateMany();

//updateOne() - manipulate a single document
//SYNTAX: db.collectionName.updateOne({criteria}, {$set: {field:value}});

//insert a document for updateOne()
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "00000000",
        email: "test@mail.com"
    },
    course: [],
    department: "none"
});

//update a single document
db.users.updateOne({query}, {update});

db.users.updateOne(
    {
        firstName: "Test"
    },

    {
        $set: {
            firstName: "Bill",
            lastName: "Gates",
            age:65,
            contact: {
                phone: "123456789",
                email: "bill@mail.com"
            },
            courses: ["PHP", "Laravel", "HTML"],
            department: "Operations",
            status: "active"
        }
    }
);

//Exercises
/**
 Update the document with firstName “Jane” with field department value “none”.
 */
db.users.updateOne({firstName: "Jane"}, {$set: {department:"none"}});

//updating multiple documents at once
//syntax: db.collectionName.updateMany({criteria}, {$set: {field:value}});

db.users.updateMany(
    {
        department: "none"
    },

    {
        $set: {
            department: "HR"
        }
    }
);

//insert another document for replaceOne
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "00000000",
        email: "test@mail.com"
    },
    courses:[],
    department: "none"
});

//replacing the whole document if necessary
db.users.replaceOne(
    {
        firstName: "Test"
    },
    {
        firstName: "Billy",
        lastName: "Crawford",
        age:35,
        contact: {
            phone: "123456789",
            email: "billycrawford@mail.com"
        },
        course: ["React", "Node", "Express"],
        department: "Finance"
    }
);

//Exercise:
/**
 Remove the status field of Bill Gates

 */

db.users.updateOne(
    {
        firstName: "Bill"
    },

    {
        $unset: {
            status: "active"
        }
    }
);

//DELETE
//syntax: db.collectionName.deleteOne({criteria})

//insert a document for deleteOne() operation
db.users.insertOne(
    {
        firstName: "Test",
        lastName: "Test",
        age: 0,
        contact: {
            phone: "00000000",
            email: "test@mail.com"
        },
        courses:[],
        department: "none"
    }
);

//delete a single document - safe side for database manipulation
db.users.deleteOne(
    {
        firstName: "Test"
    }
);

//delete multiple documents
db.users.deleteMany({department: "HR"});
//Trigger Warning: be careful to use deleteMany method. If no search criteria is provided, it will delete all documents in the database.

//How to add back deleted documents?
db.users.insertMany([
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "87654321",
            email: "janedoe@mail.com"
        },
        courses: ["CSS", "JavaScript", "Python"],
        department: "HR"
    },

    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
        courses: ["Python", "React", "PHP"],
        department: "HR"
    },

    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@mail.com"
        },
        courses: ["React", "Laravel", "SaSS"],
        department: "HR"
    }
]);

//Advance Queries
//- retrieve data with complex data structure 
// essential to ensure that we are able to retrieve any information that we would need in our application

//Query on nested fields/columns
db.users.find(
    {
        "contact.phone": "87654321"
    
    }
); //json script approach

//Query on an embedded document
db.users.find(
    {
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        }
    }
);

