export interface Data {
    name: string;
    value: string | number;
};

// Основная Информация
export const sexData: Data[] = [
    { name: 'Женский', value: 'Женский' },
    { name: 'Мужской', value: 'Мужской' },
    { name: 'Транс', value: 'Транс' },
];

// Личная Информация
export const heightPerson: Data[] = [
    { name: 'Не указывать', value: 0 },
    { name: '140см', value: 140 },
    { name: '141см', value: 141 },
    { name: '142см', value: 142 },
    { name: '143см', value: 143 },
    { name: '144см', value: 144 },
    { name: '145см', value: 145 },
    { name: '146см', value: 146 },
    { name: '147см', value: 147 },
    { name: '148см', value: 148 },
    { name: '149см', value: 149 },
    { name: '150см', value: 150 },
];

export const weightPerson: Data[] = [
    { name: 'Не указывать', value: 0 },
    { name: '50кг', value: 50 },
    { name: '51кг', value: 51 },
    { name: '52кг', value: 52 },
    { name: '53кг', value: 53 },
    { name: '54кг', value: 54 },
    { name: '55кг', value: 55 },
    { name: '56кг', value: 56 },
    { name: '57кг', value: 57 },
    { name: '58кг', value: 58 },
    { name: '59кг', value: 59 },
    { name: '60кг', value: 60 },
];

export const bodyTypePerson: Data[] = [
    { name: 'Не указывать', value: 'Не указывать' },
    { name: 'Худое', value: 'Худое' },
    { name: 'Среднее', value: 'Среднее' },
    { name: 'Мускулистое', value: 'Мускулистое' },
    { name: 'Полное', value: 'Полное' },
];

export const eyeColorPerson: Data[] = [
    { name: 'Не указывать', value: 'Не указывать' },
    { name: 'Голубые', value: 'Голубые' },
    { name: 'Серые', value: 'Серые' },
    { name: 'Зеленые', value: 'Зеленые' },
    { name: 'Буро-жёлто-зелёные', value: 'Буро-жёлто-зелёные' },
    { name: 'Желтые', value: 'Желтые' },
    { name: 'Светло-карии', value: 'Светло-карии' },
    { name: 'Карии', value: 'Карии' },
    { name: 'Тёмно-карии', value: 'Тёмно-карии' },
];

export const interestsPerson: Data[] = [
    { name: 'Кино', value: 'Кино' },
    { name: 'Прогулки', value: 'Прогулки' },
    { name: 'Учиться', value: 'Учиться' },
    { name: 'Играть в компьютер', value: 'Играть в компьютер' },
    { name: 'Спорт', value: 'Спорт' },
    { name: 'Клубы', value: 'Клубы' },
    { name: 'Гулять', value: 'Гулять' },
];

export const characterPerson: Data[] = [
    { name: 'Не указывать', value: 'Не указывать' },
    { name: 'Спокойный', value: 'Спокойный' },
    { name: 'Уровновешенный', value: 'Уровновешенный' },
    { name: 'Вспыльчивый', value: 'Вспыльчивый' },
];

export const familyStatusPerson: Data[] = [
    { name: 'Не указывать', value: 'Не указывать' },
    { name: 'Свободен/свободна', value: 'Свободен(-на)' },
    { name: 'Разведен/а', value: 'Разведен(-а)' },
    { name: 'В отношениях', value: 'В отношениях' },
    { name: 'Женат/замужем', value: 'Женат/замужем' },
];

export const orientationPerson: Data[] = [
    { name: 'Не указывать', value: 'Не указывать' },
    { name: 'Гетеросексуальность', value: 'Гетеросексуальность' },
    { name: 'Бисексуальность', value: 'Бисексуальность' },
    { name: 'Гомосексуальность', value: 'Гомосексуальность' },
];

// Хочу Найти
export const personSearch: Data[] = [
    { name: 'Не важно', value: 'Не важно' },
    { name: 'Мужчину', value: 'Мужчину' },
    { name: 'Женщину', value: 'Женщину' },
    { name: 'Друга', value: 'Друга' },
];

export const personsQualities = [
    { name: 'Не важно', value: 'Не важно' },
    { name: 'Уверенность', value: 'Уверенность' },
    { name: 'Ответственность', value: 'Ответственность' },
    { name: 'Трудолюбие', value: 'Трудолюбие' },
];