const View = {
  // Mapeo de emojis para las tarjetas
  emojiMap: {
    'medieval': '🏰',
    'fantasia': '🌳',
    'terror': '🏚️',
    'ciencia': '🚀'
  },

  showScreen(id) {
    const screens = ['themeSelection', 'gameScreen', 'endingScreen', 'profileScreen', 'loginScreen', 'registerScreen'];
    screens.forEach(screenId => {
      const el = document.getElementById(screenId);
      if (el) {
        el.classList.remove('active');
      }
    });
    
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
    }
},

  // Función 1: Muestra las categorías
renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  grid.className = 'category-grid';
  
  categories.forEach(cat => {
    const catCard = document.createElement('div');
    catCard.className = 'category-card';
    catCard.dataset.category = cat.key;
    
    catCard.innerHTML = `
      <div class="cat-header" style="background-image: url('${cat.image}')">
        <h3>${cat.name}</h3>
      </div>
      <div class="cat-click-info">
        <p>Click para ver historias</p>
      </div>
    `;
    
    grid.appendChild(catCard);
  });
  
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', e => {
      const categoryKey = e.currentTarget.dataset.category;
      this.showStoriesInCategory(categoryKey);
    });
  });
},

// Función 2: Muestra historias dentro de una categoría (NUEVA - PEGA ESTO)
showStoriesInCategory(categoryKey) {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  grid.className = 'story-grid';
  
  const categoryStories = catalog.filter(story => story.key === categoryKey);
  
  categoryStories.forEach(story => {
    const storyCard = document.createElement('div');
    storyCard.className = 'story-card';
    
    storyCard.innerHTML = `
      <div class="story-img" style="background-image: url('${story.cover}')"></div>
      <div class="story-info">
        <h4>${story.title}</h4>
        <p>${story.intro}</p>
        <button class="play-btn" onclick="startGameNow('${story.key}')">Jugar</button>
      </div>
    `;
    grid.appendChild(storyCard);
  });
  
  // Contenedor de botones de navegación
  const navButtons = document.createElement('div');
  navButtons.style.cssText = 'grid-column: 1 / -1; display: flex; gap: 15px; margin-top: 20px;';
  
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.textContent = '← Volver a categorías';
  backBtn.onclick = () => this.renderCatalog();
  
  navButtons.appendChild(backBtn);
  grid.appendChild(navButtons);
},

// Función 3: setStoryHeader (la que ya tienes)
setStoryHeader(themeKey) {
  // ... tu código
},

  setStoryHeader(themeKey) {
  const meta = catalog.find(c => c.key === themeKey);
  if (!meta) return;
  
  // Sidebar
  const titleSidebar = document.getElementById('storyTitleSidebar');
  const introSidebar = document.getElementById('storyIntroSidebar');
  const imageEl = document.getElementById('gameStoryImage');
  
  if (titleSidebar) titleSidebar.textContent = meta.title;
  if (introSidebar) introSidebar.textContent = meta.intro;
  if (imageEl && meta.cover) {
    imageEl.style.backgroundImage = `url('${meta.cover}')`;
  }
},

 showNode(node) {
    const textEl = document.getElementById('storyText');
    const choicesDiv = document.getElementById('choices');
    
    if (textEl) {
      textEl.textContent = node.text;
    }
    
    if (choicesDiv) {
      choicesDiv.innerHTML = '';
      
      if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
          const btn = document.createElement('button');
          btn.className = 'card-button';
          btn.textContent = choice.text;
          btn.onclick = () => Controller.makeChoice(choice.next, choice.energyChange); // ← CAMBIÉ AQUÍ
          choicesDiv.appendChild(btn);
        });
      }
    }
  },

  showEnding(endingKey) {
  const ending = endings[endingKey];
  if (!ending) return;
  
  this.showScreen('endingScreen');
  
  const titleEl = document.getElementById('endingTitle');
  const textEl = document.getElementById('endingText');
  const typeDiv = document.getElementById('endingType');
  const imageEl = document.getElementById('endingImage'); // NUEVO
  
  if (titleEl) titleEl.textContent = ending.title;
  if (textEl) textEl.textContent = ending.text;
  
  // NUEVA SECCIÓN: Mostrar imagen
  if (imageEl && ending.image) {
    imageEl.style.backgroundImage = `url('${ending.image}')`;
    imageEl.style.display = 'block';
  } else if (imageEl) {
    imageEl.style.display = 'none';
  }
  
  if (typeDiv) {
    typeDiv.className = 'ending-type';
    
    if (ending.type === 'success') {
      typeDiv.classList.add('ending-success');
      typeDiv.textContent = 'Éxito';
    } else if (ending.type === 'failure') {
      typeDiv.classList.add('ending-failure');
      typeDiv.textContent = 'Fracaso';
    } else {
      typeDiv.classList.add('ending-neutral');
      typeDiv.textContent = 'Neutral';
    }
  }
},
  updateUserStatus(username) {
    const statusEl = document.getElementById('userStatus');
    const logoutBtn = document.getElementById('logoutBtn');
    const openProfileBtn = document.getElementById('openProfile');
    
    if (statusEl) {
      statusEl.textContent = username ? `Usuario: ${username}` : 'Invitado';
    }
    
    if (logoutBtn) {
      logoutBtn.style.display = username ? 'inline-block' : 'none';
    }
    
    if (openProfileBtn) {
      openProfileBtn.style.display = username ? 'inline-block' : 'none';
    }
  },

  renderLatestCarousel() {
    const container = document.getElementById('latestCarousel');
    if (!container) return;
    
    container.innerHTML = '<h3 style="color: var(--color-acento-neón); text-align: center; margin-bottom: 20px;">Últimas Historias Subidas</h3>';
    
    const carousel = document.createElement('div');
    carousel.className = 'carousel-container';
    
    latestStories.forEach(story => {
      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.innerHTML = `
        <div class="carousel-img" style="background-image: url('${story.cover}')"></div>
        <div class="carousel-info">
          <h4>${story.title}</h4>
          <button class="play-btn" onclick="startGameNow('${story.key}')">Jugar</button>
        </div>
      `;
      carousel.appendChild(card);
    });
    
    container.appendChild(carousel);
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  View.renderCatalog();
  View.renderLatestCarousel();
  View.showScreen('themeSelection');
});