const express = require("express")
const router = express.Router();
const Item = require("../models/item.model");
router.get("/getitems", async (req, res) => {
    const item = await Item.find({});
    res.send(item);

});
router.post("/addNewItem", async function (req, res) {
    const item = new Item(req.body);
    const response = await item.save()
    res.send(response)
})
module.exports = router