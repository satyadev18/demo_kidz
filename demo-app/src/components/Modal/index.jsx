import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { done } from "../../utils/images";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: '50%',
  bgcolor: "background.paper",
  border: "2px solid white",

  borderRadius: "8px",
  boxShadow: 24,
  px: 8,
  py: 3,
};

const ModalComponent = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={style}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <img src={done} />
          <Typography
            margin={"4px"}
            id="modal-title"
            variant="h6"
            fontWeight={"bold"}
            component="h2"
          >
            Added!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
