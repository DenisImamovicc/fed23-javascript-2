import { useState } from "react";
import Forecast from "./components/Forecast";
import SearchCity from "./components/SearchCity";
import { getCurrentWeather } from "./services/OWMAPI";
import { WeatherReport } from "./services/OWMAPI.types";
import "./assets/scss/App.scss";

function App() {
	const [currentWeather, setCurrentWeather] = useState<WeatherReport | null>(null);
	const [isLoading, setisLoading] = useState(false);
	const [isErr, setisErr] = useState(false);

	const handleisLoading = (input: boolean) => setisLoading(input);

	const handleisErr = (input: boolean) => setisErr(input);


	const handleSearch = async (location: string) => {
		console.log("Someone wants the weather for:", location);
		setCurrentWeather(null);
		handleisErr(false);
		handleisLoading(true);
		try {
			setCurrentWeather(await getCurrentWeather(location));
		} catch (error) {
			handleisErr(true);
		}
		handleisLoading(false);
	};

	return (
		<div id="app" className="container">
			<SearchCity onSearch={handleSearch} />
			{isLoading && <img src="src/assets/images/747.svg"></img>}
			{isErr && (
				<div className="alert alert-warning" role="alert">
					City does not exist.Try something else
				</div>
			)}
			{currentWeather && <Forecast data={currentWeather} />}
		</div>
	);
}

export default App;
