import React from "react";
import { Typography } from "@material-tailwind/react";
import { TableGolongan } from "../../components/table/TableGolongan";

export default function Golongan() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Golongan
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableGolongan />
      </div>
    </section>
  );
}
