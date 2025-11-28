
const teamData = {
  rcb: {
    name: "Royal Challengers Bengaluru",
    stats: {
      totalMatches: 0,
      wins: 0,
      winRate: "-",
      topPerformer: "-"
    },
    matches: [
      {
        date: "2025-03-30",
        opponent: "CSK",
        result: "Win",
        margin: "18 runs",
        topPerformer: "Virat Kohli"
      },
      {
        date: "2025-04-05",
        opponent: "MI",
        result: "Loss",
        margin: "5 wickets",
        topPerformer: "Tim David"
      },
      {
        date: "2025-04-10",
        opponent: "KKR",
        result: "Win",
        margin: "25 runs",
        topPerformer: "Rajat Patidar"
      }
    ],
    players: {
      kohli: {
        id: "kohli",
        name: "Virat Kohli",
        role: "Right-hand batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
        desc: "Top-order batter and key run scorer.",
        stats: {
          matches: 237,
          runs: 7500,
          strikeRate: 135.5,
          average: 37.8,
          wickets: 4,
          economy: 8.5
        },
        metrics: {
          accuracy: "90%",
          power: "88%",
          consistency: "92%"
        },
        training: []
      },
      patidar: {
        id: "patidar",
        name: "Rajat Patidar",
        role: "Right-hand batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png",
        desc: "Middle-order batter with strong spin game.",
        stats: {
          matches: 45,
          runs: 1200,
          strikeRate: 133.0,
          average: 32.1,
          wickets: 0,
          economy: 0
        },
        metrics: {
          accuracy: "82%",
          power: "80%",
          consistency: "78%"
        },
        training: []
      },
      salt: {
        id: "salt",
        name: "Phil Salt",
        role: "Wicketkeeper-batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1220.png",
        desc: "Aggressive opener and wicketkeeper.",
        stats: {
          matches: 35,
          runs: 950,
          strikeRate: 145.3,
          average: 28.2,
          wickets: 0,
          economy: 0
        },
        metrics: {
          accuracy: "78%",
          power: "90%",
          consistency: "75%"
        },
        training: []
      },
      padikkal: {
        id: "padikkal",
        name: "Devdutt Padikkal",
        role: "Top-order batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/200.png",
        desc: "Elegant left-hand opener.",
        stats: {
          matches: 55,
          runs: 1500,
          strikeRate: 130.0,
          average: 30.5,
          wickets: 0,
          economy: 0
        },
        metrics: {
          accuracy: "84%",
          power: "79%",
          consistency: "80%"
        },
        training: []
      },
      jitesh: {
        id: "jitesh",
        name: "Jitesh Sharma",
        role: "Wicketkeeper-batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1000.png",
        desc: "Finisher and wicketkeeper option.",
        stats: {
          matches: 40,
          runs: 900,
          strikeRate: 142.0,
          average: 26.4,
          wickets: 0,
          economy: 0
        },
        metrics: {
          accuracy: "76%",
          power: "86%",
          consistency: "73%"
        },
        training: []
      },
      hazlewood: {
        id: "hazlewood",
        name: "Josh Hazlewood",
        role: "Right-arm fast bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/36.png",
        desc: "New-ball specialist with bounce and seam.",
        stats: {
          matches: 60,
          runs: 200,
          strikeRate: 95.0,
          average: 10.0,
          wickets: 80,
          economy: 7.8
        },
        metrics: {
          accuracy: "92%",
          power: "85%",
          consistency: "88%"
        },
        training: []
      },
      bhuvi: {
        id: "bhuvi",
        name: "Bhuvneshwar Kumar",
        role: "Right-arm swing bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png",
        desc: "Powerplay and death overs specialist.",
        stats: {
          matches: 150,
          runs: 350,
          strikeRate: 90.0,
          average: 12.0,
          wickets: 160,
          economy: 7.3
        },
        metrics: {
          accuracy: "94%",
          power: "80%",
          consistency: "90%"
        },
        training: []
      },
      krunal: {
        id: "krunal",
        name: "Krunal Pandya",
        role: "All-rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/17.png",
        desc: "Left-arm spin and power-hitting all-rounder.",
        stats: {
          matches: 120,
          runs: 1600,
          strikeRate: 138.0,
          average: 22.5,
          wickets: 80,
          economy: 7.5
        },
        metrics: {
          accuracy: "84%",
          power: "82%",
          consistency: "81%"
        },
        training: []
      },
      timdavid: {
        id: "timdavid",
        name: "Tim David",
        role: "Middle-order power-hitter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/636.png",
        desc: "Explosive finisher in the lower middle order.",
        stats: {
          matches: 50,
          runs: 1100,
          strikeRate: 160.0,
          average: 28.0,
          wickets: 5,
          economy: 9.0
        },
        metrics: {
          accuracy: "75%",
          power: "93%",
          consistency: "72%"
        },
        training: []
      },
      shepherd: {
        id: "shepherd",
        name: "Romario Shepherd",
        role: "All-rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/371.png",
        desc: "Lower-order hitter and seam-bowling all-rounder.",
        stats: {
          matches: 35,
          runs: 550,
          strikeRate: 155.0,
          average: 24.0,
          wickets: 40,
          economy: 8.7
        },
        metrics: {
          accuracy: "80%",
          power: "89%",
          consistency: "77%"
        },
        training: []
      },
      yash: {
        id: "yash",
        name: "Yash Dayal",
        role: "Left-arm fast bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2024/978.png",
        desc: "Young left-arm quick for middle overs.",
        stats: {
          matches: 25,
          runs: 60,
          strikeRate: 90.0,
          average: 8.0,
          wickets: 30,
          economy: 8.3
        },
        metrics: {
          accuracy: "82%",
          power: "83%",
          consistency: "79%"
        },
        training: []
      },
      suyash: {
        id: "suyash",
        name: "Suyash Sharma",
        role: "Leg-spin bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1932.png",
        desc: "Attacking leg-spinner for middle overs.",
        stats: {
          matches: 20,
          runs: 40,
          strikeRate: 85.0,
          average: 6.0,
          wickets: 25,
          economy: 7.9
        },
        metrics: {
          accuracy: "81%",
          power: "76%",
          consistency: "80%"
        },
        training: []
      }
    }
  },

  // Example second team: Mumbai Indians
  mi: {
    name: "Mumbai Indians",
    stats: {
      totalMatches: 14,
      wins: 8,
      winRate: "57%",
      topPerformer: "Rohit Sharma"
    },
    matches: [
      {
        date: "2025-03-29",
        opponent: "RCB",
        result: "Win",
        margin: "5 wickets",
        topPerformer: "Rohit Sharma"
      }
    ],
    players: {
    }
  },

  // Add more teams as needed (pbks, csk, srh, etc.)
  // Structure must be same as rcb and mi
};

// ===============================
// STATE
// ===============================
let currentTeamKey = null;
let currentPlayerId = null;

// ===============================
// ELEMENT REFERENCES
// ===============================
const teamsContainer = document.getElementById("teams-container");
const teamSection = document.getElementById("team-section");
const teamTitleEl = document.getElementById("team-title");

const dashTotalMatches = document.getElementById("dash-total-matches");
const dashWins = document.getElementById("dash-wins");
const dashWinRate = document.getElementById("dash-winrate");
const dashTopPlayer = document.getElementById("dash-top-player");

const matchHistoryBody = document.getElementById("match-history-body");

const matchDateInput = document.getElementById("match-date");
const matchOpponentInput = document.getElementById("match-opponent");
const matchResultSelect = document.getElementById("match-result");
const matchMarginInput = document.getElementById("match-margin");
const matchPerformerInput = document.getElementById("match-performer");
const addMatchBtn = document.getElementById("add-match-btn");

const playersGrid = document.getElementById("players-grid");

// Player detail elements
const playerDetailsBox = document.getElementById("player-details");
const statMatches = document.getElementById("stat-matches");
const statRuns = document.getElementById("stat-runs");
const statSr = document.getElementById("stat-sr");
const statAvg = document.getElementById("stat-avg");
const statWkts = document.getElementById("stat-wkts");
const statEco = document.getElementById("stat-eco");

const metricAccuracy = document.getElementById("metric-accuracy");
const metricPower = document.getElementById("metric-power");
const metricConsistency = document.getElementById("metric-consistency");

const daySelect = document.querySelector(".day-select");
const trainingTypeSelect = document.querySelector(".training-type");
const trainingMetricInput = document.querySelector(".training-metric");
const trainingDurationInput = document.querySelector(".training-duration");
const addTrainingBtn = document.querySelector(".add-training");
const trainingTableBody = document.querySelector(".daily-progress-table tbody");

const trainSessions = document.getElementById("train-sessions");
const trainImprovement = document.getElementById("train-improvement");
const trainLastdate = document.getElementById("train-lastdate");

const playerImg = document.getElementById("player-img");
const playerNameEl = document.getElementById("player-name");
const playerRoleEl = document.getElementById("player-role");
const playerDescEl = document.getElementById("player-desc");

const closePlayerBtn = document.getElementById("close-player");
const backBtn = document.getElementById("back-btn");

// ===============================
// TEAM HANDLERS
// ===============================
function showTeam(teamKey) {
  const team = teamData[teamKey];
  if (!team) {
    alert("Data for this team is coming soon. Please try another team.");
    return;
  }

  currentTeamKey = teamKey;
  currentPlayerId = null;

  // Title
  teamTitleEl.textContent = team.name;

  // Dashboard stats
  dashTotalMatches.textContent = team.stats.totalMatches;
  dashWins.textContent = team.stats.wins;
  dashWinRate.textContent = team.stats.winRate;
  dashTopPlayer.textContent = team.stats.topPerformer;

  // Match history
  renderMatchHistory(team);

  // Players
  renderPlayers(team);

  // View switching
  teamsContainer.classList.add("hidden");
  teamSection.classList.remove("hidden");
  playerDetailsBox.classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMatchHistory(team) {
  matchHistoryBody.innerHTML = "";

  if (!team.matches || team.matches.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 5;
    td.textContent = "No matches added yet.";
    tr.appendChild(td);
    matchHistoryBody.appendChild(tr);
    return;
  }

  team.matches.forEach((m) => {
    const tr = document.createElement("tr");

    const tdDate = document.createElement("td");
    tdDate.textContent = m.date;

    const tdOpp = document.createElement("td");
    tdOpp.textContent = m.opponent;

    const tdRes = document.createElement("td");
    tdRes.textContent = m.result;

    const tdMargin = document.createElement("td");
    tdMargin.textContent = m.margin;

    const tdPerf = document.createElement("td");
    tdPerf.textContent = m.topPerformer;

    tr.appendChild(tdDate);
    tr.appendChild(tdOpp);
    tr.appendChild(tdRes);
    tr.appendChild(tdMargin);
    tr.appendChild(tdPerf);

    matchHistoryBody.appendChild(tr);
  });
}



// ===============================
// MATCH FORM HANDLERS
// ===============================
function handleAddMatch() {
  if (!currentTeamKey) return;
  const team = teamData[currentTeamKey];

  const date = matchDateInput.value;
  const opponent = matchOpponentInput.value.trim();
  const result = matchResultSelect.value.trim();
  const margin = matchMarginInput.value.trim();
  const performer = matchPerformerInput.value.trim();

  if (!date || !opponent || !result || !margin || !performer) {
    alert("Please fill all match fields.");
    return;
  }

  const newMatch = {
    date,
    opponent,
    result,
    margin,
    topPerformer: performer
  };

  team.matches.push(newMatch);

  // Update team stats in a basic way
  team.stats.totalMatches += 1;
  if (result.toLowerCase() === "win") {
    team.stats.wins += 1;
  }
  const winRateNum =
    team.stats.totalMatches > 0
      ? Math.round((team.stats.wins / team.stats.totalMatches) * 100)
      : 0;
  team.stats.winRate = winRateNum + "%";
  team.stats.topPerformer = performer;

  // Reflect in UI
  showTeam(currentTeamKey);

  // Clear form
  matchDateInput.value = "";
  matchOpponentInput.value = "";
  matchResultSelect.value = "";
  matchMarginInput.value = "";
  matchPerformerInput.value = "";
}

// ===============================
// PLAYER HANDLERS
// ===============================
function renderPlayers(team) {
  playersGrid.innerHTML = "";

  const playersObj = team.players || {};
  const playerList = Object.values(playersObj);

  if (playerList.length === 0) {
    const info = document.createElement("p");
    info.textContent = "No player data configured for this team yet.";
    playersGrid.appendChild(info);
    return;
  }

  playerList.forEach((p) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.dataset.player = p.id;

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <p>${p.name}</p>
    `;

    card.addEventListener("click", () => openPlayer(p.id));

    playersGrid.appendChild(card);
  });
}
function openPlayer(playerId) {
  currentPlayerId = playerId;

  const team = teamData[currentTeamKey];
  const player = team.players[playerId];

  if (!player) return;

  // Fill left side details
  playerImg.src = player.img;
  playerNameEl.textContent = player.name;
  playerRoleEl.textContent = player.role;
  playerDescEl.textContent = player.desc;

  // Player stats
  statMatches.textContent = player.stats.matches;
  statRuns.textContent = player.stats.runs;
  statSr.textContent = player.stats.strikeRate;
  statAvg.textContent = player.stats.average;
  statWkts.textContent = player.stats.wickets;
  statEco.textContent = player.stats.economy;

  // Metrics
  metricAccuracy.textContent = player.metrics.accuracy;
  metricPower.textContent = player.metrics.power;
  metricConsistency.textContent = player.metrics.consistency;

  // Training table
  renderTraining(player);

  // Show player card
  playerDetailsBox.classList.remove("hidden");

  // Scroll to top when opening
  window.scrollTo({ top: 0, behavior: "smooth" });
}


function renderTraining(player) {
  trainingTableBody.innerHTML = "";

  const entries = player.training || [];
  if (entries.length === 0) {
    trainSessions.textContent = "-";
    trainImprovement.textContent = "-";
    trainLastdate.textContent = "-";
    return;
  }

  entries.forEach((e) => {
    const tr = document.createElement("tr");

    const tdDay = document.createElement("td");
    tdDay.textContent = e.day;

    const tdType = document.createElement("td");
    tdType.textContent = e.type;

    const tdMetric = document.createElement("td");
    tdMetric.textContent = e.metric + "%";

    const tdNotes = document.createElement("td");
    tdNotes.textContent = e.notes || "-";

    tr.appendChild(tdDay);
    tr.appendChild(tdType);
    tr.appendChild(tdMetric);
    tr.appendChild(tdNotes);

    trainingTableBody.appendChild(tr);
  });

  // Simple summary: sessions count, last metric as "improvement",
  // today's date as last training date
  trainSessions.textContent = entries.length;
  const lastEntry = entries[entries.length - 1];
  trainImprovement.textContent = lastEntry.metric + "%";
  trainLastdate.textContent = new Date().toLocaleDateString("en-IN");
}

function handleAddTraining() {
  if (!currentTeamKey || !currentPlayerId) {
    alert("Select a player first.");
    return;
  }

  const day = daySelect.value;
  const type = trainingTypeSelect.value;
  const metricVal = trainingMetricInput.value;
  const notes = trainingDurationInput.value;

  if (!day || !type || !metricVal) {
    alert("Please fill day, training type and metric value.");
    return;
  }

  const metric = Number(metricVal);
  if (Number.isNaN(metric) || metric < 0) {
    alert("Metric value must be a positive number.");
    return;
  }

  const team = teamData[currentTeamKey];
  const player = team.players[currentPlayerId];

  if (!player.training) player.training = [];
  player.training.push({ day, type, metric, notes });

  renderTraining(player);

  // Clear inputs
  daySelect.value = "";
  trainingTypeSelect.value = "";
  trainingMetricInput.value = "";
  trainingDurationInput.value = "";
}

// ===============================
// GENERAL UI HANDLERS
// ===============================
function handleBack() {
  teamSection.classList.add("hidden");
  teamsContainer.classList.remove("hidden");
  playerDetailsBox.classList.add("hidden");
  currentTeamKey = null;
  currentPlayerId = null;
}

function handleClosePlayer() {
  playerDetailsBox.classList.add("hidden");
}

// ===============================
// INIT
// ===============================
function init() {
  // Team logo clicks
  document.querySelectorAll(".team-logo").forEach((logo) => {
    const teamKey = logo.dataset.team; // uses data-team attribute
    logo.addEventListener("click", () => showTeam(teamKey));
  });

  // Buttons
  if (addMatchBtn) addMatchBtn.addEventListener("click", handleAddMatch);
  if (addTrainingBtn) addTrainingBtn.addEventListener("click", handleAddTraining);
  if (backBtn) backBtn.addEventListener("click", handleBack);
  if (closePlayerBtn) closePlayerBtn.addEventListener("click", handleClosePlayer);
}

document.addEventListener("DOMContentLoaded", init);
document.getElementById("year").textContent = new Date().getFullYear();
// LOGIN MODAL & TOGGLE
const loginBtn = document.querySelector('.navbar nav a:nth-child(3)'); // login link
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');
let isLoggedIn = false; // track login state

// OPEN LOGIN MODAL
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isLoggedIn) {
    loginModal.classList.remove('hidden');
  } else {
    // If already logged in, clicking logout
    isLoggedIn = false;
    loginBtn.textContent = 'Login';
    alert('You have logged out!');
  }
});

// CLOSE LOGIN MODAL
closeLogin.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

// CLOSE MODAL ON CLICK OUTSIDE
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});

// HANDLE LOGIN FORM SUBMISSION
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple dummy login validation
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) { // simple check, replace with real auth if needed
    isLoggedIn = true;
    loginBtn.textContent = 'Logout';
    loginModal.classList.add('hidden');
    alert(`Welcome, ${email}!`);
  } else {
    alert('Please enter email and password.');
  }
});
