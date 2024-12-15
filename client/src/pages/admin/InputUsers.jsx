import React from "react";
import { Typography } from "@material-tailwind/react";
import { FormUsers } from "../../components/form/FormUsers";

export default function InputUsers() {
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
        <FormUsers />
      </div>
    </section>
  );
}
