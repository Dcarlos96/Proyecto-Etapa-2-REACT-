
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createPortal } from 'react-dom'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Box from './Box';

function Modal({
    show,
    closeModal,
    children
}) {
  return (
        show ? 
        createPortal(
            <Box className="modal__overlay" role="button" onClick={closeModal}> 
                <Box className="modal__content" onClick={ e => e.stopPropagation() }>
                    <Box className="d-flex justify-end">
                    <button className='modal__close'>
                        <FontAwesomeIcon icon={faTimes} onClick={closeModal}/>
                    </button>
                    </Box>

                    {children}
                </Box>
            </Box>,
            document.body
        )
     : undefined
  )
}

export default Modal