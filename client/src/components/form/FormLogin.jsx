import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
   
  export function FormLogin() {
    return (
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
          <Input label="username" type="text" size="lg" />
          <Input label="Password" type="password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Masuk
          </Button>
        </CardFooter>
      </Card>
    );
  }