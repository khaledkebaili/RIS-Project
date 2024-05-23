// PatientDetails.js or wherever your component is located
import React from 'react';
import './PatientDetails.css';
import userIcon from './assets/man.png';
import { useParams,useNavigate } from 'react-router-dom';
const PatientDetails = () => {
  const { patientName } = useParams();
  
  const rows = [
    { id:1, type: 'Thorax Examination', date: '20/12/2020', status: 'Completed' },
    { id:2, type: 'Thorax Examination', date: '05/01/2021', status: 'Completed' },
    { id: 3, type: 'Thorax Examination', date: '18/04/2024', status: 'Pending' }
    // Add more rows as needed
  ];

  const navigate = useNavigate();

  // Function to handle row click
  const handleRowClick = (id,type, date) => {
    // Redirect to details page with row id as parameter
    navigate(`/patient-details/${patientName}/diagnostic/${id}/${type}/${date}`);
  };

  return (
    <div>
      <div className='up-text d-flex align-items-center'>
        <p>Dashboard / My patient / <span>Patient Profile</span></p>
      </div>
      <div className="d-flex ">
      <div className="card p-3 d-flex flex-row align-items-center w-60">
        <img src={userIcon} alt="User Icon" className="me-3 user-icon mr-2" />
        <div className="d-flex flex-column">
          <p className="mb-4 fs-2">{patientName}</p>
          <span>Patient since 20/02/2020</span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center ml-3">
        <button className="mb-2 add-button justify-content-center">
          <span>Add Document</span>
          <span className="ms-2 fs-3">+</span>
        </button>
        <button className="mb-2 delete-button">
          <span>Delete EMR</span>
        </button>
      </div>
      </div>
      <h4 className="mt-5">Examination</h4>
      <table className="table mt-4">
        <thead className="table-header">
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="table-row"
              
              onClick={() => handleRowClick(row.id,row.type, row.date)}
            >
              <td>{row.type}</td>
              <td>{row.date}</td>
              <td style={{ color: row.status === 'Completed' ? 'lightgreen' : 'lightcoral' }}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDetails;
