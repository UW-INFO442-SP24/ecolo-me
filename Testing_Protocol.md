<h1 align="center"> Testing Protocol</h1>

## Feature 1
**Find Challenges:** Our goal is to ensure that the user can access the challenges and that the "accept or decline" feature is functional.

In this acceptance test, we will ask stakeholders to follow the following steps:  

Navigate to Challenges
- Locate and click on the "Challenge Me" link in the navigation menu.
- Ensure that the "Challenge Me" page loads without errors and displays a series of cards containing challenges.

Card Display
- Verify that each card displays essential information, including the challenge title, brief description, and relevant images.

Accept or Decline a Challenge
- Click the "Accept" or "Decline" button on the card.
- Verify that the user is taken to the next challenge in the series without errors




## Feature 2
**Print Challenges:** Our goal is to verify that the application builds on the engagement established in the "Accept or Decline" quiz

In this acceptance test, we will ask stakeholders to follow the following steps: 

Generate Summary 
- After completing the quiz, verify that a list of the user's accepted and declined challenges is displayed.
- Ensure that the list includes all relevant details of the accepted challenges (e.g., titles, descriptions).

Print Accepted Challenges
- Locate and click on the "Print Accepted Challenges" button.
- Verify that clicking the button triggers the generation of a PDF file.

PDF Content Verification
- Ensure that the PDF correctly lists all accepted challenges with their relevant details, formatted clearly.



## Feature 3: 
**Search and Filter:** Our goal is to ensure that the search and filter capabilities are functional, user-friendly, and enhance the user experience by narrowing down the number of challenges shown on the home page

In this acceptance test, we will ask stakeholders to follow the following steps:

Use the Search Bar
- Locate the search bar on the challenges page.
- Enter a specific keyword related to environmental challenges (e.g., "recycling").
- Verify that the search results update dynamically to show only the cards that match the entered keyword
- Ensure that irrelevant cards are not shown in the search results.

Clear Search Bar
- Clear the text from the search bar.
- Verify that the cards reset to show all challenges.

Apply a Filter
- Select a specific topic from the filter options (e.g., "Waste Management").
- Verify that the cards update dynamically to show only those related to the selected topic

Clear Filter
- Deselect any applied filters.
- Verify that the cards reset to show all challenges.

Combine Search and Filter
- Enter a keyword in the search bar and then apply a filter.
- Verify that the cards update to match both the search keyword and the selected filter topic.



## Feature 4:
**More Resources:** Our goal is to ensure that the "More Resources" page is functional and provides users with curated educational links to deepen their understanding of sustainable practices.

In this acceptance test, we will ask stakeholders to follow the following steps:

Navigate to the More Resources Page
- Locate and click on the "More Resources" link in the navigation menu
- Ensure that the "More Resources" page loads without errors and displays the curated selection of links.

Verify Resource Links
- Check that the "More Resources" page displays a list of educational links related to sustainable practices.
- Ensure that each link includes a title, brief description, and URL.
- Click on each resource link.
- Ensure that each link opens the correct external website

Verify Video Link
- Verify that an embedded video player is present and clearly labeled.
- Click on the play button on the embedded video player.
- Ensure that the video starts playing without errors

## Potential Bugs:
- In the Find Challenges feature, one bug we have is that if the user keeps clicking "Accept" on a single given session on our site, it won't forget their past challenges. Instead, it will continue to generate new ones and add them to the user's accept pile.
- The workaround we have is to refresh the browser to "forget" those old accepted challenges and start with new ones
