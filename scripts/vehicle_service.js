db = db.getSiblingDB('admin');
db.createUser({
    user: "vhe_user",
    pwd: "87ccc6bc5dcf2ce04614130fcdf06a03",
    roles: [{
            role: "readWriteAnyDatabase",
            db: "admin"
        },
        {
            "role": "dbAdminAnyDatabase",
            "db": "admin"
        },
        {
            "role": "clusterAdmin",
            "db": "admin"
        },
        "userAdminAnyDatabase"
    ]
})