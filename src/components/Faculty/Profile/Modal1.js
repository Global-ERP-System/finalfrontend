import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Row,Col,Label,CustomInput,Input,Card } from 'reactstrap';
// import "./Modal.css"
const Create1 = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="primary" onClick={toggle} className="button1" style={{width:'130px',height:'36px'}}>Edit Details</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="profile-modal"   style={{width:'600px'}}>
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Qualification</ModalHeader>
      <ModalBody>
      
            <div style={{height:'200px',width:'228px',float:'left'}}>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Master's</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter masters degree"/>
                
                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Bachelor's</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter bachelors degree"/>

            </div>

            <div style={{height:'200px',width:'228px',float:'left',marginLeft:'10px'}}>

            <label style={{fontWeight:'bold',fontSize:'14px'}}>Any other</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter degree"/>
                
            </div>


      </ModalBody>
      <ModalFooter>
        <Col>
        <Button type= "submit" color="primary" onClick={toggle}>Submit</Button>{' '}
        </Col>
        <Col>
        <Button style={{marginLeft:'80px'}} color="secondary" onClick={toggle}>Cancel</Button>
        </Col>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default Create1;