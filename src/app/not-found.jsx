import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/404/not-found.png"
        alt="Page Not Found"
        fill
        className="object-cover"
      />
    </div>
  );
}