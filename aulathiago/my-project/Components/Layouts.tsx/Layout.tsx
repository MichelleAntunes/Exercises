import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "@/data/Store";

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <Head>
        <title>{title ? title + "Ecommerce" : "Ecommerce"}</title>
        <meta name="description" content="Ecommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-6 justify-between shadow-md">
            <Link href="/" legacyBehavior>
              <a className="p-2 text-lg font-bold">Labenu Ecommerce </a>
            </Link>
            <div>
              <Link href="/compras" legacyBehavior>
                <a className="p-2">
                  Compras
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-yellow-400 px-2 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright 2023 Michelle Antunes</p>
        </footer>
      </div>
    </div>
  );
}
