<p align="center">
  <img src="https://www.htmlhints.com/image/react/reactWeatherApp.png" width="100%">
</p>

<p align="center">
  <strong><a href="https://www.htmlhints.com/article/how-to-create-weather-app-using-reactjs-with-current-location-search-city/93">
    Full Installation Guide</a></strong>
</p>

<p align="center">
  <strong><a href="https://master.d2gxbs6vwhkz68.amplifyapp.com/">Live Demo</a></strong>
</p>

---

## Project Overview

This is a simple and responsive weather dashboard built using React.js. It allows users to search for any city and see the current weather data fetched from the OpenWeatherMap API. The interface is clean and works well on both desktop and mobile devices.

---

## Tech Stack

- React.js
- CSS (or Tailwind/MUI if used)
- OpenWeatherMap API
- Deployed using AWS Amplify

---

## API Details

The app uses OpenWeatherMap's Current Weather API to fetch real-time weather updates.

- API Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Units: Metric (Celsius)
- Rate Limit: 60 API calls per minute (free tier)
- Set your API key in a `.env` file as:


---

## Setup Instructions

Follow the steps below to run the app locally:

```bash

cd weather-dashboard
npm install
npm start
