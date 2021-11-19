import React,{useState,useEffect} from 'react'
import {Card,Icon,Image,Divider,Segment,Button,Popup,Header,Modal } from 'semantic-ui-react'
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
      
      
      <Card color="teal" fluid>
      
      {alert.picUrl && <Image src={alert.picUrl} wrapped ui={false} circular centered size="medium" alt="AlertImage"/>}
      
      <Card.Content>
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

          <Header as="h4" content="Are you sure?" />
          <p>This action is irreversible</p>
          <Button color="red" icon="trash" content="Delete" onClick={()=>deleteAlert(alert._id,setAlerts,setShowToastr)}/>
          </Popup>
        </>
      )}
      

      <Link href={`/${alert.user.username}`}>
        <a>{alert.user.name}</a>
      </Link>
       
      {/* <Card.Header>
      {lend.petname}
      </Card.Header> */}
      <Card.Meta>{calculateTime(alert.createdAt)}</Card.Meta>
      <Card.Meta content={alert.location} />
      <Card.Description>
      {alert.text}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      {/* <Icon
      name={isLiked ? "heart" : "heart outline"}
      color="red"
      style={{ cursor: "pointer" }}
      onClick={() =>
        likeLend(lend._id, user._id, setLikes, isLiked ? false : true)
      }
    /> */}
    {/* <LikesListLend
              lendId={lend._id}
              trigger={
                likes.length > 0 && (
                  <span className="spanLikesList">
                    {`${likes.length} ${likes.length === 1 ? "like" : "likes"}`}
                  </span>
                )
              }
            /> */}
            
            <Button floated="right" color='blue' >
              Chat
            </Button>
        
      
     </Card.Content>
      </Card>
      
      
      </>
    )
}

export default CardAlert;
