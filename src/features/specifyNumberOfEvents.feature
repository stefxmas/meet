Feature: specify nuber of events
Scenario: 33 events are showed by default 
Given user open the app 
When user doesnt scpacity a number 
Then 33 events are showed by default

Scenario: user can change number of events
Given user open the app 
When user scpacity a number of event 
Then specified nuber of events are showed 