// Task 4: get the capital of Columbia

const process = { env: { COUNTRYLAYER_API_KEY: null } };
process.env.COUNTRYLAYER_API_KEY = "c7bf493cfd636e6ecf8318f0b0d4e249";

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `http://api.countrylayer.com/v2/alpha/${alpha3Code}?access_key=${process.env.COUNTRYLAYER_API_KEY}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryCapital = async () => {
  const columbia = await fetchCountry('col');

  console.log(columbia);

  const capital = columbia.capital;

  console.log(capital);

  //original assignment (can't be done due to API changes);
  // const neighbors = await Promise.all(
  //   columbia.borders.map(border => fetchCountry(border))
  // );
  // console.log(neighbors);
}

fetchCountryCapital();