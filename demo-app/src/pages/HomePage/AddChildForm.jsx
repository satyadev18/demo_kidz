import React, { useState } from "react";
import { validationSchema, initialValues, backgroundColors } from "./constants";
import FormInput from "../../components/InputField";
import { useDispatch } from "react-redux";
import { addUserMiddleware, resetUser } from "../../redux/features/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Typography, Box, Fab } from "@mui/material";
import { back, true_icon } from "../../utils/images";
import SelectAvatar from "./SelectAvatar";
import CountrySelect from "../../components/CountrySelect";

const AddChildForm = () => {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState("");

  const handleUserSubmit = (values, { resetForm }) => {
    dispatch(addUserMiddleware(values)).then(() => {
      setTimeout(async () => {
        await dispatch(resetUser(false));

        await resetForm();
      }, 2000);
    });
  };

  const handleColorChange = (color) => {
    setBgColor(color);
  };
  console.log(bgColor, "bg color");
  return (
    <Box
      border={"1px solid #B1B1B1"}
      padding={"5%"}
      borderRadius={"15px"}
      width={"80%"}
      marginX={"5%"}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      {/* avatar component */}
      <SelectAvatar />
      <Formik
        initialValues={initialValues}
        onSubmit={handleUserSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, touched, values, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormInput
                  inputType="text"
                  nameText="name"
                  labelText="Name"
                  placeholder="Arthur Duncan"
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="label-text">
                  Gender <span className="text-danger"> *</span>:
                </label>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label
                    className={`radio-button ${
                      values.gender === "male" ? "selected" : ""
                    }`}
                  >
                    <span>Male</span>
                    <Field type="radio" name="gender" value="male" />
                  </label>
                  <label
                    className={`radio-button ${
                      values.gender === "female" ? "selected" : ""
                    }`}
                  >
                    <span>Female</span>
                    <Field type="radio" name="gender" value="female" />
                  </label>
                </Box>
                <ErrorMessage name="gender" component="div" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormInput
                  inputType="text"
                  nameText="firstaid"
                  labelText="First Aid Information"
                  placeholder="Allergies?"
                  required={false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  inputType="date"
                  nameText="dob"
                  labelText="Date of Birth"
                  placeholder="Date of Birth"
                  required={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="p" fontWeight={"600"}>
                  Address Detail <span className="text-danger">*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} marginTop={"5px"}>
                <CountrySelect
                  handleChange={(value) => setFieldValue("country", value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  inputType="number"
                  nameText="postcode"
                  placeholder="Postcode"
                  required={true}
                />
              </Grid>

              <Grid item xs={12}>
                <FormInput
                  inputType="text"
                  nameText="address"
                  placeholder="Address"
                  required={true}
                />
              </Grid>
            </Grid>
            <Typography
              variant="p"
              fontWeight={"500"}
              fontSize={"13px"}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Enter address manually
            </Typography>
            <Box display={"flex"} gap={2} marginTop={2}>
              {backgroundColors.map((color, index) => (
                <Fab
                  key={index}
                  size="medium"
                  color={"inherit"}
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
                  onClick={() => handleColorChange(color)}
                >
                  {color === bgColor && <img src={true_icon} />}
                </Fab>
              ))}
            </Box>
            <Grid width={"100%"} marginTop={2}>
              <button
                variant="contained"
                className="primary-button"
                style={{
                  backgroundColor:
                    !isValid || !Object.keys(touched).length
                      ? "#ECECEC"
                      : "#F79E02",
                  width: "100%",
                }}
                disabled={!isValid || !Object.keys(touched).length}
                type="submit"
              >
                Add
              </button>
            </Grid>
          </Form>
        )}
      </Formik>

      <Box
        display={"flex"}
        gap="5px"
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={2}
        className="cursor-pointer"
      >
        <img src={back} alt="" />
        <Typography variant="p" fontWeight={"500"}>
          Back
        </Typography>
      </Box>
    </Box>
  );
};

export default AddChildForm;
