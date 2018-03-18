import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./LoginView.scss";
import AnimatedIcon from "../IconComps.jsx";

const FormItem = Form.Item;
const USERNAME = "Username";
const PASSWORD = "Password";
const LOGIN = "Login";

const LoginView = props => {
  const { getFieldDecorator } = props.form;
  return (
    <div style={{ height: "100%" }}>
      <div className="icon-small" />
      <div className="login">
        <div className="login-container">
          <h2>Login</h2>
          <Form onSubmit={props.onSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create()(LoginView);

export default WrappedNormalLoginForm;
