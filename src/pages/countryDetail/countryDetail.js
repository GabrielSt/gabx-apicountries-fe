import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import _ from "lodash";

import { getCountry } from "../../services/countries";
import { useCountriesContext } from "../../countriesContext";

import "./styles.scss";

const CountryDetail = props => {
  const { countries, fetchCountries } = useCountriesContext();
  const alpha = props.match.params.alpha;
  const [country, setCountry] = useState();

  const borderName = code => {
    return _.find(countries, country => {
      return country.alpha3Code === code;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountry(alpha);
      setCountry(data);
      if (!countries) await fetchCountries();
    };
    fetchData();
  }, [alpha, countries, fetchCountries]);

  if (country && countries) {
    return (
      <section className="country-details">
        <div className="container">
          <div className="flex">
            <div className="col--12">
              <div className="flex flex--middle">
                <div className="col col--12">
                  <div className="btn-back-action">
                    <Link to="/" className="btn">
                      <MdKeyboardBackspace />
                      <span>Back</span>
                    </Link>
                  </div>
                </div>
                <div className="col col__lg--6">
                  <div className="country-flag">
                    <img src={country.flag} alt={country.name} />
                  </div>
                </div>
                <div className="col col__lg--6">
                  <h1 className="country-name">{country.name}</h1>
                  <div className="flex">
                    <div className="col--12 col__md--6 col__lg--6">
                      <div className="country-info">
                        <p className="country-info-infos">
                          <strong>Native Name: </strong>
                          {country.nativeName}
                        </p>
                        <p className="country-info-infos">
                          <strong>Population: </strong>
                          {country.population.toLocaleString()}
                        </p>
                        <p className="country-info-infos">
                          <strong>Region: </strong>
                          {country.region}
                        </p>
                        <p className="country-info-infos">
                          <strong>Sub Region: </strong>
                          {country.subregion}
                        </p>
                        <p className="country-info-infos">
                          <strong>Capital: </strong>
                          {country.capital}
                        </p>
                      </div>
                    </div>
                    <div className="col--12 col__md--6 col__lg--6">
                      <div className="country-info">
                        <p className="country-info-infos">
                          <strong>Top Level Domain: </strong>
                          {country.topLevelDomain.join(", ")}
                        </p>
                        <p className="country-info-infos">
                          <strong>Currencies: </strong>
                          {country.currencies.map(e => e.name).join(", ")}
                        </p>
                        <p className="country-info-infos">
                          <strong>Languages: </strong>
                          {country.languages.map(e => e.name).join(", ")}
                        </p>
                      </div>
                    </div>
                    {country.borders.length > 0 && (
                      <div className="col--12">
                        <div className="country-borders">
                          <p className="country-info-infos">
                            <strong>Border countries: </strong>
                          </p>
                          <div className="borders">
                            {country.borders.map((border, i) => {
                              const countryBorder = borderName(border);
                              return (
                                <Link
                                  key={i}
                                  to={`/country/${countryBorder.alpha3Code}`}
                                >
                                  <div className="country-border">
                                    <span>{countryBorder.name}</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default CountryDetail;
