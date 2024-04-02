import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function AllocatedLecture() {

    const [inputs, setInputs] = useState({})
    const [instructor, setInstructors] = useState(null)
    const [lecture, setLectures] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:9000/admin/instructor-list")
            .then((res) => {
                setInstructors(res.data.instructors)
            })
    }, [])

    if (!instructor) return null

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`http://localhost:9000/admin/allocated-lecture-list/${document.getElementById('instructorName').value}`, inputs)
            .then((res) => {
                setLectures(res.data.lectures)
            })
            .catch((err) => {
                console.log('error : ', err);
                alert(err.response.data.message);
            });
    }


    return (
        <>
            <NavLink to="/admin/dashboard"><button>Back</button></NavLink>
            <p className="text-3xl">Allocated Lecture</p>



                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Instructor</label>
                <select id="instructorName" onClick={handleChanges} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200] p-2.5 dark:bg-gray-700 dark:border-gray-600 mt-2 mb-5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Select Instructor</option>
                {
                    instructor.map((element) => {
                        return (
                            <option value={element.name}>{element.name}</option>
                        )
                    })}
                </select>

            
            <form onSubmit={handleSubmit}>



                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Course Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lecture.map((element) => {
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td class="px-6 py-4">{element.course_name}</td>
                                            <td class="px-6 py-4">{element.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GET</button>
            </form>
        </>
    )
}