import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"

export default withAuth(
    function middleware() {
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized({ req, token }) {
                const { pathname } = req.nextUrl;
                if (
                    pathname.startsWith("/api/auth") ||
                    pathname === "/login" ||
                    pathname === "/register"
                )
                    return true; //if there is pathname, the user is authenticated
                
                if (pathname === "/" || pathname.startsWith("/api/videos")) {
                    return true;
                }

                return !!token
            },

        },
    },
);

export const config = {
    matcher: [
        /*
         *Matches all request except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon (favicon file)
         * - public folder
        */
       "/((?!_next/static|_next/image|favicon.ico|public/).*)"
    ]
}