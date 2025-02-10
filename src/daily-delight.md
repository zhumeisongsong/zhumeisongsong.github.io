---
layout: doc
---

# Daily Delight

## Product Vision

"Daily Delight" is a web service designed to inspire users to accomplish one small action each day that brings them happiness and well-being.
This product aims to cultivate mindfulness, build positive habits, and enhance users' overall quality of life through small, consistent acts of self-care.

## Key Features

- Daily Prompt: Each day, users receive a small self-care prompt (e.g., "take a 5-minute walk," "enjoy a warm beverage," or "write down one thing you're grateful for").
- Progress Tracker: A tracker shows completed actions, celebrating users’ consistency and rewarding streaks.
- Customization: Users can set personal preferences to receive tailored prompts that align with their interests (physical, mental, social, etc.).
- Sharing & Community: Optional sharing of completed tasks with a community feed, allowing users to inspire one another.
- Reminders and Notifications: Gentle reminders ensure that users don’t miss their daily self-care action.
- Insights & Analytics: Users can reflect on their self-care journey over time, with data showing which types of actions have positively impacted their well-being.

## User Journey

- User could select some label as the topic to generate self-care calendar for the current month (no login required)
- User could see the generated self-care calendar for the current month (no login required)
- User could see today's self-care action (no login required)
- User could mark today's self-care action as completed (no login required)
- User could see Encouragement words after finished a self-care action (no login required)
- User could see how many days they have completed the self-care action (no login required)
- User could see action histories of own (no login required)
- User could see happiness meter after a month is over (no login required)
- User could see suggestion and challenge after a month is over (no login required)
- User could use their familiar language to interact with the system (no login required)
- If user want to share and get inspired by others, they need to sign up and login

## Roadmap

- daily prompt delivery (MVP)
- progress tracking (MVP)
- basic analytics (MVP)
- insights & analytics
- reminders & notifications
- sign up / login / logout
- gamification experience
- sharing & community
- profile setup

## MVP Features

To create a Minimum Viable Product (MVP) for "Daily Delight App" we will focus on the core functionalities that deliver value to the users while keeping development simple and efficient.

Daily Prompt Delivery

- Personalized Prompts: Tailor the daily prompt based on the user’s preferences (physical, mental, social self-care).
- Daily Action Prompt: Provide users with a simple daily self-care prompt (e.g., "Take a 5-minute walk").

Progress Tracking

- Mark as Completed: Users can mark the daily prompt as completed once they finish the task.
- Streak Tracking: Display the number of consecutive days the user has completed the prompt.
- Completion History: View a simple list of past completed tasks: check by month.

Basic Analytics

- Happiness Meter
- Suggestion and Challenge

## Core Domains and Bounded Contexts

### Prompt Service

Generates and delivers personalized self-care prompts each day.

Context: Responsible for creating and managing the library of prompts and sending personalized actions to users.

### User Profile Service

Manages user data, preferences, and customization settings.

Context: Handles user-specific preferences to personalize the self-care experience.

### Progress Tracking Service

Tracks users' daily activities, achievements, and streaks.

Context: Logs completed actions, calculates streaks, and shares progress with the Insights service.

### Community & Sharing Service

Enables users to share their completed actions and see others’ activities.

Context: Manages the community feed, allowing users to interact with one another’s posts for inspiration.

### Insights & Analytics Service

Provides analytics based on user activity, showing trends and progress over time.

Context: Aggregates user actions, identifies patterns, and creates reports for user reflection.

## Tech Stack

- Architecture: Clean Architecture / GraphQL Federation
- Backend: AI SDK/ nestjs
- Frontend: React
- Database: MongoDB
- Messaging: RabbitMQ for event-driven messaging between services.

<!-- ## auth flow
- User submit email and password to login
- get jwt token after login success
- use jwt token to protect resources
- parse jwt token to get user id
- use user id to get user profile
- show error message if login failed
- if no user, ask user to sign up -->
