Multi-part solution for managing agenda item registration when each item is in its own agenda section.  Certain will by default treat these as separate sections and allow registrants to select as many of these items as they want.  This script has three functions:

1. Prevents users from selecting more than one agenda item, as displayed on agenda page
2. Displays error message to users if they do not selecting any agenda items, and prevents them from progressing in form
3. Creates a button allowing users to unselect any radio buttons they checked (since each agenda item is its own section, certain will by default allow users to select as many as they want)
4. If an agenda item is waitlisted, the script allows users to select this item, AND still pick a non-waitlisted agenda item.  This way. registrants can add themselves to the waitlist for any sold out items, and are still forced to select an open agenda item

Item 4 is particularly useful, as this allows users to put themselves on the waitlist for as many items as they want, while still forcing them to pick an open item as a fallback.  You can then manage waitlists easier on the backend, and still have a fallback selection for each user should the waitlists not clear.

Notes:
- The agendaFix function is a CSS fix for alignment issues that occur when you have multiple agenda sections on each page (this makes everything left-aligned).  Inspect the CSS path of your agenda items and adjust the jQuery accordingly.  The arguments passed to the function are the first and last <tr> counts of your agenda items.
- The arrays "waitlistValues" and "regValues" will need to be updated with your forms specfic values.  Inspect each of your <input> elements and update array with the "value" attribute form each.  All waitlist values are the same as you regValues with the addition of "_waitlist" at the end.
