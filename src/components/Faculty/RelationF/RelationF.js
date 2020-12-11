import React from "react";
import { Row, Col, ButtonToggle } from "reactstrap";
import Table from "react-bootstrap/Table";
import "./RelationF.css";

const Relation = (props) => {
  let list = [];
  for (let i = 0; i < 3; i++) {
    list.push(
      <div id="Your_relation1">
        <Table hover striped>
          <tr>
            <td className="SearchPeople">First_Name+Last_Name</td>
            <td className="SearchPeople">College_Name</td>
            <td className="SearchPeople">Department</td>
            <td className="SearchPeople">
              {" "}
              <ButtonToggle color="success">Connect</ButtonToggle>{" "}
            </td>
            <td>
              {" "}
              <ButtonToggle color="primary">Message</ButtonToggle>{" "}
            </td>
          </tr>
        </Table>
      </div>
    );
  }

  return (
    <div className="RelationFbody">
      <div className="relationFbox">
        <Row>
          <Col sm={6}>
            <label>First Name: </label>
            <input
              type="text"
              id="Firstname"
              placeholder=""
              style={{ width: "255px" }}
            />
          </Col>

          <Col sm={6}>
            <label>Last Name: </label>
            <input
              type="text"
              id="Lastname"
              placeholder=""
              style={{ width: "255px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <label>College: </label>
            <input
              type="text"
              id="College"
              placeholder=""
              style={{ width: "255px" }}
            />
          </Col>
          <Col sm={6}>
            <label>Department: </label>
            <input
              type="text"
              id="Department"
              placeholder=""
              style={{ width: "255px" }}
            />
          </Col>
        </Row>
        <button
          style={{ color: "white", backgroundColor: "#138808" }}
          type="submit"
          value="Search"
          className="btn"
        >
          Search
        </button>
        <br />
      </div>
      <br />
      <br />
      <center>
        <h1 style={{ fontFamily: "Montserrat", fontWeight: "700" }}>
          Your Relation
        </h1>
      </center>
      <br />
      <div style={{ overflow: "auto" }}>{list}</div>
    </div>
  );
};

export default Relation;
