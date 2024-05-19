import { Box, Typography, Fab, Input } from "@mui/material";
import React, { useRef } from "react";
import { add_icon, child_1, child_2 } from "../../utils/images";
import { avatarColors } from "./constants";

const SelectAvatar = () => {
  const fileInputRef = useRef(null);
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography fontWeight={"600"}>Select an avatar or add photo</Typography>
      <Box display={"flex"} gap={"10px"}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Fab
          color="primary"
          sx={{
            bgcolor: "#F79E02",
            "&:hover": {
              bgcolor: "#F79E02",
            },
            "&:active": {
              bgcolor: "#F79E02",
            },
          }}
          aria-label="add"
          onClick={handleAddImageClick}
        >
          <img src={add_icon} />
        </Fab>

        <img src={child_1} />
        <img src={child_2} />
      </Box>
      <Box display={"flex"} gap={2} marginY={2}>
        {avatarColors.map((color, index) => (
          <Fab
            key={index}
            size="small"
            color="primary"
            sx={{
              bgcolor: color,
              "&:hover": {
                bgcolor: color,
              },
              "&:active": {
                bgcolor: color,
              },
            }}
            aria-label="add"
          ></Fab>
        ))}
      </Box>
    </Box>
  );
};

export default SelectAvatar;
