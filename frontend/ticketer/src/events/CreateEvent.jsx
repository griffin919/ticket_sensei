import React, { useMemo } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";

import { Styles } from "../assets/styles/Styles";
import {
  MyTxtField,
  MySelectField,
  MyMultipleSelectCheckmarks,
} from "../components/FormFields";

const CreateEvent = () => {
  const baseURL = "http://localhost:5000/api/event";

  const eventCategoryOptions = ["One", "Two"];

  const submitForm = async (values) => {
    const formData = new FormData();

    // Helper function to handle appending form fields
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log(formData);

    try {
      const response = await axios.post(`${baseURL}/create`, formData, {
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
      eventName: "",
      eventDescription: "",
      eventDateTime: "",
      eventDuration: "",
      eventCategory: [],
      eventLocation: [
        { city: "", region: "", description: "", latitude: "", longitute: "" },
      ],
      eventReview: [{ rating: "", review: "" }],
      eventLink: "",
      EventUpdate: "",
      bookingDeadline: "",
      address: "",
      eventStatus: "",
      eventHost: "",
      ticketQty: "",
      ticketType: [],
      eventImages: [],
    },

    onSubmit: (values) => {
      submitForm(values);
    },
  });

  return (
    <div>
      <form
        // style={Styles.form}
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
      >
        <FormGroup sx={Styles.formGroup}>
          <MyTxtField
            name="eventName"
            label="Event name"
            type="text"
            formik={formik}
          />
          <MyTxtField
            name="eventDescription"
            label="Event description"
            type="text"
            formik={formik}
          />
          <FormControl>
            <InputLabel>Event date and time</InputLabel>
            <Input
              name="eventDateTime"
              type="date"
              value={formik.values.eventDateTime}
              onChange={formik.handleChange}
            />
          </FormControl>
          <MyTxtField
            name="eventDuration"
            label="Event duration (hours)"
            type="Number"
            formik={formik}
          />

          <MyMultipleSelectCheckmarks
            name="eventCategory"
            options={eventCategoryOptions}
            formik={formik}
            label="Event category"
          />
        </FormGroup>
        <FormGroup>
          <Typography>Event Venue Details</Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              id="city"
              name="city"
              type="text"
              required="false"
              onChange={formik.handleChange}
              value={formik.values.eventLocation.city}
              sx={Styles.textField}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="region">City</InputLabel>
            <Input
              id="region"
              name="region"
              type="text"
              required="false"
              onChange={formik.handleChange}
              value={formik.values.eventLocation.region}
              sx={Styles.textField}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="region">City</InputLabel>
            <Input
              id="region"
              name="region"
              type="text"
              required="false"
              onChange={formik.handleChange}
              value={formik.values.eventLocation.region}
              sx={Styles.textField}
            />
          </FormControl>
        </FormGroup>
        <Button type="submit" sx={Styles.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateEvent;
