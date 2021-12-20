import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Message, Segment, Divider,Modal ,Header,Icon,List,Checkbox} from "semantic-ui-react";
import CommonInputs from "../components/Common/CommonInputs";
import ImageDropDiv from "../components/Common/ImageDropDiv";
import { HeaderMessage, FooterMessage } from "../components/Common/WelcomeMessage";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { registerUser } from "../utils/authUser";
import uploadPic from "../utils/uploadPicToCloudinary";
import Link from 'next/link'
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    address:"",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });

  const { name, email, password, bio } = user;

  const handleChange = e => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => ({ ...prev, [name]: value }));
  };

  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [open, setOpen] = React.useState(false)

  const [username, setUsername] = useState("");
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const isUser = Object.values({ name, email, password, bio }).every(item =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);
    try {
      cancel && cancel();

      const CancelToken = axios.CancelToken;

      const res = await axios.get(`${baseUrl}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (errorMsg !== null) setErrorMsg(null);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => ({ ...prev, username }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
      
    }
    setUsernameLoading(false);
  };

  useEffect(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = async e => {
    e.preventDefault();
    

    let profilePicUrl;
    if (media !== null) {
      profilePicUrl = await uploadPic(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error Uploading Image");
    }

    await registerUser(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return (
    <>
      <HeaderMessage />
      <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />

        <Segment>
          <ImageDropDiv
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            setMedia={setMedia}
            inputRef={inputRef}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            handleChange={handleChange}
          />
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            fluid
            icon="user"
            iconPosition="left"
          />

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

          <Form.Input
            loading={usernameLoading}
            error={!usernameAvailable}
            required
            label="Username"
            placeholder="Username"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
              if (regexUserName.test(e.target.value)) {
                setUsernameAvailable(true);
              } else {
                setUsernameAvailable(false);
              }
            }}
            fluid
            icon={usernameAvailable ? "check" : "close"}
            iconPosition="left"
          />

          <CommonInputs
            user={user}
            showSocialLinks={showSocialLinks}
            setShowSocialLinks={setShowSocialLinks}
            handleChange={handleChange}
          />
          
          <Modal
      closeIcon
      open={open}
      trigger={<Checkbox label="View Terms and Conditions" defaultChecked><a></a></Checkbox>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='info' content='Terms & Conditions' />
      <Modal.Content>
      <List ordered>
      <List.Item>Any dispute/s between the Lender, Borrower and any third party is to be resolved by the Lender and/or Borrower. Voiceless Saints will not be responsible for finding a solution, settling, and/or offering an outcome to any issue, accident, incident, injury or difficulty that has occurred prior, during, or post creating a profile on the Voiceless Saints Site</List.Item>
      <br />
      <List.Item>Voiceless Saints do their best to check every profile that is created via the Site, this is a lengthy process so please understand that we must first complete this process before we can provide you with any information relating to a potential Lender and/or Borrower.</List.Item>
      <br/>
      <List.Item>
      Voiceless Saints is not required to find lending and/or borrowing opportunities for non-registered Members.
       
      </List.Item>
      <br />
      <List.Item>
      Voiceless Saints expects all Members to be respectful, truthful and honest when communicating and negotiating terms with other Members and with Voiceless Saints staff.
      </List.Item>
      <br />
      <List.Item>
      If you purposely provide Voiceless Saints with incorrect information, or you provide Voiceless Saints with a reason to deem you untrustworthy (the basis of the reason is determined by Voiceless Saints), understand that you will not be refunded and you will no longer be part of the Voiceless Saints community. 
      </List.Item>
      <br />
      <List.Item>Voiceless Saints do not do Police Checks. If you would like a Police Check completed prior to lending and/or borrowing this is up to you to arrange and pay for.</List.Item>
    </List>
    <br />
    <List.Item>
    If you have any questions or concerns please feel free to contact us via email (voiceless_Saints@gmail.com). 
      </List.Item>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' href="/">
          <Icon name='remove' /> Disagree
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Agree
        </Button>
      </Modal.Actions>
    </Modal>

          <Divider hidden />
          <Button
            icon="signup"
            content="Signup"
            type="submit"
            color="orange"
            disabled={submitDisabled || !usernameAvailable}
          />
        </Segment>
      </Form>
      
      <FooterMessage />
    </>
  );
}

export default Signup;
