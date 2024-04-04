import React from "react";
import { Button, Box, Modal, Typography } from "@mui/material";

  const style = {
    position: 'absolute', //as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    outline: 'none',
    boxShadow: 24,
    p: 4,
  };


const AuthModal = ({handleClose, handleOpen}) => {
  return (
    <div>
      AuthModal
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is a React Modal from Mui Material
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
