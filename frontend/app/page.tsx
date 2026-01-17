import Image from "next/image";
async function getData() {
  const res = await fetch(`${process.env.API_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.text();
}
export default function Home() {
  const data = getData();
  return (
    <main>{data}</main>
  );
}
