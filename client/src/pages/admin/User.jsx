import { Typography } from "@material-tailwind/react";
import React from "react";
import { TableUsers } from "../../components/table/TableUsers";

export default function User() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Users Data
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableUsers />
      </div>
    </section>
  );
}
