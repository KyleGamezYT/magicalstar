# ShareX Dashboard Password Management

This guide explains how to update the password for your ShareX dashboard.

## 🔐 **Current Default Credentials**

- **Username:** `admin`
- **Password:** `sharex2024`

## 📝 **How to Update Password**

### **Method 1: Edit Configuration File (Recommended)**

1. **Open the configuration file:**
   ```
   src/config/auth.ts
   ```

2. **Update the password:**
   ```typescript
   export const AUTH_CONFIG = {
     username: 'admin',
     password: 'your-new-password', // Change this line
     // ... rest of config
   }
   ```

3. **Restart your server:**
   ```bash
   npm run dev
   ```

### **Method 2: Admin Panel (Web Interface)**

1. **Login to your dashboard** with current credentials
2. **Click the "Admin" button** in the top-right corner
3. **Use the password change form** to update your password
4. **Restart the server** for changes to take effect

### **Method 3: Environment Variables (Production)**

1. **Create a `.env.local` file** in your project root:
   ```
   SHAREX_USERNAME=admin
   SHAREX_PASSWORD=your-new-password
   ```

2. **Update the auth config** to use environment variables:
   ```typescript
   export const AUTH_CONFIG = {
     username: process.env.SHAREX_USERNAME || 'admin',
     password: process.env.SHAREX_PASSWORD || 'sharex2024',
     // ... rest of config
   }
   ```

## 🔒 **Security Best Practices**

### **Password Requirements:**
- Minimum 6 characters
- Use a mix of letters, numbers, and symbols
- Avoid common passwords
- Don't reuse passwords from other services

### **Recommended Password Examples:**
- `Mxt0r#2024!`
- `Sh@r3X$3cur3`
- `Kyl3#P@ssw0rd`

### **Security Tips:**
- ✅ Use strong, unique passwords
- ✅ Change password regularly
- ✅ Don't share credentials
- ✅ Use environment variables in production
- ❌ Don't use simple passwords like "password123"
- ❌ Don't commit passwords to version control

## 🛠️ **Advanced Configuration**

### **Add Multiple Users:**

Edit `src/config/auth.ts`:

```typescript
export const AUTH_CONFIG = {
  users: [
    {
      username: 'admin',
      password: 'admin-password',
      role: 'admin'
    },
    {
      username: 'user1',
      password: 'user-password',
      role: 'user'
    }
  ],
  // ... rest of config
}
```

### **Security Settings:**

```typescript
export const AUTH_CONFIG = {
  // ... credentials
  
  // Security settings
  maxLoginAttempts: 5,           // Lock account after 5 failed attempts
  lockoutDuration: 15 * 60 * 1000, // 15 minutes lockout
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 hour sessions
}
```

## 🚨 **Troubleshooting**

### **Common Issues:**

1. **Password not working after change:**
   - Restart the development server
   - Clear browser cache and cookies
   - Check for typos in the configuration

2. **Admin panel not accessible:**
   - Make sure you're logged in as admin
   - Check the URL: `/sharex-dashboard/admin`
   - Verify the admin route exists

3. **Environment variables not working:**
   - Restart the server after adding `.env.local`
   - Check file permissions
   - Verify variable names match

### **Reset to Default:**

If you need to reset to the default password:

1. **Edit `src/config/auth.ts`:**
   ```typescript
   password: 'sharex2024'
   ```

2. **Restart the server**

## 📁 **File Locations**

```
src/
├── config/
│   └── auth.ts              # Main password configuration
├── components/
│   └── LoginForm.tsx        # Login form component
└── app/
    └── sharex-dashboard/
        ├── page.tsx          # Main dashboard
        └── admin/
            └── page.tsx      # Admin settings page
```

## 🔄 **Update Process Summary**

1. **Choose your method** (config file, admin panel, or env vars)
2. **Update the password** in the chosen location
3. **Restart the server** (`npm run dev`)
4. **Test the new credentials** by logging in
5. **Update ShareX configuration** if needed

## 📞 **Support**

If you encounter issues:
1. Check the configuration file syntax
2. Verify the server is restarted
3. Clear browser cache
4. Check console for errors

---

**Remember:** Always use strong passwords and keep your credentials secure! 🔐 