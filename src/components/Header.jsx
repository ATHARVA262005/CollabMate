import Link from 'next/link';
import { auth} from "@clerk/nextjs/server";
import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default async function Header() {
    const { userId } = auth();

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div>
                <Link href="/">
                Your Logo
                </Link>
            </div>
            <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
        </header>
    );
};