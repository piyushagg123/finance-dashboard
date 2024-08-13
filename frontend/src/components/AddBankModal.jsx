import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import getBaseUrl from "../services/connectionString";

const AddBankModal = ({ onSubmit }) => {
    const [formSubmit, setFormSubmit] = useState(false);
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
            const response = await axios.get(getBaseUrl() + `api/bank/matchBankDetails?&param=${value}`);
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

    const [formData, setFormData] = useState({
        step1: {
            bankname: ""
        }
    });

    const validateStep1 = () => {
        const { bankname } = formData.step1;
        const errorsStep1 = {};
        let isValid = true;


        if (!bankname.trim()) {
            errorsStep1.contactName = "Bank Name is required";
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
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formSubmit) {
            if (validateStep1()) {
                onSubmit(formData);
                myButtonRef.current.click();
            }
        } else {
            toast.info("Please fill correct Details")
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
                            <input
                                type="text"
                                className="form-control"
                                id="bankName"
                                placeholder="Enter Party Name"
                                name="step1.bankname"
                                onChange={ (e) => checkExists(e)}
                            />
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
                id="bankModal"
                tabIndex="-1"
                aria-labelledby="bankModalLabel"
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
                                style={{ display: 'none' }}
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBankModal;
