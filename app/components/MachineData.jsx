import React from "react";
import PieChart from "./charts/PieChart";

const MachineData = ({ data }) => {
  // const pieChartData = [
  //   { name: 'Category A', y: 30 },
  //   { name: 'Category B', y: 20 },
  //   { name: 'Category C', y: 50 },
  // ];

  const efficiencyValue = data.Efficiency ? parseFloat(data.Efficiency) : 0;
  const pieChartData = [
    { name: "Efficiency", y: efficiencyValue },
    {
      name: "Remaining",
      y: (100 - efficiencyValue)
    },
  ];
  return (
    <div>
      <div className="bg-[#162637] h-[500px] flex flex-col space-y-1 border-4 border-white rounded px-1 ">
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
            <label
              htmlFor="speed"
              className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48"
            >
              {" "}
              Speed (Pcs/Hr)
            </label>
            <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">
              {data.Speed}
            </span>
          </div>
          <div className="space-x-1 flex">
            <label
              htmlFor="speed"
              className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48"
            >
              {" "}
              Production (Piece)
            </label>
            <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">
              {data.Production}
            </span>
          </div>
          <div className="space-x-1 flex">
            <label
              htmlFor="speed"
              className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48"
            >
              {" "}
              Runtime
            </label>
            <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">
              {data.Runtime}
            </span>
          </div>
          <div className="space-x-1 flex">
            <label
              htmlFor="speed"
              className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48"
            >
              {" "}
              Efficiency (%)
            </label>
            <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">
              {data.Efficiency}
            </span>
          </div>
          <div className="space-x-1 flex">
            <label
              htmlFor="speed"
              className="bg-[#25384A] p-1 rounded text-white text-base inline-block w-48"
            >
              {" "}
              Energy (Kwhr)
            </label>
            <span className="p-1 flex-1 text-right border-b-2 border-[#2F4758] text-[#19DAAD]">
              {data.Kwhr}
            </span>
          </div>
        </div>
        <div className="max-h-[50px]">
          <PieChart data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default MachineData;
