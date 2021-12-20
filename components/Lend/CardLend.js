import React,{useState,useEffect} from 'react'
import {Card,Icon,Image,Divider,Segment,Button,Popup,Header,Modal } from 'semantic-ui-react'
import calculateTime from '../../utils/calculateTime';
import Link from "next/link";
import { deleteLend, likeLend } from "../../utils/lendActions";
import LikesListLend from './LikesListLend';
function CardLend({ lend, user, setLends, setShowToastr}) {
  console.log(lend);
  const [likes, setLikes] = useState(lend.likes);

  const isLiked =
  likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;

  const [error,setError]=useState(null);
    return (
      <>
      
      
      <Card color="teal" fluid>
      
      {lend.picUrl && <Image src={lend.picUrl} wrapped ui={false} circular centered size="medium" alt="LendImage"/>}
      
      <Card.Content>
      <Image floated="left" src={lend.user.profilePicUrl} avatar circular />
      {(user.role==="root" || lend.user._id===user._id) && (
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
          <Button color="red" icon="trash" content="Delete" onClick={()=>deleteLend(lend._id,setLends,setShowToastr)}/>
          </Popup>
        </>
      )}
      

      <Link href={`/${lend.user.username}`}>
        <a>{lend.user.name}</a>
      </Link>
       
      <Card.Header>
      {lend.petname}
      </Card.Header>
      <Card.Meta>{calculateTime(lend.createdAt)}</Card.Meta>
      <Card.Meta content={lend.location} />
      <Card.Description>
      {lend.text}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Icon
      name={isLiked ? "heart" : "heart outline"}
      color="red"
      style={{ cursor: "pointer" }}
      onClick={() =>
        likeLend(lend._id, user._id, setLikes, isLiked ? false : true)
      }
    />
    <LikesListLend
              lendId={lend._id}
              trigger={
                likes.length > 0 && (
                  <span className="spanLikesList">
                    {`${likes.length} ${likes.length === 1 ? "like" : "likes"}`}
                  </span>
                )
              }
            />
            
            <Button floated="right" color='blue' >
            <Link href="/messages">
              Borrow
              </Link>
              
            </Button>
        
      
     </Card.Content>
      </Card>
      
      
      </>
    )
}

export default CardLend
