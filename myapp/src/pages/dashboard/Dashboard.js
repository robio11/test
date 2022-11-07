import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Dashboard = () => {
  const [basicData] = useState({
    labels: ["GBP", "USD", "EUR", "AUD", "CNY"],

    datasets: [
      {
        label: "INR",
        backgroundColor: [
          "#EC407A",
          "#AB47BC",
          "#42A5F5",
          "#7E57C2",
          "#66BB6A",
        ],
        data: {
          GBP: 1 / 0.010723,
          USD: 1 / 0.012198,
          EUR: 1 / 0.012218,
          CNY: 1 / 0.087642,
          AUD: 1 / 0.018856,
        },
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.7,

      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();

  let data = [
    { Currency: "GBP", INR: 93.257 },
    { Currency: "USD", INR: 81.981 },
    { Currency: "EUR", INR: 81.846 },
    { Currency: "AUD", INR: 53.034 },
    { Currency: "CNY", INR: 11.41 },
  ];

  return (
    <div>
      <div className="card">
        {/* <h5>Vertical</h5> */}
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
      <div className="card" style={{ width: "fit-content" }}>
        <DataTable
          value={data}
          responsiveLayout="scroll"
          style={{ marginLeft: 20, border: "1px solid gray" }}
        >
          <Column
            field="Currency"
            header="Currency"
            style={{ fontSize: 20 }}
          ></Column>
          <Column field="INR" header="INR" style={{ fontSize: 20 }}></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Dashboard;