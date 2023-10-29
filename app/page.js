import Head from "next/head";
import Home from "@/components/header";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <h1>hey papafam</h1>
      {/* Header */}
      <Home />
    </div>
  );
}
