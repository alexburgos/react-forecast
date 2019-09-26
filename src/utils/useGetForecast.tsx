import { useState, useEffect } from 'react';
import {
	Currently,
	Minutely,
	Hourly,
	Daily,
	Alert,
	Flags
} from '../interfaces/index';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_URL =
	'https://api.darksky.net/forecast/f5eace3ac736c12a2aa36bef1d500399/'; //coordinates need to come from locator

interface ForecastInterface {
	latitude: number;
	longitude: number;
	timezone: string;
	currently: Currently;
	minutely: Minutely;
	hourly: Hourly;
	daily: Daily;
	alerts: Alert[];
	flags: Flags;
	offset: number;
}

const useForecastAPI = () => {
	const [data, setForecast] = useState<ForecastInterface | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);



	useEffect(() => {
		if ('geolocation' in navigator) {
			let options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			};

			navigator.geolocation.getCurrentPosition(
				pos => {
					let { coords } = pos;
					let locationString: string = `${PROXY}${API_URL}${coords.latitude},${coords.longitude}`;

					const fetchForecastData = async () => {
						setIsError(false);
						try {
							let response = await fetch(locationString);
							let data = await response.json();
							setIsLoading(false);
							return data;
						} catch (error) {
							setIsLoading(false);
							setIsError(true);
						}
					};

					fetchForecastData().then(data => setForecast(data));
				},
				err => {
					console.warn(`ERROR(${err.code}): ${err.message}`);
				},
				options
			);
		} else {
			alert('Sorry but this app only works if your browser supports the GeoLocation API')
		}
	}, []);

	return [{ data, isLoading, isError }];
};

export default useForecastAPI;
