import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "calcvoyager_user";

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

// Minimal "user DB" stored in localStorage
const USERS_KEY = "calcvoyager_users";
function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch {}
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);

  const signup = useCallback((username, password) => {
    const users = loadUsers();
    if (users[username]) return { error: "Username already taken." };
    const newUser = { username, createdAt: Date.now() };
    users[username] = { password, profile: newUser };
    saveUsers(users);
    setUser(newUser);
    saveUser(newUser);
    return { ok: true };
  }, []);

  const login = useCallback((username, password) => {
    const users = loadUsers();
    const record = users[username];
    if (!record) return { error: "User not found." };
    if (record.password !== password) return { error: "Wrong password." };
    setUser(record.profile);
    saveUser(record.profile);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    saveUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
