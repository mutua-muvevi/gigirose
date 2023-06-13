import React from "react";
import { TextField, MenuItem } from "@mui/material";

import { useField, useFormikContext } from "formik";
import { useTheme } from "@emotion/react";

const SelectField = ({
	name,
	size,
	options,
	variant,
	shrink,
	textColor,
	borderColor,
	...otherProps
}) => {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);
	const theme = useTheme();

	const handleChange = (evt) => {
		const { value } = evt.target;
		setFieldValue(name, value);
	};

	const configSelect = {
		...field,
		...otherProps,
		select: true,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		onChange: handleChange,
		InputLabelProps: {
			shrink: shrink ? null : true,
		},
		sx: {
			'& .MuiOutlinedInput-root': {
				color: textColor ? textColor : theme.palette.primary.main,
				'& .MuiOutlinedInput-notchedOutline': {
					borderColor: borderColor ? borderColor : theme.palette.primary.main,
				},
			},
		},
	};

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<TextField {...configSelect}>
			{options.map((item, pos) => {
				return (
					<MenuItem key={pos} value={item.Name}>
						{item.Name}
					</MenuItem>
				);
			})}
		</TextField>
	);
};

export default SelectField;
