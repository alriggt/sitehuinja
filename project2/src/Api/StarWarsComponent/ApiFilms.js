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
	
	const [film, setFilm] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://swapi.dev/api/films/')
			.then(data => {
				setFilm(data.data.results);
			})
			.catch(error => {
				console.error(error);
			})
	}, [])
	
	return (
		<TableContainer sx={{width: "1000px", margin: "auto"}}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow className="table-title">
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Director</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Producer</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Episode Id</TableCell>
						<TableCell sx={{ color: "white", textAlign: "center"  }}>Release Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						film.map(cinema => {
							return (
								<TableRow
									className="table-content"
									key={cinema.id}
									sx={{'&:last-child td, &:last-child th' : {border: 0}}}
								>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{cinema.director}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{cinema.producer}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{cinema.episode_id}</TableCell>
									<TableCell sx={{ color: "white", textAlign: "center"  }}>{cinema.release_date}</TableCell>
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