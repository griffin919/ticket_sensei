import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { Styles } from "../assets/styles/Styles";
import { Grid, Input } from "@mui/material";

export const MyTxtField = ({ name, label, Fieldtype, required, formik }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        type={Fieldtype}
        required={required}
        onChange={formik.handleChange}
        value={formik.values[name]}
        sx={Styles.textField}
      />
    </FormControl>
  );
};

export const MySelectField = ({ name, label, options, required, formik }) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        required={required}
        value={formik.values[name]}
        onChange={formik.handleChange}
        sx={Styles.textField}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

export const MyMultipleSelectCheckmarks = ({
  name,
  options,
  formik,
  label,
}) => {
  const handleChange = (event) => {
    formik.handleChange(event);
  };
  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          name={name}
          value={formik.values[name]}
          onChange={handleChange} // Fixed this line
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
        >
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={formik.values[name].indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
