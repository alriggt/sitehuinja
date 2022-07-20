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
	
	const [species, setSpecies] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/species/')
			.then(data => {
				setSpecies(data.data.results);
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
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Classification</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Designation</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Language</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						species.map(kind => {
							return (
								<TableRow
									key={kind.id}
									sx={{'&:last-child td, &:last-child th' : {border: 0}}}
								>
									<TableCell sx={{ color: "white", textAlign: "center" }}>{kind.name}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{kind.classification}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{kind.designation}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{kind.language}</TableCell>
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