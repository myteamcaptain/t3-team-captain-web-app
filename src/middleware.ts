import {
  clerkClient,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/faq",
  "/contact-us",
  "/about-us",
  "/privacy-policy",
  "/terms-of-services",
  "/about-us",
  "/auth/login(.*)",
  "/auth/create(.*)",
  "/api/(.*)",
]);

const isAuthRoute = createRouteMatcher(["/auth/login(.*)", "/auth/create(.*)"]);
const isRequireProfile = createRouteMatcher(["/admin/profile/required(.*)"]);
export default clerkMiddleware(async (auth, request) => {
  const { sessionClaims, userId, sessionId, redirectToSignIn } = auth();
  const isAuthenticated = !!(userId && sessionId);
  if (!isPublicRoute(request)) {
    auth().protect();
  }
  if (
    isAuthenticated &&
    !isPublicRoute(request) &&
    !isRequireProfile(request)
  ) {
    const userDetails = await clerkClient().users.getUser(userId);
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.username
    ) {
      const profileRequiredUrl = new URL(
        `/admin/profile/required`,
        request.url,
      );
      return Response.redirect(profileRequiredUrl);
    }
    return NextResponse.next();
  }
  if (isAuthenticated && isAuthRoute(request)) {
    const dashboardUrl = new URL(`/admin`, request.url);
    return Response.redirect(dashboardUrl);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
