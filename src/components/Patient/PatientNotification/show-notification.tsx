import { Badge, Dialog, DialogTitle, Grid, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { API } from "API Handler/api";
import { Patient, _Notification } from "Classes/entity-class";
import React, { useEffect } from "react";
import NotificationList from "./notification-list";

export default function ShowNotification({id}:{id:number}) {
  const [notification, setNotification] = React.useState<_Notification[]>([]);
  const [notify, setNotify] = React.useState<_Notification>();
  const [open, setOpen] = React.useState(false);
  const [num, setNum] = React.useState<number>();
  useEffect(() => {
    API.notification.getNotification(id as number).then(response=>{
        console.log(response.data)
        setNotification(response.data)
        setNum(response.data.length)
        console.log("L : ",response.data.length)
    })
  }, []);
  function showNotification(){
     setOpen(true);
  
  }
  function handleClose(){
    setOpen(false);
    console.log("Id check: ",id)
    API.notification.changeStatus(id as number).then(response=>{
      console.log("Notification status changed")
    })
    
  }
  return (
    <div>
    <IconButton
      size="large"
      aria-label="show new notifications"
      color="info"
      onClick={showNotification}
    >
      <Badge badgeContent={num as number} color="error">
        <NotificationsIcon/>
      </Badge>
    </IconButton>
     <Dialog  
     open={open}
     onClose={handleClose}
     sx={{ padding: "10px", height: "100%", }}
     >
     <DialogTitle>Notification</DialogTitle>
     <List sx={{ pt: 0 }}>
        {notification?.map((notify,idx) => (
        <>
        {/* <ListItem key={idx}>
           <ListItemText primary={notify.message} />
         </ListItem> */}
         <NotificationList notification = {notify} />             
        </>
       ))} 
     </List> 
   </Dialog>
   </div>
  );
}
