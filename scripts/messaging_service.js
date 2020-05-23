db = db.getSiblingDB('admin');
db.createUser({
    user: "msg_user",
    pwd: "5396ffd132678e2213ddb83c6bde40f6",
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