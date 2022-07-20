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
	
	const [people, setPeople] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people/')
			.then(data => {
				setPeople(data.data.results);
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
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Gender</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Height</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Mass</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						people.map(person => {
							return (
							<TableRow
								key={person.id}
								sx={{'&:last-child td, &:last-child th' : {border: 0}}}
							>
								<TableCell sx={{ color: "white", textAlign: "center"  }}>{person.name}</TableCell>
								<TableCell sx={{ color: "white", textAlign: "center"  }}>{person.gender}</TableCell>
								<TableCell sx={{ color: "white", textAlign: "center"  }}>{person.height}</TableCell>
								<TableCell sx={{ color: "white", textAlign: "center"  }}>{person.mass}</TableCell>
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