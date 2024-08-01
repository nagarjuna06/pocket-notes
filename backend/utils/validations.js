import * as yup from "yup";

// Hex color code regex
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const groupSchema = yup.object({
  title: yup.string().required(),
  color: yup
    .string()
    .matches(hexColorRegex, "Invalid hex color code")
    .required(),
});

export const noteSchema = yup.object({
  content: yup.string().required(),
  groupId: yup.string().required(),
});
