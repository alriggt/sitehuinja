import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogContentText, Box} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import "../ModalWindow/ContactWin.scss"
import message from "../img/message.svg"
import loc from "../img/location.svg"
import phone from "../img/phone.svg"
import theme from "./Palette";
import {ThemeProvider} from "@mui/material";

const ContactWin = ({click, setClick}) => {
	
	return (
		<ThemeProvider theme={theme}>
			<Dialog open={click} onClose={() => setClick(false)}>
				<DialogTitle>Contact US</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<div className="icons"><img src={message} alt="" /><a href="#">Company@gmail.com.com</a></div>
						<div className="icons"><img src={phone} alt="" /><a href="#">Phone: (064) 332-1233</a></div>
						<div className="icons"><img src={loc} alt="" /><a href="#">C450 Wall Street, USA, New York</a></div>
					</DialogContentText>
					<TextField
						style={{marginTop: "30px"}}
						autoFocus
						margin="dense"
						id='name'
						label="Email Adress"
						fullWidth
					/>
				</DialogContent>
				<Box>
				<Button style={{margin: "10px 20px"}} onClick={() => setClick(false)}>Cancel</Button>
				<Button style={{margin: "10px 20px"}} onClick={() => setClick(false)}>Ti Pidor</Button>
				</Box>
			</Dialog>
		</ThemeProvider>
	);
};

export default ContactWin;