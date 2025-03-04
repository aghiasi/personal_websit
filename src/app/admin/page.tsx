import Link from "next/link";
import ActiveRooms from "./components/ActiveRooms";
export default function page() {  
  return (
    <section className="grid md:grid-cols-7 gap-5  grid-cols-1">
      <Link
        href={"/admin/inbox"} 
        className=" col-span-3 mt-10 block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 lg:ml-20"  
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Inbox Messages
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Link>
      <ActiveRooms /> 
    </section>
  );
}
