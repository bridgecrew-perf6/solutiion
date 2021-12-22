import { useState } from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import youImage from './assets/images/you.jpg';
import philanthropistsImage from './assets/images/philanthropist.jpg';
import influencersImage from './assets/images/influencer.jpg';
import organizationsImage from './assets/images/organization.jpg';
import businessesImage from './assets/images/business.jpg';
import communitiesImage from './assets/images/community.jpg';

import './WhoWeHelp.scss';

const WhoWeHelp = () => {

    // =========== FIRST SUB SECTION INFO START ===============================================================
    const firstSubSectionArr = [
        {
            header: 'You',
            text: 'Your time and expertise can bring about positive change for the causes that matter to you.  Solution amplifies your cause, connects you to projects, other like-minded people and organizations where your contribution can make a real difference.',
            image: {
                source: youImage,
                tag: ''
            }
        },
        {
            header: 'Philanthropists',
            text: 'Our platform supports the valuable contribution that philanthropists make to the world.  Smart tools enable connections to be established between philanthropists and the causes that matter to them, ultimately driving positive change for the world.',
            image: {
                source: philanthropistsImage,
                tag: ''
            }
        },
        {
            header: 'Influencers',
            text: 'Influencers by definition already have significant reach to distribute content relating to their chosen causes to their followers.  Solution amplifies this reach by providing a publishing platform, alongside smart tools that match their interests to new and upcoming projects.',
            image: {
                source: influencersImage,
                tag: ''
            }
        }
    ];
    // =========== FIRST SUB SECTION INFO END ===============================================================

    // ============ SECOND SUB SECTION INFO START ===========================================================
    const secondSubSectionArr = [
        {
            header: 'Organizations',
            text: 'Amplify the good work of your organization and access more volunteers, more influencers, and more funding that will help you achieve your goals.',
            image: {
                source: organizationsImage,
                tag: ''
            }
        },
        {
            header: 'Businesses',
            text: 'Customers and investors increasingly expect value exchange from the businesses that they interact with.  Solution assists CSR programs by providing access to projects that align with the business values and contributes to the support of local communities.',
            image: {
                source: businessesImage,
                tag: ''
            }
        },
        {
            header: 'Communities',
            text: 'Communities rely on the good will of local people to thrive.  Solution enables easier connections between causes, and the people, funding and organizations that can help make them happen.',
            image: {
                source: communitiesImage,
                tag: ''
            }
        }
    ];
    // ============ SECOND SUB SECTION INFO END ===========================================================

    return (
        <section className='who-we-help' id='who-we-help'>
            <h2>Who we help</h2>
            {/* <h2>What we offer</h2> */}

            <SubSection sectionArr={firstSubSectionArr} />

            <SubSection sectionArr={secondSubSectionArr} />
        </section>
    );
}

const SubSection = ({ sectionArr }) => {
    const [header, setHeader] = useState(sectionArr[0].header);
    const [text, setText] = useState(sectionArr[0].text);

    return (
        <div className='sub-section'>
            {/* ----- IF REACT SLICK ----- */}
            <ReactSlickCarousel sectionArr={sectionArr} />

            <div className='photos'>
                {sectionArr.map(obj => (
                    <div
                        key={obj.header}
                        className='photo-wrapper'
                        onClick={() => {
                            setHeader(obj.header);
                            setText(obj.text);
                        }}
                    >
                        <div className='photo-container '>
                            <LazyLoadImage
                                className={`${obj.header.toLowerCase()}-image who-we-help-photo`}
                                src={obj.image.source}
                                alt=''
                            />
                        </div>
                        <h4 className='photo-title'>{obj.header}</h4>
                        <div className={header === obj.header ? 'triangle-indicator selected' : 'triangle-indicator'}></div>
                    </div>
                ))}
            </div>

            <div className='text-container'>
                <h3>{header}</h3>
                <p>{text}</p>
            </div>

            <div className='dots'>
                {sectionArr.map(obj => (
                    <button 
                        className={header === obj.header ? 'dot selected' : 'dot'}
                        onClick={() => {
                            setHeader(obj.header);
                            setText(obj.text);
                        }}
                    ></button>
                ))}
            </div>
        </div>
    );
}

// REACT SLICK CAROUSEL
const ReactSlickCarousel = ({ sectionArr }) => {
    const settings = {
        className: "center",
        centerMode: true,
        // centerPadding: '50px',
        infinite: true,
        // arrows: false,
        dots: true,
        appendDots: dots => (
            <ul
                style={{
                    display: 'flex'
                }}
            >
                {dots}
            </ul>
        ),
        customPaging: () => {
            return (
                <div className='dot'></div>
            )
        },
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    arrows: true,
                }
            },
            // {
            //     breakpoint: 1,
            //     settings: {
            //         arrows: true,
            //         slidesToScroll: 1
            //     }
            // }
        ],
        slidesToShow: 1,
        speed: 500
    };

    return (
        <Slider {...settings}>
            {sectionArr.map(obj => (
                <CustomSlide
                    key={obj.header}
                    header={obj.header}
                    text={obj.text}
                    image={obj.image}
                // style={{
                //     width: '276px'
                // }}
                />
            ))}
        </Slider>
    );
}

const CustomSlide = ({ header, text, image }) => {
    return (
        <div
            className='card-wrapper'
        // style={{ 
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // }}
        >
            <div
                className='card'
                style={{
                    margin: '0 auto'
                }}
                // onClick={}
            >
                <div className='photo-container '>
                    <LazyLoadImage
                        className={`${header.toLowerCase()}-slick-image who-we-help-photo`}
                        src={image.source}
                        alt=''
                    />
                </div>
                <h4 className='photo-title'>{header}</h4>
                <p>{text}</p>
            </div>
        </div>

    )
}

export default WhoWeHelp;
