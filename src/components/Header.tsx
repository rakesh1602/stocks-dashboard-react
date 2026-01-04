import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-11xl items-center justify-between p-6 lg:px-8">

                <button
                    type="button"
                    className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-x-8 w-full">
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 mr-2 w-auto"
                            />
                        </a>
                    </div>
                    {/* Nav Links */}
                    <PopoverGroup className="hidden lg:flex items-center gap-x-8">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                Product
                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Portfolio
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Trading and Markets
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Research Portal
                        </a>
                    </PopoverGroup>
                    {/* Search Bar */}
                    <form className="hidden lg:flex h-10 w-[344px] rounded-lg bg-[#F7F6F9]">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative h-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-body"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="search"
                                className="block w-full h-full pl-9 pr-3 bg-transparent text-heading text-sm rounded-lg focus:ring-brand focus:border-brand placeholder:text-body outline-none"
                                placeholder="Search"
                                required
                            />
                        </div>

                    </form>
                    {/* Log in */}
                    <div className="flex flex-2 justify-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>

                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/30" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <img
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8"
                        />
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Search */}
                    <div className="mt-6">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full h-10 rounded-lg bg-[#F7F6F9] px-4 text-sm outline-none"
                        />
                    </div>

                    {/* Mobile Nav Links */}
                    <div className="mt-8 space-y-4">
                        {products.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-sm font-semibold text-gray-900"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a href="#" className="block text-sm font-semibold text-gray-900">
                            Portfolio
                        </a>
                        <a href="#" className="block text-sm font-semibold text-gray-900">
                            Trading and Markets
                        </a>
                        <a href="#" className="block text-sm font-semibold text-gray-900">
                            Research Portal
                        </a>
                    </div>

                    {/* Login */}
                    <div className="mt-8 border-t pt-6">
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Log in →
                        </a>
                    </div>
                </DialogPanel>
            </Dialog>

        </header>
    );
}

