exports.parseRaceDate = (dateString) => {
    if (!dateString || dateString === 'Date à confirmer') {
        return null; // Pas de date valide
    }
    const months = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6,
        'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }
    try {
        //decouper "27 - 29 Jun" pour récupérer "27" et "Jun"
        const parts = dateString.split(' ');
        const day = parseInt(parts[0]); // 27
        const month = parts[parts.length - 1]; // Jun

        // creer la date : année 2025, mois Jun (5), jour 27
        return new Date(2025, months[month], day);
    } catch (error) {
        return null; // Si erreur, on retourne null
    }
}

exports.getNextRaces = (races, count = 3) => {
    const today = new Date();
    const futureRaces = []
    //on regarde chaque course
    for (let race of races) {
        const raceDate = exports.parseRaceDate(race.date)
        //si la course dans le futur on garde
        if (raceDate && raceDate >= today) {
            futureRaces.push(race)
        }
    }
    // Trier les courses par date croissante et prendre les 3 prochaines
    futureRaces.sort((a, b) => {
        const dateA = exports.parseRaceDate(a.date);
        const dateB = exports.parseRaceDate(b.date);
        return dateA - dateB;   //tri croissant
    }
    );
    return futureRaces.slice(0, count); // Retourne les 3 prochaines courses
}

exports.separateRaces = (races) => {
    const today = new Date();
    const pastRaces = [];
    const futureRaces = [];
    for (let race of races) {
        const raceDate = exports.parseRaceDate(race.date);
        if (raceDate && raceDate < today) { 
            pastRaces.push(race)
        }
        else if (raceDate && raceDate >= today) {
            futureRaces.push(race)
        }
    } 
    return { pastRaces, futureRaces };
}