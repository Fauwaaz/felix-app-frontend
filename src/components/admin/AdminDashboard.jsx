import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogOut from "../LogOut";

export default function AdminDashboard() {
    const [content, setContent] = useState({})

    useEffect(() => {
        setContent(JSON.parse(sessionStorage.getItem("info")))
    }, [])

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <p className="text-3xl">Dashboard</p>

                    <p>Username : {content.username}</p>
                    <p>Name : {content.name}</p>

                    <br />

                    <div class="inline-flex rounded-md shadow-sm pt-5">
                        <NavLink to="/admin/add-instructor" className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Add Instructor
                        </NavLink>
                        <NavLink to="/admin/view-instructors" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            View Instructor
                        </NavLink>
                    </div>

                    <br />

                    <div class="inline-flex rounded-md shadow-sm pt-5">
                        <NavLink to="/admin/add-course" className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Add Course
                        </NavLink>
                        <NavLink to="/admin/view-courses" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            View Course
                        </NavLink>
                    </div>
                    

                    <br />

                    <div class="inline-flex rounded-md shadow-sm pt-5">
                        <NavLink to="/admin/allocate-lecture" className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Allocate Lecture 
                        </NavLink>
                        <NavLink to="/admin/allocated-lecture" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Allocated Lecture 
                        </NavLink>
                    </div>

                    <br />
                    <LogOut />
                </div>
            </section>


        </>
    )
}