db = db.getSiblingDB('admin');
db.createUser({
    user: "wrh_user",
    pwd: "9271d726a612749267d1926c8c4c7fc8",
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