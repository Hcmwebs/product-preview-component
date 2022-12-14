import React from 'react'

import { StyledCardHeader } from '../Styled'

const CardHeader = () => {
	return (
		<>
			<StyledCardHeader>
				<picture>
					<source
						srcSet='./assets/image-product-desktop.jpg'
						media=' (min-width: 600px)'
					/>
					<img src='./assets/image-product-mobile.jpg' alt='product preview' />
				</picture>
			</StyledCardHeader>
		</>
	)
}

export default CardHeader
