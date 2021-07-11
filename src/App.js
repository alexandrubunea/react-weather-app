import React, {useState} from 'react'
import Header from './components/Header'
import Searchbox from './components/Searchbox';

const api_key = 'c28755c509e48b8b5c12a12b65ffddae';

function App() {

  const [weather, setWeather] = useState({});

  const search = (city) => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ro&lang=ro&units=metric&appid=${api_key}`;
    fetch(api_url)
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Zona introdusă de dvs. este invalidă! ATENȚIE: Pot fi introduse doar zone de pe teritoriul României!');
    })
    .then(data => setWeather(data))
    .catch(err => alert(err));
  }

  function onClick() {
    setWeather({});
  }

  return (
    <>
      <Header weather_data={weather}/>
      <Searchbox query={search} weather_data={weather} onClick={onClick}/>
    </>
  )
}

export default App
