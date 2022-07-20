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
	
	const [planet, setPlanet] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/planets/')
			.then(data => {
				setPlanet(data.data.results);
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
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Population</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Climate</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Gravity</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						planet.map(world => {
							return (
								<TableRow
									key={world.id}
									sx={{'&:last-child td, &:last-child th' : {border: 0}}}
								>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{world.name}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{world.population}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{world.climate}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{world.gravity}</TableCell>
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