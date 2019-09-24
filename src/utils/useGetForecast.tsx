import React, { useState, useEffect } from 'react';
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
	'https://api.darksky.net/forecast/f5eace3ac736c12a2aa36bef1d500399/37.8267,-122.4233'; //coordinates need to come from locator
const SECRET_KEY = 'f5eace3ac736c12a2aa36bef1d500399';

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
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchForecastData = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				let response = await fetch(PROXY + API_URL);
				let data = await response.json();
				setIsLoading(false);
				return data;
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
			}
		};

		fetchForecastData().then(data => setForecast(data));
	}, []);

	return [{ data, isLoading, isError }];
};

export default useForecastAPI;
