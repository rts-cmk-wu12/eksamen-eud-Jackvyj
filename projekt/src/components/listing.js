import Image from "next/image";
import Link from "next/link";

export default function Listing({ item }) {
  const title = item.title;
  const imageUrl = item.asset.url;

  return (
    <Link
      href={`/details/${item.id}`}
      key={item.id}
      className="border-2 justify-items-center items-center w-76 h-76"
    >
      <Image src={imageUrl} alt="" width={150} height={150} />
      <div>{title}</div>
    </Link>
  );
}
