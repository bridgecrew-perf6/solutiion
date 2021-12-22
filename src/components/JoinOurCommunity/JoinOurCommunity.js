import {useState} from 'react';

import { Form, Button } from 'react-bootstrap';

import './JoinOurCommunity.scss';

const JoinOurCommunity = () => {
    const [value, setValue] = useState(''); // holds email address
    const [submitted, setSubmitted] = useState(false); // used to display form submission feedback msg

    const submit = (e) => {
        e.preventDefault();
        // log email
        console.log(value);

        // show feedback message within few seconds
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 7200);
    };

    return (
        <section
            className='join-our-community'
        >
            <h2>Join our community</h2>
            
            <p>
                Subscribe to get the latest updates and stay connected with us!
            </p>

            <div>
                <Form className='form' onSubmit={submit}>
                    <Form.Control type="email" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your email address" />
                    <Button type="submit">Subscribe</Button>
                </Form>
            </div>
            {submitted &&
                <div className="feedback">Thank you for joining our community!</div>
            }
        </section>
    )
}

export default JoinOurCommunity;