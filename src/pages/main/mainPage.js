import React, { useEffect, useState } from "react";
import CountryCard from "../../components/countryCard";
import { useCountriesContext } from "../../countriesContext";
import SelectList from "../../components/selectList";
import _ from "lodash";

import "./styles.scss";

const MainPage = () => {
  const { countries, fetchCountries } = useCountriesContext();
  const [filteredCountries, setFilteredContries] = useState();

  const filterByRegion = region => {
    const coutriesByRegion = _.filter(countries, { region: region });
    setFilteredContries(coutriesByRegion);
  };

  useEffect(() => {
    if (!countries) {
      fetchCountries();
    } else {
      setFilteredContries(countries);
    }
  }, [countries, fetchCountries]);

  return (
    <section className="countries main">
      <div className="container">
        <div className="flex">
          <div className="col--12">
            <div className="countries-filters">
              <div className="flex flex--between">
                <div className="col col--12 col__lg--5">
                  {/* <Search
                    onChange={this.searchUpdated}
                    onReset={this.resetSearch}
                  /> */}
                  <span>Search Here</span>
                </div>
                <div className="col col--6 col__lg--2">
                  <SelectList
                    placeholder="Filter by Region"
                    items={[
                      { value: "Africa", label: "Africa" },
                      { value: "Americas", label: "Americas" },
                      { value: "Asia", label: "Asia" },
                      { value: "Europe", label: "Europe" },
                      { value: "Oceania", label: "Oceania" }
                    ]}
                    onChange={filterByRegion}
                  />
                </div>
              </div>
            </div>
            <div className="countries-list">
              <div className="flex">
                {filteredCountries ? (
                  filteredCountries.map(country => (
                    <CountryCard key={1} country={country} />
                  ))
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
