import React, { useEffect, useState } from "react";
import axios from "axios";
import getBaseUrl from "../services/connectionString";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DataTable from "../components/DataTable";

const ViewLists = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(getBaseUrl() + `api/group/getGroup`);
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading === true) {
    return <h1>Loading</h1>;
  }

  const dis = () => {
    console.log(data);
  };
  const openList = (list) => {
    if (list.isProtected === true) {
      const pass = window.prompt("Enter the password");
      if (pass === list.password) {
        toast.success("Password is correct");
        navigate(`/dashboard/followup/view-list/${list._id}`);
      } else {
        toast.error("Password is incorrect");
      }
    } else {
      console.log("You can view the list");
      navigate(`/dashboard/followup/view-list/${list._id}`);
    }
  };
  return (
    <div className="flex">
      <h1 onClick={dis}>View Lists</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {data?.map((list, index) => (
          // <div key={index}>
          //   <h3>{list.name}</h3>
          //   <p>{list.description}</p>
          //   <button onClick={() => openList(list)}>Open</button>
          // </div>
          <div class="card text-center">
            <div class="card-header">Featured</div>

            <div class="card-body">
              <h5 class="card-title">{list.name} </h5>
              <p>{list.description}</p>

              <button onClick={() => openList(list)}>Open</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLists;
