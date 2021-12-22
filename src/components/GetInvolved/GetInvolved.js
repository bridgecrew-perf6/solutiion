import React from 'react';
import Input from './Input';
import './GetInvolved.scss';

const GetInvolved = () => {

    return (
        <section className='get-involved' id='get-involved'>
            {/* <h2>Get Involved</h2>   */}
            <h2>We need help</h2>  
                <GetInvolvedCard />    
        </section>
    );
}

const GetInvolvedCard = () => (
                    <div className='section'>
                        <div className='section-inner'>
                            <img src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/05/what-is-a-stock-story-600x360.jpg' alt='donate'/>
                            <h3>Donations</h3>

                            <div>
                                Right now we are developing Solution with limited funds, and to grow we need more financial support. <p></p>

                                Your donation will make a huge difference to us accelerating growth, which in turn will mean we can support more good causes around the world. The more financial support we get, the more people we can help. Donate now and help change the world.
                                <Input
                                    label=''
                                    type='button'
                                    name='send-message'
                                    value='Fund us'
                                    placeholder=''
                                />
                            </div>
                        </div>
                        <div className='section-inner'>
                            <img src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/05/what-is-a-stock-story-600x360.jpg' alt='share'/>
                            <h3>Spread the word</h3>
                            
                            <div>
                                Each of us have a huge number of connections on social media – and we ask you to share this project with your network. <p></p>

                                The more people know about us, the faster we can get fully up and running, and the faster we can grow. <p></p>

                                Support us, and help us support you, and change the world.
                                <Input
                                    type='button'
                                    name='share'
                                    value='Share'
                                />
                            </div>
                        </div>
                        <div className='section-inner'>
                            <img src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/05/what-is-a-stock-story-600x360.jpg' alt='contact'/>
                            <h3>Offer any help</h3>

                            <div>
                                If you can help in any way, or you have any questions, contact us via our contact form below.
                                <Input
                                    type='button'
                                    name='send-message'
                                    value='Contact'
                                />
                            </div>
                        </div>
                    </div>
);

export default GetInvolved;
