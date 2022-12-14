import styled from 'styled-components'

const StyledButton = styled.button`
	width: 100%;
	padding: 0.75rem 1.5rem;
	font-size: 0.8375rem;
	line-height: 17px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	color: #fff;
	background-color: rgb(61, 129, 104);
	outline: none;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: rgb(26, 64, 50);
	}
`

export default StyledButton
