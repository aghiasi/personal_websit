import Link from "next/link";
import MenuBtn from "./MenuBtn";

const navLinks = [];

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#070b12]/85
        backdrop-blur-xl
      "
    >
      <div
        className="
          site-container
          flex
          h-16
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link href="/#home" className="group flex items-center gap-3">
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-sky-400/20
              bg-sky-400/10
              text-sm
              font-bold
              text-sky-300
              shadow-[0_0_20px_rgba(56,189,248,0.05)]
              transition-all
              duration-200
              group-hover:border-sky-400/40
              group-hover:bg-sky-400/15
              group-hover:shadow-[0_0_25px_rgba(56,189,248,0.1)]
            "
          >
            AG
          </span>

          <div className="hidden sm:block">
            <p
              className="
                text-sm
                font-semibold
                tracking-tight
                text-white
                transition-colors
                group-hover:text-sky-300
              "
            >
              Ali Ghiasi
            </p>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-gray-500
              "
            >
              Developer
            </p>
          </div>
        </Link>

        {/* Desktop navigation + mobile menu */}
        <div className="flex items-center">
          <div className="hidden items-center gap-1 md:flex">
            {/* Contact */}
            <Link
              href="/contact"
              className="
                ml-2
                rounded-lg
                border
                border-sky-400/20
                bg-sky-400/10
                px-4
                py-2
                text-sm
                font-medium
                text-sky-300
                transition-all
                duration-200
                hover:border-sky-400/40
                hover:bg-sky-400/15
              "
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu */}
          <MenuBtn />
        </div>
      </div>
    </nav>
  );
}
