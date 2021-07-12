import { FC, memo, useEffect, useState } from "react";

interface Props {
    imageurl: string;
    text1: string;
    text2: string;
}

const Weatherinfo: FC<Props> = ({ imageurl, text1, text2 }) => {

    return (
        <div className="flex my-2">
            <img src={imageurl}></img>
            <div className="flew-col mx-4">
                <h3>{text1}</h3>
                <h5 className="text-sm">{text2}</h5>
            </div>
        </div>
    );
};
Weatherinfo.defaultProps = {};
export default memo(Weatherinfo);
