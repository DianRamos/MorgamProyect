import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RegisterFormik from "./RegisterFormik";

const ModalRegister = ({ showModalRegister, handleCloseModalRegister, toggleModal, setUsuario }) => {


  return (
    <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterFormik setUsuario={setUsuario} toggleModal={toggleModal} cerrarModalRegister={handleCloseModalRegister} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalRegister}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegister;
