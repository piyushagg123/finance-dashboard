import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import getBaseUrl from "../services/connectionString";

function Test() {
  const [excelData, setExcelData] = useState(null);
  const [selectedSheet, setSelectedSheet] = useState(null);

  const handleFileUpload = (e) => {
    //takes first files
    const file = e.target.files[0];
    const reader = new FileReader();

    //start reading file asynchronously once done onload will trigger
    reader.readAsArrayBuffer(file);

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetNames = workbook.SheetNames;
      setSelectedSheet(sheetNames[0]); // Selecting the first sheet by default
      const jsonData = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetNames[0]],
        { header: 1 }
      );
      //header 1 : is first row of sheet is considered as header

      //map data in key value format
      const formattedData = jsonData.splice(1).map((row) => {
        const obj = {};
        for (let i = 0; i < row.length; i++) {
          obj[jsonData[0][i]] = row[i];
        }
        return obj;
      });

      setExcelData(formattedData);
      console.log(formattedData);
    };
  };

  const handleExcelUser = () => {
    axios.defaults.withCredentials = true;
    axios
      .post(getBaseUrl() + "api/customer/addMultipleCustomers", {
        formData: excelData,
      })
      .then((response) => {
        if (response.data.result) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <input
        onChange={handleFileUpload}
        placeholder="Enter file"
        type="file"
        accept=".xlsx, .xls"
      />
      <button onClick={handleExcelUser}>Add Multiple User</button>
    </>
  );
}

export default Test;
