import { StudentTable } from "@/components/StudentTable";
import { students } from "@/students";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <h1 className=" text-2xl text-blue-500 font-thin my-5">Student List</h1>
      <StudentTable Student={students}/>
    </div>
  )
}