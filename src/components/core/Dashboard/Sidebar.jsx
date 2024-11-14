import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <>
      <div
        className="relative flex flex-col gap-3 min-w-[220px] border-r py-8 border-r-richblack-700 bg-richblack-800
    h-[calc(100vh-3.5rem)]"
      >
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>

        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "dashboard/settings" }}
            iconName={"VscSettingsGear"}
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are You Sure ?",
                text2: "You will be logged out of your Account ",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
          >
            <div className="flex gap-3 items-center py-2 px-6 text-sm text-richblack-300 font-medium">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      {/* <div className="absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        {confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )}
      </div>
      <div
        className={`${
          confirmationModal &&
          "absolute top-[-10%] right-0 left-0 bottom-0 backdrop-blur-sm bg-white/10"
        }`}
      ></div> */}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default Sidebar;
