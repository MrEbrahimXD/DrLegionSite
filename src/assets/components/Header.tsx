import { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  // ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  BuildingLibraryIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// Fonts
import '@fontsource/tajawal/300.css';
import '@fontsource/tajawal/700.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '@fontsource/paytone-one/400.css'


// Products
// import products, callsToAction from ''


// Logos and Images
import AAGLogo from '../videos/prophet.gif';
// import ShutterIcon from '../images/shutter.png'
// Component Rest Code

const products = [
  { name: 'Everyday Reminder', description: 'Subscribe to our YouTube Channel', href: 'https://www.youtube.com/@everydayreminder', icon: BuildingLibraryIcon },
  { name: 'ILM Server', description: 'Join our Discord Server', href: 'https://discord.gg/yTQtzxFHQe', icon: CursorArrowRaysIcon },
]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
    className='bg-black'
    >
      <nav className='flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8' aria-label='Global'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex lg:flex-1'
        >
          <a href='/' className='-m-1.5 p-1.5'>
            <img className='w-auto h-20' src={AAGLogo} alt='DrLegion Icon' />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex lg:hidden'
        >
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='w-6 h-6 text-white' aria-hidden='true' />
          </button>
        </motion.div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>

            <Popover.Button
              className='flex items-center text-3xl leading-6 text-white gap-x-1 [font-family:"Tajawal"]'
            >
              Home
              <ChevronDownIcon className='flex-none w-5 h-5 text-gray-400' aria-hidden='true' />
            </Popover.Button>

            <Transition
              as={motion.div}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-40 top-full rounded-3xl ring-1 ring-gray-900/5'
            >
              <div className='p-4'>
                {products.map((item) => (
                  <div
                    key={item.name}
                    className='relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50'
                  >
                    <div className='flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white'>
                      <item.icon className='w-6 h-6 text-gray-600 group-hover:text-indigo-600' aria-hidden='true' />
                    </div>
                    <div className='flex-auto'>
                      <a href={item.href} className='block font-semibold text-gray-900' >
                        {item.name}
                        <span className='absolute inset-0' />
                      </a>
                      <p className='mt-1 text-gray-600'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                {/* {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                  >
                    <item.icon className='flex-none w-5 h-5 text-gray-400' aria-hidden='true' />
                    {item.name}
                  </a>
                ))} */}
              </div>
            </Transition>
          </Popover>
          <motion.a
            href='/downloads'
            className="text-3xl leading-6 text-white [font-family:'Tajawal']"
          >
            Downloads
          </motion.a>
          <Link to={'/aboutus'}>
          <a href="#" className="text-3xl leading-6 text-white [font-family:'Tajawal']">
                Contact Us
          </a>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
           
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a className="-m-1.5 p-1.5" href='https://drlegion.com'>
              <span className="sr-only">Dr. Legion</span>
              <img
                className="w-auto h-12"
                src={AAGLogo}
                alt="Dr. Legion Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <motion.div className="py-6 space-y-2"
              
              initial={{ x: '-100%' }} // Initial position (off-screen to the left)
      animate={{ x: 0 }} // Final position (on-screen)
      exit={{ x: '-100%' }} // Exit animation (off-screen to the left)
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }} // Smooth ease-in-out transition
              
              
              >
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-2xl leading-7 text-white hover:bg-gray-600 [font-family:'Tajawal']">
                        Home
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm leading-7 text-white rounded-lg hover:bg-gray-600 [font-family:'Tajawal']"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-2xl leading-7 text-white rounded-lg hover:bg-gray-600 [font-family:'Tajawal']"
                >
                  Downloads
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-2xl leading-7 text-white rounded-lg hover:bg-gray-600 [font-family:'Tajawal']"
                >
                  About Us
                </a>
              </motion.div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
