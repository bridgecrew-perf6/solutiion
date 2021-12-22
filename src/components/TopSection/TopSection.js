import './TopSection.scss';
import logo from "./assets/vectors/speaker.png";

import * as React from "react";

const TopSection = () => {
    let video = "https://www.youtube.com/embed/yeLyk4dhg3A?autoplay=1";

    const [showVideo, setshowVideo] = React.useState(false)


    const play_yt_video = () => {
        setshowVideo(true);
        // alert("clicked");
    };

    const stop_yt_video = () => {
        setshowVideo(false);
        // alert("clicked");
    };


    return (

        <section className="top-section">

            <div className="row main_frame">

                <div className="col-md-6 box-1">
                    <div className="a">
                        <div className="b">
                            <div className="c">
                                <span className="c-text text-center"> Solution. <span>for</span> change. </span>

                                <div className="btn-group">

                                    <button className="c-button fund-us-button">Fund us</button>


                                    <button className="c-button get-involved-button">Get involved</button>


                                </div>
                            </div>
                            <div className="d">
                                <div className="d-cont">
                                    <div className="cont-vector">
                                        <img src={logo} alt="nice"/>
                                    </div>
                                    <div className="cont-text">
                                        Solution crowdfunding now open!
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 text-center box-2">
                    {!showVideo ? <div className="a">
                        <div className="b" onClick={play_yt_video}/>
                    </div> : null}

                    {showVideo ?
                        <iframe  title="Queen - We are the Champions" className="yt-video" src={video} frameBorder="0"
                                allowFullScreen/> : null}
                    {showVideo ? <div className="close_yt-video" onClick={stop_yt_video}> X </div> : null}

                </div>
            </div>
        </section>
    );
}

export default TopSection;