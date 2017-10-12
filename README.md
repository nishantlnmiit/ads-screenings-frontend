# Appirio Digital Studios Screenings - Front-end (React)

## Overview

Welcome! This repository will serve as a technical screening ahead of your interviews for Appirio Digital Studios. Please follow the instructions below.  This exercise should take 45-60 minutes to complete.

## Prerequisite

Please complete the [backend screening](https://github.com/appirio-digital/ads-screenings-backend) before starting this. We will tie both together in this particular exercise.

## Instructions

1. Fork this repo
1. In your newly forked repo, initialize a new React project using [create-react-app](https://github.com/facebookincubator/create-react-app)
1. Create a SPA with the specifications below using the routing library of your choice
1. Create a Pull Request back to this repo with a summary of your solution.  Highlight libraries chosen, techniques used, and future considerations.

## SPA Specifications

### /login

#### Design

* This screen should feature a form with two inputs: Email and Password
* This screen will have a button labelled "Login"
* Upon pressing Login: 
    * Call to the `/api/auth/login` route from the backend exercise to retrieve a JSON Web Token
    * Redirect the user to `/dashboard`

#### Other Implementation Details

* This should be a publicly accessible route

### /dashboard

#### Design

* This screen should simply have "Dashboard" centered
* This screen will have a "Logout" button on the upper right hand corner
* If a user is logged in, refreshing the page or navigating to it directly will allow a user to land on the page
* Upon pressing Logout
    * Redirect the user back to `/login`
* If a user is logged out, refreshing the page or navigating to it directly from another tab will redirect back to `/login`

#### Other Implementation Details

* This should be a protected route

## Bonus Points

* Unit Tests and a test runner of your choice included
* Application deployed to Heroku
* Use of Redux for state management
