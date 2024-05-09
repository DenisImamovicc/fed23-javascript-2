import { useState } from "react";

interface SearchCityProps {
	onSearch: (location: string) => void;
}

const SearchCity: React.FC<SearchCityProps> = ({ onSearch }) => {
	const [city, setCity] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Pass `city` to parent component (App)
		onSearch(city.trim());

		// Clear `city` state
		setCity("");
	};

	return (
		<div id="search-wrapper">
			<form onSubmit={handleSubmit} id="search-form">
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Enter city to search for"
						aria-label="City"
						aria-details="Search for city to show current weather for."
						onChange={(e) => setCity(e.target.value)}
						value={city}
					/>

					<button disabled={city.trim().length < 3} type="submit" className="btn btn-success">
						🔍
					</button>
				</div>
				{city.length < 3 && city !== "" && (
					<span className="text-white">You need to be atleast 3 nonspace chars long to take this ride!</span>
				)}
			</form>
		</div>
	);
};

export default SearchCity;
