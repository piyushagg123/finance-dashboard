import React from 'react'
import '../css/Transaction.css'
import { FaCheck } from "react-icons/fa";

const Transaction = () => {
    return (
        <div className='max-w-100 w-100 px-4 py-2' style={{ background: "#F4F6F9" }}>
            <section className='transaction_section'>
                {/* Mini Header Start */}
                <div className="mini_header">
                    <div className="mb-3 d-flex">
                        <label for="openBalance" className="form-label">Opening Balance</label>
                        <input type="number" inputMode='numeric' className="form-control text-center text-primary fw-bold" id="openBalance" value={0} readOnly />
                    </div>
                    <div className="mb-3 d-flex">
                        <input type="text" className="form-control text-dark text-center" id="username" value="Akshay Bisht" readOnly />
                    </div>
                    <div className="mb-3 d-flex">
                        <label for="openBalance" className="form-label">Closing Balance</label>
                        <input type="number" inputMode='numeric' className="form-control text-center text-danger fw-bold" id="openBalance" value={0} readOnly />
                    </div>
                </div>
                {/* Mini Header End */}

                {/* Mini Header 2 Start */}
                <div className="mini_header_2">
                    <div className="d-flex">
                        <select name="usernames" id="usernames" className='form-select'>
                            <option selected>Select User</option>
                            <option value="akshay">Akshay Bisht</option>
                            <option value="shivam">Shivam Jain</option>
                            <option value="paramveer">Paramveer Kushwaha</option>
                        </select>
                    </div>
                    <div className="d-flex">
                        <p className='text-center form-control mb-0 fw-bold'>10/Apr/2024</p>
                    </div>
                    <div className="d-flex">
                        <button className='btn btn-info'>Add Previous Balance</button>
                    </div>

                </div>
                {/* Mini Header 2 End */}

                {/* Main Table Start */}
                <div className="main_table_div">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" className='table_text'>Naam</th>
                                    <th scope="col" className='table_text'>Jama</th>
                                    <th scope="col" className='table_text'>Balance</th>
                                    <th scope="col" className='table_text'>Ch</th>
                                    <th scope="col" className='table_text'>Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                                <tr>
                                    <td><span className='date'>21-09-2023</span> <span className='time'>10:34:17 PM</span></td>
                                    <td>Akshay Bisht</td>
                                    <td className='table_text'>13090</td>
                                    <td className='table_text'></td>
                                    <td className='table_text'>0</td>
                                    <td className='table_text'>N</td>
                                    <td className='table_text'>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Main Table End */}

                {/* Buttons Start */}
                <div className="option_btns my-3">
                    <button type="button" class="btn btn-info">Delete</button>
                    <button type="button" class="btn btn-info">Modify</button>
                    <button type="button" class="btn btn-info">Print</button>
                    <button type="button" class="btn btn-info">Monday Final All</button>
                    <button type="button" class="btn btn-info">Monday Final</button>
                    <button type="button" class="btn btn-info">Last Week Records</button>
                    <button type="button" class="btn btn-info">Tallied</button>
                    <button type="button" class="btn btn-info"><FaCheck /></button>
                </div>
                {/* Buttons End */}

                {/* Some Input Fields Start */}
                <div className="mini_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="mb-3">
                                    <label for="balance" className="form-label">Balance</label>
                                    <input type="number" inputMode='numeric' className="form-control text-center text-primary fw-bold" id="openBalance" value={0} />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="mb-3">
                                    <label for="amount" className="form-label">Amount</label>
                                    <input type="number" inputMode='numeric' className="form-control" id="amount" />
                                </div>

                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="mb-3">
                                    <label for="thirdParty" className="form-label">Amount</label>
                                    <input type="text" className="form-control" id="thirdParty" />
                                </div>
                            </div>
                        </div>

                        <div className="row final_btns">
                            <button className='btn btn-info'>OK</button>
                            <button className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                </div>
                {/* Some Input Fields End */}
            </section >
        </div >
    )
}

export default Transaction