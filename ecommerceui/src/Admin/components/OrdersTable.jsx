import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableBody,
} from "@mui/material";
import {
  getOrders,
  confirmedOrder,
  shippedOrder,
  deliveredOrder,
  deleteOrder,
} from "../../State/Admin/Order/Action";

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  //Handle update status button
  const [anchorElArray, setAnchorElArray] = useState([]);
  //const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);//event.currentTarget
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmedOrder,
    adminOrder.shippedOrder,
    adminOrder.deliveredOrder,
    adminOrder.deleteOrder
  ]);
  console.log("admin orders ", adminOrder);

  //functions to change order status
  const handleShippedOrder = (orderId) => {
    dispatch(shippedOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmedOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className="p-10  bg-[#242B2E] text-white">
      {/* OrderTable */}
      <Card className="mt-2 bg-[#1b1b1b]" sx={{}}>
        <CardHeader title="All Orders" />

        <TableContainer
          component={Paper}
          sx={{ minWidth: 650 }}
          aria-label="simple-table"
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image </TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                {/* <TableCell align='left'>Quantity&nbsp;(g)</TableCell> */}
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td. &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {/*  */}
                    <AvatarGroup max={2} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell>
                    {item.orderItems.map((orderItem) => (
                      <p> {orderItem.product.title} </p>
                    ))}
                    {/* {item.id}{item.title}  */}
                  </TableCell>

                  <TableCell align="left">{item.id} </TableCell>
                  <TableCell align="left">{item.totalPrice} </TableCell>
                  <TableCell align="left">
                    {" "}
                    <span
                      className={` text-white px-5 rounded-full
                    ${
                      item.orderStatus === "CONFIRMED"
                        ? "bg-[#369236] "
                        : item.orderStatus === "SHIPPED"
                        ? "bg-[#4141ff] "
                        : item.orderStatus === "PLACED"
                        ? "bg-[#02B290] "
                        : item.orderStatus === "PENDING"
                        ? "bg-[gray] "
                        : "bg-[red] "
                    }`}
                    >
                      {" "}
                      {item.orderStatus}{" "}
                    </span>{" "}
                  </TableCell>
                  {/* Status button start mui menu */}
                  <TableCell>
                    <Button
                      id="basic-button"
                      // aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      //aria-expanded={open ? "true" : undefined}
                      onClick={(event)=>handleClick(event, index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorElArray[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorElArray[index]}
                      open={Boolean(anchorElArray[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>

                  {/* Status button end */}
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant="outlined"
                      
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
