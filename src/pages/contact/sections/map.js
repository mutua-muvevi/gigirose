import { Box } from "@mui/material";
import { styled } from "@mui/system";

const mapUrl="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7977.514153031639!2d36.810853344595934!3d-1.3215338315774583!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1673348269508!5m2!1sen!2ske"

const StyledMap = styled(Box)(({ theme }) => ({
	height: "60vh"
}))

const iframeStyle = {
	height: "100%",
	width: "100%",
	border:"0"
}

const Map = () => {
	return (
		<StyledMap>
			<iframe
				src={mapUrl}
				allowFullScreen=""
				loading="lazy"
				style={iframeStyle}
				title="Location to Skydive offices">

			</iframe>
		</StyledMap>
	)
}

export default Map