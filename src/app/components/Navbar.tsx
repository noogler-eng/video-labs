"use client";
import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useRouter();

  return (
    <div className="bg-dark-1 px-8 py-5 text-white flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="text-5xl font-extrabold flex items-center">
          <FlaskConical size={40} />
          Video<i>-</i>Labs
        </h1>
      </Link>
      <div className="">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button
            onClick={() => navigate.replace("/sign-in")}
            variant="secondary"
          >
            signin
          </Button>
        )}
      </div>
    </div>
  );
}
