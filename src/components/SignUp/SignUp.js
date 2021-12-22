import { useState } from 'react';

import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import './SignUp.scss';


const SignUp = ({ show, handleShow, handleShowLogin }) => {
    // const [ show, setShow ] = useState(false);
    const [ validated, setValidated ] = useState(false);
    const [ form, setForm ] = useState({});
    const [passwordShown, setPasswordShown] = useState(false);
    const [response, setResponse] = useState(null);

    const setField = (field, value) => {
      setForm({
        ...form,
        [field]: value
      })
    }

    // Show/Hide password
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    // validate form
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        console.log(form);
        const formm = event.currentTarget;
        if (formm.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        
        // set the response
        setResponse({
            status: 200,
            message: `An action will be made base on the response status from the API. 
             If the response status is OK, the user will be authenticated. Else, the error message will be displayed here.`
        });
    };

    return (
      <div className="signup-form">

        <Modal
          show={true}
          onHide={() => handleShow()}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          className="signup-form"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Create an account
            </Modal.Title>

            <div className="sub-title">
                {/* close signup modal and open login modal */}
                <span>If you’re already our existing user, </span>
                <span onClick={() => {handleShow(); handleShowLogin();}}>
                    <u>Log In here</u>
                </span>
            </div>

            {response &&
                response.status && response.message &&
                    <div className={`response ${response.status}`}>
                        {response.message}
                    </div>
            }
          </Modal.Header>

          <Modal.Body>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-5" controlId="firstname">
                            <Form.Control
                                placeholder="First Name"
                                type="text"
                                onChange={ e => setField('firstname', e.target.value) }
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-5" controlId="lastname">
                            <Form.Control
                                placeholder="Last Name"
                                type="text"
                                onChange={ e => setField('lastname', e.target.value) }
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-5" controlId="email">
                    <Form.Control
                        placeholder="Email"
                        type="email"
                        onChange={ e => setField('email', e.target.value) }
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-5" controlId="password">
                    <Form.Control
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        onChange={ e => setField('password', e.target.value) }
                        required
                    />
                    <i className="eye" onClick={togglePasswordVisiblity}>
                        {passwordShown ?
                            <BsEye />
                        :
                            <BsEyeSlash />
                        }
                    </i>
                </Form.Group>

                <Row className="mt-10">
                    <Col lg={6}>
                        <Form.Group className="mb-5" controlId="age">
                            <Form.Check
                                type="checkbox"
                                id="age"
                                label="You must be atleast 13 years of age to create the account"
                                onChange={ e => setField('age', e.target.checked) }
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-5" controlId="recaptcha" required>
                            <ReCAPTCHA
                                sitekey="6LeqCCQdAAAAAO0OxBKW-0FnPUH4ZTIyqGhV_2q4"
                                onChange={ e => setField('recaptcha', e)}
                                onExpired={ e => setField('recaptcha', null)}
                                className="recaptcha"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="btn-block">
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </div>

                <div className="terms-of-use">
                    <div>By clicking Sign Up, you agree to Solution’s</div>
                    <div>
                        <a href="/terms-of-service" target="_blank">Terms of Use</a>  and 
                        <a href="/privacy-policy" target="_blank"> Privacy Policy.</a>
                    </div>
                </div>

            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

export default SignUp;