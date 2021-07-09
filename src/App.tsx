import Userdata from "./Userdata";
import React, { Dispatch, useState, SetStateAction, Fragment } from "react";
import axios from "axios";
interface Props { }

const App: React.FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Favourite");
  return (
    <div>
      <Userdata pageNumber={page} title={title} />
      <button className="px-2 py-2 bg-yellow-900" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default App;
