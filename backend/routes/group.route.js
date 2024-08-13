const express = require("express");
const router = express.Router();
const Group = require("../models/group.model");

router.post("/addGroup", async (req, res) => {
  const { name, items, isProtected, password, description } = req.body;
  try {
    const result = await Group.create({
      name,
      items,
      isProtected,
      password,
      description,
    });
    if (result) {
      res
        .status(200)
        .send({ result: true, message: "group Added Succesfully" });
    }
  } catch (err) {
    console.log("error in /addCustomer : " + err);
    res.status(500).send({ result: false, message: "internal server error" });
  }
});

router.get("/getGroup", async (req, res) => {
  try {
    // Fetch all groups from the database
    const groups = await Group.find().populate("items");

    res.status(200).send(groups); // Respond with the fetched groups
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "An error occurred while fetching groups." });
  }
});

router.get("/getGroup/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findById(id).populate("items").select("items");

    res.status(200).send(group); // Respond with the fetched groups
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "An error occurred while fetching groups." });
  }
});

router.post("/addGroupItem/:groupId", async (req, res) => {
  const { groupId } = req.params;
  const { newItem } = req.body;
  try {
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }
    // Add the new item to the group's items array
    group.items.push(newItem);
    const savedGroup = await group.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    console.error("Error adding item to group:", error);
    res.status(500).json({ error: "An error occurred while adding the item." });
  }
});

// Route to delete an item from a group
router.delete("/deleteGroupItem/:groupId/:itemId", async (req, res) => {
  const { groupId, itemId } = req.params;
  try {
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }
    // Remove the item from the group's items array
    group.items.pull(itemId);
    const savedGroup = await group.save();
    res.status(200).json(savedGroup);
  } catch (error) {
    console.error("Error deleting item from group:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the item." });
  }
});

module.exports = router;
