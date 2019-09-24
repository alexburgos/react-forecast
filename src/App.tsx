import React, { useEffect } from 'react';
import useGetForecast from './utils/useGetForecast';
import WeatherCard from './WeatherCard';
import DailyWeatherSummary from './DailyWeatherSummary';

import './App.css';
import loadingSun from './assets/sunny.svg';

const App: React.FC = () => {
	let [forecast] = useGetForecast();
	let { data, isLoading, isError } = forecast;

	console.log(data);

	return (
		<div className="App">
			<header className="App-header">
				<h1>React Cast</h1>
			</header>
			<div className="App-intro">
				<p>
					A small chart that display a forecast of your location's weekly
					forecast. Using the{' '}
					<a href="https://darksky.net/dev/" target="_blank">
						Dark Sky API
					</a>
					.
				</p>
			</div>
			<div className="App-forecast">
				{/* <h3>Get your location</h3> */}
				{isError && <p>There was an issue loading the forecast</p>}
				{isLoading && <img src={loadingSun} alt="loading-sun" />}
				{data && (
					<div className="App-forecast__container">
						<h3>Today's weather:</h3>
						<WeatherCard forecast={data.currently} />
						<h3>This week's weather</h3>
						<div className="App-forecast__week">
							{data.daily.data.map(cast => console.log(cast))}
							{data.daily.data.map(cast => (
								<DailyWeatherSummary forecast={cast} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
