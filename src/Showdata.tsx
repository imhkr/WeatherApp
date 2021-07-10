import { FC, memo, useEffect, useState } from "react";

interface Props {
    // id: any;
    email: string;
    gender: string;
}

const Showdata: FC<Props> = ({ email, gender }) => {

    return (
        <div>
            <table className="border-2">
                <tbody>
                    <tr>
                        <td className="px-20 my-4 ">{email}</td>
                        <td className="px-4 my-4">{gender}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};
Showdata.defaultProps = {};
export default memo(Showdata);
