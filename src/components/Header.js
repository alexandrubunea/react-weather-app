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


    if(typeof weather_data.main != 'undefined') {
        weather_cond_img = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@4x.png`;
        weather_cond_text = weather_data.weather[0].description;

        feel_temp = Math.round(weather_data.main.feels_like);
        max_temp = Math.round(weather_data.main.temp_max);
        min_temp = Math.round(weather_data.main.temp_min);
        real_temp = Math.round(weather_data.main.temp);

        wind_speed = weather_data.wind.speed;
        humidity = weather_data.main.humidity;
        atmh_pressure = weather_data.main.pressure;
    }
    
    return (
        <div className="container-fluid" style={(typeof weather_data.main != 'undefined') ? {display: 'inline'} : {display: 'none'}}>
            <div className="row p-5">
                
                <div className="col">
                    <div className="square">
                        <span className="title">condiția vremii</span>
                        <img src={weather_cond_img} className="fixedImg"></img>
                        <span className="description">{weather_cond_text}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="square">
                        <span className="title">temperatură</span>
                        <img src="./hot.png" className="fixedImg"></img>
                        <span className="description">
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
                        <img src="./wind.png" className="fixedImg"></img>
                        <span className="description">
                            <ul>
                                <li>umiditatea aerului: {humidity}%</li>
                                <li>viteza vântului: {wind_speed} m/s</li>
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
