import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { COUNTRIES } from "../constants";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import "./CountrySelect.scss";

interface Props {
  onSelect: any;
  isTouched: any;
  errors: any;
  value: any; // This should be the phone number
  disabled?: boolean;
  showTitle?: boolean;
  showLabel?: boolean;
}

export default function CountrySelect({
  onSelect,
  isTouched,
  value,
  errors,
  disabled,
  showTitle = false,
  showLabel = true,
}: Props) {
  const findCountryByPhone = (code: any) => {
    return COUNTRIES.find((country) => country.code === code);
  };

  const [selectedCountry, setSelectedCountry] = React.useState(
    findCountryByPhone(value)
  );

  useEffect(() => {
    setSelectedCountry(findCountryByPhone(value));
  }, [value]);

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%", borderRadius: "10px" }}
      options={COUNTRIES}
      autoHighlight
      getOptionLabel={(option) => `${option.label}`}
      disabled={disabled}
      value={selectedCountry}
      onChange={(event, newValue) => {
        setSelectedCountry(newValue);
        onSelect(newValue ? newValue.code : "");
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0, borderRadius: "10px" } }}
          {...props}
        >
          {` ${option.label}`}
        </Box>
      )}
      renderInput={(params) => (
        <>
          {showTitle && (
            <Box>
              <Typography className="selectCountryLabel">
                Select a country
              </Typography>
            </Box>
          )}
          <TextField
            {...params}
            label={showLabel ? "Choose a country" : null}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
              borderRadius: "10px",
            }}
            error={isTouched && errors !== false && errors !== undefined}
            sx={{
              "& .MuiAutocomplete-inputRoot": {
                paddingLeft: "20px !important",
                borderRadius: "10px",
              },
            }}
          />
        </>
      )}
    />
  );
}
