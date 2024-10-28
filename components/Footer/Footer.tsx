"use client";

import { useRouter } from "next/navigation";
import { dataFooter } from "./Footer.data";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function Footer() {
  const router = useRouter();
  const data = dataFooter;

  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <h1 className="text-3xl" onClick={() => router.push("/")}>
              Coffee <span className="font-bold">Motril</span>
            </h1>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {data?.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="hover:underline me-4 md:me-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024{" "}
          <Link href="http://www.facutech.com" target="_blank">
            facutech.com
          </Link>
          <p>Todos los derechos reservados</p>
        </span>
      </div>
    </footer>
  );
}
