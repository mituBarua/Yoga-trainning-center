import React from "react";
import { Button, Modal } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import EmailPassForm from "./EmailPassForm";

const ModalPopup = (props) => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <EmailPassForm/>
      
          <p className="d-flex align-items-center justify-content-center">Or</p>
     <div  className="d-flex align-items-center justify-content-center">  <Button onClick={signInUsingGoogle} variant="danger">Google Sign in</Button></div>
         
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
     
    </div>
  );
};

export default ModalPopup;
