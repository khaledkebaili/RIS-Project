import React from 'react'
import { useParams } from 'react-router-dom';
// import userIcon from './assets/images.png';
import "./Diagnostic.css"


const Diagnostic = () => {
    const { patientName } = useParams();
  return (
    <div>
        <div className='up-text d-flex align-items-center'>
            <p>Dashboard / My patient / <span>Diagnostic</span></p>
        </div>
        <div className="row justify-content-end">
            <div className="col-auto">
                <button className="mb-2 delete-button">
                <span>Delete the examination</span>
                </button>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {/* Column for patient details */}
                <div className="w-100 align-items-center justify-content-center text-align-center">
                    <div className="card p-3  flex-row   mb-3">
                        <p className="mb-1 ">Name: <span>{patientName}</span></p>
                        <p className="mb-1">Date: <span>20/12/2020</span></p>
                        <p className="mb-1">Type: <span>Thorax Examination</span></p>
                    </div>
                    <br/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Diagnostic