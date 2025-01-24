const CONTRACT_ADDRESS = '0xdA5e1988097297dCdc1f90D4dFE7909e847CBeF6';
const ETHERSCAN_API_KEY = 'YourEtherscanApiKey'; // 需要替换为实际的API密钥

// 格式化大数字
function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toLocaleString();
}

// 缩短地址显示
function shortenAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// 加载代币基本信息
async function loadTokenInfo() {
    try {
        // 使用Etherscan API获取代币信息
        const response = await fetch(`https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`);
        const data = await response.json();
        
        if (data.status === '1') {
            const totalSupply = parseInt(data.result) / Math.pow(10, 18); // 假设18位小数
            document.getElementById('totalSupply').textContent = formatNumber(totalSupply);
        } else {
            document.getElementById('totalSupply').textContent = '10,000,000,000'; // 静态数据
        }
    } catch (error) {
        console.error('获取代币信息失败:', error);
        document.getElementById('totalSupply').textContent = '10,000,000,000'; // 静态数据
    }
}

// 加载持有人信息（模拟数据，因为需要付费API）
async function loadTopHolders() {
    const topHoldersDiv = document.getElementById('topHolders');
    
    try {
        // 由于免费API限制，这里使用模拟数据
        // 在实际应用中，需要使用Etherscan Pro API或其他区块链数据服务
        const mockHolders = [
            { rank: 1, address: '0x742d35Cc0Ff9c8C2E60b5af3F9Ba0A7A7f8C3b4a', balance: '1,234,567,890' },
            { rank: 2, address: '0x8ba1f109551bD432803012645Hac136c22C85329', balance: '987,654,321' },
            { rank: 3, address: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326', balance: '555,444,333' },
            { rank: 4, address: '0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503', balance: '444,333,222' },
            { rank: 5, address: '0x3f3c6f8EbE3b6c2b8e4A9E8C4A5B3D7F1E2D4C5A', balance: '333,222,111' },
            { rank: 6, address: '0x2E2D3C4B5A6F8E9D7C8B5A4F3E2D1C0B9A8F7E6D', balance: '222,111,000' },
            { rank: 7, address: '0x1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B', balance: '200,000,000' },
            { rank: 8, address: '0x9F8E7D6C5B4A3F2E1D0C9B8A7F6E5D4C3B2A1F0E', balance: '150,000,000' },
            { rank: 9, address: '0x8E7D6C5B4A3F2E1D0C9B8A7F6E5D4C3B2A1F0E9D', balance: '100,000,000' },
            { rank: 10, address: '0x7D6C5B4A3F2E1D0C9B8A7F6E5D4C3B2A1F0E9D8C', balance: '75,000,000' }
        ];
        
        let holdersHtml = '';
        mockHolders.forEach(holder => {
            holdersHtml += `
                <div class="holder-item">
                    <div class="holder-rank">${holder.rank}</div>
                    <div class="holder-address" title="${holder.address}">${shortenAddress(holder.address)}</div>
                    <div class="holder-balance">${holder.balance} WLFI</div>
                </div>
            `;
        });
        
        topHoldersDiv.innerHTML = holdersHtml;
        
        // 模拟持有人数量
        document.getElementById('holderCount').textContent = '2,193+';
        document.getElementById('contractBalance').textContent = '0 ETH';
        
    } catch (error) {
        console.error('获取持有人信息失败:', error);
        topHoldersDiv.innerHTML = '<div class="error">无法加载持有人数据，请稍后再试。</div>';
    }
}

// 加载所有数据
async function loadTokenData() {
    document.getElementById('totalSupply').textContent = '加载中...';
    document.getElementById('holderCount').textContent = '加载中...';
    document.getElementById('contractBalance').textContent = '加载中...';
    document.getElementById('topHolders').innerHTML = '<div class="loading">正在加载持仓数据...</div>';
    
    await Promise.all([
        loadTokenInfo(),
        loadTopHolders()
    ]);
}

// 页面加载时自动获取数据
window.addEventListener('DOMContentLoaded', loadTokenData);