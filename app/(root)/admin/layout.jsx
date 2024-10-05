import React from "react";
import AdminPage from "./page";
import Sidebar from "@/components/Sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import  "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;


const AdminLayout = () => {
  return (
    <div className=" flex items-center justify-center min-h-[100vh] w-full">
      <div className=" h-full w-[250px] fixed left-0 top-0 flex items-center justify-center">
        <Sidebar />
      </div>
    </div>
  );
};

export default AdminLayout;
