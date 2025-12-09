const Controller = {
  currentTheme: null,
  currentGame: null,
  currentNode: null,
  currentEnergy: 50,
  user: null,

  startGame(theme) {
    if (!games[theme]) {
      alert('Juego no encontrado: ' + theme);
      return;
    }
    
    this.currentTheme = theme;
    this.currentGame = games[theme];
    this.currentNode = 'start';
    this.currentEnergy = 50;
    
    View.setStoryHeader(theme);
    View.showScreen('gameScreen');
    
    const energyBar = document.getElementById('energyBar');
    const energyText = document.getElementById('energyText');
    if (energyBar) energyBar.style.width = '50%';
    if (energyText) energyText.textContent = '50%';
    
    const node = this.currentGame.nodes[this.currentNode];
    if (node) {
      View.showNode(node);
    }
  },

  makeChoice(nextKey, energyChange) {
    if (energyChange) {
      this.currentEnergy = Math.max(0, Math.min(100, this.currentEnergy + energyChange));
      
      const energyBar = document.getElementById('energyBar');
      const energyText = document.getElementById('energyText');
      
      if (energyBar) {
        energyBar.style.width = this.currentEnergy + '%';
        
        if (this.currentEnergy > 70) {
          energyBar.style.background = 'linear-gradient(90deg, #00ff80, #00cc66)';
        } else if (this.currentEnergy > 40) {
          energyBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
        } else {
          energyBar.style.background = 'linear-gradient(90deg, #ff4040, #cc0000)';
        }
      }
      
      if (energyText) {
        energyText.textContent = this.currentEnergy + '%';
      }
    }
    
    this.currentNode = nextKey;
    const node = this.currentGame.nodes[this.currentNode];
    
    if (!node) {
      View.showEnding(this.currentNode);
      this.incrementStat('endingsTotal');
      const type = endings[this.currentNode] ? endings[this.currentNode].type : null;
      if (type === 'success') this.incrementStat('wins');
      else if (type === 'failure') this.incrementStat('fails');
      return;
    }
    
    View.showNode(node);
  },

  restart() {
    this.currentTheme = null;
    this.currentGame = null;
    this.currentNode = null;
    this.currentEnergy = 50;
    View.renderCatalog();
    View.showScreen('themeSelection');
  },

  login(username, password) {
  const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
  if (!users[username] || users[username].pass !== password) return false;
  
  this.user = { name: username };
  localStorage.setItem('ev_current', username);
  View.updateUserStatus(username);
  
  const op = document.getElementById('openProfile');
  const lo = document.getElementById('logoutBtn');
  const openLogin = document.getElementById('openLogin'); 
  
  if (op) op.style.display = 'inline-block';
  if (lo) lo.style.display = 'inline-block';
  if (openLogin) openLogin.style.display = 'none'; 
  
  return true;
},

  register(username, password) {
    const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
    if (users[username]) return false;
    users[username] = { pass: password, stats: { wins: 0, fails: 0, endingsTotal: 0 }, saves: {} };
    localStorage.setItem('ev_users', JSON.stringify(users));
    return true;
  },

  logout() {
  localStorage.removeItem('ev_current');
  this.user = null;
  View.updateUserStatus(null);
  
  const op = document.getElementById('openProfile');
  const lo = document.getElementById('logoutBtn');
  const openLogin = document.getElementById('openLogin'); 
  
  if (op) op.style.display = 'none';
  if (lo) lo.style.display = 'none';
  if (openLogin) openLogin.style.display = 'inline-block';
},

  loadSession() {
    const current = localStorage.getItem('ev_current');
    if (current) {
      this.user = { name: current };
      View.updateUserStatus(current);
      const op = document.getElementById('openProfile');
      const lo = document.getElementById('logoutBtn');
      if (op) op.style.display = 'inline-block';
      if (lo) lo.style.display = 'inline-block';
    } else {
      View.updateUserStatus(null);
    }
  },

  saveGame() {
    if (!this.user) { alert('Debes iniciar sesión para guardar.'); return; }
    const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
    const u = users[this.user.name] || (users[this.user.name] = { pass:'', stats:{ wins:0, fails:0, endingsTotal:0 }, saves:{} });
    if (!u.saves) u.saves = {};
    u.saves[this.currentTheme] = { node: this.currentNode, date: Date.now() };
    localStorage.setItem('ev_users', JSON.stringify(users));
    alert('Partida guardada.');
  },

  incrementStat(k) {
    if (!this.user) return;
    const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
    const u = users[this.user.name];
    if (!u) return;
    if (!u.stats) u.stats = { wins: 0, fails: 0, endingsTotal: 0 };
    u.stats[k] = (u.stats[k] || 0) + 1;
    localStorage.setItem('ev_users', JSON.stringify(users));
  },

  showProfile() {
  if (!this.user) { alert('Debes iniciar sesión'); return; }
  
  const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
  const u = users[this.user.name];
  const stats = (u && u.stats) ? u.stats : { wins: 0, fails: 0, endingsTotal: 0 };
  
  // Nombre y avatar
  const initial = this.user.name.charAt(0).toUpperCase();
  document.getElementById('avatarInitial').textContent = initial;
  document.getElementById('profileNameFull').textContent = this.user.name;
  
  // Nivel y XP
  const level = Math.floor(stats.endingsTotal / 5) + 1;
  const xp = (stats.endingsTotal % 5) * 20;
  document.getElementById('playerLevel').textContent = `Nivel ${level}`;
  document.getElementById('xpBar').style.width = xp + '%';
  document.getElementById('xpText').textContent = `${xp} / 100 XP`;
  
  // Estadísticas
  document.getElementById('profileGames2').textContent = stats.endingsTotal;
  document.getElementById('profileWins2').textContent = stats.wins;
  document.getElementById('profileFails2').textContent = stats.fails;
  
  const winRate = stats.endingsTotal > 0 ? Math.round((stats.wins / stats.endingsTotal) * 100) : 0;
  document.getElementById('winRate').textContent = winRate + '%';
  
  // Logros
  const achievementCards = document.querySelectorAll('.achievement-card');
  if (stats.endingsTotal >= 1) {
    achievementCards[0].classList.remove('locked');
    achievementCards[0].classList.add('unlocked');
  }
  if (stats.wins >= 5) {
    achievementCards[1].classList.remove('locked');
    achievementCards[1].classList.add('unlocked');
  }
  if (stats.wins >= 10) {
    achievementCards[2].classList.remove('locked');
    achievementCards[2].classList.add('unlocked');
  }
  
  // Partidas guardadas
  const savedList = document.getElementById('savedGamesList');
  if (u && u.saves && Object.keys(u.saves).length > 0) {
    savedList.innerHTML = '';
    Object.keys(u.saves).forEach(gameKey => {
      const save = u.saves[gameKey];
      const game = games[gameKey];
      if (!game) return;
      
      const date = new Date(save.date).toLocaleString();
      const item = document.createElement('div');
      item.className = 'saved-game-item';
      item.innerHTML = `
        <div class="saved-game-info">
          <h4>${game.title}</h4>
          <p>Guardado: ${date}</p>
        </div>
        <div class="saved-game-actions">
          <button class="load-btn" onclick="Controller.loadSavedGame('${gameKey}')">Cargar</button>
          <button class="delete-btn" onclick="Controller.deleteSavedGame('${gameKey}')">Eliminar</button>
        </div>
      `;
      savedList.appendChild(item);
    });
  } else {
    savedList.innerHTML = '<p style="color: #bbb; text-align: center;">No tienes partidas guardadas</p>';
  }
  
  View.showScreen('profileScreen');
},

loadSavedGame(gameKey) {
  if (!this.user) return;
  const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
  const u = users[this.user.name];
  if (!u || !u.saves || !u.saves[gameKey]) {
    alert('Partida no encontrada');
    return;
  }
  
  const save = u.saves[gameKey];
  this.currentTheme = gameKey;
  this.currentGame = games[gameKey];
  this.currentNode = save.node;
  this.currentEnergy = 50;
  
  View.setStoryHeader(gameKey);
  View.showScreen('gameScreen');
  
  const energyBar = document.getElementById('energyBar');
  const energyText = document.getElementById('energyText');
  if (energyBar) energyBar.style.width = '50%';
  if (energyText) energyText.textContent = '50%';
  
  const node = this.currentGame.nodes[this.currentNode];
  if (node) {
    View.showNode(node);
  }
  
  alert('Partida cargada');
},

deleteSavedGame(gameKey) {
  if (!this.user) return;
  if (!confirm('¿Eliminar esta partida guardada?')) return;
  
  const users = JSON.parse(localStorage.getItem('ev_users') || '{}');
  const u = users[this.user.name];
  if (u && u.saves) {
    delete u.saves[gameKey];
    localStorage.setItem('ev_users', JSON.stringify(users));
    this.showProfile();
    alert('Partida eliminada');
  }
}
};

document.addEventListener('DOMContentLoaded', () => {
  Controller.loadSession();

  const restartBtn = document.getElementById('restartBtn');
  if (restartBtn) restartBtn.addEventListener('click', () => Controller.restart());

  const backCatalogBtn = document.getElementById('backCatalogBtn');
  if (backCatalogBtn) backCatalogBtn.addEventListener('click', () => Controller.restart());

  const backCatalogBtn2 = document.getElementById('backCatalogBtn2');
  if (backCatalogBtn2) backCatalogBtn2.addEventListener('click', () => Controller.restart());

  const backCatalogBtn3 = document.getElementById('backCatalogBtn3');
  if (backCatalogBtn3) backCatalogBtn3.addEventListener('click', () => Controller.restart());

  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn) saveBtn.addEventListener('click', () => Controller.saveGame());

  const openLogin = document.getElementById('openLogin');
  if (openLogin) openLogin.addEventListener('click', () => View.showScreen('loginScreen'));

  const openProfile = document.getElementById('openProfile');
  if (openProfile) openProfile.addEventListener('click', () => Controller.showProfile());

  const goToRegister = document.getElementById('goToRegister');
  if (goToRegister) goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    View.showScreen('registerScreen');
  });

  const goToLogin = document.getElementById('goToLogin');
  if (goToLogin) goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    View.showScreen('loginScreen');
  });

  const backCatalogBtnLogin = document.getElementById('backCatalogBtnLogin');
  if (backCatalogBtnLogin) backCatalogBtnLogin.addEventListener('click', () => {
    const id = Controller.currentGame ? 'gameScreen' : 'themeSelection';
    View.showScreen(id);
  });

  const backCatalogBtnRegister = document.getElementById('backCatalogBtnRegister');
  if (backCatalogBtnRegister) backCatalogBtnRegister.addEventListener('click', () => {
    const id = Controller.currentGame ? 'gameScreen' : 'themeSelection';
    View.showScreen(id);
  });

  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) loginBtn.addEventListener('click', () => {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if (Controller.login(user, pass)) {
      alert('Sesión iniciada');
      const id = Controller.currentGame ? 'gameScreen' : 'themeSelection';
      View.showScreen(id);
    } else {
      alert('Usuario/contraseña inválidos');
    }
  });

  const registerBtn = document.getElementById('registerBtn');
  if (registerBtn) registerBtn.addEventListener('click', () => {
    const user = document.getElementById('registerUser').value.trim();
    const pass = document.getElementById('registerPass').value.trim();
    const passConfirm = document.getElementById('registerPassConfirm').value.trim();
    
    if (!user || !pass) { 
      alert('Completa usuario y contraseña'); 
      return; 
    }
    if (pass !== passConfirm) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (Controller.register(user, pass)) {
      alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
      View.showScreen('loginScreen');
    } else {
      alert('El usuario ya existe');
    }
  });

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', () => {
    Controller.logout();
    alert('Sesión cerrada');
    const id = Controller.currentGame ? 'gameScreen' : 'themeSelection';
    View.showScreen(id);
  });
});

window.startGameNow = function(theme) {
  Controller.startGame(theme);
};