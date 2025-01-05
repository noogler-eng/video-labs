"use client";
import { House } from "lucide-react";
import { ListStart } from "lucide-react";
import { ArrowLeftToLine } from "lucide-react";
import { CassetteTape } from "lucide-react";
import { FileUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const options: {
    comp: React.ReactNode;
    name: string;
    link: string;
  }[] = [
    {
      comp: <House size={26} />,
      name: "Home",
      link: "/",
    },
    {
      comp: <ListStart size={26} />,
      name: "Upcoming",
      link: "/upcoming",
    },
    {
      comp: <ArrowLeftToLine size={26} />,
      name: "Previous",
      link: "/previous",
    },
    {
      comp: <CassetteTape size={26} />,
      name: "Recordings",
      link: "/recordings",
    },
    {
      comp: <FileUser size={26} />,
      name: "Personel Meeting",
      link: "/personel-meeting",
    },
  ];

  const optionsComp = options.map((item, index) => {
    const pathname = usePathname();

    return (
      <Link
        href={item.link}
        key={index}
        className={`flex gap-2 rounded-lg w-full p-2 items-center ${
          pathname == item.link ? "bg-blue-600" : ""
        }`}
      >
        {item.comp}
        <p className="text-white text-lg font-semibold">{item.name}</p>
      </Link>
    );
  });
  return (
    <div className="bg-dark-1 text-white py-10 px-8">
      <div className="flex flex-col gap-8">{optionsComp}</div>
    </div>
  );
}
