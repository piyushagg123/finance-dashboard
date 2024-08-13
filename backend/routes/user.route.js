const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const Cookies = require("js-cookie");

// Create user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.query;
    console.log(email, password);
    const newUserData = await userModel.create({
      name: name,
      email: email,
      password: password,
    });
    res.send("email");
  } catch (error) {
    console.log("internal server error: " + error);
    res.status(500).send("internal server error: ");
  }
});

router.post("/login", async (req, res) => {
  try {
    let { loginNumber, otp } = req.body;

    if (otp == "123456") {
      const user = await userModel.findOneAndUpdate(
        { phoneNumber: loginNumber },
        {}, // Omit update document (no update if exists)
        { upsert: true, returnNewDocument: true } // Insert if not found, return the new document
      );
      if (user) {
        //console.log(user)
        const token = jwt.sign({ loginNumber }, "mysecretkey", {
          expiresIn: "1h",
        });
        res.cookie("authentication_token", token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: 'None',
        });
        res
          .status(200)
          .send({ result: true, message: "Logged in successfully" });
      } else {
        res;
        const token = jwt.sign({ loginNumber }, "mysecretkey", {
          expiresIn: "1h",
        });
        res.cookie("authentication_token", token, {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: 'None',
        });
        res.status(200).send({
          result: true,
          message: "Registered and Logged in successfully",
        });
      }
    } else {
      res
        .status(200)
        .send({ result: false, message: "Incorrect OTP, Please try again." });
    }
  } catch (err) {
    console.log("err in userLogin", err);
  }
});

router.post("/customer", (req, res) => {
  console.log(req.body);
  console.log("res");
  res.send("workinbg");
});

router.get("/verifyToken", (req, res) => {
  const token = req.cookies["authentication_token"];

  // console.log(token);
  // console.log(req.cookies);
  if (token) {
    jwt.verify(token, "mysecretkey", (err, decoded) => {
      if (err) {
        console.log("err", err);
        res.status(500).send({ result: false, message: "invalid token" });
      } else {
        res
          .status(200)
          .send({ result: true, message: "logged in successfully", data: decoded.loginNumber });
      }
    });
  } else {
    console.log("else");
    res.status(400).send({ result: false, message: "invalid token" });
  }
});

module.exports = router;
