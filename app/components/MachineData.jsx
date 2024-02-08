import React from "react";

const MachineData = ({ data }) => {
  return (
    <div>
      {/* <div className="bg-gray-200 h-[372px] flex flex-col space-y-1 border-4 border-white rounded ">
        <h5 className="font-semibold text-center text-white bg-[#0891B2] rounded-t">
          Machine Number :{" "}
          <span className=" text-lg text-white"> {data.Machine_no} </span>
        </h5>
        <h5 className="realtimelabelwarpper">
          Speed (Pcs/Hr)
        </h5>
        <h5 className="realtimedatawarpper text-yellow-400">
          {data.Speed}
        </h5>
        <h5 className="realtimelabelwarpper">
          Production (Piece)
        </h5>
        <h5 className="realtimedatawarpper text-yellow-400">
          {data.Production}
        </h5>
        <h5 className="realtimelabelwarpper">
          Runtime
        </h5>
        <h5 className="realtimedatawarpper text-yellow-400">
          {data.Runtime}
        </h5>
        <h5 className="realtimelabelwarpper">
          Efficiency (%)
        </h5>
        <h5 className="realtimedatawarpper text-yellow-400">
          {data.Efficiency}
        </h5>
        <h5 className="realtimelabelwarpper">
          Energy (Kwhr)
        </h5>
        <h5 className="realtimedatawarpper text-yellow-400">
          {data.Kwhr}
        </h5>
        <h5 className="realtimelabelwarpper">
          Status
        </h5>
        <h5 className={`realtimedatawarpper ${data.Status==='RUN'? 'text-green-500':'text-red-500'}  rounded-b`}>
          {data.Status}
        </h5>
      </div> */}
      <div className="bg-[#162637] h-[372px] flex flex-col space-y-1 border-4 border-white rounded px-1 ">
        <div className="flex flex-col space-y-1">
          <label htmlFor="status" className="text-center text-white font-bold">
            {`Machine ${data.Machine_no}`}
          </label>
          <h5
            className={`${
              data.Status === "RUN" ? "bg-[#19DAAD]" : "bg-[#EE574D]"
            }  rounded text-white text-center font-bold h-10 flex-card text-lg`}
            id="status"
          >
            {data.Status}
          </h5>
        </div>
            <div className="space-y-1">
                <div className="space-x-1 flex">
                  <label htmlFor="speed" className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48" > Speed (Pcs/Hr)</label>
                  <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">{data.Speed}</span>
                </div>
                <div className="space-x-1 flex">
                  <label htmlFor="speed" className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48" > Production (Piece)</label>
                  <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">{data.Production}</span>
                </div>
                <div className="space-x-1 flex">
                  <label htmlFor="speed" className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48" > Runtime</label>
                  <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">{data.Runtime}</span>
                </div>
                <div className="space-x-1 flex">
                  <label htmlFor="speed" className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48" > Efficiency (%)</label>
                  <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">{data.Efficiency}</span>
                </div>
                <div className="space-x-1 flex">
                  <label htmlFor="speed" className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48" > Energy (Kwhr)</label>
                  <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">{data.Kwhr}</span>
                </div>
            </div>
      </div>
    </div>
  );
};

export default MachineData;
