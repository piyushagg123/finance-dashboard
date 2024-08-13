const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    contactName: {
      type: String,
      // required: true,
    },
    contactType: {
      type: String,
      // required: true,
    },
    phoneNumber: {
      type: String,
      // required: true,
    },
    emailAddress: {
      type: String,
      // required: true,
    },

    // Optional Fields
    referenceID: {
      type: String,
    },

    additionalNotes: {
      type: String,
    },

    //payment details
    paymentDetails: {
      upiDetails: { type: String },

      walletDetails: {
        walletType: {
          type: String,
        },

        walletPhoneNo: {
          type: String,
        },
      },

      bankDetails: {
        accountHolder: {
          type: String,
        },

        bankAic: {
          type: String,
        },

        ifsc: {
          type: String,
        },
      },
    },
    customerBalance: {
      type: Number,
      default: 0,
    },
    transactions: {
      credit: [],
      debit: [],
    },
    // transactions: {
    //   credit: [{datetime:"", amount:"3500"},{datetime:"", amount:"3500"},],
    //   debit: [{datetime:"", amount:"-5500"},{datetime:"", amount:"-500"},],
    // },
    salaryAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const customerModel = mongoose.model("Customers", customerSchema);

module.exports = customerModel;
