import Link from "next/link";
import { ReactNode } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const personalInfo: {
  icon: ReactNode;
  href: string;
  id: string;
}[] = [
  {
    id: "1",
    href: "https://github.com/soner3",
    icon: <BsGithub className="size-7 text-violet-600" />,
  },
  {
    id: "2",
    href: "https://de.linkedin.com/in/soner-astan-1842a529a",
    icon: <BsLinkedin className="size-7 text-rose-600" />,
  },
];

export default function Footer() {
  return (
    <footer className="duration-200 md:ml-20">
      <hr className="dark:border-rose-600" />
      <p className="m-2 text-center">
        All data is sourced from{" "}
        <Link
          className="hover:text-sky-500 hover:underline"
          href={"https://dummyjson.com/"}
        >
          dummyjson.com
        </Link>{" "}
        and has been and will not be used for commercial purposes.
      </p>
      <div className="my-4 flex justify-between p-4">
        <ul className="flex flex-col gap-2">
          <li>&copy;Soner Astan</li>
          <Link
            className="hover:text-sky-500 hover:underline"
            href={"mailto:sonerastan@icloud.com"}
          >
            <li>sonerastan@icloud.com</li>
          </Link>
          <Link
            className="hover:text-sky-500 hover:underline"
            href={"tel:017620131780"}
          >
            <li>017620131780</li>
          </Link>
        </ul>
        <ul className="flex gap-5">
          {personalInfo.map((info) => {
            return (
              <Link href={info.href} key={info.id}>
                <li>{info.icon}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
