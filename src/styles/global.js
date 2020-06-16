import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
  font-family: 'Merriweather', serif;
   --borderHighlight: #333;
    --borders: #262626;
    --texts: #eee;
    --postColor: #fff;
    --highlight: #99caee;
    --black: #222;
    --highlightDark: #233240;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



 .Button__primary {
  font-family: "Montserrat";
  text-decoration: none;
  display: inline-block;
  background: var(--highlight);
  padding: 1rem;
  border-radius: 0.25rem;
  color: var(--highlightDark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: all ease-in 0.2s;
  &:hover {
    background: var(--highlightDark);
    color: var(--texts);
  }}


.Button__secondary {
  text-decoration: none;
  display: inline-block;
  color: var(--highlight);
  font-size: 0.75rem;
  transition: all ease-in 0.2s;
  &:hover {
    color: var(--texts);
  }
}

`