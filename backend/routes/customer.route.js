const express = require("express");
const router = express.Router();
const customerModel = require("../models/customer.model");

router.post("/addCustomer", async (req, res) => {
  const { formData } = req.body;
  try {
    const result = await customerModel.create({
      contactName: formData.step1.contactName,
      contactType: formData.step1.contactType,
      phoneNumber: formData.step1.phoneNumber,
      emailAddress: formData.step1.emailAddress,
      referenceID: formData.step1.referenceID,
      additionalNotes: formData.step1.additionalNotes,
      paymentDetails: {
        upiDetails: formData.step2.upiId,
        walletDetails: {
          walletType: formData.step2.walletType,
          walletPhoneNo: formData.step2.amzPhone,
        },
        bankDetails: {
          accountHolder: formData.step2.accountHolder,
          bankAic: formData.step2.bankAic,
          ifsc: formData.step2.ifsc,
        },
      },
      customerBalance: formData.step1.balanceOption === "gave" ? -formData.step1.customerBalance : formData.step1.customerBalance,
      salaryAmount: formData.step1.contactType === "Staff" ? formData.step2.salary : 0,
    });
    if (result) {
      res.status(200).send({ result: true, message: "User Added Succesfully" });
    }
  } catch (err) {
    console.log("error in /addCustomer : " + err);
    res.status(500).send({ result: false, message: "internal server error" });
  }
  //   res.send("ok");
});

//add amount
router.post("/addAmount", async (req, res) => {
  try {
    const { formData } = req.body;
    if (formData.step1.contactName && formData.step1.amount) {
      // Find the customer by username
      // const customer = await customerModel.findOne ({ contactName: username });
      const customer = await customerModel.findOneAndUpdate(
        { contactName: formData.step1.contactName },
        { $inc: { customerBalance: parseFloat(formData.step1.amount) } }, // Increment the customerBalance field
        { new: true } // Return the updated document
      );

      if (!customer) {
        return res
          .status(404)
          .json({ result: false, message: "Customer not found" });
      }

      // Get current date and time
      const currentDate = new Date();
      const dateTime = currentDate.toISOString();

      // Update the transactions credit array with datetime and amount
      customer.transactions.credit.push({
        datetime: dateTime,
        amount: parseFloat(formData.step1.amount),
        bankname: formData.step1.bankname
      });

      // Update the customer document in the database
      await customer.save();

      res.status(200).json({
        result: true,
        message: "Amount added successfully",
      });
    } else {
      res
        .status(400)
        .json({ result: false, message: "Username and amount are required" });
    }
  } catch (err) {
    console.log("Error in /addAmount:", err);
    res.status(500).json({ result: false, message: "Internal server error" });
  }
});

//withdraw amount
router.post("/withdrawAmount", async (req, res) => {
  try {
    const { formData } = req.body;
    if (formData.step1.contactName && formData.step1.amount) {
      const customer = await customerModel.findOneAndUpdate(
        { contactName: formData.step1.contactName },
        { $inc: { customerBalance: -parseFloat(formData.step1.amount) } }, // Increment the customerBalance field
        { new: true } // Return the updated document
      );

      if (!customer) {
        return res
          .status(404)
          .json({ result: false, message: "Customer not found" });
      }

      // Get current date and time
      const currentDate = new Date();
      const dateTime = currentDate.toISOString();

      // Update the transactions credit array with datetime and amount
      customer.transactions.debit.push({
        datetime: dateTime,
        amount: -parseFloat(formData.step1.amount),
        bankname: formData.step1.bankname
      });

      // Update the customer document in the database
      await customer.save();

      res.status(200).json({
        result: true,
        message: "Withdrawal Amount added successfully",
      });
    } else {
      res
        .status(400)
        .json({ result: false, message: "Username and amount are required" });
    }
  } catch (err) {
    console.log("Error in /withdrawAmount:", err);
    res.status(500).json({ result: false, message: "Internal server error" });
  }
});

//get user credit detials
router.get("/getUserCreditDetails", async (req, res) => {
  try {
    // Leverage aggregation framework for efficient filtering
    const customersWithCredits = await customerModel.aggregate([
      {
        $match: { "transactions.credit": { $exists: true } } // Find documents with non-empty "debit" array
      },
      {
        $unwind: "$transactions.credit" // Deconstruct each "debit" element into separate documents
      },
      {
        $project: {
          _id: 0, // Exclude _id for privacy or as needed
          contactName: 1, // Include contactName for identification
          creditTransactions: "$transactions.credit" // Project only the "credit" array (optional)
        }
      }
    ]);

    // Format dates after aggregation
    const formattedCustomers = customersWithCredits.map(customer => {
      // Assuming there's a date field within "debitTransaction" (replace with actual field name)
      const creditDate = customer.creditTransactions.datetime; // Access the date field

      if (creditDate) {
        const formattedDate = new Date(creditDate).toLocaleDateString('en-IN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });

        customer.creditTransactions.date = formattedDate; // Replace with actual field name for date
        // Extract and format time
        const time = new Date(creditDate).toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        customer.creditTransactions.time = time;
      }
      return customer;
    });

    res.status(200).send(formattedCustomers);
    // res.status(200).json({ result: true, message: "Customers with debit transactions found.", data: customersWithDebits });
  } catch (err) {
    console.error("Error in /getUserDebitDetails:", err.message);
    res.status(500).json({ result: false, message: "Internal server error" });
  }
});

//get user debit detials
router.get("/getUserDebitDetails", async (req, res) => {
  try {
    // Leverage aggregation framework for efficient filtering
    const customersWithDebits = await customerModel.aggregate([
      {
        $match: { "transactions.debit": { $exists: true } } // Find documents with non-empty "debit" array
      },
      {
        $unwind: "$transactions.debit" // Deconstruct each "debit" element into separate documents
      },
      {
        $project: {
          _id: 0, // Exclude _id for privacy or as needed
          contactName: 1, // Include contactName for identification
          debitTransactions: "$transactions.debit" // Project only the "debit" array (optional)
        }
      }
    ]);

    // Format dates after aggregation
    const formattedCustomers = customersWithDebits.map(customer => {
      // Assuming there's a date field within "debitTransaction" (replace with actual field name)
      const debitDate = customer.debitTransactions.datetime; // Access the date field

      if (debitDate) {
        const formattedDate = new Date(debitDate).toLocaleDateString('en-IN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });

        customer.debitTransactions.date = formattedDate; // Replace with actual field name for date
        // Extract and format time
        const time = new Date(debitDate).toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        customer.debitTransactions.time = time;
      }
      return customer;
    });

    res.status(200).send(formattedCustomers);
    // res.status(200).json({ result: true, message: "Customers with debit transactions found.", data: customersWithDebits });
  } catch (err) {
    console.error("Error in /getUserDebitDetails:", err.message);
    res.status(500).json({ result: false, message: "Internal server error" });
  }
});

router.post("/addMultipleCustomers", async (req, res) => {
  const { formData } = req.body;
  try {
    console.log(formData[0]);
    let result;
    for (let i = 0; i < formData.length; i++) {
      result = await customerModel.create({
        contactName: formData[i].PartyName,
        contactType: formData[i].AccountType,
        phoneNumber: formData[i].PhoneNumber,
        // emailAddress: formData[i].step1.emailAddress,
        // referenceID: formData[i].step1.referenceID,
        // additionalNotes: formData[i].step1.additionalNotes,
        paymentDetails: {
          upiDetails: formData[i].upiID,
          walletDetails: {
            walletType: formData[i].WalletType,
            walletPhoneNo: formData[i].WalletPhoneNumber,
          },
          bankDetails: {
            accountHolder: formData[i].BankAccountName,
            bankAic: formData[i].AccountNumber,
            ifsc: formData[i].ifscCode,
          },
        },
        customerBalance: formData[i].OpeningBalance ? formData[i].GaveGot === "gave" ? -formData[i].OpeningBalance : formData[i].OpeningBalance : 0,
        salaryAmount: formData[i].Salary ? formData[i].Salary : 0,

      });
    }
    console.log(result);
    res.status(200).send({ result: true, message: "ok" });
  } catch (err) {
    console.log("error in /addCustomer : " + err);
    res.status(500).send({ result: false, message: "internal server error" });
  }
  //   res.send("ok");
});

router.get("/getCustomers", async (req, res) => {
  try {
    const result = await customerModel.find();
    res.status(200).send(result);
  } catch (err) {
    console.log("error in /getCustomers : " + err);
    res.status(500).send({ message: "internal server error" });
  }
});

router.get("/getVendorList", async (req, res) => {
  try {
    const result = await customerModel.find({ contactType: "Vendor" });
    res.status(200).send(result);
  } catch (err) {
    console.log("error in /getVendorList : " + err);
    res.status(500).send({ message: "internal server error" });
  }
});

router.get("/getStaffList", async (req, res) => {
  try {
    const result = await customerModel.find({ contactType: "Staff" });
    res.status(200).send(result);
  } catch (err) {
    console.log("error in /getVendorList : " + err);
    res.status(500).send({ message: "internal server error" });
  }
});

router.get("/getClientList", async (req, res) => {
  try {
    const result = await customerModel.find({ contactType: "Client" });
    res.status(200).send(result);
  } catch (err) {
    console.log("error in /getVendorList : " + err);
    res.status(500).send({ message: "internal server error" });
  }
});

router.get("/searchCustomers", async (req, res) => {
  const name = req.query.name; // Get name parameter from query string
  try {
    const regex = new RegExp(`^${name}`, "i"); // Case-insensitive search with regex
    const customers = await customerModel
      .find({ contactName: { $regex: regex } })
      .limit(10); // Limit suggestions to 10
    if (customers.length <= 1) {
      res.status(204).send();
    } else {
      res.json(customers.map((customer) => customer.contactName));
    }
    //res.json(customers.map((customer) => customer.contactName)); // Send only contact names for autocomplete
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/matchPaymentDetails", async (req, res) => {
  const { type, param } = req.query; // Get parameter from query string

  if (!type || !param) {
    return res
      .status(400)
      .json({ message: "Missing required parameters: type and param" });
  }

  let paymentType;
  switch (type) {
    case "1":
      paymentType = "paymentDetails.upiDetails";
      break;
    case "2":
      paymentType = "paymentDetails.walletDetails.walletPhoneNo"; // Search by phone number
      break;
    case "3":
      paymentType = "paymentDetails.bankDetails.bankAic"; // Search by IFSC code
      break;
    default:
      return res
        .status(400)
        .json({ result: false, message: "Invalid payment type" });
  }

  const query = { [paymentType]: param };

  try {
    const existingPaymentOption = await customerModel.findOne(query);

    if (existingPaymentOption) {
      switch (type) {
        case "1":
          return res.json({ result: false, message: "UPI ID already exist" });
        case "2":
          return res.json({
            result: false,
            message: "Wallet Number already exist",
          });
        case "3":
          return res.json({
            result: false,
            message: "Bank A/C Number already exist",
          });
      }
    } else {
      switch (type) {
        case "1":
          return res.json({ result: true, message: "UPI ID Available" });
        case "2":
          return res.json({ result: true, message: "Wallet Number Available" });
        case "3":
          return res.json({
            result: true,
            message: "Bank A/C Number Available",
          });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//to check this is users exist or not
router.get("/matchExistingCustomers", async (req, res) => {
  const { param, depositAmount, withdrawlAmount } = req.query; // Get parameter from query string
  if (!param) {
    res.status(200).send({ result: false, message: "Empty Input" });
  } else {
    const query = { ["contactName"]: param };
    try {
      const existingCustomerOption = await customerModel.findOne(query);

      if (existingCustomerOption) {
        return res.json({
          result: true,
          message: "Customer name exists",
          data: existingCustomerOption,
        });
      } else {
        return res.json({
          result: false,
          message: "Customer Does Not Exist Kindly Add",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
})

//find customers similar to bank route
router.get("/findcustomer", async (req, res) => {
  const name = req.query.name; // Get name parameter from query string

  if (name && name.length >= 1) {
    try {
      const regex = new RegExp(`^${name}`, "i"); // Case-insensitive search with regex
      const customers = await customerModel
        .find({ contactName: { $regex: regex } })
        .limit(10); // Limit suggestions to 10
      if (customers.length === 0) {
        res.status(204).send(); // No content
      } else {
        const contactNames = customers.map((customer) => customer.contactName);
        res.json(contactNames);
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

// Route to get customers with balance less than 0
router.get("/negative-balance", async (req, res) => {
  try {
    const projection = {
      _id: 0,
      contactName: 1,
      phoneNumber: 1,
      contactType: 1,
      customerBalance: 1,
    };

    const negativeBalanceCustomers = await customerModel.find(
      { customerBalance: { $lt: 0 } },
      projection
    ); // Find with balance less than 0

    res.json(negativeBalanceCustomers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Error fetching customers" });
  }
});

// Route to get customers with balance greater than 0
router.get("/positive-balance", async (req, res) => {
  try {
    const projection = {
      _id: 0,
      contactName: 1,
      phoneNumber: 1,
      contactType: 1,
      customerBalance: 1,
    };

    const positiveBalanceCustomers = await customerModel.find(
      { customerBalance: { $gt: 0 } },
      projection
    ); // Find with balance greater than 0
    res.json(positiveBalanceCustomers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Error fetching customers" });
  }
});

//temporary delete users route made for to dele customers with invaid transactions
router.get("/deleteCustomer", async (req, res) => {
  try {
    const result = await customerModel.findOneAndDelete({
      contactName: req.query.username,
    });
    if (result)
      res.status(200).json({
        message: "users deleted successfully",
        result: result,
        data: result,
      });
    else {
      res.status(200).json({
        result: result,
        message: "user not found",
        data: result,
      });
    }
  } catch (err) {
    console.log("error in /deleteCustomer : " + err);
    res.status(500).json({ result: false, message: "internal server error" });
  }
});

module.exports = router;
