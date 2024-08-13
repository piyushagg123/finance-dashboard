import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import TransanctionModal from "../components/TransanctionModal";
import axios from "axios";
import getBaseUrl from "../services/connectionString";
import { toast } from "react-toastify";

const Payable = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fields = [
    { name: "contactName", label: "Contact Name" },
    { name: "creditTransactions.date", label: "Date" },
    { name: "creditTransactions.time", label: "Time" },
    { name: "creditTransactions.bankname", label: "Bank" },
    { name: "creditTransactions.amount", label: "Amount" },
  ];

  // const fields = [
  //   { name: "bankname", label: "Bank Name" },
  //   { name: "active", label: "Active Status" },
  // ];

  const handleSubmit = (formData) => {
    console.log(formData);
    // Handle form submission logic here
    axios.defaults.withCredentials = true;
    axios
      .post(
        getBaseUrl() + "api/customer/addAmount",
        { formData: formData },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.result) {
          toast.success(response.data.message);
          setIsSubmitted(!isSubmitted);
        } else {
          toast.error(response.data.message);
        }
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <div>
        <button
          className="supplier_btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#depositModal"
          tabIndex="0"
        >
          <div>Deposit</div>
        </button>
      </div>

      <TransanctionModal onSubmit={handleSubmit} />
      <DataTable fields={fields} route={"customer/getUserCreditDetails"} reload={isSubmitted}/>
    </>
  );
};

export default Payable;
