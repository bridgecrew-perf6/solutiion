/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import countries from './countries';
import './ContactUs.scss';

const ContactUs = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [helpType, setHelpType] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value, 'll');
        // if(value) {
        //     setValue('updated')
        // } else {
        //     setValue('not updated');
        // }
    }
    const helpOptions = [
        'Select an option',
        'Offer financial help',
        'Offer promotion help',
        'Offer any other help',
        'Ask a question',
        'Other options'
    ];
    const locations = countries.map(country => country.name);

    return (
        <section className='contact' id='contact'>
            <h2>Contact</h2>
            <p>Get in touch, we'd love to hear from you!</p>
  
            <div className='form-section'>
                <div className='form-inner'>
                    <Input
                        label=''
                        type='text'
                        name='first_name'
                        value={firstName}
                        placeholder='First Name'
                        onChange={handleChange}
                        />
                    <Input
                        label=''
                        type='text'
                        name='last_name'
                        value={lastName}
                        placeholder='Last Name'
                        onChange={handleChange}
                        />
                </div>
                <Input
                    label=''
                    type='text'
                    name='email_address'
                    value={email}
                    placeholder='Email Address'
                    onChange={handleChange}
                    />
                <Select
                    label=''
                    name='location'
                    value={location}
                    options={locations} 
                    placeholder='Location'
                    onChange={handleChange}
                    />
                <Select
                    label=''
                    name='option'
                    value={helpType}
                    options={helpOptions} 
                    placeholder='Select an option'
                    onChange={handleChange}
                    />
                <TextArea
                    label=''
                    type='text'
                    name='message'
                    value={message}
                    placeholder='Message'
                    onChange={handleChange}
                />
                <Input
                    label=''
                    type='button'
                    name='send-message'
                    value='Send'
                    placeholder=''
                />
            </div>
        </section>
    );
}

export default ContactUs;
