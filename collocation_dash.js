class CollocationDash {
    constructor() {
        this.verbs = ["make", "do", "take", "have", "give"];
        this.collocations = {
    "make": [
        { phrase: "a decision", hint: "not with 'take'" },
        { phrase: "a mistake", hint: "" },
        { phrase: "a speech", hint: "not with 'give'" },
        { phrase: "progress", hint: "" },
        { phrase: "money", hint: "" },
        { phrase: "a call", hint: "" },
        { phrase: "fun of sb", hint: "" },
        { phrase: "peace with sb", hint: "" },
        { phrase: "a promise", hint: "" },
        { phrase: "a suggestion", hint: "not with 'have'" },
        { phrase: "an appointment", hint: "" },
        { phrase: "an arrangement", hint: "" },
        { phrase: "an attempt", hint: "" },
        { phrase: "an effort", hint: "" },
        { phrase: "a change", hint: "" },
        { phrase: "a confession", hint: "not with 'give'" },
        { phrase: "a difference", hint: "" },
        { phrase: "a discovery", hint: "" },
        { phrase: "a film", hint: "" },
        { phrase: "a fool of sb", hint: "" },
        { phrase: "a fuss", hint: "" },
        { phrase: "a mess", hint: "" },
        { phrase: "a noise", hint: "" },
        { phrase: "a photocopy", hint: "" },
        { phrase: "a purchase", hint: "" },
        { phrase: "a request", hint: "" },
        { phrase: "an impression on sb", hint: "" },
        { phrase: "an excuse", hint: "not with 'have'" },
        { phrase: "a complaint", hint: "not with 'have'" },
        { phrase: "a fortune", hint: "" },
        { phrase: "a list", hint: "" },
        { phrase: "a living", hint: "" },
        { phrase: "a reservation", hint: "" },
        { phrase: "a scene", hint: "" },
        { phrase: "a start", hint: "" },
        { phrase: "a wish", hint: "" },
        { phrase: "sense", hint: "" }
    ],
    "do": [
        { phrase: "an exam", hint: "not with 'take'" },
        { phrase: "the dishes", hint: "" },
        { phrase: "the washing", hint: "" },
        { phrase: "research", hint: "" },
        { phrase: "business", hint: "" },
        { phrase: "better/worse", hint: "" },
        { phrase: "harm/damage", hint: "" },
        { phrase: "nothing", hint: "" },
        { phrase: "one's duty", hint: "" },
        { phrase: "some writing", hint: "" },
        { phrase: "your hair", hint: "" },
        { phrase: "your homework", hint: "" },
        { phrase: "an experiment", hint: "" },
        { phrase: "a degree", hint: "not with 'take'" },
        { phrase: "French at school", hint: "" },
        { phrase: "good/evil", hint: "" },
        { phrase: "judo", hint: "" },
        { phrase: "miles per hour", hint: "" },
        { phrase: "well/badly", hint: "" },
        { phrase: "damage", hint: "" },
        { phrase: "housework", hint: "" },
        { phrase: "paperwork", hint: "" },
        { phrase: "someone a favour", hint: "" },
        { phrase: "the shopping", hint: "" },
        { phrase: "the vacuuming", hint: "" },
        { phrase: "well in an exam", hint: "" }
    ],
    "take": [
        { phrase: "a bath", hint: "not with 'have'" },
        { phrase: "a break", hint: "not with 'have'" },
        { phrase: "a look", hint: "not with 'have'" },
        { phrase: "a nap", hint: "not with 'have'" },
        { phrase: "action", hint: "" },
        { phrase: "a decision", hint: "not with 'make'" },
        { phrase: "a holiday", hint: "not with 'have'" },
        { phrase: "a walk", hint: "not with 'have'" },
        { phrase: "a photo", hint: "" },
        { phrase: "a dislike to sb", hint: "" },
        { phrase: "a deep breath", hint: "" },
        { phrase: "a tablet/pill", hint: "" },
        { phrase: "an exam", hint: "not with 'do'" },
        { phrase: "notes", hint: "not with 'make'" },
        { phrase: "sb's details", hint: "" },
        { phrase: "sb's temperature", hint: "" },
        { phrase: "the bus", hint: "" },
        { phrase: "time", hint: "not with 'have'" },
        { phrase: "an interest in sth", hint: "not with 'have'" },
        { phrase: "advantage of sth", hint: "" },
        { phrase: "effect", hint: "" },
        { phrase: "sth into account", hint: "" },
        { phrase: "offense", hint: "" },
        { phrase: "pride in sth", hint: "" },
        { phrase: "responsibility for sth", hint: "" },
        { phrase: "risks", hint: "" },
        { phrase: "the initiative", hint: "" },
        { phrase: "your time", hint: "" }
    ],
    "have": [
        { phrase: "a bath", hint: "not with 'take'" },
        { phrase: "a break", hint: "not with 'take'" },
        { phrase: "a chat", hint: "" },
        { phrase: "a cold", hint: "" },
        { phrase: "an idea", hint: "" },
        { phrase: "a drink", hint: "" },
        { phrase: "a feeling", hint: "" },
        { phrase: "a heart attack", hint: "" },
        { phrase: "a holiday", hint: "not with 'take'" },
        { phrase: "a look", hint: "not with 'take'" },
        { phrase: "a meeting", hint: "" },
        { phrase: "a nap", hint: "not with 'take'" },
        { phrase: "a party", hint: "not with 'give'" },
        { phrase: "a shock", hint: "" },
        { phrase: "a snack", hint: "" },
        { phrase: "an accident", hint: "" },
        { phrase: "an argument", hint: "" },
        { phrase: "an injury", hint: "" },
        { phrase: "an operation", hint: "not with 'do'" },
        { phrase: "breakfast", hint: "" },
        { phrase: "cancer", hint: "" },
        { phrase: "difficulty", hint: "" },
        { phrase: "fun", hint: "" },
        { phrase: "patience", hint: "" },
        { phrase: "problems", hint: "" },
        { phrase: "time", hint: "not with 'make'" },
        { phrase: "an interest", hint: "not with 'take'" },
        { phrase: "a duty to", hint: "" },
        { phrase: "a laugh", hint: "" },
        { phrase: "a meal", hint: "not with 'make'" },
        { phrase: "a problem with sth", hint: "" },
        { phrase: "a shower", hint: "not with 'take'" },
        { phrase: "doubts", hint: "" },
        { phrase: "sympathy", hint: "" },
        { phrase: "trouble", hint: "not with 'make'" }
    ],
    "give": [
    { phrase: "a speech", hint: "not with 'make'" },
    { phrase: "a party", hint: "not with 'have'" },
    { phrase: "a sign", hint: "not with 'make'" },
    { phrase: "a welcome to sb", hint: "" },
    { phrase: "a push", hint: "" },
    { phrase: "a present", hint: "" },
    { phrase: "a hug", hint: "" },
    { phrase: "sb a compliment", hint: "" },
    { phrase: "sb a chance", hint: "" },
    { phrase: "sb a headache", hint: "" },
    { phrase: "sb a lift", hint: "" },
    { phrase: "sb a present", hint: "" },
    { phrase: "sb a push", hint: "" },
    { phrase: "sb a shock", hint: "" },
    { phrase: "sb an answer", hint: "" },
    { phrase: "sb an idea", hint: "" },
    { phrase: "sb help", hint: "" },
    { phrase: "sb lessons", hint: "" },
    { phrase: "sb permission", hint: "" },
    { phrase: "some thought to sth", hint: "" },
    { phrase: "sth a polish", hint: "" },
    { phrase: "the impression that", hint: "not with 'have'" },
    { phrase: "your opinion", hint: "" },
    { phrase: "birth", hint: "" },
    { phrase: "directions", hint: "" },
    { phrase: "priority to sth", hint: "" }
]

};
        this.roundTime = 25;
        this.round = 1;
        this.score = 0;
        this.wrongAnswers = [];  // ✅ Initialize wrong answers array
        this.initUI();
    }

    initUI() {
        document.body.innerHTML = `
  <style>
      .verb-column.incorrect {
          background-color: #ff4d4d; /* Red flash */
          transition: background-color 0.5s ease;
      }
      /* Style the feedback element to make it more visible */
      #feedback {
          font-size: 20px;
          font-weight: bold;
          color: #FFD700;           /* Gold color for visibility */
          background: rgba(0, 0, 0, 0.7);
          padding: 10px;
          border-radius: 5px;
          margin-top: 10px;
          min-height: 40px;         /* Reserve space to prevent layout shift */
      }
  </style>
  <div id="game-container">
      <h1>Collocation Dash</h1>
      <div id="verb-columns" class="drop-zone"></div>
      <div id="draggable-words"></div>
      <p id="feedback"></p>  <!-- Moved feedback below the words -->
      <p>Round: <span id="round">1</span></p>
      <p>Time left: <span id="timer">25</span>s</p>
      <p>Score: <span id="score">0</span></p>
      <button id="start">Start Game</button>
      <button id="restart" style="display:none;">Restart</button>
  </div>
`;

        document.getElementById("start").addEventListener("click", () => this.startGame());
        document.getElementById("restart").addEventListener("click", () => this.restartGame());
    }

    startGame() {
        document.getElementById("start").style.display = "none";
        document.getElementById("restart").style.display = "block";
        this.nextRound();
    }

    nextRound() {
        if (this.roundTime < 5) {
            alert("Game Over! Final Score: " + this.score);
            return;
        }
        
        document.getElementById("round").textContent = this.round;
        document.getElementById("timer").textContent = this.roundTime;
        document.getElementById("score").textContent = this.score;
        this.populateGameBoard();
        this.startTimer();
    }

    populateGameBoard() {
    const verbColumns = document.getElementById("verb-columns");
    const draggableWords = document.getElementById("draggable-words");
    verbColumns.innerHTML = "";
    draggableWords.innerHTML = "";

    // Create verb columns
    this.verbs.forEach((verb) => {
        const column = document.createElement("div");
        column.classList.add("verb-column");
        column.textContent = verb;
        column.dataset.verb = verb;
        column.addEventListener("dragover", (e) => this.allowDrop(e));
        column.addEventListener("drop", (e) => this.dropWord(e));
        verbColumns.appendChild(column);
    });

    // Select 5 unique collocations to test in the current round
    let selectedPhrases = [];
    while (selectedPhrases.length < 5) {
        const randomVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        const randomItem = this.collocations[randomVerb][Math.floor(Math.random() * this.collocations[randomVerb].length)];

        // Ensure no duplicates
        if (!selectedPhrases.find((entry) => entry.phrase === randomItem.phrase)) {
            selectedPhrases.push({ verb: randomVerb, phrase: randomItem.phrase, hint: randomItem.hint });
        }
    }

    // Display draggable phrases
    selectedPhrases.forEach(({ verb, phrase, hint }) => {
        const word = document.createElement("div");
        word.classList.add("draggable-word");
        word.innerHTML = `<strong>${phrase}</strong><br><small>${hint}</small>`;
        word.dataset.correctVerb = verb;
        word.draggable = true;
        word.addEventListener("dragstart", (e) => this.dragStart(e));
        draggableWords.appendChild(word);
    });
}


    startTimer() {
    if (this.timer) {
        clearInterval(this.timer); // Clear any previous timer
    }

    let timeLeft = this.roundTime;
    document.getElementById("timer").textContent = timeLeft;

    this.timer = setInterval(() => {
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(this.timer); // Stop the timer
            this.endGame(); // 🚨 Force the game to end at 0
            return; // Exit the function to prevent further execution
        }

        timeLeft--; // Decrement the timer
    }, 1000);
}






    dragStart(event) {
    const target = event.target;
    if (target && target.dataset.correctVerb) {
        event.dataTransfer.setData("text", target.dataset.correctVerb);
        target.classList.add("dragging");
    } else {
        console.error("Drag start failed: Missing correctVerb data.");
    }
}


    allowDrop(event) {
        event.preventDefault();
    }

    dropWord(event) {
  const draggedWord = document.querySelector(".dragging");
  if (!draggedWord) {
    console.error("Drop failed: No word is being dragged.");
    return;
  }
  // Use event.currentTarget to reliably reference the drop target
  const dropTarget = event.currentTarget;
  const targetVerb = dropTarget.dataset.verb;
  if (!targetVerb) {
    console.error("Drop failed: Invalid drop target.");
    return;
  }
  const correctVerb = draggedWord.dataset.correctVerb;
  
  if (targetVerb === correctVerb) {
    // Correct drop:
    draggedWord.remove();
    this.score += 10;
    document.getElementById("score").textContent = this.score;

    // Display feedback for a correct answer:
    document.getElementById("feedback").textContent = "Correct!";
    dropTarget.classList.add("correct-flash");
    setTimeout(() => {
      dropTarget.classList.remove("correct-flash");
      // Clear the feedback after 1 second:
      document.getElementById("feedback").textContent = "";
    }, 1000);
  } else {
    // Incorrect drop:
    dropTarget.classList.add("incorrect");
    this.score -= 5;
    document.getElementById("score").textContent = this.score;
    const phrase = draggedWord.querySelector("strong").textContent.trim();
    if (!this.wrongAnswers.some(item => item.phrase === phrase)) {
      this.wrongAnswers.push({ selected: targetVerb, correct: correctVerb, phrase });
    }
    document.getElementById("feedback").textContent = "Try again!";
    setTimeout(() => {
      dropTarget.classList.remove("incorrect");
      document.getElementById("feedback").textContent = "";
    }, 500);
  }
  
  draggedWord.classList.remove("dragging");
  this.checkRoundCompletion();
}





   checkRoundCompletion() {
    const remainingWords = document.querySelectorAll(".draggable-word");
    console.log("Remaining draggable words:", remainingWords.length);  // Debug output
    if (this.roundTime <= 0) {
        this.endGame();
        return;
    }
    if (remainingWords.length === 0) {
        clearInterval(this.timer);
        this.round++;
        this.roundTime = Math.max(5, this.roundTime - 1);
        this.nextRound();
    }
}


   endGame() {
    console.log("💀 Game Over: Timer reached 0"); 
    this.gameActive = false;
    clearInterval(this.timer);

    if (!this.wrongAnswers) {
        this.wrongAnswers = [];
    }

    let message = `Game Over! You ran out of time.\nFinal Score: ${this.score}`;

    if (this.wrongAnswers.length > 0) {
        message += "\n\nReview your mistakes:\n";
        this.wrongAnswers.forEach(({ selected, correct, phrase }) => {
            message += `\nYou selected '${selected} ${phrase}', the correct answer is '${correct} ${phrase}'.`;
        });
    } else {
        message += "\n\nGreat job! You didn't make any mistakes.";
    }

    alert(message);

    document.getElementById("draggable-words").innerHTML = "";
    document.getElementById("restart").style.display = "block";
}




    restartGame() {
    this.roundTime = 25;
    this.round = 1;
    this.score = 0;
    this.wrongAnswers = [];  // ✅ Reset mistakes
    this.startGame();
}

}

window.onload = () => new CollocationDash();
