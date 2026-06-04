import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import "../auth.form.scss"

function Register() {
    const { loading, handleRegister } = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (password.length < 6) {
            setError("Password must be at least 6 characters.")
            return
        }

        setSubmitting(true)
        try {
            const success = await handleRegister({ username, email, password })
            if (success) {
                navigate("/")
            } else {
                setError("Registration failed. The username or email may already be taken.")
            }
        } catch (err) {
            setError(err?.response?.data?.message || "Something went wrong. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    if (loading) {
        return (
            <main>
                <div className="form-container">
                    <h2>Loading...</h2>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className="form-container">
                <h2>Create Account</h2>

                {error && (
                    <div className="form-error">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            required
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={submitting}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={submitting}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Create a password (min 6 chars)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={submitting}
                        />
                    </div>
                    <button
                        className="button primary-button"
                        type="submit"
                        disabled={submitting}
                        style={{ opacity: submitting ? 0.7 : 1, marginTop: '0.25rem' }}
                    >
                        {submitting ? "Creating account..." : "Register"}
                    </button>
                </form>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </main>
    )
}

export default Register
