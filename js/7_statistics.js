const cryptoData = [
    {
        id: 1,
        name: 'Web-Portfolio',
        symbol: 'PTS-WSP',
        price: 'PTS-WSP',
        change24h: 0.01,
        change7d: 0,
        marketCap: 0,
        volume24h: 'разработка',
        color: '#f59e0b',
        description: 'Революционная квантовая криптовалюта',
    },
    {
        id: 2,
        name: 'Web-Documentation',
        symbol: 'PTS-DOC',
        price: 'PTS-DOC',
        change24h: 0,
        change7d: 0,
        marketCap: 0,
        volume24h: 'ожидание',
        color: '#8b5cf6',
        description: 'Токен для кибербезопасности',
    },
    {
        id: 3,
        name: 'ЦОАД',
        symbol: 'SEC-TY',
        price: 'SEC-TY',
        change24h: 0,
        change7d: 0,
        marketCap: 0,
        volume24h: 'ожидание',
        color: '#10b981',
        description: 'Экологически чистая криптовалюта',
    },
];
let currentCoin = null;
let priceChart = null;
let volumeChart = null;
let holdersChart = null;

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация первого комплекса
    initCryptoApp();
    // Инициализация второго комплекса
    // initSplashScreen();
    // initLogoAnimation();
    // initAsideAnimation();
    // initHeaderAnimation();
});

function initCryptoApp() {
    renderCryptoList();
    renderCryptoTable();
    setupEventListeners();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const backBtn = document.getElementById('backBtn');

    searchInput.addEventListener('input', handleSearch);
    backBtn.addEventListener('click', showMainView);
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const filteredData = cryptoData.filter(coin => 
        coin.name.toLowerCase().includes(query) || 
        coin.symbol.toLowerCase().includes(query)
    );
    renderCryptoTable(filteredData);
    renderCryptoList(filteredData);
}

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
                <span class="change ${coin.change24h >= 0.01 ? 'positive' : 'negative'}">
                    ${coin.change24h >= 0 ? '+' : ''}${coin.change24h.toFixed(2)}%
                </span>
            </td>

            <td>
                <span class="change ${coin.change7d >= 1 ? 'positive' : 'negative'}">
                    ${coin.change7d >= 0 ? '+' : ''}${coin.change7d.toFixed(2)}%
                </span>
            </td>

            <td id="mobile_none">${formatLargeNumber(coin.marketCap)} ₽</td>
            <td id="mobile_none">${coin.volume24h.substring(0, 10)}</td>
        </tr>
    `).join('');
}

function showCoinDetails(coinId) {
    currentCoin = cryptoData.find(coin => coin.id === coinId);
    if (!currentCoin) return;

    document.querySelector('.crypto-section').style.display = 'none';
    document.getElementById('coinDetails').style.display = 'block';

    // Заголовок
    document.getElementById('coinName').textContent = `${currentCoin.name}`;
    
    // Контент
    document.getElementById('coinSymbol').textContent = `${currentCoin.symbol}`;
    document.getElementById('coinPrice').textContent = `${currentCoin.price}`;
    document.getElementById('coinSymbol').textContent = `${currentCoin.symbol}`;
    document.getElementById('coinChange24h').textContent = `${currentCoin.change24h}`;
    document.getElementById('coincHange7d').textContent = `${currentCoin.change7d}`;
    document.getElementById('coinMarketCap').textContent = `${currentCoin.marketCap}`;
    document.getElementById('coinDescription').textContent = `${currentCoin.description}`;
}

function showMainView() {
    document.querySelector('.crypto-section').style.display = 'block';
    document.getElementById('coinDetails').style.display = 'none';

    // Уничтожить графики
    if (priceChart) priceChart.destroy();
    if (volumeChart) volumeChart.destroy();
    if (holdersChart) holdersChart.destroy();
}

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