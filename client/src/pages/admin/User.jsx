import { Typography } from "@material-tailwind/react";
import React from "react";
import { TableUsers } from "../../components/table/TableUsers";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_PROXY,
});

export default function User() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    try {
      const getUsers = async () => {
        const res = await instance.get("/get-users");
        setData(res.data);
      };
      getUsers();
    } catch (err) {
      console.error(err);
    }
  }, []);
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
        <TableUsers data={data} />
      </div>
    </section>
  );
}
