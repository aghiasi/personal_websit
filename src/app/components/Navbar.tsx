import MenuBtn from "./MenuBtn";
export default function Navbar() {
  return (
    <>
      <nav className="fixed  left-0 z-10 w-full top-0 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          <MenuBtn />
        </div>
      </nav>
    </>
  );
}
