import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import TransanctionModal from "../components/TransanctionModal";
import axios from "axios";
import getBaseUrl from "../services/connectionString";
import { toast } from "react-toastify";

const Receivable = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const fields = [
      { name: "contactName", label: "Contact Name" },
      { name: "debitTransactions.date", label: "Date" },
      { name: "debitTransactions.time", label: "Time" },
      { name: "debitTransactions.bankname", label: "Bank" },
      { name: "debitTransactions.amount", label: "Amount" },
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
          getBaseUrl() + "api/customer/withdrawAmount",
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
            <div>WithDraw</div>
          </button>
        </div>
  
        <TransanctionModal onSubmit={handleSubmit} />
        <DataTable fields={fields} route={"customer/getUserDebitDetails"} reload={isSubmitted}/>
      </>
    );
  };

export default Receivable