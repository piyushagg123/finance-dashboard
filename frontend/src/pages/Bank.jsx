import React, { useState } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";
import AddBankModal from "../components/AddBankModal";
import getBaseUrl from "../services/connectionString";
import { toast } from "react-toastify";
import EditBankModal from "../components/EditBankModal";

const Bank = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fields = [
    { name: "bankname", label: "Bank Name" },
    { name: "active", label: "Active Status" },
  ];

  const handleSubmit = (formData) => {
    console.log(formData);
    // Handle form submission logic here
    axios.defaults.withCredentials = true;
    axios
      .post(
        getBaseUrl() + "api/bank/addBank",
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

  const handleUpdate = (formData) => {
    console.log(formData);
    // Handle form submission logic here
    axios.defaults.withCredentials = true;
    axios
      .post(
        getBaseUrl() + "api/bank/updateBank",
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
          data-bs-target="#bankModal"
          tabIndex="0"
        >
          <div>Add Bank</div>
        </button>
        <button
          className="supplier_btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          tabIndex="0"
        >
          <div>Edit Bank</div>
        </button>
      </div>

      <AddBankModal onSubmit={handleSubmit} />
      <EditBankModal onSubmit={handleUpdate} />
      <DataTable
        fields={fields}
        route={"bank/getBankList"}
        reload={isSubmitted}
      />
    </>
  );
};

export default Bank;
