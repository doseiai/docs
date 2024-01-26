"use client"

import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";
import React, { useState } from "react";
import GitHubButton from "react-github-btn";

export default function Banner() {

  const [open, setOpen] = useState(true);

  return (
    <div className={clsx(
      "pointer-events-none inset-x-0 bottom-0 sm:justify-center sm:px-6 sm:pb-5 lg:px-8 fixed z-10",
      open ? "sm:flex": "hidden"
    )}>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-zinc-900/80  dark:bg-white/80 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-sm leading-6 text-white dark:text-black">
            Show your support by giving us a star!
          </p>
          <div className="flex items-center justify-center -mt-1 -mb-2.5">
            <GitHubButton
              href="https://github.com/doseiai/engine"
              data-show-count="true"
              data-size="large"
              aria-label="Star doseiai/engine on GitHub">
              Star
            </GitHubButton>
          </div>
          <button type="button" className="-m-1.5 flex-none p-1.5" onClick={() => setOpen(!open)}>
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white dark:text-black" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
