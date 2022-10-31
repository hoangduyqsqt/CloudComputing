var express = require('express');
var router = express.Router();
var display_product = require('../models/product_table');
var crud = require('../models/crud');
var session;

/* GET users listing. */
router.get('/', async function(req, res, next) {
    session = req.session;
    if (session.user_id) {
        let username = session.user_id;
        let shop_id = session.shop_id;
        let table = await display_product(shop_id, session);
        res.render('users', {
            title: 'ATN Shop',
            name: username,
            table_string: table
        })
    } else {
        res.redirect('/login');
    }
});

router.post("/crud", async(req, res, next) => {
    try {
        session = req.session;
        console.log(req.body);
        let results = await crud(req.body);

        // refresh the page
        let table = await display_products(req.body.shop_id);
        res.render("users", {
            title: "Welcome user to ATN shop",
            name: session.user_id,
            table_string: table,
        });
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;