import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { Context } from "../../context/Context";
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_PROXY,
});

export function FormLogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { dispatch, isFetching } = React.useContext(Context);
  const [error, setError] = React.useState(null);

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await instance.post(`/auth/login`, {
        username: username,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // setIsLoading(false);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError("Invalid username or password");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Masuk
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="username"
            type="text"
            size="lg"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" type="submit" fullWidth>
            Masuk
          </Button>
        </CardFooter>
        {error && <p className="text-center text-red-500">{error}</p>}
        {isFetching && (
          <Typography
            variant="lead"
            color="blue-gray"
            className="text-center animate-bounce"
          >
            Loading......
          </Typography>
        )}
      </Card>
    </form>
  );
}
