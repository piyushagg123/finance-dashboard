import { useState } from "react";
import DataTable from "../components/DataTable";
import "../css/Reports.css";
import { toast } from "react-toastify";
import getBaseUrl from "../services/connectionString";
import { useCreateListContext } from "../context/CreateListContext";
import axios from "axios";
const CreateList = () => {
  // const { selectedItems, createItemGroup } = useCreateListContext();
  const { selectedItems, createList, setSelectedItems } =
    useCreateListContext();
  const [listName, setListName] = useState("");
  const [isProtected, setIsProtected] = useState(false);
  const [password, setPassword] = useState("");

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
    { name: "add", label: "Action" },
  ];

  // const [selectedItems, setSelectedItems] = useState(0);
  const handleCreateList = () => {
    if (selectedItems.length == 0) {
      toast.error("Add atleast one customer");
      return;
    }
    // console.log(selectedItems);
    // createItemGroup();
    // toast.success("New list created successfully");

    const name = window.prompt("Enter a name for this list:");
    if (!name) return; // Handle cancel or empty input
    setListName(name);

    const desc = window.prompt("Add a description to your list");
    if (!desc) return;

    const protectedPrompt = window.confirm(
      "Do you want to make this list password protected?"
    );
    setIsProtected(protectedPrompt);
    console.log(protectedPrompt);
    let pass;
    if (protectedPrompt) {
      pass = window.prompt("Enter a password for this list:");
      console.log(pass);
      if (!pass) return; // Handle cancel or empty input
      setPassword(pass);
    }
    console.log(listName, selectedItems, isProtected, password);
    createList(name, selectedItems, protectedPrompt, pass);

    const data = {
      name: name,
      items: selectedItems,
      isProtected: protectedPrompt,
      password: pass,
      description: desc,
    };

    axios
      .post(getBaseUrl() + `api/group/addGroup`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setSelectedItems([]);
  };
  return (
    <div className="reports_container">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleCreateList} className="btn btn-sm btn-primary">
          Create List
        </button>
      </div>
      <br />
      <DataTable fields={fields} route={"customer/getCustomers"} />
    </div>
  );
};

export default CreateList;
