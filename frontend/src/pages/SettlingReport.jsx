import React from "react";
import "../css/SettlingReport.css";
import axios from "axios";

const SettlingReport = () => {
  return (
    <div
      className="max-w-100 w-100 px-4 py-2"
      style={{ background: "#F4F6F9" }}
    >
      <section className="settling_report_section">
        <div className="container">
          <div className="row my-2">
            <div className="col-12" style={{ textAlign: "right" }}>
              <p className="fw-bold">
                Date:: <span>10-4-2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className="settling_report_tables">
          {/* Table 1 Start */}
          <div className="main_table_div">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col" className="table_text">
                      Naam
                    </th>
                    <th scope="col" className="table_text">
                      Jama
                    </th>
                    <th scope="col" className="table_text">
                      Balance
                    </th>
                    <th scope="col" className="table_text">
                      Ch
                    </th>
                    <th scope="col" className="table_text">
                      Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Table 1 End */}

          {/* Table 2 Start */}
          <div className="main_table_div">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col" className="table_text">
                      Naam
                    </th>
                    <th scope="col" className="table_text">
                      Jama
                    </th>
                    <th scope="col" className="table_text">
                      Balance
                    </th>
                    <th scope="col" className="table_text">
                      Ch
                    </th>
                    <th scope="col" className="table_text">
                      Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="date">21-09-2023</span>{" "}
                      <span className="time">10:34:17 PM</span>
                    </td>
                    <td>Akshay Bisht</td>
                    <td className="table_text">13090</td>
                    <td className="table_text"></td>
                    <td className="table_text">0</td>
                    <td className="table_text">N</td>
                    <td className="table_text">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Table 2 End */}
        </div>

        <div className="container">
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="fw-bold">
                Final Total:: <span>-98611</span>
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="option_btns mb-3">
                <button type="button" class="btn btn-info">
                  4 Row Print
                </button>
                <button type="button" class="btn btn-info">
                  2 Row Print
                </button>
                <button type="button" class="btn btn-info">
                  Print Satewise
                </button>
                <button type="button" class="btn btn-info">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettlingReport;
