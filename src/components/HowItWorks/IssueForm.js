import { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Menu, MenuItem, Typography } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import { Cascader } from 'antd';

import 'antd/dist/antd.css';

import './HowItWorks.scss';

const categories = [
  {
    label: "Human Rights",
    children: [
      {label: "Civil Rights"},
      {label: "Political Rights"},
      {label: "Economic Rights"},
      {label: "Social Rights"},
    ]
  },
  {
    label: "Animal Rights",
    children: []
  },
  {
    label: "Healthcare",
    children: []
  },
  {
    label: "Employment",
    children: []
  },
  {
    label: "Education",
    children: []
  },
  {
    label: "Poverty",
    children: []
  }
];

const helpTypes = [
  {
    label: "Human Rights",
    children: [
      {label: "Civil Rights"},
      {label: "Political Rights"},
      {label: "Economic Rights"},
      {label: "Social Rights"},
    ]
  },
  {
    label: "Animal Rights",
    children: []
  },
  {
    label: "Healthcare",
    children: []
  },
  {
    label: "Employment",
    children: []
  },
  {
    label: "Education",
    children: []
  },
  {
    label: "Poverty",
    children: []
  }
];

const priorities = [
  {
    label: "Human Rights",
    children: [
      {label: "Civil Rights"},
      {label: "Political Rights"},
      {label: "Economic Rights"},
      {label: "Social Rights"},
    ]
  },
  {
    label: "Animal Rights",
    children: []
  },
  {
    label: "Healthcare",
    children: []
  },
  {
    label: "Employment",
    children: []
  },
  {
    label: "Education",
    children: []
  },
  {
    label: "Poverty",
    children: []
  }
];

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const IssueForm = ({ value, show, setShow }) => {
    // const [ show, setShow ] = useState(false);
    const [ validated, setValidated ] = useState(false);
    const [ form, setForm ] = useState({});
    const [ errors, setErrors ] = useState({});

    const [menuPosition, setMenuPosition] = useState(null);

    const handleRightClick = (event: React.MouseEvent) => {
      if (menuPosition) {
        return;
      }
      event.preventDefault();
      setMenuPosition({
        top: event.pageY,
        left: event.pageX
      });
    };
  
    const handleItemClick = (event: React.MouseEvent) => {
      setMenuPosition(null);
    };




    const setField = (field, value) => {
      setForm({
        ...form,
        [field]: value
      })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
      const formm = event.currentTarget;
      // console.log(formm);
      // console.log(formm.checkValidity());
      console.log(form);
      if (formm.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    const onChange = (value) => {
      console.log(value);
    }

    return (
      <div className="issue-form2">
        {/* <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button> */}

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          className="issue-form"
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Create an issue
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form /*noValidate*/ validated={validated} onSubmit={handleSubmit}>
              <Cascader options={options} onChange={onChange} placeholder="Please select" />
              <Form.Group className="mb-5" controlId="title">
                <Form.Label>Title*</Form.Label>
                <Form.Control
                  placeholder="Add Title"
                  onChange={ e => setField('title', e.target.value) }
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Category*</Form.Label>
                    <Form.Select
                      onChange={ e => setField('category2', e.target.value) }
                      defaultValue="Select category"
                      required
                      onClick={handleRightClick}
                    >
                      <Menu
                        open={!!menuPosition}
                        onClose={() => setMenuPosition(null)}
                        anchorReference="anchorPosition"
                        anchorPosition={menuPosition}
                      >
                        <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
                        <MenuItem onClick={handleItemClick}>Button 2</MenuItem>
                        <NestedMenuItem
                          label="Button 3"
                          parentMenuOpen={!!menuPosition}
                          onClick={handleItemClick}
                        >
                          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
                          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
                          <NestedMenuItem
                            label="Sub-Button 3"
                            parentMenuOpen={!!menuPosition}
                            onClick={handleItemClick}
                          >
                            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
                            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
                          </NestedMenuItem>
                        </NestedMenuItem>
                        <MenuItem onClick={handleItemClick}>Button 4</MenuItem>
                        <NestedMenuItem
                          label="Button 5"
                          parentMenuOpen={!!menuPosition}
                          onClick={handleItemClick}
                        >
                          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
                          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
                        </NestedMenuItem>
                      </Menu>
                    </Form.Select>
                  </Form.Group>

              <Row>
                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Category*</Form.Label>
                    <Form.Select
                      onChange={ e => setField('category', e.target.value) }
                      defaultValue="Select category"
                      required
                    >
                      <option>Select category</option>
                      {categories && categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.label} value={category.label}>{category.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Help type</Form.Label>
                    <Form.Select
                      onChange={ e => setField('helptype', e.target.value) }
                      defaultValue="Help type"
                    >
                      <option value="">Help type</option>
                      {helpTypes && helpTypes.length > 0 &&
                        helpTypes.map((helpType) => (
                          <option key={helpType.label} value={helpType.label}>{helpType.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select
                      onChange={ e => setField('priority', e.target.value) }
                      defaultValue="Priority"
                    >
                      <option value="">Priority</option>
                      {priorities && priorities.length > 0 &&
                        priorities.map((priority) => (
                          <option key={priority.label} value={priority.label}>{priority.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Start date</Form.Label>
                    <Form.Select
                      onChange={ e => setField('startDate', e.target.value) }
                      defaultValue="Start date"
                    >
                      <option value="">Start date</option>
                      {categories && categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.label} value={category.label}>{category.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>End date</Form.Label>
                    <Form.Select
                      onChange={ e => setField('endDate', e.target.value) }
                      defaultValue="End date"
                    >
                      <option value="">End date</option>
                      {categories && categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.label} value={category.label}>{category.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Recurrence</Form.Label>
                    <Form.Select
                      onChange={ e => setField('recurrence', e.target.value) }
                      defaultValue="Recurrence"
                    >
                      <option value="">Recurrence</option>
                      {priorities && priorities.length > 0 &&
                        priorities.map((priority) => (
                          <option key={priority.label} value={priority.label}>{priority.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Assignee</Form.Label>
                    <Form.Select
                      onChange={ e => setField('assignee', e.target.value) }
                      defaultValue="Select assignee"
                    >
                      <option value="">Select assignee</option>
                      {categories && categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.label} value={category.label}>{category.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      onChange={ e => setField('status', e.target.value) }
                      defaultValue="Select status"
                    >
                      <option value="">Select status</option>
                      {categories && categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.label} value={category.label}>{category.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={ e => setField('description', e.target.value) }
                />
              </Form.Group>

              <Row>
                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Location</Form.Label>
                    <Form.Select
                      onChange={ e => setField('location', e.target.value) }
                      defaultValue="Select location"
                    >
                      <option value="">Select location</option>
                      {categories && categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.label} value={category.label}>{category.label}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formGridState" className="mb-5">
                    <Form.Label>Add Files</Form.Label>
                    <Form.Control
                      onChange={ e => setField('addFiles', e.target.value) }
                      placeholder="Add Files"
                    />
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group controlId="formFile" className="mb-5">
                    <Form.Label>Add Files</Form.Label>
                    <Form.Control
                      onChange={ e => setField('addFiles2', e.target.value) }
                      type="file"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-5" controlId="switch">
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Create another issue"
                  onChange={ e => setField('anotherIssue', e.target.checked) }
                  // onChange={ e => console.log(e) }
                />
              </Form.Group>

              <div className="btn-block">
                <Button variant="primary" type="submit" className="dark-bg">
                  Publish
                </Button>
                <Button variant="primary" onClick={() => setShow(false)} className="light-bg">
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

export default IssueForm;