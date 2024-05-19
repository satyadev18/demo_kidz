import { Typography, Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { getUserFetchStatus } from "../../redux/features/userSlice";
import ModalComponent from "../../components/Modal";
import AddChildForm from "./AddChildForm";

function Homepage() {
  const userCreatedStatus = useSelector(getUserFetchStatus);

  return (
    <Box>
      {userCreatedStatus && <ModalComponent />}

      <Navbar />

      <Box
        borderTop={"1px solid #B1B1B1"}
        borderBottom={"1px solid #B1B1B1"}
        padding={4}
      >
        <Typography
          textAlign={"center"}
          margin={2}
          variant="h5"
          fontWeight={"700"}
          fontSize={"32px"}
          color={"#4B3E3D"}
        >
          Add children/adult details
        </Typography>
        <AddChildForm />
      </Box>
      <Box textAlign={"center"}>
        <Typography variant="p" fontWeight={"400"} margin={"5px"}>
          © Copyright KidzCubicle | All Rights Reserved • Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
}

export default Homepage;
