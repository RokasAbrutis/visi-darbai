import Nav from './components/Nav.js';
import Card from './components/Card.js';
import data from './data.js'
export default function App() {

  let dataElements = data.map(d => {
    return (
      <Card 
      item={d}
      />
    )
  })

  return (
    <div>
      <Nav />
      {dataElements}
    </div>
  )
}