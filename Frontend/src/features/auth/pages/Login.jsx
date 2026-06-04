import { Link, useNavigate } from 'react-router-dom'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'

function Login() {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSubmitting(true)
        try {
            const success = await handleLogin({ email, password })
            if (success) {
                navigate("/")
            } else {
                setError("Invalid email or password. Please try again.")
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
                <h2>Welcome Back</h2>

                {error && (
                    <div className="form-error">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            disabled={submitting}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            disabled={submitting}
                        />
                    </div>
                    <button
                        className="button primary-button"
                        type="submit"
                        disabled={submitting}
                        style={{ opacity: submitting ? 0.7 : 1, marginTop: '0.25rem' }}
                    >
                        {submitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default Login
