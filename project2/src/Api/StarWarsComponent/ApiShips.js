import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	
} from "@mui/material";

const ApiPeoples = () => {
	
	const [ship, setShip] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/starships/')
			.then(data => {
				setShip(data.data.results);
			})
			.catch(error => {
				console.error(error);
			})
	}, [])
	
	return (
		<TableContainer sx={{width: "1000px", margin: "auto"}}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						<></>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Name</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Model</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Length</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Rating</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						ship.map(starShip => {
							return (
								<TableRow
									key={starShip.id}
									sx={{'&:last-child td, &:last-child th' : {border: 0}}}
								>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{starShip.name}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{starShip.model}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{starShip.length}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{starShip.hyperdrive_rating}</TableCell>
								</TableRow>
							)
						})
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ApiPeoples;