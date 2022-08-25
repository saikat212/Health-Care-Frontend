import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { _Notification } from 'Classes/entity-class';

export default function NotificationList({notification}:{notification :_Notification}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
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
