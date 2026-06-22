"use client";

import Link from "next/link";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <PageHero
        eyebrow="404 Error"
        title={
          <>
            Page{" "}
            <span className="display-italic text-gradient-brand">
              not found.
            </span>
          </>
        }
        description="The page you are looking for doesn't exist, has been moved, or was never here in the first place."
      />
      
      <section className="pb-32">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-5 bg-ink text-background font-mono text-xs tracking-[0.25em] uppercase hover:bg-teal hover:text-white transition-colors group"
          >
            Return to Home
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
