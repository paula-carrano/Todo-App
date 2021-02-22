import React from 'react';

const Toast = ({ toastTitle, toastMsg, bgColor }) => {
    return (
        <div className="container d-flex justify-content-center">
            <div className={` toast show ${bgColor} `} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">{toastTitle} </strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {toastMsg}
                </div>
            </div>
        </div>
    );
}

export { Toast };
