Feature: filter Events By City
Scenario: User can select a city from the suggested list.
Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

Scenario: user can expand an event
Given a list of events are displayed
When user clicks an event 
Then an event is expanded to show more details

Scenario: user can collapse an event
Given an event is expanded to show more details
When user clicks on the event 
Then the event is collapsed