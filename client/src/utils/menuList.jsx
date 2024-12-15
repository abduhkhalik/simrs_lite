import {
  ScaleIcon,
  // Square3Stack3DIcon,
  ArrowsRightLeftIcon,
  TruckIcon,
  // PencilSquareIcon,
  ReceiptPercentIcon,
  UsersIcon,
  ServerStackIcon,
  InboxStackIcon,
  ArrowPathIcon,
  ArchiveBoxIcon,
  CubeIcon,
  Squares2X2Icon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";

export const apotikMenu = [
  {
    name: "Penjualan Obat & BHP",
    route: "penjualan-obat-dan-bhp",
    icon: <ScaleIcon className="h-5 w-5" />,
    role: "Apotik",
  },
  {
    name: "Amprah Obat & BHP",
    route: "amprah-obat-dan-bhp",
    icon: <ArrowsRightLeftIcon className="h-5 w-5" />,
    role: "Apotik",
  },
];

export const gudangMenu = [
  {
    name: "Data Obat & BHP",
    route: "data-obat-dan-bhp",
    icon: <ArchiveBoxIcon className="h-5 w-5" />,
    role: "Gudang",
  },
  {
    name: "Jenis Obat & BHP",
    route: "jenis-obat-dan-bhp",
    icon: <CubeIcon className="h-5 w-5" />,
    role: "Gudang",
  },
  {
    name: "Supplier",
    route: "supplier",
    icon: <TruckIcon className="h-5 w-5" />,
    role: "Gudang",
  },
  {
    name: "Kategori",
    route: "kategori",
    icon: <Squares2X2Icon className="h-5 w-5" />,
    role: "Gudang",
  },
  {
    name: "Golongan",
    route: "golongan",
    icon: <RectangleGroupIcon className="h-5 w-5" />,
    role: "Gudang",
  },
  {
    name: "Batch",
    route: "batch",
    icon: <InboxStackIcon className="h-5 w-5" />,
  },
  {
    name: "Validasi Amprahan",
    route: "validasi-amprahan",
    icon: <ArrowsRightLeftIcon className="h-5 w-5" />,
  },
  {
    name: "Pengeluaran/Pemasukan Obat & BHP",
    route: "pengeluaran-atau-pemasukan-obat-dan-bhp",
    icon: <ArrowPathIcon className="h-5 w-5" />,
  },
  {
    name: "PPN Obat",
    route: "ppn-obat",
    icon: <ReceiptPercentIcon className="h-5 w-5" />,
  },
];

export const adminMenu = [
  { name: "User", route: "/users", icon: <UsersIcon className="h-5 w-5" /> },
  {
    name: "Database",
    route: "/database",
    icon: <ServerStackIcon className="h-5 w-5" />,
  },
];
