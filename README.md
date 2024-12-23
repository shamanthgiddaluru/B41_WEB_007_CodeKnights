# B41_WEB_007_CodeKnights
# Project Title
ShowTime

## Introduction
🎥 Showtime - Movie Ticket Booking Platform

Showtime is a feature-rich web application designed to simplify the process of booking movie tickets. By consolidating essential features and creating an intuitive interface, Showtime offers a seamless experience for movie enthusiasts.

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
https://youtu.be/-Li2j7sXnW4

## Video Walkthrough of the codebase
https://youtu.be/llQ9aowIfRc

## Features
1) User Authentication: Secure login and signup functionality for users.
2) Event Listings: Browse through available shows with details like timing, venue, and ticket price.
3) Real-Time Booking: Reserve tickets in real time with seat selection.
4) Responsive Design: Optimized for desktops, tablets, and smartphones.

## design decisions or assumptions
1) Movies data was fetched using OMDB API
2) Showtimes and seat availability are hardcoded into the application for demonstration purposes.
3) Local storage is used to save user preferences and booking details temporarily.

## Installation & Getting started
1.Open git bash.
2.Use (cd Desktop) command to change path to desktop.
3.Use git Clone https://github.com/shamanthgiddaluru/B41_WEB_007_CodeKnights command to clone the repository in Desktop.
4.Open B41_WEB_007_CodeKnights folder.
5.Open index.html file in your browser.

## Usage
Open the application in a browser.
Explore available shows from the homepage.
Log in or create an account to book tickets.
Select a show, choose seats, and click on the Book button.

## Credentials
User: Name
Email: user@showtime.com
Password: user123

## APIs Used
http://www.omdbapi.com/?i=tt3896198&apikey=417ea838 this API we use to get movie details

## API Endpoints
GET /417ea838/movies - Retrieve all available movies

## Technology Stack
Frontend: HTML, CSS, JavaScript
Database: Local Storage 
Deployment: Netlify (Frontend)
