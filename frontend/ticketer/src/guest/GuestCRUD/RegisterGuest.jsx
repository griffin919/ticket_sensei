import React, { useMemo } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Grid,
} from "@mui/material";
import countryList from "react-select-country-list";
import { Styles } from "../../assets/styles/Styles.js";
import axios from "axios";

import { MyTxtField, MySelectField } from "../../components/FormFields";

const RegisterGuest = () => {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const baseURL = "http://localhost:5000/api/guest";

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const submitForm = async (values) => {
    const formData = new FormData();

    // Helper function to handle appending form fields
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log(formData);

    try {
      const response = await axios.post(`${baseURL}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data); // Log the error response data
      } else {
        console.log("Error:", err.message);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      contact: "",
      nationality: "",
      username: "",
      password: "",
      // profilePic: null,
    },

    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        submitForm(values);
      } else {
        console.log("Passwords do not match!");
      }
    },
  });

  return (
    <div>
      <form
        style={Styles.form}
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
      >
        {/* Personal Info */}
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <FormGroup sx={Styles.formGroup}>
              <MyTxtField
                name="firstName"
                label="First name"
                type="text"
                formik={formik}
              />

              <MyTxtField
                name="middleName"
                label="Middle name"
                type="text"
                formik={formik}
              />
              <MyTxtField
                name="lastName"
                label="Last name"
                type="text"
                formik={formik}
              />
              <FormControl>
                <InputLabel>Date of Birth</InputLabel>
                <Input
                  name="dateOfBirth"
                  label="Date Of Birth"
                  type="date"
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                />
              </FormControl>

              <MySelectField
                label="Gender"
                name="gender"
                options={genderOptions}
                formik={formik}
              />
              <MySelectField
                label="Nationality"
                name="nationality"
                options={countryOptions}
                formik={formik}
              />
              <MyTxtField
                name="contact"
                label="Contact"
                type="text"
                formik={formik}
              />
              <FormControl>
                <InputLabel>Upload profile picture</InputLabel>
                <input
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  multiple
                  onChange={(e) => {
                    // const selectedFiles = Array.from(e.currentTarget.files);
                    // formik.setFieldValue("profilePic", selectedFiles);
                    formik.setFieldValue(
                      "profilePic",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              </FormControl>
            </FormGroup>
          </Grid>
          {/* Account Info  */}
          <Grid item md={6} xs={12}>
            <FormGroup sx={Styles.formGroup}>
              <MyTxtField
                name="email"
                label="Email"
                type="email"
                formik={formik}
              />
              <MyTxtField
                name="username"
                label="Username"
                type="text"
                formik={formik}
              />
              <MyTxtField
                name="password"
                label="Password"
                type="password"
                formik={formik}
              />
              <MyTxtField
                name="confirmPassword"
                label="Confirm password"
                type="password"
                formik={formik}
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Button type="submit" sx={Styles.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterGuest;
