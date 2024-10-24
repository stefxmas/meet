Feature: specify number of events 
Scenario: 33 events are showed by default 
Given user open the app 
When user doesnt specify a number  
Then 33 events are shown by default 

Scenario: The user can change the number of events 
Given that the user opens the app  
When the user specifies a number of events  
Then specified number of events are shown 