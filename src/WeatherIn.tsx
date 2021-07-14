import { FC, memo, useEffect, useState } from "react";


interface Props {

}
const WeatherIn: FC<Props> = (Props) => {
    return (
        <div className="shadow-2xl  h-5/6 w-96 my-20  bg-white">
            <div className="flex-col mx-12">
                <h1 className="font-semibold text-2xl my-10 text-center tracking-wider ">Weather App</h1>
                <div className="flex">
                    <h1 className="text-xl my-4">45C<span className="text-sm ">|Haze</span></h1>
                    <img src="../images/perfect-day.svg" className="w-40 h-38 ml-10"></img>
                </div>
                <h1 className="text-2xl font-semibold text-center my-8">De</h1>
                <h1 className="font-semibold text-justify ">Weather Info</h1>


            </div>
        </div >
    );
};
export default memo(WeatherIn);
