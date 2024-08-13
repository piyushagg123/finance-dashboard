import React from "react";
import DataTable from "../components/DataTable";

const Payroll = () => {
  const fields = [
    { name: "contactName", label: "Contact Name" },
    { name: "phoneNumber", label: "Phone Number" },
    { name: "contactType", label: "Contact Type" },
    {
      name: "paymentDetails.walletDetails.walletPhoneNo",
      label: "Wallet Phone No",
    },
    {
      name: "paymentDetails.bankDetails.accountHolder",
      label: "Account Holder Name",
    },
    { name: "paymentDetails.bankDetails.bankAic", label: "Bank Account No" },
    { name: "paymentDetails.bankDetails.ifsc", label: "IFSC Code" },
    { name: "paymentDetails.upiDetails", label: "UPI ID" },
    { name: "customerBalance", label: "Customer Balance" },
  ];

  return (
    <>
      <DataTable fields={fields} route={"customer/getStaffList"} />
    </>
  );
};

export default Payroll;
