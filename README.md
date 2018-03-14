#Grunt Boilerplate

Шаблон приложений с использованием grunt + sass + postcss + pug + Browsersync

Для старта команда 
`grunt dev`

Сборка production версии
`grunt build`

#sass, css
В шаблоне настроен css auto-reset для сброса некоторых дефолтных значений. Настройка 
плагина хранится в файле `grunt/postcss.js`.


#Структура папок

```
project 
│    app (папка для production билда)
│    grunt (папка с конфигами для задач grunt)
│    
└────src
     │    assets
     │    │    fonts (шрифты, которые скопируются в app/common/fonts)
     │    │    images (шрифты, которые скопируются в app/common/images)
     │    │    script (шрифты, которые скопируются в app/common/images)
     │    │    icons (svg иконки, которые собираются в спрайт app/common/icons/icons.svg c префиксом 'icon-')
     │    │    
     │    html (файлы pug, которые компилятся в корень app)
     │    script (папка для основного js скрипта)
     │    style (папка для стилей)
     │    └────component
     │         │     blocks (блоки, которые собираются в файл src/style/_blocks.sass)
     │         └─────elements (блоки, которые собираются в файл src/style/_elements.sass)
     
```