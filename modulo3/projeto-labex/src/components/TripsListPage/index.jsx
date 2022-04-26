import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../PageTitle'

function TripsListPage() {
	return (
		<div>
				<PageTitle title={'Lista de Detalhes'}/>
			<Link to={'/viagens/criar'}>
			<Button variant='contained'>Criar viagem</Button>
			</Link>
		</div>
	)
}

export default TripsListPage