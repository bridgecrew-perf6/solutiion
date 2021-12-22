/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import './Login.scss';


const Login = ({ show, handleShowLogin, handleShowSignup }) => {
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
      <div className="login-form">

        <Modal
          show={show}
          onHide={() => handleShowLogin()}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          className="login-form"
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Welcome Back
            </Modal.Title>

            <div className="sub-title">
                <span>Don’t have an account yet? </span>
                {/* close login modal and open signup modal */}
                <span onClick={() => {handleShowSignup(); handleShowLogin();}}>
                    <u>Join for free!</u>
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
                <Form.Group className="mb-5" controlId="email">
                    <Form.Control
                        placeholder="Email"
                        type="email"
                        onChange={ e => setField('email', e.target.value) }
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-5" controlId="password">
                    <span className="forgot-pass" onClick={{/* call the forgot password modal here */}}>Forgot password?</span>
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

                <div className="btn-block">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>

            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

export default Login;