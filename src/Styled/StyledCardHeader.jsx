import styled from 'styled-components'

const StyledCardHeader = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	/* max-height: 240px; */

	img {
		object-fit: cover;
		border-radius: 10px 10px 0 0;
		overflow: hidden;
	}
`

export default StyledCardHeader
