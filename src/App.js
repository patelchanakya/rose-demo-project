// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '60%',
  height: '100%'
};

// fetchPlaces(mapProps, map) {
//   const {google} = mapProps;
//   const service = new google.maps.places.PlacesService(map);
//   // ...
// }

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  
    activeMarker: {},      
    selectedPlace: {}         
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];

    return (
      // <Map
      //   google={this.props.google}
      //   zoom={14}
      //   style={mapStyles}
      //   initialCenter={
      //     {
      //       lat: 43.6532,
      //       lng: -79.3832
      //     }
      //   }
      // />
      // <Map google={this.props.google}
      //   style={{width: '100%', height: '100%', position: 'relative'}}
      //   initialCenter={
      //     {
      //       lat: 43.6532,
      //       lng: -79.3832
      //     }
      //   }
      //   className={'map'}
      //   zoom={14}>
      //   <Polyline
      //     path={triangleCoords}
      //     strokeColor="#0000FF"
      //     strokeOpacity={0.8}
      //     strokeWeight={2} />
      // </Map>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.6472469,
            lng: -79.373642
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Rose Rocket - Coolest Startup in the World'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      
      
      
      
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default GoogleApiWrapper(
//   (props) => ({
//     apiKey: props.apiKey
//   }
// ))(MapContainer)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAiNmiPiv2gwf68dTfIWwufskD2ZcunAeo'
})(MapContainer);


