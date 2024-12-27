import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Table.css";
import sampleData from "../data/SampleData";

function Table() {
  const [modalData, setModalData] = useState(null);

  const handlePatientClick = (patient) => {
    setModalData(patient);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="table-container ">
      <table className="table ">
        <thead>
          <tr>
            <th className="tableHeading">Patient Name</th>
            <th className="tableHeading">Contact</th>
            <th className="tableHeading">Parent</th>
            <th className="tableHeading">Immediate Actions</th>
            <th className="tableHeading">Due Date</th>
            <th className="tableHeading">Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((patient, index) => (
            <tr key={index}>
              <td>
                <button
                  className="link"
                  onClick={() => handlePatientClick(patient)}
                >
                  {patient.name}
                </button>
              </td>
              <td>{patient.contact}</td>
              <td>{patient.parent}</td>
              <td>{patient.actions}</td>
              <td>{patient.dueDate}</td>
              <td>
                <button onClick={() => handlePatientClick(patient)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalData && <Modal data={modalData} onClose={handleCloseModal} />}
    </div>
  );
}

export default Table;
