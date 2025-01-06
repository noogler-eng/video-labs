import Box from "@/app/components/Box";

export default function Home() {
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
              {new Date()
                .toLocaleTimeString("en-us", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toString()}
            </p>
            <p className="text-xl">
              {new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format()}
            </p>
          </div>
        </div>
      </div>
      <Box />
      <div></div>
    </div>
  );
}
