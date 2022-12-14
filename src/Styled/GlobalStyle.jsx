import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}

html{
	font-size:100%;
  color-scheme:dark light;
}

body {
	min-height:100vh;
	font-family: 'Montserrat', sans-serif;
  font-weight:500;
	background:rgb(242, 234, 226);
	display: grid;
	place-items: center;

}



h1, h2, p {
  margin:0;
}

h1 {

  font-size: 0.75rem;
  font-weight:500;
  font-family: 'Montserrat', sans-serif;
  line-height:1rem;
  letter-spacing:5px;
  color:rgb(108, 114, 137);
  text-transform: uppercase;

}

h2 {
  font-size: 2.441rem;
  font-weight: 700;
  line-height: 2rem;
  color: rgb(28, 35, 43);
}

p{
  font-size:0.875rem;
  line-height:1.4375rem;
}

img, picture, svg {
  display: block;
  max-width:100%;
}
`

export default GlobalStyle
