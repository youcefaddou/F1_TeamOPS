Cahier des charges détaillé — F1 TeamOps

1. Objectif
Créer une application web permettant à une écurie de Formule 1 de gérer l’ensemble de ses ressources humaines et matérielles, ainsi que la participation aux Grands Prix et le suivi de la performance.

2. Fonctionnalités principales
A. Gestion de l’écurie
Inscription d’une écurie :
Nom de l’écurie
Pays
Mot de passe (hashé)
Nom du directeur (optionnel)
Connexion de l’écurie (email + mot de passe)

B. Gestion du personnel

CRUD sur les membres de l’équipe (pilotes, ingénieurs, mécaniciens, etc.)
Nom, prénom, email, mot de passe (hashé), rôle, avatar (image), nationalité, âge (optionnel)
Attribution de rôles :
Pilote, Ingénieur, Mécanicien, etc.
Authentification individuelle pour chaque membre

C. Gestion du parc matériel

CRUD sur les voitures, moteurs, pièces détachées
Voiture : numéro châssis, modèle, état, historique d’utilisation
Moteur : code, état, historique
Pièce détachée : référence, type, quantité

D. Participation aux Grands Prix

Gestion du calendrier des courses (circuit, date)
Association :
Un pilote à une voiture pour chaque course (contrainte : un pilote par voiture, une voiture par pilote par course)
Saisie du résultat (position, points, incidents)

E. Gestion des incidents et interventions

Déclaration d’incidents (ex. : casse moteur, sortie de piste, pénalité)
Affectation d’interventions à un membre ou une équipe
Visualisation des incidents par matériel, par pilote, par course
Notification email lors de la création d’un incident

F. Tableau de bord & statistiques

Points par pilote/écurie
Classement général
Liste et historique des incidents
Performance des voitures et des pilotes

3. Contraintes techniques

Stack : NodeJS, Express, Express-session, Bcrypt, Twig, Prisma
Authentification sécurisée (sessions ou JWT)
Base de données relationnelle (modélisation des relations entre membres, voitures, courses, incidents, etc.)
CSS customisé pour chaque page
Sécurité des accès (seulement les membres authentifiés peuvent accéder aux données de l’écurie)
Upload d’images (avatars, photos de matériel)
Envoi de mails automatisé (création de compte, incident, etc.)

4. Pour aller plus loin (facultatif)

Export PDF des rapports de course/incidents
Statistiques avancées (graphes d’évolution des performances)
Gestion des budgets et dépenses par course
Notifications en temps réel (WebSocket)
Intégration avec une API publique F1 (pour récupérer le calendrier officiel, etc.)


///////////////////////////////////////////////////////////////////////////////////////


npm init 
npm i express 
npx prisma init --datasource-provider mysql 
npm i dotenv 
npx prisma migrate dev 
npx prisma studio 
npm install twig 
npm i bcrypt 
npm i express-session
npm install chart.js
npm i multer
npm install connect-sqlite3
