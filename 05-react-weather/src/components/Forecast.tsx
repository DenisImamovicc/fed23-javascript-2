import dayBanner from "../assets/images/day.svg";
import nightBanner from "../assets/images/night.svg";
import { WeatherReport } from "../services/OWMAPI.types";

interface ForecastProps {
	data: WeatherReport;
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
	const handleBannerRenderByTime = (data:WeatherReport) => {
		return data.weather[0].icon[data.weather[0].icon.length] === "d" 
		? dayBanner 
		: nightBanner
	};

	return (
		<div id="forecast">
			<div className="card">
				<img src={`${handleBannerRenderByTime(data)}`} className="card-img-top" alt="Daytime, nighttime, daytime, nighttime" />

				<div className="card-body">
					<h5 className="card-title" id="location">
						<img
							src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
							alt={`${data.weather[0].description} icon`}
							title={`${data.weather[0].description}`}
						/>
						<span id="city">{data.name}</span>,<span id="country">{data.sys.country}</span>
					</h5>

					<p className="temp">
						<span id="temperature">{data.main.temp}</span>
						&deg;C
					</p>

					<p className="humidity">
						<span id="humidity">{data.main.humidity}</span> % humidity
					</p>

					<p className="wind">
						<span id="windspeed">{data.wind.speed}</span> m/s
					</p>

					{/*
					<ul className="conditions">
						<li><img src="" title="CONDITION_MAIN" alt="CONDITION_MAIN">CONDITION_DESCRIPTION</li>
					</ul>
					*/}
					<p className="text-muted small">
						<span>
							{`${Date(data.dt)}`}
						</span>
					</p>
					
				</div>
			</div>
		</div>
	);
};

export default Forecast;
