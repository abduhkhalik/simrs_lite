import { ServerIcon } from "@heroicons/react/24/solid";
import { Card, Input, Typography } from "@material-tailwind/react";
import React from "react";

export default function Database() {
  return (
    <section>
      <div className="container">
        <div>
          <Typography variant="h5" color="blue-gray">
            Database
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <Card className="h-full w-full p-4">
          <div className="max-w-full w-full grid">
            <div>
              <label htmlFor="import">Import</label>
              <div className="mt-3">
              <Input
                type="file"
                label="Import"
                name="import"
                icon={<ServerIcon className="h-5 w-5" />}
              />
              </div>
            </div>
            <div>
              <label htmlFor="export">Export</label>
              <div className="mt-3">
              <Input
                type="button"
                label="Export"
                name="export"
                value={"Export Database"}
                className="cursor-pointer"
                icon={<ServerIcon className="h-5 w-5" />}
              />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
