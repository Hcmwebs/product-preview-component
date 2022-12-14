import React from 'react'
import { StyledCardBody } from '../Styled'
import { Button } from './index'

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
				<div className='price'>
					<span className='main-price'>$149.99</span>
					<span>
						<s>$169.99</s>
					</span>
				</div>
				<Button />
			</StyledCardBody>
		</>
	)
}

export default CardBody
