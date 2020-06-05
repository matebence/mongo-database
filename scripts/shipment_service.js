db = db.getSiblingDB('admin');
db.createUser({
    user: "shp_user",
    pwd: "916d95a7b843b82eb928d0144fe83dfe",
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