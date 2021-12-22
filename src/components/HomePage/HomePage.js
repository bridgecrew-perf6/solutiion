import {Fragment, useState} from "react";

import OurMission from '../OurMission/OurMission';
import WhoWeHelp from "../WhoWeHelp/WhoWeHelp";
import WeSupport from "../WeSupport/WeSupport";
import TopSection from "../TopSection/TopSection";
import OurJourney from "../OurJourney/OurJourney";
import ContactUs from "../ContactUs/ContactUs";
import JoinOurCommunity from "../JoinOurCommunity/JoinOurCommunity";
import GetInvolved from "../GetInvolved/GetInvolved";
import Navigation from "../Navigation/Navigation";
import "./HomePage.scss";
import Footer from "../Footer/Footer";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import HowItWorks from "../HowItWorks/HowItWorks";
// import SignUp from "../SignUp/SignUp";
// import Login from "../Login/Login";
import PopUp from "./PopUp"; 

const HomePage = () => {
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [sourceData, setSourceData] = useState({});

    const handleShow = (source) => {
        console.log(source);
        setShow(!show);
        setSourceData(source);
    }

    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    }


    return <Fragment>
        <Navigation show={show} handleShow={handleShow} handleShowLogin={handleShowLogin} />
        <TopSection/>
        <OurMission/>
        <WhoWeHelp/>
        <WeSupport show={show} handleShow={handleShow}/>
        <PopUp show={show} handleShow={handleShow} sourceData={sourceData} />
        <GetInvolved /><hr />
        <HowItWorks />
        <OurJourney />
        <ContactUs />
        <JoinOurCommunity />
        {/* <Footer/> */}
        {/* <SignUp show={show} handleShow={handleShow} handleShowLogin={handleShowLogin} /> */}
        {/* <Login show={showLogin} handleShowLogin={handleShowLogin} handleShowSignup={handleShow} /> */}
    </Fragment>;
};

export default HomePage;