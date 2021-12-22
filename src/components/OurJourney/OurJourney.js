import { useState } from 'react';

import { Container, Row, Col } from "react-bootstrap";
import { FaAddressBook, FaRegHeart } from "react-icons/fa";
import releaseSvg from './assets/icons/release.svg';
import betaSvg from './assets/icons/beta-version.svg';
import alphaSvg from './assets/icons/alpha-version.svg';

import './OurJourney.scss';

const HowItWorks = () => {
  const [ show, setShow ] = useState(false); // show/hide the create issue form

  const items = [
    {
      header: 1,
      content: {
        icon: <img src={alphaSvg} width="40px" height="40px" />,
        title: "Alpha Version",
        text: "As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution."
      }
    },
    {
      header: 2,
      content: {
        icon: <img src={betaSvg} width="40px" height="40px" />,
        title: "Beta Version",
        text: "Our smart software matches your cause to the people, organizations, and other resources that can help make it happen.  They receive notifications through our platform and an invitation to engage with you."
      }
    },
    {
      header: 3,
      content: {
        icon: <img src={releaseSvg} width="40px" height="40px" />,
        title: "Public Release",
        text: "Once your issue is matched, you have received help, and the issue is resolved, the issue would be closed."
      }
    }
  ];
    const [header, setHeader] = useState(items[0].header);
  const [content, setContent] = useState(items[0].content);

  return (
    <section
      className='our-journey'
    >
      {/* Desktop view */}
      <div className="d-none d-sm-block">
        <h2>Our journey</h2>

        <div className="box">
          <Container className="container">
            <div className="container1">
              <ul className="progressbar">
                <li onClick={() => setShow(true)}>
                  <img src={alphaSvg} width="40px" height="40px" />
                </li>
                <li>
                  <img src={betaSvg} width="40px" height="40px" />
                </li>
                <li>
                  <img src={releaseSvg} width="40px" height="40px" />
                </li>
              </ul>
            </div>

            <Row>
              <Col>
                <div className="item">
                  <h5>Alpha Version</h5>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </Col>

              <Col>
                <div className="item">
                  <h5>Beta Version</h5>
                  <div>Our smart software matches your cause to the people, organizations, and other resources that can help make it happen.  They receive notifications through our platform and an invitation to engage with you.</div>
                </div>
              </Col>

              <Col>
                <div className="item">
                  <h5>Public Release</h5>
                  <div>Once your issue is matched, you have received help, and the issue is resolved, the issue would be closed.</div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>




      {/* Mobile view */}
      <div className="d-sm-none mobile">
        <h2>Our Journey</h2>
        <div className="content">
          {content &&
            <div className="item">
              <li>
                {content.icon}
              </li>
              <h5>{content.title}</h5>
              <div className="text">{content.text}</div>
            </div>
          }
        </div>
        <div className='dots'>
          {items.map(obj => (
              <button 
                  className={header === obj.header ? 'dot selected' : 'dot'}
                  onClick={() => {
                      setHeader(obj.header);
                      setContent(obj.content);
                  }}
              ></button>
          ))}
        </div>
      </div>

    </section>
  )
}


export default HowItWorks;