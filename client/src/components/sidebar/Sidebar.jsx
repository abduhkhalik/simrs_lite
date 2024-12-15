import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PowerIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { adminMenu, apotikMenu, gudangMenu } from "../../utils/menuList";
import { NavLink } from "react-router-dom";

export function DefaultSidebar() {
  return (
    <>
      <Card className="h-screen overflow-y-auto fixed z-20 w-full max-w-[16rem] pb-4 shadow-xl shadow-blue-gray-900/5">
        <div
          id="header"
          className="mb-2 sticky z-10 bg-white top-0 p-4 border-b border-solid border-black"
        >
          <Typography variant="h5" color="blue-gray" className="text-center">
            Sidebar
          </Typography>
          <div>
            <Input
              type="search"
              label="Search Menu"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
        <List>
          <NavLink
            className={({ isActive }) => [
              isActive
                ? "bg-blue-500 rounded-md transition-all ease-in-out text-white"
                : "hover:bg-slate-400 transition-all ease-in-out rounded-md",
            ]}
            to={"/"}
          >
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </NavLink>
          {apotikMenu.map(({ name, route, icon }, i) => (
            <NavLink
              key={i}
              className={({ isActive }) => [
                isActive
                  ? "bg-blue-500 rounded-md transition-all ease-in-out text-white"
                  : "hover:bg-slate-400 transition-all ease-in-out rounded-md",
              ]}
              to={route}
            >
              <ListItem>
                <ListItemPrefix>{icon}</ListItemPrefix>
                {name}
              </ListItem>
            </NavLink>
          ))}
          {gudangMenu.map(({ name, route, icon }, i) => (
            <NavLink
              key={i}
              className={({ isActive }) => [
                isActive
                  ? "bg-blue-500 rounded-md transition-all ease-in-out text-white"
                  : "hover:bg-slate-400 transition-all ease-in-out rounded-md",
              ]}
              to={route}
            >
              <ListItem>
                <ListItemPrefix>{icon}</ListItemPrefix>
                {name}
              </ListItem>
            </NavLink>
          ))}
          {adminMenu.map(({ name, route, icon }, i) => (
            <NavLink
              key={i}
              className={({ isActive }) => [
                isActive
                  ? "bg-blue-500 rounded-md transition-all ease-in-out text-white"
                  : "hover:bg-slate-400 transition-all ease-in-out rounded-md",
              ]}
              to={route}
            >
              <ListItem>
                <ListItemPrefix>{icon}</ListItemPrefix>
                {name}
              </ListItem>
            </NavLink>
          ))}
          <ListItem className="hover:bg-slate-400 transition-all ease-in-out rounded-md">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
}
