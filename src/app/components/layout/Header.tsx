import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  LogOut,
  User,
  Settings,
  BookOpen,
} from 'lucide-react';
import { AppData } from '@/app/data';

import { ReactNode } from 'react';
import { AppUser, HeaderProps } from '@/app/types';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="block p-2 hover:bg-primary/5 rounded-md transition-colors duration-200 text-sm"
  >
    {children}
  </Link>
);
const UserMenu = ({
  user,
  onSignOut,
}: {
  user: AppUser;
  onSignOut?: () => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none">
      <Avatar className="h-8 w-8 hover:ring-2 hover:ring-primary/20 transition-all">
        <AvatarImage src={user?.image} />
        <AvatarFallback className="bg-primary/10">
          {user.firstname?.charAt(0).toUpperCase() ||
            user.email?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{user.firstname}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {user.email}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <User className="w-4 h-4 mr-2" />
        <Link href="/profile">Profile</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BookOpen className="w-4 h-4 mr-2" />
        <Link href="/my-applications">My Applications</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="w-4 h-4 mr-2" />
        <Link href="/settings">Settings</Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        className="text-red-600 focus:text-red-600"
        onClick={onSignOut}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Header: React.FC<HeaderProps> = ({ user, onSignOut }) => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary/5 border-b">
        <div className="max-w-screen-xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>{AppData.openingHours}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{AppData.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${AppData.adminEmail[0]}`}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>{AppData.adminEmail[0]}</span>
              </a>
              <a
                href={`tel:${AppData.phone[0]}`}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>{AppData.phone[0]}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <NavigationMenu className="mx-auto max-w-none justify-between py-4">
            <NavigationMenuList>
              {/* Logo */}
              <Link href="/" className="mr-8">
                <NavigationMenuItem>
                  <NavigationMenuLink>
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={100}
                      height={60}
                      className="transition-transform duration-200 hover:scale-105"
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 text-base">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] p-3">
                    <div className="space-y-1">
                      <NavLink href="/history">Our History</NavLink>
                      <NavLink href="/mission">Mission & Values</NavLink>
                      <NavLink href="/staff">Staff Directory</NavLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Academics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 text-base">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] p-3">
                    <div className="space-y-1">
                      <NavLink href="/programs">Programs</NavLink>
                      <NavLink href="/curriculum">Curriculum</NavLink>
                      <NavLink href="/schedule">Schedule</NavLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Right Side Navigation */}
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Link href="/admission">
                  <Button
                    variant="default"
                    className="h-10 px-6 transition-transform duration-200 hover:scale-105"
                  >
                    Enrollment
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="h-10 px-6 transition-transform duration-200 hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </NavigationMenuItem>

              {user ? (
                <NavigationMenuItem>
                  <UserMenu user={user} onSignOut={onSignOut} />
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <Link href="/user/login">
                    <Button
                      variant="ghost"
                      className="h-10 px-6 transition-colors hover:bg-primary/5"
                    >
                      Sign In
                    </Button>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
