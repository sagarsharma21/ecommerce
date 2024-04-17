// import { InboxIcon } from '@heroicons/react/24/outline';
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dashboard } from "@mui/icons-material";
import DashBoard from "./components/DashBoard";
import CreateProductForm from "./components/CreateProductForm";
import Productstable from "./components/Productstable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import AdminDashBoard from "./components/DashBoard";
const menu = [
  { name: "Dashboard ", path: "/admin", icon: <DashboardIcon /> },
  { name: " Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: " Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders ", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: " AddProduct",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
  // {name:" ",path:""},
  // {name:" ",path:""},
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "coloum",
        justifyContent: "space-between",
        //  border:"1px solid blue",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar/>
        } */}

        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Accounts</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
         {/* flex h-full */}
      <div className=' flex h-[100vh]  '>  
        <CssBaseline />

        <div className='w-[15%] border border-r-gray-300 h-full'>
          
       
          {drawer}
          </div>
        <div className='w-[85%] '>
            <Routes>
            <Route path='/' element={ <AdminDashBoard/>}></Route>
            <Route path='/product/create' element={<CreateProductForm/>}></Route>
            <Route path='/products' element={<Productstable/>}></Route>
            <Route path='/orders' element={<OrdersTable/>}></Route>
            <Route path='/customers' element={<CustomersTable/>}></Route>

            </Routes>
        </div>
        
      </div>
    </div>
  );
};

export default Admin;
