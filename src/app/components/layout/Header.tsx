'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { LogOut, User, Settings, BookOpen, Menu } from 'lucide-react';
import { AppData } from '@/app/data';
import { AppUser, HeaderProps } from '@/app/types';

const UserMenu = ({
  user,
  onSignOut,
}: {
  user: AppUser;
  onSignOut?: () => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none rounded-full">
      <Avatar className="h-8 w-8 border border-border hover:ring-2 hover:ring-ring/20 transition-all">
        <AvatarImage src={user?.image} alt="" />
        <AvatarFallback className="bg-muted text-muted-foreground text-sm">
          {user.firstname?.charAt(0).toUpperCase() ||
            user.email?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium">{user.firstname}</p>
          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/my-applications" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          My applications
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/settings" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        className="text-destructive focus:text-destructive"
        onClick={onSignOut}
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sign out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ user, onSignOut }) => {
  return (
    <>
      {/* Top bar - minimal */}
      <div className="border-b border-border bg-muted/50">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm text-muted-foreground">
          <span>{AppData.openingHours}</span>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${AppData.adminEmail[0]}`}
              className="hover:text-foreground transition-colors"
            >
              {AppData.adminEmail[0]}
            </a>
            <a
              href={`tel:${AppData.phone[0].replace(/\s/g, '')}`}
              className="hover:text-foreground transition-colors"
            >
              {AppData.phone[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground no-underline"
            aria-label="Home"
          >
            <Image
              src="/images/logo.webp"
              alt=""
              width={100}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="/admission">Enrollment</Link>
            </Button>
            {user ? (
              <UserMenu user={user} onSignOut={onSignOut} />
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/user/login">Sign in</Link>
              </Button>
            )}
            {/* Mobile menu trigger - optional; for now we keep nav visible via scroll */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navLinks.map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link href={href}>{label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/admission">Enrollment</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
