import { Button, Input, Option, Select } from "@material-tailwind/react";

export const FormObatBhp = () => {
  return (
    <form className="max-w-full w-full grid gap-3">
      <div className="w-full grid grid-cols-2 gap-5">
        <Input type="text" label="Kode Barang" />
        <Select label="Industri Farmasi">
          <Option></Option>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="text" label="Nama Barang" />
        <Select label="Satuan Besar">
          <Option></Option>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="number" label="Kapasitas" />
        <Input type="number" label="Isi" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Select label="Satuan Kecil">
          <Option></Option>
        </Select>
        <Select label="Jenis">
          <Option></Option>
        </Select>
        <Select label="Golongan">
          <Option></Option>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="number" label="Harga Dasar" />
        <Input type="number" label="Harga Beli" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Input type="number" label="Harga Karyawan" />
        <Input type="number" label="Harga Apotik Luar" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Input type="number" label="Harga Jual Obat Bebas" />
        <Input type="number" label="Stok Minimal Barang" />
        <Input type="date" label="Tanggal Kadaluarsa" />
      </div>
      <Button className="mt-5" onClick={() => {}}>Submit</Button>
    </form>
  );
};
