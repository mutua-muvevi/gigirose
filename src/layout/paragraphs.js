import { Typography } from "@mui/material";
import { styled } from "@mui/system";

import { useTheme } from "@emotion/react";

const ReusableParagraphs = ({ paragraph, color }) => {
	const theme = useTheme();
	return (
		<>
			{paragraph
				? paragraph.map((p, i) => (
						<Typography
							variant="body1"
							sx={{
								color: color
									? color
									: theme.palette.text.secondary,

							}}
							key={i}
						>
							{p}
						</Typography>
				  ))
				: ""}
		</>
	);
};

export default ReusableParagraphs;
