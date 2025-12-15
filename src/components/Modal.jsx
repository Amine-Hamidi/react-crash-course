import Classes from './Modal.module.css';
function Modal ({ children }){
    return (
        <>
            <div className={Classes.backdrop}/>
            <dialog open className={Classes.modal}>
                {children}
            </dialog>      
        </> 
    );
}

export default Modal;