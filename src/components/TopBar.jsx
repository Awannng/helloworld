import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsCircleOutline } from "react-icons/io5";

function TopBar() {
  return (
    <>
      {/* The red section from Figma, I added the DM and Notification icons. Later we need to check if it's signed in, show the icons. If it's not, we hide the icons.
      I'm thinking to make a pop-window for the dms and a pop-up window/dropbox for the notification(don't really need a page for notification). */}
      <div className="w-full h-10 flex justify-end gap-10 mt-2">
        <div className="mr-3 self-center hover:cursor-pointer">
          <AiOutlineMessage className="size-7 hover:text-orange-800" />
        </div>
        <div className="mr-3 self-center hover:cursor-pointer">
          <IoNotificationsCircleOutline className="size-7 hover:text-orange-800" />
        </div>

        {/* When clicking in, it should jump to a loginPage with a Third Party login feature(Google) */}
        <div className="mr-3 self-center text-white bg-orange-400 rounded-full p-1.5 hover:bg-orange-800 hover:cursor-pointer">
          <h1>Sign In</h1>
        </div>
      </div>
    </>
  );
}

export default TopBar;
