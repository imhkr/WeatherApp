import { FC, memo, useEffect, useState } from "react";
import axios from "axios";

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
            {users.map((u: any) => (
                <div>
                    {u.email}
                </div>
            ))}
        </div>
    );
};
Userdata.defaultProps = {};
export default memo(Userdata);
