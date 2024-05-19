import * as Yup from "yup";

// Function to validate a required text field
export function requiredTextField(fieldName) {
  return Yup.string().required(`${fieldName} is required`).trim();
}

// Function to validate a checkbox that must be checked (true)
export function checkboxValidation(fieldName) {
  return Yup.bool().oneOf([true], `You need to accept ${fieldName}`);
}

// Function to validate a field with minimum and maximum length constraints
export function minMaxLengthValidation(fieldName, minLength, maxLength) {
  return Yup.string()
    .required(`${fieldName} is required`)
    .trim()
    .min(minLength, `${fieldName} should be at least ${minLength} characters`)
    .max(maxLength, `${fieldName} should not exceed ${maxLength} characters`);
}
