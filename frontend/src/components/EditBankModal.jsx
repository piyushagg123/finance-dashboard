import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import getBaseUrl from "../services/connectionString";
import SearchBox from "./SearchBox";

const EditBankModal = ({ onSubmit }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [value, checkValue] = useState("");
  const [activeStatus, setActiveStatus] = useState(""); // Default state for radio button selection

  const handleRadioChange = (event) => {
    handleChange(event);
    setActiveStatus(event.target.value);
  };
  const myButtonRef = React.createRef();

  const [formData, setFormData] = useState({
    step1: {
      bankname: "",
      active: "",
    },
  });

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
        getBaseUrl() + `api/bank/matchBankDetails?&param=${value}`
      );
      if (response.data.result) {
        toast.error("Bank does not exists");
        setFormSubmit(false);
      } else {
        setFormSubmit(true);
        handleChange(event);
      }
    } catch (error) {
      console.error("Error checking payment details:", error);
      return false; // Return false on error for conditional logic
    }
  }, 800);

  const validateStep1 = () => {
    const { bankname, active } = formData.step1;
    const errorsStep1 = {};
    let isValid = true;

    if (!bankname.trim()) {
      errorsStep1.contactName = "Bank Name is required";
      toast.error(`Bank Name is required`);
      isValid = false;
    }

    if (!active.trim()) {
      errorsStep1.contactName = "Active Status is required";
      toast.error(`Active Status is required`);
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
      toast.info("Please fill correct Details");
    }
  };

  const renderStep = () => {
    return (
      <>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="bankName" className="form-label">
                Bank Name
              </label>
              <SearchBox
                checkExists={checkExists}
                route={"bank/searchBanks"}
                name={"step1.bankname"}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="activeStatus" className="form-label">
                Active Status
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="activeRadio"
                  value="active"
                  name="step1.active"
                  checked={activeStatus === "active"}
                  onChange={handleRadioChange}
                  style={{ marginLeft: "5px" }}
                />
                <label className="form-check-label" htmlFor="activeRadio">
                  Active
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="inactiveRadio"
                  value="inactive"
                  name="step1.active"
                  checked={activeStatus === "inactive"}
                  onChange={handleRadioChange}
                  style={{ marginLeft: "5px" }}
                />
                <label className="form-check-label" htmlFor="inactiveRadio">
                  Inactive
                </label>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <div>
      {/* {openModal ? ( */}
      <div
        className={`modal fade`}
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        style={{ zIndex: "99991" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Adding Bank Details</h5>
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
  );
};

export default EditBankModal;
