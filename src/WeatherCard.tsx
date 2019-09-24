import React from 'react';
import { Currently } from './interfaces/index';

interface Props {
  forecast: Currently;
}

const WeatherCard: React.FC<Props> = (props) => {
  let { forecast } = props;

	return (
		<div className="App-forecast__card">
			<span className="App-forecast__card--temperature">
				Temperature: {Math.round(forecast.temperature)}
				<sup>°</sup>
			</span>
			<span className="App-forecast__card--precipitation">
				Precipitation: {Math.round(forecast.precipProbability * 100)}%{' '}
			</span>
			<span className="App-forecast__card--wind">
				Wind Speed: {Math.round(forecast.windSpeed)}mph{' '}
			</span>
		</div>
	);
};

export default WeatherCard;
