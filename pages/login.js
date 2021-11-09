import React, { useState, useEffect } from "react";
import { Form, Button, Message, Segment, Divider,Grid,Header,Image } from "semantic-ui-react";
import { loginUser } from "../utils/authUser";
import { HeaderMessage, FooterMessage } from "../components/Common/WelcomeMessage";
import cookie from "js-cookie";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";

import CustomDotGroup from "../components/Common/CustomDotGroup";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const isUser = Object.values({ email, password }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();

    await loginUser(user, setErrorMsg, setFormLoading);
  };

  useEffect(() => {
    document.title = "Welcome Back";
    const userEmail = cookie.get("userEmail");
    if (userEmail) setUser(prev => ({ ...prev, email: userEmail }));
  }, []);

  return (
    <>
    <div style={{
      backgroundImage : "Logo.png",
      backgroundSize : "cover",
      padding : "5%"
  }}>
    
    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Hello, world!</Header>
          <p>
            This is a template for a simple marketing or informational website. It includes a large
            callout called a jumbotron and three supporting pieces of content. Use it as a starting
            point to create something more unique.
          </p>
          <Button color='blue'>Learn more &raquo;</Button>
        </Message>
      </Grid.Column>
    </Grid.Row>
    <CarouselProvider
    naturalSlideWidth={2}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://lorempixel.com/800/800/cats/0" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://lorempixel.com/800/800/cats/1" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://lorempixel.com/800/800/cats/2" />
      </Slide>
    </Slider>
    
    <Divider />
    <CustomDotGroup slides={3} />
    
  </CarouselProvider>
      <HeaderMessage />
      

      <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />

        <Segment>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            fluid
            icon="envelope"
            iconPosition="left"
            type="email"
          />

          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword)
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
            required
          />

          <Divider hidden />
          <Button
            icon="signup"
            content="Login"
            type="submit"
            color="orange"
            disabled={submitDisabled}
          />
        </Segment>
      </Form>

      <FooterMessage />
      </div>
    </>
  );
}

export default Login;
