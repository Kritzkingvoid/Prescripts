//HEY YOU FOUND THE PRESCRIPTS
//DON'T BE ADDING PRESCRIPTS OR I WILL SEND THE WILL OF THE CITY
//ON YOU ASS
// <!-- ⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
// ⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
// ⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
// ⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
// ⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
// ⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
// ⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
// ⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
// ⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
// ⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
// ⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄  -->

function createMessages() {
  return [
    // COMMON (early) //RANDOM BULLLSHITS
    { text: "HAVE ALL OF YOUR SINNERS TARGET AN ENEMY WITH THE LOWEST HEALTH", weight: 40, minCount: 0, amounts: 2 },
    { text: "SINNERS WITH THE HIGHEST SPEED, TARGET THE SLOWEST ENEMY SLOT", weight: 45, minCount: 0, amounts: 2 },
    { text: "SINNERS WHO ROLLED EVEN-NUMBERED SPEED, CAN ONLY DEAL DAMAGE TO ODD-NUMBERED SLOTS", weight: 35, minCount: 0, amounts: 2 },
    { text: "SINNERS WHO ROLLED ODD-NUMBERED SPEED, CANNOT DEAL DAMAGE TO EVEN-NUMBERED SLOTS", weight: 35, minCount: 0, amounts: 2 },
    { text: "DON'T LET A SINNER TAKE MORE THAN 20 DAMAGE THIS TURN", weight: 40, minCount: 0, amounts: 1 },
    { text: "HAVE YOUR FASTEST SINNERS CLASH WITH THE SLOWEST ENEMY SLOT", weight: 40, minCount: 0, amounts: 2 },
    { text: "HAVE ALL OF YOUR SINNERS TARGET A SINGLE SLOT", weight: 45, minCount: 0, amounts: 3 },
    { text: "USE WINRATE COMMAND THIS TURN", weight: 45, minCount: 0, amounts: 2 },
    { text: "USE DAMAGE COMMAND THIS TURN", weight: 45, minCount: 0, amounts: 2 },
    { text: "ACTIVATE A ABSOLUTE RESONANCE THIS TURN", weight: 40, minCount: 0, amounts: 3 },
    { text: "DON'T USE ANY SKILL_3 THIS TURN", weight: 45, minCount: 0, amounts: 3 },
    { text: "HAVE A SINNER TAKE DAMAGE THIS TURN", weight: 20, minCount: 0, amounts: 3 },

    // UNCOMMON (mid) / NOT REALLY BAD YET
    { text: "USE AN AOE EGO AND HAVE IT ONLY DAMAGE ONE ENEMY OR ONE PART", weight: 10, minCount: 4, amounts: 2 },
    { text: "INFLICT FIVE DIFFERENT DEBUFFS NEXT TURN", weight: 20, minCount: 3, amounts: 3 },
    { text: "HAVE ALL OF YOUR SINNERS USE A DEFENSE SKILL", weight: 20, minCount: 1, amounts: 4 },
    { text: "ACTIVATE A RESONANCE PASSIVE THIS TURN", weight: 10, minCount: 1, amounts: 3 },
    { text: "DEAL AN OVERALL 100 DAMAGE THIS TURN", weight: 30, minCount: 2, amounts: 2 },
    { text: "USE AN E.G.O SKILL THIS TURN", weight: 10, minCount: 2, amounts: 5 },
    { text: "DON'T CLASH WITH ANY OF YOUR SINNERS", weight: 10, minCount: 2, amounts: 5 },
    { text: "DON'T KILL/STAGGER ANY ENEMIES THIS TURN", weight: 10, minCount: 2, amounts: 5 },
    { text: "REPEAT THE LAST PRESCRIPT", weight: 20, minCount: 3, amounts: 5 },
    { text: "ATTACK WITH SINNERS WITH SPEED TOTALING NO GREATER THAN 14", weight: 20, minCount: 3, amounts: 5 },
    { text: "STAGGER, PART_BREAK, OR DEAL 500 DAMAGE TO AN ENEMY THIS TURN", weight: 10, minCount: 4, amounts: 5 },
    { text: "SINNERS WITH SPEED LOWER OR EQUAL TO 'E', USE AN EGO SKILL", weight: 20, minCount: 5, amounts: 5 },
    { text: "CHAIN ATLEAST 3 SKILL SLOTS WITH THE SAME SIN-AFFINITY", weight: 10, minCount: 5, amounts: 5 },
    { text: "USE AN EGO THAT BUFFS YOUR ENTIRE TEAM THIS OR NEXT TURN", weight: 5, minCount: 7, amounts: 1 },

    // RARE (late) DIE ALREADY
    { text: "GENERATE FOUR UNIQUE SIN RESOURCES THIS TURN", weight: 20, minCount: 6, amounts: 3 },
    { text: "CHANGE 1 SINNERS RESISTANCE TYPE TO BE FATAL WITH ONE OF THE ENEMIES SKILLS", weight: 5, minCount: 8, amounts: 3 },
    { text: "HAVE A SINNER CORRODE NEXT TURN", weight: 10, minCount: 6, amounts: 3 },
    { text: "HAVE A SINNER DIE NEXT TURN", weight: 5, minCount: 9, amounts: 3 },
    { text: "DON'T USE MORE THAN 2 SKILL_1 THIS TURN", weight: 20, minCount: 6, amounts: 3 },
    { text: "USE AN OVERCLOCK E.G.O THIS TURN AND HAVE THAT SINNER CORRODE THIS OR NEXT TURN", weight: 5, minCount: 6, amounts: 3 },
    { text: "DEAL AN OVERALL 300 DAMAGE THIS TURN", weight: 30, minCount: 5, amounts: 3 },
    { text: "HAVE NO MORE THAN 200 SANITY IN-TOTAL NEXT TURN", weight: 10, minCount: 7, amounts: 3 },
    { text: "HAVE A TOTAL OF 20 STATUS EFFECTS [BUFF/DEBUFFS] ON YOUR SINNERS NEXT TURN ", weight: 10, minCount: 7, amounts: 3 },

    // VERY RARE / MEMES
    { text: "ACTIVATE AN EGO THAT WOULD DIRECTLY/INDIRECTLY KILL AN ALLY ", weight: 5, minCount: 8, amounts: 10 },
    { text: "USE TEN OR MORE SIN RESOURCES THIS TURN", weight: 20, minCount: 8, amounts: 10 },
    { text: "USE AN OVERCLOCK E.G.O THIS TURN", weight: 5, minCount: 3, amounts: 10 },
    { text: "PAT YOUR SLOWEST SINNERS ON THE HEAD FOR 3 SECOND EACH", weight: 5, minCount: 3, amounts: 1 },
    { text: "Uhm... Can you buy me Ice Cream? ~ Sora", weight: 5, minCount: 50, amounts: 1 },
  ];
}

let messages = createMessages();

const recentMessagesSize = 5;
const recentMessages = [];

function pickMessage() {
    let eligible = messages.filter(m => clickCount >= m.minCount && m.amounts > 0);
    
    // If no eligible messages are found, reset the list and try again
    if (!eligible.length) {
        messages = createMessages();
        eligible = messages.filter(m => clickCount >= m.minCount && m.amounts > 0);
        
        // If still no eligible messages (shouldn't happen unless logic is broken), return null
        if (!eligible.length) {
            return null;
        }
    }
    let picked = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    while (attempts < MAX_ATTEMPTS) {
        attempts++;

        const totalWeight = eligible.reduce((s, m) => s + m.weight, 0);
        let roll = Math.random() * totalWeight;

        for (const m of eligible) {
            roll -= m.weight;
            if (roll <= 0) {
                picked = m;
                break;
            }
        }

        if (
            picked &&
            picked !== lastMessage &&
            !recentMessages.includes(picked)
        ) {
            break;
        }

        picked = null;
    }

    // If we failed to pick a valid message after max attempts, just pick the first eligible one
    if (!picked && eligible.length > 0) {
        picked = eligible[0];
    }

    if (!picked){
      return null;  
    } 
    picked.amounts--;

    if (picked.amounts <= 0) {
        const idx = messages.indexOf(picked);
        if (idx !== -1) {
            messages.splice(idx, 1);
        }
    }

    recentMessages.push(picked);
    if (recentMessages.length > recentMessagesSize) {
        recentMessages.shift();
    }

    lastMessage = picked;
    return picked;
}
