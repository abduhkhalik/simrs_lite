import React from "react";
import { Typography } from "@material-tailwind/react";
import { TableDataObatBhp } from "../../components/table/TableDataObatBhp";

export default function DataObatBhp() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Data Obat & BHP Medis
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableDataObatBhp />
      </div>
    </section>
  );
}
