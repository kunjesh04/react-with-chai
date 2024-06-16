import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h3>Custom App!!!</h3>
    </div>
  )
}

/*const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: "Click me to visit google"
}
*/

const anotherElement = (
<a href="https://google.com" target='_blank'> Visit Google </a>
)


const reactElement = React.createElement(
  'a',
  {
    'href': 'https://google.com',
    'target': '_blank'
  },
  "Click Me to Visit GOOGLE"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
