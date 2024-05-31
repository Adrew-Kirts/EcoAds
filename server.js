// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import CORS middleware
// const path = require('path');
//
// const app = express();
// const PORT = 3000;
// const db = new sqlite3.Database(':memory:'); // Using an in-memory database for example
//
// app.use(cors()); // Use CORS middleware
// app.use(bodyParser.json());
// app.set('view engine', 'ejs'); // Set EJS as the templating engine
// app.set('views', path.join(__dirname, 'views')); // Set the directory for views
//
// db.serialize(() => {
//   db.run(`
//         CREATE TABLE ads (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             email TEXT NOT NULL,
//             description TEXT NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//         )
//     `, (err) => {
//     if (err) {
//       console.error('Error creating table:', err.message);
//     } else {
//       console.log('Table "ads" created successfully');
//     }
//   });
//
//
//   db.run(`
//     INSERT INTO ads (email, description)
//     VALUES ('jean.dupont1@example.com', 'Je cherche des pots de yaourt en verre. De préférence lavés.'),
//            ('pierre.martin3@example.com', 'Je cherche des cuillères en bois de toutes tailles pour ma collection.'),
//            ('paul.lemaitre7@example.com',
//             'Je cherche des recettes pour cuisiner des plats avec seulement des légumes ronds.'),
//            ('laurent.fabre13@example.com', 'Je cherche des films sur les aventures des objets inanimés.'),
//            ('valerie.morel14@example.com', 'Je cherche des timbres représentant des animaux déguisés en super-héros.'),
//            ('sebastien.giraud15@example.com',
//             'Je voudrais des conseils pour créer des vêtements à partir de vieilles serviettes de bain.'),
//            ('emma.garnier16@example.com', 'Je cherche des parapluies transparents pour voir la pluie tomber.'),
//            ('chantal.masson22@example.com', 'Je cherche des chaussons en forme de licorne.'),
//            ('hugo.vidal23@example.com', 'Je voudrais des accessoires pour déguiser mon chien en super-héros.'),
//            ('celine.guerin24@example.com', 'Je cherche des recettes pour cuisiner des plats uniquement en bleu.'),
//            ('julien.besson31@example.com', 'Je cherche des jeux de société pour jouer seul.'),
//            ('justine.robert32@example.com', 'Je voudrais des conseils pour organiser un goûter sur la lune.'),
//            ('alexandre.picard33@example.com', 'Je cherche des plantes carnivores... mais inoffensives.'),
//            ('thomas.barbe35@example.com', 'Je voudrais des conseils pour apprendre à parler aux oiseaux.'),
//            ('aurelie.martineau36@example.com', 'Je cherche des astuces pour faire du yoga avec mon hamster.'),
//            ('helene.benoit44@example.com',
//             'Je voudrais des idées pour organiser une fête sur le thème des chapeaux fous.'),
//            ('guillaume.brun45@example.com', 'Je cherche des astuces pour dresser des grenouilles.'),
//            ('amelie.collet50@example.com',
//             'Je voudrais des astuces pour construire une maquette de la Tour Eiffel en cure-dents.'),
//            ('virginie.brunet56@example.com',
//             'Je voudrais des astuces pour organiser une soirée karaoké avec des chansons inventées.'),
//            ('amelie.collet50@example.com',
//             'Je voudrais des astuces pour construire une maquette de la Tour Eiffel en cure-dents.'),
//            ('virginie.brunet56@example.com','Je voudrais des astuces pour organiser une soirée karaoké avec des chansons inventées.'),
//            ('remi.mace57@example.com', 'Je cherche des idées pour décorer ma chambre avec des photos de moutons.'),
//            ('kevin.roche65@example.com', 'Je voudrais des conseils pour apprendre à faire des sculptures en glace.'),
//            ('elodie.legros66@example.com', 'Je cherche des idées de bricolage pour fabriquer des meubles en carton.'),
//            ('julien.richard70@example.com','Jai besoin de conseils pour construire une cabane dans un arbre... en plastique.'),
//            ('matthieu.guerre72@example.com','Je cherche des idées pour organiser une chasse aux œufs de Pâques... en été.'),
//             ('nina.leconte73@example.com', 'Jai besoin de suggestions pour décorer ma salle à manger avec des plantes.'),
//         ('valentin.roger74@example.com', 'Je voudrais des conseils pour apprendre à faire du vélo... dans mon salon.'),
//         ('anais.lenoir75@example.com', 'Je cherche des idées pour peindre des portraits de mes animaux... avec des légumes.'),
//         ('romain.lemaitre76@example.com', 'Jai besoin de recettes pour cuisiner des desserts uniquement à base de fruits secs.'),
//         ('claire.guichard77@example.com','Je voudrais des astuces pour organiser une soirée cinéma en plein air... sur mon toit.'),
//         ('yann.vidal78@example.com', 'Je cherche des idées pour recycler mes vieux journaux en objets déco.'),
//         ('lea.martinet79@example.com', 'Jai besoin de suggestions pour organiser un concours de pâtisserie... avec des légumes.'),
//         ('michael.petit80@example.com', 'Je voudrais des conseils pour apprendre à tricoter des chaussettes pour mon chat.'),
//         ('isabelle.bourgeois81@example.com', 'Je cherche des idées de décoration pour un anniversaire surprise.'),
//         ('nicolas.hubert82@example.com', 'Jai besoin de recettes pour cuisiner des plats uniquement en rouge.'),
//         ('julie.perrier83@example.com', 'Je voudrais des astuces pour organiser une fête sur le thème de la mer... en montagne.'),
//         ('paul.fernand84@example.com', 'Je cherche des idées pour peindre des paysages... avec des bonbons.'),
//         ('celine.fouquet85@example.com', 'Jai besoin de conseils pour construire un château en sable... dans mon jardin.'),
// ('remi.fontaine86@example.com', 'Je voudrais des recettes pour cuisiner des plats avec des épices exotiques.'),
// ('audrey.dumas87@example.com', 'Je cherche des idées pour organiser un marathon de lecture... avec des BD.'),
// ('maxence.pierre88@example.com', 'Jai besoin de suggestions pour décorer mon bureau avec des objets recyclés.'),
//             ('mathilde.traore89@example.com',
//              'Je voudrais des conseils pour apprendre à jouer de la guitare... avec les pieds.'),
//             ('quentin.renaudin90@example.com',
//              'Je cherche des idées pour organiser une fête sur le thème des contes de fées.'),
//             ('marie.jacquet91@example.com', 'Jai besoin de recettes pour cuisiner des plats uniquement en jaune.'),
// ('florent.mallet92@example.com', 'Je voudrais des astuces pour construire un toboggan dans mon jardin.'),
// ('anais.pineau93@example.com', 'Je cherche des idées pour recycler mes vieilles chaussures en pots de fleurs.'),
// ('victor.morice94@example.com', 'Jai besoin de suggestions pour organiser une chasse au trésor... dans un parc.'),
//         ('sophie.tissot95@example.com',
//          'Je voudrais des conseils pour apprendre à faire du patin à roulettes... dans ma cuisine.'),
//         ('charlotte.laporte96@example.com',
//          'Je cherche des recettes pour cuisiner des plats uniquement à base de chocolat.'),
//         ('jean-baptiste.martinet97@example.com',
//          'Jai besoin didées pour décorer ma chambre avec des lumières LED.'),
//         ('amelie.perrier98@example.com', 'Je voudrais des astuces pour organiser un pique-nique dans un parc dattractions.'),
//             ('axel.brunet99@example.com',
//              'Je cherche des idées de bricolage pour fabriquer des jouets pour mes animaux.'),
//             ('julie.giraud100@example.com',
//              'Jai besoin de recettes pour cuisiner des plats uniquement à base de légumes verts.'),
//             ('leo.poulain101@example.com', 'Je voudrais des conseils pour apprendre à nager... dans ma baignoire.'),
//             ('marion.germain102@example.com',
//              'Je cherche des idées pour organiser une soirée jeux de société avec mes amis.'),
//             ('erwan.chevalier103@example.com',
//              'Jai besoin de suggestions pour décorer ma salle de jeux avec des posters.'),
//             ('florence.legros104@example.com',
//              'Je voudrais des astuces pour construire une cabane en bois... dans mon jardin.'),
//             ('nicolas.michel105@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de fruits exotiques.'),
//             ('chloe.maillard106@example.com',
//              'Jai besoin de conseils pour organiser une fête sur le thème des super-héros.'),
//             ('mathieu.bodin107@example.com',
//              'Je voudrais des idées pour recycler mes vieilles bouteilles en plastique.'),
//             ('amelie.gauthier108@example.com',
//              'Je cherche des astuces pour organiser un goûter danniversaire pour mon chien.'),
//             ('thomas.barbier109@example.com',
//              'Jai besoin de recettes pour cuisiner des plats uniquement à base de poisson.'),
//             ('pauline.gosselin110@example.com', 'Je voudrais des conseils pour apprendre à dessiner des mangas.'),
//             ('hugo.dubost111@example.com', 'Je cherche des idées pour décorer ma salle de bain avec des coquillages.'),
//             ('lea.drouet112@example.com', 'Jai besoin de suggestions pour organiser une soirée cinéma en plein air.'),
//             ('maxime.gregoire113@example.com', 'Je voudrais des astuces pour construire un igloo... en polystyrène.'),
//             ('lucas.lemoine114@example.com', 'Je cherche des recettes pour cuisiner des plats uniquement à base de riz.'),
//             ('arthur.carre116@example.com', 'Je voudrais des idées pour recycler mes vieux jeans en sacs à main.'),
//             ('lena.vallet117@example.com', 'Je cherche des astuces pour organiser un pique-nique au bord de la mer.'),
//             ('etienne.hamel118@example.com',
//              'Jai besoin de suggestions pour décorer ma chambre avec des posters de films.'),
//             ('elise.charles119@example.com',
//              'Je voudrais des conseils pour apprendre à jouer du piano... avec des gants.'),
//             ('aurelien.mahe120@example.com', 'Je cherche des idées pour organiser une fête sur le thème des pirates.'),
//             ('melanie.roche121@example.com',
//              'Jai besoin de recettes pour cuisiner des plats uniquement à base de fromage.'),
//             ('guillaume.vallee122@example.com', 'Je voudrais des astuces pour construire une cabane en bambou.'),
//             ('sarah.lapierre123@example.com',
//              'Je cherche des idées pour recycler mes vieilles chaussettes en jouets pour chat.'),
//             ('remi.rousseau124@example.com',
//              'Jai besoin de suggestions pour organiser une chasse au trésor... dans un parc.'),
//             ('thibault.bourdin125@example.com', 'Je voudrais des conseils pour apprendre à faire des tours de magie.'),
//             ('victoria.barbeau126@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de légumes.'),
//             ('baptiste.ricard127@example.com',
//              'Jai besoin didées pour décorer ma chambre avec des guirlandes lumineuses.'),
//             ('anais.lemarchand128@example.com',
//              'Je voudrais des astuces pour organiser un goûter danniversaire pour mon chat.'),
//             ('thomas.viel129@example.com',
//              'Je cherche des idées pour recycler mes vieilles boîtes en métal en pots de fleurs.'),
//             ('caroline.brunet130@example.com',
//              'Jai besoin de suggestions pour décorer ma salle de bains avec des galets.'),
//             ('floriane.maury131@example.com',
//              'Je voudrais des conseils pour apprendre à dessiner des portraits réalistes.'),
//             ('loic.bouchet132@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de fruits.'),
//             ('marion.chauvin133@example.com', 'Jai besoin didées pour organiser une fête sur le thème de lespace.'),
//             ('laurent.aubry134@example.com',
//              'Je voudrais des astuces pour construire une cabane en bois... dans mon salon.'),
//             ('aline.perrot135@example.com', 'Je cherche des idées pour recycler mes vieux CD en objets décoratifs.'),
//             ('alexis.marechal136@example.com', 'Jai besoin de suggestions pour organiser une soirée jeux de société.'),
//             ('laure.boucher137@example.com',
//              'Je voudrais des conseils pour apprendre à jongler avec des balles de jonglage.'),
//             ('hugo.deschamps138@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de viande.'),
//             ('sophie.monteil139@example.com', 'Jai besoin didées pour décorer ma cuisine avec des objets vintage.'),
//             ('guillaume.roux140@example.com',
//              'Je voudrais des astuces pour organiser une fête sur le thème des dessins animés.'),
//             ('amelie.robin141@example.com',
//              'Je cherche des idées pour recycler mes vieilles chaussures en pots de fleurs.'),
//             ('leo.guyot142@example.com',
//              'Jai besoin de suggestions pour décorer ma chambre avec des posters de voyages.'),
//             ('marie.joly143@example.com', 'Je voudrais des conseils pour apprendre à peindre des paysages.'),
//             ('thibault.bernier144@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de légumes.'),
//             ('florent.blin145@example.com',
//              'Jai besoin didées pour organiser une fête sur le thème des super-héros.'),
//             ('lucie.morel146@example.com', 'Je voudrais des astuces pour construire une cabane en bambou.'),
//             ('mathieu.roudier147@example.com',
//              'Je cherche des idées pour recycler mes vieilles chaussettes en jouets pour chien.'),
//             ('alexandre.garnier148@example.com',
//              'Jai besoin de suggestions pour organiser une chasse au trésor... dans un parc.'),
//             ('camille.vial149@example.com', 'Je voudrais des conseils pour apprendre à faire des tours de magie.'),
//             ('remi.chevallier150@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de fruits.'),
//             ('sarah.lacroix151@example.com',
//              'Jai besoin didées pour décorer ma chambre avec des guirlandes lumineuses.'),
//             ('paul.roussel152@example.com',
//              'Je voudrais des astuces pour organiser un goûter danniversaire pour mon chien.'),
//             ('lucie.poulain153@example.com',
//              'Je cherche des idées pour recycler mes vieilles boîtes en métal en pots de fleurs.'),
//             ('maxime.riviere154@example.com',
//              'Jai besoin de suggestions pour décorer ma salle de bains avec des galets.'),
//             ('floriane.lebon155@example.com',
//              'Je voudrais des conseils pour apprendre à dessiner des portraits réalistes.'),
//             ('loic.lambert156@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de fruits.'),
//             ('marion.vidal157@example.com', 'Jai besoin didées pour organiser une fête sur le thème de lespace.'),
//             ('laurent.delaunay158@example.com',
//              'Je voudrais des astuces pour construire une cabane en bois... dans mon salon.'),
//             ('aline.fleury159@example.com', 'Je cherche des idées pour recycler mes vieux CD en objets décoratifs.'),
//             ('alexis.gay160@example.com', 'Jai besoin de suggestions pour organiser une soirée jeux de société.'),
//             ('laure.gillet161@example.com',
//              'Je voudrais des conseils pour apprendre à jongler avec des balles de jonglage.'),
//             ('hugo.guibert162@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de viande.'),
//             ('sophie.leduc163@example.com', 'Jai besoin didées pour décorer ma cuisine avec des objets vintage.'),
//             ('guillaume.marie164@example.com',
//              'Je voudrais des astuces pour organiser une fête sur le thème des dessins animés.'),
//             ('amelie.charrier165@example.com',
//              'Je cherche des idées pour recycler mes vieilles chaussures en pots de fleurs.'),
//             ('leo.boulay166@example.com',
//              'Jai besoin de suggestions pour décorer ma chambre avec des posters de voyages.'),
//             ('marie.rouault167@example.com', 'Je voudrais des conseils pour apprendre à peindre des paysages.'),
//             ('thibault.laville168@example.com',
//              'Je cherche des recettes pour cuisiner des plats uniquement à base de légumes.'),
//             ('julie.bernard4@example.com', 'Je voudrais emprunter une tente de camping pour un week-end... dans mon salon.')
//             `, (err) => {
//     if (err) {
//       console.error('Error inserting data:', err.message);
//     } else {
//       console.log('Initial data inserted successfully');
//     }
//   });
// });
//
// app.get('/', (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const search = req.query.search || '';
//   const limit = 10;
//   const offset = (page - 1) * limit;
//
//   let query = `SELECT * FROM ads WHERE description LIKE ? LIMIT ? OFFSET ?`;
//   let params = [`%${search}%`, limit, offset];
//
//   db.all(query, params, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//
//     db.get(`SELECT COUNT(*) as count FROM ads WHERE description LIKE ?`, [`%${search}%`], (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//
//       res.render('index', {
//         ads: rows,
//         page,
//         totalPages: Math.ceil(result.count / limit),
//         search
//       });
//     });
//   });
// });
//
// app.post('/api/ads', (req, res) => {
//   const { email, description } = req.body;
//   if (!email || !description) {
//     res.status(400).json({ error: 'Email and description are required' });
//     return;
//   }
//
//   const query = `INSERT INTO ads (email, description) VALUES (?, ?)`;
//   const params = [email, description];
//
//   db.run(query, params, function(err) {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.redirect('/');
//   });
// });
//
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

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
            email TEXT NOT NULL,
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
        INSERT INTO ads (email, description) VALUES
        ("jean.dupont1@example.com", "Je cherche des pots de yaourt en verre. De préférence lavés."),
        ("marie.durand2@example.com", "J'ai besoin de compost pour mon jardin, j'envisage de planter des patates. Il me faut à peu près une tonne de compost."),
        ("pierre.martin3@example.com", "Je cherche des cuillères en bois de toutes tailles pour ma collection.")
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

  let query = `SELECT * FROM ads WHERE description LIKE ? LIMIT ? OFFSET ?`;
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

      res.render('index', {
        ads: rows,
        page,
        totalPages: Math.ceil(result.count / limit),
        search
      });
    });
  });
});

app.post('/api/ads', (req, res) => {
  const { email, description } = req.body;
  if (!email || !description) {
    res.status(400).json({ error: 'Email and description are required' });
    return;
  }

  const query = `INSERT INTO ads (email, description) VALUES (?, ?)`;
  const params = [email, description];

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
