<<<<<<< HEAD
=======

>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
// ShareX Dashboard Authentication Configuration
// Update these values to change your login credentials

export const AUTH_CONFIG = {
  // Default admin credentials
  username: 'admin',
  password: 'm0txrkxle', // Change this to your desired password
  
  // Additional users (optional)
  users: [
    {
      username: 'admin',
      password: 'sharex2024',
      role: 'admin'
    },
    // Add more users here if needed
    // {
    //   username: 'user2',
    //   password: 'password123',
    //   role: 'user'
    // }
  ],

  // Security settings
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes in milliseconds
  
  // Session settings
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
}

// Helper function to validate credentials
export function validateCredentials(username: string, password: string): boolean {
  const user = AUTH_CONFIG.users.find(
    u => u.username === username && u.password === password
  )
  return !!user
}

// Helper function to get user role
export function getUserRole(username: string): string | null {
  const user = AUTH_CONFIG.users.find(u => u.username === username)
  return user?.role || null
<<<<<<< HEAD
} 
=======
}
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
