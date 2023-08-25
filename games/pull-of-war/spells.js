function updateManaGain() {
	if(curMana === maxMana) {
		maxMana += manaGain/480; 
		curMana = maxMana
	}
	if(curMana < maxMana) {
		curMana+= manaGain; //mana gain
	}
	if(curMana >= maxMana) {
		curMana = maxMana
	}
	
	updateManaVisual()
}

function clickedSpell(num) {
	if(holdingSpell >= 0) {
		document.getElementById("spell"+holdingSpell).style.border="2px solid white"
		if(holdingSpell != num) {
			document.getElementById("spell"+num).style.border="2px solid red"
			holdingSpell = num;
		} else {
			holdingSpell = -1
		}
	}
	else {
		document.getElementById("spell"+num).style.border="2px solid red"
		holdingSpell = num;
	}
}

function clickAUnit(id) {
	unit = getUnitById(id)
	if(unit.direction != "right" && holdingSpell >= 0 && curMana >= spellCosts[holdingSpell]) {
		document.getElementById("spell"+holdingSpell).style.border="2px solid white"
		updateSpellVisuals()
		if(holdingSpell == 0) {
			spendMana(spellCosts[0])
			unit.actualMaxHealth -= 5
			if(unit.curHealth > unit.actualMaxHealth)
				unit.curHealth = unit.actualMaxHealth
			unit.takeDamage(17)
			holdingSpell = -1
		}
		if(holdingSpell == 1) {
			spendMana(spellCosts[1])
			chainDamage(unit, 18)
			holdingSpell = -1
		}
		updateHover(id)
		document.getElementById("count"+id).innerHTML = unit.unitCount
		
		handleDeadUnit(unit)
	}
}

function chainDamage(unit, damage) {
	firstToTakeDamage = findNearestList(unit)[1]
	second= findNearestList(firstToTakeDamage)
	if(second && second.length > 1) {
		secondsIndex = second[1] != firstToTakeDamage && second[1] != unit ? 1 :
					(second[2] != firstToTakeDamage && second[2] != unit ? 2 : 3)
		if(second[secondsIndex]) {
			drawLightning(firstToTakeDamage, second[secondsIndex])
			second[secondsIndex].takeDamage(damage)
			handleDeadUnit(second[secondsIndex])
		}
	}
	if(firstToTakeDamage) {
		drawLightning(unit, firstToTakeDamage)
		firstToTakeDamage.takeDamage(damage)
		handleDeadUnit(firstToTakeDamage)
	}
	unit.takeDamage(damage)
	redrawStoredLines(false)
}

function spendMana(amount) {
	curMana -= amount
	spellExp += amount
  levelUp()
	updateSpellVisuals()
	updateManaVisual()
}

function levelUp() {
	if(spellExp >= expNeededToLevel) {
		spellLevel++
		spellExp -= expNeededToLevel
		expNeededToLevel = expNeededToLevel*1.2*Math.pow(1.02, spellLevel)
		maxMana+=10
		curMana+=10
		manaGain += .002
		for(q = 0; q < spellCosts.length; q++) {
			spellCosts[q] *= .99;
		}
  }
}

function updateSpellVisuals() {
	document.getElementById("spellCost0").innerHTML = round2(spellCosts[0])
	document.getElementById("spellCost1").innerHTML = round2(spellCosts[1])
	document.getElementById("spellLevel").innerHTML = spellLevel
	document.getElementById("curSpellExp").innerHTML = round(spellExp)
	document.getElementById("expNeeded").innerHTML = round(expNeededToLevel)
	document.getElementById("curExpBar").style.width = spellExp / expNeededToLevel*100+"%"
}