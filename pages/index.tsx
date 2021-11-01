import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    if (session) return (
        <div className="flex flex-col items-start">
            {JSON.stringify(session.user)}
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );

    return (
        <div>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    );
}
