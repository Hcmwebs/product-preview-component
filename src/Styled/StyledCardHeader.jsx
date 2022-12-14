import styled from 'styled-components'

const StyledCardHeader = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	height: 240px;

	img {
		height: 100%;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
		overflow: hidden;
	}
`

export default StyledCardHeader
