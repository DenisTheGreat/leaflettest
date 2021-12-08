import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { CreateClusterCustomIcon , CustomIcon } from "./Icons";
import logo from './logo.svg';
import './App.css';
import * as data from "./data.json";

function App() {
  const [activeWorkplace, setActiveWorkplace] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GIS, hvem jobber hvor!
        </p>
      </header>
        <div id="leaflet-container">
          <MapContainer center={[59.9139, 10.7522]} zoom={12} scrollWheelZoom={true}>
            <TileLayer 
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
              <MarkerClusterGroup 
                removeOutsideVisibleBounds
                iconCreateFunction={CreateClusterCustomIcon} showCoverageOnHover={false}>
                  {data.features.map(workplace => (
                        <Marker
                          key={workplace.properties.Office_ID}
                          position={[workplace.geometry.coordinates[0], workplace.geometry.coordinates[1]]}
                          icon={CustomIcon(workplace.properties.Icon)}
                          onClick={() => {
                            setActiveWorkplace(workplace);
                          }} 
                        >
                          <Popup
                          onClose={() => {
                            setActiveWorkplace(null);
                          }}>
                            <b>{workplace.properties.Name}</b>
                            <p>{workplace.properties.Description}</p>
                          </Popup>
                          </Marker>                      
                  ))}
              </MarkerClusterGroup>
          </MapContainer>
        </div>
    </div>
  );
}

export default App;
