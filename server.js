const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware
const path = require('path');

const app = express();
const PORT = 3000;
const db = new sqlite3.Database(':memory:'); // Using an in-memory database for example

app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

db.serialize(() => {
  db.run(`
        CREATE TABLE ads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NULLABLE,
            phone TEXT NULLABLE,
            description TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Table "ads" created successfully');
    }
  });

  db.run(`
    INSERT INTO ads (email, phone, description)
    VALUES ("jean.dupont1@example.com", "0612345678", "Je cherche des pots de yaourt en verre. De préférence lavés."),
           ("marie.durand2@example.com", "0623456789",
            "J'ai besoin de compost pour mon jardin, j'envisage de planter des patates. Il me faut à peu près une tonne de compost."),
           ("pierre.martin3@example.com", "0634567890",
            "Je cherche des cuillères en bois de toutes tailles pour ma collection."),
           ("paul.lemaitre7@example.com", "0645678901",
            "Je cherche des recettes pour cuisiner des plats avec seulement des légumes ronds."),
           ("laurent.fabre13@example.com", "0656789012", "Je cherche des films sur les aventures des objets inanimés."),
           ("valerie.morel14@example.com", "0667890123",
            "Je cherche des timbres représentant des animaux déguisés en super-héros."),
           ("sebastien.giraud15@example.com", "0678901234",
            "Je voudrais des conseils pour créer des vêtements à partir de vieilles serviettes de bain."),
           ("emma.garnier16@example.com", "0689012345",
            "Je cherche des parapluies transparents pour voir la pluie tomber."),
           ("chantal.masson22@example.com", "0690123456", "Je cherche des chaussons en forme de licorne."),
           ("hugo.vidal23@example.com", "0701234567",
            "Je voudrais des accessoires pour déguiser mon chien en super-héros."),
           ("celine.guerin24@example.com", "0712345678",
            "Je cherche des recettes pour cuisiner des plats uniquement en bleu."),
           ("julien.besson31@example.com", "0723456789", "Je cherche des jeux de société pour jouer seul."),
           ("justine.robert32@example.com", "0734567890",
            "Je voudrais des conseils pour organiser un goûter sur la lune."),
           ("alexandre.picard33@example.com", "0745678901", "Je cherche des plantes carnivores... mais inoffensives."),
           ("thomas.barbe35@example.com", "0756789012",
            "Je voudrais des conseils pour apprendre à parler aux oiseaux."),
           ("aurelie.martineau36@example.com", "0767890123",
            "Je cherche des astuces pour faire du yoga avec mon hamster."),
           ("helene.benoit44@example.com", "0778901234",
            "Je voudrais des idées pour organiser une fête sur le thème des chapeaux fous."),
           ("guillaume.brun45@example.com", "0789012345", "Je cherche des astuces pour dresser des grenouilles."),
           ("amelie.collet50@example.com", "0790123456",
            "Je voudrais des astuces pour construire une maquette de la Tour Eiffel en cure-dents."),
           ("virginie.brunet56@example.com", "0601234567",
            "Je voudrais des astuces pour organiser une soirée karaoké avec des chansons inventées."),
           ("remi.mace57@example.com", "0612345678",
            "Je cherche des idées pour décorer ma chambre avec des photos de moutons."),
           ("kevin.roche65@example.com", "0623456789",
            "Je voudrais des conseils pour apprendre à faire des sculptures en glace."),
           ("elodie.legros66@example.com", "0634567890",
            "Je cherche des idées de bricolage pour fabriquer des meubles en carton."),
           ("julien.richard70@example.com", "0645678901",
            "J'ai besoin de conseils pour construire une cabane dans un arbre... en plastique."),
           ("matthieu.guerre72@example.com", "0656789012",
            "Je cherche des idées pour organiser une chasse aux œufs de Pâques... en été."),
           ("nina.leconte73@example.com", "0667890123",
            "J'ai besoin de suggestions pour décorer ma salle à manger avec des plantes."),
           ("valentin.roger74@example.com", "0678901234",
            "Je voudrais des conseils pour apprendre à faire du vélo... dans mon salon."),
           ("anais.lenoir75@example.com", "0689012345",
            "Je cherche des idées pour peindre des portraits de mes animaux... avec des légumes."),
           ("romain.lemaitre76@example.com", "0690123456",
            "J'ai besoin de recettes pour cuisiner des desserts uniquement à base de fruits secs."),
           ("claire.guichard77@example.com", "0701234567",
            "Je voudrais des astuces pour organiser une soirée cinéma en plein air... sur mon toit."),
           ("yann.vidal78@example.com", "0712345678",
            "Je cherche des idées pour recycler mes vieux journaux en objets déco."),
           ("lea.martinet79@example.com", "0723456789",
            "J'ai besoin de suggestions pour organiser un concours de pâtisserie... avec des légumes."),
           ("michael.petit80@example.com", "0734567890",
            "Je voudrais des conseils pour apprendre à tricoter des chaussettes pour mon chat."),
           ("isabelle.bourgeois81@example.com", "0745678901",
            "Je cherche des idées de décoration pour un anniversaire surprise."),
           ("nicolas.hubert82@example.com", "0756789012",
            "J'ai besoin de recettes pour cuisiner des plats uniquement en rouge."),
           ("julie.perrier83@example.com", "0767890123",
            "Je voudrais des astuces pour organiser une fête sur le thème de la mer... en montagne."),
           ("paul.fernand84@example.com", "0778901234",
            "Je cherche des idées pour peindre des paysages... avec des bonbons."),
           ("celine.fouquet85@example.com", "0789012345",
            "J'ai besoin de conseils pour construire un château en sable... dans mon jardin."),
           ("remi.fontaine86@example.com", "0790123456",
            "Je voudrais des recettes pour cuisiner des plats avec des épices exotiques."),
           ("audrey.dumas87@example.com", "0601234567",
            "Je cherche des idées pour organiser un marathon de lecture... avec des BD."),
           ("maxence.pierre88@example.com", "0612345678",
            "J'ai besoin de suggestions pour décorer mon bureau avec des objets recyclés."),
           ("mathilde.traore89@example.com", "0623456789",
            "Je voudrais des conseils pour apprendre à jouer de la guitare... avec les pieds."),
           ("quentin.renaudin90@example.com", "0634567890",
            "Je cherche des idées pour organiser une fête sur le thème des contes de fées."),
           ("marie.jacquet91@example.com", "0645678901",
            "J'ai besoin de recettes pour cuisiner des plats uniquement en jaune."),
           ("florent.mallet92@example.com", "0656789012",
            "Je voudrais des astuces pour construire un toboggan dans mon jardin."),
           ("anais.pineau93@example.com", "0667890123",
            "Je cherche des idées pour recycler mes vieilles chaussures en pots de fleurs."),
           ("victor.morice94@example.com", "0678901234",
            "J'ai besoin de suggestions pour organiser une chasse au trésor... dans un parc."),
           ("sophie.tissot95@example.com", "0689012345",
            "Je voudrais des conseils pour apprendre à faire du patin à roulettes... dans ma cuisine."),
           ("charlotte.laporte96@example.com", "0690123456",
            "Je cherche des recettes pour cuisiner des plats uniquement à base de chocolat."),
           ("jean-baptiste.martinet97@example.com", "0701234567",
            "J'ai besoin d'idées pour décorer ma chambre avec des lumières LED."),
           ("amelie.perrier98@example.com", "0712345678",
            "Je voudrais des astuces pour organiser un pique-nique dans un parc d'attractions."),
           ("axel.brunet99@example.com", "0723456789",
            "Je cherche des idées de bricolage pour fabriquer des jouets pour mes animaux."),
           ("julie.giraud100@example.com", "0734567890",
            "J'ai besoin de recettes pour cuisiner des plats uniquement à base de légumes verts."),
           ("leo.poulain101@example.com", "0745678901",
            "Je voudrais des conseils pour apprendre à nager... dans ma baignoire."),
           ("marion.germain102@example.com", "0756789012",
            "Je cherche des idées pour organiser une soirée jeux de société avec mes amis."),
           ("erwan.chevalier103@example.com", "0767890123",
            "J'ai besoin de suggestions pour décorer ma salle de jeux avec des posters."),
           ("florence.legros104@example.com", "0778901234",
            "Je voudrais des astuces pour construire une cabane en bois... dans mon jardin."),
           ("nicolas.michel105@example.com", "0789012345",
            "Je cherche des recettes pour cuisiner des plats uniquement à base de fruits exotiques."),
           ("chloe.maillard106@example.com", "0790123456",
            "J'ai besoin de conseils pour organiser une fête sur le thème des super-héros."),
           ("mathieu.bodin107@example.com", "0601234567",
            "Je voudrais des idées pour recycler mes vieilles bouteilles en plastique."),
           ("pierre.martin3@example.com", "0712569384", "Je cherche des cuillères en bois de toutes tailles pour ma collection.")
  `, (err) => {
    if (err) {
      console.error('Error inserting data:', err.message);
    } else {
      console.log('Initial data inserted successfully');
    }
  });
});

app.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search || '';
  const limit = 10;
  const offset = (page - 1) * limit;

  let query = `SELECT * FROM ads WHERE description LIKE ? ORDER BY created_at DESC LIMIT ? OFFSET ?`;
  let params = [`%${search}%`, limit, offset];

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    db.get(`SELECT COUNT(*) as count FROM ads WHERE description LIKE ?`, [`%${search}%`], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.render('home', {
        ads: rows,
        page,
        totalPages: Math.ceil(result.count / limit),
        search
      });
    });
  });
});

app.post('/api/ads', (req, res) => {
  const { email, description, phone } = req.body;
  if (!email || !description) {
    res.status(400).json({ error: 'Email and description are required' });
    return;
  }

  const query = `INSERT INTO ads (email, description, phone) VALUES (?, ?, ?)`;
  const params = [email, description, phone];

  db.run(query, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
