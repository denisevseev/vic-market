import React from "react";
// import "../CountrySelect/CountrySelect.scss";
import { Autocomplete, Box, TextField } from "@mui/material";
import { COUNTRIES } from "../constants";
import "./CountrySelect.scss";

interface Props {
  onSelect: any;
  value: string;
}
function PhoneCountrySelect({ onSelect, value }: Props) {
  const [selectedCountry, setSelectedCountry] = React.useState<any | null>(
    null
  );

  React.useEffect(() => {
    const country = COUNTRIES.find((c) => c.phone === value);
    setSelectedCountry(country);
  }, [value]);

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%", borderRadius: "4px" }}
      options={COUNTRIES}
      autoHighlight
      value={selectedCountry}
      getOptionLabel={(option) => `${option.phone}-${option.label}`}
      onChange={(event, newValue) => {
        if (newValue) setSelectedCountry(newValue);
        onSelect(newValue ? newValue.phone : "");
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0, borderRadius: "4px" } }}
          {...props}
        >
          ({option.phone}) {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          autoComplete="ViewCrunch"
          value={selectedCountry}
          inputProps={{
            ...params.inputProps,
            autoComplete: "off",
            borderRadius: "4px",
            form: {
              autocomplete: "off",
            },
          }}
          sx={{
            "& .MuiAutocomplete-inputRoot": {
              paddingLeft: "20px !important",
              borderRadius: "10px",
            },
          }}
        />
        // <TextField
        //   {...params}
        //   label="Choose a country"
        //   // name="country"
        //   autoComplete='off'
        //   value={selectedCountry}
        //   inputProps={{
        //     ...params.inputProps,
        //     autoComplete: "new-password",
        //     borderRadius: "4px",
        //   }}
        //   sx={{
        //     "& .MuiAutocomplete-inputRoot": {
        //       paddingLeft: "20px !important",
        //       borderRadius: "10px",
        //     },
        //   }}
        // />

      )}
    />
  );
}

export default PhoneCountrySelect;
