<h1 align="center"> Eco-Challenge: Empowering Sustainable Lifestyles</h1>

## Group Members
- Nawal Dhabar
- Aanyk Mann
- Alexis Nguyen
- Michelle Odnert
- Jorey Papritz

## Mission/Summary
The current patterns of consumption and production are unsustainable, leading to environmental degradation, resource depletion, and social inequalities. Overconsumption, waste generation, and inefficient resource use contribute to this problem. Lack of awareness, convenience, and societal norms also perpetuate unsustainable practices. Additionally, the pandemic only worsened the issues with our consumption levels by doubling the amount of fossil fuel subsidies between 2020 and 2021 (Fossil Fuels Consumption Subsidies 2022 – Analysis - IEA, 2023).

According to the UN, governments need to implement and enforce policies and regulations that include measures such as setting targets for reducing waste, promoting economic practices, and supporting sustainable procurement policies. (Goal 12 | Department of Economic and Social Affairs, 2023) Individuals can choose products with lower environmental impacts and reduce the carbon footprint of day-to-day activities. To promote a more sustainable lifestyle, we propose to have a curated series of challenges on our website to encourage individuals to adopt eco-friendly habits and make conscious choices towards sustainable consumption.

For this project, we plan to address the lack of awareness and inconvenience as primary causes of unsustainable consumption and production patterns. Many individuals are unaware of the environmental impact of their daily choices, and even when they are aware, they may find it inconvenient or challenging to adopt more sustainable habits due to various barriers. 

## Problem Statement
How might we encourage college students to adopt sustainable consumption and production patterns through simplified, manageable, and educational challenges?

## Features List
- Quiz page on general environmental and sustainability knowledge
- Dataset of challenges related to environmental goals (action items) 
- Ability to deny or accept a challenge

## Technologies used
- React (JSX syntax)
- Firebase for hosting
- Figma for prototyping
- Github to store our code

## User Personas
Jacob (he/him):

![Jacob](/public/img/Persona1.jpg)

Background: Jacob is an 18 year old student majoring in Environmental Studies at the University of Washington.  

Occupation: Student  

Goals:
- Passionate about sustainability
- Wants to make a positive impact on the world by reducing his carbon footprint
- Wants to learn about practical ways to adopt eco-friendly habits.  
Needs: 
- Reliable resources on sustainable living 
- A structured approach to incorporating sustainablity habits into his lifestyle  
Pain Points: 
- Limited resources as a student
- Lack of guidance for how to act towards his goals



Emilio (he/him):

![Emilio](/public/img/Persona2.jpg)

Background: Emilio is a 23 year old new grad from Lousiana moving to Seattle for a job at Amazon. He grew up in the South, where he saw firsthand the effects industrial practices had on the environment.  

Occupation: Amazon Employee  

Goals: 
- Wants to explore sustainability and expand his knowledge on the topic  
Needs: 
- Simple, actionable steps to fit into his busy schedule
- Support to navigate the complexity of sustainability and overcome barriers to change
- Access to trustworhy knowledge and resources  
Pain Points:
- Lack of knowledge and guidance on how to begin educating himself on sustainability
- Lack of time
- Lack of confidence


## Testing Protocol
| Testing Protocol | Feature 1 | Feature 2 |

Feature 1: Responsive Design on Mobile Devices: Our goal is for the site to be equally responsive on two screen sizes: desktop and mobile.

In this acceptance test, we will ask stakeholders or our Quality Assurance team (in this case just ourselves or with people affiliated with 442) to follow the following steps:  

Initial Load on Mobile Device:
- Open the website on a mobile device.
- Verify that the site loads without any layout issues or undue delay.  

Navbar Responsiveness:
- Check that the navbar is visible and functional upon loading the site on a mobile device.
- Ensure that the navbar converts into a hamburger icon on smaller screens.
- Click the hamburger icon to verify that it expands to show menu options correctly and is easily navigable.  

Content and Card Layout:
- Scroll through the home page to view the flexbox cards listing environmental challenges.
- Check that the cards restack vertically on smaller screens and maintain appropriate margins and padding.
- Ensure texts, images, and buttons within the cards are aligned and readable without the need to zoom.    

Interactive Elements:
- Test interactive elements like buttons and links to ensure they are easily clickable on a mobile device.
Confirm that elements like forms and search bars are accessible and functional.  

Cross-Device and Cross-Browser Testing:
- Repeat the above tests on various devices (tablets and desktops) and in different orientations (portrait and landscape).
- Open the website on different browsers to ensure consistent behavior and appearance.  


Feature 2: Homepage card flip-ability

Protocol:  

1. Load Homepage:  
- Navigate to the homepage of the ecolo-me website.
- Ensure that the homepage loads without errors and that challenge cards are displayed as expected.  

2. Initial Card State:
- Verify that each card is initially displaying the correct content (e.g., a summary of the challenge and an image).  

3. Interact with Card:
- Click on a challenge card.
- Observe the flip animation. Check that it is smooth and renders correctly without any visual glitches.
- Verify that the card reveals our resources or information on its reverse side  

4. Content Verification:
- Ensure that the content on the reverse side of the card is correct and matches our dataset.  

5. Reverse the Flip:
- Click the card again.
- Verify that the card returns to its original content and orientation.  

6. Repeatability:  
- Repeat steps 3 to 5 for multiple cards to ensure consistent behavior across different cards and with various filters in place.  




