
const display = document.getElementById("scrambleText");
const buttonContainer = document.getElementById("buttonContainer");
const startBtn = document.getElementById("startBtn");
const scrambleAudio = document.getElementById("scrambleAudio");

const achievedSpan = document.getElementById("achievedCount");
const failedSpan = document.getElementById("failedCount");
const totalSpan = document.getElementById("totalCount");

const scrambleSpeed = 50;
const scrambleDuration = 0.5;
const revealDuration = 1.5;
const chars = "ABCDEF@HIJ_LM%OPQR^WX#YZa#b+cdefgh*iqrxyz0123456789";
const chars2 = "ABCDEF@HIJ_LM%OP";
const chars3 = "ABCDEFdefgh*iqrxyz0123456789";
const charS4 = "ABCDEF@HIJLM%defgh*iqrxyz0123456789";

//A bunch of random variables to track state,
//Don't be cheating now
let achieved = 0;
let failed = 0;
let total = 0;
let canResolve = false;
let clickCount = 0;
let activeScrambleId = 0;
let lastMessage = null;
