"use client";

export default function LoginPage() {
    async function handleLogin(e) {
        e.preventDefault();

        await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: "test@test.com",
                password: "123456",
            }),
        });
    }

    return (
        <form onSubmit={handleLogin}>
            <button type="submit">Login</button>
        </form>
    );
}
