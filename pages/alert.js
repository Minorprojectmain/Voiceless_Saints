import React,{useEffect,useState,useRef} from 'react'
import { Header, Icon, Segment,Divider,Button,Modal,Item,Form,Message,Image} from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import CreateAlert from '../components/Alert/CreateAlert';
import CardAlert from '../components/Alert/CardAlert';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
//import CardLend from '../components/Lend/CardLend';
//import {Segment} from "semantic-ui-react";
import {parseCookies} from "nookies";
import {NoAlert} from "../components/Layout/NoData";
import {PostDeleteToastr} from "../components/Layout/Toastr";
import uploadPic from "../utils/uploadPicToCloudinary";
import { submitNewAlert } from "../utils/alertActions";


function Alert({user,alertData,errorLoading}) {
console.log(alertData)
const [alert,setAlerts]=useState(alertData);
const [showToastr,setShowToastr]=useState(false);
const [open, setOpen] = useState(false);
useEffect(()=>{
showToastr && setTimeout(()=>setShowToastr(false),3000)
},[showToastr]);


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

    await submitNewAlert(
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
   {showToastr && <PostDeleteToastr />}
   <div>
      <Header as='h2' color="orange" icon textAlign='center'>
      <Icon name='handshake' circular />
      <Header.Content color="green">Help the injured Pets in need!!</Header.Content>
    </Header>
    <Segment  inverted >
      <h3  style={{fontSize:'1.5em',color:'green',textAlign:'center',fontFamily:'cursive'}}>Contact Government Helpine<Icon name="call square"></Icon> Numbers for pets treatment in Chandigarh:</h3>
      <p style={{fontSize:'1em',textAlign:'center'}}><a>071-92658-9564</a></p>
      <p style={{fontSize:'1em',textAlign:'center'}}><a>034-86953-4885</a></p>
      <p style={{fontSize:'1em',textAlign:'center'}}><a>071-92658-9564</a></p>
      <p style={{fontSize:'1em',textAlign:'center'}}><a>071-92658-9564</a></p>
      <p style={{fontSize:'1em',textAlign:'center'}}><a>071-92658-9564</a></p>
    </Segment>
    <Divider />
    <p style={{fontWeight:'bolder',fontSize:'2em',color:'red',fontFamily:'cursive'}}><b>Generate a Alert<Icon name="bell outline"></Icon></b></p>
    <Modal
      style={{backgroundColor:"green"}}
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Icon loading name='plus circle' size="huge" color="red" />}
    >
      <Modal.Header style={{color:"white",backgroundColor:"orange"}}>Generate a Alert!!</Modal.Header>
      <Modal.Content style={{backgroundImage:"url(/d2.jpg)",backgroundSize:"cover"}}>
      <Form error={error !== null} onSubmit={handleSubmit}>
        <Message
          error
          onDismiss={() => setError(null)}
          content={error}
          header="Oops!"
        />

        {/* <Form.Group>
        <Form.Input
            value={newLend.petname}
            name="petname"
            onChange={handleChange}
            label="Add Petname"
            placeholder="Type your petName"
          />
        </Form.Group> */}

        <Form.Group style={{textAlign:"center",fontSize:"1em"}}>
              <Form.Input
            value={newAlert.location}
            name="location"
            onChange={handleChange}
            label="Add Location"
            icon="map marker alternate"
            placeholder="Want to add Location?"
          />
         </Form.Group> 
        <Form.Group>
        <Image src={user.profilePicUrl} circular avatar inline />
        <Form.TextArea
          placeholder="Add description about the condition of animal"
          name="text"
          value={newAlert.text}
          label="Add details"
          onChange={handleChange}
          rows={4}
          width={10}
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
  
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>

    <Divider />
    {alert.length ===0 || errorLoading?(
      <NoAlert/>

    ):(
    <Item.Group>  
    {alert.map((alert)=>
      (
        
      <CardAlert
      key={alert._id} 
      alert={alert} 
      user={user} 
      setAlerts={setAlerts} 
      setShowToastr={setShowToastr}
      />
      
      ))}
      </Item.Group>
      
    
    )}
    
      

  </div>
  </>
    )
}

Alert.getInitialProps=async(ctx)=>{
  try{
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/alert`, {
      headers: { Authorization: token }
    });

    return { alertData: res.data };

  }catch(error){
    return {errorLoading:true}
  }
}

export default Alert;


