# Сайт-галлерея. Описание установки и проделанной работы.


Админка Directus доступна по адресу http://localhost:8055/
Интерфейс доступен по адресу http://localhost:3000/
Логин и пароль для Directus:
lol.akkaunt192@gmail.com
Eternal1984


Описание решения в произвольном виде
В первую очередь я настроил необходимое окружение, так как выполнял проект на новом ПК.
Установил Node.js, версию которого чуть позже пришлось понизить до версии 18.20.3 с помощью NVM, так как Directus не работает с последними версиями.
Установил и настроил Directus, в качестве базы данных выбрал SQLite.
В админке создал коллекцию photos, куда можно загружать картинки для сайта. Добавил поле title для отображения названия при открытии. Выдал публичной роли права на просмотр коллекции.
Далее я создал новый проект с React, установил MobX, библиотеку для HTTP-запросов и CSS-фреймворк (Axios и Tailwind)
Затем я создал директорию для MobX и добавил туда js файл, отвечающий за получение данных о картинках.
Также я создал компоненты для отображения картинок, а также их увеличенных версий.
Далее с помощью CSS я добавил стилизацию галереи и окна увеличенной картинки, изменил цвет фона.

Из дополнительных требований: удалось сделать так, чтобы при загрузке изображений любых размеров и соотношений сторон верстка не ломалась. Примеры картинок разных размеров и пропорций уже загружены на сайт. Была попытка сделать админку Directus доступной по адресу /directus, но из-за поджимающих сроков я решил отложить это доп. требование.
Сайт работает четко по ТЗ, есть возможность увеличить фото, кликнув по нему, а затем закрыть окно кнопкой close.


Инструкция по запуску
Очевидно, необходимо установить Node.js
Необходима вышеупомянутая версия 18.20.3, чтобы Directus работал.
Далее необходимо установить Git и клонировать проект в выбранную директорию.
Затем необходимо через консоль установить зависимости (С помощью команды npm install) в каждой из папок backend и frontend. На этом шаге подгрузятся все необходимые модули.
Далее через консоль в директории backend необходимо запустить Directus командой npx directus start
Если вылезет ошибка, то нужно открыть файл env в папке backend, найти строчку DB_FILENAME="C:\Gallery\backend\data.db" и вписать в кавычки путь к файлу data.db
Ошибки не будет, если сразу клонировать проект на диск C
Далее через консоль в директории frontend необходимо запустить сайт командой npm start
На этом все, остается лишь войти в Directus по данным из начала файла. Чтобы можно было добавлять фото. Скрины работающего сайта будут в репозитории проекта.