import React from 'react'
import { StyledCardBody } from '../Styled'
import { Button } from './Button'

const CardBody = () => {
	return (
		<>
			<StyledCardBody>
				<h1>Perfume</h1>
				<h2>Gabrielle Essence Eau De Parfum</h2>
				<p>
					A floral, solar and voluptuous interpretation composed by Olivier
					Polge, Perfumer-Creator for the House of CHANEL.
				</p>

				<Button />
			</StyledCardBody>
		</>
	)
}

export default CardBody
