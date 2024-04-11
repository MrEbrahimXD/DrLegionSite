import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// Fonts
import '@fontsource/tajawal/300.css';
import '@fontsource/tajawal/700.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Products
// import products, callsToAction from ''


// Logos and Images
import AAGLogo from '../images/logo.png';
// import ShutterIcon from '../images/shutter.png'
// Component Rest Code

const products = [
  { name: 'شيش الحصيرة', description: 'يفني عن الشيش العادي التقليددى ومشاكله المتعددة', href: '#', icon: TableCellsIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className='z-10 bg-white'
    >
      <nav className='flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8' aria-label='Global'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex lg:flex-1'
        >
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Abo Amr Group</span>
            <img className='w-auto h-8' src={AAGLogo} alt='Abo Amr Group Icon' />
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
            <Bars3Icon className='w-6 h-6' aria-hidden='true' />
          </button>
        </motion.div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>

            <Popover.Button
              className='flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1 [font-family:"Tajawal"]'
            >
              منتجاتنا
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
                      <a href={item.href} className='block font-semibold text-gray-900'>
                        {item.name}
                        <span className='absolute inset-0' />
                      </a>
                      <p className='mt-1 text-gray-600'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                  >
                    <item.icon className='flex-none w-5 h-5 text-gray-400' aria-hidden='true' />
                    {item.name}
                  </a>
                ))}
              </div>
            </Transition>
          </Popover>
          <motion.a
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            href='#'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            شركاؤنا
          </motion.a>
          <Link to={'/aboutus'}>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 [font-family:'Tajawal']">
            من نحن
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a className="-m-1.5 p-1.5" href='https://aboamrgroup.com'>
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src={AAGLogo}
                alt="Abo Amr Group Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 [font-family:'Tajawal']">
                        منتجاتنا
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
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
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50 [font-family:'Tajawal']"
                >
                  شركاؤنا
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50 [font-family:'Tajawal']"
                >
                  من نحن
                </a>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  )
}
