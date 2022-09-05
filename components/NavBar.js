import { useState } from "react";
import { Transition } from "@headlessui/react";
import AnimButton from "./AnimButton";
import Link from "next/link";
// import Image from "next/image";
// import Logo from "../public/streamlineLogo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div style={{height:"80px"}}>
			<nav className="static w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center mx-12 justify-between w-full">
							<div className="">
								<h1 className="font-bold font-raleway text-3xl cursor-pointer">
                  <Link href="/">
                    GroupLabs
                  </Link>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
				<div className="font-raleway text-lg cursor-pointer">
                    <Link
                      href="/about">
                      About
                    </Link>
                </div>
				<div className="font-raleway text-lg cursor-pointer">
                    <Link
                      href="/blog">
                      Blog
                    </Link>
                  </div>
                  <div className="font-raleway text-lg cursor-pointer">
                    <div
                      style={{'color':'grey', 'cursor':'not-allowed'}}>
                      Partners
                    </div>
                  </div>
                  <div className="font-raleway text-lg cursor-pointer">
                    <AnimButton label="JOIN" link="https://discord.gg/AvktyUz3v6" />
                  </div>

								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden z-10" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-5 sm:px-3 flex flex-col content-end"
							>
								<Link
									href="/about"
									className="hover:bg-blue-600 text-black block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
								>
									<div className='text-black px-8 py-8 text-4xl font-bold font-raleway cursor-pointer'>
										About
									</div>
								</Link>

								<Link
									href="/blog"
									className="hover:bg-blue-600 text-black block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
								>
									<div className='text-black px-8 py-8 text-4xl font-bold font-raleway cursor-pointer'>
										Blog
									</div>
								</Link>
								<Link
									href="https://discord.gg/AvktyUz3v6"
									className="text-black cursor-pointer"
								>
									<div className='text-black px-8 py-8 text-4xl font-bold font-raleway cursor-pointer'>
										Join
									</div>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;