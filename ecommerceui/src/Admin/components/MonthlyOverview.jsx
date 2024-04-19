import React from "react";
import { TrendingUp } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const salesData = [
  {
    stats: "245k",
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "success",
    icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.4k",
    title: "Products",
    color: "warning",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88k",
    title: "Revenue",
    color: "info",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return(
   salesData.map((item, index) => (
    <Grid item xd={12} sm={3} key={index}>
      <Box
        sx={{
          display: "flex",
          alignItem: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            backgroundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  )));
};

const MonthlyOverview = () => {
  
    return(

  <Card>
    <CardHeader
      title="MonthlyOverview "
      action={
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      }
      subheader={
        <Typography variant="body2">
          <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
            Total 48.5% growth
          </Box>
          This Month
        </Typography>
      }
      titleTypographyProps={{
        sx: {
          mb: 2.5,
          lineHeight: "2rem !important ",
          letterSpacing: ".15px !important ",
        }
      }}
    />

    <CardContent
      sx={{
        pt: theme => `${theme.spacing(3)} !important)`
      }}
    >
      <Grid  container spacing={[5, 0]}>
        
        {renderStats()}
      </Grid>
    </CardContent>
  </Card>
)};

export default MonthlyOverview;
