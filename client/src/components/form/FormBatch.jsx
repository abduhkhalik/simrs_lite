import { Button, Input, Option, Select } from "@material-tailwind/react";

export const FormBatch = () => {
  return (
    <form className="max-w-full w-full grid gap-3">
      <div className="w-full grid grid-cols-2 gap-5">
        <Select label="Kode Barang">
          <Option></Option>
        </Select>
        <Input type="text" label="No.Batch" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="text" label="Nama Barang" />
        <Select label="Asal Barang">
          <Option></Option>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="text" label="No.Faktur" />
        <Input type="number" label="Isi" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="number" label="Jumlah Beli" />
        <Input type="number" label="Sisa" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="date" label="Tgl.Datang" />
        <Input type="date" label="Tgl.Kadaluwarsa" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="number" label="Harga Jual Obat Bebas" />
        <Input type="number" label="Harga Apotik Luar" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Input type="number" label="Harga Beli" />
        <Input type="number" label="Harga Dasar" />
        <Input type="number" label="Harga Karyawan" />
      </div>
      <Button className="mt-5" onClick={() => {}}>
        Submit
      </Button>
    </form>
  );
};
