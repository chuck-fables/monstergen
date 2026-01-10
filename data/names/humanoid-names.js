/**
 * D&D 5e Humanoid Names Data
 * Extensive name lists for each humanoid race
 * Each race includes 150+ first names and 100+ surnames where applicable
 */

const HumanoidNames = {
    // HUMAN NAMES (by culture/region)
    'human': {
        male: [
            'Aaron', 'Abel', 'Abraham', 'Adam', 'Adrian', 'Aiden', 'Alan', 'Albert', 'Aldric', 'Alexander',
            'Alfred', 'Alvin', 'Andrew', 'Anthony', 'Arnold', 'Arthur', 'Augustus', 'Baldwin', 'Barrett', 'Bartholomew',
            'Benedict', 'Benjamin', 'Bernard', 'Boris', 'Bradley', 'Brandon', 'Brian', 'Bruce', 'Bruno', 'Caleb',
            'Calvin', 'Carl', 'Cecil', 'Cedric', 'Charles', 'Chester', 'Christian', 'Christopher', 'Clarence', 'Claude',
            'Clayton', 'Clifford', 'Colin', 'Conrad', 'Constantine', 'Cornelius', 'Craig', 'Cyrus', 'Dale', 'Damian',
            'Daniel', 'Darius', 'David', 'Dennis', 'Derek', 'Desmond', 'Dominic', 'Donald', 'Douglas', 'Drake',
            'Duncan', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Eli', 'Elijah', 'Elliot', 'Emanuel', 'Eric',
            'Ernest', 'Ethan', 'Eugene', 'Evan', 'Ezra', 'Felix', 'Ferdinand', 'Fletcher', 'Francis', 'Franklin',
            'Frederick', 'Gabriel', 'Garrett', 'Geoffrey', 'George', 'Gerald', 'Gilbert', 'Glen', 'Gordon', 'Graham',
            'Grant', 'Gregory', 'Harold', 'Harrison', 'Harvey', 'Hector', 'Henry', 'Herbert', 'Herman', 'Howard',
            'Hugh', 'Hugo', 'Ian', 'Isaac', 'Ivan', 'Jack', 'Jacob', 'James', 'Jasper', 'Jeffrey',
            'Jeremy', 'Jerome', 'Jesse', 'Joel', 'John', 'Jonathan', 'Jordan', 'Joseph', 'Joshua', 'Julian',
            'Justin', 'Keith', 'Kenneth', 'Kevin', 'Lambert', 'Lance', 'Lawrence', 'Leo', 'Leonard', 'Leopold',
            'Levi', 'Lewis', 'Lionel', 'Lloyd', 'Logan', 'Lorenzo', 'Louis', 'Lucas', 'Luther', 'Malcolm',
            'Marcus', 'Mark', 'Marshall', 'Martin', 'Mason', 'Matthew', 'Maurice', 'Maxwell', 'Michael', 'Miles',
            'Mitchell', 'Morgan', 'Morris', 'Nathan', 'Nathaniel', 'Neil', 'Nelson', 'Nicholas', 'Noah', 'Noel',
            'Norman', 'Oliver', 'Oscar', 'Owen', 'Patrick', 'Paul', 'Percy', 'Peter', 'Philip', 'Pierce',
            'Preston', 'Quentin', 'Ralph', 'Randolph', 'Raymond', 'Reginald', 'Richard', 'Robert', 'Roderick', 'Roger',
            'Roland', 'Ronald', 'Roy', 'Rufus', 'Russell', 'Samuel', 'Sebastian', 'Seth', 'Simon', 'Solomon',
            'Spencer', 'Stanley', 'Stephen', 'Stewart', 'Theodore', 'Thomas', 'Timothy', 'Tobias', 'Travis', 'Trevor',
            'Tristan', 'Tyler', 'Ulric', 'Victor', 'Vincent', 'Wallace', 'Walter', 'Warren', 'Wayne', 'Wesley',
            'Wilfred', 'William', 'Winston', 'Wyatt', 'Xavier', 'Zachary'
        ],
        female: [
            'Abigail', 'Adelaide', 'Adeline', 'Adriana', 'Agnes', 'Alexandra', 'Alice', 'Alicia', 'Amanda', 'Amelia',
            'Anastasia', 'Andrea', 'Angela', 'Anita', 'Anna', 'Annabelle', 'Anne', 'Arabella', 'Audrey', 'Barbara',
            'Beatrice', 'Belinda', 'Bernadette', 'Bertha', 'Bianca', 'Bridget', 'Camilla', 'Caroline', 'Cassandra', 'Catherine',
            'Cecilia', 'Charlotte', 'Christina', 'Claire', 'Clara', 'Clarissa', 'Claudia', 'Constance', 'Cordelia', 'Cornelia',
            'Cynthia', 'Daisy', 'Daphne', 'Diana', 'Dolores', 'Donna', 'Dora', 'Dorothy', 'Edith', 'Eleanor',
            'Elena', 'Elizabeth', 'Ellen', 'Eloise', 'Elvira', 'Emily', 'Emma', 'Esmeralda', 'Estelle', 'Esther',
            'Ethel', 'Eugenia', 'Eva', 'Evangeline', 'Evelyn', 'Faith', 'Felicia', 'Flora', 'Florence', 'Frances',
            'Francesca', 'Frieda', 'Gabriella', 'Gail', 'Gemma', 'Genevieve', 'Georgia', 'Geraldine', 'Gertrude', 'Giselle',
            'Gloria', 'Grace', 'Gwendolyn', 'Hannah', 'Harriet', 'Hazel', 'Heather', 'Helen', 'Henrietta', 'Hilda',
            'Hope', 'Ida', 'Imogen', 'Ingrid', 'Irene', 'Iris', 'Isabella', 'Ivy', 'Jacqueline', 'Jane',
            'Janet', 'Janice', 'Jean', 'Jeanette', 'Jennifer', 'Jessica', 'Joan', 'Joanna', 'Josephine', 'Joyce',
            'Judith', 'Julia', 'Juliana', 'Juliet', 'June', 'Katherine', 'Kathleen', 'Kay', 'Laura', 'Lavinia',
            'Leah', 'Lena', 'Lillian', 'Lily', 'Linda', 'Loretta', 'Louisa', 'Lucia', 'Lucille', 'Lucinda',
            'Lucy', 'Lydia', 'Mabel', 'Madeline', 'Margaret', 'Maria', 'Marian', 'Marie', 'Marilyn', 'Martha',
            'Mary', 'Matilda', 'Maude', 'Maureen', 'Maxine', 'Melanie', 'Melissa', 'Meredith', 'Millicent', 'Miranda',
            'Miriam', 'Molly', 'Monica', 'Muriel', 'Myrtle', 'Nancy', 'Naomi', 'Natalie', 'Nellie', 'Nicole',
            'Nina', 'Nora', 'Norma', 'Octavia', 'Olive', 'Olivia', 'Ophelia', 'Pamela', 'Patricia', 'Paula',
            'Pauline', 'Pearl', 'Penelope', 'Phoebe', 'Phyllis', 'Priscilla', 'Rachel', 'Rebecca', 'Regina', 'Renee',
            'Rhoda', 'Rita', 'Roberta', 'Rosa', 'Rosalie', 'Rose', 'Rosemary', 'Ruby', 'Ruth', 'Sabrina',
            'Sally', 'Samantha', 'Sandra', 'Sara', 'Sarah', 'Selena', 'Serena', 'Sharon', 'Sheila', 'Shirley',
            'Silvia', 'Sophia', 'Stella', 'Susan', 'Susanna', 'Sylvia', 'Teresa', 'Thelma', 'Theresa', 'Ursula',
            'Valerie', 'Vanessa', 'Vera', 'Veronica', 'Victoria', 'Viola', 'Violet', 'Virginia', 'Vivian', 'Wanda',
            'Wendy', 'Wilma', 'Winifred', 'Yvonne', 'Zelda'
        ],
        surnames: [
            'Abbott', 'Adams', 'Aldridge', 'Allen', 'Anderson', 'Andrews', 'Armstrong', 'Arnold', 'Ashford', 'Atkinson',
            'Bailey', 'Baker', 'Baldwin', 'Barker', 'Barnes', 'Barrett', 'Barton', 'Bell', 'Bennett', 'Bishop',
            'Black', 'Blackwood', 'Blake', 'Bolton', 'Bond', 'Booth', 'Bradley', 'Brennan', 'Brooks', 'Brown',
            'Bryant', 'Burke', 'Burns', 'Burton', 'Butler', 'Campbell', 'Carpenter', 'Carter', 'Chambers', 'Chapman',
            'Clark', 'Clarke', 'Cole', 'Coleman', 'Collins', 'Cook', 'Cooper', 'Cox', 'Crawford', 'Cross',
            'Cunningham', 'Curtis', 'Daniels', 'Davidson', 'Davies', 'Davis', 'Dawson', 'Dean', 'Dixon', 'Douglas',
            'Drake', 'Duncan', 'Edwards', 'Elliott', 'Ellis', 'Evans', 'Farmer', 'Ferguson', 'Fisher', 'Fletcher',
            'Ford', 'Foster', 'Fowler', 'Fox', 'Francis', 'Fraser', 'Freeman', 'Fuller', 'Gardner', 'Gibson',
            'Gilbert', 'Gordon', 'Graham', 'Grant', 'Gray', 'Green', 'Griffin', 'Hall', 'Hamilton', 'Hammond',
            'Harper', 'Harris', 'Harrison', 'Hart', 'Harvey', 'Hawkins', 'Hayes', 'Henderson', 'Henry', 'Higgins',
            'Hill', 'Hoffman', 'Holland', 'Holmes', 'Hopkins', 'Howard', 'Hudson', 'Hughes', 'Hunt', 'Hunter',
            'Jackson', 'James', 'Jenkins', 'Johnson', 'Johnston', 'Jones', 'Jordan', 'Kemp', 'Kennedy', 'Kent',
            'King', 'Knight', 'Lambert', 'Lane', 'Lawrence', 'Lee', 'Lewis', 'Lloyd', 'Long', 'Lucas',
            'Marshall', 'Martin', 'Mason', 'Matthews', 'May', 'McCarthy', 'McDonald', 'Miller', 'Mills', 'Mitchell',
            'Moore', 'Morgan', 'Morris', 'Morrison', 'Murphy', 'Murray', 'Nelson', 'Newman', 'Newton', 'Nichols',
            'Norton', 'Oliver', 'Owen', 'Palmer', 'Parker', 'Patterson', 'Payne', 'Pearson', 'Perry', 'Peters',
            'Phillips', 'Porter', 'Powell', 'Price', 'Reid', 'Reynolds', 'Rhodes', 'Richards', 'Richardson', 'Roberts',
            'Robertson', 'Robinson', 'Rogers', 'Rose', 'Ross', 'Russell', 'Sanders', 'Scott', 'Sharp', 'Shaw',
            'Sherman', 'Simpson', 'Smith', 'Spencer', 'Stanley', 'Stevens', 'Stewart', 'Stone', 'Sullivan', 'Taylor',
            'Thomas', 'Thompson', 'Turner', 'Walker', 'Wallace', 'Walsh', 'Ward', 'Warren', 'Watson', 'Webb',
            'Wells', 'West', 'Wheeler', 'White', 'Williams', 'Wilson', 'Wood', 'Wright', 'Young'
        ]
    },

    // DWARF NAMES
    'dwarf-hill': { alias: 'dwarf' },
    'dwarf-mountain': { alias: 'dwarf' },
    'dwarf': {
        male: [
            'Adrik', 'Alberich', 'Baern', 'Barendd', 'Bardryn', 'Berek', 'Brottor', 'Bruenor', 'Dain', 'Darrak',
            'Delg', 'Dolgrim', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Eldeth', 'Fargrim', 'Flint', 'Gardain',
            'Ghelryn', 'Gimgen', 'Gimli', 'Glar', 'Glorin', 'Gorat', 'Gotrek', 'Grim', 'Grumbar', 'Grundi',
            'Gundren', 'Harbek', 'Hjolman', 'Hrothgar', 'Kildrak', 'Kilvar', 'Korin', 'Korgan', 'Krag', 'Kromm',
            'Morgran', 'Morkral', 'Nalvur', 'Nordak', 'Nundro', 'Orsik', 'Oskar', 'Rangrim', 'Rhogar', 'Rurik',
            'Sannl', 'Skald', 'Snorri', 'Storn', 'Taklinn', 'Thardin', 'Thokk', 'Thoradin', 'Thorek', 'Thorin',
            'Thrain', 'Thror', 'Traubon', 'Travok', 'Tordek', 'Torinn', 'Turak', 'Ulfgar', 'Ulfrik', 'Ungrim',
            'Veit', 'Vondal', 'Whurbin', 'Wulgar', 'Balin', 'Bofur', 'Bombur', 'Bifur', 'Dori', 'Nori',
            'Ori', 'Oin', 'Gloin', 'Fili', 'Kili', 'Dwalin', 'Durin', 'Thror', 'Fundin', 'Gror',
            'Thrain', 'Frar', 'Grar', 'Nain', 'Dain', 'Borin', 'Farin', 'Loni', 'Nali', 'Frerin',
            'Azaghal', 'Gamil', 'Zirak', 'Telchar', 'Mim', 'Ibun', 'Khim', 'Bodruith', 'Fangluin', 'Galdor',
            'Bergil', 'Berin', 'Bregor', 'Dagnir', 'Galion', 'Galdor', 'Hadhor', 'Hador', 'Huor', 'Ingold',
            'Baragund', 'Belegund', 'Dagnir', 'Gorlim', 'Guilin', 'Gundor', 'Handir', 'Hurin', 'Orodreth', 'Hurin',
            'Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr',
            'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart', 'Stonefist', 'Ironfoot', 'Hammerfall', 'Anvilmar', 'Deepdelver'
        ],
        female: [
            'Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda',
            'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl',
            'Torbera', 'Tordrid', 'Vistra', 'Agna', 'Bodill', 'Dagmaer', 'Disa', 'Eir', 'Eydis', 'Freydis',
            'Geirhild', 'Gjaflaug', 'Groa', 'Gudrid', 'Halla', 'Helga', 'Herborg', 'Hild', 'Hrefna', 'Inga',
            'Ingibjorg', 'Jorunn', 'Kadlin', 'Kelda', 'Korri', 'Lofnheid', 'Magnhild', 'Ragnfrid', 'Runa', 'Saga',
            'Signe', 'Sigrid', 'Sigrun', 'Sigrunn', 'Solveig', 'Svanhild', 'Thora', 'Thordis', 'Thorunn', 'Thurid',
            'Tora', 'Torunn', 'Ulfhild', 'Vigdis', 'Ylva', 'Orla', 'Brynja', 'Heidrun', 'Astrid', 'Bergljot',
            'Brynhild', 'Dagny', 'Embla', 'Frida', 'Gerda', 'Greta', 'Gudrun', 'Haldora', 'Hulda', 'Ilsa',
            'Ingeborg', 'Kara', 'Kirsten', 'Liv', 'Magna', 'Nanna', 'Olga', 'Petra', 'Ragna', 'Selma',
            'Sonja', 'Svana', 'Thekla', 'Tyra', 'Urd', 'Valdis', 'Verdandi', 'Vigga', 'Wilma', 'Yngvild'
        ],
        surnames: [
            'Balderk', 'Battlehammer', 'Brawnanvil', 'Coalborn', 'Dankil', 'Deepdelver', 'Fireforge', 'Frostbeard', 'Goldvein', 'Gorunn',
            'Granitebrow', 'Hammerfell', 'Holderhek', 'Ironfist', 'Ironshield', 'Loderr', 'Lutgehr', 'Rockseeker', 'Rumnaheim', 'Silvertarn',
            'Stonebrow', 'Stonehelm', 'Stonehammer', 'Stoutale', 'Strakeln', 'Thunderbrew', 'Torunn', 'Truegold', 'Ungart', 'Bronzebottom',
            'Coppermantle', 'Darkmine', 'Deepaxe', 'Dragonbane', 'Dwarffather', 'Earthbreaker', 'Flamebeard', 'Forgeheart', 'Gemcutter', 'Goldhand',
            'Greybeard', 'Grimforge', 'Hardcheek', 'Heavyhand', 'Highpeak', 'Hilldigger', 'Ironarm', 'Ironbrow', 'Ironheart', 'Ironside',
            'Longbeard', 'Mithrilaxe', 'Mountainheart', 'Oakenshield', 'Orebeater', 'Redbeard', 'Rockhammer', 'Rubyeye', 'Shieldbreaker', 'Silveraxe',
            'Silverbeard', 'Slateshield', 'Steelgrim', 'Stonemason', 'Strongarm', 'Stronginthearm', 'Thornhelm', 'Tinkerstone', 'Trueshield', 'Understone',
            'Whitestone', 'Worldthrone', 'Wyrmslayer', 'Anvil', 'Deepforge', 'Duerith', 'Flamehelm', 'Glintstone', 'Goldmantle', 'Granite',
            'Grumblesteel', 'Hardfoot', 'Heavybrow', 'Ironbottom', 'Magmaheart', 'Mithrilbeard', 'Moltenhammer', 'Mountainguard', 'Orebane', 'Runeforge',
            'Shalefoot', 'Sparkstone', 'Steelhelm', 'Stoneshield', 'Stronghold', 'Underhill', 'Warbraid', 'Wargrim', 'Wyvernbane', 'Goldpick'
        ]
    },

    // ELF NAMES
    'elf-high': { alias: 'elf' },
    'elf-wood': { alias: 'elf' },
    'elf-drow': { alias: 'drow' },
    'elf': {
        male: [
            'Adran', 'Aelar', 'Aerdeth', 'Aeson', 'Aramil', 'Arannis', 'Aust', 'Azariah', 'Beiro', 'Berrian',
            'Birel', 'Caelynn', 'Carric', 'Connall', 'Cymbiir', 'Daemyr', 'Darvin', 'Drannor', 'Efferil', 'Eiravel',
            'Elandorr', 'Elashor', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath',
            'Heian', 'Himo', 'Ilphelkiir', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis',
            'Miritar', 'Naeris', 'Navarre', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae',
            'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis', 'Vesryn', 'Virion',
            'Galanodel', 'Amakiir', 'Siannodel', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Nailo', 'Xiloscient', 'Holimion', 'Brightwood',
            'Helder', 'Sinaht', 'Naevys', 'Ailre', 'Elaith', 'Alagos', 'Anarion', 'Andril', 'Athtar', 'Aubron',
            'Aerendyl', 'Amrynn', 'Beliath', 'Callamir', 'Celestor', 'Cerelion', 'Darastrixi', 'Elaith', 'Elaran', 'Elduin',
            'Ellarian', 'Elomir', 'Elrodin', 'Eltaor', 'Erlareo', 'Falathiel', 'Felarion', 'Galather', 'Gildor', 'Glorandal',
            'Hadariel', 'Halafarin', 'Halamar', 'Ilbryen', 'Iliphar', 'Intevar', 'Kaelith', 'Khiiral', 'Larethian', 'Lhoris',
            'Lorsan', 'Luthais', 'Maeral', 'Melandrach', 'Merellien', 'Mirthal', 'Mythlas', 'Naertho', 'Nelaeryn', 'Neronvain',
            'Nhamashal', 'Onas', 'Orym', 'Pellanistra', 'Rhistel', 'Rilitar', 'Saeran', 'Salanar', 'Saleh', 'Sanev',
            'Seiveril', 'Silvyr', 'Talindra', 'Tannatar', 'Tanyl', 'Taranath', 'Teryani', 'Tethren', 'Thalanil', 'Tiarno',
            'Traeliorn', 'Vaeren', 'Valorian', 'Vhaldur', 'Windeir', 'Wintermere', 'Yesanith', 'Zelphar', 'Zinnaerris', 'Zylphyra'
        ],
        female: [
            'Adrie', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel',
            'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Gaelira',
            'Galinndan', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia',
            'Lyndra', 'Meriele', 'Mialee', 'Mylaela', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairla',
            'Shava', 'Silaqui', 'Sumnes', 'Theirastra', 'Thia', 'Tiaathque', 'Vadania', 'Valanthe', 'Xanaphia', 'Xenara',
            'Aelrindel', 'Aerilaya', 'Aila', 'Alasse', 'Alenia', 'Amalthea', 'Amarantha', 'Ameria', 'Amlaruil', 'Amnestria',
            'Ara', 'Ariawyn', 'Ariella', 'Celebrian', 'Cerellia', 'Ciliren', 'Daenara', 'Daratrine', 'Delenia', 'Drannin',
            'Ecaeris', 'Elanil', 'Elanil', 'Elasha', 'Elaviel', 'Eldath', 'Eletha', 'Ellarian', 'Elora', 'Elphine',
            'Emmyth', 'Essaerae', 'Estella', 'Faelwen', 'Faenya', 'Faunalyn', 'Featherine', 'Filauria', 'Galadria', 'Galathil',
            'Galawen', 'Gilraen', 'Gwynnestri', 'Haela', 'Halani', 'Halastra', 'Ilyrana', 'Immianthe', 'Itylra', 'Ivellios',
            'Jasmine', 'Kalara', 'Katriel', 'Kaylessa', 'Keishara', 'Laeriel', 'Lairelithoniel', 'Lalaith', 'Larethia', 'Lauriel',
            'Leilatha', 'Lilatha', 'Liriel', 'Lithoniel', 'Luthien', 'Lyra', 'Maeglin', 'Maelyrra', 'Mariona', 'Melarue',
            'Mindra', 'Moriel', 'Myllanis', 'Naesala', 'Nethza', 'Nimrodel', 'Nithroel', 'Nueleth', 'Nylaathria', 'Olwen',
            'Oreleth', 'Phaerl', 'Qillathe', 'Raenefel', 'Raewen', 'Saida', 'Sariandi', 'Sehanine', 'Shenarah', 'Silifrey',
            'Sorina', 'Sumina', 'Sylin', 'Talindra', 'Tesrae', 'Tindomiel', 'Tira', 'Tyrael', 'Vashti', 'Velatha',
            'Viranya', 'Windsong', 'Wynna', 'Xilya', 'Yaereene', 'Yesenia', 'Yllenya', 'Zaltarish', 'Zeladrine', 'Zenthya'
        ],
        surnames: [
            'Amakiir', 'Amastacia', 'Brightwood', 'Evanara', 'Galanodel', 'Galthoril', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne',
            'Nailo', 'Nightbreeze', 'Siannodel', 'Starfire', 'Xiloscient', 'Aloro', 'Amakirr', 'Aralivar', 'Argentis', 'Auvreaear',
            'Bellas', 'Calaudra', 'Cormyth', 'Crownguard', 'Dawntracker', 'Delmirev', 'Duskhallow', 'Eirendul', 'Elaran', 'Elensar',
            'Elwind', 'Evenwood', 'Faelyn', 'Falondiir', 'Farwalker', 'Featherfall', 'Firahel', 'Glynris', 'Goldpetal', 'Greenbottle',
            'Greenleaf', 'Haevault', 'Highsun', 'Iathrana', 'Ilbryndae', 'Ilphelin', 'Irian', 'Irinoth', 'Kelraer', 'Korianthil',
            'Larethiel', 'Leafwhisper', 'Lorhalien', 'Lutharen', 'Maldris', 'Meliane', 'Mithrandir', 'Moonshadow', 'Moonwhisper', 'Morningmist',
            'Naeris', 'Neirdre', 'Nighthollow', 'Nightshade', 'Oakenshield', 'Oakvale', 'Oloren', 'Orbryn', 'Pholont', 'Quessir',
            'Ravanor', 'Reyanor', 'Rivervale', 'Rosebloom', 'Silentread', 'Silverbow', 'Silverfrond', 'Silverleaf', 'Silverstream', 'Silverspear',
            'Songsteel', 'Starbreeze', 'Starglow', 'Starweaver', 'Stormwind', 'Sunblade', 'Sunfire', 'Sunshadow', 'Swiftarrow', 'Sylvanis',
            'Tanithil', 'Thorngage', 'Tiltathana', 'Trielver', 'Vaernil', 'Virthir', 'Windrunner', 'Wintergreen', 'Wyrmbane', 'Yeshara'
        ]
    },

    // DROW NAMES
    'drow': {
        male: [
            'Adinir', 'Alak', 'Alaghund', 'Alaun', 'Arkenrret', 'Belgos', 'Benozza', 'Berun', 'Brizzabir', 'Bruherd',
            'Duagloth', 'Durdyn', 'Elkantar', 'Elvandar', 'Filraen', 'Gelroos', 'Ghaundar', 'Guldor', 'Houndaer', 'Ilphrin',
            'Ilzat', 'Istolil', 'Izdar', 'Jaezred', 'Jhalavar', 'Jhulsae', 'Kalannar', 'Kelnozz', 'Kren', 'Lesaonar',
            'Lirdnolu', 'Malaggar', 'Malaghar', 'Masoj', 'Mourn', 'Nalfein', 'Nirinath', 'Nojss', 'Null', 'Pelloth',
            'Pharaun', 'Qualagar', 'Quarion', 'Quevven', 'Riklaunim', 'Rizzen', 'Ryltar', 'Sabrar', 'Seldszar', 'Solaufein',
            'Sorn', 'Szordrin', 'Tarlyn', 'Tebryn', 'Tluth', 'Tsabrak', 'Urlryn', 'Valas', 'Veldrin', 'Vorn',
            'Welverin', 'Xarann', 'Xull', 'Yazston', 'Zaknafein', 'Zeerith', 'Zek', 'Zhuan', 'Zilvra', 'Zyn',
            'Alton', 'Andzrel', 'Balok', 'Berg', 'Brorn', 'Chardryn', 'Dinin', 'Drizzt', 'Elkantar', 'Gelroos',
            'Hatch', 'Jarlaxle', 'Kelnozz', 'Kyrnill', 'Liriel', 'Malice', 'Nalfein', 'Nimor', 'Pharaun', 'Quenthel'
        ],
        female: [
            'Akordia', 'Amalica', 'Angaste', 'Aunrae', 'Baltana', 'Belarbreena', 'Briza', 'Burryna', 'Chali', 'Chalindra',
            'Chessintra', 'Dhaunae', 'Dilynrae', 'Drisinil', 'Eclavdra', 'Erelda', 'Faeryl', 'Filfaere', 'Gaussra', 'Ginafae',
            'Greyanna', 'Haelra', 'Halisstra', 'Ilivarra', 'Irae', 'Iymril', 'Jhulae', 'Jhaelryna', 'Jhanniss', 'Kalanrae',
            'Kieransalee', 'Laele', 'Liriel', 'Lolth', 'Malice', 'Maya', 'Minolin', 'Minuae', 'Molvayas', 'Myrineyl',
            'Nedylene', 'Neerith', 'Nhilymma', 'Pellanistra', 'Phaere', 'Phyldryx', 'Qilue', 'Quave', 'Quenthel', 'Rilrae',
            'Sabrae', 'Sabal', 'Shi\'nayne', 'Shri', 'Shurdriira', 'Shyntlara', 'Sithis', 'Ssapriina', 'Talice', 'Tathlyn',
            'Triel', 'T\'risstree', 'Ulviirala', 'Umrae', 'Valas', 'Viconia', 'Vierna', 'Vlondril', 'Waerva', 'Xullrae',
            'Yasraena', 'Yvonnel', 'Zarae', 'Zarra', 'Zilvra', 'Zinzerena', 'Zirnakaynin', 'Zolond', 'Zyne', 'Adrissna'
        ],
        surnames: [
            'Aleanath', 'Arabani', 'Auvryath', 'Baenre', 'Barrison', 'Blundyth', 'Coloara', 'Dalael', 'Despana', 'DeVir',
            'Do\'Urden', 'Duskryn', 'Everhate', 'Fey-Branche', 'Filifar', 'Frettlar', 'Glannath', 'Godeep', 'Helviiryn', 'Hlaund',
            'Hune', 'Hunzrin', 'Illykur', 'Kenafin', 'Kilsek', 'Maerret', 'Mizzrym', 'Melarn', 'Neereath', 'Noquar',
            'Oblodra', 'Ousstyl', 'Pharn', 'Rilyn\'sek', 'Shobalar', 'Srune\'lett', 'Symryvvin', 'Teken\'ath', 'Tlabbar', 'Vandree',
            'Xorlarrin', 'Zauvirr', 'Zolond', 'Agrach', 'Arkhenneld', 'Arkenneld', 'Auvryndar', 'Coloara', 'Dyrr', 'Eilservs'
        ]
    },

    // HALFLING NAMES
    'halfling-lightfoot': { alias: 'halfling' },
    'halfling-stout': { alias: 'halfling' },
    'halfling': {
        male: [
            'Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Caleb', 'Corrin', 'Dannad', 'Eldon', 'Errich',
            'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Hal', 'Hob', 'Jasper', 'Lerry', 'Lindal',
            'Lyle', 'Melf', 'Milo', 'Ned', 'Nevil', 'Osborn', 'Ostran', 'Percy', 'Perrin', 'Pippin',
            'Reed', 'Roscoe', 'Sam', 'Sharkey', 'Tharivol', 'Toby', 'Ulmo', 'Wellby', 'Wendel', 'Wilcome',
            'Adelard', 'Alberic', 'Anson', 'Arnor', 'Balbo', 'Bardo', 'Bilbo', 'Bingo', 'Blanco', 'Bodo',
            'Bosco', 'Bowman', 'Bruno', 'Bungo', 'Cardo', 'Carl', 'Celedor', 'Cotman', 'Drogo', 'Dudo',
            'Falco', 'Fastolph', 'Ferumbras', 'Filibert', 'Flambard', 'Folco', 'Fortinbras', 'Fosco', 'Fredegar', 'Frodo',
            'Gerontius', 'Gorbadoc', 'Gorbulas', 'Griffo', 'Gruffo', 'Gundabald', 'Gundolpho', 'Hamfast', 'Hamson', 'Hending',
            'Hildibrand', 'Hildifons', 'Hildigard', 'Hildigrim', 'Hobson', 'Holfast', 'Holman', 'Hugo', 'Isengar', 'Isengrim',
            'Isembard', 'Isembold', 'Largo', 'Longo', 'Lotho', 'Madoc', 'Marroc', 'Marmadoc', 'Marmadas', 'Merimac'
        ],
        female: [
            'Alain', 'Amaryllis', 'Andry', 'Belba', 'Berylla', 'Bramble', 'Calia', 'Callie', 'Camellia', 'Charmaine',
            'Cora', 'Daisy', 'Dora', 'Doura', 'Eglantine', 'Esmeralda', 'Euphemia', 'Gilly', 'Hanna', 'Jillian',
            'Kithri', 'Lavinia', 'Lidda', 'Lily', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Pandora', 'Paela',
            'Pearl', 'Pennie', 'Portia', 'Primrose', 'Prisca', 'Rosie', 'Seraphina', 'Shaena', 'Tilly', 'Trym',
            'Vani', 'Verna', 'Wenna', 'Adaldrida', 'Amarantha', 'Angelica', 'Asphodel', 'Belladonna', 'Bell', 'Camellia',
            'Chica', 'Cora', 'Daisy', 'Diamond', 'Dina', 'Donnamira', 'Dora', 'Estella', 'Goldilocks', 'Hilda',
            'Jessamine', 'Lobelia', 'Malva', 'Marigold', 'Melilot', 'Mentha', 'Mimosa', 'Mirabella', 'Myrtle', 'Pansy',
            'Pearl', 'Peony', 'Pervinca', 'Poppy', 'Primula', 'Prisca', 'Rosa', 'Rosamunda', 'Ruby', 'Salvia'
        ],
        surnames: [
            'Brushgather', 'Goodbarrel', 'Greenbottle', 'Highhill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough',
            'Appleblossom', 'Banks', 'Barrowmarch', 'Bolger', 'Bophin', 'Bracegirdle', 'Brandybuck', 'Brockhouse', 'Brown', 'Brownlock',
            'Bunce', 'Burrows', 'Chubb', 'Clayhanger', 'Cotton', 'Diggle', 'Fairbairn', 'Gamgee', 'Gardner', 'Goodbody',
            'Greenhand', 'Grubb', 'Hayward', 'Headstrong', 'Holebottom', 'Hornblower', 'Longbottom', 'Noakes', 'Oldbuck', 'Overhill',
            'Proudfoot', 'Puddifoot', 'Roper', 'Rumble', 'Sackville', 'Sandheaver', 'Sandyman', 'Shortfoot', 'Smallburrow', 'Took',
            'Twofoot', 'Underfoot', 'Underhill', 'Whitfoot', 'Ashworthy', 'Bandawax', 'Berrybuck', 'Boffin', 'Bogwart', 'Bottomhill',
            'Bramblefoot', 'Copperkettle', 'Cuthalion', 'Daisypetal', 'Fallohide', 'Fastfoot', 'Ferthumble', 'Frumble', 'Gammidge', 'Gimble',
            'Gladfoot', 'Goldworthy', 'Goodburrow', 'Goodwort', 'Greenmeadow', 'Hamwich', 'Harfoot', 'Haystack', 'Heatherbell', 'Hedgerow'
        ]
    },

    // GNOME NAMES
    'gnome-forest': { alias: 'gnome' },
    'gnome-rock': { alias: 'gnome' },
    'gnome': {
        male: [
            'Alston', 'Alvyn', 'Anverth', 'Arumawann', 'Bilbron', 'Boddynock', 'Brocc', 'Burgell', 'Cockaby', 'Crampernap',
            'Dabbledob', 'Delebean', 'Dimble', 'Eberdeb', 'Eldon', 'Erky', 'Fablen', 'Fibblestib', 'Fonkin', 'Frouse',
            'Frug', 'Gerbo', 'Gimble', 'Glim', 'Gnerkli', 'Igden', 'Jabble', 'Jebeddo', 'Kellen', 'Kipper',
            'Namfoodle', 'Nanfoodle', 'Ningel', 'Nyx', 'Oda', 'Orrin', 'Pangu', 'Pock', 'Qualen', 'Roondar',
            'Saplo', 'Scheppen', 'Seebo', 'Shem', 'Sindri', 'Snimm', 'Stumbleduck', 'Tarlock', 'Tock', 'Warryn',
            'Wentsworth', 'Wiggens', 'Wrenn', 'Zaffrab', 'Zanben', 'Zook', 'Aardak', 'Aldwurt', 'Babak', 'Badger',
            'Bafflestone', 'Bardryn', 'Bendix', 'Bimpnottin', 'Bink', 'Blibdoolpoop', 'Boondiggles', 'Brassballs', 'Brassbeard', 'Briddick',
            'Bumblebrasket', 'Burrowfoot', 'Callapitter', 'Clocksworth', 'Cogglefop', 'Cogsworth', 'Conundrum', 'Copperkettle', 'Cribbins', 'Crinkle'
        ],
        female: [
            'Abalaba', 'Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Darra', 'Demi', 'Duvamil', 'Ella', 'Ellyjobell',
            'Ellywick', 'Enidda', 'Gnarlbone', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Mumpena', 'Nissa', 'Nyx',
            'Oda', 'Orla', 'Pangu', 'Pyntle', 'Quilla', 'Ranala', 'Sapphire', 'Shamil', 'Tana', 'Waywocket',
            'Wrennie', 'Zanna', 'Zanni', 'Bellynore', 'Belmara', 'Berget', 'Bitsy', 'Blossom', 'Bramblefoot', 'Buttercup',
            'Calliope', 'Caraway', 'Coppergear', 'Daffodil', 'Delphinium', 'Dewdrop', 'Dimplewort', 'Dingleberry', 'Dolly', 'Dusty',
            'Etchings', 'Euphonia', 'Fennela', 'Fernwhisk', 'Fiddlefoot', 'Figgy', 'Fizzbucket', 'Fizzle', 'Flicker', 'Floss',
            'Flutter', 'Foxglove', 'Frizzle', 'Gadgetina', 'Gemma', 'Giggles', 'Ginger', 'Glitter', 'Goldenrod', 'Gossamer'
        ],
        surnames: [
            'Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Turen',
            'Aleslosh', 'Ashhearth', 'Badger', 'Bafflestone', 'Balderk', 'Beren', 'Bernegar', 'Bimpnottin', 'Bizzwidget', 'Boddynock',
            'Bogwhistle', 'Brassballs', 'Brightgear', 'Castlefizzle', 'Clockwork', 'Clovenstone', 'Cobbleknob', 'Cogsworthy', 'Copperkettle', 'Copperpot',
            'Crankshaw', 'Crystalvial', 'Daergel', 'Dimble', 'Dingleberry', 'Doodle', 'Dustyboots', 'Fapplestamp', 'Fibblestib', 'Fiddlestix',
            'Fizzlebang', 'Fizzlesprocket', 'Fizzlewit', 'Flickerflame', 'Fnipper', 'Folkor', 'Frostpocket', 'Fumblefoot', 'Gadgetsprocket', 'Garrick',
            'Geargrind', 'Gearhead', 'Gemcutter', 'Glimmer', 'Glittergold', 'Gnomeish', 'Goldengear', 'Grassynoll', 'Greasygears', 'Greenbottle',
            'Hairfoot', 'Hardcheek', 'Hiddleknob', 'Highbury', 'Hornswoggle', 'Ironbottom', 'Jinglebell', 'Kettleblack', 'Kettlebright', 'Lightfingers'
        ]
    },

    // TIEFLING NAMES
    'tiefling': {
        male: [
            'Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai',
            'Morthos', 'Pelaios', 'Skamos', 'Therai', 'Astaroth', 'Aym', 'Bael', 'Caim', 'Charon', 'Cimeies',
            'Cressel', 'Damien', 'Dispater', 'Eacus', 'Forcas', 'Gadreel', 'Geryon', 'Glasya', 'Havres', 'Invidius',
            'Kevarian', 'Khendon', 'Leviathus', 'Malchor', 'Mammon', 'Marchosias', 'Marbas', 'Melchom', 'Moloch', 'Nicor',
            'Ninurta', 'Oriax', 'Paymon', 'Rimmon', 'Samael', 'Seere', 'Semyaza', 'Shabriri', 'Sitri', 'Titivillus',
            'Valac', 'Vassago', 'Xaphan', 'Zagan', 'Zepar', 'Zephon', 'Allocen', 'Andras', 'Andromalius', 'Bathin',
            'Beleth', 'Berith', 'Bifrons', 'Botis', 'Buer', 'Crocell', 'Dantalion', 'Decarabia', 'Eligor', 'Flauros',
            'Focalor', 'Forneus', 'Furcas', 'Furfur', 'Gaap', 'Gamigina', 'Gremory', 'Gusion', 'Haagenti', 'Halphas'
        ],
        female: [
            'Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia',
            'Orianna', 'Phelaia', 'Rieta', 'Ashera', 'Astarte', 'Barbelo', 'Batna', 'Belili', 'Bryseis', 'Byroe',
            'Cannesh', 'Carnivean', 'Damnation', 'Delight', 'Desire', 'Despair', 'Ecstasy', 'Felicity', 'Fortune', 'Glory',
            'Harmony', 'Hope', 'Ideal', 'Joy', 'Liberty', 'Malice', 'Misery', 'Morgana', 'Naamah', 'Nightmare',
            'Passion', 'Poetry', 'Quest', 'Reverence', 'Serenity', 'Sorrow', 'Spite', 'Terror', 'Torment', 'Virtue',
            'Weary', 'Wisdom', 'Alecto', 'Bryseis', 'Carmilla', 'Delilah', 'Echidna', 'Hecate', 'Ishtar', 'Jezebel',
            'Lamia', 'Lilith', 'Medusa', 'Morana', 'Nyx', 'Pandora', 'Persephone', 'Proserpina', 'Selene', 'Styx'
        ],
        surnames: [
            'Ashmore', 'Blackflame', 'Brimstone', 'Darkfire', 'Demonblood', 'Doomwhisper', 'Emberheart', 'Fellhorn', 'Fiendspawn', 'Gloomweaver',
            'Grimshaw', 'Hellbane', 'Hellborn', 'Hellfire', 'Infernus', 'Nightbane', 'Pitborn', 'Shadowbane', 'Soulblight', 'Voidwalker'
        ]
    },

    // DRAGONBORN NAMES
    'dragonborn': {
        male: [
            'Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr',
            'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn', 'Adrex', 'Arux', 'Bahor',
            'Bhaerak', 'Bidresk', 'Braznak', 'Crezak', 'Dalarnok', 'Dharzon', 'Dhurgaz', 'Draahzin', 'Drax', 'Drek',
            'Druxan', 'Farrak', 'Fezrak', 'Gharak', 'Ghorax', 'Gorrak', 'Grax', 'Greznak', 'Hexan', 'Hirrathak',
            'Horrus', 'Jarek', 'Jarex', 'Jharak', 'Jhorax', 'Kalexan', 'Kava', 'Khirrax', 'Khorzak', 'Korthax',
            'Krax', 'Lorethax', 'Luxan', 'Mazrith', 'Medzra', 'Mordax', 'Morrex', 'Nax', 'Nazrith', 'Nexas',
            'Norrak', 'Nurzak', 'Orzak', 'Otivex', 'Prax', 'Prexijandilin', 'Pyrrak', 'Qhevax', 'Razak', 'Reznak',
            'Sarax', 'Shorvax', 'Snarrok', 'Surek', 'Suvrak', 'Tazzar', 'Thrax', 'Thurax', 'Torrak', 'Trox'
        ],
        female: [
            'Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann',
            'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit', 'Azza', 'Bezra', 'Brenada',
            'Crizhaar', 'Darastrix', 'Drathira', 'Eskra', 'Finara', 'Furrha', 'Gessara', 'Gorrana', 'Grihara', 'Hethress',
            'Hillanot', 'Irrha', 'Jezean', 'Jharkira', 'Karra', 'Kathass', 'Kranna', 'Lithara', 'Malora', 'Mizhara',
            'Mozra', 'Nadira', 'Nexra', 'Nithzara', 'Norzara', 'Orza', 'Perhinala', 'Pridrith', 'Qhevrina', 'Razira',
            'Rethkira', 'Salissa', 'Savara', 'Sethrexa', 'Sharhara', 'Shasthara', 'Shirrik', 'Skahnara', 'Sorra', 'Suthara',
            'Tarhina', 'Thaxira', 'Thrassa', 'Tirria', 'Torva', 'Urza', 'Verthica', 'Vorexra', 'Vrakra', 'Wivara',
            'Xurra', 'Yazra', 'Zethira', 'Zofria', 'Zoraia'
        ],
        surnames: [
            'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan',
            'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit', 'Ashenblade', 'Blackscale',
            'Bloodfang', 'Bronzeclaw', 'Burnwing', 'Cinderscale', 'Cobaltclaw', 'Copperhorn', 'Darkcrest', 'Dragonfoe', 'Dreadscale', 'Embertail',
            'Flamecrest', 'Frostfang', 'Goldenwing', 'Ironclaw', 'Jadescale', 'Lightningbreath', 'Mithralscale', 'Obsidianclaw', 'Onyxhorn', 'Platinumwing',
            'Prismaticscale', 'Quicksilver', 'Redcrest', 'Rubyscale', 'Sapphirewing', 'Shadowscale', 'Silvertail', 'Steelclaw', 'Stormbreath', 'Sunscale'
        ]
    },

    // GNOLL NAMES
    'gnoll': {
        names: [
            'Arrk', 'Brakk', 'Churr', 'Drakka', 'Errg', 'Fang', 'Gnash', 'Gnarl', 'Gnaw', 'Grrrk',
            'Hakka', 'Howl', 'Hrakk', 'Hrekka', 'Hyena', 'Jekk', 'Karkk', 'Khrak', 'Kragga', 'Krek',
            'Makka', 'Maugrim', 'Nakka', 'Ragh', 'Rakka', 'Rar', 'Razz', 'Rekka', 'Rend', 'Ripper',
            'Rugg', 'Savage', 'Scar', 'Shank', 'Shred', 'Skulker', 'Slaugh', 'Snarl', 'Snap', 'Snapper',
            'Takka', 'Tear', 'Torr', 'Vakka', 'Vekk', 'Wargh', 'Worg', 'Yakka', 'Yarr', 'Yeenoghu',
            'Zakka', 'Zargash', 'Zerrak', 'Zirr', 'Zurg', 'Bloodfang', 'Bonecrusher', 'Carrion', 'Flayer', 'Gnasher',
            'Gorger', 'Hunter', 'Maneater', 'Marrow', 'Packmaster', 'Ravager', 'Ripper', 'Scavenger', 'Shredder', 'Slayer'
        ],
        titles: ['Bloodmaw', 'Bonechewer', 'Fleshripper', 'Maneater', 'Packleader', 'Savage']
    },

    // GOBLIN NAMES
    'goblin': {
        male: [
            'Blix', 'Boggle', 'Brik', 'Bump', 'Crank', 'Crink', 'Droop', 'Fink', 'Fleek', 'Glob',
            'Gnat', 'Gob', 'Grick', 'Grik', 'Grub', 'Gubz', 'Guk', 'Ink', 'Jank', 'Jink',
            'Kak', 'Kig', 'Klarg', 'Krank', 'Kreek', 'Krink', 'Lickspittle', 'Lunk', 'Mik', 'Mog',
            'Nar', 'Nig', 'Nix', 'Nog', 'Nuk', 'Pik', 'Pog', 'Pok', 'Rat', 'Rik',
            'Rot', 'Scab', 'Scrag', 'Skab', 'Skig', 'Skrik', 'Slek', 'Slig', 'Snig', 'Splug',
            'Squelch', 'Squig', 'Stab', 'Stink', 'Svik', 'Tik', 'Tok', 'Trig', 'Tuk', 'Uggy',
            'Urg', 'Vak', 'Vig', 'Wak', 'Wik', 'Yak', 'Yeemik', 'Zik', 'Zog', 'Zug'
        ],
        female: [
            'Bikli', 'Blit', 'Blurg', 'Drig', 'Flik', 'Gigi', 'Glix', 'Gretch', 'Grit', 'Grizz',
            'Hig', 'Hix', 'Iggi', 'Jixi', 'Kiki', 'Kix', 'Lilli', 'Lix', 'Miki', 'Mix',
            'Nix', 'Pixi', 'Plix', 'Rix', 'Slix', 'Snix', 'Stix', 'Tix', 'Trix', 'Vix',
            'Wix', 'Xix', 'Zix', 'Bixi', 'Brix', 'Crixi', 'Dixi', 'Fixi', 'Gixi', 'Grixi'
        ],
        surnames: [
            'Bignose', 'Bonebiter', 'Caverunner', 'Dirtfoot', 'Dung', 'Earwax', 'Fangface', 'Filth', 'Fungus', 'Grease',
            'Grime', 'Grimefinger', 'Gutripper', 'Lowcrawl', 'Mudfoot', 'Nogknocker', 'Rotgut', 'Scumspine', 'Slimeback', 'Snot',
            'Stinkfoot', 'Swampbreath', 'Wartface', 'Wormguts'
        ]
    },

    // HOBGOBLIN NAMES
    'hobgoblin': {
        male: [
            'Arak', 'Azzak', 'Barug', 'Bragka', 'Brek', 'Dargak', 'Druk', 'Durak', 'Ferok', 'Galak',
            'Garak', 'Gorn', 'Grag', 'Grax', 'Grik', 'Grok', 'Gruumsh', 'Guk', 'Hakka', 'Hazrak',
            'Hrak', 'Hruggek', 'Jhuruk', 'Kargak', 'Klarg', 'Krusk', 'Maglub', 'Marak', 'Morak', 'Murak',
            'Nagrak', 'Narak', 'Nosnra', 'Orgak', 'Orguk', 'Ragak', 'Rhogar', 'Thark', 'Thokk', 'Thraka',
            'Tok', 'Torgak', 'Urak', 'Urgog', 'Varak', 'Vragak', 'Warak', 'Yargak', 'Zarak', 'Zaruk',
            'Zhentil', 'Zog', 'Zuggtmoy', 'Ashok', 'Bhakra', 'Brukka', 'Chakk', 'Dharag', 'Drakkus', 'Ghashnag'
        ],
        female: [
            'Arakka', 'Azzka', 'Baruga', 'Bragga', 'Breka', 'Dargka', 'Druka', 'Duraka', 'Feroka', 'Galaka',
            'Garaka', 'Graga', 'Graxa', 'Grika', 'Groka', 'Guka', 'Hakka', 'Hazra', 'Hraka', 'Karga',
            'Magluba', 'Maraka', 'Moraka', 'Muraka', 'Nagraka', 'Naraka', 'Orgaka', 'Ragaka', 'Tharaka', 'Toka',
            'Torgaka', 'Uraka', 'Urgoga', 'Varaka', 'Vragaka', 'Waraka', 'Yargaka', 'Zaraka', 'Zaruka', 'Zoga'
        ],
        surnames: [
            'Bloodaxe', 'Bonecrusher', 'Deathbringer', 'Doomhammer', 'Fleshrender', 'Goreblade', 'Ironhand', 'Skullcrusher', 'Steelfist', 'Warmonger'
        ]
    },

    // ORC and HALF-ORC NAMES
    'orc': { alias: 'half-orc' },
    'half-orc': {
        male: [
            'Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Karash', 'Keth', 'Krusk', 'Mhurren',
            'Ront', 'Shump', 'Thokk', 'Agar', 'Bajok', 'Brukka', 'Durth', 'Feng', 'Gor', 'Grath',
            'Grummsh', 'Hrogath', 'Karash', 'Kurg', 'Lurg', 'Maugrim', 'Morgak', 'Nazgash', 'Ohr', 'Ragash',
            'Shagak', 'Shugog', 'Thuuk', 'Torgak', 'Ugruk', 'Ugurth', 'Vrak', 'Wurg', 'Yagak', 'Zarash',
            'Azog', 'Bolg', 'Golfimbul', 'Gorbag', 'Gothmog', 'Grishnakh', 'Lagduf', 'Lugdush', 'Mauhur', 'Muzgash',
            'Radbug', 'Shagrat', 'Snaga', 'Ugluk', 'Balcmeg', 'Drukarg', 'Grashnak', 'Grishnak', 'Gurthang', 'Khardak',
            'Kragash', 'Lugbolg', 'Margok', 'Morgash', 'Orthak', 'Purgash', 'Ragash', 'Shakhbur', 'Thrakbor', 'Urgash'
        ],
        female: [
            'Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha',
            'Vola', 'Volen', 'Yevelda', 'Arshag', 'Bashka', 'Durka', 'Ekka', 'Gashna', 'Greka', 'Grishka',
            'Harka', 'Krashka', 'Lurgka', 'Margka', 'Morgka', 'Nashka', 'Ogka', 'Rashka', 'Shagka', 'Tharka',
            'Uglaka', 'Urka', 'Vrashka', 'Yargka', 'Zarashka', 'Azka', 'Bolka', 'Golfka', 'Gorka', 'Gothka',
            'Grishka', 'Lagka', 'Lugka', 'Mauka', 'Muzka', 'Radka', 'Shagka', 'Snagka', 'Ugka', 'Balka'
        ],
        surnames: [
            'Axebane', 'Bloodmaw', 'Bonecrusher', 'Doomhammer', 'Eviscerator', 'Fleshrender', 'Goreblade', 'Ironfist', 'Skullcrusher', 'Warbreaker',
            'Battleborn', 'Blackblood', 'Deathgrip', 'Fearslayer', 'Giantkin', 'Halfblood', 'Ironhide', 'Ravager', 'Splitskull', 'Stonefist'
        ]
    },

    // KOBOLD NAMES
    'kobold': {
        names: [
            'Arix', 'Bik', 'Crix', 'Drak', 'Eek', 'Fik', 'Gik', 'Hik', 'Irik', 'Jix',
            'Kik', 'Lix', 'Meepo', 'Nik', 'Orix', 'Pik', 'Qik', 'Rik', 'Sik', 'Tik',
            'Urik', 'Vik', 'Wik', 'Xik', 'Yik', 'Zik', 'Aak', 'Bak', 'Cak', 'Dak',
            'Eak', 'Fak', 'Gak', 'Hak', 'Iak', 'Jak', 'Kak', 'Lak', 'Mak', 'Nak',
            'Oak', 'Pak', 'Qak', 'Rak', 'Sak', 'Tak', 'Uak', 'Vak', 'Wak', 'Xak',
            'Yak', 'Zak', 'Sniv', 'Snig', 'Snik', 'Snok', 'Pox', 'Dox', 'Nox', 'Vox',
            'Tox', 'Lox', 'Mox', 'Rox', 'Sox', 'Wox', 'Zox', 'Plix', 'Blix', 'Clix'
        ],
        titles: ['Dragonkin', 'Scaleheart', 'Tunnelrunner', 'Trapmaster', 'Cavedelver', 'Gemfinder']
    },

    // YUAN-TI NAMES
    'yuan-ti': {
        male: [
            'Asutali', 'Hisstani', 'Issashti', 'Mehtahi', 'Shahisiti', 'Ssithis', 'Susthis', 'Thississ', 'Ultiss', 'Zaltss',
            'Hasthi', 'Shathiss', 'Assath', 'Hisshah', 'Sassith', 'Thessik', 'Vissith', 'Xissith', 'Zissith', 'Ashiss',
            'Sethiss', 'Hathiss', 'Massith', 'Nassith', 'Passith', 'Rassith', 'Tassith', 'Vassith', 'Wassith', 'Yassith'
        ],
        female: [
            'Asutali', 'Eselatia', 'Hissthis', 'Issalia', 'Ssthistia', 'Suthiss', 'Uthissia', 'Xissthia', 'Yisthalia', 'Zissalia',
            'Hathiss', 'Massitha', 'Nassitha', 'Passitha', 'Rassitha', 'Tassitha', 'Vassitha', 'Wassitha', 'Yassitha', 'Zassitha'
        ],
        surnames: ['Coilborn', 'Fangblade', 'Scalewarden', 'Serpentblood', 'Venomheart', 'Wyrmkin']
    },

    // AASIMAR NAMES (use human + celestial flair)
    'aasimar': { alias: 'human' },

    // GENASI (use human names)
    'genasi-air': { alias: 'human' },
    'genasi-earth': { alias: 'human' },
    'genasi-fire': { alias: 'human' },
    'genasi-water': { alias: 'human' },

    // Other races use simpler naming or aliases
    'goliath': { alias: 'human' },
    'firbolg': { alias: 'elf' },
    'kenku': { alias: 'human' },
    'lizardfolk': { alias: 'human' },
    'tabaxi': { alias: 'human' },
    'triton': { alias: 'elf' },
    'tortle': { alias: 'human' },
    'aarakocra': { alias: 'elf' },
    'warforged': { alias: 'human' },
    'changeling': { alias: 'human' },
    'kalashtar': { alias: 'human' },
    'shifter': { alias: 'human' },
    'bugbear': { alias: 'hobgoblin' },
    'duergar': { alias: 'dwarf' },
    'githyanki': { alias: 'human' },
    'githzerai': { alias: 'human' },
    'kuo-toa': { alias: 'gnoll' },
    'sahuagin': { alias: 'gnoll' },
    'thri-kreen': { alias: 'gnoll' },
    'bullywug': { alias: 'goblin' },
    'grung': { alias: 'goblin' },
    'myconid': { alias: 'gnoll' },

    /**
     * Generate a random name for a humanoid race
     */
    generateName(race) {
        let raceData = this[race];

        // Follow alias chain
        while (raceData && raceData.alias) {
            raceData = this[raceData.alias];
        }

        if (!raceData) {
            return 'Unknown';
        }

        // Handle races with just 'names' array
        if (raceData.names) {
            return raceData.names[Math.floor(Math.random() * raceData.names.length)];
        }

        // Handle races with male/female/surnames
        const isMale = Math.random() > 0.5;
        const firstNames = isMale ? raceData.male : raceData.female;

        if (!firstNames || firstNames.length === 0) {
            return 'Unknown';
        }

        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];

        if (raceData.surnames && raceData.surnames.length > 0) {
            const surname = raceData.surnames[Math.floor(Math.random() * raceData.surnames.length)];
            return `${firstName} ${surname}`;
        }

        return firstName;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HumanoidNames;
}
