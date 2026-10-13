import React, { useState } from 'react';
import { loginUser, registerUser } from '../services/api';
import { Activity, LogIn, UserPlus } from 'lucide-react';

const Auth = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', username: '', password: '' });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            if (isLogin) {
                const user = await loginUser({ username: formData.username, password: formData.password });
                onLogin(user);
            } else {
                const user = await registerUser(formData);
                onLogin(user);
            }
        } catch (err) {
            setError(err.response?.data || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="glass-panel w-full max-w-md p-8 relative overflow-hidden">
                <div className="text-center mb-8">
                    <Activity className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-2xl font-bold text-white">Expense Tracker Pro</h2>
                    <p className="text-slate-400 mt-2">
                        {isLogin ? 'Sign in to access your dashboard' : 'Create an account to start tracking'}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                        <div className="space-y-1">
                            <label className="text-sm text-slate-400 pl-1">Full Name</label>
                            <input
                                type="text"
                                required
                                className="input-field"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    )}
                    <div className="space-y-1">
                        <label className="text-sm text-slate-400 pl-1">Username</label>
                        <input
                            type="text"
                            required
                            className="input-field"
                            placeholder="johndoe"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm text-slate-400 pl-1">Password</label>
                        <input
                            type="password"
                            required
                            className="input-field"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary mt-4 flex justify-center items-center">
                        {loading ? 'Processing...' : isLogin ? <><LogIn size={18} className="mr-2"/> Sign In</> : <><UserPlus size={18} className="mr-2"/> Register</>}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-400 border-t border-slate-700/50 pt-6">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-primary hover:text-blue-400 font-medium transition-colors"
                    >
                        {isLogin ? 'Register here' : 'Sign in here'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
