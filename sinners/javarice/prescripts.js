const messageLists = [
  {
    name: "Yisang",
    messages: [
      "HAVE ALL OF YOUR SINNERS TARGET AN ENEMY WITH THE LOWEST HEALTH",
      "SINNERS WITH THE HIGHEST SPEED, TARGET THE SLOWEST ENEMY SLOT",
      "DON'T LET A SINNER TAKE MORE THAN 20 DAMAGE THIS TURN"
    ]
  },
  {
    name: "Faust",
    messages: [
      "HAVE ALL OF YOUR SINNERS TARGET A SINGLE SLOT",
      "USE WINRATE COMMAND THIS TURN",
      "USE DAMAGE COMMAND THIS TURN"
    ]
  },
  {
    name: "Donquixote",
    messages: [
      "USE AN AOE EGO AND HAVE IT ONLY DAMAGE ONE ENEMY",
      "INFLICT FIVE DIFFERENT DEBUFFS NEXT TURN"
    ]
  },
  {
    name: "Ryoshu",
    messages: [
      "USE AN AOE EGO AND HAVE IT ONLY DAMAGE ONE ENEMY",
      "INFLICT FIVE DIFFERENT DEBUFFS NEXT TURN"
    ]
  },
  {
    name: "Meursault",
    messages: [
      "USE AN AOE EGO AND HAVE IT ONLY DAMAGE ONE ENEMY",
      "INFLICT FIVE DIFFERENT DEBUFFS NEXT TURN"
    ]
  },
  {
    name: "Hong Lu",
    messages: [
      "USE AN AOE EGO AND HAVE IT ONLY DAMAGE ONE ENEMY",
      "INFLICT FIVE DIFFERENT DEBUFFS NEXT TURN"
    ]
  }
];

let currentListIndex = 0;

/* =======================
   PICKER
======================= */

function pickMessage() {
    if (currentListIndex >= messageLists.length) return null;

    const list = messageLists[currentListIndex];

    if (list.messages.length === 0) {
        currentListIndex++;
        return pickMessage();
    }

    const idx = Math.floor(Math.random() * list.messages.length);
    const message = list.messages.splice(idx, 1)[0];

    currentListIndex++;

    return {
        list: list.name,
        message
    };
}