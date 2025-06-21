document.addEventListener('DOMContentLoaded', function() {
    const predictBtn = document.querySelector('#predictBtn');
    const loadingDiv = document.querySelector('#loadingDiv');
    const resultsDiv = document.querySelector('#resultsDiv');
    const predictionsList = document.querySelector('#predictionsList');

    predictBtn.addEventListener('click', async function() {
        // Afficher le loading
        loadingDiv.style.display = 'block';
        resultsDiv.style.display = 'none';
        predictBtn.disabled = true;
        
        try {
            const response = await fetch('/prediction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                displayPredictions(data.predictions);
                resultsDiv.style.display = 'block';
                //cacher le loading immédiatement après affichage des résultats
                loadingDiv.style.display = 'none';
            } else {
                console.error("Erreur lors de la prédiction :", data.error);
                resultsDiv.innerHTML = '<p class="error">Erreur lors de la prédiction. Veuillez réessayer plus tard.</p>';
                resultsDiv.style.display = 'block';
                loadingDiv.style.display = 'none';
            }
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
            resultsDiv.innerHTML = '<p class="error">Erreur lors de la prédiction. Veuillez réessayer plus tard.</p>';
            resultsDiv.style.display = 'block';
        } finally { 
            //masquer le loading dans tous les cas
            loadingDiv.style.display = 'none';
            predictBtn.disabled = false;
        }
    });
    
    function displayPredictions(predictions) {
        predictionsList.innerHTML = ''; // vider la liste
        predictions.forEach(prediction => {
            const item = document.createElement('div');
            item.className = 'driver-item predicted';
            
            //ajouter une classe spéciale pour les équipes performantes
            let teamClass = '';
            if (prediction.team === 'McLaren') teamClass = 'mclaren-boost';
            else if (prediction.team === 'Mercedes') teamClass = 'mercedes-boost';
            else if (prediction.team === 'Ferrari') teamClass = 'ferrari-boost';
            
            item.innerHTML = `
            <span class="position">P${prediction.predictedPosition}</span>
            <div class="driver-info">
                <span class="name">${prediction.name}</span>
                <span class="team ${teamClass}">${prediction.team}</span>
            </div>
            <div class="stats">
                <span class="points">${prediction.predictedPoints} pts</span>
                <br>
                <span class="confidence">Confiance: ${prediction.confidence}%</span>
                ${prediction.teamPerformance ? `<br><span class="team-perf">Équipe: ${prediction.teamPerformance}%</span>` : ''}
            </div>`;
            predictionsList.appendChild(item);
        });
    }
});