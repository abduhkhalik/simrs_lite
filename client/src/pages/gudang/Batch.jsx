import { Typography } from "@material-tailwind/react";
import React from "react";
import { TableDataBatch } from "../../components/table/TableDataBatch";

export default function Batch() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Data Batch
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableDataBatch />
      </div>
    </section>
  );
}
