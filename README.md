Secure File Sharing System
This is a secure file-sharing system built with Node.js, SQLite, and Express.js. The system supports two types of users: Ops Users and Client Users, each with specific permissions for file upload, download, and management. The application ensures robust security, including encrypted URLs for secure file access.

Features
Ops User
Login: Authenticate and access the platform.
Upload Files: Upload files of type .pptx, .docx, and .xlsx.
Client User
Sign Up: Register with the platform and receive an encrypted URL for secure access.
Email Verification: Verify email via a confirmation link.
Login: Authenticate and access features.
List Files: View all uploaded files.
Download Files: Securely download files using an encrypted link (valid for authorized users only).
Security
Encrypted URLs ensure secure access to files.
File access is restricted to Client Users only.
Role-based authorization for Ops and Client users.
Tech Stack
Backend: Node.js, Express.js
Database: SQLite
File Handling: Multer
Security: JWT for authentication, encrypted download links
