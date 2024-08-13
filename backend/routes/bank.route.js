const express = require("express");
const router = express.Router();
const bankModel = require("../models/bank.model");

// Create bank
router.post("/addBank", async (req, res) => {
  try {
    const { formData } = req.body;

    const result = await bankModel.create({
      bankname: formData.step1.bankname,
    });
    if (result) {
      res.status(200).send({ result: true, message: "Bank Added Succesfully" });
    } else {
      res.status(500).send("internal server error: ");
    }
  } catch (error) {
    console.log("internal server error: " + error);
    res.status(500).send("internal server error: ");
  }
});

router.post("/updateBank", async (req, res) => {
  try {
    const { formData } = req.body;
    const { bankname, active } = formData.step1; // Destructure active status from step1

    const filter = { bankname: bankname };
    const update = { active: active == "active"? "Yes": "No" };

    const updatedBank = await bankModel.findOneAndUpdate(
      filter, // Where clause: find by bankname
      update, // Update only the active field
      { new: true } // Return the updated document
    );

    if (updatedBank) {
      res
        .status(200)
        .send({ result: true, message: "Bank Status Updated Succesfully" });
    } else {
      res.status(404).send({ result: false, message: "Bank Not Found" });
    }
  } catch (error) {
    console.error("Internal server error: " + error);
    res.status(500).send("Internal server error: ");
  }
});

router.get("/getBankList", async (req, res) => {
  try {
    const result = await bankModel.find();
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send("internal server error: ");
    }
  } catch (err) {
    console.log("error in /getBank : " + err);
    res.status(500).send({ message: "internal server error" });
  }
});

router.get("/getActiveBanks", async (req, res) => {
  try {
    // Leverage Mongoose query filtering
    const activeBanks = await bankModel.find({ active: "Yes" }); // Filter for "Yes"

    if (activeBanks) {
      res.status(200).json(activeBanks);
    } else {
      res.status(200).json({ message: "No active banks found." }); // Informative message
    }
  } catch (err) {
    console.error("Error in /getActiveBanks:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/matchBankDetails", async (req, res) => {
  const { param } = req.query; // Get parameter from query string

  if (!param) {
    res.status(200).send({ result: false, message: "Empty Input" });
  } else {
    const query = { ["bankname"]: param };

    try {
      const existingBankOption = await bankModel.findOne(query);

      if (existingBankOption) {
        return res.json({ result: false, message: "Bank already exist" });
      } else {
        return res.json({ result: true, message: "Bank Name Available" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
});

router.get("/searchBanks", async (req, res) => {
  const name = req.query.name; // Get name parameter from query string

  if (name && name.length >= 1) {
    try {
      const regex = new RegExp(`^${name}`, "i"); // Case-insensitive search with regex
      const banks = await bankModel
        .find({ bankname: { $regex: regex } })
        .limit(10); // Limit suggestions to 10
      if (banks.length === 0) {
        res.status(204).send(); // No content
      } else {
        const bankname = banks.map((bank) => bank.bankname);
        res.json(bankname);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res
      .status(400)
      .send({ result: false, message: "Empty Input or Invalid Input" });
  }
});

module.exports = router;
