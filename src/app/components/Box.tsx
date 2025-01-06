"use client";
import { BadgePlus } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { CassetteTape } from "lucide-react";
import { useState } from "react";
import AlertDialogDemo from "./Dialog";
import { useRouter } from "next/navigation";

export default function Box() {
  const navigate = useRouter();
  const [meetingType, setMeetingType] = useState<
    | "new-meeting"
    | "join-meeting"
    | "schedule-meeting"
    | "meeting-recordings"
    | ""
  >();

  const boxes: {
    name: string;
    link: string;
    icons: React.ReactNode;
    color: string;
    sColor: string;
    content: string;
    handle: () => void;
    buttonName: string;
    type:
      | "new-meeting"
      | "join-meeting"
      | "schedule-meeting"
      | "meeting-recordings";
  }[] = [
    {
      name: "New Meeting",
      link: " ",
      icons: <BadgePlus size={32} />,
      color: "bg-orange-600",
      sColor: "bg-orange-500",
      content: "set up a new recording",
      type: "new-meeting",
      handle: () => navigate.replace("/"),
      buttonName: "start meeting"
    },
    {
      name: "Join Meeting",
      link: " ",
      icons: <SquarePlus size={32} />,
      color: "bg-yellow-600",
      sColor: "bg-yellow-500",
      content: "via invitation link",
      type: "join-meeting",
      handle: () => navigate.replace(`/meeting/123`),
      buttonName: "join meeting"
    },
    {
      name: "Schedule Meeting",
      link: " ",
      icons: <CalendarCheck size={32} />,
      color: "bg-green-600",
      sColor: "bg-green-500",
      content: "plan your meeting",
      type: "schedule-meeting",
      handle: () => navigate.replace("/"),
      buttonName: "schedule it"
    },
    {
      name: "Meeting Recordings",
      link: " ",
      icons: <CassetteTape size={32} />,
      color: "bg-red-600",
      sColor: "bg-red-500",
      content: "meetings recording",
      type: "meeting-recordings",
      handle: () => navigate.replace("/"),
      buttonName: "recordings"
    },
  ];

  const boxesComp = boxes.map((item, index) => {
    const payload = {
      name: item.name,
      content: item.content,
      icon: item.icons,
      isTrue: false,
      link: "",
      handle: item.handle,
      buttonName: item.buttonName
    };

    return (
      <AlertDialogDemo items={payload} key={index}>
        <div
          className="w-full"
          onClick={() => {
            setMeetingType(item.type);
          }}
        >
          <div
            key={index}
            className={`${item.color} flex flex-col justify-between items-start min-h-40 p-4 rounded-lg`}
          >
            <div className={`p-2 ${item.sColor} rounded-xl`}>{item.icons}</div>
            <div>
              <p className="text-2xl font-extrabold">{item.name}</p>
              <p className="text-sm">{item.content}</p>
            </div>
          </div>
        </div>
      </AlertDialogDemo>
    );
  });

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-2 w-full">{boxesComp}</div>
    </div>
  );
}
