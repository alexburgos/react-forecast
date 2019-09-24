import React from 'react';
import { Datum3 } from './interfaces/index';

interface Props {
	forecast: Datum3;
}

const DailyWeatherSummary: React.FC<Props> = props => {
	let { forecast } = props;

	return (
		<div className="App-forecast__summary">
			<div className="App-forecast__card-temperatures">
				<p>Temperatures</p>
				<span className="App-forecast__card-temperatures--min">
					<span>High: {Math.round(forecast.temperatureMin)}</span>
					<sup>°</sup>
				</span>
				<span className="App-forecast__card-temperatures--max">
					<span>Low: {Math.round(forecast.temperatureMax)}</span>
					<sup>°</sup>
				</span>
			</div>
			<span className="App-forecast__card-precipitation">
				Precipitation: {Math.round(forecast.precipProbability * 100)}%{' '}
			</span>
		</div>
	);
};

export default DailyWeatherSummary;
