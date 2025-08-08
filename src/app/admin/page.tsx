import Link from "next/link";
import ActiveRooms from "./components/ActiveRooms";
const getMails = async () => {
  try {
    const request = await fetch(process.env.BASE_URL+"api/mail");
    if (request.ok) {
      return await request.json();
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};
export default async function page() {
  const request = await getMails();
  return (
    <section className="grid md:grid-cols-7 gap-5  grid-cols-1">
      <Link
        href={"/admin/inbox"}
        className="  col-span-3 mt-10 block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 lg:ml-20"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Inbox Messages
        </h5>
        <div className="h-[500px] overflow-y-scroll">
          {request.message && request.message.map((items: any, index: number) => (
            <div
              key={index}
              className="bg-slate-600 p-2 m-1 rounded-lg hover:bg-slate-500"
            >
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                from : {items.email}
              </p>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                subject : {items.subject}
              </p>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                message : {items.message}
              </p>
            </div>
          ))}
        </div>
      </Link>
      <ActiveRooms />
    </section>
  );
}
