const { join } = require('path')
const allure = require('allure-commandline')

exports.config = {
   // hostname: 'localhost',
   // port: 4723,
   // path: '/wd/hub',
    user : 'vivianemonteiro_oETwgl',
    key : 'vMmYBSFepStnzcvr2nJW',
   //services: ['appium'],
   services: ['browserstack'],
   specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        //"platformName": 'Android',
        'app' : 'bs://96029ad4451af92f77c5536de4b35232ac32cac5',
        'device' : 'Samsung Galaxy Note 20',
        'os_version' : '10.0',
        'project' : 'Projeto em Device Farm',
        'build' : '1',
        'name': 'test_loja_ebac'

        // 'appium:platformVersion': '9.0',
        // 'appium:deviceName': 'ebac-qe',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:appPackage': 'com.woocommerce.android', 
        // 'appium:appActivity': '.ui.login.LoginActivity',
        // 'appium:app': 'C:\\cursoebacvivi\\Testes Mobile EBAC Shop\\app\\android\\loja-ebac.apk',
        // 'appium:newCommandTimeout': 240,
    }],
    waitForTimeout: 2000,
    mochaOpts: {
        timeout: 300000
    },
    
    reporters: ['spec', 
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await browser.takeScreenshot();
    }
}

