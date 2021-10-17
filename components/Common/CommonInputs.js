import React from 'react'
import {Form,Button,Segment,Message,TextArea,Divider} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


function CommonInputs({user:{bio,address,instagram,facebook,twitter,youtube},handleChange,showSocialLinks,setShowSocialLinks}) {
    return (
        <>
        <Form.Field
        required
        label="Address"
        control={TextArea}
        name="address"
        value={address}
        onChange={handleChange}
        placeholder="address"
        />
        <Form.Field
        required
        label="Bio"
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
        />
        
        
        <Button content="Add Social Links" color="red" icon="at" type="button" onClick={()=>setShowSocialLinks(!showSocialLinks)}
        />
        {showSocialLinks && <>
         <Divider />
         <Form.Input
          icon="facebook f"
          iconPosition="left"
          name="facebook"
          value={facebook}
          onChange={handleChange}
        />
        <Form.Input
          icon="instagram"
          iconPosition="left"
          name="instagram"
          value={instagram}
          onChange={handleChange}
        />
        <Form.Input
          icon="twitter"
          iconPosition="left"
          name="twitter"
          value={twitter}
          onChange={handleChange}
        />
        
        <Form.Input
          icon="youtube play"
          iconPosition="left"
          name="youtube"
          value={youtube}
          onChange={handleChange}
        />

        <Message icon="attention" info size="small" header="Social Media Links are Optional" />
        </>}
        </>
    )
}

export default CommonInputs
