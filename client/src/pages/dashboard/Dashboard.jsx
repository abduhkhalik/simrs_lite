import React from "react";
import { PenjualanChart } from "../../components/charts/penjualanChart";
import { Typography } from "@material-tailwind/react";

function Dashboard() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Dashboard
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <PenjualanChart />
      </div>
    </section>
  );
}

export default Dashboard;
