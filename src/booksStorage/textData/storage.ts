import { AuthorInterface } from '@/interfaces/storage/authorInterface';

const BASE_PATH = '/src/booksStorage/srcs/books/';

export const authorsData: AuthorInterface[] = [
    // TEMPLATE
    /* {
        name: 'виктор гюго',
        books: [
            {
                title: 'Отверженные',
                year: '1862 г.',
                description: `Отверженные - это роман-эпопея, написанная Виктором Гюго и впервые опубликованная в 1862 году. Этот роман считается одним из величайших произведений XIX века и широко признан мировой литературной критикой и общественностью. Сюжет романа вплетает множество тем и мотивов, включая социальную несправедливость, бедность, несправедливое обращение с нищими и отверженными членами общества, а также мотив прощения и искупления.`,
                genres: ['Роман', 'Биография', 'Антиутопия', 'Триллер', 'Фантастика'],
                quotes: [
                    'Все люди равны перед законом, но не все равны перед природой',
                    'Никто не может быть свободным, если другие не свободны.',
                    'Нельзя быть счастливым, если ты не спасаешь других.'
                ],
                thumbnail: '/thumbs/отверженные.jpg',
                // TEMP FILE PATH
                // mb use import.meta.url
                file: `/src/booksStorage/srcs/books/test2.txt`,
            },
        ],
    }, */
    // GENERATED
    {
        name: "Николас Спаркс",
        books: [
            {
                title: "Взгляни на меня",
                year: "2023 г.",
                description: "\"Взгляни на меня\" - это роман Николаса Спаркса, опубликованный в 2023 году. История рассказывает о любви и преодолении препятствий между двумя молодыми людьми, их пути к счастью и взаимопониманию.",
                genres: ["Роман"],
                quotes: [
                    "Любовь - это то, что делает нас сильнее, когда мы чувствуем себя наиболее слабыми.",
                    "Иногда нам нужно пройти через самые трудные времена, чтобы понять, что на самом деле нас поддерживает.",
                    "Любовь - это не только то, что мы чувствуем, но и то, как мы реагируем на любовь."
                ],
                thumbnail: "/thumbs/взгляниНаМеня.jpg",
                file: `${BASE_PATH}/взгляниНаМеня.txt`
            }
        ]
    },
    {
        name: "Брам Стокер",
        books: [
            {
                title: "Дракула",
                year: "1897 г.",
                description: "\"Дракула\" - это классический роман ужасов, написанный Брэмом Стокером и впервые опубликованный в 1897 году. Книга рассказывает историю Дракулы, вампира, который стремится вернуться в Трансильванию, чтобы найти свою любовь и убить ее мужа.",
                genres: ['Триллер', 'Роман'],
                quotes: [
                    "Я не знаю, что такое вечная ночь, но она не может быть темной, если в ней есть ее собственная звезда.",
                    "Я не могу спать. Я не могу, я не могу, я не могу.",
                    "Я не могу спать. Я не могу, я не могу, я не могу."
                ],
                thumbnail: "/thumbs/дракула.jpg",
                file: `${BASE_PATH}/дракула.txt`,
            }
        ]
    },
    {
        name: "Уолтер Айзаксон",
        books: [
            {
                title: "Илон Маск",
                year: "2015 г.",
                description: "\"Илон Маск\" - биографическая книга, написанная Уолтером Айзаксоном и опубликованная в 2015 году. Книга рассказывает о жизни Элона Мьюса, одного из самых известных предпринимателей и инвесторов нашего времени, основателя компании Tesla и SpaceX.",
                genres: ["Биография"],
                quotes: [
                    "Я не думаю, что какой-то человек может изменить мир, но я думаю, что каждый человек может изменить мир.",
                    "Мы не знаем, что мы можем достичь, пока не попытаемся.",
                    "Мы должны стремиться к тому, чтобы стать лучше."
                ],
                thumbnail: "/thumbs/илонМаск.jpg",
                file: `${BASE_PATH}/илонМаск.txt`,
            },
            {
                title: 'Стив Джобс',
                year: '2011 г.',
                description: '\"Стив Джобс\" - биографическая книга, написанная Уолтером Айзаксоном и опубликованная в 2011 году. Книга рассказывает о жизни Стива Джобса, одного из самых влиятельных предпринимателей и основателей Apple Inc. и Pixar Animation Studios.',
                genres: ['Биография'],
                quotes: [
                    'Вы не умрете, пока не решите, что хотите делать.',
                    'Верить в то, что вы можете сделать, и потом делать это.',
                    'Сделайте то, что вы не можете не делать.'
                ],
                thumbnail: '/thumbs/стивДжобс.jpg',
                file: `${BASE_PATH}/стивДжобс.txt`,
            }
        ]
    },
    {
        name: "Евгений Замятин",
        books: [
            {
                title: "Мы",
                year: "1920 г.",
                description: "\"Мы\" - это научно-фантастический роман, написанный Евгением Замятиным и впервые опубликованный в 1920 году. Книга рассказывает историю общества, где все жители живут в гармонии, но в то же время каждый из них является клоном одного человека - Д-503. Книга затрагивает темы тоталитаризма, индивидуальности и свободы.",
                genres: ['Антиутопия', 'Классика'],
                quotes: [
                    "Мы - это единственные, кто может быть свободным, потому что мы - единственные, кто может быть счастливыми.",
                    "Только тот, кто способен видеть истину, может быть свободным.",
                    "Мы не знаем, кто мы, но мы знаем, кто мы не являемся."
                ],
                thumbnail: "/thumbs/мы.jpg",
                file: `${BASE_PATH}/мы.txt`,
            }
        ]
    },
    {
        name: 'Джордж Оруэлл',
        books: [
            {
                title: '1984',
                year: '1949 г.',
                description: '\"1984\" - это антиутопический роман, написанный Джорджем Оруэллом и впервые опубликованный в 1949 году. Книга рассказывает о обществе, где государство контролирует каждый аспект жизни своих граждан через систему постоянного наблюдения и пропаганды.',
                genres: ['Антиутопия', 'Классика', 'Фантастика'],
                quotes: [
                    'Великий Брат наблюдает за вами.',
                    'Свобода - это не то, что тебе разрешают делать, а то, что тебе разрешают думать.',
                    'Великий Брат всегда прав.'
                ],
                thumbnail: '/thumbs/1984.jpg',
                file: `${BASE_PATH}/1984.txt`,
            }
        ]
    },
    {
        name: 'Крис Картер',
        books: [
            {
                title: 'Распинатель',
                year: '2011 г.',
                description: '\"Распинатель\" - это научно-фантастический роман Криса Картера, опубликованный в 2011 году. Книга рассказывает о будущем, где человечество находится на грани вымирания из-за катастрофического события, известного как "Распинатель".',
                genres: ['Триллер', 'Фантастика'],
                quotes: [
                    'Верить в то, что вы можете сделать, и потом делать это.',
                    'Сделайте то, что вы не можете не делать.',
                    'Верить в то, что вы можете сделать, и потом делать это.'
                ],
                thumbnail: '/thumbs/распинатель.jpg',
                file: `${BASE_PATH}/распинатель.txt`,
            },
            {
                title: 'Взгляд из темноты',
                year: '2013 г.',
                description: '\"Взгляд из темноты\" - это научно-фантастический роман Криса Картера, опубликованный в 2013 году. Книга рассказывает историю о последних днях человечества, когда Земля погружается в вечную ночь, вызванную "Распинателем".',
                genres: ['Триллер', 'Фантастика'],
                quotes: [
                    'Верить в то, что вы можете сделать, и потом делать это.',
                    'Сделайте то, что вы не можете не делать.',
                    'Верить в то, что вы можете сделать, и потом делать это.'
                ],
                thumbnail: '/thumbs/взглядИзТемноты.jpg',
                file: `${BASE_PATH}/взглядИзТемноты.txt`,
            }
        ]
    },
    {
        name: 'Федор Достоевский',
        books: [
            {
                title: 'Идиот',
                year: '1869 г.',
                description: '\"Идиот\" - одно из самых любимых произведений Фёдора Михайловича Достоевского. В нём раскрываются в полной мере творческие принципы автора, а удивительное владение сюжетом достигает подлинного расцвета.',
                genres: ['Роман', 'Классика'],
                quotes: [
                    'Что ложью началось, то ложью и должно было кончиться; это закон природы.',
                    'Нет ничего обиднее человеку нашего времени и племени, как сказать ему, что он не оригинален, слаб характером, без особенных талантов и человек обыкновенный.',
                    'Деньги тем всего подлее и ненавистнее, что они даже таланты дают. И будут давать до скончания мира.'
                ],
                thumbnail: '/thumbs/идиот.jpg',
                file: `${BASE_PATH}/идиот.txt`,
            },
            {
                title: 'Преступление и наказание',
                year: '1866 г.',
                description: '\"Преступление и наказание\" - гениальный роман, главные темы которого: преступление и наказание, жертвенность и любовь, свобода и гордость человека – обрамлены почти детективным сюжетом.Многократно экранизированный и не раз поставленный на сцене, он и по сей день читается на одном дыхании.',
                genres: ['Роман', 'Классика'],
                quotes: [
                    'Тварь ли я дрожащая или право имею?',
                    'Истинно великие люди должны ощущать на свете великую грусть.',
                    'Человек он умный, но чтоб умно поступать — одного ума мало.',
                ],
                thumbnail: '/thumbs/преступлениИнаказание.jpg',
                file: `${BASE_PATH}/преступлениИнаказание.txt`,
            },
        ]
    },
    {
        name: 'Фрэнсис Фицджеральд',
        books: [
            {
                title: 'Великий Гэтсби',
                year: '1925 г.',
                description: '\"Великий Гэтсби\" - превосходная американская классика. Очень интересно и легко написанная история об американской мечте тех годов.',
                genres: ['Роман', 'Фантастика', 'Классика'],
                quotes: [
                    'Если когда-нибудь тебе захочется кого-то критиковать, – сказал он, – вспомни, что далеко не все люди в мире обладают теми преимуществами, которые дарованы тебе.',
                    'Никакое пламя или шквальный ветер не в силах разрушить то, что человек хранит в потаенных уголках своей души.',
                    'Каждый из нас втайне считает себя обладателем хотя бы одной основополагающей добродетели, и признаюсь: я один из немногих честных людей, которых когда-либо знал.'
                ],
                thumbnail: '/thumbs/великийГэтсби.jpg',
                file: `${BASE_PATH}/великийГэтсби.txt`,
            },
        ]
    },
    {
        name: 'Михаил Булгаков',
        books: [
            {
                title: 'Мастер и Маргарита',
                year: '1967 г.',
                description: '\"Великий Гэтсби\" - бессмертное, загадочное и остроумное «Евангелие от Сатаны» Михаила Булгакова. В данном произведении каждый читатель найдет близкое ему.',
                genres: ['Роман', 'Классика'],
                quotes: [
                    'Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами все дадут!',
                    'Ну, что ж, тот, кто любит, должен разделять участь того, кого он любит.',
                    'Да, человек смертен, но это было бы еще полбеды. Плохо то, что он иногда внезапно смертен, вот в чем фокус!'
                ],
                thumbnail: '/thumbs/мастерИмаргарита.jpg',
                file: `${BASE_PATH}/мастерИмаргарита.txt`,
            },
        ]
    },
    {
        name: 'Оскар Уайльд',
        books: [
            {
                title: 'Портрет Дориана Грея',
                year: '1890 г.',
                description: '\"Портрет Дориана Грея\" - самое знаменитое произведение Оскара Уайльда, единственный его роман, вызвавший в свое время шквал негативных оценок и тем не менее имевший невероятный успех.',
                genres: ['Роман', 'Триллер'],
                quotes: [
                    'Мужчины женятся от усталости, женщины – из любопытства. В результате – оба разочарованы.',
                    'Преданные люди видят банальную сторону любви, а вот предатели способны познать ее трагедию.',
                    'В наше время люди знают стоимость всего, но ничему не знают цены.',
                ],
                thumbnail: '/thumbs/портретДорианаГрея.jpg',
                file: `${BASE_PATH}/портретДорианаГрея.txt`,
            },
        ]
    },
];