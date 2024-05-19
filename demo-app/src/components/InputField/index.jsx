import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, TextField } from "@mui/material";

const FormInput = ({
  labelText,
  nameText,
  inputType,
  required,
  placeholder,
}) => {
  return (
    <Box
      display={"flex"}
      gap={"5px"}
      flexDirection={"column"}
      textAlign={"left"}
      padding={"4px"}
    >
      {labelText && (
        <label htmlFor={nameText} className="label-text">
          {labelText}
          {required && <span className="text-danger"> *</span>} :
        </label>
      )}

      <Field name={nameText} className="form-input">
        {({ field }) => (
          <TextField
            {...field}
            style={{ padding: "2px" }}
            type={inputType}
            id={nameText}
            placeholder={placeholder}
            sx={{
              input: {
                "&::placeholder": {
                  opacity: 0.3,
                },
              },
              label: { color: "blue" },
            }}
          />
        )}
      </Field>

      <ErrorMessage name={nameText} component="span" className="text-danger" />
    </Box>
  );
};

export default FormInput;
