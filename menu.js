// Menu La Calèche : [catégorie, [[nom, prix en DA], ...]]
const S=[["au sucre roux",300],["à la confiture",300],["au miel",300],["à la crème de citron",400],["caramello",500],["amandine",650]];
const CH=[["",450],["fruits",550],["aux brownies",550],["Nestlé",550],["accompagnement au choix",600],["fruits secs",600],["pistachiella",700]];
const NU=[800,850,850,850,900,900,1000];
const sweet=(n,fet)=>[...S.map(([a,p])=>[`${n} ${a}`,p]),...CH.map(([a,p])=>[`${n} chocolat ${a}`.trim(),p]),...CH.map(([a],i)=>[`${n} nutella ${a}`.trim(),NU[i]]),...(fet?[[`${n} fettuccine chocolat`,700],[`${n} fettuccine nutella`,1000]]:[])];
const MENU=[
["Petit déjeuner",[["Algérien",700],["Continental",850],["Granola bowl",1000],["Menu enfant",900],["Matinal",900],["Complet",1400],["Brunch",1600],["Healthy",1600]]],
["Signatures salées",[["Salade la calèche",600],["Scrambled eggs",600],["Plat poulet grillé",900],["Poêle du chef",1000],["Çilbir",1000],["Poched egg burrata",1200]]],
["Cafés",[["Expresso",300],["Expresso capsule",400],["Expresso double shot",400],["Américano",400],["Café viennois",350],["Capucin",300],["Capucin Nestlé",350],["Café crème",350],["Cappuccino",400],["Latté aromatisé",400],["Macchiato caramel",350],["Tasse de lait",200],["Chocolat au lait",250]]],
["Chocolats chauds",[["Chocolat chaud simple",350],["Chocolat chaud liégeois",400],["Chocolat chaud cookies ou oreo",450],["Chocolat chaud banane",450],["Chocolat chaud aux fruits secs",500],["Chocolat chaud la calèche",500]]],
["Thés",[["Thé à la menthe",200],["Grand thé à la menthe",300],["Thé aux amandes",350],["Thé la calèche",400],["Thé glacé",400],["Infusion",250],["Thé aux pignons",650]]],
["Milkshakes",[["Milkshake fraise",700],["Milkshake banane",700],["Milkshake chocolat",700],["Milkshake oreo",800],["Milkshake pistache",900]]],
["Cafés frappés",[["Frappuccino nature",400],["Frappuccino vanille/caramel/noisette",450],["Frappuccino chocolat",500],["Frappuccino nutella",850],["Frappuccino spéculoos",600],["Affogato",600],["Pistachio affogato",850]]],
["Iced coffee",[["Iced americano",450],["Iced latté",500],["Iced spanish latté",600],["Iced dulce de leche latté",600]]],
["Chocolats glacés",[["Chocolat glacé nature",400],["Chocolat glacé cookies",450],["Chocolat glacé (kinder, Milka ou spéculoos)",650],["Chocolat glacé la calèche",700]]],
["Jus naturels",[["Citronnade",450],["Citronnade aux amandes",500],["Citronnade royale",650],["Jus d'orange",450],["Jus de fraise",500],["Jus de pêche",500],["Jus de banane",500],["Jus de fruits",500]]],
["Cocktails",[["Cocktail fraise banane",600],["Cocktail banane citron",600],["Cocktail banane pomme",600],["Cocktail nutella banane",800],["Cocktail banane noix",650],["Cocktail caramel noisette",650],["Pina colada",650]]],
["Smoothies",[["Pink smoothie",600],["Banania smoothie",600],["Talamanca smoothie",850]]],
["Mojitos",[["Virgin mojito",450],["Red mojito",500],["Bleu mojito",500],["IZEM mojito",600]]],
["Matchas (glacé ou chaud)",[["Matcha espresso",700],["Matcha latté",750],["Matcha frappucino",750],["Matcha caramel",750],["Matcha strawberry",850],["Matcha affogato",850],["Matcha ube latté",1200]]],
["Ubes (glacé ou chaud)",[["Ube espresso",700],["Ube latté",750],["Ube frappucino",750],["Ube caramel",750],["Ube strawberry",850],["Ube affogato",850]]],
["Eaux et sodas",[["Eau minérale",60],["Pétillante",100],["Soda",200],["IZEM énergétique",200]]],
["Crêpes salées",[["Crêpe jambon fumé",500],["Crêpe salami, jambon de poulet",500],["Crêpe thon fromage",600],["Crêpe escalope de poulet",600],["Crêpe 4 fromages",600],["Crêpe bolognaise",600],["Crêpe viande hachée et escalope de poulet",700],["Crêpe spéciale (thon, salami, jambon, œufs)",700]]],
["Suppléments",[["Supplément œuf",50],["Supplément gruyère",200],["Supplément cheddar",200],["Supplément camembert",150],["Portion frites",200],["Supplément champignons",250]]],
["Crêpes fourrées gratinées",[["Crêpe fourrée jambon fumé",600],["Crêpe fourrée thon fromage",700],["Crêpe fourrée 4 fromages",700],["Crêpe fourrée escalope de poulet",700],["Crêpe fourrée bolognaise",700],["Crêpe fourrée viande hachée et escalope de poulet",700]]],
["Paninis",[["Panini 4 fromages",350],["Panini thon fromage",400],["Panini salami jambon",350],["Panini jambon fumé",350],["Panini poulet",400],["Panini viande",400],["Panini mixte",400]]],
["Omelettes",[["Omelette fromage",450],["Omelette thon",500],["Omelette salami jambon",500],["Omelette jambon fumé",500],["Omelette poulet",600],["Burger omelette",600],["Omelette champignon",600]]],
["Pastas",[["Pasta 4 fromages",700],["Pasta arrabiata",700],["Pasta poulet",750],["Pasta bolognaise",750],["Lasagne bolognaise",750],["Pasta poulet champignons",900]]],
["Warps",[["Warp poulet",500],["Warp viande",500],["Warp thon",500],["Warp merguez",600]]],
["Croques monsieur",[["Croque fromage",350],["Croque salami, jambon, œufs",350],["Croque thon",400],["Croque poulet",400],["Croque viande",400]]],
["Burger",[["Classic burger",550]]],
["Crêpes sucrées",sweet("Crêpe",1)],
["Gaufres",sweet("Gaufre")],
["Pancakes",sweet("Pancake")],
["Fondants",[["Fondant chocolat",450],["Fondant chocolat crème anglaise",600],["Fondant pistache",850],["Fondant pistache crème anglaise",1000]]],
["Glaces",[["Affogato glace",550],["Coupe simple",600],["Chocolat liégeois",700],["Banana split",750]]],
["Pain perdu",[["Pain perdu amandine",500],["Pain perdu caramello",600],["Pain perdu pistachio",700]]]
];