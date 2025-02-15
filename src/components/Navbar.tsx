import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";






function Navbar()
{
    return(
        <nav className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          {/* LEFT SIDE -LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
          >
            <CodeIcon className="size-8 text-yellow-500" />
            <span className="bg-gradient-to-r from-yellow-600 to-red-500 bg-clip-text text-transparent">
              AuthTm
            </span>
          </Link>


          <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>

        </div>
    </nav>
  )
}

export default Navbar;