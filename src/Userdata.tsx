import { FC, memo, useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata"
interface Props {
    pageNumber: number;
    title: string;
}
const Userdata: FC<Props> = ({ pageNumber, title }) => {
    const [users, setUsers] = useState<any>([]);
    useEffect(() => {
        console.log("Before Request trigger");
        axios
            .get(
                "https://randomuser.me/api/?inc=id,name,gender,email&page=" + pageNumber + "&results=20"
            ).then((IncomingRes) => {
                console.log("After response arrival");
                console.log(IncomingRes.data.results);
                setUsers(IncomingRes.data.results)

            });
        console.log("After request trigger");
    }, [pageNumber]);
    return (
        <div>
            <table className="table-fixed my-4 mx-4">
                <thead>
                    <tr >
                        <td className="bg-blue-400 px-32 py-4">
                            Email
                        </td>
                        <td className="bg-green-400 px-24 ">
                            Gender
                        </td>
                    </tr>
                </thead>
            </table>
            {users.map((u: any) => (
                <div>
                    <Showdata email={u.email} gender={u.gender} />
                </div>
            ))}
        </div>
    );
};
Userdata.defaultProps = {};
export default memo(Userdata);
