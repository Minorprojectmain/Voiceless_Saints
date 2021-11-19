import React,{useEffect,useState} from 'react'
import { Header, Icon, Segment,Divider,Button,Modal} from 'semantic-ui-react'
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


function Alert({user,alertData,errorLoading}) {
console.log(alertData)
const [alert,setAlert]=useState(alertData);
const [showToastr,setShowToastr]=useState(false);
const [open, setOpen] = useState(false);
useEffect(()=>{
showToastr && setTimeout(()=>setShowToastr(false),3000)
},[showToastr]);
if(alert.length===0 || errorLoading)
   return <NoAlert />

 return (
   <>
   {showToastr && <PostDeleteToastr />}
   <div>
      <Header as='h2' color="blue" icon textAlign='center'>
      <Icon name='home' circular />
      <Header.Content color="green">Want a Foster Home for your pet?</Header.Content>
    </Header>
    <Segment  circular color="grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Segment>
    <Divider />
    
    <CreateAlert user={user} setAlert={setAlert} />
    <Divider hidden />
    <Card.Group itemsPerRow={4}>  
    {alert.map(alert=>
      (
        
      <CardAlert
      key={alert._id} 
      alert={alert} 
      user={user} 
      setAlert={setAlert} 
      setShowToastr={setShowToastr}/>
      
      ))}
      </Card.Group>
      

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


