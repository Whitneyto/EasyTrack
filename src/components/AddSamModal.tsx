//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Form, Modal } from "react-bootstrap";
//others
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { Psample } from '../interfaces/data';

interface iAddSamModal {
    show: boolean;
    setShow: (ss: boolean) => void;
}
interface iHandleSave{
    name : string;
    value : string;
    previousValue: string;
}
export function AddSamModal({ show, setShow }: iAddSamModal): JSX.Element {
    const [Pname, setPname] = useState<string>("");
    const [Pdata, setPdata] = useState<string>("");
    const [Pcomm, setPcomm] = useState<string>("");
    const [saveAlert, setSaveAlert] = useState<boolean>(false);

    function addSamOnSave() : void {
        if (Pname!==""){
            const newPsam : Psample = {name : Pname, data:Pdata, comment:Pcomm, coated:[]};
            console.log(newPsam);   
            setPname("");   
            setShow(false);
        } else if (Pname==""){
            setSaveAlert(true);
        }
    }
    const handleSave = ({ name, value, previousValue }:iHandleSave) => {
        console.log("here");
    };


    return <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Adding A New Sample</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <strong>Sample Name</strong>
            <EditText
                name='textbox'
                placeholder='P000000'
                style={{ fontSize: '16px', border: '1px solid #ccc' }}
                value={Pname}
                onChange={setPname}
                onSave={handleSave}
            />
            <strong>Sample Data</strong>
            <EditText
                name='textbox'
                placeholder='Enter short description of data'
                style={{ fontSize: '16px', border: '1px solid #ccc' }}
                value={Pdata}
                onChange={setPdata}
                onSave={handleSave}
            />
            <strong>Comment</strong>
            <EditTextarea
                name='description'
                rows={4}
                value={Pcomm}
                onChange={setPcomm}
                onSave={handleSave}
                style={{ paddingTop: 0, border: '1px solid #ccc' }}
                placeholder='Enter a Comment'
            />
            {saveAlert && <div>Can't add sample. Please check all information again.</div>}

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {setShow(false);setPname("")}}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => {addSamOnSave();}}>
                Save Sample
            </Button>
        </Modal.Footer>
    </Modal>
}