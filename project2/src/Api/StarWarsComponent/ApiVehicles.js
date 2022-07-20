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
	
	const [vehicles, setVehicles] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/vehicles/')
			.then(data => {
				setVehicles(data.data.results);
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
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Name</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Model</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Passengers</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Manufacturer</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						vehicles.map(truck => {
							return (
								<TableRow
									key={truck.id}
									sx={{'&:last-child td, &:last-child th' : {border: 0}}}
								>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{truck.name}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{truck.model}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{truck.passengers}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{truck.manufacturer}</TableCell>
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