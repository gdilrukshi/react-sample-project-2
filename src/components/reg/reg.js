import React from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import Regimg from "../../images/1.png";
import "./reg.css";

const Reg = () => {
    return (
        <>
            <Container fluid className="a">
                <div className="c">
                    <Row>
                        <Col md={8} sm={12}>
                            <img className="regimg" src={Regimg} alt="icon" />
                        </Col>
                        <Col md={4} sm={12} className="p-3">
                            <Form className="regform mb-3" controlId="rf">
                                <h3 className="topic text-center mb-3">Registration Form</h3>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridFname">
                                        <Form.Control placeholder="First name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLname">
                                        <Form.Control placeholder="Last name" />
                                    </Form.Group>
                                </Row>

                                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustomUsername">
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">{" "} @ </InputGroup.Text>
                                            <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGender">
                                        <Form.Select defaultValue="Gender">
                                            <option>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formPhone">
                                        <Form.Control placeholder="Phone Number" />
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1" >
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2" >
                                        <Form.Control placeholder="Address 2" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Control placeholder="City" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Control placeholder="Postal Code" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Select defaultValue="Province">
                                            <option>Province</option>
                                            <option>Colombo</option>
                                            <option>Gampaha</option>
                                            <option>Kaluthara</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Form.Group as={Col} controlId="formGridDescription" className="mb-3" >
                                    <Form.Control as="textarea" placeholder="Description (Optional)" />
                                </Form.Group>

                                <Form.Group className="mb-2" id="formGridCheckbox">
                                    <Form.Check style={{ color: "blanchedalmond" }} type="checkbox" label="Agree to terms and conditions" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="button">
                                    Register
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Reg;
