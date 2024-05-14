import React from 'react';
import './CertificateStyles.css';
//import {NavLink} from 'react-router-dom';
import './WorkCardStyles.css';
import { certData } from './CertData';
import { NavLink } from 'react-router-dom';

const Certificate = (props) => {
    const logotest = '';
    return (
        <div className="work-container">
            <h1 className="cert-heading">Certificates</h1>
            <div className={`cert-container ${props.isCertificateClicked ? 'slide-in-certificate' : ''}`}>

                {certData.map((val, ind) => {

                    return (
                        <div className="cert-card">
                            <div>
                                {val.logo}
                            </div>
                            <div className="cert-title">
                                {val.title}
                            </div>
                            <div style={{width: '100%'}}>
                                <div className="cert-platform">
                                    {val.platform}
                                </div>
                                <div className='cert-number'> Certificate No:{" "} {val.number}</div>
                                <div className="cert-btns">
                                    <button to="" className="btn btn-cert">View</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Certificate;