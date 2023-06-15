import {
	Box,
	Button,
	Card,
	CardHeader,
	Pagination,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import {
	DataGrid,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from "@mui/x-data-grid";
import { FaRegEye } from "react-icons/fa";

const StyledDataGridContainer = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.default,
}));

const StyledDataGridHeader = styled(CardHeader)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	fontFamily: "'Rubik', sans-serif",
	padding: 15,
}));

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	border: "none",
	backgroundColor: theme.palette.background.paper,
	width: "100%",
	borderRadius: theme.shape.default,
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: theme.palette.primary.light,
		color: "#fff",
		fontSize: 18,
		paddingTop: 2,
		paddingBottom: 2,
	},
	"& .MuiDataGrid-virtualScrollerRenderZone": {
		"& .MuiDataGrid-row": {
			"&:nth-of-type(2n)": {
				backgroundColor: theme.palette.background.default,
			},
		},
	},
}));

const CustomPagination = () => {
	const apiRef = useGridApiContext();
	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<Pagination
			color="primary"
			count={pageCount}
			page={page + 1}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
		/>
	);
}

const Wrapper = styled(Box)(({ theme }) => ({}));

const DashContact = ({ contacts }) => {
	const column = [
		{
			field: "fullname",
			headerName: "Fullname",
			minWidth: 200,
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			minWidth: 200,
			flex: 1,
		},
		{
			field: "subject",
			headerName: "Subject",
			minWidth: 200,
			flex: 1,
		},
		{
			field: "message",
			headerName: "Message",
			minWidth: 400,
			flex: 2,
		},
		{
			field: "createdAt",
			headerName: "Date",
			minWidth: 100,
			flex: 0.75,
			valueFormatter: (params) =>
				new Date(params.value).toLocaleDateString("en-US", {
					month: "long",
					day: "numeric",
					year: "numeric",
				}),
		},
	];

	return (
		<Wrapper>
			<Typography
				variant="h3"
				color="primary"
				sx={{
					mb: 3,
					fontWeight: "700",
					fontFamily: "'Merienda', cursive",
				}}
			>
				My Contact Messages
			</Typography>

			<StyledDataGridContainer>
				<StyledDataGridHeader title="Contact Messages" />

				<StyledDataGrid
					rows={contacts}
					columns={column}
					pagination
					autoPageSize
					autoHeight
					getRowId={(row) => row._id}
					pageSize={20}
					components={{
						Pagination: CustomPagination,
					}}
				/>
			</StyledDataGridContainer>
		</Wrapper>
	);
};

const mapStateToProps = ({ contact }) => ({
	contacts: contact.fetch.data,
});

export default connect(mapStateToProps)(DashContact);
