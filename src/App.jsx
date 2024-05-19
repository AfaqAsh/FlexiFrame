import { useState } from "react";
import "./App.css";
import Cardviewer from "./components/Cardviewer";

const App = () => {
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState("");
  const [count, setCount] = useState([]);

  const handleAddCard = () => {
    cards.map((card) => <Cardviewer url={url} />);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col gap-10 content-top content-start justify-start">
      <div className="searchBar">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={handleUrl}
            className="w-full rounded-full bg-gris placeholder:text-gray-400 pl-[28px] focus:outline-none border border-gray-500 h-12 w-160 "
          />
        </form>
      </div>
      <div>
        <button onClick={(e) => setCount([...count, 1])} className="mb-10">
          Add Frame
        </button>
        {/* {count} */}
      </div>
      <div className="frameList flex gap-10 ">
        {count.map((c, index) => (
          <Cardviewer key={index} url={url} />
        ))}
      </div>
      {/* <div>{url}</div> */}
    </div>
  );
};

export default App;
