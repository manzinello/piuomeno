# 🐘 Più o meno

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea59b4df-2edf-46dc-835c-f3a021639279/deploy-status)](https://app.netlify.com/sites/piuomeno/deploys)

https://piuomeno.netlify.com

App creata per paragonare le misure con unità di misura non convenzionali

creato con React (❤️)

### Electron

```
"build": {
    "appId": "com.matteomanzinello.piuomeno",
    "files": [
      "build/**/*",
      "node_modules/**/*"
    ],
    "directories": {
      "buildResources": "assets"
    },
    "mac": {
      "target": [
        "dmg",
        "zip"
      ],
      "icon": "./build/assets/icons/mac/icon.icns"
    },
    "win": {
      "target": "NSIS",
      "icon": "./build/assets/icons/win/piuomeno.ico"
    },
    "linux": {
      "target": "deb"
    }
  },
```
