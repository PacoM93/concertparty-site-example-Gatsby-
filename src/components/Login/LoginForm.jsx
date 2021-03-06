import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { navigate } from "gatsby"

const LoginForm = () => {
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = event => {
    event.preventDefault()
    setIsAuth(true)
    setTimeout(() => {
      navigate("/dashboard")
    }, 3000)
  }

  const loginBtnState = isAuth ? (
    <>
      <span className="spinner-grow spinner-grow-sm"></span> Loading...
    </>
  ) : (
    "Login"
  )

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
      <Button
        variant="dark"
        type="submit"
        onClick={handleLogin}
        disabled={isAuth}
      >
        {loginBtnState}
      </Button>
    </Form>
  )
}

export default LoginForm
