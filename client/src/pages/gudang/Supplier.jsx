import { Typography } from "@material-tailwind/react";
import React from "react";
import { TableSupplier } from "../../components/table/TabelSupplier";

export default function Supplier() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Supplier
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableSupplier />
      </div>
    </section>
  );
}
