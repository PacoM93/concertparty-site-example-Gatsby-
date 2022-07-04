import React from "react"
import { Form, Button } from "react-bootstrap"

const LoginForm = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        console.log('Login successful')
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit" onClick={handleLogin}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
