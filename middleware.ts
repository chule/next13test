import { NextResponse } from "next/server";

const middleware = (request: Request) => {
  return NextResponse.redirect(new URL("/", request.url));
};

export default middleware;

// redirects if path is "/todos"
export const config = {
  matcher: ["/todosz"],
};
