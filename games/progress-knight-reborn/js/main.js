var gameData = {
    taskData: {},
    itemData: {},
    townData: {},
    rawTownIncome: 0,
    coins: 0,
    days: 365 * 14,
    evil: 0,
    paused: false,
    timeWarpingEnabled: true,

    rebirthOneCount: 0,
    rebirthTwoCount: 0,

    currentJob: null,
    currentSkill: null,
    currentProperty: null,
    currentMisc: null,
}

//tempData is used during initial game setup. 
var tempData = {}

//used for Auto Learn skill switching logic
var skillWithLowestMaxXp = null

const autoPromoteElement = document.getElementById("autoPromote")
const autoLearnElement = document.getElementById("autoLearn")

const updateSpeed = 20

const baseLifespan = 365 * 70

//Turn on devmode:  1
//Turn off devmode: 0
var devModeFastProgress = 0;
// ******* DEV MODE SPEED INCREASES ******* //
//original base game speed: 4
var baseGameSpeed = 4;
var baseEffect = 0.01;
if(devModeFastProgress == 1) {
    baseGameSpeed = 32;
    baseEffect = 100;
}

const enableVerboseLogging = 0;

const permanentUnlocks = ["Scheduling", "Shop", "Automation", "Quick task display"]

const jobBaseData = {
    "Beggar": {name: "Beggar", maxXp: 50, income: 5},
    "Farmer": {name: "Farmer", maxXp: 100, income: 9},
    "Fisherman": {name: "Fisherman", maxXp: 200, income: 15},
    "Miner": {name: "Miner", maxXp: 400, income: 40},
    "Blacksmith": {name: "Blacksmith", maxXp: 800, income: 80},
    "Merchant": {name: "Merchant", maxXp: 1600, income: 150},

    "Squire": {name: "Squire", maxXp: 100, income: 5},
    "Footman": {name: "Footman", maxXp: 1000, income: 50},
    "Veteran footman": {name: "Veteran footman", maxXp: 10000, income: 120},
    "Knight": {name: "Knight", maxXp: 100000, income: 300},
    "Veteran knight": {name: "Veteran knight", maxXp: 1000000, income: 1000},
    "Elite knight": {name: "Elite knight", maxXp: 7500000, income: 3000},
    "Holy knight": {name: "Holy knight", maxXp: 40000000, income: 15000},
    "Legendary knight": {name: "Legendary knight", maxXp: 150000000, income: 50000},

    "Student": {name: "Student", maxXp: 100000, income: 100},
    "Apprentice mage": {name: "Apprentice mage", maxXp: 1000000, income: 1000},
    "Mage": {name: "Mage", maxXp: 10000000, income: 7500},
    "Wizard": {name: "Wizard", maxXp: 100000000, income: 50000},
    "Master wizard": {name: "Master wizard", maxXp: 10000000000, income: 250000},
    "Chairman": {name: "Chairman", maxXp: 1000000000000, income: 1000000},
    "Illustrious Chairman": {name: "Illustrious Chairman", maxXp: 7000000000000, income: 1500000},

    "Junior Caretaker": {name: "Junior Caretaker", maxXp: 100000, income: 15},
    "Lead Caretaker": {name: "Lead Caretaker", maxXp: 1000000, income: 115}, 
    "Freshman": {name: "Freshman", maxXp: 2000000, income: 250}, 
    "Sophomore": {name: "Sophomore", maxXp: 4000000, income: 500}, 
    "Junior": {name: "Junior", maxXp: 16000000, income: 1000}, 
    "Senior": {name: "Senior", maxXp: 64000000, income: 2000}, 
    "Probation": {name: "Probation", maxXp: 300000000, income: 12000},

    "Baronet": {name: "Baronet", maxXp: 7500000, income: 3500},
    "Baron": {name: "Baron", maxXp: 40000000, income: 4500},
    "Vice Count": {name: "Vice Count", maxXp: 160000000, income: 6000},
    "Count": {name: "Count", maxXp: 640000000, income: 8000},
    "Duke": {name: "Duke", maxXp: 2400000000, income: 25000},
    "Grand Duke": {name: "Grand Duke", maxXp: 9600000000, income: 40000},
    "Arch Duke": {name: "Arch Duke", maxXp: 40000000000, income: 55000},
    "Lord": {name: "Lord", maxXp: 160000000000, income: 150000},
    "High Lord": {name: "High Lord", maxXp: 160000000000000, income: 300000},
    "King": {name: "King", maxXp: 160000000000000, income: 300000},
    "High King": {name: "High King", maxXp: 160000000000000, income: 1200000},
    "Emperor of Mankind": {name: "Emperor of Mankind", maxXp: 160000000000000, income: 2500000},

}

const skillBaseData = {
    //original effect: 0.01
    //Fundamentals
    "Concentration": {name: "Concentration", maxXp: 100, effect: baseEffect, description: "Skill xp"},
    "Productivity": {name: "Productivity", maxXp: 100, effect: 0.01, description: "Job xp"},
    "Bargaining": {name: "Bargaining", maxXp: 100, effect: -0.01, description: "Expenses"},
    "Meditation": {name: "Meditation", maxXp: 100, effect: baseEffect, description: "Happiness"},

    //Combat
    "Strength": {name: "Strength", maxXp: 100, effect: 0.01, description: "Military pay"},
    "Battle tactics": {name: "Battle tactics", maxXp: 100, effect: 0.01, description: "Military xp"},
    "Muscle memory": {name: "Muscle memory", maxXp: 100, effect: 0.01, description: "Strength xp"},
    
    //Magic
    "Mana control": {name: "Mana control", maxXp: 100, effect: baseEffect, description: "T.A.A. xp"},
    "Immortality": {name: "Immortality", maxXp: 100, effect: 0.01, description: "Longer lifespan"},
    "Time warping": {name: "Time warping", maxXp: 100, effect: 0.01, description: "Gamespeed"},
    "Super immortality": {name: "Super immortality", maxXp: 100, effect: 0.01, description: "Longer lifespan"},

    //Mind
    "Novel Knowledge": {name: "Novel Knowledge", maxXp: 100, effect: 0.01, description: "Discovery xp"},
    "Unusual Insight": {name: "Unusual Insight", maxXp: 100, effect: 0.005, description: "Magical xp"},
    "Trade Psychology": {name: "Trade Psychology", maxXp: 100, effect: 0.80, description: "Merchant pay"},
    "Flow": {name: "Flow", maxXp: 800, effect: 0.001, description: "Gamespeed"},
    "Magical Engineering": {name: "Magical Engineering", maxXp: 1000, effect: 0.01, description: "Chairman xp"},
    "Scales Of Thought": {name: "Scales Of Thought", maxXp: 1100, effect: 0.003, description: "Magical xp"},
    "Magical Biology": {name: "Magical Biology", maxXp: 1500, effect: 0.005, description: "Chairman xp"},


    "Dark influence": {name: "Dark influence", maxXp: 100, effect: 0.01, description: "All xp"},
    "Evil control": {name: "Evil control", maxXp: 100, effect: 0.01, description: "Evil gain"},
    "Intimidation": {name: "Intimidation", maxXp: 100, effect: -0.01, description: "Expenses"},
    "Demon training": {name: "Demon training", maxXp: 100, effect: 0.01, description: "All xp"},
    "Blood meditation": {name: "Blood meditation", maxXp: 100, effect: 0.01, description: "Evil gain"},
    "Demon's wealth": {name: "Demon's wealth", maxXp: 100, effect: 0.002, description: "Job pay"},

    
}

const projectBaseData = {
    "Labratorium Arcaenus": {
        name: "Labratorium Arcaenus", 
        jobAffected: "Chairman", 
        jobCategoriesAffected: "The Arcane Association",
        xpMultiplier: 1.05,
        baseCost: 1000000000000000, //One million platinum
        persistsThroughRebirthOne: true,
        rebirthTwoDestructionPenalty: 0.9,  // embracing evil destroys 90 percent of the project's value
    },
}

const itemBaseData = {
    "Homeless": {name: "Homeless", expense: 0, effect: 1},
    "Tent": {name: "Tent", expense: 15, effect: 1.4},
    "Wooden hut": {name: "Wooden hut", expense: 100, effect: 2},
    "Cottage": {name: "Cottage", expense: 750, effect: 3.5},
    "House": {name: "House", expense: 3000, effect: 6},
    "Large house": {name: "Large house", expense: 25000, effect: 12},
    "Small Manor": {name: "Small Manor", expense: 300000, effect: 25},
    "Small palace": {name: "Small palace", expense: 5000000, effect: 60},
    "Grand palace": {name: "Grand palace", expense: 190000000, effect: 135},

    //Cameron's first addition: rag clothing. Woohoo!
    "Rag Clothing": {name: "Rag Clothing", expense: 3, effect: 1.5, description: "Skill xp"},
    "Book": {name: "Book", expense: 10, effect: 1.5, description: "Skill xp"},
    "Basic Farm Tools": {name: "Basic Farm Tools", expense: 10, effect: 1.5, description: "Farm upgrade"},
    "Dumbbells": {name: "Dumbbells", expense: 50, effect: 1.5, description: "Strength xp"},
    "Personal squire": {name: "Personal squire", expense: 200, effect: 2, description: "Job xp"},
    "Steel longsword": {name: "Steel longsword", expense: 1000, effect: 2, description: "Military xp"},
    "Butler": {name: "Butler", expense: 7500, effect: 1.5, description: "Happiness"},
    "Sapphire charm": {name: "Sapphire charm", expense: 50000, effect: 3, description: "Magic xp"},
    "Study desk": {name: "Study desk", expense: 1000000, effect: 2, description: "Skill xp"},
    "Library": {name: "Library", expense: 12000000, effect: 1.5, description: "Skill xp"},
    "Small Field": {name: "Small Field", expense: 130, effect: 5.0, description: "Farm upgrade"},
    "Ox-driven Plow": {name: "Ox-driven Plow", expense: 200, effect: 2.4, description: "Farm upgrade"},
    "Livestock-derived Fertilizer": {name: "Livestock-derived Fertilizer", expense: 20, effect: 1.2, description: "Farm upgrade"},
    "Cheap Fishing Rod": {name: "Cheap Fishing Rod", expense: 20, effect: 2.0, description: "Fishing upgrade"},
    "Miner's Lantern": {name: "Miner's Lantern", expense: 35, effect: 1.5, description: "Mining upgrade"},
    "Crappy Anvil": {name: "Crappy Anvil", expense: 50, effect: 1.5, description: "Blacksmith upgrade"},
    "Breech Bellows": {name: "Breech Bellows", expense: 130, effect: 1.8, description: "Blacksmith upgrade"},
    "Pack Horse": {name: "Pack Horse", expense: 80, effect: 3.0, description: "Merchant upgrade"},
    "Small Shop": {name: "Small Shop", expense: 600, effect: 1.5, description: "Merchant upgrade"},
    "Weapon Outlet": {name: "Weapon Outlet", expense: 3000, effect: 3.0, description: "Merchant upgrade"},
}

const jobCategories = {
    "Common work"            :    ["Beggar", "Farmer", "Fisherman", "Miner", "Blacksmith", "Merchant"],
    "Military"               :    ["Squire", "Footman", "Veteran footman", "Knight", "Veteran knight", "Elite knight", "Holy knight", "Legendary knight"],
    "The Arcane Association" :    ["Student", "Apprentice mage", "Mage", "Wizard", "Master wizard", "Chairman", "Illustrious Chairman"],
    "The Order of Discovery" :    ["Junior Caretaker", "Lead Caretaker", "Freshman", "Sophomore", "Junior", "Senior", "Probation"],
    "Nobility"               :    ["Baronet", "Baron", "Vice Count", "Count", "Duke", "Grand Duke", "Arch Duke", "Lord", "High Lord", "King", "High King", "Emperor of Mankind"]
}

const skillCategories = {
    "Fundamentals"           :    ["Concentration", "Productivity", "Bargaining", "Meditation"],
    "Combat"                 :    ["Strength", "Battle tactics", "Muscle memory"],
    "Magic"                  :    ["Mana control", "Immortality", "Time warping", "Super immortality"],
    "Mind"                   :    ["Novel Knowledge", "Unusual Insight", "Trade Psychology", "Flow", "Magical Engineering", "Scales Of Thought", "Magical Biology"],
    "Dark magic"             :    ["Dark influence", "Evil control", "Intimidation", "Demon training", "Blood meditation", "Demon's wealth"],
    
}

const itemCategories = {
    "Properties": ["Homeless", "Tent", "Wooden hut", "Cottage", "House", "Large house", "Small Manor", "Small palace", "Grand palace"],
    "Misc": ["Rag Clothing", "Book", "Basic Farm Tools", "Small Field", "Ox-driven Plow", "Livestock-derived Fertilizer", "Cheap Fishing Rod", "Dumbbells", "Miner's Lantern", "Crappy Anvil", "Breech Bellows", "Pack Horse", "Small Shop",
    "Weapon Outlet", "Personal squire", 
                "Steel longsword", "Butler", "Sapphire charm", "Study desk", "Library"]
}

const projectCategories = {
    "Chairman Projects": ["Labratorium Arcaenus"]
}

const headerRowColors = {
    "Common work": "#55a630",
    "Military": "#e63946",
    "The Arcane Association": "#C71585",
    "The Order of Discovery": "#C7dd85",
    "Nobility": "#D1B000",
    "Fundamentals": "#4a4e69",
    "Combat": "#ff704d",
    "Magic": "#875F9A",
    "Mind": "#87009A",
    "Dark magic": "#73000f",
    "Properties": "#219ebc",
    "Misc": "#b56576",
}

const tooltips = {
    "Beggar": "Struggle day and night for a couple of copper coins. It feels like you are at the brink of death each day.",
    "Farmer": "Plow the fields and grow the crops. It's not much but it's honest work.",
    "Fisherman": "Reel in various fish and sell them for a handful of coins. A relaxing but still a poor paying job.",
    "Miner": "Delve into dangerous caverns and mine valuable ores. The pay is quite meager compared to the risk involved.",
    "Blacksmith": "Smelt ores and carefully forge weapons for the military. A respectable and OK paying commoner job.",
    "Merchant": "Travel from town to town, bartering fine goods. The job pays decently well and is a lot less manually-intensive.",

    "Squire": "Carry around your knight's shield and sword along the battlefield. Very meager pay but the work experience is quite valuable.",
    "Footman": "Put down your life to battle with enemy soldiers. A courageous, respectable job but you are still worthless in the grand scheme of things.",
    "Veteran footman": "More experienced and useful than the average footman, take out the enemy forces in battle with your might. The pay is not that bad.",
    "Knight": "Slash and pierce through enemy soldiers with ease, while covered in steel from head to toe. A decently paying and very respectable job.",
    "Veteran knight": "Utilising your unmatched combat ability, slaugher enemies effortlessly. Most footmen in the military would never be able to acquire such a well paying job like this.",
    "Elite knight": "Obliterate squadrons of enemy soldiers in one go with extraordinary proficiency, while equipped with the finest gear. Such a feared unit on the battlefield is paid extremely well.",
    "Holy knight": "Collapse entire armies in mere seconds with your magically imbued blade. The handful of elite knights who attain this level of power are showered with coins.",
    "Legendary knight": "Feared worldwide, obliterate entire nations in a blink of an eye. Roughly every century, only one holy knight is worthy of receiving such an esteemed title.",

    "Student": "Study the theory of mana and practice basic spells. There is minor pay to cover living costs, however, this is a necessary stage in becoming a mage.",
    "Apprentice mage": "Under the supervision of a mage, perform basic spells against enemies in battle. Generous pay will be provided to cover living costs.",
    "Mage": "Turn the tides of battle through casting intermediate spells and mentor other apprentices. The pay for this particular job is extremely high.",
    "Wizard": "Utilise advanced spells to ravage and destroy entire legions of enemy soldiers. Only a small percentage of mages deserve to attain this role and are rewarded with an insanely high pay.",
    "Master wizard": "Blessed with unparalleled talent, perform unbelievable feats with magic at will. It is said that a master wizard has enough destructive power to wipe an empire off the map.",
    "Chairman": "As you walk amongst your fellow Master Wizards, who in recognition of your vast power have just elected you Chairman of the Arcane Association, you receive this anonymous note: \"We have followed your progress with great interest. Many have walked this path, but few have used the amulet you now wear to its full potential. But you are not the first to make it this far. Strive on. We will contact you, when the time is right.\"",
    "Illustrious Chairman": "Master of life and war. Renowned throughout the magical and non-magical worlds alike, an Illustrious Chairman is completely free to follow their own path of discovery and ambition. On the other hand, there is that curious note to investigate...",

    //The Order of Discovery
    "Junior Caretaker": "A low-level administrator of the ancient Order of Discovery has offered you a job. Cleaning shit-stained chamber pots and mopping kitchen floors isn't glamorous work, but it gives you the rare chance to peruse the Order's world-class library of exotic books. Who cares if touching the books is an offense worthy of expulsion?",
    "Lead Caretaker": "Witty placeholder, my name is.",
    "Freshman": "Your leadership of the caretaking team has proven you have a modicum of brain cells. A teacher you frequently see has vouched for your potential. Your studies are long and often boring, but you can sense there are great secrets within these halls waiting to be discovered.",
    "Sophomore": "Rhyming is crime-ing, and feature delay is not the way.",
    "Junior": "Try as I do, these temporary tooltips are poo.",
    "Senior": "Forget me not, for this author shall not.",
    "Probation": "Having completed your basic studies, the Order grants you a bottom-of-the-barrel position as research associate to an old member of little renown. Any major misstep will probably result in your banishment from the halls of knowledge.",

    //Nobility
    "Baronet": "A tooltip, a thought. Helpful, I am not.",
    "Baron": "The finest $3 pizza modern food science can conceive",
    "Vice Count": "Because Viscount sounds gross.",
    "Count": "Are these placeholder tooltips infuriating?",
    "Duke": "Good.",
    "Grand Duke": "The nobility cares not for your tooltip desires. ",
    "Arch Duke": "Even grander than the most grand Grand Duke your granddad could....Grand.",
    "Lord": "Oh lord, please let Gottmilk write the real tooltips already. These are too painful to endure.",
    "High Lord": "Is it April 20th?",
    "King": "Now to find yourself a nice Queen. Or two. Or three.",
    "High King": "Even higher. Even nobler.",
    "Emperor of Mankind": "Go outside.",

    "Concentration": "Improve your learning speed through practising intense concentration activities.",
    "Productivity": "Learn to procrastinate less at work and receive more job experience per day.",
    "Bargaining": "Study the tricks of the trade and persuasive skills to lower any type of expense.",
    "Meditation": "Fill your mind with peace and tranquility to tap into greater happiness from within.",

    //Military
    "Strength": "Condition your body and strength through harsh training. Stronger individuals are paid more in the military.",
    "Battle tactics": "Create and revise battle strategies, improving experience gained in the military.",
    "Muscle memory": "Strengthen your neurons through habit and repetition, improving strength gains throughout the body.",

    // Magic
    "Mana control": "Strengthen your mana channels throughout your body, aiding you in becoming a more powerful magical user.",
    "Immortality": "Lengthen your lifespan through the means of magic. However, is this truly the immortality you have tried seeking for...?",
    "Time warping": "Bend space and time through forbidden techniques, resulting in a faster gamespeed.",
    "Super immortality": "Through harnessing ancient, forbidden techniques, lengthen your lifespan drastically beyond comprehension.",

    // Mind
    "Novel Knowledge": "A mind needs training. Your time spent absorbing new ideas and worldviews has increased your ability to assimilate new ideas and make connections between seemingly unrelated concepts.",
    "Unusual Insight": "Your training in the more mundane affairs of the non-magical world have developed your critical analysis skills. As you gain knowledge, magical concepts which seemed inscrutable and mysterious are becoming more relatable to the physical world around you.",
    "Trade Psychology": "Writers pour their souls into the written word. Your extensive reading combined with your countless years spent interacting with people have lent you unparalleled insight into the way mankind views the positive and the negative events of this world. An ethical scholar would refrain from abusing this knowledge for financial gain.",
    "Flow": "Intense bouts of concentration warp your perception of time",
    "Magical Engineering": "The potential routes of experimentation are infinite. The questions, limitless. What should a budding Chairman focus on in order to enhance their" 
      + " knowledge of both life and magic? In medieval times, biology is limited by the tools of the time. Without microscopes and advanced chemistry, it is almost impossible" 
      + " to fully grasp the concept of cellular life and the underlying mechanisms governing DNA, metabolism, and degradation of biological structures. Magical Engineering is a worthy pursuit for a Chairman looking to use Magic to build the tools of future scientific inquiry.",
    "Scales Of Thought": "Up to this point, a Chairman's experience with Magic is almost entirely on the human scale. A budding apprentice learns to extend the life of a flower."
      +  " A mage learns to incinerate man, horse, and siege engine. Master Wizards learn to shake the earth and obscure the vision of their human opponents with natural phenomena"
      + " and magic alike. A Chairman must learn to shift their focus from the scale of humanity to both higher highs and lower lows. A Chairman seeking immortality must investigate"
      + " the smallest structures of existence, must continue probing deeper and uncovering astounding knowledge and even more astounding questions. Scales of Thought will enhance"
      + " Mana Control and Chairman experience gain rates by a substantial rate. By probing nature on a deeper level, a Chairman gains unparalleled understanding which influences every magical action pursuit.",
      "Magical Biology": "Through Magical Biology, a Chairman seeks to leverage their new inventions and new frames of thought to directly probe, change, experiment and observe the effects of magic on various cellular structures to enhance their vitality and vigor. Magical Biology is the final step towards immortality.",


    // Dark Magic
    "Dark influence": "Encompass yourself with formidable power bestowed upon you by evil, allowing you to pick up and absorb any job or skill with ease.",
    "Evil control": "Tame the raging and growing evil within you, improving evil gain in-between rebirths.",
    "Intimidation": "Learn to emit a devilish aura which strikes extreme fear into other merchants, forcing them to give you heavy discounts.",
    "Demon training": "A mere human body is too feeble and weak to withstand evil. Train with forbidden methods to slowly manifest into a demon, capable of absorbing knowledge rapidly.",
    "Blood meditation": "Grow and culture the evil within you through the sacrifise of other living beings, drastically increasing evil gain.",
    "Demon's wealth": "Through the means of dark magic, multiply the raw matter of the coins you receive from your job.",

    //Housing Tooltips
    "Homeless": "Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.",
    "Tent": "A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.",
    "Wooden hut": "Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn't very pleasant.",
    "Cottage": "Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.",
    "House": "A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.",
    "Large house": "Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.",
    "Small Manor": "Your rising status has granted you access to a small countryside manor. With the manor comes two hundred acres of farmland and the associated serfs, grain mill, and a small river for irrigation. The attendant tells you of a beautiful hollow in some nearby woods where you can relax and meditate.",
    "Small palace": "A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.",
    "Grand palace": "A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.",

    //Item Tooltips
    "Rag Clothing": "After weeks of freezing on the streets, you're making enough money to buy some cheap clothes. They're not much, but they'll keep you warm enough to focus.",
    "Book": "A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.",
    "Basic Farm Tools": "A set of rusty iron tools to help loosen soil, shape wood, and attach things. Where did you even find this junk?",
    "Cheap Fishing Rod": "You found this cracked fishing rod partially buried by the shore. It needs some major TLC, but it'll help you reel in bigger fish.",
    "Dumbbells": "Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before. ",
    "Miner's Lantern": "After weeks of feeling your way through pitch black tunnels, bandaging scraped hands, and getting smacked in the face by your fellow miner's pickaxes, you have the bright idea to purchase a lantern. Hopefully some light will help illuminate additional mineral deposits and geological phenomena.",
    "Crappy Anvil": "You're pretty sure this lumpy hunk of iron used to be someone's chamber pot.",
    "Breech Bellows": "Cobbled together with two sticks and a pair of old trousers, this tool boosts the heat and efficiency of your forge.",
    "Pack Horse": "This sweet chestnut horse will haul you and your trade goods to distant cities where your novel fabrics and knick knacks will fetch a tidy profit.",
    "Small Shop": "Your first shop. This cozy storefront lies on the main street of a medium-sized walled town. Commoners, nobles, and military patrols all pass along this street, so at the very least people will know your store exists.",
    "Weapon Outlet": "A busy military means a busy weapons store. One of the liuetenants who frequents your small shop recently let slip that a long military campaign is imminent. Naturally, a savy merchant such as yourself sees the business opportunity provided by war.",
    "Personal squire": "Assists you in completing day to day activities, giving you more time to be productive at work.",
    "Steel longsword": "A fine blade used to slay enemies even quicker in combat and therefore gain more experience.",
    "Butler": "Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.",
    "Sapphire charm": "Embedded with a rare sapphire, this charm activates more mana channels within your body, providing a much easier time learning magic.",
    "Study desk": "A dedicated area which provides many fine stationary and equipment designed for furthering your progress in research.",
    "Library": "Stores a collection of books, each containing vast amounts of information from basic life skills to complex magic spells.",
    "Small Field": "After a pitched battle between bickering barons, your fellow farmer lost his leg and two eldest sons. With a wife and small children to take care of, he says he'll entrust his land to you in exchange for using the proceeds to take care of his family.",
    "Ox-driven Plow": "With your newfound land and tools, you've become relatively wealthy. For a peasant farmer, at least. Tale of your achievements has reached the ears of the local lord, who has granted permission for you to rent one of his oxen plow teams and associated gear.",
    "Livestock-derived Fertilizer": "It's poo.",
}

const units = ["", "k", "M", "B", "T", "q", "Q", "Sx", "Sp", "Oc"];

const jobTabButton = document.getElementById("jobTabButton")

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}


function getBindedTaskEffect(taskName) {
    var task = gameData.taskData[taskName]
    return task.getEffect.bind(task)
}

function getBindedItemEffect(itemName) {
    var item = gameData.itemData[itemName]
    return item.getEffect.bind(item)
}

function addMultipliers() {
    for (taskName in gameData.taskData) {
        var task = gameData.taskData[taskName]

        task.xpMultipliers = []
        if (task instanceof Job) task.incomeMultipliers = []

        task.xpMultipliers.push(task.getMaxLevelMultiplier.bind(task))
        task.xpMultipliers.push(getHappiness)
        task.xpMultipliers.push(getBindedTaskEffect("Dark influence"))
        task.xpMultipliers.push(getBindedTaskEffect("Demon training"))

        if (task instanceof Job) {
            task.incomeMultipliers.push(task.getLevelMultiplier.bind(task))
            task.incomeMultipliers.push(getBindedTaskEffect("Demon's wealth"))
            task.xpMultipliers.push(getBindedTaskEffect("Productivity"))
            task.xpMultipliers.push(getBindedItemEffect("Personal squire"))    
        } else if (task instanceof Skill) {
            task.xpMultipliers.push(getBindedTaskEffect("Concentration"))
            task.xpMultipliers.push(getBindedItemEffect("Rag Clothing"))
            task.xpMultipliers.push(getBindedItemEffect("Book"))
            task.xpMultipliers.push(getBindedItemEffect("Study desk"))
            task.xpMultipliers.push(getBindedItemEffect("Library"))
        }

        if (jobCategories["Military"].includes(task.name)) {
            task.incomeMultipliers.push(getBindedTaskEffect("Strength"))
            task.xpMultipliers.push(getBindedTaskEffect("Battle tactics"))
            task.xpMultipliers.push(getBindedItemEffect("Steel longsword"))
        } else if (jobCategories["The Order of Discovery"].includes(task.name)) {
            task.xpMultipliers.push(getBindedTaskEffect("Novel Knowledge"));
            task.xpMultipliers.push(getBindedTaskEffect("Unusual Insight"));
        } else if(task.name == "Farmer") { //trying to make hand tools increase farmer income
            task.incomeMultipliers.push(getBindedItemEffect("Basic Farm Tools"));
            task.xpMultipliers.push(getBindedItemEffect("Small Field"));
            task.incomeMultipliers.push(getBindedItemEffect("Small Field"));
            task.incomeMultipliers.push(getBindedItemEffect("Ox-driven Plow"));
            task.xpMultipliers.push(getBindedItemEffect("Ox-driven Plow"));
            task.incomeMultipliers.push(getBindedItemEffect("Livestock-derived Fertilizer"));
        } else if (task.name == "Fisherman") { // Fishing rod boosts both income and fishing xp (bigger fish baby!)
            task.incomeMultipliers.push(getBindedItemEffect("Cheap Fishing Rod"));
            task.xpMultipliers.push(getBindedItemEffect("Cheap Fishing Rod"));
        } else if (task.name == "Miner") { //lantern boosts income and miner xp by 1.5x
            task.incomeMultipliers.push(getBindedItemEffect("Miner's Lantern"));
            task.xpMultipliers.push(getBindedItemEffect("Miner's Lantern"));
        } else if (task.name == "Blacksmith") { //crappy anvil boosts income and xp of blacksmith by 1.5x
            task.incomeMultipliers.push(getBindedItemEffect("Crappy Anvil"));
            task.xpMultipliers.push(getBindedItemEffect("Crappy Anvil"));
            task.incomeMultipliers.push(getBindedItemEffect("Breech Bellows"));
            task.xpMultipliers.push(getBindedItemEffect("Breech Bellows"));
        } else if (task.name == "Merchant") {
            task.incomeMultipliers.push(getBindedItemEffect("Pack Horse"));
            task.incomeMultipliers.push(getBindedTaskEffect("Trade Psychology"));
            task.xpMultipliers.push(getBindedItemEffect("Pack Horse"));
            task.incomeMultipliers.push(getBindedItemEffect("Small Shop"));
            task.xpMultipliers.push(getBindedItemEffect("Small Shop"));
            task.incomeMultipliers.push(getBindedItemEffect("Weapon Outlet"));
            task.xpMultipliers.push(getBindedItemEffect("Weapon Outlet"));
        } else if (task.name == "Chairman") {
            task.incomeMultipliers.push(getBindedTaskEffect("Magical Engineering"));
            task.xpMultipliers.push(getBindedTaskEffect("Magical Engineering"));
            task.xpMultipliers.push(getBindedTaskEffect("Scales Of Thought"));
            task.xpMultipliers.push(getBindedTaskEffect("Magical Biology"));
        } else if (task.name == "Illustrious Chairman") {
            task.incomeMultipliers.push(getBindedTaskEffect("Magical Engineering"));
            task.xpMultipliers.push(getBindedTaskEffect("Magical Engineering"));
            task.xpMultipliers.push(getBindedTaskEffect("Scales Of Thought"));
            task.xpMultipliers.push(getBindedTaskEffect("Magical Biology"));
        } else if (task.name == "Strength") {
            task.xpMultipliers.push(getBindedTaskEffect("Muscle memory"))
            task.xpMultipliers.push(getBindedItemEffect("Dumbbells"))
        } else if (skillCategories["Magic"].includes(task.name)) {
            task.xpMultipliers.push(getBindedItemEffect("Sapphire charm"));
            task.xpMultipliers.push(getBindedTaskEffect("Novel Knowledge"));
            task.xpMultipliers.push(getBindedTaskEffect("Unusual Insight"));
            task.xpMultipliers.push(getBindedTaskEffect("Scales Of Thought"));
        } else if (skillCategories["Dark magic"].includes(task.name)) {
            task.xpMultipliers.push(getEvil)
        }
        if (jobCategories["The Arcane Association"].includes(task.name)) {
            task.xpMultipliers.push(getBindedTaskEffect("Mana control"));
            task.xpMultipliers.push(getBindedTaskEffect("Novel Knowledge"));
            task.xpMultipliers.push(getBindedTaskEffect("Unusual Insight"));
        }
        if(jobCategories["Nobility"].includes(task.name)) {
            //todo
        }
    }

    for (itemName in gameData.itemData) {
        var item = gameData.itemData[itemName]
        item.expenseMultipliers = []
        item.expenseMultipliers.push(getBindedTaskEffect("Bargaining"))
        item.expenseMultipliers.push(getBindedTaskEffect("Intimidation"))
    }
}

function setCustomEffects() {
    var bargaining = gameData.taskData["Bargaining"];
    bargaining.getEffect = function() {
        var multiplier = 1 - getBaseLog(7, bargaining.level + 1) / 10
        if (multiplier < 0.1) {multiplier = 0.1}
        return multiplier
    };

    var intimidation = gameData.taskData["Intimidation"];
    intimidation.getEffect = function() {
        var multiplier = 1 - getBaseLog(7, intimidation.level + 1) / 10
        if (multiplier < 0.1) {
            multiplier = 0.1;
        }
        return multiplier;
    };

    //          ***    HISTORICAL NOTES    ***
    // All gamespeed modifying effects are currently combined into this single Time warping multiplier
    // for simplicity's sake. As of this writing, the two relevant skills are Time warping and Flow.
    // As of June 23rd 2021, gameSpeed effects are broken out into their respective effects and functions
    // to increase clarity for players. The old method of combining effects into Time Warping caused Flow
    // to change the Time Warping skill description, which led to confusion. 
    var timeWarping = gameData.taskData["Time warping"];
    var flow = gameData.taskData["Flow"];
    // This re-defined getEffect() function is called in the getGameSpeed() function.
    timeWarping.getEffect = function() {
        var multiplier = 1 + getBaseLog(13, timeWarping.level + 1);
        return multiplier;
    }

    flow.getEffect = function () {
        var multiplier = 1 + getBaseLog(100, flow.level + 1) / 1.3;
        return multiplier;
    }

    var immortality = gameData.taskData["Immortality"]
    immortality.getEffect = function() {
        var multiplier = 1 + getBaseLog(33, immortality.level + 1) 
        return multiplier
    }
}

function getHappiness() {
    var meditationEffect = getBindedTaskEffect("Meditation");
    var butlerEffect = getBindedItemEffect("Butler");
    var happiness = meditationEffect() * butlerEffect() * gameData.currentProperty.getEffect();
    return happiness;
}

function getEvil() {
    return gameData.evil;
}

function applyMultipliers(value, multipliers) {
    var finalMultiplier = 1;
    multipliers.forEach(function(multiplierFunction) {
        //wtf is multiplier function? It's called like a function, but we have no function definition ANYWHERE. Mrrrrr...
        var multiplier = multiplierFunction();
        finalMultiplier *= multiplier;
    });
    var finalValue = Math.round(value * finalMultiplier);
    return finalValue;
}

function applySpeed(value) {
    finalValue = value * getGameSpeed() / updateSpeed;
    return finalValue;
}

function getEvilGain() {
    var evilControl = gameData.taskData["Evil control"]
    var bloodMeditation = gameData.taskData["Blood meditation"]
    var evil = evilControl.getEffect() * bloodMeditation.getEffect()
    return evil
}

function getAllTimeMultipliers() {
    var timeWarping = gameData.taskData["Time warping"];
    var flow = gameData.taskData["Flow"];
    var flowSpeed = flow.getEffect();
    var timeWarpingSpeed = gameData.timeWarpingEnabled ? timeWarping.getEffect() : 1;
    var totalTimeMultiplier = flowSpeed * timeWarpingSpeed;
    return totalTimeMultiplier;
    
}

function getGameSpeed() {
    var gameSpeed = baseGameSpeed * +!gameData.paused * +isAlive() * getAllTimeMultipliers();
    return gameSpeed;
}

function applyExpenses() {
    var coins = applySpeed(getExpense())
    gameData.coins -= coins
    if (gameData.coins < 0) {    
        goBankrupt()
    }
}

function getExpense() {
    var expense = 0
    expense += gameData.currentProperty.getExpense()
    for (misc of gameData.currentMisc) {
        expense += misc.getExpense()
    }
    return expense
}

function goBankrupt() {
    gameData.coins = 0
    gameData.currentProperty = gameData.itemData["Homeless"]
    gameData.currentMisc = []
}

function setTab(element, selectedTab) {

    var tabs = Array.prototype.slice.call(document.getElementsByClassName("tab"))
    tabs.forEach(function(tab) {
        tab.style.display = "none"
    })
    document.getElementById(selectedTab).style.display = "block"

    var tabButtons = document.getElementsByClassName("tabButton")
    for (tabButton of tabButtons) {
        tabButton.classList.remove("w3-blue-gray")
    }
    element.classList.add("w3-blue-gray")
}

function setPause() {
    gameData.paused = !gameData.paused
}

function setTimeWarping() {
    gameData.timeWarpingEnabled = !gameData.timeWarpingEnabled
}

function setTask(taskName) {
    var task = gameData.taskData[taskName]
    task instanceof Job ? gameData.currentJob = task : gameData.currentSkill = task
}

function setProperty(propertyName) {
    var property = gameData.itemData[propertyName]
    gameData.currentProperty = property
}

function setMisc(miscName) {
    var misc = gameData.itemData[miscName]
    if (gameData.currentMisc.includes(misc)) {
        for (i = 0; i < gameData.currentMisc.length; i++) {
            if (gameData.currentMisc[i] == misc) {
                gameData.currentMisc.splice(i, 1)
            }
        }
    } else {
        gameData.currentMisc.push(misc)
    }
}

function createData(data, baseData) {
    for (key in baseData) {
        var entity = baseData[key]
        createEntity(data, entity)
    }
}

function createEntity(data, entity) {
    if ("income" in entity) {data[entity.name] = new Job(entity)}
    else if ("maxXp" in entity) {data[entity.name] = new Skill(entity)}
    else {data[entity.name] = new Item(entity)}
    data[entity.name].id = "row " + entity.name
}

function createRequiredRow(categoryName) {
    var requiredRow = document.getElementsByClassName("requiredRowTemplate")[0].content.firstElementChild.cloneNode(true)
    requiredRow.classList.add("requiredRow")
    requiredRow.classList.add(removeSpaces(categoryName))
    requiredRow.id = categoryName
    return requiredRow
}

function createHeaderRow(templates, categoryType, categoryName) {
    var headerRow = templates.headerRow.content.firstElementChild.cloneNode(true)
    headerRow.getElementsByClassName("category")[0].textContent = categoryName
    if (categoryType != itemCategories) {
        headerRow.getElementsByClassName("valueType")[0].textContent = categoryType == jobCategories ? "Income/day" : "Effect"
    }

    headerRow.style.backgroundColor = headerRowColors[categoryName]
    headerRow.style.color = "#ffffff"
    headerRow.classList.add(removeSpaces(categoryName))
    headerRow.classList.add("headerRow")
    
    return headerRow
}

function createRow(templates, name, categoryName, categoryType) {
    var row = templates.row.content.firstElementChild.cloneNode(true)
    row.getElementsByClassName("name")[0].textContent = name
    row.getElementsByClassName("tooltipText")[0].textContent = tooltips[name]
    row.id = "row " + name
    if (categoryType != itemCategories) {
        row.getElementsByClassName("progressBar")[0].onclick = function() {setTask(name)}
    } else {
        row.getElementsByClassName("button")[0].onclick = categoryName == "Properties" ? function() {setProperty(name)} : function() {setMisc(name)}
    }

    return row
}

function createAllRows(categoryType, tableId) {
    var templates = {
        headerRow: document.getElementsByClassName(categoryType == itemCategories ? "headerRowItemTemplate" : "headerRowTaskTemplate")[0],
        row: document.getElementsByClassName(categoryType == itemCategories ? "rowItemTemplate" : "rowTaskTemplate")[0],
    }

    var table = document.getElementById(tableId)

    for (categoryName in categoryType) {
        var headerRow = createHeaderRow(templates, categoryType, categoryName)
        table.appendChild(headerRow)
        
        var category = categoryType[categoryName]
        category.forEach(function(name) {
            var row = createRow(templates, name, categoryName, categoryType)
            table.appendChild(row)       
        })

        var requiredRow = createRequiredRow(categoryName)
        table.append(requiredRow)
    }
}

function updateQuickTaskDisplay(taskType) {
    var currentTask = taskType == "job" ? gameData.currentJob : gameData.currentSkill
    var quickTaskDisplayElement = document.getElementById("quickTaskDisplay")
    var progressBar = quickTaskDisplayElement.getElementsByClassName(taskType)[0]
    progressBar.getElementsByClassName("name")[0].textContent = currentTask.name + " lvl " + currentTask.level
    progressBar.getElementsByClassName("progressFill")[0].style.width = currentTask.xp / currentTask.getMaxXp() * 100 + "%"
}

/*
*   ******* REFACTOR SORELY NEEDED *******
*   ******* DOCUMENTATION SORELY NEEDED *******
*/

/*
*   This function gets called three times. Once with jobs, once with skills, and once for items.
*   Execution: this function first gathers a list of all possible required rows.
*   It then parses through each and every possible required row.
*   
*/
function updateRequiredRows(data, categoryType) {
    var requiredRows = document.getElementsByClassName("requiredRow")
    for (requiredRow of requiredRows) {
        var nextEntity = null
        var category = categoryType[requiredRow.id] //requiredRow.id is simple the category name. For items, it's either the array Property or Misc
        if (category == null) {continue}

        // Once we have the array of items, skills or jobs through the category variable, we iterate through each item within the array
        // with the goal of finding the next entity within the array that has not met it's requirements. 
        // So this for loop is responsible for choosing the row we use as the required row, and is a good target for changing the logic of 
        // required row display.
        if(categoryType.Misc == undefined) {
            for (i = 0; i < category.length; i++) {
                var entityName = category[i] //first we grab the name, like "Beggar" or "Rag Clothing"
                if (i >= category.length - 1) break
                var requirements = gameData.requirements[entityName] //grab any requirements
                if (requirements && i == 0) { //if the thing has requirements, its the first in the array, and they aren't completed, set this thing as the nextEntity
                    if (!requirements.isCompleted()) {
                        nextEntity = data[entityName]
                        break
                    }
                }

                var nextIndex = i + 1
                if (nextIndex >= category.length) {break}
                var nextEntityName = category[nextIndex]
                nextEntityRequirements = gameData.requirements[nextEntityName]

                if (!nextEntityRequirements.isCompleted()) {
                    nextEntity = data[nextEntityName]
                    break
                }       
            }
    }
    //separate decision logic for nextEntity within the Shop
    // Step one: 
    // Step two: then we'll 
    else if (categoryType.Misc != undefined) {
        for (i = 0; i < category.length; i++) {
            var entityName = category[i]; //first we grab the name, like "Beggar" or "Rag Clothing"
            if (i >= category.length - 1) break;
            var requirements = gameData.requirements[entityName]; //grab any requirements
            if (requirements && i == 0) { //if the thing has requirements, its the first in the array, and they aren't completed, set this thing as the nextEntity
                if (!requirements.isCompleted()) {
                    nextEntity = data[entityName];
                        break;
                    
                }
            }

            var nextIndex = i + 1;
            if (nextIndex >= category.length) {break;}
            var nextEntityName = category[nextIndex];
            nextEntityRequirements = gameData.requirements[nextEntityName];

            if (!nextEntityRequirements.isCompleted()) {
                nextEntity = data[nextEntityName]
                break
            }    


            //decision logic for setting the item to be up next, and therefore used for the required row
            //if the current job doesn't match the job in the entity's TaskRequirement, continue to the next loop iteration
            //if the current job matches the item, display that item in the required rows

            /* var requirementObject = nextEntityRequirements; //grab the containing requirement object, like TaskRequirement or CoinRequirement
            if( (requirementObject instanceof TaskRequirement) && gameData.currentJob == requirementObject.requirements[0].task && !requirementObject.isCompleted()) {
                //i++;
                nextEntity = data[nextEntityName];
                break;
            } else if( (requirementObject instanceof TaskRequirement) && gameData.currentJob != requirementObject.requirements[0].task) {
                continue;
            }  else if(requirementObject instanceof CoinRequirement && !nextEntityRequirements.isCompleted()) {
                nextEntity = data[nextEntityName];
                break;
            } */ 
            
                  
        }
    }

        //If we didn't find an object within the array that has requirements left to fulfill, we don't display any
        //required row. We do this by setting the required row to hiddenTask so it doesn't display.
        if (nextEntity == null) {
            requiredRow.classList.add("hiddenTask")      
        
        //Otherwise, we do have an object to display a required row for. This following code is the code
        //that decides what exactly gets displayed into the requiredRow template.
        } else {
            requiredRow.classList.remove("hiddenTask")
            var requirementObject = gameData.requirements[nextEntity.name] //grab the containing requirement object, like TaskRequirement or CoinRequirement
            var requirements = requirementObject.requirements //get the inner object, like {task: Concentration, requirement: 85}

            //grab references to <span> elements within the template
            var coinElement = requiredRow.getElementsByClassName("coins")[0]
            var levelElement = requiredRow.getElementsByClassName("levels")[0]
            var evilElement = requiredRow.getElementsByClassName("evil")[0]

            //start by setting all spans to hidden
            coinElement.classList.add("hiddenTask")
            levelElement.classList.add("hiddenTask")
            evilElement.classList.add("hiddenTask")

            var finalText = ""
            if (data == gameData.taskData) {
                //display logic for a Job or Skill required row
                if (requirementObject instanceof EvilRequirement) {
                    evilElement.classList.remove("hiddenTask")
                    evilElement.textContent = format(requirements[0].requirement) + " evil"
                } else {
                    levelElement.classList.remove("hiddenTask")

                    //for each mini-object, like {task: Concentration, requirement: 10} inside the containing object like TaskRequirement
                    for (requirement of requirements) {
                        var task = gameData.taskData[requirement.task]
                        //why not just use the already-built requirement.isCompleted check?
                        if (task.level >= requirement.requirement) continue
                        var text = " " + requirement.task + " level " + task.level + "/" + format(requirement.requirement) + ","
                        finalText += text
                    }
                    finalText = finalText.substring(0, finalText.length - 1)
                    levelElement.textContent = finalText
                }
                //Item requirement row display logic
                
            /*
            *   So once we're here, there are two cases.
            *   The first case is a simple item with only a CoinRequirement. In this case, we use the original display logic.
            *   Second case, the item has a TaskRequirement and no CoinRequirement. So as-is, the display logic somehow displays
            *   the item's expense even though it isn't accessed through a CoinRequirement. Weird as hell. No idea how it's doing that for the
            *   items that only have TaskRequirements, unless this whole time it's actually been displaying the Task level requirement as the coin cost.
            *   I think that is what has been happening. Lmao. Oops.
            *  
            */
            } else if (data == gameData.itemData) {
                if(requirementObject instanceof CoinRequirement) {
                    coinElement.classList.remove("hiddenTask");
                    levelElement.classList.remove("hiddenTask");
                    formatCoins(requirements[0].requirement, coinElement);
                }
                else if(requirementObject instanceof TaskRequirement) {
                    levelElement.classList.remove("hiddenTask");
                    for (requirement of requirements) {
                        var task = gameData.taskData[requirement.task];
                        //why not just use the already-built requirement.isCompleted check?
                        if (task.level >= requirement.requirement) continue;
                        var text = " " + requirement.task + " level " + format(task.level) + "/" + format(requirement.requirement) + ",";
                        finalText += text;
                    }
                    finalText = finalText.substring(0, finalText.length - 1);
                    levelElement.textContent = finalText;
                    
                }

            }
        }   
    }
}

function updateTaskRows() {
    for (key in gameData.taskData) {
        var task = gameData.taskData[key]
        var row = document.getElementById("row " + task.name)
        row.getElementsByClassName("level")[0].textContent = task.level
        row.getElementsByClassName("xpGain")[0].textContent = format(task.getXpGain())
        row.getElementsByClassName("xpLeft")[0].textContent = format(task.getXpLeft())

        var maxLevel = row.getElementsByClassName("maxLevel")[0]
        maxLevel.textContent = task.maxLevel
        gameData.rebirthOneCount > 0 ? maxLevel.classList.remove("hidden") : maxLevel.classList.add("hidden")

        var progressFill = row.getElementsByClassName("progressFill")[0]
        progressFill.style.width = task.xp / task.getMaxXp() * 100 + "%"
        task == gameData.currentJob || task == gameData.currentSkill ? progressFill.classList.add("current") : progressFill.classList.remove("current")

        var valueElement = row.getElementsByClassName("value")[0]
        valueElement.getElementsByClassName("income")[0].style.display = task instanceof Job
        valueElement.getElementsByClassName("effect")[0].style.display = task instanceof Skill

        var skipSkillElement = row.getElementsByClassName("skipSkill")[0]
        skipSkillElement.style.display = task instanceof Skill && autoLearnElement.checked ? "block" : "none"

        if (task instanceof Job) {
            formatCoins(task.getIncome(), valueElement.getElementsByClassName("income")[0])
        } else {
            valueElement.getElementsByClassName("effect")[0].textContent = task.getEffectDescription()
        }
    }
}

function updateItemRows() {
    for (key in gameData.itemData) {
        var item = gameData.itemData[key];
        var row = document.getElementById("row " + item.name);
        var button = row.getElementsByClassName("button")[0];
        //button.disabled = gameData.coins < item.getExpense();
        var active = row.getElementsByClassName("active")[0];
        var color = itemCategories["Properties"].includes(item.name) ? headerRowColors["Properties"] : headerRowColors["Misc"];
        active.style.backgroundColor = gameData.currentMisc.includes(item) || item == gameData.currentProperty ? color : "white";
        row.getElementsByClassName("effect")[0].textContent = item.getEffectDescription();
        formatCoins(item.getExpense(), row.getElementsByClassName("expense")[0]);
    }
}

function updateHeaderRows(categories) {
    for (categoryName in categories) {
        var className = removeSpaces(categoryName);
        var headerRow = document.getElementsByClassName(className)[0];
        var maxLevelElement = headerRow.getElementsByClassName("maxLevel")[0];
        gameData.rebirthOneCount > 0 ? maxLevelElement.classList.remove("hidden") : maxLevelElement.classList.add("hidden");
        var skipSkillElement = headerRow.getElementsByClassName("skipSkill")[0];
        skipSkillElement.style.display = categories == skillCategories && autoLearnElement.checked ? "block" : "none";
    }
}

function updateText() {
    //Sidebar
    document.getElementById("ageDisplay").textContent = daysToYears(gameData.days);
    document.getElementById("dayDisplay").textContent = getDay();
    document.getElementById("lifespanDisplay").textContent = daysToYears(getLifespan());
    document.getElementById("pauseButton").textContent = gameData.paused ? "Play" : "Pause";

    formatCoins(gameData.coins, document.getElementById("coinDisplay"));
    setSignDisplay();
    formatCoins(getNet(), document.getElementById("netDisplay"));
    formatCoins(getIncome(), document.getElementById("incomeDisplay"));
    formatCoins(getExpense(), document.getElementById("expenseDisplay"));

    document.getElementById("happinessDisplay").textContent = getHappiness().toFixed(1);

    document.getElementById("evilDisplay").textContent = gameData.evil.toFixed(1);
    document.getElementById("evilGainDisplay").textContent = getEvilGain().toFixed(1);

    document.getElementById("timeWarpingDisplay").textContent = "x" + getAllTimeMultipliers().toFixed(2);
    document.getElementById("timeWarpingButton").textContent = gameData.timeWarpingEnabled ? "Disable warp" : "Enable warp";

    function updateBuildingBadges() {
        var woodenHutButton = document.getElementById("woodenHut");
        woodenHutButton.children[0].innerHTML = o_townBuildingsContainer.o_woodenHut.count;

        var farmButton = document.getElementById("farm");
        farmButton.children[0].innerHTML = o_townBuildingsContainer.o_farm.count;

        var grainShedButton = document.getElementById("grainShed");
        grainShedButton.children[0].innerHTML = o_townBuildingsContainer.o_grainShed.count;
    }
    updateBuildingBadges();

    formatCoins(gameData.rawTownIncome, document.getElementById("townIncomeDisplay"));
}

function setSignDisplay() {
    var signDisplay = document.getElementById("signDisplay")
    if (getIncome() > getExpense()) {
        signDisplay.textContent = "+"
        signDisplay.style.color = "green"
    } else if (getExpense() > getIncome()) {
        signDisplay.textContent = "-"
        signDisplay.style.color = "red"
    } else {
        signDisplay.textContent = ""
        signDisplay.style.color = "gray"
    }
}

function getNet() {
    var net = Math.abs(getIncome() - getExpense())
    return net
}

function hideEntities() {
    for (key in gameData.requirements) {
        var requirement = gameData.requirements[key]
        var completed = requirement.isCompleted()
        for (element of requirement.elements) {
            if (completed) {
                element.classList.remove("hidden")
            } else {
                element.classList.add("hidden")
            }
        }
    }
}

function createItemData(baseData) {
    for (var item of baseData) {
        gameData.itemData[item.name] = "happiness" in item ? new Property(task) : new Misc(task)
        gameData.itemData[item.name].id = "item " + item.name
    }
}

function doCurrentTask(task) {
    task.increaseXp()
    if (task instanceof Job) {
        increaseCoins()
    }
}

function getIncome() {
    var income = 0;
    income += gameData.currentJob.getIncome();
    income += gameData.rawTownIncome;
    return income;
}

function increaseCoins() {
    var coins = applySpeed(getIncome());
    gameData.coins += coins;
}

function daysToYears(days) {
    var years = Math.floor(days / 365)
    return years
}

function getCategoryFromEntityName(categoryType, entityName) {
    for (categoryName in categoryType) {
        var category = categoryType[categoryName]
        if (category.includes(entityName)) {
            return category
        }
    }
}

function getNextEntity(data, categoryType, entityName) {
    var category = getCategoryFromEntityName(categoryType, entityName)
    var nextIndex = category.indexOf(entityName) + 1
    if (nextIndex > category.length - 1) return null
    var nextEntityName = category[nextIndex]
    var nextEntity = data[nextEntityName]
    return nextEntity
}

function autoPromote() {
    if (!autoPromoteElement.checked) return
    var nextEntity = getNextEntity(gameData.taskData, jobCategories, gameData.currentJob.name)
    if (nextEntity == null) return
    var requirement = gameData.requirements[nextEntity.name]
    if (requirement.isCompleted()) gameData.currentJob = nextEntity
}

function checkSkillSkipped(skill) {
    var row = document.getElementById("row " + skill.name)
    var isSkillSkipped = row.getElementsByClassName("checkbox")[0].checked
    return isSkillSkipped
}

function setSkillWithLowestMaxXp() {
    var enabledSkills = []

    for (skillName in gameData.taskData) {
        var skill = gameData.taskData[skillName]
        var requirement = gameData.requirements[skillName]
        /*
        Getting an autolearn error, and the dev console says there is an uncaught
        TypeError at this line of code below during the requirement.isCompleted() call. 
        I think the error is saying that when calling requirement.isCompleted, requirement is undefined.
        This would make sense if I have a skill that doesn't have any unlock requirements, which I think
        is true of Novel Knowledge for table rendering reasons. So the game logic assumes each skill has a requirement
        without actually checking if requirement is non-null. 
        */
        if (skill instanceof Skill) {
            //This check on the requirement variable is here to handle the case of a skill
            //having no requirements. By setting requirement equal to Concentration's requirements, 
            //we prevent unchecked TypeErrors that have been breaking the auto learn feature. 
            
            // NOTE : FRAGILE FIX
            // This fix will break if the Concentration skill is either removed from the game, renamed, or the requirement is no
            // longer immediately satisfied upon starting a new game. 
            if(requirement == null) {
                requirement = gameData.requirements["Concentration"];
            }
            if (requirement.isCompleted() && !checkSkillSkipped(skill)) {
                enabledSkills.push(skill)
            }
        }
    }

    if (enabledSkills.length == 0) {
        skillWithLowestMaxXp = gameData.taskData["Concentration"]
        return
    }
	
	enabledSkills.sort((lhs, rhs) => { return lhs.getMaxXp() / lhs.getXpGain() - rhs.getMaxXp() / rhs.getXpGain() })

    var skillName = enabledSkills[0].name
    skillWithLowestMaxXp = gameData.taskData[skillName]
}

function getKeyOfLowestValueFromDict(dict) {
    var values = []
    for (key in dict) {
        var value = dict[key]
        values.push(value)
    }

    values.sort(function(a, b){return a - b})

    for (key in dict) {
        var value = dict[key];
        if (value == values[0]) {
            return key;
        }
    }
}

function autoLearn() {
    if (!autoLearnElement.checked || !skillWithLowestMaxXp) return;
    gameData.currentSkill = skillWithLowestMaxXp;
}

function yearsToDays(years) {
    var days = years * 365;
    return days;
}
 
function getDay() {
    var day = Math.floor(gameData.days - daysToYears(gameData.days) * 365);
    return day;
}

function increaseDays() {
    var increase = applySpeed(1);
    gameData.days += increase;
}

function format(number) {

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = units[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

/*
* Input:  coins   = 'number' type, representing money in raw copper coins format
*         element = any HTML element containing four <span> elements. 
* Output: Coin values are placed into their respective <span> elements. 
*         Span styles are set to represent coin colors. (e.g. gold color for gold coins)
*
*/
function formatCoins(coins, element) {
    var tiers = ["p", "g", "s"]
    var colors = {
        "p": "#79b9c7",
        "g": "#E5C100",
        "s": "#a8a8a8",
        "c": "#a15c2f"
    }
    var leftOver = coins
    var i = 0
    for (tier of tiers) {
        var x = Math.floor(leftOver / Math.pow(10, (tiers.length - i) * 2))
        var leftOver = Math.floor(leftOver - x * Math.pow(10, (tiers.length - i) * 2))
        var text = format(String(x)) + tier + " "
        element.children[i].textContent = x > 0 ? text : ""
        element.children[i].style.color = colors[tier]
        i += 1
    }
    if (leftOver == 0 && coins > 0) {element.children[3].textContent = ""; return}
    var text = String(Math.floor(leftOver)) + "c"
    element.children[3].textContent = text
    element.children[3].style.color = colors["c"]
}

function getTaskElement(taskName) {
    var task = gameData.taskData[taskName]
    var element = document.getElementById(task.id)
    return element
}

function getItemElement(itemName) {
    var item = gameData.itemData[itemName]
    var element = document.getElementById(item.id)
    return element
}

function getElementsByClass(className) {
    var elements = document.getElementsByClassName(removeSpaces(className))
    return elements
}

function setLightDarkMode() {
    var body = document.getElementById("body")
    body.classList.contains("dark") ? body.classList.remove("dark") : body.classList.add("dark")
}

function removeSpaces(string) {
    var string = string.replace(/ /g, "")
    return string
}

function rebirthOne() {
    gameData.rebirthOneCount += 1

    rebirthReset()
}

function rebirthTwo() {
    testSuccessOfTownDestruction();
    gameData.rebirthTwoCount += 1;
    gameData.evil += getEvilGain();

    rebirthReset();

    for (taskName in gameData.taskData) {
        var task = gameData.taskData[taskName];
        task.maxLevel = 0;
    }    
    destroyTownWhileEmbracingEvil();
    testSuccessOfTownDestruction();
}

function rebirthReset() {
    setTab(jobTabButton, "jobs")

    gameData.coins = 0
    gameData.days = 365 * 14
    gameData.currentJob = gameData.taskData["Beggar"]
    gameData.currentSkill = gameData.taskData["Concentration"]
    gameData.currentProperty = gameData.itemData["Homeless"]
    gameData.currentMisc = []

    for (taskName in gameData.taskData) {
        var task = gameData.taskData[taskName]
        if (task.level > task.maxLevel) task.maxLevel = task.level
        task.level = 0
        task.xp = 0
    }

    for (key in gameData.requirements) {
        var requirement = gameData.requirements[key]
        if (requirement.completed && permanentUnlocks.includes(key)) continue
        requirement.completed = false
    }
}

function getLifespan() {
    var immortality = gameData.taskData["Immortality"]
    var superImmortality = gameData.taskData["Super immortality"]
    var lifespan = baseLifespan * immortality.getEffect() * superImmortality.getEffect()
    return lifespan
}

function isAlive() {
    var condition = gameData.days < getLifespan()
    var deathText = document.getElementById("deathText")
    if (!condition) {
        gameData.days = getLifespan()
        deathText.classList.remove("hidden")
    }
    else {
        deathText.classList.add("hidden")
    }
    return condition
}

function assignMethods() {

    for (key in gameData.taskData) {
        var task = gameData.taskData[key]
        if (task.baseData.income) {
            task.baseData = jobBaseData[task.name]
            task = Object.assign(new Job(jobBaseData[task.name]), task)
            
        } else {
            task.baseData = skillBaseData[task.name]
            task = Object.assign(new Skill(skillBaseData[task.name]), task)
        } 
        gameData.taskData[key] = task
    }

    for (key in gameData.itemData) {
        var item = gameData.itemData[key]
        item.baseData = itemBaseData[item.name]
        item = Object.assign(new Item(itemBaseData[item.name]), item)
        gameData.itemData[key] = item
    }

    for (key in gameData.requirements) {
        var requirement = gameData.requirements[key]
        if (requirement.type == "task") {
            requirement = Object.assign(new TaskRequirement(requirement.elements, requirement.requirements), requirement)
        } else if (requirement.type == "coins") {
            requirement = Object.assign(new CoinRequirement(requirement.elements, requirement.requirements), requirement)
        } else if (requirement.type == "age") {
            requirement = Object.assign(new AgeRequirement(requirement.elements, requirement.requirements), requirement)
        } else if (requirement.type == "evil") {
            requirement = Object.assign(new EvilRequirement(requirement.elements, requirement.requirements), requirement)
        }

        var tempRequirement = tempData["requirements"][key]
        requirement.elements = tempRequirement.elements
        requirement.requirements = tempRequirement.requirements
        gameData.requirements[key] = requirement
    }

    gameData.currentJob = gameData.taskData[gameData.currentJob.name]
    gameData.currentSkill = gameData.taskData[gameData.currentSkill.name]
    gameData.currentProperty = gameData.itemData[gameData.currentProperty.name]
    var newArray = []
    for (misc of gameData.currentMisc) {
        newArray.push(gameData.itemData[misc.name])
    }
    gameData.currentMisc = newArray
}

function replaceSaveDict(dict, saveDict) {
    for (key in dict) {
        if (!(key in saveDict)) {
            saveDict[key] = dict[key]
        } else if (dict == gameData.requirements) {
            if (saveDict[key].type != tempData["requirements"][key].type) {
                saveDict[key] = tempData["requirements"][key]
            }
        }
    }

    for (key in saveDict) {
        if (!(key in dict)) {
            delete saveDict[key]
        }
    }
}

function saveGameData() {
    saveTownState();
    localStorage.setItem("gameDataSave", JSON.stringify(gameData));
}

function loadGameData() {
    var gameDataSave = JSON.parse(localStorage.getItem("gameDataSave"));

    if (gameDataSave !== null) {
        replaceSaveDict(gameData, gameDataSave);
        replaceSaveDict(gameData.requirements, gameDataSave.requirements);
        replaceSaveDict(gameData.taskData, gameDataSave.taskData);
        replaceSaveDict(gameData.itemData, gameDataSave.itemData);
        //replaceSaveDict(gameData.townData, gameDataSave.townData);

        gameData = gameDataSave;
    }

    loadTownState();
    gameData.rawTownIncome = updateRawTownIncome();
    assignMethods();
}

function updateUI() {
    updateTaskRows();
    updateItemRows();
    updateRequiredRows(gameData.taskData, jobCategories);
    updateRequiredRows(gameData.taskData, skillCategories);
    updateRequiredRows(gameData.itemData, itemCategories);
    updateHeaderRows(jobCategories);
    updateHeaderRows(skillCategories);
    updateQuickTaskDisplay("job");
    updateQuickTaskDisplay("skill");
    hideEntities();
    updateText();
}

function update() {
    increaseDays();
    autoPromote();
    autoLearn();
    doCurrentTask(gameData.currentJob);
    doCurrentTask(gameData.currentSkill);
    applyExpenses();
    updateUI();
}

function resetGameData() {
    //author: theSpuu
    var result = confirm("Are you sure you want to reset your game?");
    if (result) {
        localStorage.clear();
        location.reload();
    }
    
}

function importGameData() {
    var importExportBox = document.getElementById("importExportBox");
    var data = JSON.parse(window.atob(importExportBox.value));
    gameData = data;
    saveGameData();
    location.reload();
}

function exportGameData() {
    var importExportBox = document.getElementById("importExportBox");
    importExportBox.value = window.btoa(JSON.stringify(gameData));
}

function registerEventListeners() {
    let woodenHutButton = document.getElementById("woodenHut");
    woodenHutButton.addEventListener("click", o_townBuildingsContainer.o_woodenHut.handleClick);
    woodenHutButton.addEventListener("mouseenter", updateTooltip);

    let farmButton = document.getElementById("farm");
    farmButton.addEventListener("click", o_townBuildingsContainer.o_farm.handleClick);
    farmButton.addEventListener("mouseenter", updateTooltip);

    let grainShedButton = document.getElementById("grainShed");
    grainShedButton.addEventListener("click", o_townBuildingsContainer.o_grainShed.handleClick);
    grainShedButton.addEventListener("mouseenter", updateTooltip);
}

/*
*   Note: this gets called before we register event listeners, otherwise we register
*   the old functions with improper 'this' context.
*/
function bindObjectFunctionContexts() {
    
    o_townBuildingsContainer.o_woodenHut.handleClick = o_townBuildingsContainer.o_woodenHut.handleClick.bind(o_townBuildingsContainer.o_woodenHut);
    o_townBuildingsContainer.o_farm.handleClick = o_townBuildingsContainer.o_farm.handleClick.bind(o_townBuildingsContainer.o_farm);
    o_townBuildingsContainer.o_grainShed.handleClick = o_townBuildingsContainer.o_grainShed.handleClick.bind(o_townBuildingsContainer.o_grainShed);
    o_townBuildingsContainer.o_grainShed.calculateMultiplier = o_townBuildingsContainer.o_grainShed.calculateMultiplier.bind(o_townBuildingsContainer.o_grainShed);
}

//Init

createAllRows(jobCategories, "jobTable")
createAllRows(skillCategories, "skillTable")
createAllRows(itemCategories, "itemTable") 

createData(gameData.taskData, jobBaseData)
createData(gameData.taskData, skillBaseData)
createData(gameData.itemData, itemBaseData) 

gameData.currentJob = gameData.taskData["Beggar"]
gameData.currentSkill = gameData.taskData["Concentration"]
gameData.currentProperty = gameData.itemData["Homeless"]
gameData.currentMisc = []

gameData.requirements = {
    //Other
    "The Arcane Association": new TaskRequirement(getElementsByClass("The Arcane Association"), [{task: "Concentration", requirement: 200}, {task: "Meditation", requirement: 200}]),
    //"Mind": new TaskRequirement(getElementsByClass("Mind"), [{task: "Concentration", requirement: 700}, {task: "Meditation", requirement: 700}]),
    "Nobility": new TaskRequirement(getElementsByClass("Nobility"), [{task: "Elite knight", requirement: 10}]),
    "Dark magic": new EvilRequirement(getElementsByClass("Dark magic"), [{requirement: 1}]),
    "Shop": new CoinRequirement([document.getElementById("shopTabButton")], [{requirement: gameData.itemData["Tent"].getExpense() * 50}]),
    "Rebirth tab": new AgeRequirement([document.getElementById("rebirthTabButton")], [{requirement: 25}]),
    "Rebirth note 1": new AgeRequirement([document.getElementById("rebirthNote1")], [{requirement: 45}]),
    "Rebirth note 2": new AgeRequirement([document.getElementById("rebirthNote2")], [{requirement: 65}]),
    "Rebirth note 3": new AgeRequirement([document.getElementById("rebirthNote3")], [{requirement: 200}]),
    "Evil info": new EvilRequirement([document.getElementById("evilInfo")], [{requirement: 1}]),
    "Time warping info": new TaskRequirement([document.getElementById("timeWarping")], [{task: "Mage", requirement: 10}]),
    "Automation": new AgeRequirement([document.getElementById("automation")], [{requirement: 20}]),
    "Quick task display": new AgeRequirement([document.getElementById("quickTaskDisplay")], [{requirement: 20}]),

    //Common work
    "Beggar": new TaskRequirement([getTaskElement("Beggar")], []),
    "Farmer": new TaskRequirement([getTaskElement("Farmer")], [{task: "Beggar", requirement: 10}]),
    "Fisherman": new TaskRequirement([getTaskElement("Fisherman")], [{task: "Farmer", requirement: 10}]),
    "Miner": new TaskRequirement([getTaskElement("Miner")], [{task: "Strength", requirement: 10}, {task: "Fisherman", requirement: 10}]),
    "Blacksmith": new TaskRequirement([getTaskElement("Blacksmith")], [{task: "Strength", requirement: 30}, {task: "Miner", requirement: 10}]),
    "Merchant": new TaskRequirement([getTaskElement("Merchant")], [{task: "Bargaining", requirement: 50}, {task: "Blacksmith", requirement: 10}]),

    //Military 
    "Squire": new TaskRequirement([getTaskElement("Squire")], [{task: "Strength", requirement: 5}]),
    "Footman": new TaskRequirement([getTaskElement("Footman")], [{task: "Strength", requirement: 20}, {task: "Squire", requirement: 10}]),
    "Veteran footman": new TaskRequirement([getTaskElement("Veteran footman")], [{task: "Battle tactics", requirement: 40}, {task: "Footman", requirement: 10}]),
    "Knight": new TaskRequirement([getTaskElement("Knight")], [{task: "Strength", requirement: 100}, {task: "Veteran footman", requirement: 10}]),
    "Veteran knight": new TaskRequirement([getTaskElement("Veteran knight")], [{task: "Battle tactics", requirement: 150}, {task: "Knight", requirement: 10}]),
    "Elite knight": new TaskRequirement([getTaskElement("Elite knight")], [{task: "Strength", requirement: 300}, {task: "Veteran knight", requirement: 10}]),
    "Holy knight": new TaskRequirement([getTaskElement("Holy knight")], [{task: "Mana control", requirement: 500}, {task: "Elite knight", requirement: 10}]),
    "Legendary knight": new TaskRequirement([getTaskElement("Legendary knight")], [{task: "Mana control", requirement: 1000}, {task: "Battle tactics", requirement: 1000}, {task: "Holy knight", requirement: 10}]),

    //The Arcane Association
    "Student": new TaskRequirement([getTaskElement("Student")], [{task: "Concentration", requirement: 200}, {task: "Meditation", requirement: 200}]),
    "Apprentice mage": new TaskRequirement([getTaskElement("Apprentice mage")], [{task: "Mana control", requirement: 400}, {task: "Student", requirement: 10}]),
    "Mage": new TaskRequirement([getTaskElement("Mage")], [{task: "Mana control", requirement: 700}, {task: "Apprentice mage", requirement: 10}]),
    "Wizard": new TaskRequirement([getTaskElement("Wizard")], [{task: "Mana control", requirement: 1000}, {task: "Mage", requirement: 10}]),
    "Master wizard": new TaskRequirement([getTaskElement("Master wizard")], [{task: "Mana control", requirement: 1500}, {task: "Wizard", requirement: 10}]),
    "Chairman": new TaskRequirement([getTaskElement("Chairman")], [{task: "Mana control", requirement: 2000}, {task: "Master wizard", requirement: 10}]),
    "Illustrious Chairman": new TaskRequirement([getTaskElement("Illustrious Chairman")], [{task: "Mana control", requirement: 3000}, {task: "Chairman", requirement: 1000}]),

    //The Order of Discovery
    "Junior Caretaker": new TaskRequirement([getTaskElement("Junior Caretaker")], 
                                            [{task: "Concentration", requirement: 200}, {task: "Meditation", requirement: 200}, {task: "Productivity", requirement: "500"}]),
    "Lead Caretaker": new TaskRequirement([getTaskElement("Lead Caretaker")], [{task: "Junior Caretaker", requirement: 10}]),
    "Freshman": new TaskRequirement([getTaskElement("Freshman")], [{task: "Lead Caretaker", requirement: 10}]),
    "Sophomore": new TaskRequirement([getTaskElement("Sophomore")], [{task: "Freshman", requirement: 10}]),
    "Junior": new TaskRequirement([getTaskElement("Junior")], [{task: "Sophomore", requirement: 10}]),
    "Senior": new TaskRequirement([getTaskElement("Senior")], [{task: "Junior", requirement: 10}]),
    "Probation": new TaskRequirement([getTaskElement("Probation")], [{task: "Senior", requirement: 10}]),

    //Nobility
    "Baronet": new TaskRequirement([getTaskElement("Baronet")], [{task: "Elite knight", requirement: 10}]),
    "Baron": new TaskRequirement([getTaskElement("Baron")], [{task: "Baronet", requirement: 10}]),
    "Vice Count": new TaskRequirement([getTaskElement("Vice Count")], [{task: "Baron", requirement: 10}]),
    "Count": new TaskRequirement([getTaskElement("Count")], [{task: "Vice Count", requirement: 10}]),
    "Duke": new TaskRequirement([getTaskElement("Duke")], [{task: "Count", requirement: 10}]),
    "Grand Duke": new TaskRequirement([getTaskElement("Grand Duke")], [{task: "Duke", requirement: 10}]),
    "Arch Duke": new TaskRequirement([getTaskElement("Arch Duke")], [{task: "Grand Duke", requirement: 10}]),
    "Lord": new TaskRequirement([getTaskElement("Lord")], [{task: "Arch Duke", requirement: 10}]),
    "High Lord": new TaskRequirement([getTaskElement("High Lord")], [{task: "Lord", requirement: 10}]),
    "King": new TaskRequirement([getTaskElement("King")], [{task: "High Lord", requirement: 10}]),
    "High King": new TaskRequirement([getTaskElement("High King")], [{task: "King", requirement: 10}]),
    "Emperor of Mankind": new TaskRequirement([getTaskElement("Emperor of Mankind")], [{task: "High King", requirement: 10}]),

    //Fundamentals
    "Concentration": new TaskRequirement([getTaskElement("Concentration")], []),
    "Productivity": new TaskRequirement([getTaskElement("Productivity")], [{task: "Concentration", requirement: 5}]),
    "Bargaining": new TaskRequirement([getTaskElement("Bargaining")], [{task: "Concentration", requirement: 20}]),
    "Meditation": new TaskRequirement([getTaskElement("Meditation")], [{task: "Concentration", requirement: 30}, {task: "Productivity", requirement: 20}]),

    //Combat
    "Strength": new TaskRequirement([getTaskElement("Strength")], []),
    "Battle tactics": new TaskRequirement([getTaskElement("Battle tactics")], [{task: "Concentration", requirement: 20}]),
    "Muscle memory": new TaskRequirement([getTaskElement("Muscle memory")], [{task: "Concentration", requirement: 30}, {task: "Strength", requirement: 30}]),

    //Magic
    "Mana control": new TaskRequirement([getTaskElement("Mana control")], [{task: "Concentration", requirement: 200}, {task: "Meditation", requirement: 200}]),
    "Immortality": new TaskRequirement([getTaskElement("Immortality")], [{task: "Apprentice mage", requirement: 10}]),
    "Time warping": new TaskRequirement([getTaskElement("Time warping")], [{task: "Mage", requirement: 10}]),
    "Super immortality": new TaskRequirement([getTaskElement("Super immortality")], [{task: "Chairman", requirement: 1000}]),

    //Mind
    //"Novel Knowledge": new TaskRequirement([getTaskElement("Novel Knowledge")], [{task: "Concentration", requirement: 700}, {task: "Meditation", requirement: 700}]),
    "Unusual Insight": new TaskRequirement([getTaskElement("Unusual Insight")], [{task: "Meditation", requirement: 900}, {task: "Novel Knowledge", requirement: 900}]),
    "Trade Psychology": new TaskRequirement([getTaskElement("Trade Psychology")], [{task: "Unusual Insight", requirement: 900}, {task: "Probation", requirement: 40}]),
    "Flow": new TaskRequirement([getTaskElement("Flow")], [{task: "Unusual Insight", requirement: 1500}, {task: "Probation", requirement: 40}]),
    "Magical Engineering": new TaskRequirement([getTaskElement("Magical Engineering")], [{task: "Chairman", requirement: 1}]),
    "Scales Of Thought": new TaskRequirement([getTaskElement("Scales Of Thought")], [{task: "Chairman", requirement: 15}]),
    "Magical Biology": new TaskRequirement([getTaskElement("Magical Biology")], [{task: "Chairman", requirement: 150}]),

    //Dark magic
    "Dark influence": new EvilRequirement([getTaskElement("Dark influence")], [{requirement: 1}]),
    "Evil control": new EvilRequirement([getTaskElement("Evil control")], [{requirement: 1}]),
    "Intimidation": new EvilRequirement([getTaskElement("Intimidation")], [{requirement: 1}]),
    "Demon training": new EvilRequirement([getTaskElement("Demon training")], [{requirement: 25}]),
    "Blood meditation": new EvilRequirement([getTaskElement("Blood meditation")], [{requirement: 75}]),
    "Demon's wealth": new EvilRequirement([getTaskElement("Demon's wealth")], [{requirement: 500}]),


    //Properties
    "Homeless": new CoinRequirement([getItemElement("Homeless")], [{requirement: 0}]),
    "Tent": new CoinRequirement([getItemElement("Tent")], [{requirement: 0}]),
    "Wooden hut": new CoinRequirement([getItemElement("Wooden hut")], [{requirement: gameData.itemData["Wooden hut"].getExpense() * 100}]),
    "Cottage": new CoinRequirement([getItemElement("Cottage")], [{requirement: gameData.itemData["Cottage"].getExpense() * 100}]),
    "House": new CoinRequirement([getItemElement("House")], [{requirement: gameData.itemData["House"].getExpense() * 100}]),
    "Large house": new CoinRequirement([getItemElement("Large house")], [{requirement: gameData.itemData["Large house"].getExpense() * 100}]),
    "Small Manor": new CoinRequirement([getItemElement("Small Manor")], [{requirement: gameData.itemData["Small Manor"].getExpense() * 100}]),
    "Small palace": new CoinRequirement([getItemElement("Small palace")], [{requirement: gameData.itemData["Small palace"].getExpense() * 100}]),
    "Grand palace": new CoinRequirement([getItemElement("Grand palace")], [{requirement: gameData.itemData["Grand palace"].getExpense() * 100}]),

    //Misc
    "Book": new CoinRequirement([getItemElement("Book")], [{requirement: 0}]),
    "Rag Clothing": new CoinRequirement([getItemElement("Rag Clothing")], [{requirement: 10}]),
    "Dumbbells": new CoinRequirement([getItemElement("Dumbbells")], [{requirement: gameData.itemData["Dumbbells"].getExpense() * 100}]),
    "Personal squire": new CoinRequirement([getItemElement("Personal squire")], [{requirement: gameData.itemData["Personal squire"].getExpense() * 100}]),
    "Steel longsword": new CoinRequirement([getItemElement("Steel longsword")], [{requirement: gameData.itemData["Steel longsword"].getExpense() * 100}]),
    "Butler": new CoinRequirement([getItemElement("Butler")], [{requirement: gameData.itemData["Butler"].getExpense() * 100}]),
    "Sapphire charm": new CoinRequirement([getItemElement("Sapphire charm")], [{requirement: gameData.itemData["Sapphire charm"].getExpense() * 100}]),
    "Study desk": new CoinRequirement([getItemElement("Study desk")], [{requirement: gameData.itemData["Study desk"].getExpense() * 100}]),
    "Library": new CoinRequirement([getItemElement("Library")], [{requirement: gameData.itemData["Library"].getExpense() * 100}]), 
    "Small Field": new TaskRequirement([getItemElement("Small Field")], [{task: "Farmer", requirement: 25}]),
    "Basic Farm Tools": new TaskRequirement([getItemElement("Basic Farm Tools")], [{task: "Farmer", requirement: 10}]),
    "Cheap Fishing Rod": new TaskRequirement([getItemElement("Cheap Fishing Rod")], [{task: "Fisherman", requirement: 10}]),
    "Miner's Lantern": new TaskRequirement([getItemElement("Miner's Lantern")], [{task: "Miner", requirement: 10}]),
    "Crappy Anvil": new TaskRequirement([getItemElement("Crappy Anvil")], [{task: "Blacksmith", requirement: 10}]),
    "Breech Bellows": new TaskRequirement([getItemElement("Breech Bellows")], [{task: "Blacksmith", requirement: 25}]),
    "Pack Horse": new TaskRequirement([getItemElement("Pack Horse")], [{task: "Merchant", requirement: 10}]),
    "Small Shop": new TaskRequirement([getItemElement("Small Shop")], [{task: "Merchant", requirement: 75}]),
    "Weapon Outlet": new TaskRequirement([getItemElement("Weapon Outlet")], [{task: "Merchant", requirement: 200}]),
    "Ox-driven Plow": new TaskRequirement([getItemElement("Ox-driven Plow")], [{task: "Farmer", requirement: 75}]),
    "Livestock-derived Fertilizer": new TaskRequirement([getItemElement("Livestock-derived Fertilizer")], [{task: "Farmer", requirement: 85}]),
}

tempData["requirements"] = {};
for (key in gameData.requirements) {
    var requirement = gameData.requirements[key];
    tempData["requirements"][key] = requirement;
}

loadGameData();
bindObjectFunctionContexts();
registerEventListeners();
setCustomEffects();
addMultipliers();

setTab(jobTabButton, "jobs");

update();
setInterval(update, 1000 / updateSpeed);
setInterval(saveGameData, 3000);
setInterval(setSkillWithLowestMaxXp, 1000);
