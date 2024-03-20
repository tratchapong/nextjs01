import { NextResponse } from "next/server";

export function middleware(req) {
    console.log('middleware run...')
    console.log(req.url)
    // return NextResponse.redirect(new URL('/content', req.url))
    return NextResponse.rewrite(new URL('/content', req.url))
}

export const config = {
    matcher : '/data/:path*'
}