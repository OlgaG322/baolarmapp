const phrases = {
    general: [
        "Конечно, ЭТОТ ролик точно будет последним. Как и предыдущие 47",
        "Да, давай досмотрим сезон. Сон переоценен, а мешки под глазами — это модно",
        "'Высплюсь на выходных' — план человека, который не понимает, как работает организм",
        "Ага, завтра точно ляжешь раньше. Как и позавчера обещал, и позапозавчера...",
        "Ты экономишь время ночью, чтобы потратить его на зевоту днем. Эффективно!",
        "Зачем спать 8 часов, если можно спать 4 и чувствовать себя на все 100... процентов отвратительно",
        "Поздравляю! Ты снова доказал, что можешь превратить простую задачу 'лечь спать' в квест на выживание",
        "Твоя способность находить 'важные' дела в 2 ночи достойна Нобелевки по самосаботажу",
        "Не сдавайся! У тебя получится наладить режим. Может быть. Когда-нибудь.",
        "Тебе кажется, что ты обманываешь время. Спойлер: время побеждает",
        "Попробуй удивить меня — засни раньше полуночи. Я уже 200 лет таких чудес не видел",
        "Попробуем сегодня лечь до полуночи? Я знаю, звучит безумно...",
        "Твой баобаб верит в тебя! Ну... почти верит. Иногда.",
        "Браво! Ты мастерски превратил базовую потребность человека в олимпийский вид спорта по самоистязанию",
        "Твоя суперсила — делать из 8-часового сна 4-часовую пытку. Впечатляюще бесполезно!",
        "Потрясающе! Ты каждую ночь изобретаешь новые способы издеваться над единственным человеком, который тебе дорог — над собой",
        "Твой мозг: 'Хочу спать'. Ты: 'Нет, давай листать мемы'. Призрак логики плачет где-то в углу",
        "Великолепно! Ты снова доказал, что можешь быть злейшим врагом самому себе без всяких усилий",
        "Твоя логика: 'Завтра важный день, поэтому лягу в 3 ночи'. Премию Дарвина в студию!",
        "Поздравляю, ты превратил сон из удовольствия в квест 'найди 4 часа между прокрастинацией и будильником'",
        "Твоя кровать думает, что ты съехал с квартиры. Может, пора познакомиться заново?",
        "Я выживаю в пустыне без воды лучше, чем ты — без нормального сна",
        "Мои корни уходят глубже в землю, чем твои отговорки — в реальность",
        "Ты живешь так, будто у тебя запасная жизнь в шкафу на случай, если эту испортишь недосыпом",
        "Твоя стратегия 'проживу на кофеине' работает примерно как зонтик в торнадо",
        "Ты копишь усталость как другие финансовую подушку. Так себе стратегия",
        "Ты живешь как персонаж экшена — будто каждая ночь может стать последней, поэтому спать нельзя",
        "Ты поступаешь с режимом сна как камикадзе — красиво, но с предсказуемым финалом",
        "Ты относишься к своему здоровью как к бесконечному ресурсу в видеоигре. Новость: читы не работают",
        "Твоя жизненная философия: 'Зачем спать сегодня, если можно страдать завтра?'",
        "Ты словно пытаешься доказать вселенной, что человек может эволюционировать в ночное существо. Эксперимент провален",
        "Похоже, твоя жизненная миссия — превратить каждое утро в экзистенциальный кризис. Удачного недосыпа!",
        "Ты коллекционируешь бессонные ночи как философ — ищешь смысл там, где его нет",
        "Твоя стратегия выживания: 'Сон для слабых, кофе — для сильных'. Крепкая позиция... до первого нервного срыва",
        "Только в параллельной реальности, где время течет по-другому, 2 часа ночи равны 'еще рано'",
        "Твоя душа вечна, а вот нервная система — нет",
        "Наблюдаю философский парадокс: ты хочешь жить полной жизнью, но методично сливаешь свою энергию",
        "Твое тело — храм. Жаль, что ты его используешь как дешевую круглосуточную забегаловку",
        "Говорят, что безвыходных ситуаций не бывает, но твой режим сна создает новые проблемы быстрее, чем решаются старые",
        "Ты живешь так, будто планируешь стать совой в следующей жизни",
        "Анонс блокбастера 'завтра начну жить правильно' слышен от тебя уже который год. Когда премьера?",
        "Твоя жизнь как постмодернистское искусство: никто не понимает, что происходит, но как-то неприятно на это смотреть",
        "Твой режим сна — это перформанс в стиле дадаизма: бессмысленно, хаотично, но ты называешь это искусством",
        "Ты создаешь авангардную инсталляцию под названием 'Человек против подушки'. Зрители в ужасе",
        "Твоя жизнь снова как сюрреалистическая картина: время течет странно, реальность искажена, жизненные цели почти растаяли",
        "Поздравляю! Ты мастер абстрактного экспрессионизма в области саморазрушения",
        "Твой график сна — чистый кубизм: все разломано на части и собрано неправильно",
        "Ты практикуешь минимализм в сне и максимализм в прокрастинации. Противоречивая концепция",
        "И снова утро в стиле импрессионистов: размытые контуры, неясные очертания, все в тумане",
        "Абстрактная композиция 'Мой режим дня' — провокационная работа о саморазрушении через недосып. Критики в растерянности",
        "Твоя концептуальная инсталляция 'Зомби на работе' получает премию за реализм",
        "Перед вами автопортрет в состоянии хронического недосыпа. Масло, кофе, отчаяние",
        "Серия работ 'Недоспанные будни' — исследование границ человеческой глупости",
        "Инсталляция 'Кровать как декорация' — ироничная работа о предметах, потерявших свое назначение",
        "Ты создал неоклассическую трагедию в трех актах: 'Не хочу спать', 'Хочу спать', 'Поздно спать'",
        "Твой жизненный цикл похож на реди-мейд Дюшана: взял обычную потребность, поставил вверх ногами и назвал искусством. Жаль, что никто не оценит",
        "Ты практикуешь конструктивизм наоборот: разрушаешь структуру сна для создания хаоса"
    ],
    bad: [
        "Доброе утро, зомби! Как спалось целых 4 часа?",
        "Удивительно, как ты каждый день удивляешься, что устал",
        "Кофе не поможет. Но можешь попробовать — мне весело смотреть",
        "Посмотри на себя — ты почти справился! Всего-то проспал 3 будильника",
        "Твоя энергия в течение дня достойна кисти абстракциониста: никто не понимает, что это должно означать"
    ],
    good: [
        "Ого! Целых 8 часов сна? Ты случайно не перепутал себя с нормальным человеком?",
        "Невероятно! Твои глаза не похожи на два кратера от метеоритов. Чудеса случаются!",
        "Ты выглядишь почти как человек, который выспался. Почти.",
        "Поздравляю! Ты снова доказал, что можешь спать как нормальный человек. Почти.",
        "Ты сегодня выглядишь почти как человек, а не как зомби. Почти."
    ]
};

const sarcasticButtonLabels = [
    "В это время я притворюсь, что ложусь спать",
    "Мой план: уснуть хотя бы к этому часу",
    "Мечтаю заснуть к этому времени",
    "Я обещаю себе лечь спать в это время (ха-ха)",
    "Поставить несбыточный дедлайн для сна",
    "Установить время для очередной неудачной попытки уснуть",
    "Моя очередная попытка лечь пораньше",
    "Буду в кровати... ну, типа",
    "Я укажу время, а организм всё равно проигнорирует",
    "Планирую заснуть к этому времени (но это не точно)",
    "В это время я, возможно, уже буду считать овец",
    "Попробую удивить себя и лечь спать вовремя",
    "Установить время для вечерних самообманов",
    "Поставить время, когда я должен был бы спать",
    "Установить время для очередного провала сна"
];

let sleepStart = null;
let alarmTime = null;
const generalSound = new Audio('notification.mp3');
const alarmSound = new Audio('alarm.mp3');
let notificationInterval = null;

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
}

function playSoundRepeatedly(audio, times) {
    let count = 0;
    const playSound = () => {
        if (count < times) {
            audio.currentTime = 0;
            audio.play();
            count++;
            audio.onended = playSound;
        }
    };
    playSound();
}

function updateClock() {
    const now = new Date();
    document.getElementById('currentTime').textContent = 
        now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    checkAlarm(now);
    checkMidnight(now);
    setTimeout(updateClock, 1000);
}

function requestNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

function showRandomGeneralComment() {
    document.getElementById('comment').textContent = getRandomPhrase('general');
}

function setRandomButtonLabel() {
    const phraseSpan = document.getElementById('alarmPhrase');
    phraseSpan.textContent = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
}

function startBackgroundChecks() {
    notificationInterval = setInterval(() => {
        if (Notification.permission === 'granted') {
            new Notification(getRandomPhrase('general'));
            playSoundRepeatedly(generalSound, 3);
        }
    }, 60 * 1000);
    setInterval(checkMidnight, 60 * 60 * 1000);
}

function checkAlarm(now) {
    if (alarmTime && now >= alarmTime) {
        triggerAlarm();
        alarmTime = null;
    }
}

function checkMidnight(now = new Date()) {
    if (now.getHours() === 0 && now.getMinutes() === 0 && !sleepStart) {
        showMidnightNotification();
    }
}

function triggerAlarm() {
    playSoundRepeatedly(alarmSound, 3);
    if (navigator.vibrate) navigator.vibrate([1000, 500, 1000]);
    if (Notification.permission === 'granted') {
        new Notification('Пора вставать!', {
            body: getRandomPhrase('general'),
            icon: 'icon-192.png'
        });
    }
}

function showMidnightNotification() {
    if (Notification.permission === 'granted') {
        new Notification('Полночь!', {
            body: 'Ты ещё не лёг спать! ' + getRandomPhrase('general'),
            icon: 'icon-192.png'
        });
    }
}

// --- POPUP LOGIC ---

const setAlarmBtn = document.getElementById('setAlarm');
const alarmPhrase = document.getElementById('alarmPhrase');
const timePopup = document.getElementById('timePopup');
const popupHours = document.getElementById('popupHours');
const popupMinutes = document.getElementById('popupMinutes');
const popupOkBtn = document.getElementById('popupOkBtn');
const sleepTimeDisplay = document.getElementById('sleepTimeDisplay');
const commentDiv = document.getElementById('comment');
const wakeBtn = document.getElementById('wakeBtn');
const sleepBtn = document.getElementById('sleepBtn');
const sleepStatus = document.getElementById('sleepStatus');

function fillTimeSelects() {
    popupHours.innerHTML = '';
    popupMinutes.innerHTML = '';
    for (let h = 0; h < 24; h++) {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h.toString().padStart(2, '0');
        popupHours.appendChild(opt);
    }
    for (let m = 0; m < 60; m += 5) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m.toString().padStart(2, '0');
        popupMinutes.appendChild(opt);
    }
}
fillTimeSelects();

setAlarmBtn.addEventListener('click', () => {
    timePopup.style.display = 'flex';
});

popupOkBtn.addEventListener('click', () => {
    const hours = popupHours.value.padStart(2, '0');
    const minutes = popupMinutes.value.padStart(2, '0');
    const now = new Date();
    alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    timePopup.style.display = 'none';

    // Показываем выбранное время по центру на розовой кнопке
    setAlarmBtn.classList.add('centered');
    alarmPhrase.textContent = `Дедлайн сна: ${hours}:${minutes}`;
    alarmPhrase.style.textAlign = 'center';
});

window.addEventListener('click', (event) => {
    if (event.target === timePopup) {
        timePopup.style.display = 'none';
    }
});

// --- END POPUP LOGIC ---

wakeBtn.addEventListener('click', () => {
    if (!sleepStart) return;
    const sleepDurationMs = new Date() - sleepStart;
    const sleepDurationHours = sleepDurationMs / 3600000;
    const commentType = sleepDurationHours >= 7 ? 'good' : 'bad';
    commentDiv.textContent = getRandomPhrase(commentType);
    sleepStatus.textContent = 'Не спит';
    sleepStatus.classList.remove('spit');
    sleepStatus.classList.add('nespit');
    playSoundRepeatedly(alarmSound, 3);
    if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
    sleepStart = null;

    // Показываем надпись с подсчётом времени сна вместо кнопки "Я проснулся"
    sleepTimeDisplay.textContent = `Вы спали примерно ${sleepDurationHours.toFixed(2)} часов`;
    sleepTimeDisplay.style.display = 'block';
    wakeBtn.style.display = 'none';
});

sleepBtn.addEventListener('click', () => {
    sleepStart = new Date();
    sleepStatus.textContent = 'Спит';
    sleepStatus.classList.remove('nespit');
    sleepStatus.classList.add('spit');
    commentDiv.textContent = getRandomPhrase('general');
    // Скрыть надпись с подсчётом времени сна, показать кнопку "Я проснулся"
    sleepTimeDisplay.style.display = 'none';
    wakeBtn.style.display = 'block';
    // Кнопка снова становится активной и белой с синими буквами
    wakeBtn.classList.remove('awake');
    wakeBtn.style.background = "#fff";
    wakeBtn.style.color = "#1e3c72";
    wakeBtn.style.border = "1.5px solid #1e3c72";
    wakeBtn.style.opacity = "1";
    wakeBtn.style.pointerEvents = "auto";
    wakeBtn.style.cursor = "pointer";
    wakeBtn.style.boxShadow = "none";
    // Возвращаем розовой кнопке выравнивание по левому краю и фразу
    setAlarmBtn.classList.remove('centered');
    setRandomButtonLabel();
    alarmPhrase.style.textAlign = 'left';
});

function initApp() {
    updateClock();
    requestNotifications();
    showRandomGeneralComment();
    startBackgroundChecks();
    setRandomButtonLabel();
}

document.addEventListener('DOMContentLoaded', initApp);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker зарегистрирован'))
        .catch(err => console.error('Ошибка регистрации SW:', err));
}
