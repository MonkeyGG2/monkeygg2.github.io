## progress-knight
An incremental game developed by ihtasham42 and extended by Cameron Gott. https://camerongott.github.io/progress-knight/
With assistance from:
nathiral
theSpuu

Link to the base game: https://ihtasham42.github.io/progress-knight/

# dev-diary  

### 10/17/2021  
Goal for today:  squash that Shop bug!  

What's that shop bug? Someone in Discord said there's a known (to them) bug where if you have a shop item active,  
there's a case where you cannot deactivate that item if you're too poor.  

So where tf is the code that handles shop button clicks?  
  
Found it in updateItemRows(). Upon inspection, found the suspect line of code.  
And honestly, looks like an innocent logic error. Commenting out the line gives us the desired behavior  
of full control over item purchasing once initially unlocked.  

### 10/15/2021  
# Updates! October 3rd - October 15th, 2021  
-restyled tooltips for easier readability, reduced eye strain  
-dynamic tooltips for Town buildings  
-first-pass rebalancing of Grain Shed's exponential income growth. Now nerfed to a more reasonable level.  
  
### 10/15/2021
Digging into the "building count stuck at 0" bug.  
    -what is the evaluated typoeof count? Evaluated as type: number. Ok.  
    -verify increment within handleClick() is functioning as expected (this should be unit test lol)  
        -townContainer object is indeed getting the correct increments.

Conclusion: I was resetting the saved and working counts to 0, and then logging the values to check them. Oops.   
            Of course they're going to display as 0.  
-"bug" squashed. 
-wrapped log writes to only occur following the enableDebugging toggle variable

### 10/14/2021
-wrap Wooden Hut prototype tooltip cost in a dedicated span with ID format: coins-{buildingID} example: coins-woodenHut  
-updateTooltip(): search child elements of tooltip element to locate the new coin span - wanted to use childNode type function but was nudged back towards  
    element.querySelector by StackOverflow. I blame future performance issues on them (lol jk)  
-use built-in formatCoins function to display inner span coin value by formatCoins(newBuildingCost, coinSpan)  
-rework dedicated coin span to contain 4 empty span elements, as required by formatCoins function  
  
Prototype dynamic tooltip complete!  
Testing...  
Testing reveals updateTooltip is only getting called once. Which means I did a dumb.  
  
Cause: when adding the event listener for mouseenter, I invoked the updateTooltip function instead of passing the function object.  
Solution: Re-organize updateTooltip parameter to be the event object, grab the button ID from the event object attribute 'currentTarget'  
  
Step 1: rewrite updateTooltip signature to accept event parameter  
Step 2: inside updateTooltip, first use event attribute currentTarget.id to determine the base of the tooltip ID  
    (using same variable name for tooltip to reuse existing function code)  
Step 3: update addEventListener to reflect changes.  
  
Sparkle: this rework has the added benefit of making the updateTooltip work for all Town buttons.  
  
Note: currentTarget always refers to the HTML element that the event listener was attached to, per Mozilla docs. Use this to grab the base ID.  
  
Success!  
  
Next: I want the tooltip to update when a user buys a building. Currently, the tooltip doesn't update until the user's  
mouse leaves and then reenters the div.  
  
Solution: add a call to updateTooltip() at the end of the click handler function.  
Expected: tooltip will update automatically after a building purchase.  
  
Step 1: add eventObject parameter to handleClick function inside woodenHut object.  
Step 2: confirm the eventObject.currentTarget is the woodenHut building HTML button element  
Step 3: simply pass the eventObject as a parameter to the updateTooltip call at the bottom of handleClick  
    Note: the event objects are of different types, but the currentTarget will hopefully be unchanged.  

SUCCESS! LET'S GOOOO!  
  
Lastly, port the changes to woodenHut to the other town buildings.  
-[x] Farm  
-[x] Grain Shed  
Oops, forgot I hard-coded the building cost to check wooden hut.  
In building object, add an attribute for id (to aid in using the button id when looking up the corresponding building object).  
  
I love the fact that I can look up object properties using array-like syntax with the index / key being a template string.  
Fuck yeah. I just leveled up.  
  
Implement town destruction when embracing Evil.  
-add attribute: baseCost to townBuilding objects (this value will never be modified)  
-reset object values to their bases in o_townBuildingContainer  
-reset object values to their bases in gameData.townData, if present  
  
[x] Future TODO: decouple the base definitions in townBuildings.js from the current working set of town data
Bug: Town building counts aren't getting saved, but costOfNextBuilding is getting saved.

### 10/11/2021

Updated tooltip style for better visual separation and ease of reading.  
Wrote tooltips for town buildings.  
Began work on dynamic tooltip updates.  

### 10/5/2021  

Preparation for dynamic tootip generation.  

[x] - static tooltip for Wooden Hut

Added prototype tooltip to Wooden Hut button. Tooltip displays as intended, but the button
positioning gets thrown off. I suspect the CSS of the div that wraps the hut button is interfering with 
the formatting, so the next step is to lazily play with div positioning and see if there is an easy fix.

Wrapping the whole row of buttons fixes the button display issues, but results in undesired tooltip behavior.

Try targetting .tooltip class within the button CSS rules to apply the styles in the nested div. Maybe the CSS
isn't applied when the div wraps the button. 

I feel like w3-row is interfering with tooltip text display. 

Nah, ruled out w3-row as the culprit. I next tried removing all button classes except for tooltip.
And whaddya know, the tooltip appears. So one of the button classes is interfering somehow.
Lets re-add all the classes, then remove 'em one by one.

w3-button is confirmed to be the culprit. 

Fix: replace w3-button class with "button item-button" classes. Buttons look about the same and support
desired tooltip behavior.

### 10/4/2021  

Began preliminary work on dynamic tooltip generation for Town building buttons.
Reviewed codebase.

### 10/3/2021
Whew, long time no see!  

The last two months have seen a lot of life progress, but very little
Progress Knight progress (see what I did there). I've settled in to my first post-college job as a software engineer, jumped back into my pre-Covid physical training, and just generally got my shit back together. Now it's time to forge ahead!  

But enough about me, let's get to work on Progress Knight! 

It's always an interesting feeling coming back to an old project. Much of it feels familiar, but every code location
and variable name feels a little fuzzy. It takes longer to remember what a function does, and why it exists. Remembering where to find a certain code snippet takes more conscious effort. The frame of thought has been morphed, as we all morph throughout this journey called life. The closest relatable feeling I can compare it to is returning to an old sport.  
  
One part of you knows exactly how to kick the ball, swing the bat, or move your body just so. But your body just doesn't obey. Your mind is calibrated to your old sharp reflexes, your old expectations. But for the first couple of weeks, your body doesn't seem capable of following instructions. Oh, it will do what you tell it to do, but not exactly how you intend it. Maybe there's a shake in your arms, a dip in your wrists at just the wrong moment, a little twitch that throws off your game.  

So with that said, my intent for the next two weeks is to simply get back in the groove of Progress Knight.  
What does that look like?  

Re-reading the entire code base.  
Re-reading my dev diary.  
Making notes as I go through the code.  
Answering old questions I never sought clarity on (tooltip architecture, implementing event-based architecture, etc).   



### 9/7/2021
After a long job search and new-job chaos, the development hiatus is slowly ending.
Merged WIP Town features with v0.3, pushed to live branch.
Added a blacksmith item.

### 8/4/2021  
Today I'd like to save and load building progress. I'll add a simple state-tracking object  
to gameData that tracks each building's count and cost of next purchase. Then when the game calls  
the existing saveGameData function, this object will be included. To load building progress, I'll add a function  
to the loadGameData function that iterates through the saveData building object and sets the values in o_townBuildingsContainer  
to the saved values. This should work in theory. townBuildings.js is loaded into the page before main.js, so the building container  
is available to be written into. 

- [x] add state-tracking object to gameData (townData)   
- [x] add function to saveGameData that writes key-value pairs into townData object  
- [x] call save function within saveGameData and confirm state is saved to localStorage  
- [x] write loadTownState() function to set o_container building properties to their saved data equivalents  
- [x] call loadTownState() in loadGameData after gameData has been replaced with gameDataSave  

Save functionality is complete.  
TODO: dynamic tooltips for town building buttons  
### 8/3/2021  
  
Plan for the day:  
 1. Finish hooking up Farm xp and income bonuses. Income will fit into one of the existing income calculation  
 functions. XP will be a little trickier. Normally for a new skill or item, I'd  simply add an entry or two into  
 addMultipliers(). The problem with using that approach for Town buildings is that addMultipliers is a setup function  
 in that it only gets called one time, before the main game loop begins. If I used addMultipliers(), you'd only ever update  
 your Town bonuses every time you refreshed the page! But what we actually expect to happen is every time we buy a new building with  
 our hard earned cash we get some nice rewards immediately.  
   
 Solution: handle income and xp bonuses within each building's handleClick function. Use the global gameData object to store ~~a subset of  
 the town's state that we need for calculating bonuses and progress~~ town building object references. A nested object within gameData can  
 store ~~the name and count of each building~~ references to our building objects. Because we've been using gameData for most  
 everything, this will allow intuitive access and will take advantage of the already-built save mechanisms that are based off of the gameData object.  

 Code required:  
 - [x] wrap town building objects in containing object  
 - [x] refactor existing town object calls to reflect new access pattern using container object  
 - [x] gameData subobject to store building references  
 - [x] gameData field to store current income from town buildings (so we don't have to constantly recalculate unchanging values)  
 - [x] global function within townBuildings.js to calculate and return the amount of income from entire town  
 - [x] code to link income calculation to the main.js income calculation that applies gameSpeed to our income  
 - [x] code inside handleClick functions to update town income  
 - [ ] code inside handleClick functions to update or add xp multipliers (this needs to be broken down into smaller chunks)
 - [x] code to display town income per day in the Town tab

 Debug:  
 Running into an issue with the new gameData references. I'm wondering if when I set gameData.townData = o_townBuildingsContainer if Javascript makes  
 a copy of the object rather than a reference to the existing object in townBuildings.js. According to some posts on Stack Overflow, I should indeed have a  
 reference, not a copy. I'll revert to using the o_container for now until I can get some in-depth reading done on the subject.  

 gameData references reverted back to o_townBuildingsContainer refs.  
 Testing of updateRawTownIncome() function successfully completed.  
 Function getIncome() is responsible for adding up all raw income values from jobs and now buildings.  
 getIncome() is then called within increaseCoins() as:  

```
var coins = applySpeed(getIncome());
gameData.coins += coins;

```

TODO:  
-save town state between rebirths and page refreshes  
 
### 8/2/2021  
-wrote object prototype for town building data  
-include town building definitions file in index.html script loading section  
-wrote the setup function registerEventListeners  
-wrote the setup functin for binding object contexts  
-wrote the handleClick function for wooden huts  
-wrote updateText() sub-function updateBuildingBadges() to update badges for building counts  
-built the Farm object  

TODO
-write a function to push new xp multiplier to a nobility task on object purchase

Notes: calling a Function object's bind() method returns a new Function with the indicated context of this. I was having issues  
with function binding because I was failing to set the buliding object's function to the returned function. 

***** Recipe: adding a building *****  
-Step one: add object definition to townBuildings.js
-Step two: write the HTML in the Town tab
-Step three: add code to updateText() -> updateBuildingBadges()  
-Step four: registerEventListeners()  
-Step five: bindObjectFunctionContexts()  
-Step six: addMultipliers(), or other custom behavior implementation  

### 7/29/2021  
-prototype town button layout with inner badge to track building count  
-wrap town building buttons in responsive container to allow graceful reorganization for these wild mobile and 
    tablet players  
-wrap page layout in W3 Responsive class at some point because fixed pixel widths are so 2005 xD  

Rearchitecting my ideas around Town features. I have a little bit more experience and wisdom now.
I want to have a separation of Town state and Town behavior / control. So that means building definitions in this rework  
will no longer track any state properties like number-purchased, only things like base cost and base population per building.  
Then I'll build a separate town controller function / set of functions that get called on updates to make decisions and update town state.  

I'm debating whether or not the separation of money between personal and town accounts is a fun mechanic. It seems fun at first, but could easily become  
one more boring thing to micromanage across rebirths and actions. So I think if I do like this mechanic enough to keep it, it'll be essential to have some buttons or toggles  
to enable automatic management policies like "Always invest enough to prevent bankruptcy" or "Match town expenses" to prevent town bankruptcy and death / decay. I don't know.  
One huge downside of linking the finances of both is that I'd have to account for balance. Right now the player makes so much money as a Chairman that it's relatively easy to  
just throw money at a town. Some of this can be negated by the organic nature of a town's growth, but still. Would be quite the challenge to balance in a way that feels sane  
to the player and is still fun for all levels of progression. 

Part of me thinks it will be fun to build independent town behavior. AKA, you the player gets to make broad decisions but certain town factors like population, wealth, health,  
satisfaction, etc are somewhat randomized and dynamic. Players can guide and influence their towns, but towns are their own organic system just like in real life. This would also  
provide an intuitive upgrade mechanism where higher Nobility ranks grant increased control of a towns state through various skills and abilities and governing policies.  

### 7/27/2021  

#### Changelog:  
-add Projects button to main navigation bar  
-Placeholder Project tab content for testing purposes  
-Create first-iteration project base data and project category objects  
-Fixed a logic bug inside of the addMultipliers() function. If the current task was equal to Chairman, the general Magic bonuses were getting  
    skipped due to the if - elseif - elseif structure. Fixed this by pulling out the magic bonuses into an if-statement at the end of the code block.  
    Of course, all of the Chairman skills were balanced with this buggy progression in mind. Some playtesting is in order to rebalance anything, if necessary.  
    Alternatively, I did intend for those skills to make Chairman reachable, so it would make perfect sense to leave the faster progress in place and just make more content.  
 
7/12/2021  
It's time to move the story forward. It's time to learn how to be a Chairman so skilled, so wise, that that Chairman is worthy of level 1000.  

The Chairman tooltip alludes to the sole pursuit of immortality. Once a character reaches Chairman, their willpower and focus is dedicated towards discovering the mysteries of both magic and biology in order to find, if there is one, a way to enhance one's lifespan.  

The natural course forward is to learn new ways of thinking. Novel pursuits of knowledge that combine existing techniques in creative ways to peel back the layers of the unknown.  
Thus, the way forward to Chairman level 1000, and immortality, is through the Mind. The Mind controls and conducts both Magic and Knowledge, and synthesizes them into entirely new ways of thinking and being.  
 

The potential routes of experimentation are infinite. The questions, limitless. What should a budding Chairman focus on in order to enhance their knowledge of both life and magic?  
In medieval times, biology is limited by the tools of the time. Without microscopes and advanced chemistry, it's almost impossible to fully grasp the concept of cellular life and the underlying mechanisms governing DNA, metabolism, and degradation of biological structures. Magical Engineering is a worthy pursuit for a Chairman looking to use Magic to build the tools of future scientific inquiry.  

Up to this point, a Chairman's experience with Magic is almost entirely on the human scale. A budding apprentice learns to extend the life of a flower. A mage learns to incinerate man, horse, and siege engine. Master Wizards learn to shake the earth and obscure the vision of their human opponents with natural phenomena and magic alike. A Chairman must learn to shift their focus from the scale of humanity to both higher highs and lower lows. A Chairman seeking immortality must investigate the smallest structures of existence, must continue probing deeper and uncovering astounding knowledge and even more astounding questions. Thus Scales of Thought will enhance Mana Control and Chairman experience gain rates by a substantial rate. By probing nature on a deeper level, a Chairman gains unparalleled understanding which influences every magical action pursuit.  

Magical Biology seeks to combine the previous two skills into a direct XP boost to Chairman experience. Through Magical Biology, a Chairman seeks to leverage their new inventions and new frames of thought to directly probe, change, experiment and observe the effects of magic on various cellular structures to enhance their vitality and vigor. Magical Biology is the final step towards immortality.  

Upon reaching Chairman 1000, the Super Immortality skill unlocks. In addition, a new magic job will unlock titled Illustrious Chairman, reflecting your astounding power and wisdom.  
But when you accept this new honorific, you receive a note in the night:  
    "We have followed your progress with great interest. Many have walked this path, but few have used the amulet you now wear to its full potential. But you are not the first to make it this far. Strive on. We will contact you, when the time is right."  

Shifting from lore to code, how do we implement this? Simply add the three skills:  
-Magical Engineering  
-Scales Of Thought  
-Magical Biology  

And a new Job:  
-Illustrious Chairman


*** Changelog ***  
-added three new skills to Mind
-Added one new job to The Arcane Association  

7/2/2021  
Work progresses on Town features. But in the mean time, I added a few goodies to v0.3.  

-added new items to the Farmer job track  
-added new Small Manor property  
-fix for Shop table button heights  

Future:  
-add a new item category "Job aids" or some similar name
-add all job boost items to the new category
-change the updateRequiredRow logic to display these separately from the main generic line of items so that they are uncoupled

6/23/2021  
-Uncoupled Time Warping and Flow effects. Flow will no longer influence the display value of Time Warp under its skill description  
-Uncoupled game architecture element assumptions regarding game speed's influencers and display logic. Should enable easier time manipulation in the future  
    by having to modify fewer functions  
-Refactored getGameSpeed() function into two separate functions, getAllTimeMultipliers() and getGameSpeed().  
-Continued work on town and civilization features on local repo  

6/21/2021  
  
Bug squashing was today's game. The bug in question was making a little bug nest inside the Auto Learn feature, rendering it completely useless and non-functional.  
I'll talk a little bit about my thought process as I hunted down this bug, what I ultimately did to fix it and the tradeoffs considered and lessons learned.  

My initial thought was to look for low-hanging fruit. I skimmed the relevant code by using simple search and tracing the execution paths of all function calls  
that deal with auto learn. This is a little bit tedious and inefficient, but it has an added benefit of building code confidence as this is still a relatively  
new project to me. Specifically, I was looking for simple things like hard-coded loop end indices, hard-coded data structure sizes, anything that would break upon  
the addition of new content. Shoutout to ihtasham42 / badassic, because I didn't find a single obvious poo-poo error. It was time to break out....  

The Debugger!  
As soon as I crack open Chrome's devtools, I see a nice handy 1408 error messages. My first reaction was that I should've maybe started by opening devtools at the outset.  
Ah well, live and learn. So all 1408 error messages were a TypeError inside of one of the functions I had looked at above. The game logic has a section of code that decides which  
skill is next in line for auto learn. Inside of this function is a little snippet that checks whether the skill's requirements have been completed, because obviously we don't want  
our players auto-learning skills they have not unlocked yet.  

Here's the rub. Built into this logic is the core assumption that every skill will have a requirement. When ihtasham was coding this solo project, that was not an unreasonable assumption. But when I came in, forked the project and mashed together my incomplete understanding of ihtasham's architecture and my own ideas of what is reasonable to assume,  
bugs inevitably began to creep in.  

Luckily, once I leveraged my years CS education in finding my own dumb assumptions and killing them, the fix was a simple, yet ugly, two lines of code.  
What I have done today is add a simple logic check to the requirement property. Before requirement completion is checked, we simply check if the variable is null (which it is in the case of skills that have no unlock requirement). If it is null, simply set it to the lowest level requirement in the game, Concentration.  

Now you might be saying, but Cameron! You just inserted your own set of assumptions into the game's architecture! What if Concentration goes away, or gets changed? Your fix will break! Or why didn't you just add a base requirement to any skill that doesn't have one?  

Funnily enough, I agree with both of those qualms. One skill without a requirement is Novel Knowledge, and that is purely because having a requirement was causing me issues in the table rendering process. The game's architecture had a built-in assumption that the first skill in any category would both have a requirement, but unlock immediately. My workaround at the time was to simply not have a requirement for Novel Knowledge, allowing the table section to render nicely. So today's bug is loosely rooted in my previous deviation from some built-in assumptions that were undocumented and non-obvious to a relative newbie like myself.  

As for the assumptions regarding Concentration's continuing status in the game being a core assumption for this fix, my answer for today is: document. I have documented this as a "FRAGILE FIX" in both code comments inside the related source code, and now here in this dev diary. Is it perfect? Heck no. But if someone forks this project or takes over, there is a route to discover the issue with a few more breadcrumbs than I had to work with. For now, I am satisfied with this interim solution.  

6/20/2021  

Shop requirements are, in their current state, a little confusing. Today I'll begin the process of cleaning up and clarifying which item is being displayed in the required row, what  
all the requirements are, and clarifying item tooltips to describe specific effects.  

Changelog:  
-renamed Basic Hand Tools to become Basic Farm Tools  
-reduced first-level job item requirements from job level 20 to job level 10, so that they now unlock at the same time as the higher-tier job and present a choice for the player  
    of whether to promote or continue investing in the current career  
-added Farmer job items  
-removed Concentration requirement for Unusual Insight to fix the header row height issue  
  
6/17/2021  
-add Flow skill to Mind  

6/16/2021  
Initial github.io release.  

*** Changelog ***  
-added two new skills to aid Order progression and magic progression  
-added Trade Psychology skill  
-significantly reduced XP requirements for Order jobs  
-added sassy placeholder tooltips  
-introduced a lot of CSS bugs  

Adding new skills (come on, I shouldn't need to make myself notes by now, right?):  
Add base data and category (if needed)  
Add multipliers  
Add tooltips   
Add requirements (if needed)  
Add header row color  
Fix a million bugs I forgot to document in the midst of release hype  


6/14/2021  
******* Change log *******  
-Added The Order of Discovery
-Added Nobility  

** Adding a new life path **

Today I'll be adding a few new life paths. By life path, I mean a set of related jobs. We have seen Commoner, Military and TAA life paths. 

To add a life path, I'll first be creating the game data for the job categories. This data lives in a couple of different places
within main.js, so we'll need to keep track of all the changes we need to make. 

Step one: add new job data into const jobCategories object
Step two: add individual job data to the const jobBaseData object
Step three: add the unlock requirement, if any, to gameData.requirements.
Step four: add a header row color to const headerRowColors.

At the end of step one, we have a shiny new path named "The Order of Discovery". This will initially be a plain ole job path like we've seen, but it will grow into  
a core method of unlocking further items, skills, and esoteric knowledge to boost all aspects of life. 

All code added. Test time.

Test one results:
Upon page refresh inside of current game, successful render. Successful requirement behavior.
I forgot tooltips... :D
Other than tooltips and general balancing, everything is working well. Will probably focus balancing efforts on the related skills tree.  

Added nobility, tested changes, and now there are UI rendering errors. So what specifically is broken?  
Every item, skill, and job is unlocked. Every entity is displaying. I'm guessing the requirements got messed up when adding requirements for nobility, so let's take a look.  
Commented out nobility requirements, rerendered page, did not fix UI issue. 
Found a typo in jobBaseData for emperor of mankind. Fixed typo, saved file, refreshed game page. Numbers in UI elements are rendering correctly, but every entity is still displaying in defiance of requirements. Quick display element values are not displaying properly. Try hard reset. Did not fix. Game will not move forward, increment time, etc.  

New strategy: comment out all changes due to nobility. Re-enable changes incrementally to track down issue. 
All nobility code removed. Game function restored. 
Found another typo in requirements. Fixed typo. Uncommented nobility code. Refreshed game page.  
All function restored.  
F-ing typos, man. 


6/11/2021  

I'm satisfied with my mastery of adding items. While I do enjoy thinking up new tooltips and new story directions to explain new items, it's getting a bit tedious.  
A new feature is badly needed, and the empty navbar space is calling my name. Right now, there are two main features I'm fairly certain I want to add.

Society is the first feature. I've always imagined rebirths in this game preserving the forward flow of time. And while it's fun to fantasize about the personal growth of 
my individual character over the centuries and millenia, I've always wondered what's going on outside. How does society grow or decay with my actions? I always imagine the second 
rebirth as embracing evil in the form of destroying my entire nation. Upon rebirth, I'm starting in a refugee camp made up of scattered tents and ragged survivors of my previous destruction. So I want a feature that reflects the growth and decay of society, a feature that lets the player use their newfound power, skills, and ridiculous wealth to shape the world around them.  

War. Hard to read the military career tooltips without imagining massive battles and endless carnage. Another new tab will be devoted to fleshing out this mechanic. It'll provide an area to see your hard-earned Battle Tactics at work.  

******* Change log *******  
-Added Small Shop to Merchant item unlock sequence
-Rewrote Pack Horse tooltip to add detail and improve sentence flow  
-Added Weapon Outlet to Merchant item unlock sequence  
-
6/10/2021  

Requirements are important to learn for a few reasons. Requirements help pace the game's unlocks. Requirements help manage UI clutter by hiding
items, skills, and jobs until they are achievable. 

The Requirement base class has three member variables: elements, requirements, and boolean isCompleted.  
Requirement has two functions right now: constructor, and isCompleted().

The "elements" member variable is used to hold references to all HTML elements with a certain class. For example, when a requirement for unlocking The Arcane Association is
declared, the elements member variable contains the result of calling getElementsByClass("The Arcane Association"). These elements are used to update the UI, as the UI will change as requirements are met and thus new elements need to be added to the DOM, classes like "hiddenTask" need to be removed, etc.  

The subclasses of Requirement mainly differ in their use of the requirements member variable. See main.js gameData.requirements declaration for example usage.  

New additions:
Crappy Anvil (with TaskRequirement instead of CoinRequirement)  
Cheap Hand Tools now unlock at Farmer level 20  
Cheap Fishing Rod now unlocks at Fisherman level 20  
All other job items now unlock at job levels instead of savings level.  
Added Pack Horse to Merchant item sequence.  


6/8/2021  
The shop expansion initiative continues with today's new item: Miner's Lantern!  
Mining in a dark, dank cave is scary, dangerous, and slow. Lanterns provide useful light to guide a miner's search  
for precious metals, but beware of carrying a flame into any potential gas pockets!  

There is a weird programmatic behavior with item displays. An item only displays if it's description is a certain specific string.  
E.g. an item with description "Job xp" will display just fine, while a custom description like "Easier mining" for the Miner's Lantern  
will result in the item row not displaying in the shop. Probably fixable by going into the row display function and changing the logic  
that relies on the descriptions to decide where to render each row. I could add a separate parameter to designate an item as needing to render  
into the shop tab. Something to ponder for now.  

Otherwise, the Miner's Lantern is functional. 
6/7/2021

Added Cheap Fishing Rod to the shop. Will likely need further balance testing.   
Thought: create a chain of better job specific items linked to job level. Eg. Miner level 100 gets access to some sweet income-boosting gear.

6/4/2021  
Entry one:  

Adding an item today.  
Step one: add the item data to const itemBaseData.   
Step two: Add Rag Clothing to the Misc itemCategories object.  
Step three: Add placeholder tooltip text.  
Step four: add item requirement.  
Step five: add code to addMultipliers() to apply effect
Testing time! 
Holy shit, it worked on the first try. I feel somewhat...competent. (That's gonna bite me in the ass later.)  
Knew it. Item displays properly, but doesn't update the xp / day.
Fix: needed to add a line of code to the addMultipliers() function. Seems obvious in retrospect haha. Luckily it took four minutes to fix. Yay!
Also rearranged the display order of items for Rag Clothing to pop up before Book.  

First item added. First mod complete. Feels good mayne. 
PS. Also added a dev mode to the code with a single-variable trigger to influence a few skill modifiers and the game speed. 
Should help test long runs. 

Entry two:

After playing around with the added rag clothing, I feel like there is an impending balance issue. The more items I add, the more expense. But if items don't
directly affect income, the scaling of income is such that most items will be unaffordable in their current tier (eg beggar items can't all be purchased like a real beggar would
while they are climbing out of poverty.) There are a few ways to address this. First, there is already a built-in income modifying mechanic with skills. Just as Strength modifies military income, perhaps we could add a skill such as Performance or Acting to modify Beggar income. One potential difficulty of this is narrowing the income modifier to a single role instead of an entire job category, as Strength makes every military job pay more whereas we may want Acting/Performance to solely modify begging. Dunno. Could see it going either way from a lore / story perspective, as a blacksmith or merchant may earn more money from being more entertaining / persuasive. Maybe the skill could be named Persuasion instead to be lore friendly and minimize code restructuring.  

One hour later...  
Nevermind, I found a workaround to make items directly affect job income. Basic Hand Tools are the template to follow (just apply the effect as a task.incomeMultiplier in addMultipliers()).  

6/3/2021  
I want to flesh out the beggar job by adding interesting items and story content. Being a beggar is tough work,
and the more the player feels the hardship of begging the more they will appreciate the achievement of moving up in society.
My first step is to add an item. This is simple enough to not be daunting on Day Two of this project, but complex enough to touch most
major game systems and get me acquainted with the layout and architecture of the game logic. Story-wise, I'm playing around with the idea of 
item series. To progress as a beggar, one may strive for better clothing, better food, better physical appearance, etc. Perhaps the first few items could be
basic neccessities, like rag clothing, a source of drinking water, or other crucial things most idle players take for granted!   

Item One: Tattered Clothes
Where do items present themselves throughout the codebase?  
Around line 214 we see:
    <div class="tab" id="shop">
        <table id="itemTable" class="w3-table w3-bordered">
        </table>
    </div>
so using the HTML templates that live just above the itemTable, it looks like the table is built within main.js and injected 
into this containing div with id="shop". Kinda reminds me of React, but ihtasham did it himself. Sidenote, porting this to React would probably
be a good future task. Lots of render calls would be reduced as well. Anyways, back to items...  
I see where items will end up on the HTML side of things, so now it's time to dive into classes.js and take a look at the class hierarchy.  
Item is a single-level class. Item objects have three basic methods: getEffect, getEffectDescription, and getExpense. getEffect  
refers to the item's numerical power level (1, 1.5, 2.221, etc). getEffectDescription builds a string to display the effect data for the UI.  
Lastly, getExpense calculates the item cost based off of global expense modifiers, as changed by Bargaining and Evil skills. Simple enough.  
Now let's take a look at how items are used in main.js  

Item base stats are contained in the constant object itemBaseData defined near the top of main.js  
Items are defined as a key:value pair string:{object} where object holds item properties name, expense, and effect.  
A little further down we have another constant object itemCategories. This splits all items into two categories, living spaces and actual items (defined as "Properties" and "Misc" respectively. Using "Properties" as a name confused me for a second, and "misc" seems like a subcategory of item rather than a good descriptor of all items. Will need to think of clearer names down the road.). I'm assuming this is used for the different treatment of items further down the file. Wonder why ihtasham didn't split the concepts into their own classes and extend a base class with much of the core functionality. Might be something to look into if I'm hunting for things to refactor. Anyways, back to items...  

Item tooltips are also stored in a const object named tooltips.  
addMultipliers is used to apply all item and job multipliers.
function createRow() displays all of Jobs, Skills, and Items by building their row content. This will be important.  
function updateItemRows()  
function createItemData() seems to assume if an item contains a "happiness" property, it must be a "Property" like house. This means any item I want to add that'll affect  
happiness will likely require a rewrite of this function.   



6/2/2021  
Cloned repo, configured Git, got a copy of the game running on my local machine. Woo!
One hour later...
Doh! For some reason, the sidebar's progress bars are not displaying.
I have made zero code changes so far. Time to investigate...
Using Chrome's Devtools, I see that the span containing the progress bars (quickTaskDisplay) has a class of "hidden".
Oh weird. So I went to ihtasham42's github.io version, and the quick dislay is indeed intended to be hidden. Literally never noticed this behavior before.
Not sure how I feel about this. May modify in later versions to display immediately, as it's pretty convenient. Design-wise, idle games always benefit from
visible progress bars on startup. (this may be a rare opinion. Who knows.)
>>>>>>> v0.3
