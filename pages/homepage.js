import React from 'react'
//import LogoBg from "../public/Logo.png"
import {Image,Header,Segment,Grid,Button,Divider,Rail,Step,Icon,Container,Card,Form,Advertisement} from "semantic-ui-react";

import { CarouselProvider, Slide, Slider } from "pure-react-carousel";

import CustomDotGroup from "../components/Common/CustomDotGroup";

function homepage() {
  const items = [
        {
          header: 'I am a Owner',
          description:
            'Join like minded people in your local area who are part of the largest dog-loving community',
          meta: 'Help your pet',
        },
        {
          header: 'I am a Borrower',
          description:
            'Fill the dog void in your life by spending time with one and helping out Owners at the same time. Its a win-win!',
          meta: 'Help others pet',
        },
      ]
  return (
     <div>
    <Image
    attached
    centered
    size='large'
    src='/logos.png'
    />
    <Segment  style={{ padding: '2em 0em' }} vertical >
      <Grid container stackable textAlign='center'>
        <Grid.Row textAlign='left'>
          <Grid.Column width={15} >
            <Header as='h3' textAlign="center" style={{ fontSize: '5em'  ,  fontWeight:'bolder',fontStyle:'oblique' ,  color:"white" }}>
            We match pet owners with the right borrower.
            </Header>
            <Card.Group>
    <Card fluid color='red' header='Voiceless_Saints connects dog owners with local people who love to look after dogs. From walks, playtime, and overnight stays on holidays, anyone can sign up to our site.' />
    
  </Card.Group>
            <br/>
            <br/>
            <br/>
            <p style={{ fontSize: '2.5em',fontFamily:'cursive',fontWeight:'bolder', color:"white" }}>
            Our site connects dog owners with trusted local people who would love to look after their dog. 
            We make it easy to arrange walks, playtime, overnight stays or holidays. 
            Our aim is to help dog owners when they need it, give dogs more exercise and playtime and to allow people without a dog to spend quality time with one. We call it a win-win (or a woof-­woof) situation for everyone involved.
            </p>
            <br />
            <br />
            <Header as='h2' block>
            <Icon name='share' />
            <Header.Content>
              Why choose us!!
              <Header.Subheader>How we work?</Header.Subheader>
            </Header.Content>
          </Header>
          <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      
      <h2 color="blue" primary style={{color:'orange', fontFamily:'cursive'}}>Tesaa-Pet Owner</h2>
      <Divider color="blue" />
    
    <p style={{fontWeight:"bolder"}}>
    "I work long hours and it's very hard to find time to take Benji for a walk. James was recommended to me by the Lend a Pet crew, and he now walks Benji almost every night. I no longer feel guilty about not having the time to regularly exercise my pet"
    </p>
        
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      
      <h2 style={{color:'orange', fontFamily:'cursive'}}>Lisa-Pet borrower</h2>
    <Divider />
    <p>
    "I work long hours and it's very hard to find time to take Benji for a walk. James was recommended to me by the Lend a Pet crew, and he now walks Benji almost every night. I no longer feel guilty about not having the time to regularly exercise my pet"
    </p>
      </Grid.Column>
    </Grid>

    <Divider vertical style={{fontWeight:'bolder',color:'blue'}}>Matched</Divider>
  </Segment>
            
            <Header as='h3' style={{ fontSize: '2em',color:"white",textAlign:"right" }}>
             
            </Header>
            <br/>
            <br/>
            <Header as='h3' style={{ fontSize: '2em' ,color:'white'}}>
            Pets are humanizing.
            </Header>
            <p style={{ fontSize: '1.33em',fontWeight:'bold' }}>
            They remind us we have an obligation and responsibility to preserve and nurture and care for all
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button color="blue"size='huge'>Register with Us!</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
   
    </Segment>
    <Rail attached internal position='left'>
      
      <Step.Group size='medium' >
    <Step>
      <Icon name='share' />
      <Step.Content>
        <Step.Title>Share</Step.Title>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='handshake' />
      <Step.Content>
        <Step.Title>Care</Step.Title>
      </Step.Content>
    </Step>
    
  </Step.Group>
  
     
    </Rail>
    
      <Rail attached internal size='massive' position='right'>
        
      
      <Step.Group size='medium'>
      <Step>
        <Icon name='help' />
        <Step.Content>
          <Step.Title>Help</Step.Title>
        </Step.Content>
      </Step>
  
      <Step active>
        <Icon name='heart' />
        <Step.Content>
          <Step.Title>Love</Step.Title>
        </Step.Content>
      </Step>
      
    </Step.Group>
        
    
      </Rail>
      
      <Card.Group centered items={items} />
     
    
    </div>
    
  )
}

export default homepage
