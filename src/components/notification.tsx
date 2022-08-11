import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { style } from "@mui/system";

export default function ShowNotification({num}:{num:number}) {
  return (
    <IconButton
      size="large"
      aria-label="show new notifications"
      color="primary"
    >
      <Badge badgeContent={num} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
