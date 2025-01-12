//import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

/*const reactElement = {
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit Google'
}*/

const anotherElement =(
  <a href='https://google.com' target='_self'>Visit Google</a>
)

const anotherUser ='Chai and React !'

const reactElement = React.createElement(
  'a', 
  {href:'https://google.com',target:'_blank'}, 
  'Click Me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  //App
    // MyApp()
    //<MyApp/>
    //anotherElement
    //reactElement

    //<App/>

    reactElement
)
