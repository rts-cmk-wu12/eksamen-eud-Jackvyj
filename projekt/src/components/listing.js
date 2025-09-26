import Image from "next/image";
import Link from "next/link";

export default function Listing({ item }) {
  const title = item.title;
  const imageUrl = item.asset.url;

  return (
    <Link
      href={`/details/${item.id}`}
      key={item.id}
      className="border-1 rounded-sm justify-items-center items-center w-76 h-76"
    >
      <Image
        className="p-2 w-auto h-5/6"
        src={imageUrl}
        alt=""
        width={150}
        height={150}
      />
      <div>{title}</div>
    </Link>
  );
}
