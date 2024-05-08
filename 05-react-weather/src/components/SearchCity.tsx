import { useState } from 'react';
import { getCurrentWeather } from "../services/OWMAPI";

const SearchCity = () => {
    const [city, setCity] = useState("");

    const handleSearchFormSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        let data;
        
		try {
			data = await getCurrentWeather(city);
		} catch (error) {
			alert("City not FOUND!")
		}
        console.log(city,data);
		setCity("")
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    return (
        <div id="search-wrapper">
            <form id="search-form" onSubmit={handleSearchFormSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city to search for"
                        aria-label="City"
                        aria-details="Search for city to show current weather for."
                        value={city} 
                        onChange={handleInputChange} 
                    />

                    <button type="submit" className="btn btn-success">
                        🔍
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchCity;
