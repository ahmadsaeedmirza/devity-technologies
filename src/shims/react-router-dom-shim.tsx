"use client";

import React, { forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";

// Prop interfaces
export interface LinkProps extends Omit<NextLinkProps, "href">, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

export interface NavLinkProps extends Omit<LinkProps, "className" | "children"> {
  end?: boolean;
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  children?: React.ReactNode | ((props: { isActive: boolean; isPending: boolean }) => React.ReactNode);
}

// Shim Link: Map 'to' to 'href'
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, ...props }, ref) => {
    return (
      <NextLink ref={ref} href={to} {...props}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

// Shim NavLink: Compute active state based on current pathname
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, end, className, children, ...props }, ref) => {
    const pathname = usePathname();
    
    // Normalize path comparison
    const isActive = pathname
      ? (end 
        ? pathname === to 
        : pathname.startsWith(to) && (pathname[to.length] === "/" || pathname.length === to.length))
      : false;

    const resolvedClassName = typeof className === "function" 
      ? className({ isActive, isPending: false }) 
      : className;

    const resolvedChildren = typeof children === "function" 
      ? children({ isActive, isPending: false }) 
      : children;

    return (
      <NextLink ref={ref} href={to} className={resolvedClassName} {...props}>
        {resolvedChildren}
      </NextLink>
    );
  }
);
NavLink.displayName = "NavLink";

// Shim useLocation: Return path metadata
export const useLocation = () => {
  const pathname = usePathname();
  return {
    pathname,
    search: "",
    hash: "",
    state: null,
    key: "default",
  };
};
