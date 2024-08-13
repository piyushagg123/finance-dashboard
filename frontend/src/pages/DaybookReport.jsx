import React, { useState } from "react";
import DataTable from "../components/DataTable";
import * as XLSX from "xlsx";

const DaybookReport = () => {
  const fields = [
    { name: "contactName", label: "Contact Name" },
    { name: "phoneNumber", label: "Phone Number" },
    { name: "contactType", label: "Contact Type" },
    { name: "customerBalance", label: "Customer Balance" },
  ];

  let [depositList, setDepositList] = useState([]);
  let [withdrawList, setWithdrawList] = useState([]);

  // const handleReport = () => {
  //   // Combine data from both lists
  //   const combinedData = [...depositList, ...withdrawList];

  //   // Create worksheet
  //   const ws = XLSX.utils.json_to_sheet(combinedData);

  //   // Create workbook
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Daybook Report");

  //   // Convert workbook to binary string
  //   const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  //   // Create Blob object
  //   const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

  //   // Create URL for Blob object
  //   const url = URL.createObjectURL(blob);

  //   // Create anchor element
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "daybook_report.xlsx";

  //   // Trigger click event
  //   a.click();
  // };

  // Function to convert binary string to ArrayBuffer

  const handleReport = () => {
    // Prepare data for separate tables (assuming data lists are defined)
    const depositData = [...depositList]; // Copy deposit data
    const withdrawalData = [...withdrawList]; // Copy withdrawal data

    // Create separate worksheets
    const depositSheet = XLSX.utils.json_to_sheet(depositData);
    const withdrawalSheet = XLSX.utils.json_to_sheet(withdrawalData);

    
    // Define worksheet names
    const depositSheetName = "Deposits";
    const withdrawalSheetName = "Withdrawals";

    // Create workbook and add sheets
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, depositSheet, depositSheetName);
    XLSX.utils.book_append_sheet(wb, withdrawalSheet, withdrawalSheetName);

    // Add header rows (optional)
    XLSX.utils.sheet_add_aoa(depositSheet, [[]], { origin: 'A1' });
    XLSX.utils.sheet_add_aoa(withdrawalSheet, [[]], { origin: 'A1' });
    
    const headerdepositData = Object.keys(depositData[0]); // columns name
    const headerwithdrawalData = Object.keys(withdrawalData[0]); // columns name

    function calculateColumnWidths(headerData) {
      const wscols = [];
    
      // Calculate column widths based on header length
      for (let i = 0; i < headerData.length; i++) {
        wscols.push({ wch: headerData[i].length + 5 }); // Add a buffer of 5 characters
      }
    
      return wscols;
    }
    
    depositSheet["!cols"] = calculateColumnWidths(headerdepositData);
    withdrawalSheet["!cols"] = calculateColumnWidths(headerwithdrawalData);
    
    // Convert workbook to binary string
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

    // Create Blob object
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

    // Create URL for Blob object
    const url = URL.createObjectURL(blob);

    // Create anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = "daybook_report.xlsx";

    // Trigger click event
    a.click();
  };

  // const handleReport = () => {
  //   // 1. Create a single sheet with combined and adjusted column widths

  //   const wb = XLSX.utils.book_new();
  //   const combinedData = [...depositList, ...withdrawList];
  //   const combinedSheet = XLSX.utils.json_to_sheet(combinedData);
  //   XLSX.utils.book_append_sheet(wb, combinedSheet, "Combined Report");

  //   // 2. Define header row content (adjust as needed)
  //   const depositHeader = ['Deposits', '']; // Customize deposit header
  //   const withdrawalHeader = ['Withdrawals', '']; // Customize withdrawal header
  //   const combinedHeader = [...depositHeader, ...withdrawalHeader];

  //   const merge = [
  //     { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } },{ s: { r: 0, c: 5 }, e: { r: 0, c: 8 } },
  //   ];
  //   combinedSheet["!merges"] = merge;

  //   // 3. Add header row with merged cells
  //   XLSX.utils.sheet_add_aoa(combinedSheet, [combinedHeader], { origin: 'A1' });
    

  //   // Convert workbook to binary string
  //   const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  //   // Create Blob object
  //   const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

  //   // Create URL for Blob object
  //   const url = URL.createObjectURL(blob);

  //   // Create anchor element
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "daybook_report.xlsx";

  //   // Trigger click event
  //   a.click();
  // };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mb-6" style={{ padding: "25px" }}>
          <label htmlFor="deposit" className="form-label">
            Deposit
          </label>
          <DataTable
            fields={fields}
            route={"customer/positive-balance"}
            setTableList={setDepositList}
          />
        </div>
        <div className="mb-6" style={{ padding: "25px" }}>
          <label htmlFor="withdraw" className="form-label">
            Withdraw
          </label>
          <DataTable
            fields={fields}
            route={"customer/negative-balance"}
            setTableList={setWithdrawList}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={handleReport}>Generate Report</button>
      </div>
    </>
  );
};

export default DaybookReport;
