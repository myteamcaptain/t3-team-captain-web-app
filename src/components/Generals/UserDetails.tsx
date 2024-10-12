import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth, useUser } from "@clerk/nextjs";
import { NavigationTypeComp } from "./NavigationMenu";
import { NAVIGATION_MENU_AUTH } from "@/lib/const";
import ToogleTheme from "./ToogleTheme";

export default function UserDetails() {
  const { isSignedIn, isLoaded: isAuthLoaded, signOut } = useAuth();
  const { isLoaded, user } = useUser();
  return (
    <div>
      {isAuthLoaded && !isSignedIn && (
        <div className="flex items-center">
          <ToogleTheme />
          <NavigationTypeComp menu={NAVIGATION_MENU_AUTH} />
        </div>
      )}
      {isAuthLoaded && isSignedIn && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src={user?.imageUrl} alt="@shadcn" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Appearance</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem>Light Mode</DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button onClick={() => signOut()} variant="ghost">
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
