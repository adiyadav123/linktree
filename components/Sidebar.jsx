"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubesStacked,
  faLink,
  faShop,
  faShapes,
  faChartSimple,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { useClerk } from "@clerk/nextjs";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Links");
  const [username, setUsername] = useState("user");
  const { user } = useUser();
  const { toast } = useToast();
  const { openUserProfile } = useClerk();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const openUser = () => {
    openUserProfile();
  };

  return (
    <div className="p-3 h-full w-full bg-transparent">
      <div className="w-full h-full bg-zinc-800 border-r-8 rounded-[30px] border-none p-5 flex items-start justify-between flex-col">
        <div className="w-full">
          <div className="h-[30px] w-full text-[20px]">
            <FontAwesomeIcon icon={faCubesStacked} />
          </div>
          <div className="h-[20px]"></div>
          <div className="links flex flex-col h-full w-full space-y-3">
            <Button
              onClick={() => handleLinkClick("Links")}
              className={`${
                activeLink === "Links"
                  ? "bg-zinc-700 text-yellow-500 hover:bg-zinc-700"
                  : "bg-transparent text-white hover:bg-zinc-700"
              } transition-all duration-500 shadow-none flex items-center justify-start space-x-2 h-[40px] text-[14px] relative`}
            >
              {activeLink === "Links" && (
                <div className="absolute left-[-22px] bg-yellow-500 h-[60px] w-[8px] rounded-r-md"></div>
              )}
              <FontAwesomeIcon icon={faLink} style={{ paddingRight: "7px" }} />{" "}
              Links
            </Button>

            <Button
              onClick={() => handleLinkClick("Shop")}
              className={`${
                activeLink === "Shop"
                  ? "bg-zinc-700 text-yellow-500 hover:bg-zinc-700"
                  : "bg-transparent text-white hover:bg-zinc-700"
              } transition-all duration-500 shadow-none flex items-center justify-start space-x-2 h-[40px] text-[14px] relative`}
            >
              {activeLink === "Shop" && (
                <div className="absolute left-[-22px] bg-yellow-500 h-[60px] w-[8px] rounded-r-md"></div>
              )}
              <FontAwesomeIcon icon={faShop} style={{ paddingRight: "7px" }} />{" "}
              Shop
            </Button>

            <Button
              onClick={() => handleLinkClick("Appearance")}
              className={`${
                activeLink === "Appearance"
                  ? "bg-zinc-700 text-yellow-500 hover:bg-zinc-700"
                  : "bg-transparent text-white hover:bg-zinc-700"
              } transition-all duration-500 shadow-none flex items-center justify-start space-x-2 h-[40px] text-[14px] relative`}
            >
              {activeLink === "Appearance" && (
                <div className="absolute left-[-22px] bg-yellow-500 h-[60px] w-[8px] rounded-r-md"></div>
              )}
              <FontAwesomeIcon
                icon={faShapes}
                style={{ paddingRight: "7px" }}
              />{" "}
              Appearance
            </Button>

            <Button
              onClick={() => handleLinkClick("Analytics")}
              className={`${
                activeLink === "Analytics"
                  ? "bg-zinc-700 text-yellow-500 hover:bg-zinc-700"
                  : "bg-transparent text-white hover:bg-zinc-700"
              } transition-all duration-500 shadow-none flex items-center justify-start space-x-2 h-[40px] text-[14px] relative`}
            >
              {activeLink === "Analytics" && (
                <div className="absolute left-[-22px] bg-yellow-500 h-[60px] w-[8px] rounded-r-md"></div>
              )}
              <FontAwesomeIcon
                icon={faChartSimple}
                style={{ paddingRight: "7px" }}
              />{" "}
              Analytics
            </Button>

            <Button
              onClick={() => handleLinkClick("Settings")}
              className={`${
                activeLink === "Settings"
                  ? "bg-zinc-700 text-yellow-500 hover:bg-zinc-700"
                  : "bg-transparent text-white hover:bg-zinc-700"
              } transition-all duration-500 shadow-none flex items-center justify-start space-x-2 h-[40px] text-[14px] relative`}
            >
              {activeLink === "Settings" && (
                <div className="absolute left-[-22px] bg-yellow-500 h-[60px] w-[8px] rounded-r-md"></div>
              )}
              <FontAwesomeIcon icon={faGear} style={{ paddingRight: "7px" }} />{" "}
              Settings
            </Button>
          </div>
        </div>
        <div className="user_button w-full h-[50px]">
          <Button
            className="bg-zinc-700 text-white hover:bg-zinc-600 transition-all duration-500 flex items-center justify-start space-x-2 h-[40px] text-[14px] hover:text-yellow-500"
            style={{ width: "100%", height: "100%" }}
            onClick={() => openUser()}
          >
            <UserButton /> <div className="w-[5px]"></div> {username}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
