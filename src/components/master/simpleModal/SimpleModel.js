import { Modal } from 'react-bootstrap';
import React from 'react';

/**
 * @param show boolean like true
 * @param handleClose function 
 * @param size string like "md", "lg", "xl" 
 * @param id number nullable
 * @returns SimpleMOdal
 */
const SimpleModel = ({ show, handleClose = null, size = "md", id, children, isCloseButton = true }) => {

    return (

        <Modal
            onClose={handleClose}
            size={size}
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {
                    isCloseButton === true && (
                        <div className="modal_Close_btn pointer"
                            onClick={() => handleClose()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" x="20" y="20" />
                            </svg>
                        </div>
                    )
                }

                {
                    children
                }
            </Modal.Body>
        </Modal>
    );
};

export default SimpleModel;