# B41_WEB_007_CodeKnights
# Project Title
-ShowTime

## Introduction
-ShowTime is a web application designed  to simplify the process of booking movie tickets.It aims to solve the problem of fragmented information and booking experiences by bringing everything into one place.

## Project Type
Frontend

## Deplolyed App
Frontend: https://showtime-moviebookingapp.netlify.app/

## Directory Structure
moviebookingapp/
├── backend/
│   ├── MoviesApi/
├── frontend/
│   ├── src/
│       ├── components/
|       |   ├──facebook.png/
|       |   ├──instagram.png/
|       |   ├──twitter.png/
|       |   ├──mastercard.png/
|       |   ├──paypal.png/
|       |   ├──visa.png/
|       |   ├──showtime.png/
|       |   
│       ├── pages/
│           ├──index.html/
|           ├──login.html/
|           ├──movie-details.html/
|           ├──moviespage.html/
|           ├──seatingpage.html/
├── README.md
├── public/

## Video Walkthrough of the project
-https://youtu.be/-Li2j7sXnW4

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
-User Authentication: Secure login and signup functionality for users.
-Event Listings: Browse through available shows with details like timing, venue, and ticket price.
-Real-Time Booking: Reserve tickets in real time with seat selection.
-Responsive Design: Optimized for desktops, tablets, and smartphones.

## design decisions or assumptions
-Movies, showtimes, and seat availability are hardcoded into the application for demonstration purposes.
-Local storage is used to save user preferences and booking details temporarily.
-No backend integration is implemented.

## Installation & Getting started
-1.Open git bash.
-2.Use (cd Desktop) command to change path to desktop.
-3.Use git Clone https://github.com/shamanthgiddaluru/B41_WEB_007_CodeKnights command to clone the repository in Desktop.
-4.Open B41_WEB_007_CodeKnights folder.
-5.Open index.html file into your browser.

## Usage
-Open the application in a browser.
-Explore available shows from the homepage.
-Log in or create an account to book tickets.
-Select a show, choose seats, and proceed with payment.

## Credentials
-User: Name
-Email: user@showtime.com
-Password: user123

## APIs Used
-http://www.omdbapi.com/?i=tt3896198&apikey=417ea838 this API we use to get movie details

## API Endpoints
GET /417ea838/movies - Retrieve all available movies

## Technology Stack
Frontend: HTML, CSS, Jave-Script
Database: Local Storage 
Deployment: Netlfy (Frontend)