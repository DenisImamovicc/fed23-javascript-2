import Forecast from "./components/Forecast";
import SearchCity from "./components/SearchCity";
import "./assets/scss/App.scss";
import { useState } from "react";
import { WeatherReport } from "./services/OWMAPI.types";

function App() {
	const [WeatherRapport, setWeatherRapport] = useState<WeatherReport | null>(null);

	const handleSetWeatherRapport = (input:WeatherReport|null) => setWeatherRapport(input)
	

	return (
		<div id="app" className="container">
			<SearchCity handleSetWeatherRapport={handleSetWeatherRapport}/>

			<Forecast WeatherRapport={WeatherRapport}/>
		</div>
	);
}

export default App;
