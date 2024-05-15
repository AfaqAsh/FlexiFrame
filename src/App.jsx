import { useState } from "react";
import "./App.css";
import Cardviewer from "./components/Cardviewer";

const App = () => {
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState("");
  const [count, setCount] = useState([]);

  const handleAddCard = () => {
    // setCards([...cards, <Cardviewer key={Math.random()} url={url} />]);
    cards.map((card) => <Cardviewer url={url} />);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={handleUrl}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{url}</div>
      <button onClick={(e) => setCount([...count, 1])}>Add Card</button>
      {count}
      {/* <div className="flex gap-10">{cards}</div> */}
      {/* <Cardviewer url={url} /> */}
      <div className="flex gap-10">
        {count.map((c, index) => (
          <Cardviewer key={index} url={url} />
        ))}
      </div>
    </>
  );
};

export default App;
