import { Outlet } from "react-router-dom"
import RoleDetails from "../components/Dahsboard/RoleDetails/RoleDetails"
import Sidebar from "../components/Dahsboard/Sidebar/Sidebar"



const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <div className="bg-slate-200 w-full flex justify-end items-center gap-3">

                    {/* User/Admin details */}
                    <RoleDetails></RoleDetails>

                    {/* sidebar button */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden my-3 mr-3 text">Open Sidebar</label>
                </div>

                {/* Page content here */}
                <Outlet></Outlet>

            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {/* Sidebar content here */}
                    <Sidebar></Sidebar>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout