
import { IoIosBook } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

const sx= {
	minWidth: 0,
	// mr: open ? 3 : 'auto',
	justifyContent: 'center',
}

export const listItemsTop = [
	{
		label: "Bookings",
		path: "/admin/bookings",
		icon: <IoIosBook style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Services",
		path: "/admin/services",
		icon: <AiFillAppstore style={sx}/>,
		nested: [
			{}
		],
	},
	{
		label: "Contacts",
		path: "/admin/contacts",
		icon: <MdContacts style={sx}/>,
		nested: [
			{}
		],
	},
]

export const listItemsBottom = [
	// {
	// 	label: "Settings",
	// 	path: "#",
	// 	icon:  <SettingsIcon sx={sx}/>,
	// 	nested: [
	// 		{}
	// 	],
	// },
]