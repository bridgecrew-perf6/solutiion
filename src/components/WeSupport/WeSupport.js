import { LazyLoadImage } from 'react-lazy-load-image-component';
import healthcareImage from './assets/images/healthcare.jpg';
import civil_rightsImage from './assets/images/healthcare.jpg';

import './WeSupport.scss';

const images = [
    { 
        className: 'healthcare',
        altTag: 'healthcare professional giving a vaccine',
        header: 'Healthcare',
        source: healthcareImage,
    },
    {
        className: 'civil-rights',
        altTag: 'protester using a megaphone',
        header: 'Civil rights',
        source: healthcareImage,
    },
    {
        className: 'employment',
        altTag: 'a group of coworkers in a meeting',
        header: 'Employment',
        source: healthcareImage,
    },
    {
        className: 'economy',
        altTag: 'top view of people in a meeting',
        header: 'Economy',
        source: healthcareImage,
    },
    {
        className: 'environment',
        altTag: 'protester holding a sign saying "act now or swim later"',
        header: 'Environment',
        source: healthcareImage,
    },

    {
        className: 'poverty',
        altTag: 'beggar receiving money from a passer by',
        header: 'Poverty',
        source: healthcareImage,
    },
    {
        className: 'education',
        altTag: 'group of children in a classroom',
        header: 'Education',
        source: healthcareImage,
    },
    {
        className: 'childrens-rights',
        altTag: 'group of children sitting together',
        header: "Children's rights",
        source: healthcareImage,
    },
    {
        className: 'animals',
        altTag: 'man with puppy in hands',
        header: 'Animals',
        source: healthcareImage,
    },
    {
        className: 'emergency-safety',
        altTag: 'firemen putting out a building fire',
        header: 'Emergency & safety',
        source: healthcareImage,
    },

    {
        className: 'justice-legal',
        altTag: 'statuette of Lady Justice',
        header: 'Justice & legal',
        source: healthcareImage,
    },
    {
        className: 'technology',
        altTag: 'man giving a presentation',
        header: 'Technology',
        source: healthcareImage,
    },
    {
        className: 'art-culture',
        altTag: 'close up of a woman in a decorated hat',
        header: 'Art & culture',
        source: healthcareImage,
    },
    {
        className: 'sports-recreation',
        altTag: 'confident women in a fitness studio',
        header: 'Sports & recreation',
        source: healthcareImage,
    },
    {
        className: 'other-help',
        altTag: 'person in a psychotherapy appointment',
        header: 'Other help',
        source: healthcareImage,
    },
];

const WeSupport = ({ show, handleShow }) => {

    return (
        <section className='we-support'>
            {/* <h2>We support</h2> */}
            {/* <h2>Who we help</h2> */}
            <h2>What we offer</h2>

            <div className='photos'>

                {images.map(image => (
                    <ImageCard
                        key={image.className}
                        className={image.className}
                        header={image.header}
                        source={image.source}
                        altTag={image.altTag}
                        handleShow={handleShow}
                    />
                ))}

            </div>
        </section>
    );
};

const ImageCard = ({ key, className, header, source, altTag, handleShow }) => {
    return (
        <div
            key={key}
            className={`photo-container ${className}`}
            onClick={() => handleShow({header, source, altTag})}
        >
            <LazyLoadImage
                src={source}
                alt={altTag}
            />
            <h4>{header}</h4>
        </div>
    );
};

export default WeSupport;
