import React from 'react';
import { Datum3 } from './interfaces/index';

interface Props {
	forecast: Datum3;
}

const DailyWeatherSummary: React.FC<Props> = props => {
	let { forecast } = props;

	return (
		<div className="App-forecast__summary">
			<span className="App-forecast__summary-temperatures">
				<span>Temperatures</span>
				<span className="App-forecast__summary-temperatures--min">
					<span>High: {Math.round(forecast.temperatureMin)}</span>
					<sup>°</sup>
				</span>
				<span className="App-forecast__summary-temperatures--max">
					<span>Low: {Math.round(forecast.temperatureMax)}</span>
					<sup>°</sup>
				</span>
			</span>
			<span className="App-forecast__summary-precipitation">
				Precipitation: {Math.round(forecast.precipProbability * 100)}%{' '}
			</span>
			<span className="App-forecast__summary-wind">
				Wind Speed: {Math.round(forecast.windSpeed)}mph{' '}
			</span>
		</div>
	);
};

export default DailyWeatherSummary;
