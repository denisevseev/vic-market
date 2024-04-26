import { TextField } from "@mui/material";
interface Props {
  label: string;
  value: any;
  onChange: (value: any) => void;
  isTouched: any;
  errors: any;
  type?: string;
  required: boolean;
}
function FloatLabelInputFiled({
  label,
  value,
  onChange,
  isTouched,
  errors,
  type,
  required,
}: Props) {
  return (
    <div>
      <TextField
        required={required}
        type={type ? type : "text"}
        // error={isTouched && errors!== null && errors !== undefined}
        helperText={isTouched && errors ? errors.toString() : ""}
        onChange={onChange}
        className="w-100 form-input-filed"
        id="outlined-basic"
        label={label}
        value={value}
        variant="outlined"
        sx={{ borderRadius: "10px !important" }}
      />
    </div>
  );
}

export default FloatLabelInputFiled;
