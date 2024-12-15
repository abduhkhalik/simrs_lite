import { Input, Option, Select } from "@material-tailwind/react";

export const FormUsers = () => {
  return (
    <form className="max-w-full w-full grid gap-3">
      <div className="w-full grid grid-cols-2 mt-5 gap-5">
        <Input type="text" label="Nama Lengkap" />
        <Input type="text" label="Username" />
      </div>
      <div className="w-full grid grid-cols-2 mt-5 gap-5">
        <Input type="password" label="Password" />
        <Select label="Petugas">
          <Option></Option>
        </Select>
      </div>
    </form>
  );
};
