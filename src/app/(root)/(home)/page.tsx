import Link from "next/link";
import { BadgePlus } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { CassetteTape } from "lucide-react";

export default function Home() {
  const boxes: {
    name: string;
    link: string;
    icons: React.ReactNode;
    color: string;
    sColor: string;
    content: string;
  }[] = [
    {
      name: "New Meeting",
      link: "",
      icons: <BadgePlus size={32} />,
      color: "bg-orange-600",
      sColor: "bg-orange-500",
      content: "set up a new recording",
    },
    {
      name: "Join Meeting",
      link: "",
      icons: <SquarePlus size={32} />,
      color: "bg-yellow-600",
      sColor: "bg-yellow-500",
      content: "via invitation link",
    },
    {
      name: "Schedule Meeting",
      link: "",
      icons: <CalendarCheck size={32} />,
      color: "bg-green-600",
      sColor: "bg-green-500",
      content: "plan your meeting",
    },
    {
      name: "Meeting Recordings",
      link: "",
      icons: <CassetteTape size={32} />,
      color: "bg-red-600",
      sColor: "bg-red-500",
      content: "meetings recording",
    },
  ];

  const boxesComp = boxes.map((item, index) => {
    return (
      <Link href={item.link} className="w-full">
        <div key={index} className={`${item.color} flex flex-col justify-between items-start min-h-40 p-4 rounded-xl`}>
          <div className={`p-2 ${item.sColor} rounded-xl`}>{item.icons}</div>
          <div>
            <p className="text-2xl">{item.name}</p>
            <p className="text-sm">{item.content}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="text-white py-10 px-8">
      <h2 className="text-4xl font-extrabold">Home</h2>
      <div className="my-2">
        <div className="bg-gray-500 rounded-lg h-44 p-2 bg-[url('/mh.jpg')] bg-cover flex flex-col justify-between">
          <div className="rounded-full bg-gray-700 w-fit px-3 py-1">
            upcoming meeting at: {new Date().toLocaleTimeString().toString()}
          </div>
          <div>
            <p className="text-4xl font-extrabold">
              {new Date().toLocaleTimeString().toString()}
            </p>
            <p className="text-xl">{new Date().toDateString().toString()}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 w-full">{boxesComp}</div>
      <div></div>
    </div>
  );
}
