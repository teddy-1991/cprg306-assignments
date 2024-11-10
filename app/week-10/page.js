"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const login = async () => {
        await gitHubSignIn();
    }
    
    const logout = async () => {
        await firebaseSignOut();
    }
    
    return (
        <main>
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}({user.email})! </p>
                        <p><button onClick={logout}>Log Out</button></p>
                        <p><a href="/week-10/shopping-list">Continue to your Shopping List</a></p>
                    </div>
                ) : (
                    <button onClick={login}>Login with Github</button>
                )}
            </div>
        </main>
    );
}