import SignIn from "@/components/auth/sign-in";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Link</NavigationMenuItem>
        <NavigationMenuItem>Link</NavigationMenuItem>
        <NavigationMenuItem>Link</NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button>Login</Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <SignIn />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
