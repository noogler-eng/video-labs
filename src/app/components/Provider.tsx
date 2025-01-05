import { ClerkProvider } from "@clerk/nextjs";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorBackground: "#1C1F2E",
          colorText: "white",
          colorNeutral: "white",
          colorShimmer: "white",
          colorWarning: "white",
          colorPrimary: "gray",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
