import styled from 'styled-components'

const StyledCardBody = styled.div`
	width: 100%;
	padding: 1.5rem;
	display: grid;
	justify-content: start;
	align-items: center;
	gap: 1rem;

	.price {
		width: 100%;
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 1.25rem;
	}

	.main-price {
		font-family: 'Fraunces', serif;
		font-size: 2rem;
		font-weight: 700;
		line-height:2rem;
		color: rgba(61, 129, 104, 1);

	}

	.strike-price{
		font-family: 'Montserrat', sans-serif;
		font-size:13px;
		font-weight: 500;
		line-height: 23px;
		
	}
`
export default StyledCardBody
