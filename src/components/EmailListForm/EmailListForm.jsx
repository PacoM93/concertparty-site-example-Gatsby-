import React from "react"

import { Form, Col, Button } from "react-bootstrap"
import './emailListForm.scss'

const EmailListForm = () => {
  return (
    <div className="email-list-form">
      <Form>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>I'm</Form.Label>
              <Form.Control size="sm" placeholder="name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Send me updates here</Form.Label>
              <Form.Control size="sm" placeholder="email" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="primary"
              type="submit"
              size="sm"
              style={{ marginTop: "2rem" }}
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default EmailListForm
