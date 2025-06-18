const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();    
    
    // Définir un User-Agent pour éviter le blocage
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    await page.goto('https://www.formula1.com/en/results/2025/team');

    // Attendre que toutes les requêtes réseau soient terminées
    await page.waitForNetworkIdle({ timeout: 60000 });

    // Capturer le contenu HTML pour débogage
    // const htmlContent = await page.content();
    // fs.writeFileSync('data/pageContent.html', htmlContent);

    // Capturer une capture d'écran pour vérifier visuellement
    // await page.screenshot({ path: 'data/screenshot.png' });

    // Vérifier la présence de la table
    const data = await page.evaluate(() => {
        const rows = document.querySelectorAll('.f1-table tbody tr');
        const standings = [];
        rows.forEach(row => {
            const positionElement = row.querySelector('td:nth-child(1) p');
            const teamElement = row.querySelector('td:nth-child(2)');
            const pointsElement = row.querySelector('td:nth-child(3)');

            const position = positionElement ? positionElement.innerText.trim() : null;
            const team = teamElement ? teamElement.innerText.trim() : null;
            const points = pointsElement ? pointsElement.innerText.trim() : null;

            if (position && team && points) {
                standings.push({ position, team, points });
            }
        });
        return standings;
    });

    // Sauvegarder les données dans un fichier JSON
    fs.writeFileSync('data/teams.json', JSON.stringify(data, null, 2));
    console.log('Classement des constructeurs sauvegardé dans data/teams.json');

    await browser.close();
})();
