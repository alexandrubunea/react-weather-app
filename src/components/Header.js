import React from 'react'

const Header = ({weather_data}) => {
    var weather_cond_img = 'none';
    var weather_cond_text = 'none';
    var feel_temp = 0;
    var real_temp = 0;
    var max_temp = 0;
    var min_temp = 0;
    var wind_speed = 0;
    var humidity = 0;
    var atmh_pressure = 0;
    var city_name = '';
    var lat = 0;
    var lon = 0;
    var sunrise_time = '';
    var sunset_time = '';

    function convertUNIXTimeToHMS(unix_time) {
        let date = new Date(unix_time * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    }

    function get_current_time() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ':' + minutes.substr(-2);

        return formattedTime;
    }
    function get_current_date() {
        let dayNames = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
        let monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noembrie", "Decembrie"];

        let date = new Date();
        let day = date.getDate();
        let dayName = dayNames[date.getDay()];
        let monthName = monthNames[date.getMonth()];
        let formattedTime = day + " " + monthName + " (" + dayName + ")";
        
        return formattedTime;
    }

    if(typeof weather_data.main != 'undefined') {
        weather_cond_img = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@4x.png`;
        weather_cond_text = weather_data.weather[0].description;

        city_name = weather_data.name;
        lat = weather_data.coord.lat;
        lon = weather_data.coord.lon;

        sunrise_time = convertUNIXTimeToHMS(weather_data.sys.sunrise);
        sunset_time = convertUNIXTimeToHMS(weather_data.sys.sunset);
        
        feel_temp = Math.round(weather_data.main.feels_like);
        max_temp = Math.round(weather_data.main.temp_max);
        min_temp = Math.round(weather_data.main.temp_min);
        real_temp = Math.round(weather_data.main.temp);

        wind_speed = weather_data.wind.speed;
        humidity = weather_data.main.humidity;
        atmh_pressure = weather_data.main.pressure;
    }
    
    return (
        <div className="container-fluid" style={(typeof weather_data.main != 'undefined') ? {display: 'grid'} : {display: 'none'}}>
            <div className="row p-5">
                
                <div className="col mb-5">
                    <div className="square">
                        <span className="title">condiția vremii</span>
                        <img src={weather_cond_img} className="fixedImg mt-4" alt="conditia vremii"></img>
                        <span className="cityName">
                            {city_name}
                            <span className="coords">(lat: {lat} & lon: {lon})</span>
                        </span>
                        <span className="description mt-5">
                            {weather_cond_text}
                            <span className="info">{get_current_date()} / {get_current_time()}</span>
                        </span>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="square">
                        <span className="title">temperatură</span>
                        <img src="./hot.png" className="fixedImg mt-4" alt="temperatura"></img>
                        <span className="description mt-5">
                            <ul>
                                <li>se simt: {feel_temp} °C</li>
                                <li>temperatura actuală: {real_temp} °C</li>
                                <li>se poate ajunge la maxim: {max_temp} °C</li>
                                <li>se poate ajunge la minim: {min_temp} °C</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="square">
                        <span className="title">alte date</span>
                        <img src="./wind.png" className="fixedImg mt-4" alt="alte date"></img>
                        <span className="description mt-5">
                            <ul>
                                <li>umiditatea aerului: {humidity}%</li>
                                <li>viteza vântului: {wind_speed} m/s</li>
                                <li>soarele rasare la: {sunrise_time}</li>
                                <li>soarele apune la: {sunset_time}</li>
                                <li>presiunea atmosferică: {atmh_pressure} hPa</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
