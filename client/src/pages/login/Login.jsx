import React from "react";
import { FormLogin } from "../../components/form/FormLogin";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_PROXY,
});

export default function Login() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getDataUser() {
      try {
        const res = await api.get("/get-users");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getDataUser();
  }, []);

  return (
    <div className="container">
      <div className="w-full h-screen flex justify-center items-center">
        <FormLogin data={data} />
      </div>
    </div>
  );
}
