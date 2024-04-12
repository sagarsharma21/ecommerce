import React, { useEffect } from "react";
import { Button, Box, Modal, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
  position: "absolute", //as 'absolute',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if(auth.user) 
    handleClose();
  }, [auth.user])

  return (
    <div>
      {/* AuthModal */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="rounded-md" sx={style}>
          {location.pathname === "/login" ? (<LoginForm />) : (<RegisterForm />)}         
        </Box>

      </Modal>
    </div>
  );
};

export default AuthModal;