import React from "react";
import { shallow } from "enzyme";
import CountryCard from "../countryCard";
const countryPayload = require("./__payload__/countryPayload.json");

describe("Testing CountryCard component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<CountryCard country={countryPayload} />);
    expect(wrapper).toMatchSnapshot();
  });
});
