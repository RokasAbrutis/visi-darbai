import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Cards from './components/Cards.js'
import data from './data.js'
export default function App() {

  let dataElements = data.map((d) => {
    return (
    <Cards
    key={d.id}
    item = {d}
    />

  )})

  return (
    <div>
      <Nav />
      <Main />
      <div className="card">
        {dataElements}
      </div>
    </div>
  )
}