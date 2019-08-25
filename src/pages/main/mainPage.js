import React, { useEffect } from "react";
import CountryCard from "../../components/countryCard";
import { useCountriesContext } from "../../countriesContext";

import "./styles.scss";

const MainPage = () => {
  const { countries, fetchCountries } = useCountriesContext();

  useEffect(() => {
    if (!countries) fetchCountries();
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
                  {/* <Dropdown
                    placeholder="Filter by region"
                    items={[
                      { value: "Africa", id: 1 },
                      { value: "America", id: 2 },
                      { value: "Asia", id: 3 },
                      { value: "Europe", id: 4 },
                      { value: "Oceania", id: 5 }
                    ]}
                    onChange={this.filterUpdated}
                  /> */}
                  <span>Dropdown Here</span>
                </div>
              </div>
            </div>
            <div className="countries-list">
              <div className="flex">
                {/* {chunk(filtered.slice(0, this.state.postsToShow)).map(
                  (chunk, i) =>
                    chunk.map(node => (
                      <CountryBox key={`chunk-${i}`} country={node.node} />
                    ))
                )} */}
                {countries ? (
                  <CountryCard key={1} country={countries[0]} />
                ) : (
                  <div />
                )}

                <div className="col--12 load-more">
                  {/* {!this.state.showingMore && (
                    <div
                      data-testid="load-more"
                      className="btn-load-mode"
                      onClick={() => {
                        this.setState({
                          postsToShow: this.state.postsToShow + 12,
                          showingMore: true
                        });
                      }}
                    >
                      Load More
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
