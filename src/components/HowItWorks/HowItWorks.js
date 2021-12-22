import { useState } from 'react';

// import IssueForm from "./IssueForm";

import { Container, Row, Col, Tabs as Tabss, Tab as Tabb } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";

import CreateIssue from './assets/images/create_issue.png';
import Image from '../WhoWeHelp/assets/images/business.jpg';

import './HowItWorks.scss';

import { Tabs, Carousel } from 'antd';

const { TabPane } = Tabs;

const HowItWorks = () => {
  const [ show, setShow ] = useState(false); // show/hide the create issue form

  const willingToHelp = [
    {
      header: 1,
      content: (
        <Container>
          <Row>
            <Col>
              <div className="left">
                <h4 className="title">
                  <div className="icon"><FaAddressBook /></div>
                  <div className="text">Find an issue</div>
                </h4>
                <div className="content">
                  <p></p>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img src={CreateIssue} width="272px" height="322px" />
              </div>
            </Col>
          </Row>
        </Container>
      )
    },
    {
      header: 2,
      content: (
        <Container>
          <Row>
            <Col>
              <div className="left">
               <h4 className="title">
                  <div className="icon"><FaAddressBook /></div>
                  <div className="text">Contact people & offer help</div>
                </h4>
                <div className="content">
                  <p></p>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img src={CreateIssue} width="272px" height="322px" />
              </div>
            </Col>
          </Row>
        </Container>
      )
    },
    {
      header: 3,
      content: (
        <Container>
          <Row>
            <Col>
              <div className="left">
                <h4 className="title">
                  <div className="icon"><FaAddressBook /></div>
                  <div className="text">Resolve bonuses after help</div>
                </h4>
                <div className="content">
                  <p></p>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img src={CreateIssue} width="272px" height="322px" />
              </div>
            </Col>
          </Row>
        </Container>
      )
    }
  ];

  const lookingHelp = [
    {
      header: 1,
      content: (
        <Container>
          <Row>
            <Col>
              <div className="left">
                <h4 className="title">
                  <div className="icon"><FaAddressBook /></div>
                  <div className="text">Create an Issue</div>
                </h4>
                <div className="content">
                  <p></p>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img src={CreateIssue} width="272px" height="322px" />
              </div>
            </Col>
          </Row>
        </Container>
      )
    },
    {
      header: 2,
      content: (
        <Container>
          <Row>
            <Col>
              <div className="left">
               <h4 className="title">
                  <div className="icon"><FaAddressBook /></div>
                  <div className="text">Contact people</div>
                </h4>
                <div className="content">
                  <p></p>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img src={CreateIssue} width="272px" height="322px" />
              </div>
            </Col>
          </Row>
        </Container>
      )
    },
    {
      header: 3,
      content: (
        <Container>
          <Row>
            <Col>
              <div className="left">
                <h4 className="title">
                  <div className="icon"><FaAddressBook /></div>
                  <div className="text">Resolve problem</div>
                </h4>
                <div className="content">
                  <p></p>
                  <div>As someone in need of help - you simply create a post, which includes details about your cause, and the assistance you need.  This post is published to Solution.</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img src={CreateIssue} width="272px" height="322px" />
              </div>
            </Col>
          </Row>
        </Container>
      )
    }
  ];

  const [header, setHeader] = useState(lookingHelp[0].header);
  const [content, setContent] = useState(lookingHelp[0].content);

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

  const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <section
      className='how-it-works'
    >
      <h2>How it works?</h2>
      {/* <Tabss defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tabb eventKey="home" title="Home">
          <div>{content}</div>
          <div className='dots'>
              {lookingHelp.map(obj => (
                  <button 
                      className={header === obj.header ? 'dot selected' : 'dot'}
                      onClick={() => {
                          setHeader(obj.header);
                          setContent(obj.content);
                      }}
                  ></button>
              ))}
          </div>
        </Tabb>
        <Tabb eventKey="profile" title="Profile">
          <div>{content}</div>
          <div className='dots'>
              {lookingHelp.map(obj => (
                  <button 
                      className={header === obj.header ? 'dot selected' : 'dot'}
                      onClick={() => {
                          setHeader(obj.header);
                          setContent(obj.content);
                      }}
                  ></button>
              ))}
          </div>
        </Tabb>
      </Tabss>
 */}
      <Tabs defaultActiveKey="1" centered tabBarGutter={300}>
        <TabPane tab="For people looking for help" key="1">
          <Carousel autoplay dotPosition="bottom">
            <div className="item">
              <div>{lookingHelp[0].content}</div>
            </div>
            <div className="item">
              <div>{lookingHelp[1].content}</div>
            </div>
            <div className="item">
              <div>{lookingHelp[2].content}</div>
            </div>
            {/* <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div> */}
          </Carousel>
        </TabPane>
        <TabPane tab="For people willing to help" key="2">
          <Carousel autoplay dotPosition="bottom">
            <div className="item">
              <div>{willingToHelp[0].content}</div>
            </div>
            <div className="item">
              <div>{willingToHelp[1].content}</div>
            </div>
            <div className="item">
              <div>{willingToHelp[2].content}</div>
            </div>
            {/* <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div> */}
          </Carousel>
        </TabPane>
      </Tabs>

      {/* <IssueForm value={false} show={show} setShow={setShow} /> */}
    </section>
  )
}


export default HowItWorks;