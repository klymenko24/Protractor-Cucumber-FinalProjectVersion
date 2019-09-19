<h2>XYZ Bank Automation tests</h2>

Install nodejs using the apt package manager:
```
apt install nodejs
```
To be able to download npm packages, you also need to install npm, the Node.js package manager. To do so type:
```
apt install npm
```
To start project you need to install all dependencies in project repositories
```
npm install
```

Now you can run the tests:
```
npm run test
```

To get report about test results:
```
npm run generate-report

npm run open-report
```