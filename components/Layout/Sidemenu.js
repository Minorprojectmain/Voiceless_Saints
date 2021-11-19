// import React from "react";
// import {List,Icon} from "semantic-ui-react";
// import Link from "next/link";
// import {useRouter} from "next/router";
// import {logoutUser} from "../../utils/authUser";
// function SideMenu({user:{unreadNotification,email,unreadMessage,username}}) {
// const router =useRouter();

// const isActive = route => router.pathname === route;

// return (

// <>

// <List>

// <Link href="/">

// <List.Item active={!isActive('/')}>

// <Icon name = "home" size="large" color={isActive('/') && 'teal'} />
// <List.Content>
// <List.Header content = "Home" />

// </List.Content>

// </List.Item>

// </Link>

// <br />

// <Link href="/messages">

// <List.Item active={!isActive('/messages')}>

// <Icon name = {unreadMessage ? "hand point right":"mail outline" } size="large" color={(isActive('/messages') && 'teal')||(unreadMessage &&"orange")} />
// <List.Content>
// <List.Header content = "Home" />

// </List.Content>

// </List.Item>

// </Link>

// <br />

// <Link href="/notifications">

// <List.Item active={!isActive('/notifications')}>

// <Icon name = {unreadNotification ? "hand point right":"bell outline" } size="large" color={(isActive('/notifications') && 'teal')||(unreadNotification &&"orange")} />
// <List.Content>
// <List.Header content = "Notifications" />

// </List.Content>

// </List.Item>

// </Link>

// <br />

// <Link href="/notifications">

// <List.Item active={!isActive('/notifications')}>

// <Icon name = {unreadNotification ? "hand point right":"bell outline" } size="large" color={(isActive('/notifications') && 'teal')||(unreadNotification &&"orange")} />
// <List.Content>
// <List.Header content = "Notifications" />

// </List.Content>

// </List.Item>

// </Link>

// <br />

// <Link href= {`/${username}`}>
// <List.Item active = {router.query.username === username}>

// <Icon
// name="user"
// size="large"
// color={router.query.username === username && "teal"}
// />

// <List.Content>

// <List.Header content= "Account" />

// </List.Content>

// </List.Item>

// </Link>

// <List.Item onClick = {() => logoutUser(email)} >

// <Icon name = "log out" size="large" />
// <List.Content>

// <List.Header content="Logout" />

// </List.Content>

// </List.Item>

// </List>

// </>
// );

// return <div>SideMenu</div>;

// }

// export default SideMenu;

import React from "react";
import { List, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { logoutUser } from "../../utils/authUser";

function SideMenu({
  user: { unreadNotification, email, unreadMessage, username },
  pc=true,
}) {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection
      >
        <Link href="/">
          <List.Item active={isActive("/")}>
            <Icon name="home" size="large" color={isActive("/") && "teal"} />
            <List.Content> {pc && <List.Header content="Home" />}</List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/lends">
          <List.Item active={isActive("/lends")}>
            <Icon
              name="handshake"
              size="large"
              color={isActive("/lends") && "blue"}
            />
            <List.Content>
              <List.Header content="Find A Home" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        
        <Link href="/alert">
          <List.Item active={isActive("/alert")}>
            <Icon
              name="handshake"
              size="large"
              color={isActive("/alert") && "blue"}
            />
            <List.Content>
              <List.Header content="Alerts" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="http://localhost:8501">
          <List.Item active={isActive("http://localhost:8501")}>
            <Icon
              name="magnify"
              size="large"
              color={isActive("http://localhost:8501") && "blue"}
            />
            <List.Content>
              <List.Header content="Breed Identifier" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/messages">
          <List.Item active={isActive("/messages")}>
            <Icon
              name={unreadMessage ? "hand point right" : "mail outline"}
              size="large"
              color={
                (isActive("/messages") && "white") || (unreadMessage && "orange")
              }
            />
            <List.Content>
              {pc && <List.Header content="Messages" />}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        
        <Link href="/notifications">
          <List.Item active={isActive("/notifications")}>
            <Icon
              name={unreadNotification ? "hand point right" : "bell outline"}
              size="large"
              color={
                (isActive("/notifications") && "blue") ||
                (unreadNotification && "orange")
              }
            />
            <List.Content>
              {pc && <List.Header content="Notifications" />}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href={`/${username}`}>
          <List.Item active={router.query.username === username}>
            <Icon
              name="user"
              size="large"
              color={router.query.username === username && "teal"}
            />
            <List.Content>
              {pc && <List.Header content="Account" />}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <List.Item onClick={() => logoutUser(email)}>
          <Icon name="log out" size="large" />
          <List.Content>{pc && <List.Header content="Logout" />}</List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default SideMenu;
