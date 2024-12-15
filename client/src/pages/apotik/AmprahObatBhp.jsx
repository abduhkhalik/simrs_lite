import React from "react";
import { TableAmprah } from "../../components/table/TableAmprah";
import { Typography } from "@material-tailwind/react";

export default function AmprahObatBhp() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Amprah Obat & BHP Medis
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableAmprah />
      </div>
    </section>
  );
}
