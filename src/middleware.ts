import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

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
export default clerkMiddleware((auth, request) => {
  const { sessionClaims, userId, sessionId, redirectToSignIn } = auth();
  const isAuthenticated = !!(userId && sessionId);
  if (!isPublicRoute(request)) {
    auth().protect();
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
