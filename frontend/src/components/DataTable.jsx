import React, { useEffect, useState } from "react";
import axios from "axios";
import getBaseUrl from "../services/connectionString";
import { useCreateListContext } from "../context/CreateListContext";

const DataTable = ({ fields, route, reload, param, setTableList }) => {
  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  // Function to handle nested object access
  function getFieldValue(obj, path) {
    const fieldParts = path.split(".");
    let current = obj;
    for (const part of fieldParts) {
      if (!current || typeof current !== "object") {
        return ""; // Handle missing nested properties gracefully
      }
      current = current[part];
    }

    return current ? current.toString() : ""; // Convert to string if not undefined
  }

  // Handle search
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filteredData = dataList.filter((item) =>
      fields.some((field) =>
        String(getFieldValue(item, field.name))
          .toLowerCase()
          .includes(searchValue)
      )
    );
    setFilteredData(filteredData);
    if (!Array.isArray(filteredData)) {
      setFilteredData(filteredData.items);
    }
  };

  // Function to handle row actions (update/delete)
  const handleRowAction = (action, item) => {
    if (action === "add") {
      console.log("nice");
    }
    // Implement your logic for update and delete actions here
    // This function should take the action type ("update" or "delete")
    // and the item data as arguments, and perform the necessary API calls
    // or other operations.
    console.log("Action:", action, "Item:", item);
    // Replace with your actual implementation
    alert(`Handling ${action} for item: ${JSON.stringify(item)}`);
  };

  const { addSelectedItem, removeSelectedItem, selectedItems } =
    useCreateListContext();
  const handleAddItem = (item) => {
    addSelectedItem(item);
    console.log("Item added:", item);
  };

  const isItemAdded = (item) => selectedItems.includes(item);

  // Button label based on item selection
  const getButtonLabel = (item) => (isItemAdded(item) ? "Remove" : "Add");

  // Button onClick handler based on item selection
  const handleButtonClick = (item) => {
    isItemAdded(item) ? removeSelectedItem(item) : handleAddItem(item);
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get(getBaseUrl() + `api/${route}`, {
        withCredentials: true,
      })
      .then((response) => {
        setDataList(response.data);
        setFilteredData(response.data);
        console.log(response.data);
        setTableList(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, [reload, route, setTableList]);

  const mapping = (filteredData) => {
    filteredData.map((item, index) => (
      <tr key={index}>
        {fields.map((field) =>
          // field.name !== "actions" ? (
          //   <td key={field.name}>
          //     {getFieldValue(item, field.name) || "--"}
          //   </td>
          // ) : null
          field.name !== "actions" && field.name !== "add" ? (
            <td key={field.name}>{getFieldValue(item, field.name) || "--"}</td>
          ) : null
        )}
        {/* Conditionally render button column cells if there's an "actions" field */}
        {fields.some((field) => field.name === "actions") && (
          <td key="actions">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => handleRowAction("update", item)}
            >
              Update
            </button>{" "}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleRowAction("delete", item)}
            >
              Delete
            </button>
          </td>
        )}

        {fields.some((field) => field.name === "add") && (
          <td key="actions">
            <button
              className={`btn btn-sm btn-${
                isItemAdded(item) ? "danger" : "primary"
              }`}
              onClick={() => handleButtonClick(item)}
            >
              {getButtonLabel(item)}
            </button>
          </td>
        )}
      </tr>
    ));
  };

  return (
    <>
      <input
        type="text"
        className="input_selector form-control"
        value={search}
        onChange={handleSearch}
        placeholder="Enter your search here"
        name="search"
        id="search"
      />
      <div className="table-responsive">
        <div className="table-responsive">
          <table className="table align-middle table-striped">
            <thead className="text-center">
              <tr>
                {fields.map((field) => (
                  <th scope="col" key={field.name}>
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredData.length !== 0 ? (
                Array.isArray(filteredData) ? (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      {fields.map((field) =>
                        // field.name !== "actions" ? (
                        //   <td key={field.name}>
                        //     {getFieldValue(item, field.name) || "--"}
                        //   </td>
                        // ) : null
                        field.name !== "actions" && field.name !== "add" ? (
                          <td key={field.name}>
                            {getFieldValue(item, field.name) || "--"}
                          </td>
                        ) : null
                      )}
                      {/* Conditionally render button column cells if there's an "actions" field */}
                      {fields.some((field) => field.name === "actions") && (
                        <td key="actions">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleRowAction("update", item)}
                          >
                            Update
                          </button>{" "}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleRowAction("delete", item)}
                          >
                            Delete
                          </button>
                        </td>
                      )}

                      {fields.some((field) => field.name === "add") && (
                        <td key="actions">
                          <button
                            className={`btn btn-sm btn-${
                              isItemAdded(item) ? "danger" : "primary"
                            }`}
                            onClick={() => handleButtonClick(item)}
                          >
                            {getButtonLabel(item)}
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  filteredData.items.map((item, index) => (
                    <tr key={index}>
                      {fields.map((field) =>
                        field.name !== "delete" ? (
                          <td key={field.name}>
                            {getFieldValue(item, field.name) || "--"}
                          </td>
                        ) : null
                      )}

                      {fields.some((field) => field.name === "delete") && (
                        <td key="actions">
                          <button
                            className={`btn btn-sm btn-danger`}
                            // onClick={}
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={fields.length}>No data found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
