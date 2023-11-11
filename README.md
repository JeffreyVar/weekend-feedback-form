# Feedback Loop Challenge

## Description

_Duration: 1 Week Sprint_

This application is designed to collect feedback from students, similar to the style and guidelines employed by Prime Digital Academy. Once collected, the results are then displayed in an organized format for admins to view and manage.

## Installation

1. Using Postico, create a database called 'prime_feedback'
2. Follow the queries provided in the data.sql file to create the necessary tables for the application to run
3. Open an IDE of your choice and run an `npm install` in the terminal
4. Run `npm install @mui/material@5 @emotion/react @emotion/styled` 
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab 

## Wireframes

Entering Feedback

![Usage Part 1](/wireframes/part_1.gif)

Edit Feature

![Usage Part 2](/wireframes/part_2.gif)

Admin View

![Usage Part 3](/wireframes/part_3.gif)

## Usage

1. On page load, user is greeted with a prompt asking them to submit a rating value associated with how they are feeling. User is promted to enter a valid value if they have not done so 
2. After a valid input value is entered, user selects the 'NEXT' button
3. User is then navigated to the next prompts, support and understanding, where they follow the sames steps outlined above
4. User is prompted to enter comments if they choose to do so
5. User is then navigated to a review page where they have the opportunity to review and make edits to any of the feedback items they choose
6. If choosing to edit, user selects the 'EDIT' displayed next to the specific feedback item they'd like to edit 
7. User is then a navigated to the associated feedback prompt, where they can enter a new value/comment
8. User then selects 'NEXT" and is navigated back to the summary page
9. If satified with feedback given, user then selects 'SUBMIT' and is navigated to a page confirming a successful submission
10. On the success page, user can select 'LEAVE NEW FEEDBACK', which navigates them to the beginning of the feedback prompts to begin a new submission
11. Admins are able to review and delete feedback submissions on the `/admin` page

### Built With

- HTML 5
- CSS 3
- JavaScript
- Express
- Axios
- Node.js
- React
- Redux
- Material UI
- PostgreSQL

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) and teaching assistant Marc McCarthy, who provided the feedback and coaching that made this project possible.

## Support

If you have suggestions or issues, please email me at [jeffvarughese@gmail.com](google.com).
