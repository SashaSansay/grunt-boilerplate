#Grunt Boilerplate

---
#EN doc
Template for web apps using grunt + sass + postcss + pug + Browsersync + postcss-auto-reset

Commands: 
`grunt dev` or `npm run dev` – start development mode

`grunt build` or `npm run build` – build production version

##Folders structure
```
project 
│    app (build files here)
│    grunt (grunt configs folder)
│    
└────src
     │    assets
     │    │    fonts (fonts copying to app/common/fonts)
     │    │    images (images copying to app/common/images)
     │    │    script (script assets copying to app/common/images)
     │    │    icons (svg icons builds in sprite file app/common/icons/icons.svg with prefix 'icon-')
     │    │    
     │    html (pug)
     │    script (js scripts)
     │    style (styles)
     │    └────component
     │         │     blocks (blocks folder src/style/_blocks.sass)
     │         └─────elements (element folder src/style/_elements.sass)
     
```

---
#RU doc
Шаблон приложений с использованием grunt + sass + postcss + pug + Browsersync

Для старта команда 
`grunt dev`
или 
`npm run dev`

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
