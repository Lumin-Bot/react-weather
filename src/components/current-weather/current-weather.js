import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">New York City</p>
          <p className="weather-description">Cloudy</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/04d.png" />
      </div>

      <div className="bottom">
        <p className="temp">18℃</p>

        <div className="details">
          <div className="row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">22℃</span>
          </div>

          <div className="row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>

          <div className="row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">70%</span>
          </div>

          <div className="row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
