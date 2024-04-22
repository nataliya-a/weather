import './WeatherCard.css'

export default function WeatherCard({data}) {
    const { city, temp, weather, icon } = data
    return (
        <div className="weather-card">
            <img src={icon} alt = "weather icon" /> 
            <h2>{city}</h2>
            <div className="weather-info">
                <p>{temp}°C</p>
                <p>{weather}</p>
            </div>
        </div>
    )
}