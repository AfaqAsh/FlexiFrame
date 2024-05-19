import { useState } from "react";

const Cardviewer = (props) => {
  const [minOuterWidth, setMinOuterWidth] = useState("480px");
  const [viewHeight, setViewHeight] = useState();
  const [viewWidth, setViewWidth] = useState();

  return (
    <div className={`h-screen`} style={{ width: `${viewWidth}px` }}>
      {/* Div to set width and height */}

      <div
        className="p-10 m-1 rounded-xl bg-gris flex justify-center flex-col gap-10"
        style={{ width: `${viewWidth}px` }}
      >
        <div className="topOptions flex justify-center content-center">
          <div className="flex flex-row gap-6 justify-center m-5">
            <div className="nameInput">
              <input
                type="text"
                placeholder="Enter frame name"
                className="bg-gris2 placeholder:text-white pl-[12px] focus:outline-none border border-gris3 h-8 rounded-md"
              />
            </div>
            <div className="widthInput">
              <input
                className="w-24 bg-gris2 placeholder:text-white pl-[12px] focus:outline-none border border-gris3 h-8 rounded-md"
                type="number"
                placeholder="width"
                value={viewWidth}
                onChange={(e) => setViewWidth(e.target.value)}
              />
            </div>
            <div className="heightInput">
              <input
                className="w-24 bg-gris2 placeholder:text-white pl-[12px] focus:outline-none border border-gris3 h-8 rounded-md"
                type="number"
                placeholder="height"
                value={viewHeight}
                onChange={(e) => setViewHeight(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="selectDimension">
            <select name="" id="" placeholder="Select Dimension">
              <option value="">Option A</option>
              <option value="Option B">Option B</option>
            </select>
          </div> */}
        </div>
        {/* <iframe
          src={props.url}
          frameborder="0"
          style={{ width: `${viewWidth}px`, height: `${viewHeight}px` }}
        ></iframe> */}
        <div className="webFrame flex justify-center items-center overflow-hidden">
          <object
            data={props.url}
            type=""
            style={{ width: `${viewWidth}px`, height: `${viewHeight}px` }}
          ></object>
        </div>
      </div>
    </div>
  );
};

export default Cardviewer;
