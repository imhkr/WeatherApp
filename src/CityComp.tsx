import axios from "axios";
import React, { FC, memo, useEffect, useState } from "react";

interface Props {

}

const CityComp: FC<Props> = (props) => {
    const [city, updateCity] = useState(null);
    const [search, setSearch] = useState("");
    const [humidity, setHumidity] = useState(0);
    const [feellike, setfeellike] = useState(0);
    const [tmin, settmin] = useState();
    const [tmax, settmax] = useState();
    const [pressure, setpressure] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const response = axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=43f38b08b43a17d17e2e1c04e01cf380`,
            );
            console.log((await response).data.main);
            updateCity((await response).data.main.temp);
            setHumidity((await response).data.main.humidity);
            setfeellike((await response).data.main.feels_like);
            settmin((await response).data.main.temp_min);
            settmax((await response).data.main.temp_max);
            setpressure((await response).data.main.pressure);
        }
        fetchApi();
    }, [search])
    return (

        <div className="shadow-2xl  h-4/6 w-96  my-10  bg-white">
            <div className="flex-col mx-28">
                <h1 className="font-semibold text-2xl my-10 justify-center tracking-wider bg-gradient-to-br from-red-300 via-pink-100 to-green-100) ">Weather App</h1>
                <img src="../images/weather.svg" className="w-full h-40 justify-center"></img>
                <h1 className=" bg-yellow-100  font-semibold">Enter Your City Name</h1>
                <div >
                    <input
                        type="Search"
                        onChange={(e) => { setSearch(e.target.value) }}
                        placeholder="CityName" className="border-4 w-max text-green-500  font-semibold inline -ml-4 my-2" />



                    {city == null ? (<p className=" text-redcoll">No Data Found!!!!</p>) : (

                        <div>
                            <h1 className="text-xl text-blue-500 my-4"> Feels Like {feellike}°C</h1>
                            <h1 className="text-xl text-redcoll my-4 items-center">Temp :- {city}°C</h1>
                            <div className="flex  w-screen text-lg  my-4">
                                <h1 className="-ml-24 mx-4 text-tmax font-semibold">Min Temp :- {tmin}°C </h1>
                                {/* <span className=" text-gray-800 font-semibold"> |</span> */}
                                <h1 className=" text-tmax ml-2" >Max Temp :- {tmax}°C</h1>
                            </div>
                            <div className="flex -ml-10 w-screen text-xl my-4 text-hu">
                                <div className="text-lg -ml-12 font-semibold">Humidity :- {humidity}</div>
                                <div className="text-lg ml-12 font-semibold">Pressure :- {pressure} Pa</div>
                            </div>
                            {/* <img src="../images/perfect-day.svg" className="w-40 h-38 ml-10"></img> */}
                        </div>
                    )}
                    <h1 className="text-2xl font-semibold text-center my-8">{search}</h1>

                </div>
            </div>
        </div >

    );
};
CityComp.defaultProps = {};
export default memo(CityComp);
