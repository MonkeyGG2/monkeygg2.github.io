let isCtrlPressed = false;

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'q') {
    document.addEventListener('keydown', keyPressHandler);
  }
});

function keyPressHandler(event) {
  if (event.key >= '1' && event.key <= '6') {
    handleOption(event.key);
  } else {
    document.removeEventListener('keydown', keyPressHandler);
    console.log('Removed listener for keys 1-6');
  }
}

window.saveData = localStorage.getItem('RetroBowl.0.savedata.ini');

const handleOption = (option) => {
    const optionNumber = parseInt(option);
        switch (optionNumber) {
            case 1:
                handleAction("credits", "How many credits would you like?", addCredits);
                break;
            case 2:
                handleAction("salary", "What would you like your new salary cap to be?", changeSalaryCap);
                break;
            case 3:
                handleAction("draft", "How many 1st round draft picks would you like?", changeDraft);
                break;
            case 4:
                handleAction("stadium", "What level stadium do you want (0-10)?", changeStadiumLvl);
                break;
            case 5:
                handleAction("training", "What level training facilities do you want (0-10)?", changeTrainingLvl);
                break;
            case 6:
                handleAction("rehab", "What level rehab facilities do you want (0-10)?", changeRehabLvl);
                break;
        }
}

const handleAction = (actionName, promptText, actionFunction) => {
    const newValue = prompt(promptText);
    if (!isNaN(newValue) && newValue != null) {
        actionFunction(newValue);
        window.location.reload();
    }
};

const addCredits = (count) => {
    updateSaveData(/coach_credit="[0-9]+"/g, `coach_credit="${count}"`);
}

const changeSalaryCap = (salary) => {
    updateSaveData(/salary_cap="[0-9]+"/, `salary_cap="${salary}"`);
}

const changeDraft = (picks) => {
    updateSaveData(/draft_picks_0="[0-9]+"/, `draft_picks_0="${picks}"`);
}

const changeStadiumLvl = (lvl) => {
    updateSaveData(/facility_upgraded_stadium="[0-9]+"/, `facility_upgraded_stadium="${lvl}"`);
    updateSaveData(/facility_stadium="[0-9]+"/, `facility_stadium="${lvl}"`);
}

const changeTrainingLvl = (lvl) => {
    updateSaveData(/facility_upgraded_training="[0-9]+"/, `facility_upgraded_training="${lvl}"`);
    updateSaveData(/facility_training="[0-9]+"/, `facility_training="${lvl}"`);
}

const changeRehabLvl = (lvl) => {
    updateSaveData(/facility_upgraded_rehab="[0-9]+"/, `facility_upgraded_rehab="${lvl}"`);
    updateSaveData(/facility_rehab="[0-9]+"/, `facility_rehab="${lvl}"`);
}

const updateSaveData = (pattern, replacement) => {
    const newSave = window.saveData.replace(pattern, replacement);
    localStorage.setItem('RetroBowl.0.savedata.ini', newSave);
}