# Інструкція з додавання фото та відео в галерею

## Структура галереї

Галерея поділена на 4 категорії:

1. **Механічні форсунки** (`#mechanical`) - від 800 грн
2. **ТНВД** (`#tnvd`) - від 3000 грн  
3. **Common Rail форсунки** (`#commonrail`) - від 2000 грн
4. **Грузові форсунки** (`#truck`) - від 3000 грн

## Як додати фото

### Крок 1: Підготовка фото
- Оптимальний розмір: 800x600 пікселів
- Формат: JPG або PNG
- Назва файлу: латиницею, без пробілів (наприклад: `bosch-injector-1.jpg`)

### Крок 2: Розміщення файлу
Покладіть фото у папку `img/` 

### Крок 3: Додавання в галерею
Відкрийте файл `gallery.html` та знайдіть потрібну секцію.

**Приклад для механічної форсунки:**

```html
<div class="gallery-item" data-category="mechanical">
    <div class="gallery-item-inner">
        <img src="img/bosch-injector-1.jpg" alt="BOSCH форсунка">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>Форсунка BOSCH</h4>
                <p>До та після ремонту</p>
                <span class="gallery-price">800 грн</span>
            </div>
        </div>
    </div>
</div>
```

Замініть:
- `img/bosch-injector-1.jpg` - шлях до вашого фото
- `BOSCH форсунка` - назва форсунки
- `До та після ремонту` - опис
- `800 грн` - ціна

## Як додати відео

### Крок 1: Підготовка відео
- Формат: MP4 (найкращий для веб)
- Розмір: до 50 МБ
- Назва: латиницею без пробілів (наприклад: `injector-repair.mp4`)

### Крок 2: Розміщення файлу
Покладіть відео у папку `img/`

### Крок 3: Додавання в галерею

**Приклад для відео:**

```html
<div class="gallery-item gallery-item-video" data-category="mechanical">
    <div class="gallery-item-inner">
        <video controls poster="img/video-poster.jpg">
            <source src="img/injector-repair.mp4" type="video/mp4">
            Ваш браузер не підтримує відео
        </video>
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4><i class="fas fa-play-circle"></i> Процес ремонту</h4>
                <p>Механічна форсунка</p>
            </div>
        </div>
    </div>
</div>
```

Замініть:
- `img/injector-repair.mp4` - шлях до відео
- `img/video-poster.jpg` - превью зображення (опційно)
- `Процес ремонту` - назва відео
- `Механічна форсунка` - опис

## Категорії (data-category)

При додаванні фото/відео обов'язково вказуйте правильну категорію:

- `mechanical` - Механічні форсунки
- `tnvd` - ТНВД
- `commonrail` - Common Rail
- `truck` - Грузові форсунки

## Приклади для кожної категорії

### Механічні форсунки
```html
<div class="gallery-item" data-category="mechanical">
    <div class="gallery-item-inner">
        <img src="img/mechanical-bosch.jpg" alt="Механічна форсунка BOSCH">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>Форсунка BOSCH</h4>
                <p>Заміна розпилювача</p>
                <span class="gallery-price">850 грн</span>
            </div>
        </div>
    </div>
</div>
```

### ТНВД
```html
<div class="gallery-item" data-category="tnvd">
    <div class="gallery-item-inner">
        <img src="img/tnvd-zexel-vrz.jpg" alt="ТНВД ZEXEL VRZ">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>ZEXEL VRZ</h4>
                <p>Капітальний ремонт</p>
                <span class="gallery-price">від 10000 грн</span>
            </div>
        </div>
    </div>
</div>
```

### Common Rail
```html
<div class="gallery-item" data-category="commonrail">
    <div class="gallery-item-inner">
        <img src="img/commonrail-bosch.jpg" alt="Common Rail BOSCH">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>CR BOSCH</h4>
                <p>Електромагнітна форсунка</p>
                <span class="gallery-price">від 2000 грн</span>
            </div>
        </div>
    </div>
</div>
```

### Грузові форсунки
```html
<div class="gallery-item" data-category="truck">
    <div class="gallery-item-inner">
        <img src="img/truck-injector-bosch.jpg" alt="Грузова форсунка BOSCH">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>BOSCH Грузова CR</h4>
                <p>Common Rail для вантажівок</p>
                <span class="gallery-price">від 3000 грн</span>
            </div>
        </div>
    </div>
</div>
```

## Де додавати в коді

Відкрийте `gallery.html` та знайдіть відповідну секцію:

1. **Механічні форсунки** - секція `<section class="gallery-section" id="mechanical">`
2. **ТНВД** - секція `<section class="gallery-section" id="tnvd">`
3. **Common Rail** - секція `<section class="gallery-section" id="commonrail">`
4. **Грузові** - секція `<section class="gallery-section" id="truck">`

Додавайте нові елементи всередині `<div class="gallery-grid">` у потрібній секції.

## Рекомендації

1. **Якість фото**: Використовуйте чіткі, добре освітлені фото
2. **Формат відео**: MP4 - найкращий вибір для веб
3. **Розмір файлів**: Оптимізуйте великі файли для швидшого завантаження
4. **Кількість**: Додавайте 3-6 елементів в кожну категорію
5. **Оновлення**: Регулярно додавайте нові роботи

## Тестування

Після додавання фото/відео:
1. Збережіть файл `gallery.html`
2. Відкрийте сторінку в браузері
3. Перевірте фільтри
4. Перевірте відображення на мобільних пристроях

## Підтримка

Якщо виникають проблеми з додаванням фото/відео, зверніться до розробника.
