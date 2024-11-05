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
                        <button onClick={logout}>Log Out</button>
                        <a href="/week-9/shopping-list">Continue to your Shopping List</a>
                    </div>
                ) : (
                    <button onClick={login}>Login with Github</button>
                )}
            </div>
        </main>
    );
}