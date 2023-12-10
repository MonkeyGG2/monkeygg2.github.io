// Costs Dark Matter
function getDarkOrbGeneratorCost() {
    return 1 + 3 * gameData.dark_matter_shop.dark_orb_generator
}

function buyDarkOrbGenerator() {
    if (gameData.dark_matter >= getDarkOrbGeneratorCost() && getDarkOrbGeneration() != Infinity) {
        gameData.dark_matter -= getDarkOrbGeneratorCost()
        gameData.dark_matter_shop.dark_orb_generator += 1
    }
}

// Costs Dark Orbs
function getADealWithTheChairmanCost() {
    return Math.pow(1e3, gameData.dark_matter_shop.a_deal_with_the_chairman + 1)
}

function buyADealWithTheChairman() {
    if (gameData.dark_orbs >= getADealWithTheChairmanCost() && getADealWithTheChairmanCost() != Infinity) {
        gameData.dark_orbs -= getADealWithTheChairmanCost()
        gameData.dark_matter_shop.a_deal_with_the_chairman += 1
    }
}

function getAGiftFromGodCost() {
    return Math.pow(1e5, gameData.dark_matter_shop.a_gift_from_god + 1)
}

function buyAGiftFromGod() {
    if (gameData.dark_orbs >= getAGiftFromGodCost() && getAGiftFromGodCost() != Infinity) {
        gameData.dark_orbs -= getAGiftFromGodCost()
        gameData.dark_matter_shop.a_gift_from_god += 1
    }
}

function getLifeCoachCost() {
    return Math.pow(1e10, gameData.dark_matter_shop.life_coach + 1)
}

function buyLifeCoach() {
    if (gameData.dark_orbs >= getLifeCoachCost() && getLifeCoachCost() != Infinity) {
        gameData.dark_orbs -= getLifeCoachCost()
        gameData.dark_matter_shop.life_coach += 1
    }
}

function getGottaBeFastCost() {
    return Math.pow(1e15, gameData.dark_matter_shop.gotta_be_fast + 1)
}

function buyGottaBeFast() {
    if (gameData.dark_orbs >= getGottaBeFastCost() && getGottaBeFastCost() != Infinity) {
        gameData.dark_orbs -= getGottaBeFastCost()
        gameData.dark_matter_shop.gotta_be_fast += 1
    } 
}

// Rewards
function getDarkOrbGeneration() {
    if (gameData.dark_matter_shop.dark_orb_generator == 0) return 0

    const darkOrbiter = gameData.requirements["Dark Orbiter"].isCompleted() ? 1e10 : 1

    return Math.pow(100, gameData.dark_matter_shop.dark_orb_generator - 1) * darkOrbiter
}

function getTaaAndMagicXpGain() {
    return Math.pow(3, gameData.dark_matter_shop.a_deal_with_the_chairman)
}

function getAGiftFromGodEssenceGain() {
    return Math.pow(2, gameData.dark_matter_shop.a_gift_from_god)
}

function getLifeCoachIncomeGain() {
    return Math.pow(10, gameData.dark_matter_shop.life_coach)
}

function getGottaBeFastGain() {
    return 1 + 0.05 * gameData.dark_matter_shop.gotta_be_fast
}

// Permanent unlocks
function buyAMiracle() {
    if (getDarkMatter() >= 10) {
        gameData.dark_matter_shop.a_miracle = true
        gameData.dark_matter -= 10
    }
}


// Skill tree
function resetSkillTree() {
    if (confirm("Are you sure that you want to reset your Dark Matter Skills?")) {
        gameData.dark_matter_shop.speed_is_life = 0
        gameData.dark_matter_shop.your_greatest_debt = 0
        gameData.dark_matter_shop.essence_collector = 0
        gameData.dark_matter_shop.explosion_of_the_universe = 0
    }
}

function buySpeedOfLife(number) {
    if (gameData.dark_matter >= 100) {
        gameData.dark_matter -= 100
        gameData.dark_matter_shop.speed_is_life = number
    }
}

function buyYourGreatestDebt(number) {
    if (gameData.dark_matter >= 1000) {
        gameData.dark_matter -= 1000
        gameData.dark_matter_shop.your_greatest_debt = number
    }
}

function buyEssenceCollector(number) {
    if (gameData.dark_matter >= 10000) {
        gameData.dark_matter -= 10000
        gameData.dark_matter_shop.essence_collector = number
    }
}

function buyExplosionOfTheUniverse(number) {
    if (gameData.dark_matter >= 100000) {
        gameData.dark_matter -= 100000
        gameData.dark_matter_shop.explosion_of_the_universe = number
    }
}