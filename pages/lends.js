import React,{useEffect,useState,useRef} from 'react'
import { Header, Icon, Segment,Divider,Button,Modal} from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import CreateLend from '../components/Lend/CreateLend';
import CardLend from '../components/Lend/CardLend';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
//import CardLend from '../components/Lend/CardLend';
//import {Segment} from "semantic-ui-react";
import {parseCookies} from "nookies";
import {NoLends} from "../components/Layout/NoData";
import {PostDeleteToastr} from "../components/Layout/Toastr";

import { Form,  Image, Message} from "semantic-ui-react";
import uploadPic from "../utils/uploadPicToCloudinary";
import { submitNewLend } from "../utils/lendActions";

function Lends({user,lendsData,errorLoading}) {
console.log(lendsData)
const [lends,setLends]=useState(lendsData);
const [showToastr,setShowToastr]=useState(false);
const [open, setOpen] = useState(false);
useEffect(()=>{
showToastr && setTimeout(()=>setShowToastr(false),3000)
},[showToastr]);
if(lends.length===0 || errorLoading)
   return <NoLends />

   const [newLend, setNewLend] = useState({ text: "", location: "",petname:"" });

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
 
     setNewLend(prev => ({ ...prev, [name]: value }));
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
       newLend.text,
       newLend.petname,
       newLend.location,
       picUrl,
       setLends,
       setNewLend,
       setError
     );
 
     setMedia(null);
     setMediaPreview(null);
     setLoading(false);
   };
   



 return (
   <>
   {showToastr && <PostDeleteToastr />}
   <div>
      <Header as='h2' color="blue" icon textAlign='center'>
      <Icon name='home' circular />
      <Header.Content color="green">Want a Foster Home for your pet?</Header.Content>
    </Header>
    <Segment  circular style={{fontSize:'1.5em',color:'black',fontFamily:'cursive',fontWeight:'bolder',backgroundColor:'#F5FFFA'}}>
    Share the love of pets
    Connecting dog owners with local dog borrowers for
    walks, weekends and holidays.
    </Segment>
    <Divider />
    
    <Modal
    basic
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    size='small'
    trigger={<Button attached={top} size='huge' color='teal'>Create a lend Request</Button>}
  >
    <Header icon>
      <Icon name='bomb'/>
      Lend Request
    </Header>
    <Modal.Content>
    <Form error={error !== null} onSubmit={handleSubmit}>
    <Message
      error
      onDismiss={() => setError(null)}
      content={error}
      header="Oops!"
    />
    <p style={{fontSize:'1.5em',fontWeight:'bold',color:'white'}}>Add details of lend request</p>
    <Form.Group>
      <Form.TextArea
        placeholder="Whats Happening"
        name="text"
        value={newLend.text}
        onChange={handleChange}
        rows={3}
        width={14}
      />
    </Form.Group>
    
    <p style={{fontSize:'1.5em',fontWeight:'bold',color:'white'}}>Add your pet name</p>
    <Form.Group>
    <Form.Input
        value={newLend.petname}
        name="petname"
        onChange={handleChange}
        width={10}
        placeholder="Type your petName"
      />
    </Form.Group>
    <p style={{fontSize:'1.5em',fontWeight:'bold',color:'white'}}>Add location</p>
    <Form.Group>
      <Form.Input
        value={newLend.location}
        name="location"
        onChange={handleChange}
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
            alt="LendImage"
            centered
            size="big"
          />
        </>
      )}
    </div>
    <Divider hidden />
    
    <Button color='green' 
    circular
    disabled={newLend.text === "" || loading}
    content={<strong>Submit</strong>}
    style={{ backgroundColor: "#1DA1F2", color: "white" }}
    icon="send"
    loading={loading}>
      <Icon name='checkmark' /> Submit
    </Button>
    
  </Form>

    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={() => setOpen(false)}>
        <Icon name='remove' /> Close
      </Button>
      
    </Modal.Actions>
  </Modal>

    <Divider hidden />
    <Card.Group itemsPerRow={4}>  
    {lends.map((lend)=> (
        
      <CardLend 
      key={lend._id} 
      lend={lend} 
      user={user} 
      setLends={setLends} 
      setShowToastr={setShowToastr}/>
      
      ))}
      </Card.Group>
      

  </div>
  </>
    );
}

Lends.getInitialProps=async(ctx)=>{
  try{
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/lends`, {
      headers: { Authorization: token }
    });

    return { lendsData: res.data };

  }catch(error){
    return {errorLoading:true}
  }
}

export default Lends;


