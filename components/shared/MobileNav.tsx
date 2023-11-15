import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";

const NavContent = () => {
  const navButtons = [
    {
      name: "Home",
      url: "/",
      LineColor: "bg-fuchsia-500",
    },
    {
      name: "Products",
      url: "/products",
      LineColor: "bg-purple-500",
    },
    {
      name: "Contact",
      url: "/contact",
      LineColor: "bg-sky-500",
    },
  ];

  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {navButtons.map((nav) => {
        const isActivate =
          (pathname.includes(nav.url) && nav.url.length > 1) ||
          pathname === nav.url;
        return (
          <SheetClose
            asChild
            key={nav.url}
            className="flex justify-start gap-4 bg-transparent"
          >
            <div className="flex items-start">
              <Link href={nav.url} className="flex gap-2 w-full p-4">
                <div
                  className={`rounded-full w-1 h-full text-transparent ${
                    pathname === nav.url ? nav.LineColor : ""
                  }`}
                >
                  .
                </div>
                <p className={`${isActivate ? "font-conthrax" : ""}`}>
                  {nav.name}
                </p>
              </Link>
            </div>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    // @ts-ignore
    <Sheet className="transition-transform duration-500">
      <SheetTrigger className="hidden max-md:flex dark:bg-white/10 bg-black/5 rounded-full p-2">
        <AiOutlineMenu className="duration-500 text-dark-800 dark:text-gray-300" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none text-red-500 bg-gray-100 dark:bg-dark-700"
      >
        <Link href="/" className="flex items-center gap-1">
          <p className="font-conthrax text-lg text-dark-800 dark:text-gray-300">
            ALAMSYAH.ID
          </p>
        </Link>
        <div className="text-dark-800 dark:text-gray-300">
          <NavContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
