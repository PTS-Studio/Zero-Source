// Данные криптовалют
const cryptoData = [
    {
        id: 1,
        name: 'QuantumCoin',
        symbol: 'PTS',
        price: 'SW-PT',
        change24h: 0.01,
        change7d: 0,
        marketCap: 876543210987,
        volume24h: 23456789012,
        color: '#f59e0b',
        description: 'Революционная квантовая криптовалюта',
    },
    {
        id: 2,
        name: 'CyberToken',
        symbol: 'CBT',
        price: 'MP-PW',
        change24h: -5.67,
        change7d: 8.45,
        marketCap: 234567890123,
        volume24h: 8765432109,
        color: '#8b5cf6',
        description: 'Токен для кибербезопасности',
    },
    {
        id: 3,
        name: 'EcoGreen',
        symbol: 'ECO',
        price: 'RT-PT',
        change24h: 12.89,
        change7d: 23.45,
        marketCap: 98765432109,
        volume24h: 3456789012,
        color: '#10b981',
        description: 'Экологически чистая криптовалюта',
    },
    {
        id: 4,
        name: 'MetaVerse',
        symbol: 'META',
        price: 'MU-PT',
        change24h: -8.23,
        change7d: -15.67,
        marketCap: 45678901234,
        volume24h: 1234567890,
        color: '#ef4444',
        description: 'Токен виртуальной реальности',
    },
    {
        id: 5,
        name: 'ArtisticNFT',
        symbol: 'ART',
        price: 'SL-PT',
        change24h: 15.78,
        change7d: 34.12,
        marketCap: 12345678901,
        volume24h: 567890123,
        color: '#f97316',
        description: 'Платформа для NFT искусства',
    },
    {
        id: 6,
        name: 'GameFi',
        symbol: 'GAME',
        price: 'SH-PLT',
        change24h: 6.78,
        change7d: -2.34,
        marketCap: 8765432109,
        volume24h: 345678901,
        color: '#06b6d4',
        description: 'Игровая криптовалюта',
    },
    {
        id: 7,
        name: 'CloudCoin',
        symbol: 'CLD',
        price: 'SWF-PTF',
        change24h: -3.45,
        change7d: 11.23,
        marketCap: 54321098765,
        volume24h: 2345678901,
        color: '#8b5cf6',
        description: 'Облачные вычисления на блокчейне',
    },
    {
        id: 8,
        name: 'HealthChain',
        symbol: 'HLT',
        price: 'OO-XX',
        change24h: 9.12,
        change7d: 18.45,
        marketCap: 23456789012,
        volume24h: 890123456,
        color: '#10b981',
        description: 'Медицинские данные на блокчейне',
    }
];

let currentCoin = null;
let priceChart = null;
let volumeChart = null;
let holdersChart = null;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    renderCryptoList();
    renderCryptoTable();
    setupEventListeners();
});

// Обработчики событий
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const backBtn = document.getElementById('backBtn');
    
    searchInput.addEventListener('input', handleSearch);
    backBtn.addEventListener('click', showMainView);
}

// Поиск
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const filteredData = cryptoData.filter(coin => 
        coin.name.toLowerCase().includes(query) || 
        coin.symbol.toLowerCase().includes(query)
    );
    renderCryptoTable(filteredData);
    renderCryptoList(filteredData);
}

// Отображение списка криптовалют
function renderCryptoList(data = cryptoData) {
    const cryptoList = document.getElementById('cryptoList');
    
    cryptoList.innerHTML = data.map(coin => `
        <div class="crypto-item" onclick="showCoinDetails(${coin.id})">
            <div class="crypto-icon" style="background: ${coin.color}">
                ${coin.symbol.substring(0, 2)}
            </div>
            <div class="crypto-info">
                <h4>${coin.name}</h4>
                <span>${coin.symbol}</span>
            </div>
        </div>
    `).join('');
}

// Отображение таблицы криптовалют
function renderCryptoTable(data = cryptoData) {
    const tableBody = document.getElementById('cryptoTableBody');
    
    tableBody.innerHTML = data.map((coin, index) => `
        <tr onclick="showCoinDetails(${coin.id})" style="cursor: pointer;">
            <td>${index + 1}</td>

            <td>
                <div class="coin-info">
                    <div class="coin-logo" style="background: ${coin.color}">
                        ${coin.symbol.substring(0, 2)}
                    </div>
                    <div class="coin-details-info">
                        <h4 id="mobile_none">${coin.name}</h4>
                        <span>${coin.symbol}</span>
                    </div>
                </div>
            </td>

            <td class="price" id="mobile_none">${coin.price.substring(0, 8)}</td>

            <td>
                <span class="change ${coin.change24h >= 0 ? 'positive' : 'negative'}">
                    ${coin.change24h >= 0 ? '+' : ''}${coin.change24h.toFixed(2)}%
                </span>
            </td>

            <td>
                <span class="change ${coin.change7d >= 1 ? 'positive' : 'negative'}">
                    ${coin.change7d >= 0 ? '+' : ''}${coin.change7d.toFixed(2)}%
                </span>
            </td>

            <td id="mobile_none">${formatLargeNumber(coin.marketCap)} ₽</td>
            <td id="mobile_none">${formatLargeNumber(coin.volume24h)} ₽</td>
        </tr>
    `).join('');
}

// Показать детали монеты
function showCoinDetails(coinId) {
    currentCoin = cryptoData.find(coin => coin.id === coinId);
    if (!currentCoin) return;
    
    document.querySelector('.crypto-section').style.display = 'none';
    document.getElementById('coinDetails').style.display = 'block';
    
    // Обновить заголовок
    document.getElementById('coinName').textContent = `${currentCoin.name} (${currentCoin.symbol})`;
}

// Показать основной вид
function showMainView() {
    document.querySelector('.crypto-section').style.display = 'block';
    document.getElementById('coinDetails').style.display = 'none';
    
    // Уничтожить графики
    if (priceChart) priceChart.destroy();
    if (volumeChart) volumeChart.destroy();
    if (holdersChart) holdersChart.destroy();
}

// Утилиты форматирования
function formatNumber(num) {
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}

function formatLargeNumber(num) {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toString();
}

/*
=============================================================
    АНИМАЦИЯ ЗАГРУЗКИ СТРАНИЦЫ
=============================================================
*/
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const content = document.getElementById('content');

    function hideSplashScreen() {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }

    setTimeout(hideSplashScreen, 2500);
});
window.addEventListener('load', function() {
    const logo = document.querySelector('.logo'); // Получаем ссылку на элемент логотипа

    function toggleAnimation() {
        if (logo.classList.contains('static')) {
            logo.classList.remove('static'); // Включаем анимацию
        } else {
            logo.classList.add('static'); // Отключаем анимацию
        }
    }

    // Функция для задержки смены анимации
    function delay(ms) {
      return new Promise(res => setTimeout(res, ms));
    }

    async function animateLogo() {
      while(true) {
        logo.classList.remove('static');
        await delay(3000);
        logo.classList.add('static');
        await delay(3000);
      }
    }

    animateLogo();


    setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.style.overflow = 'auto';
    }, 6000); // Показать контент после 6 секунд (общее время пульсации + статики)
});

/*
=============================================================
    БОКОВАЯ ПАНЕЛЬ
=============================================================
*/
const mobile_panel_header = document.getElementById('open_aside')
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const mainContent = document.querySelector('main');
const menuIcon = menuBtn.querySelector('menu-icon');


menuBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});

// Функция для управления прокруткой
function toggleScroll(shouldDisable) {
    if (shouldDisable) {
        document.body.style.overflow = 'hidden'; // отключить скролл
        // Сохраняем текущую позицию прокрутки
        const scrollY = window.scrollY;
        document.body.dataset.scrollY = scrollY; // сохраняем
    } else {
        document.body.style.overflow = ''; // вернуть прокрутку
        // Восстановить позицию прогрутки
        const scrollY = document.body.dataset.scrollY;
        if (scrollY !== undefined) {
            window.scrollTo(0, parseInt(scrollY));
        }
        delete document.body.dataset.scrollY;
    }
}
// Функция для плавного скрытия/показа основного контента
function fadeMainContent(show) {
    if (show) {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '1';
      mainContent.style.pointerEvents = 'auto';

      mobile_panel_header.style.transition = 'opacity 0.5s ease';
      mobile_panel_header.style.opacity = '1';
      mobile_panel_header.style.pointerEvents = 'auto';
    } else {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '0';
      mainContent.style.pointerEvents = 'none';

      mobile_panel_header.style.transition = 'opacity 0.5s ease';
      mobile_panel_header.style.opacity = '0';
      mobile_panel_header.style.pointerEvents = 'auto';
    }
}
// Переключение меню и управление скроллом/анимацией
menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    if (isOpen) {
        toggleScroll(true);
        fadeMainContent(false);
    } else {
        toggleScroll(false);
        fadeMainContent(true);
    }
});

/*
=============================================================
    АНИМАЦИЯ ЗАПОЛНЕНИЯ ASIDE
=============================================================
*/
const mobilePanelButton = document.querySelector('.mobile_panel');
const modalAside = document.querySelector('.modal_aside');

mobilePanelButton.addEventListener('click', () => {
  modalAside.classList.toggle('show');
});


document.addEventListener('DOMContentLoaded', function() {
const asideBlock = document.querySelector('.aside_block');
let lastScrollTop = 0;
const scrollThreshold = 1;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
    return;
    }

    if (scrollTop > lastScrollTop) {
    // Вниз
    asideBlock.classList.add('scrolled');
    } else {
    // Вверх
    asideBlock.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop;
});
});

/*
=============================================================
    АНИМАЦИЯ СКРЫТИЯ HEADER
=============================================================
*/

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
    // Пользователь листает вниз
    header.classList.add('hidden');
  } else {
    // Пользователь листает вверх
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/*
=============================================================
    АНИМАЦИЯ СКРЫТИЯ MOBILE PANEL
=============================================================
*/

document.addEventListener('DOMContentLoaded', function() {
const openAsideButton = document.getElementById('open_aside');
let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Прокрутка вниз
    openAsideButton.style.left = '-80px';
    } else {
    // Прокрутка вверх
    openAsideButton.style.left = '0';
    }
    lastScrollTop = scrollTop;
  });
});

