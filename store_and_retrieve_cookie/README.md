<strong>Description</strong><br />Functions to store data in a cookie, to pull back out and auto-populate fields on subsequent pages.

<strong>Problem</strong><br />Client requested a custom page that required registrant to provide the first name, last name, and email of four people who would be attending an awards dinner.  On the next page, registrant had to fill in the same info for five people that would be invited to the main event.  Client wanted the info of the dinner attendees to auto-populate the first four spots on the main event page.  In addition, client wanted the registrant's information to auto-populate the first dinner and main event spot on both pages.

<strong>First file - userinfo-store.js<br /></strong>
-Takes first name, last name, and email address of registrant (from Registrant Details page) and stores in cookie

<strong>Second file - dinnerattendees-store.js</strong><br />
-Creates object for all entered attendee data<br />
-MUST UPDATE - questionsArray - update with IDs of your "input" fields<br />
-Pulls registrant data from cookie set on first page<br />
-Pulls all populated information into new array; concatenates array, and stores all data in a cookie<br />

<strong>Third file - eventattendees-autopopulate.js</strong><br />
-Pulls all data from cookie stored on last page<br />
-Auto-populates main event attendees info from last page<br />

<strong>TESTING PULL REQUESTS</strong>
