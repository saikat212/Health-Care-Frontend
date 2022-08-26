import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { _Notification } from 'Classes/entity-class';
import { API } from 'API Handler/api';
import { id } from 'date-fns/locale';

export default function NotificationList({notification}:{notification :_Notification}) {

  function handleClose(){
 
    API.notification.changeStatus(notification.id as number).then(response=>{
      console.log("Notification status changed")
    })
    
  }

  return (
    <div>
      <Accordion onClick={handleClose} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleClose}
        >
          <Typography>{notification.type}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {notification.message}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
