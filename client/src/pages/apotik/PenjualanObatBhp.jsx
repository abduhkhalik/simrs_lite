// import React from "react";
import { Typography } from "@material-tailwind/react";
import { TablePenjualanObat } from "../../components/table/TablePenjualanObat";

export default function PenjualanObatBhp() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Transaksi Penjualan Obat & BHP Medis
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <TablePenjualanObat />
      </div>
    </section>
  );
}
