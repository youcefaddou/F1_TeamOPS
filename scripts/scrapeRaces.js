const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Définir un User-Agent pour éviter le blocage
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    await page.goto('https://www.formula1.com/en/racing/2025');

    // Attendre que toutes les requêtes réseau soient terminées
    await page.waitForNetworkIdle({ timeout: 60000 });

    // Extraire les données des courses
    const data = await page.evaluate(() => {
        const races = [];
        
        // Sélectionner tous les conteneurs de pays/GP
        const countryElements = document.querySelectorAll('p.typography-module_display-xl-bold__Gyl5W');
        
        countryElements.forEach(countryElement => {
            const country = countryElement.innerText.trim();
            
            // Trouver le conteneur parent plus large pour récupérer les autres infos
            const container = countryElement.closest('div');
            if (container) {
                const gpNameElement = container.querySelector('.typography-module_body-xs-semibold__Fyfwn');
                
                // Essayer plusieurs sélecteurs pour les dates
                let dateElement = container.querySelector('.typography-module_technical-m-bold__JDsxP');
                if (!dateElement) {
                    dateElement = container.querySelector('.typography-module_lg_technical-l-bold__d8tzL');
                }
                if (!dateElement) {
                    dateElement = container.querySelector('[class*="technical"]');
                }
                
                const gpName = gpNameElement ? gpNameElement.innerText.trim() : '';
                const date = dateElement ? dateElement.innerText.trim() : '';
                
                // Debug: afficher les infos trouvées
                console.log(`Pays: ${country}, GP: ${gpName.substring(0, 50)}..., Date: ${date}`);
                
                if (country && gpName) {
                    races.push({
                        country: country,
                        gpName: gpName,
                        date: date || 'Date à confirmer'
                    });
                }
            }
        });
        
        return races;
    });

    // Sauvegarder les données dans un fichier JSON
    fs.writeFileSync('data/races.json', JSON.stringify(data, null, 2));
    console.log(`${data.length} courses sauvegardées dans data/races.json`);

    await browser.close();
})();