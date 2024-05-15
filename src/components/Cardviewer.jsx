import { useState } from "react";

const Cardviewer = (props) => {
  const [minOuterWidth, setMinOuterWidth] = useState("480px");
  const [viewHeight, setViewHeight] = useState();
  const [viewWidth, setViewWidth] = useState();

  return (
    <div className={`h-screen`} style={{ minWidth: minOuterWidth }}>
      {/* Div to get width and height */}
      <div className="flex flex-row gap-6 justify-center m-5">
        <div>
          <input
            className="w-24"
            type="number"
            value={viewWidth}
            onChange={(e) => setViewWidth(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-24"
            type="number"
            value={viewHeight}
            onChange={(e) => setViewHeight(e.target.value)}
          />
        </div>
      </div>
      <div
        className=""
        style={{ backgroundColor: "red", width: `${viewWidth}px` }}
      >
        {/* {props.url} */}
        {viewWidth}
      </div>
      <div className="p-10 bg-blue-100 flex justify-center" style={{width:{viewWidth}}}>
        <iframe
          src={props.url}
          frameborder="0"
          style={{ width: `${viewWidth}px`, height: `${viewHeight}px` }}
        ></iframe>
      </div>
    </div>
  );
};

export default Cardviewer;
