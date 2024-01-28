# PromptVerse.ai

PromptVerse.ai is a website designed to unleash the full potential of GPT by allowing users to create, share, and explore AI prompts. This project utilizes the power of Next.js for server-side rendering, MongoDB for data storage, and integrates Google authentication for a secure user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Preview](#preview)
- [Screenshots](#screenshots)

## Introduction

PromptVerse.ai enables users to contribute and discover AI prompts that enhance the capabilities of GPT. The website provides a seamless experience with features like user authentication, server-side rendering, and a community-driven prompt-sharing platform.

## Features

- **User Authentication**: Utilizes Google Auth and NextAuth for secure user authentication.
- **Server-Side Rendering (SSR)**: Leverages the full potential of Next.js SSR for optimal performance.
- **MongoDB Integration**: Stores and retrieves user posts using MongoDB.
- **Community-driven Prompts**: Users can create, share, and copy AI prompts for GPT.
- **User Pages**: Each user has their own page to showcase and manage their prompts.
- **Search Functionality**: Allows users to search for prompts using the search bar.

## Technologies

- [Next.js](https://nextjs.org/): Frontend framework with SSR capabilities.
- [MongoDB](https://www.mongodb.com/): Database for storing user posts.
- [NextAuth](https://next-auth.js.org/): Authentication library for Next.js.
- [Google Auth](https://developers.google.com/identity/): Used for secure Google authentication.

## Getting Started

To set up and run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/PromptVerse.ai.git

# Install dependencies
cd PromptVerse.ai
npm install

# Set up environment variables
# Create a .env.local file and add your configuration
# Example:
# NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
# MONGODB_URI=your-mongodb-uri
# ...

# Run the development server
npm run dev
```
