import Userdata from "./Userdata";
import React, { Dispatch, useState, SetStateAction, Fragment } from "react";
interface Props { }

const App: React.FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Favourite");
  return (

    <div>
      <Userdata pageNumber={page} title={title} />
      <button className="text-white py-2 px-4 bg-blue-600" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default App;
