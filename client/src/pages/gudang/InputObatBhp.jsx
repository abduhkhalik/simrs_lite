import React from "react";
import { Typography } from "@material-tailwind/react";
import { FormObatBhp } from "../../components/form/FormObatBhp";

export default function InputObatBhp() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Input Data Obat & BHP Medis
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <FormObatBhp />
      </div>
    </section>
  );
}
