"use client";
import Image from "next/image";
import useAuth from "../useAuth";
import { getCookie } from "cookies-next";
import RSLogo from "../../public/RSLogo.png";
import RSLogoMobile from "../../public/RSLogoMobile.png";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import UserStatus from "./UserStatus";
import UserStatusMobile from "./UserStatusMobile";

const products = [
  {
    name: "Energymeter Detail Report",
    description: "Get a better understanding of your traffic",
    href: "/reports/detail/energymeter",
    icon: ChartPieIcon,
  },
  {
    name: "Energymeter Summary Report",
    description: "Speak directly to your customers",
    href: "/reports/summary/energymeter",
    icon: SquaresPlusIcon,
  },
  {
    name: "Production Detail Report",
    description: "Your customers’ data will be safe and secure",
    href: "/reports/detail/production",
    icon: ChartPieIcon,
  },
  {
    name: "Production Summary Report",
    description: "Connect with third-party tools",
    href: "/reports/summary/production",
    icon: SquaresPlusIcon,
  },
  //   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];
const callsToAction = [
  //   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  //   { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState("");
  const { isLoggedIn } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loggedUser = getCookie("user");
    setCurrentUser(loggedUser);
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-700  rounded border-b-2 border-x-2 border-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center space-x-2  font-semibold">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              priority
              src={RSLogo}
              width={180}
              height={180}
              alt="DataloggerIcon"
              className="fill-white"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 p-1 text-sm font-semibold leading-6 text-white hover:bg-gray-600 hover:rounded">
              Report
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/"
            className="text-sm p-1 font-semibold leading-6 text-white hover:bg-gray-600 rounded "
          >
            Dashboard
          </Link>
          <Link
            target="_blank"
            href="https://rsautomation.in/"
            className="text-sm p-1  font-semibold leading-6 text-white hover:bg-gray-600 rounded"
          >
            AboutUs
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-3">
          <span className="text-base font-bold text-white">
            {isLoggedIn && currentUser ? ` Welcome ${currentUser}` : ""}
          </span>
          <UserStatus />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between py-1">
            <Image
              priority
              src={RSLogoMobile}
              width={100}
              height={100}
              alt="DataloggerIcon"
            />
            <span className="text-base font-bold -ml-2">
              {isLoggedIn && currentUser ? ` Welcome ${currentUser}` : ""}
            </span>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Report
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none text-black"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  target="_blank"
                  href="https://rsautomation.in/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  AboutUs
                </Link>
              </div>
              <div className="py-6">
                <UserStatusMobile />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
