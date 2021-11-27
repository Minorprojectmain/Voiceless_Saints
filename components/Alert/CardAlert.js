import React,{useState,useEffect} from 'react'
import {Card,Icon,Image,Divider,Segment,Button,Popup,Header,Modal,Item,Progress} from 'semantic-ui-react'
import calculateTime from '../../utils/calculateTime';
import Link from "next/link";
import { deleteAlert } from "../../utils/alertActions";
//import LikesListLend from './LikesListLend';
function CardAlert({ alert, user, setAlerts, setShowToastr}) {
  console.log(alert);

  //const [likes, setLikes] = useState(lend.likes);

  // const isLiked =
  // likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;

  const [error,setError]=useState(null);
    return (
      <>
      
      
      <Item color="teal" fluid>
      
      {alert.picUrl && <Image src={alert.picUrl} wrapped ui={false} circular centered size="medium" alt="AlertImage"/>}
      
      <Item.Content>
      <Image floated="left" src={alert.user.profilePicUrl} avatar circular />
      {(user.role==="root" || alert.user._id===user._id) && (
        <>
          <Popup 
          on="click" 
          position="right center" 
          trigger={<Image src="/deleteIcon.svg" 
          style={{cursor:"pointer"}} 
          size="mini" 
          floated="right"/>}>

          <Item as="h4" content="Are you sure?" />
          <p>This action is irreversible</p>
          <Button color="red" icon="trash" content="Delete" onClick={()=>deleteAlert(alert._id,setAlerts,setShowToastr)}/>
          </Popup>
        </>
      )}
      

      <Link href={`/${alert.user.username}`}>
        <a>Posted by:{alert.user.name}</a>
      </Link>
       
      <Item.Meta>{calculateTime(alert.createdAt)}</Item.Meta>
      <Item.Meta >Location :- {alert.location}</Item.Meta>
      <Item.Description>
      Description :- {alert.text}
      </Item.Description>
      </Item.Content>
      <Item.Content extra>
      
            
    
        
      
     </Item.Content>
      </Item>
      
      
      </>
    )
}

export default CardAlert;
