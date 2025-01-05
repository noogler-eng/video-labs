"use client";

import { useParams } from "next/navigation";

export default function page() {
  // on /dashboard/[team] where pathname is /dashboard/nextjs
  const params = useParams<{ id: string }>();
  console.log("we are on page:", `/meeting/${params.id}`);

  return <div>
    <p>heloo</p>
  </div>;
}
