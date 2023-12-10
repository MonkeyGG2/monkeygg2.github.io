function enterChallenge(challengeName) {
    rebirthReset(false)
    gameData.active_challenge = challengeName

    for (const taskName in gameData.taskData) {
        const task = gameData.taskData[taskName]
        task.maxLevel = 0
    }
}

function exitChallenge() {
    setChallengeProgress()
    rebirthReset(false)    
    gameData.active_challenge = ""

    for (const taskName in gameData.taskData) {
        const task = gameData.taskData[taskName]
        task.maxLevel = 0
    }
}

function setChallengeProgress() {
    if (gameData.active_challenge == "an_unhappy_life") {
        gameData.challenges.an_unhappy_life = Math.max(gameData.challenges.an_unhappy_life, getHappiness())
    }
    if (gameData.active_challenge == "rich_and_the_poor") {
        gameData.challenges.rich_and_the_poor = Math.max(gameData.challenges.rich_and_the_poor, getIncome())
    }
    if (gameData.active_challenge == "time_does_not_fly") {
        gameData.challenges.time_does_not_fly = Math.max(gameData.challenges.time_does_not_fly, getUnpausedGameSpeed() / baseGameSpeed)
    }
    if (gameData.active_challenge == "dance_with_the_devil") {
        gameData.challenges.dance_with_the_devil = Math.max(gameData.challenges.dance_with_the_devil, Math.max(0, getEvilGain() - 10))
    }
    if (gameData.active_challenge == "legends_never_die") {
        gameData.challenges.legends_never_die = Math.max(gameData.challenges.legends_never_die, gameData.taskData["Chairman"].level)
    }
}

function getChallengeBonus(challenge_name, current = false) {
    if (challenge_name == "an_unhappy_life") {
        return softcap(Math.pow((current ? getHappiness() : gameData.challenges.an_unhappy_life) + 1, 0.31), 500, 0.45)
    }
    if (challenge_name == "rich_and_the_poor") {
        return softcap(Math.pow((current ? getIncome() : gameData.challenges.rich_and_the_poor) + 1, 0.25), 25, 0.55)
    }
    if (challenge_name == "time_does_not_fly") {
        return softcap(Math.pow((current ? getUnpausedGameSpeed() / baseGameSpeed : gameData.challenges.time_does_not_fly) + 1, 0.055), 2)
    }
    if (challenge_name == "dance_with_the_devil") {
        return softcap(Math.pow((current ? Math.max(0, getEvilGain() - 10) : gameData.challenges.dance_with_the_devil) + 1, 0.09), 2, 0.75)
    }
    if (challenge_name == "legends_never_die") {
        return softcap(Math.pow((current ? gameData.taskData["Chairman"].level : gameData.challenges.legends_never_die) + 1, 0.85), 25, 0.6)
    }
}

function getChallengeGoal(challenge_name) {
    if (challenge_name == "an_unhappy_life") {
        return gameData.challenges.an_unhappy_life + 1
    }
    if (challenge_name == "rich_and_the_poor") {
        return gameData.challenges.rich_and_the_poor + 1
    }
    if (challenge_name == "time_does_not_fly") {
        return Math.max(1, gameData.challenges.time_does_not_fly + 0.1)
    }
    if (challenge_name == "dance_with_the_devil") {
        return gameData.challenges.dance_with_the_devil + 10.1
    }
    if (challenge_name == "legends_never_die") {
        return gameData.challenges.legends_never_die + 1
    }
}