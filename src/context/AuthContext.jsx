import { createContext, useContext, useState, useCallback } from 'react';
import {
  getCurrentUser,
  setCurrentUser,
  getUsers,
  setUsers
} from '../utils/storage.js';

// NOTE: Frontend demo authentication only.
// Accounts live in localStorage — this is NOT production security.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getCurrentUser());

  const signup = useCallback((name, email, password) => {
    const users = getUsers();
    const cleanEmail = email.trim().toLowerCase();
    if (!name.trim()) return { ok: false, error: 'Please enter your name.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
      return { ok: false, error: 'Please enter a valid email.' };
    if (password.length < 4)
      return { ok: false, error: 'Password must be at least 4 characters.' };
    if (users.some((u) => u.email === cleanEmail))
      return { ok: false, error: 'An account with this email already exists. Please login.' };
    const account = { name: name.trim(), email: cleanEmail, password, joined: new Date().toISOString() };
    setUsers([...users, account]);
    const publicUser = { name: account.name, email: account.email, joined: account.joined };
    setCurrentUser(publicUser);
    setUser(publicUser);
    return { ok: true, user: publicUser };
  }, []);

  const login = useCallback((email, password) => {
    const users = getUsers();
    const cleanEmail = email.trim().toLowerCase();
    const account = users.find((u) => u.email === cleanEmail);
    if (!account) return { ok: false, error: 'No account found with this email. Please sign up.' };
    if (account.password !== password)
      return { ok: false, error: 'Incorrect password. Please try again.' };
    const publicUser = { name: account.name, email: account.email, joined: account.joined };
    setCurrentUser(publicUser);
    setUser(publicUser);
    return { ok: true, user: publicUser };
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthed: !!user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
