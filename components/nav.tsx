import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Home, LayoutDashboard, User, Settings, Bell, HelpCircle, Package, Music, Component, Clock, Mail, Phone, MapPin, Users, History, Circle, Eye } from 'lucide-react';
import React from 'react'

const Nav = () => {
  return (
    <div className="bg-transparent top-0 ">
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </div>
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Package className="h-4 w-4" />
              <span>Product 1</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Package className="h-4 w-4" />
              <span>Product 2</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Music className="h-4 w-4" />
              <span>Product 3</span>
            </Link>
          </div>
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Package className="h-4 w-4" />
              <span>Product 4</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Component className="h-4 w-4" />
              <span>Product 5</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Clock className="h-4 w-4" />
              <span>Product 6</span>
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>About</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Users className="h-4 w-4" />
              <span>Company</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Users className="h-4 w-4" />
              <span>Team</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <History className="h-4 w-4" />
              <span>History</span>
            </Link>
          </div>
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Circle className="h-4 w-4" />
              <span>Culture</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Eye className="h-4 w-4" />
              <span>Values</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <MapPin className="h-4 w-4" />
              <span>Careers</span>
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <Phone className="h-4 w-4" />
              <span>Phone</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <HelpCircle className="h-4 w-4" />
              <span>Chat</span>
            </Link>
          </div>
          <div className="space-y-2">
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <MapPin className="h-4 w-4" />
              <span>Address</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              <HelpCircle className="h-4 w-4" />
              <span>Location</span>
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
</div>
  )
}
export default Nav
