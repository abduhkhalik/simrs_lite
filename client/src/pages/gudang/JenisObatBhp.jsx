import { Typography } from "@material-tailwind/react";
import React from "react";
import { TableJenisObat } from "../../components/table/TableJenisObat";

export default function JenisObatBhp() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Jenis Obat & BHP Medis
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TableJenisObat />
      </div>
    </section>
  );
}
