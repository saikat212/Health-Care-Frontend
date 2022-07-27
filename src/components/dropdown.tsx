/* import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "@mui/material";

export interface DropDownProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  label: string;
  optionLabel: string;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}
export default function DropDown<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(props: DropDownProps<T, Multiple, DisableClearable, FreeSolo>) {
  const { label, optionLabel, ...others } = props;
  return (
    <Autocomplete
      {...others}
      onChange={(event, newVal, reason) => {
        console.log(event);
        console.log(props.onChange);
        props.onChange && props.onChange(event, newVal, reason);
      }}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        // props.onClick && props.onClick(event);
      }}
      componentsProps={{
        paper: {
          onClick: (event) => {
            event.preventDefault();
            event.stopPropagation();
            // props.onClick && props.onClick(event);
          },
        },
      }}
      autoHighlight
      // @ts-ignore
      getOptionLabel={(option: object) => option[props.optionLabel]}
      renderInput={(params) => (
        <TextField
          {...params}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // props.onClick && props.onClick(event);
          }}
          fullWidth
          label={props.label}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}


 */
export {}