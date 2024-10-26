'use client'

import Link from "next/link";

import { PopoverContent, PopoverTrigger, Popover } from "../ui/popover";

import { Menu  } from "lucide-react";

export function MenuMobileList() {


  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
          <Menu strokeWidth={1} className="cursor-pointer" />
          <PopoverContent>
            <Link href="/category/capsula" className="block">Café en cápsulas</Link>
            <Link href="/category/grano" className="block">Café en grano</Link>
            <Link href="/category/molido" className="block">Café molido</Link>
          </PopoverContent>
        </div>
      </PopoverTrigger>
    </Popover>
  )
}
