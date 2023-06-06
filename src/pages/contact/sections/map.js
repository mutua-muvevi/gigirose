import { Box } from "@mui/material";
import { styled } from "@mui/system";

const mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158890.6324489465!2d-0.2073500895433038!3d51.51934093518178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1686072953428!5m2!1sen!2ske"

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
				title="Location to gigirose offices">
			</iframe>
		</StyledMap>
	)
}

export default Map