import styled from 'styled-components'

const StyledCard = styled.div`
	width: min(100%, 600px);
	max-height: 620px;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
	transition: all 0.8s ease-in-out;

	&:hover {
		box-shadow: 0px 20px 25px 2px rgba(0, 0, 0, 0.25);
	}
	@media (min-width: 600px) {
		max-height: 450px;
		.card-header {
			max-height: 450px;
			img {
				border-radius: 10px 0 0 10px;
			}
		}
	}
`

export default StyledCard
