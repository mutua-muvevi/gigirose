import { TextField } from "@mui/material";
import React from "react";
import { useField } from "formik";
import { useTheme } from "@emotion/react";

const TextfieldWrapper = ({
	name,
	variant,
	multiline,
	size,
	shrink,
	textColor,
	borderColor,
	...otherProps
}) => {
	const [field, meta] = useField(name);
	const theme = useTheme();

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		multiline: multiline === true ? multiline : false,
		InputLabelProps: {
			shrink: shrink ? null : true,
		},
		inputProps: {
			style: {
				color: textColor ? textColor : theme.palette.primary.main,
				"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
					borderColor: borderColor
						? borderColor
						: theme.palette.primary.main,
				},
				borderColor: borderColor ? borderColor : theme.palette.primary.main,
			},
		},
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}

	return <TextField {...configTextField} />;
};

export default TextfieldWrapper;
