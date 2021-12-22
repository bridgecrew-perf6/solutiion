import './OurMission.scss';

const OurMission = () => {
    const getInvolvedHandler = () => {
        // this is a placeholder for development
        console.log('Thanks for getting involved!');
    };

    return (
        <section
            className='our-mission' id='mission'
        >
            <h2>Our Mission</h2>
            
            <p>
            Solution exists for a better world.

            We strive to improve the lives of billions of people by providing
            an innovative social network that connects, solves issues quickly,
            and drives positive growth for now and for future generations.
            
            We help anybody who is also on a mission to better the world.
            </p>
            
            <button
                onClick={getInvolvedHandler}
            >
                Get involved
            </button>
        </section>
    );
}

export default OurMission;