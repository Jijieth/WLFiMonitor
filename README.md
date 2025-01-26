# 🚀 WLFI Monitor

A real-time monitoring dashboard for World Liberty Financial Token (WLFI) built with pure HTML, CSS, and JavaScript.

## 📊 Features

- **💰 Real-time Price Display** - Current WLFI token price with 24h change indicator
- **📈 Token Statistics** - Total supply, holder count, and contract balance
- **🏆 Top Holders** - Display of top 10 WLFI token holders
- **🔄 Auto Refresh** - Automatic data updates and manual refresh option
- **📱 Responsive Design** - Works on desktop, tablet, and mobile devices

## 🏗️ Project Structure

```
wlfimonitor/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and API calls
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- (Optional) Local web server for development

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The dashboard will automatically load and display WLFI data

### Local Development Server (Optional)

For better development experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## 🔧 Configuration

### API Keys

To get real token data, you may need to configure API keys:

1. **Etherscan API** (for token supply data):
   - Get a free API key from [Etherscan.io](https://etherscan.io/apis)
   - Replace `YourEtherscanApiKey` in `script.js`

2. **CoinGecko API** (for price data):
   - Uses free tier by default
   - No API key required for basic usage

### Token Contract

The monitored contract address is:
```
0xdA5e1988097297dCdc1f90D4dFE7909e847CBeF6
```

To monitor a different token, update the `CONTRACT_ADDRESS` constant in `script.js`.

## 📡 Data Sources

- **Price Data**: CoinGecko API (with fallback to mock data)
- **Token Supply**: Etherscan API (with fallback to static data)
- **Holder Information**: Mock data (requires premium APIs for real data)

## 🎨 Customization

### Styling

Edit `styles.css` to customize:
- Color schemes and gradients
- Card layouts and spacing
- Responsive breakpoints
- Animations and transitions

### Functionality

Modify `script.js` to:
- Add new data sources
- Change refresh intervals
- Implement additional features
- Integrate with different APIs

## 📱 Mobile Support

The dashboard is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🔄 Auto-refresh

- Data automatically loads when the page opens
- Manual refresh button available
- All data sources load in parallel for optimal performance

## 🚨 Limitations

- **Holder data**: Uses mock data due to API limitations
- **Price data**: May show simulated data if token isn't listed on CoinGecko
- **Rate limits**: Free APIs have request limitations

## 🛠️ Development

### Code Structure

- **Modular CSS**: Organized styles with clear naming conventions
- **Async JavaScript**: Non-blocking API calls with error handling
- **Responsive Grid**: CSS Grid layout for adaptive design
- **Error Handling**: Graceful fallbacks for API failures

### Best Practices

- Semantic HTML structure
- Mobile-first responsive design
- Progressive enhancement
- Cross-browser compatibility
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This tool is for informational purposes only. Always verify data from official sources before making any financial decisions. Cryptocurrency investments carry significant risks.

## 🔗 Links

- [World Liberty Financial](https://worldlibertyfinancial.com/)
- [Etherscan Contract](https://etherscan.io/token/0xdA5e1988097297dCdc1f90D4dFE7909e847CBeF6)
- [CoinGecko API Documentation](https://www.coingecko.com/en/api)
- [Etherscan API Documentation](https://docs.etherscan.io/)

---

Made with ❤️ for the WLFI community