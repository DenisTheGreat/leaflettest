import logo from './logo.svg'
import './App.css'
import Map from './map/Map'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>GIS, hvem jobber hvor!</p>
            </header>
            <Map />
        </div>
    )
}

export default App
