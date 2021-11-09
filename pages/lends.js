import React,{useEffect,useState} from 'react'
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
    
    <CreateLend user={user} setLends={setLends} />
    <Divider hidden />
    <Card.Group itemsPerRow={4}>  
    {lends.map(lend=>
      (
        
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
    )
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


