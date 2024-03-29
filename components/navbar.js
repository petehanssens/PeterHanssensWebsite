/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div>
              <a href="/" className="flex">
                <span className="sr-only">Peter Hanssens</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="./img/square_headshot.jpg"
                  alt="Peter Hanssens"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                <a href="/about/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About me
                </a>
                <a href="/blog/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>
                <a href="/projects/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Projects
                </a>
                <a href="/cv-peter-hanssens.pdf" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Curriculum Vitae
                </a>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="img/square_headshot.jpg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      About me
                    </a>
                    <a href="/blog" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Blog
                    </a>
                    <a href="/projects" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Projects
                    </a>
                    <a href="/cv-peter-hanssens.pdf" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Curriculum Vitae
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
