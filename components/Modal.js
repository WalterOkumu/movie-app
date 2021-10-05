import React from 'react'

class Modal extends React.Component {

    constructor(props) {
        super(props)

        this.closeButton = null
    }

    closeModal() {
        this.closeButton.click()
    }

    submitModal = () => {
        alert('Submitting Modal')
        this.closeModal()
    }

    render() {
        return (
            <div>
                <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                    Create Movie
                </button>
    
                <div className='modal fade' id='exampleModal' tabIndex = '-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='exampleModalLabel'>Create Movie</h5>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                            </div>
    
                            <div className='modal-body'>
                                {this.props.children}
                            </div>
    
                            <div className='modal-footer'>
                                <button ref = {ele => this.closeButton = ele} type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                {
                                    this.props.hasSubmit && <button type='button' onClick = {this.submitModal} className='btn btn-primary'>Save Movie</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal

// const Modal = (props) => {
//     let closeButton = null

//     const submitModal = () => {
//         alert('Submitting Modal')
//         closeButton.click()
//     }

//     return (
//         <div>
//             <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
//                 Create Movie
//             </button>

//             <div className='modal fade' id='exampleModal' tabIndex = '-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
//                 <div className='modal-dialog'>
//                     <div className='modal-content'>
//                         <div className='modal-header'>
//                             <h5 className='modal-title' id='exampleModalLabel'>Create Movie</h5>
//                             <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
//                         </div>

//                         <div className='modal-body'>
//                             {props.children}
//                         </div>

//                         <div className='modal-footer'>
//                             <button ref = {ele => closeButton = ele} type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
//                             {
//                                 props.hasSubmit && <button type='button' onClick = {submitModal} className='btn btn-primary'>Save Movie</button>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }