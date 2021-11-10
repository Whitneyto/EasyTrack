//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Modal } from "react-bootstrap";
//others

interface iAddSamModal {
    show: boolean;
    setShow: (ss: boolean) => void;
}
export function AddSamModal({ show, setShow }: iAddSamModal): JSX.Element {

    return <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
                Save Sample
            </Button>
        </Modal.Footer>
    </Modal>
}