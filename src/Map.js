import React, {
  Component
} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    const app = this.props.app;

    mapbox.accessToken =
      'pk.eyJ1IjoiYXNhZmRhciIsImEiOiJja2ZyOW4wNmEwMnJiMnlvMmthemZicnBqIn0.-nFPGqqTQ7k2w_UQm0S2Mg';

    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [app.state.longitude, app.state.latitude],
      zoom: 10,
    });

    map.addControl(new mapbox.NavigationControl());

    app.setState({
      map: map,
    });
  }

  render() {
    const app = this.props.app;
    const map = app.state.map;
    if (map) {
      map.setStyle(app.state.style);
    }
    return <div id = "map" > < /div>;
  }
}

export default Map;
