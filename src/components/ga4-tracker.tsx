"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactGA from "react-ga4";

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ReactGA.initialize("G-01TG7PFKVG");
  }, []);

  useEffect(() => {
    const query = searchParams?.toString() ?? "";
    const url = pathname + (query ? `?${query}` : "");
    ReactGA.send({
      hitType: "pageview",
      page: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GA4Tracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
