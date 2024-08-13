import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import getBaseUrl from "../services/connectionString";
import SearchBox from "./SearchBox";
import Select from "react-select";
import DataTable from "./DataTable";

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

const TransanctionModal = ({ onSubmit }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [value, checkValue] = useState("");
  const [activeStatus, setActiveStatus] = useState(""); // Default state for radio button selection
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [bankList, setBankList] = useState([]);
  const [formData, setFormData] = useState({
    step1: {
      contactName: "",
      amount: "",
      bankname: "",
    },
  });

  const myButtonRef = React.createRef();

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(async () => await func(...args), delay);
    };
  };

  const checkExists = debounce(async (event) => {
    const { value } = event.target;
    try {
      const response = await axios.get(
        getBaseUrl() + `api/customer/matchExistingCustomers?&param=${value}`
      );
      if (response.data.result) {
        toast.info("Customers Exists");
        setFormSubmit(true);
        getBankList();

        handleChange(event);
      } else {
        toast.error("Customer Not Found");
        setFormSubmit(false);
      }
    } catch (error) {
      console.error("Error checking payment details:", error);
      return false; // Return false on error for conditional logic
    }
  }, 800);

  const validateStep1 = () => {
    const { contactName, amount, bankname } = formData.step1;
    const errorsStep1 = {};
    let isValid = true;

    if (!contactName.trim()) {
      errorsStep1.selectCustomerName = "Customer name is required";
      toast.error(`Customer Name is required`);
      isValid = false;
    }

    if (!amount.trim()) {
      errorsStep1.amount = "Amount is required";
      toast.error(`Amount is required`);
      isValid = false;
    }

    if (!bankname.trim()) {
      errorsStep1.bankname = "Bank Name is required";
      toast.error(`Bank Name is required`);
      isValid = false;
    }

    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [step, fieldName] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], [fieldName]: value },
    }));
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formSubmit) {
      if (validateStep1()) {
        console.log(formData);
        onSubmit(formData);
        myButtonRef.current.click();
      }
    } else {
      toast.info("Please fill All Details");
    }
  };

  const renderStep = () => {
    return (
      <>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="bankName" className="form-label">
                Select User Name
              </label>
              <SearchBox
                checkExists={checkExists}
                route={"customer/findcustomer"}
                name={"step1.contactName"}
              />
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="depositAmount" class="sr-only">
                Enter Amount
              </label>
              <input
                onChange={handleChange}
                name="step1.amount"
                type="text"
                class="form-control"
                id="depositAmount"
                placeholder="Enter Amount"
                value={formData.step1.amount}
              />
            </div>
            <div>
              <label htmlFor="banklist" className="form-label">
                Select bank name
              </label>
              <select
                className="w-100"
                id="banklist"
                name="step1.bankname"
                value={formData.step1.contactType}
                onChange={handleChange}
              >
                {bankList.map((val) => {
                  return (
                    <option key={val.label} value={val.value}>
                      {val.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </div>
      </>
    );
  };

  const getBankList = () => {
    axios
      .get(getBaseUrl() + "api/bank/getActiveBanks")
      .then((response) => {
        console.log("res");
        console.log(response);
        response.data.map((Elm) => {
          bankList.push({
            value: Elm.bankname,
            label: Elm.bankname,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(()=>{

  // },[])

  return (
    <>
      <div>
        {/* {openModal ? ( */}
        <div
          className={`modal fade`}
          id="depositModal"
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          style={{ zIndex: "99991" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deposit</h5>
              </div>
              <div
                className="modal-body"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {renderStep()}
              </div>
              <div className="modal-footer">
                {/* ... (footer content) */}
                <button
                  type="button"
                  className={`btn btn-primary`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  ref={myButtonRef}
                  data-bs-dismiss="modal"
                  style={{ display: "none" }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DataTable
        fields={fields}
        route={"customer/matchExistingCustomers"}
        // param={"BABY"}
      /> */}
    </>
  );
};

export default TransanctionModal;
