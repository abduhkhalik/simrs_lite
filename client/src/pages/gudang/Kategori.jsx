import { Typography } from "@material-tailwind/react";
import React from "react";
import { TableKategori } from "../../components/table/TableKategori";

export default function Kategori() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Kategori
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableKategori />
      </div>
    </section>
  );
}
