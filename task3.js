// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col

const process = { env: { COUNTRYLAYER_API_KEY: null } };
process.env.COUNTRYLAYER_API_KEY = "";

const fetchData = async () => {
  const res = await fetch(`http://api.countrylayer.com/v2/alpha/col?access_key=${process.env.COUNTRYLAYER_API_KEY}`);

  const country = await res.json();
  
  console.log(country);
}

fetchData();