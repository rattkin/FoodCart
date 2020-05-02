import { Meal } from './meal';

export const Meals: Meal[] = [
    {
        name: 'Tomato Soup',
        description: 'Rajčatová polévka',
        allergen: '1,7',
        price: 25,
        photo: 'assets/TomatoSoup.jpg',
        packaging: 5,
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Chicken Rara',
        description: 'Kuřecí kostky s jemně pálivou omáčkou',
        allergen: '1,3,7',
        weight: '100g',
        price: 100,
        photo: 'assets/Rara.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Shahi Paneer',
        description: 'Sýrové kostky s jemně pálivou omáčkou',
        allergen: '1,7',
        weight: '100g',
        price: 95,
        photo: 'assets/Shahi Paneer.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Chicken Palak',
        description: 'Kuřecí kostky se špenátem',
        allergen: '1,7',
        weight: '100g',
        price: 100,
        photo: 'assets/Palak.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Chicken Korma',
        description: 'Kuřecí kostky s jemnou omáčkou',
        allergen: '1,7,8',
        weight: '100g',
        price: 100,
        photo: 'assets/Korma.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Chicken Badam Pasanda',
        description: 'Kuřecí kostky s jemnou omáčkou z kokosu a mandlemi',
        allergen: '1,7,8',
        weight: '100g',
        price: 100,
        photo: 'assets/Chicken Badam Pasanda.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Chicken Curry',
        description: 'Kuřecí kostky na kari',
        allergen: '1,7',
        weight: '100g',
        price: 100,
        photo: 'assets/Curry.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Pork Rara',
        description: 'Vepřové kostky s jemnou pálivou omáčkou',
        allergen: '1,3,7',
        weight: '100g',
        price: 100,
        photo: 'assets/Pork Rara.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Palak Paneer',
        description: 'Sýrové kostky se špenátem',
        allergen: '1,7',
        weight: '100g',
        price: 95,
        photo: 'assets/Palak Paneer.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Aloo Rajma',
        description: 'Brambory s fazolemi a kari omáčkou',
        allergen: '1,7',
        weight: '100g',
        price: 95,
        photo: 'assets/Aloo Rajma.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Lamb Kadai',
        description: 'Jehněčí kostky s jemně pálivou omáčkou, paprika, cibule',
        allergen: '1,7',
        weight: '100g',
        price: 135,
        photo: 'assets/Lamb Kadai.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Paneer Badam Pasanda',
        description: 'Sýrové kostky s jemnou pálivou omáčkou z kokosu s mandlemi',
        allergen: '7,8',
        weight: '100g',
        price: 95,
        photo: 'assets/Paneer Badam Pasanda.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Dal Makhani',
        description: 'Indické národní jídlo – čočka',
        allergen: '1,7',
        weight: '100g',
        price: 95,
        photo: 'assets/Dal Makhani.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Malai Kofta',
        description: 'Opečené mleté bramborové kuličky se sýrem, oříšky a jemnou omáčkou',
        allergen: '1,7',
        weight: '100g',
        price: 95,
        photo: 'assets/Malai kofta.jpg',
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Chicken Mango',
        description: 'Kuřecí kostky s jemnou omáčkou z kokosu a manga',
        allergen: '1,7',
        weight: '100g',
        price: 100,
        packaging: 5,
        photo: 'assets/Chicken Mango.jpg',
        sideDish: {},
        type: 'meal',
        class: 'menu',
    },
    {
        name: 'Tomato Soup',
        description: 'Rajčatová polévka',
        allergen: '1,7',
        price: 25,
        photo: 'assets/TomatoSoup.jpg',
        packaging: 5,
        type: 'meal',
        class: 'soup',
    },
    {
        name: 'Chicken Pakora',
        description: 'Ostře kořeněné smažené kuřecí nugety',
        allergen: '1',
        weight: '120g',
        price: 75,
        packaging: 5,
        type: 'meal',
        class: 'starter',
    }, {
        name: 'Vegetarian Pakora',
        description: 'Smažená zelenina',
        allergen: '1',
        weight: '120g',
        price: 60,
        packaging: 5,
        type: 'meal',
        class: 'starter',
    }, {
        name: 'Onion Bhaji',
        description: 'Smažená obalovaná cibule',
        allergen: '1',
        weight: '120g',
        price: 60,
        packaging: 5,
        type: 'meal',
        class: 'starter',
    }, {
        name: 'Papadum',
        description: 'Křupavá placka chips, Indická specialita',
        allergen: '1',
        weight: '10g',
        price: 15,
        type: 'meal',
        class: 'starter',
    }, {
        name: 'Thandori Mix grill',
        description: 'Grilované krevety, kuřecí a jehněčí maso a 2 druhy chutney',
        allergen: '',
        weight: '300g',
        price: 310,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Lamb Tikka',
        description: 'Grilované ostře kořeněné jehněčí kostky a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 215,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Tandoori Gateway Of India',
        description: 'Grilované ostře kořeněné kuřecí kostky a stehno a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 170,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Tandoori Shish Kebab',
        description: 'Mleté a grilované jehněčí maso a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Chicken Saslik',
        description: 'Grilované kuřecí kostky, grilovaná cibule a rajčata a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Chicken Malaj Kebab',
        description: 'Kuřecí kostky marinované ve smetaně s kešu oříšky a 2 druhy chutney',
        allergen: '7,8',
        weight: '220g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Chicken Kastoori Kebab',
        description: 'Jemně kořeněné a grilované kuřecí kostky a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 165,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Chicken Tandoori',
        description: 'Grilované ostře kořeněné kuřecí stehno a prsa a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 165,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Chicken Tikka',
        description: 'Ostře kořeněné a grilované kuřecí kostky a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 165,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Pork Saslik',
        description: 'Grilované vepřové kostky, grilovaná cibule a rajčata a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Pork Tikka',
        description: 'Ostře kořeněné grilované vepřové kostky a 2 druhy chutney',
        allergen: '',
        weight: '220g',
        price: 165,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Green Chicken Tikka',
        description: 'Velmi ostře grilované zelené kuřecí kostky a 2 druhy chutney',
        allergen: '',
        weight: '200g',
        price: 165,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Paneer Saslik',
        description: 'Grilované sýrové kostky, grilovaná cibule a rajčata a 2 druhy chutney. NOVINKA! Specialitakuchaře pro vegetariány',
        allergen: '7',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'tandoor',
    }, {
        name: 'Chicken Thali',
        description: 'Kuřecí kostky, špenát, míchaná zelenina (fazole, hrášek, květák, brambory, mrkev, sýr)',
        allergen: '1,7',
        weight: '200g',
        price: 170,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Mushroom',
        description: 'Kuřecí kostky se žampiony v omáčce',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Tikka Massala',
        description: 'Grilované kuřecí kostky  s ostrou omáčkou',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Chana',
        description: 'Kuřecí kostky s cizrnou',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Dabal Maza',
        description: 'Kuřecí kostky s jemně kořeněnou restovanou zeleninou',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Kadai',
        description: 'Kuřecí kostky s jemně pálivou omáčkou Kadai, paprika, cibule',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Jalfrezi',
        description: 'Kuřecí kostky s jemnou omáčkou s cibulí, paprikou a rajčaty',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Palak',
        description: 'Kuřecí kostky se špenátem',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Badam Pasanda',
        description: 'Kuřecí kostky s jemnou omáčkou z kokosu s mandlemi',
        allergen: '7,8',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Rara',
        description: 'Kuřecí kostky s jemně pálivou omáčkou',
        allergen: '3,7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
        photo: 'assets/Rara.jpg',
    }, {
        name: 'Butter Chicken',
        description: 'Kuřecí kostky s pikantní máslovou omáčkou',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Vindaloo',
        description: 'Kuřecí kostky s bramborami a velmi ostrou omáčkou',
        allergen: '',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Korma',
        description: 'Kuřecí kostky s jemnou omáčkou',
        allergen: '7,8',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Dal',
        description: 'Kuřecí kostky s kari čočkou',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
    }, {
        name: 'Chicken Curry',
        description: 'Kuřecí kostky s kari omáčkou',
        allergen: '7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'chicken',
        photo: 'assets/Curry.jpg',
    }, {
        name: 'Labbader Chicken',
        description: 'Kuřecí kostky s kari omáčkou a jemně krájenou papričkou a kešu, NOVINKA! Specialita kuchaře',
        allergen: '7,8',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Thali',
        description: 'Kořeněné jehněčí kostky, špenát, míchaná zelenina (fazole, hrášek, květák, brambory, mrkev, sýr)',
        allergen: '1,7',
        weight: '200g',
        price: 190,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Mushroom',
        description: 'Jehněčí kostky v houbové omáčce',
        allergen: '7',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Massala',
        description: 'Jehněčí kostky s ostrou omáčkou',
        allergen: '7',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Kadai',
        description: 'Jehněčí kostky s jemně pálivou omáčkou Kadai, paprika, cibule',
        allergen: '7',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Palak',
        description: 'Jehněčí kostky se špenátem',
        allergen: '7',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Badam Pasanda',
        description: 'Jehněčí kostky s jemnou omáčkou z kokosu s mandlemi',
        allergen: '7,8',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Vindaloo',
        description: 'Jehněčí kostky s bramborami a velmi ostrou omáčkou',
        allergen: '',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Lamb Curry',
        description: 'Jehněčí kostky s kari omáčkou',
        allergen: '7',
        weight: '200g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'lamb',
        photo: 'assets/Curry.jpg',
    }, {
        name: 'Lamb Rara',
        description: 'Jehněčí kostky s jemně pálivou omáčkou',
        allergen: '3,7',
        weight: '200g',
        price: 180,
        packaging: 5,
        photo: 'assets/Rara.jpg',
        sideDish: {},
        type: 'meal',
        class: 'lamb',
    }, {
        name: 'Pork Vindaloo',
        description: 'Vepřové kostky s bramborami a velmi ostrou omáčkou',
        allergen: '',
        weight: '200g',
        price: 160,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'pork',
    }, {
        name: 'Pork Curry',
        description: 'Vepřové kostky s kari omáčkou',
        allergen: '7',
        weight: '200g',
        price: 160,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'pork',
        photo: 'assets/Curry.jpg',
    }, {
        name: 'Pork Kadai',
        description: 'Vepřové kostky s jemně pálivou omáčkou Kadai, paprika, cibule',
        allergen: '7',
        weight: '200g',
        price: 160,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'pork',
    }, {
        name: 'Pork Mushroom',
        description: 'Vepřové kostky v houbové omáčce',
        allergen: '7',
        weight: '200g',
        price: 160,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'pork',
    }, {
        name: 'Pork Rara',
        description: 'Vepřové kostky s jemně pálivou omáčkou',
        allergen: '3,7',
        weight: '200g',
        price: 160,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'pork',
        photo: 'assets/Rara.jpg',
    }, {
        name: 'Vegetarian Thali',
        description: 'Indická čočka, špenát, míchaná zelenina (fazole, hrášek, květák, sýr, brambory, mrkev)',
        allergen: '1,7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Paneer Badam Pasanda',
        description: 'Sýrové kostky s jemnou omáčkou z kokosu s mandlemi',
        allergen: '7,8',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Shahi Paneer',
        description: 'Sýrové kostky s jemně pálivou omáčkou',
        allergen: '7',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Palak Paneer',
        description: 'Sýrové kostky se špenátem',
        allergen: '7',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Paneer Korma',
        description: 'Sýrové kostky s jemnou omáčkou',
        allergen: '7,8',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Kadai Paneer',
        description: 'Sýrové kostky s jemně pálivou omáčkou Kadai, paprika, cibule',
        allergen: '7',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Dal Palak',
        description: 'Špenát se žlutým hrachem',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Mattar Mushroom',
        description: 'Žampióny s hráškem ve velmi ostré omáčce',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Rajma Massala',
        description: 'Indické fazole s ostrou omáčkou',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Vegetarian Vindaloo',
        description: 'Míchaná zelenina (fazole, květák, mrkev, sýr, brambory, hrášek) velmi ostrá omáčka s bramborami',
        allergen: '',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Vegetarian Korma',
        description: 'Míchaná zelenina (fazole, květák, mrkev, brambory hrášek, sýr) jemná omáčka s kokosem a kešu oříšky',
        allergen: '7,8',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Dal Makhani',
        description: 'Indické národní jídlo, čočka',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Bombay Aloo',
        description: 'Brambory s indickým kořením',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Aloo Palak',
        description: 'Brambory se špenátem',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Plain Palak',
        description: 'Pikantní špenátem',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Aloo Rajma',
        description: 'Brambory s fazolemi a kari omáčkou',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Mix Vegetables',
        description: 'Kořeněná míchaná zelenina (fazole, hrášek, květák, sýr, brambory, mrkev)',
        allergen: '7',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Malai Kofta',
        description: 'Opečené mleté bramborové kuličky se sýrem, oříšky a jemnou omáčkou',
        allergen: '7,8',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Shahi kofta',
        description: 'Opečené mleté bramborové kuličky se sýrem, oříšky a pikantní omáčkou',
        allergen: '7,8',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Palak Kofta',
        description: 'Opečené mleté bramborové kuličky se sýrem, oříšky a špenátem',
        allergen: '7,8',
        weight: '200g',
        price: 145,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Chana Masala',
        description: 'Cizrna s pikantní omáčkou',
        allergen: '7,8',
        weight: '200g',
        price: 135,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'vege',
    }, {
        name: 'Fish Masala',
        description: 'Kousky ryby v ostré omáčce',
        allergen: '4,7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Fish Curry',
        description: 'Ryba s kari omáčkou',
        allergen: '4,7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
        photo: 'assets/Curry.jpg',
    }, {
        name: 'Rara Fish',
        description: 'Ryba s jemně pálivou omáčkou',
        allergen: '3,4,7',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
        photo: 'assets/Rara.jpg',
    }, {
        name: 'Fish Vindaloo',
        description: 'Ryba s velmi pálivou omáčkou a s bramborami',
        allergen: '4',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Fish Badam Pasanda',
        description: 'Ryba s jemnou omáčkou z kokosu a s mandlemi',
        allergen: '4,7,8',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Fish Korma',
        description: 'Ryba s jemnou omáčkou',
        allergen: '4,7,8',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Prawn Vindaloo',
        description: 'Krevety ve velmi ostré omáčce s bramborami',
        allergen: '',
        weight: '200g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Lumbini Palau',
        description: 'Krevety, směs rýže a míchané zeleniny',
        allergen: '8',
        weight: '200g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Prawn Badam Pasanda',
        description: 'Krevety s jemnou omáčkou z kokosu a s mandlemi',
        allergen: '7,8',
        weight: '200g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Prawn Masala',
        description: 'Krevety s ostrou omáčkou',
        allergen: '7',
        weight: '200g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Prawn Curry',
        description: 'Krevety s kari omáčkou',
        allergen: '7',
        weight: '200g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
        photo: 'assets/Curry.jpg',
    }, {
        name: 'Prawn Kadai',
        description: 'Krevety s jemně pálivou omáčkou Kadai, paprika, cibule',
        allergen: '7',
        weight: '200g',
        price: 175,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'fish',
    }, {
        name: 'Lamb Biryani',
        description: 'Indická rýže s jehněčími kostkami',
        allergen: '7,8',
        weight: '250g',
        price: 180,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'biryani',
    }, {
        name: 'Pork Biryani',
        description: 'Indická rýže s vepřovými kostkami',
        allergen: '7,8',
        weight: '250g',
        price: 160,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'biryani',
    }, {
        name: 'Chicken Biryani',
        description: 'Indická rýže s kuřecími kostkami',
        allergen: '7,8',
        weight: '250g',
        price: 155,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'biryani',
    }, {
        name: 'Vegetarian Biryani',
        description: 'Indická rýže s míchanou zeleninou',
        allergen: '7,8',
        weight: '250g',
        price: 140,
        packaging: 5,
        sideDish: {},
        type: 'meal',
        class: 'biryani',
    },
    {
        name: 'Plain Rice',
        description: 'Indická rýže',
        weight: '100g',
        price: 0,
        packaging: 5,
        type: 'side',
        class: 'menu',
        photo: 'assets/rice.jpg',

    },
    {
        name: 'Tandoori Chapati',
        description: 'Indická placka',
        allergen: '1',
        price: 0,
        type: 'side',
        class: 'menu',
    },
    {
        name: 'Tandoori Chapati',
        description: 'Indická základní placka',
        allergen: '1',
        packaging: 5,
        price: 25,
        type: 'side',
        class: 'side',
        photo: 'assets/Chapati.jpg',
    },
    {
        name: 'Basmati Rice',
        description: 'Indická rýže Basmati',
        allergen: '',
        packaging: 5,
        price: 35,
        type: 'side',
        class: 'side',
        photo: 'assets/rice.jpg',
    },
    {
        name: 'Tandoori Kulcha',
        description: 'Placka plněná bramborami a sýrem',
        allergen: '1',
        packaging: 5,
        price: 50,
        type: 'side',
        class: 'side',
    },
    {
        name: 'Jeera Chawal',
        description: 'Indická rýže Basmati s římským kmínem',
        allergen: '',
        packaging: 5,
        price: 35,
        type: 'side',
        class: 'side',
    },
    {
        name: 'Peas Rice',
        description: 'Indická rýže s hráškem',
        allergen: '',
        packaging: 5,
        price: 35,
        type: 'side',
        class: 'side',
    },
    {
        name: 'Tandoori Garlic Kulcha',
        description: 'Placka plněná směsí brambor a sýra s česnekem',
        allergen: '1',
        packaging: 5,
        price: 50,
        type: 'side',
        class: 'side',
    },
    {
        name: 'Tandoori Garlic Nan',
        description: 'Indická placka s česnekem',
        allergen: '1',
        packaging: 5,
        price: 40,
        type: 'side',
        class: 'side',
        photo: 'assets/Chapati.jpg',
    },
    {
        name: 'Tandoori Punjabi Nan',
        description: 'Indická placka s oříšky',
        allergen: '1,8',
        packaging: 5,
        price: 40,
        type: 'side',
        class: 'side',
        photo: 'assets/Chapati.jpg',
    },
    {
        name: 'Tandoori Protha',
        description: 'Indická národní placka s bylinkami',
        allergen: '1',
        packaging: 5,
        price: 40,
        type: 'side',
        class: 'side',
    },
    {
        name: 'Tandoori Nan',
        description: 'Indické placky sypané mákem a potřené ghee',
        allergen: '1',
        packaging: 5,
        price: 30,
        type: 'side',
        class: 'side',
        photo: 'assets/Chapati.jpg',
    }
];
