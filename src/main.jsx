import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name = 'Matviy'
const element = React.createElement("h1", null, name)

const paragraph = "Welcome to our site!";
const element2 = React.createElement(
  "p",
  null,
  paragraph
);

const imageUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const alt = 'taco'
const element3 = React.createElement("img", {
  src: imageUrl,
  alt: alt
}
)

const favouriteSite = {
  site: 'Google',
  url: " https://www.google.com/"
}

const element4 = (<a href={favouriteSite.url}>{favouriteSite.site}</a>)

let v1 = 3
let v2 = 10

const sum = v1 + v2
const element5 = React.createElement("p", null, sum )

const colors = ['red', 'blue', 'yellow'];
const element6 = React.createElement("ul", null, colors.map(color => {
  return <li key={color}>{color}</li>
}))

console.log(element5)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {element}
    {element2}
    {element3}
    {element4}
    {element5}
    {element6}
    </>
  </StrictMode>
);