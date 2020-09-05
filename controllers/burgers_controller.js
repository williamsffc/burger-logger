var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.get("/api/burgers", function (req, res) {
//     burger.all(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.json({id: result.insertId});
//     });
// });

router.post("/api/burgers", function (req, res) {
    burger.create(
        [
            "burger_name"
        ], 
        [
            req.body.burger
        ],
        function (result) {
            // res.json({id: result.insertId});
            res.redirect("/");
        });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// router.put("/api/burger/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update(
//         {
//             sleepy: req.body.sleepy
//         },
//         condition,
//         function (result) {
//             if (result.changedRows === 0) {
//                 // If no rows were changed, then the ID must not exist, so 404
//                 return res.status(404).end();
//             }
//             res.status(200).end();

//         }
//     );
// });

// Export routes for server.js to use.
module.exports = router;