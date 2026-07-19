import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/checkout") {
    const cartCookie = request.cookies.get("cart")?.value;

    let cart = [];

    if (cartCookie) {
      try {
        cart = JSON.parse(cartCookie);
      } catch (err) {
        cart = [];
      }
    }

    if (cart.length === 0) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout"],
};