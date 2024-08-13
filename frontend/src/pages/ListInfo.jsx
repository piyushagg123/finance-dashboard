import React from "react";
import { useParams } from "react-router-dom";
import DataTable from "../components/DataTable";

const ListInfo = () => {
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
    { name: "delete", label: "Delete" },
  ];
  const { id } = useParams();
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <button className="btn btn-sm btn-primary">Add Member</button>
      </div>
      <DataTable fields={fields} route={`group/getGroup/${id}`} />
    </div>
  );
};

export default ListInfo;
