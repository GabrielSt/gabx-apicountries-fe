import { useState } from "react";
import createUseContext from "constate";
import { getCountries } from "./services/countries";
// import createUseContext from "constate"; // State Context Object Creator

// Step 1: Create a custom hook that contains your state and actions
function useCountries() {
  const [countries, setCountries] = useState();

  const fetchCountries = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  return { countries, fetchCountries };
}

// Step 2: Declare your context state object to share the state with other components
export const useCountriesContext = createUseContext(useCountries);
