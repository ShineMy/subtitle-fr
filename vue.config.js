module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                "publish": ["github"],
                "appId": "com.subtitle-de.app",
                "productName": "subtitle-de",
                "copyright": "Copyright © 2022 by TMX",
                "directories": {
                    "output": "./output"//输出文件路径
                },
                "asar": false,
                "win": {
                    "target": [{
                        "target": "nsis",
                        "arch": ["x64"]
                    }]
                },
                "mac": {
                    "target": [{
                        "target": "dmg",
                        "arch": ["arm64", "x64"]
                    }]
                },
                "nsis": {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true,
                    "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                    "createDesktopShortcut": true, // 创建桌面图标
                    "createStartMenuShortcut": true,// 创建开始菜单图标
                },
                "dmg": {
                    contents: [
                        {
                            x: 410,
                            y: 150,
                            type: 'link',
                            path: 'Applications'
                        },
                        {
                            x: 130,
                            y: 150,
                            type: 'file'
                        }
                    ]
                }
            }
        }
    }
}