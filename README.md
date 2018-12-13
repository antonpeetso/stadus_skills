# Stadus Skills

I wanted to release this since I don't play FiveM anymore. 
This is quite done but needs to be better implemented.
Since this project is discontinued I won't provide any support. 

## Features:
* MySQL-database for storing the skills data
* Using natives for applying stamina, strength, driving and shooting(not implemented)
* NUI-menu

## Installation
Remember that all of the functions that is "TriggerServerEvent" is on client-side.
1. Add "TriggerServerEvent('stadus_skills:addStamina', GetPlayerServerId(PlayerId()), (math.random() + 0))" to esx_gym where you want people to gain Stamina.
2. Add "TriggerServerEvent('stadus_skills:addStrength', GetPlayerServerId(PlayerId()), (math.random() + 0))" to esx_gym where you want people to gain Strength.
3. Add "TriggerServerEvent('stadus_skills:addFishing', GetPlayerServerId(PlayerId()), (math.random() + 0))" to your favorite fishing-mod. (I had my own fishing system so some tweaking might be required)
4. Add "TriggerServerEvent('stadus_skills:addDrugs', GetPlayerServerId(PlayerId()), (math.random() + 0))" to esx_drugs where you want people to gain drug-skill.

## How to use
When driving, after a while you will gain driving-skill.
Press button "Page Down" to open the menu. If wanted you can change the button by going into client.lua and change the variable: "openKey".

## Bugs
* Sometimes the menu won't open up?

