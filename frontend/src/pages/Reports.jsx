import React, { useState } from "react";
import "../css/Reports.css";
import Data from "../Dummy.json";
import { useEffect } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

const Reports = () => {
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
    { name: "actions", label: "Action" },
  ];

  // const handleClickNext = () => {
  //     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  // };

  // const handleClickPrev = () => {
  //     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  return (
    <div className="reports_container">
      {/* Table Start */}
      {/* <table className="table align-middle table-striped">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">
                                <p>Number</p>
                                <input type="number" className='input_selector form-control' inputMode='numeric' value={numberSearch} onChange={handleSearch} name="search" id="search" />
                            </th>
                            <th scope="col">
                                <p>Occupation</p>
                                <select name="occupation" className='input_selector form-select' onChange={handleFilter}>
                                    <option value="">Filter</option>
                                    <option value="single">Single</option>
                                    <option value="multi">Multi</option>
                                    <option value="triple">Triple</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {noDataFound ? (
                            <tr>
                                <td colSpan="2">No data found</td>
                            </tr>
                        ) : (
                            currentData.map((item) => (
                                <tr key={item.number}>
                                    <td>{item.number}</td>
                                    <td>{item.occupation}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table> */}
      {/* <h1>hello</h1> */}
      <DataTable fields={fields} route={"customer/getCustomers"} />
      {/* Table end */}

      {/* will implement later in data table itself */}

      {/* <div className="report_pagination">
                    <button onClick={handleClickPrev} disabled={currentPage === 1}>Previous</button>
                    <span>{currentPage} of {totalPages}</span>
                    <button onClick={handleClickNext} disabled={currentPage === totalPages}>Next</button>
                </div> */}
    </div>
  );
};

export default Reports;
