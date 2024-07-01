import React, { useState } from "react";
import "./App.css";

const travelData = [
  {
    "departure city": "Paris",
    airports: [
      { airportName: "Charles de Gaulle Airport", distance: "25KM" },
      { airportName: "Orly Airport", distance: "14KM" },
      { airportName: "Beauvais-Tillé Airport", distance: "85KM" },
      { airportName: "Le Bourget Airport", distance: "13KM" },
    ],
    destinations: [
      {
        city: "London",
        airports: [
          { airportName: "Heathrow Airport", distance: "24KM" },
          { airportName: "Gatwick Airport", distance: "45KM" },
          { airportName: "Stansted Airport", distance: "63KM" },
          { airportName: "Luton Airport", distance: "55KM" },
        ],
      },
      {
        city: "Rome",
        airports: [
          { airportName: "Fiumicino Airport", distance: "32KM" },
          { airportName: "Ciampino Airport", distance: "15KM" },
          {
            airportName: "Perugia San Francesco d'Assisi Airport",
            distance: "164KM",
          },
          { airportName: "Pescara Abruzzo Airport", distance: "208KM" },
        ],
      },
      {
        city: "Berlin",
        airports: [
          { airportName: "Berlin Brandenburg Airport", distance: "22KM" },
          { airportName: "Leipzig/Halle Airport", distance: "150KM" },
          { airportName: "Dresden Airport", distance: "172KM" },
          { airportName: "Erfurt-Weimar Airport", distance: "235KM" },
        ],
      },
    ],
  },
  {
    "departure city": "London",
    airports: [
      { airportName: "Heathrow Airport", distance: "24KM" },
      { airportName: "Gatwick Airport", distance: "45KM" },
      { airportName: "Stansted Airport", distance: "63KM" },
      { airportName: "Luton Airport", distance: "55KM" },
    ],
    destinations: [
      {
        city: "Paris",
        airports: [
          { airportName: "Charles de Gaulle Airport", distance: "25KM" },
          { airportName: "Orly Airport", distance: "14KM" },
          { airportName: "Beauvais-Tillé Airport", distance: "85KM" },
          { airportName: "Le Bourget Airport", distance: "13KM" },
        ],
      },
      {
        city: "Rome",
        airports: [
          { airportName: "Fiumicino Airport", distance: "32KM" },
          { airportName: "Ciampino Airport", distance: "15KM" },
          {
            airportName: "Perugia San Francesco d'Assisi Airport",
            distance: "164KM",
          },
          { airportName: "Pescara Abruzzo Airport", distance: "208KM" },
        ],
      },
      {
        city: "Berlin",
        airports: [
          { airportName: "Berlin Brandenburg Airport", distance: "22KM" },
          { airportName: "Leipzig/Halle Airport", distance: "150KM" },
          { airportName: "Dresden Airport", distance: "172KM" },
          { airportName: "Erfurt-Weimar Airport", distance: "235KM" },
        ],
      },
    ],
  },
];

export default function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectStartDate, setSelectStartDate] = useState("");
  const [selectEndDate, setSelectEndDate] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("");
  const [destinationCities, setDestinationCities] = useState("");
  const [travelPlan, setTravelPlan] = useState([]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedAirport("");
    setTravelPlan([]);
  };

  const handleAirportChange = (e) => {
    setSelectedAirport(e.target.value);
    setTravelPlan([]);
  };

  const handleDestinationChange = (e) => {
    setDestinationCities(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setSelectStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setSelectEndDate(e.target.value);
  };

  const handleGeneratePlan = () => {
    const destinations = destinationCities
      .split(",")
      .map((city) => city.trim());
    const plan = [];

    for (let i = 0; i < destinations.length; i++) {
      const departureCity = i === 0 ? selectedCity : destinations[i - 1];
      const destinationCity = destinations[i];

      const departureData = travelData.find(
        (city) => city["departure city"] === departureCity
      );
      if (departureData) {
        const destinationData = departureData.destinations.find(
          (dest) => dest.city === destinationCity
        );
        if (destinationData) {
          const airport = destinationData.airports[0];
          plan.push({
            to: destinationCity,
            airport: airport.airportName,
            distance: airport.distance,
          });
        }
      }
    }

    setTravelPlan(plan);
  };

  const cities = travelData.map((city) => city["departure city"]);
  const airports = selectedCity
    ? travelData.find((city) => city["departure city"] === selectedCity)
        .airports
    : [];

  return (
    <div className="main-page-wrapper">
      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 m-auto">
              <div className="text-wrapper wow fadeInUp">
                <h1 className="hero-heading fw-500 tx-dark text-center">
                  Travel planner
                  <span className="position-relative">
                    <img
                      src="images/lazy.svg"
                      data-src="images/shape/shape_161.svg"
                      alt=""
                      className="lazy-img shapes text-shape"
                    />
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="search-form-bg position-relative wow fadeInUp">
            <form action="#" className="search-area">
              <div className="row gx-0 align-items-center">
                <div className="col-lg-3">
                  <div className="input-block">
                    <div className="title">Departure City</div>
                    <select
                      className="nice-select mt-3"
                      value={selectedCity}
                      onChange={handleCityChange}
                    >
                      <option value="" disabled>
                        Select a city
                      </option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {selectedCity && (
                  <>
                    <div className="col-lg-3">
                      <div className="input-block">
                        <div className="title">Enter start date:</div>
                        <input
                          type="date"
                          className="nice-input mt-3"
                          value={selectStartDate}
                          onChange={handleStartDateChange}
                        />
                      </div>
                    </div>
                    {selectStartDate && (
                      <div className="col-lg-3">
                        <div className="input-block">
                          <div className="title">Enter end date:</div>
                          <input
                            type="date"
                            className="nice-input mt-3"
                            value={selectEndDate}
                            onChange={handleEndDateChange}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
                {selectedCity && selectStartDate && selectEndDate && (
                  <>
                    <div className="col-lg-3">
                      <div className="input-block">
                        <div className="title">Departure Airport</div>
                        <select
                          className="nice-select mt-3"
                          value={selectedAirport}
                          onChange={handleAirportChange}
                        >
                          <option value="" disabled>
                            Select an airport
                          </option>
                          {airports.map((airport) => (
                            <option key={airport.airportName} value={airport.airportName}>
                              {airport.airportName} ({airport.distance})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {selectedAirport && (
                      <div className="col-lg-3">
                        <div className="input-block">
                          <div className="title">Enter destination cities (comma-separated):</div>
                          <input
                            type="text"
                            className="nice-input mt-3"
                            value={destinationCities}
                            onChange={handleDestinationChange}
                          />
                        </div>
                      </div>
                    )}
                    {selectedAirport && destinationCities && (
                      <div className="col-lg-12">
                        <div className="input-block">
                          <button
                            type="button"
                            className="fw-500 tran3s"
                            onClick={handleGeneratePlan}
                          >
                            Generate Travel Plan
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </form>
            {travelPlan.length > 0 && (
              <div style={{marginLeft:"15px"}} className="travel-plan-output mt-5 ">
                <h2 >Your travel plan</h2>
                <div className="travel-plan-details">
                  <p><strong>From:</strong> {selectedCity}</p>
                  <p><strong>Airport:</strong> {selectedAirport}</p>
                  <p><strong>Start date:</strong> {selectStartDate}</p>
                  <p><strong>End date:</strong> {selectEndDate}</p>
                </div>
                {travelPlan.map((leg, index) => (
                  <div key={index} className="travel-plan-leg">
                    <p><strong>To:</strong> {leg.to}</p>
                    <p>
                      <strong>Land at:</strong> {leg.airport} ({leg.distance})
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <img
          src="images/lazy.svg"
          data-src="images/shape/shape_159.svg"
          alt=""
          className="lazy-img shapes shape-one"
        />
      </div>
    </div>
  );
}
