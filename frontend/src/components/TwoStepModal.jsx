import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import getBaseUrl from "../services/connectionString";

const TwoStepModal = ({ onSubmit }) => {
  const [activeTab, setActiveTab] = useState("upi");
  const [formSubmit, setFormSubmit] = useState(false);
  const myButtonRef = React.createRef();

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(async () => await func(...args), delay);
    };
  };

  const checkExists = debounce(async (type, event) => {
    const { value } = event.target;
    try {
      const response = await axios.get(getBaseUrl() + `api/customer/matchPaymentDetails?type=${type}&param=${value}`);
      if (response.data.result) {
        toast.info(response.data.message)
        setFormSubmit(true)
        handleChange(event);

      } else {
        toast.error(response.data.message)
        setFormSubmit(false)
      }
    } catch (error) {
      console.error('Error checking payment details:', error);
      return false; // Return false on error for conditional logic
    }
  }, 800);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {
      contactName: "",
      phoneNumber: "",
      emailAddress: "",
      contactType: "Client",
      referenceID: "",
      additionalNotes: "",
      balanceOption: "gave",
      customerBalance: 0
    },
    step2: {
      amzPhone: "",
      upiId: "",
      bankAic: "",
      ifsc: "",
      accountHolder: "",
      salary: "",
    },
  });

  const [errors, setErrors] = useState({
    step1: {},
    step2: {},
  });

  const validateStep1 = () => {
    const { contactName, phoneNumber } = formData.step1;
    const errorsStep1 = {};
    let isValid = true;

    // if (!contactName || !phoneNumber) {
    //     errorsStep1.contactName = 'Fill all the Required fields';
    //     toast.error(`Fill all the Required fields`);
    //     isValid = false;
    // }

    if (!contactName.trim()) {
      errorsStep1.contactName = "Party Name is required";
      toast.error(`Party Name is required`);
      isValid = false;
    }

    const phoneRegex = new RegExp(/^[0-9\b]+$/);
    if (phoneNumber === "") {
      toast.error(`Phone number is required!`);
      isValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      toast.error(`Invalid Number`);
      isValid = false;
    } else if (phoneNumber.length !== 10) {
      toast.error(`Please enter 10 digits mobile number`);
      isValid = false;
    } else {
      isValid = true;
    }
    setErrors((prevErrors) => ({ ...prevErrors, step1: errorsStep1 }));

    return isValid;
  };

  const validateStep2 = () => {
    const { upiId, amzPhone, bankAic, ifsc, accountHolder } = formData.step2;
    const errorsStep2 = {};
    let isValidUpi = true;
    let isValidBank = true;
    let isValidPhone = true;

    if (!upiId.trim()) {
      errorsStep2.upiId = "UPI ID is required";
      //toast.error(`UPI ID is required`);
      isValidUpi = false;
    }

    const phoneRegex = new RegExp(/^[0-9\b]+$/);
    if (amzPhone === "") {
      //toast.error(`Phone number is required!`);
      isValidPhone = false;
    } else if (!phoneRegex.test(amzPhone)) {
      //toast.error(`Invalid Number`);
      isValidPhone = false;
    } else if (amzPhone.length !== 10) {
      //toast.error(`Please enter 10 digits mobile number`);
      isValidPhone = false;
    } else {
      isValidPhone = true;
    }

    if (!accountHolder.trim()) {
      errorsStep2.accountHolder = "Account Holder Name is required";
      //toast.error(`Account Holder Name is required`);
      isValidBank = false;
    }
    if (!bankAic.trim()) {
      errorsStep2.upiId = "Account Number is required";
      //toast.error(`Account Number is required`);
      isValidBank = false;
    }
    if (!ifsc.trim()) {
      errorsStep2.ifsc = "IFSC Code is required";
      //toast.error(`IFSC Code is required`);
      isValidBank = false;
    }

    setErrors((prevErrors) => ({ ...prevErrors, step2: errorsStep2 }));

    if (isValidUpi || isValidBank || isValidPhone) {
      //setFormSubmit(true)
      return true
    } else {
      toast.error(`Enter Atleast one Payment Details`);
      //setFormSubmit(false)
      return false

    }
    //return isValid;
  };

  const options = [
    { value: "Client", label: "Client" },
    { value: "Staff", label: "Staff" },
    { value: "Vendor", label: "Vendor" },
  ];

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    setActiveTab("upi");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [step, fieldName] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], [fieldName]: value },
    }));
  };

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;
    console.log(name, value )
    const [step, fieldName] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], [fieldName]: value },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formSubmit) {
      if (validateStep2()) {
        onSubmit(formData);
        myButtonRef.current.click();
        //   setOpenModal(false);
        // After Submitted the Modals add other functionality
        // setCurrentStep(1);
      }
    } else {
      toast.info("Please fill correct Details")
    }

  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label">
                    Party Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    placeholder="Enter Party Name"
                    name="step1.contactName"
                    value={formData.step1.contactName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <div className="modal_btn_number">
                    <button>+91</button>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      name="step1.phoneNumber"
                      value={formData.step1.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="contactType" className="form-label">
                    Account Type
                  </label>
                  <div className="modal_btn_amount">
                    <select
                      className="w-100"
                      id="contactType"
                      name="step1.contactType"
                      value={formData.step1.contactType}
                      onChange={handleChangeSelect}
                    >
                      {options.map((val) => {
                        return (
                          <option key={val.label} value={val.value}>
                            {val.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Opening Balance{" "}
                    <span className="text-danger">(Optional)</span>
                  </label>
                  <div className="modal_btn_amount">
                    <button>₹</button>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="step1.customerBalance" 
                      placeholder="Enter Amount"
                      value={formData.step1.customerBalance}
                      onChange={handleChange}
                    />
                    <select 
                    className="text-danger" 
                    name="step1.balanceOption" 
                    onChange={handleChangeSelect}
                    value={formData.step1.balanceOption}
                    >
                      <option value="got">You Got</option>
                      <option value="gave">You Gave</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="account-type" className="form-label">
                    Account Type
                  </label>
                  <nav className="nav nav-pills nav-justified">
                    <a
                      className={`nav-link ${activeTab === "upi" ? "active" : ""
                        }`}
                      aria-current="page"
                      role="button"
                      onClick={() => handleTabClick("upi")}
                    >
                      UPI ID
                    </a>
                    <a
                      className={`nav-link ${activeTab === "bank" ? "active" : ""
                        }`}
                      role="button"
                      onClick={() => handleTabClick("bank")}
                    >
                      Bank A/C
                    </a>
                    <a
                      className={`nav-link ${activeTab === "wallet" ? "active" : ""
                        }`}
                      role="button"
                      onClick={() => handleTabClick("wallet")}
                    >
                      Wallet
                    </a>
                    {formData.step1.contactType === "Staff" ? (
                      <a
                        className={`nav-link ${activeTab === "salary" ? "active" : ""
                          }`}
                        role="button"
                        onClick={() => handleTabClick("salary")}
                      >
                        Salary
                      </a>) : null
                    }
                  </nav>
                </div>

                {activeTab === "upi" && (
                  <div className="mb-3">
                    <label htmlFor="upiId" className="form-label">
                      Enter UPI
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="step2.upiId"
                      id="upiId"
                      placeholder="Enter UPI ID"
                      onChange={(e) => {
                        checkExists(1, e);
                      }}
                    />
                  </div>
                )}

                {activeTab === "wallet" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="number" className="form-label">
                        Wallet Type
                      </label>
                      <div className="modal_btn_number">
                        <select
                          className="text-danger w-100 form-select"
                          aria-label="Default select example"
                        >
                          <option value="amazon" selected>
                            Amazon Pay
                          </option>
                          <option value="gpay">Google Pay</option>
                          <option value="paytm">Paytm</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="amzPhone" className="form-label">
                        Phone
                      </label>
                      <div className="modal_btn_amount">
                        <button>+91</button>
                        <input
                          type="text"
                          className="form-control"
                          id="amzPhone"
                          placeholder="Enter Mobile Number"
                          name="step2.amzPhone"
                          //value={formData.step2.amzPhone}
                          onChange={(e) => {
                            checkExists(2, e);
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "bank" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="accountHolder" className="form-label">
                        Account Holder Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="accountHolder"
                        placeholder="Enter Account Holder Name"
                        name="step2.accountHolder"
                        value={formData.step2.accountHolder}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="bankAic" className="form-label">
                        Account Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bankAic"
                        placeholder="Enter Account Number"
                        name="step2.bankAic"
                        //value={formData.step2.bankAic}
                        onChange={(e) => {
                          checkExists(3, e);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="ifsc" className="form-label">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ifsc"
                        placeholder="Enter IFSC Code"
                        name="step2.ifsc"
                        value={formData.step2.ifsc}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

                {activeTab === "salary" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="salary" className="form-label">
                        Enter Staff Details
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="step2.salary"
                        id="salary"
                        placeholder="Enter Staff Salary"
                        value={formData.step2.salary}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="staffDetails" className="form-label">
                        Staff Shift
                      </label>
                      <div className="modal_btn_number">
                        <select
                          className="text-danger w-100 form-select"
                          aria-label="Default select example"
                        >
                          <option value="day" selected>Day</option>
                          <option value="night">Night</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* {openModal ? ( */}
      <div
        className={`modal fade`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ zIndex: "99991" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {currentStep === 1
                  ? "Adding Personal Details"
                  : "Adding Fund Account"}
              </h5>
            </div>
            <div
              className="modal-body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {renderStep()}
            </div>
            <div className="modal-footer">
              {/* ... (footer content) */}
              {currentStep === 2 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              <button
                type="button"

                className={`btn btn-${currentStep === 2 ? "primary" : "secondary"
                  }`}
                onClick={currentStep === 2 ? handleSubmit : handleNext}
              >

                {currentStep === 2 ? "Submit" : "Next"}
              </button>
              <button
                type="button"
                ref={myButtonRef}
                data-bs-dismiss="modal"
                style={{ display: 'none' }}
              >
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default TwoStepModal;
