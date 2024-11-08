import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-[100px]">
      <div className="lg:w-[80%] mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200" />
              <h2 className="text-xl font-semibold">

                Donate Now
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              Nontium quod soluta modi non vitio illaut quia. Voluptas aspernatur aut aut ut aut qui molestias totam. Minima recusant reiciunt quia magni voluptas dolore sunt quia nisi.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacts info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full" />
                <span className="text-gray-600">+1 555 555 5555</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full" />
                <span className="text-gray-600">info@helphub.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full" />
                <span className="text-gray-600">support@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full" />
                <span className="text-gray-600">454 Brook St, New Jersey</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-600">
              Sign up to receive email updates about latest news and updates from us.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter Email"
                className="bg-white"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="w-full bg-green-600 py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-sm text-center">
            Made future © 2023 HelpHub Template. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}