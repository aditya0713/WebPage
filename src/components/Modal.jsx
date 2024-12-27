import React from "react";
import "../styles/Modal.css";
function Modal({ data, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Patient Details</h2>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Contact:</strong> {data.contact}
        </p>
        <p>
          <strong>Parent:</strong> {data.parent}
        </p>
        <p>
          <strong>Actions:</strong> {data.actions}
        </p>
        <p>
          <strong>Due Date:</strong> {data.dueDate}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
