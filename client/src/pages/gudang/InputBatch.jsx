import React from "react";
import { Typography } from "@material-tailwind/react";
import { FormBatch } from "../../components/form/FormBatch";

export default function InputBatch() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Input Data Batch
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <FormBatch />
      </div>
    </section>
  );
}
