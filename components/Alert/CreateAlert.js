import React,{useState,useRef} from 'react'
//import {} from 'semantic-ui-react';
import { Form, Button, Image, Divider, Message, Icon } from "semantic-ui-react";
import uploadPic from "../../utils/uploadPicToCloudinary";
import { submitNewLend } from "../../utils/alertActions";

function CreateAlert({ user, setAlerts }) {
  const [newAlert, setNewAlert] = useState({ text: "", location: ""});

  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const [error, setError] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleChange = e => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewAlert(prev => ({ ...prev, [name]: value }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await uploadPic(media);
      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await submitNewLend(
      newAlert.text,
      //newLend.petname,
      newAlert.location,
      picUrl,
      setAlerts,
      setNewAlert,
      setError
    );

    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return (
    <>
      <Form error={error !== null} onSubmit={handleSubmit}>
        <Message
          error
          onDismiss={() => setError(null)}
          content={error}
          header="Oops!"
        />

        <Form.Group>
          <Image src={user.profilePicUrl} circular avatar inline />
          <Form.TextArea
            placeholder="Whats Happening"
            name="text"
            value={newAlert.text}
            onChange={handleChange}
            rows={4}
            width={14}
          />
        </Form.Group>
        {/* <Form.Group>
        <Form.Input
            value={newLend.petname}
            name="petname"
            onChange={handleChange}
            label="Add Petname"
            placeholder="Type your petName"
          />
        </Form.Group> */}

        <Form.Group>
          <Form.Input
            value={newAlert.location}
            name="location"
            onChange={handleChange}
            label="Add Location"
            icon="map marker alternate"
            placeholder="Want to add Location?"
          />
          
          
          <input
            ref={inputRef}
            onChange={handleChange}
            name="media"
            style={{ display: "none" }}
            type="file"
            accept="image/*"
          />
        </Form.Group>

        <div
          onClick={() => inputRef.current.click()}
          style={addStyles()}
          onDrag={e => {
            e.preventDefault();
            setHighlighted(true);
          }}
          onDragLeave={e => {
            e.preventDefault();
            setHighlighted(false);
          }}
          onDrop={e => {
            e.preventDefault();
            setHighlighted(true);

            const droppedFile = Array.from(e.dataTransfer.files);

            setMedia(droppedFile[0]);
            setMediaPreview(URL.createObjectURL(droppedFile[0]));
          }}>
          {media === null ? (
            <Icon name="plus" size="big" />
          ) : (
            <>
              <Image
                style={{ height: "150px", width: "150px" }}
                src={mediaPreview}
                alt="AlertImage"
                centered
                size="medium"
              />
            </>
          )}
        </div>
        <Divider hidden />

        <Button
          circular
          disabled={newAlert.text === "" || loading}
          content={<strong>Submit</strong>}
          style={{ backgroundColor: "#1DA1F2", color: "white" }}
          icon="send"
          loading={loading}
        />
      </Form>
      <Divider />
    </>
  );
}



export default CreateAlert
