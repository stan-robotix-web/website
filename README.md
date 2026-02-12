# Stan Robotix 6622 - Website

VueJS project using Vite for deployment and preview.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Show the latest build in a localhost

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### To deploy to Github Pages

```
npm run deploy
```

## Adding a new page

To add a page :

1. create one folder in `./src` and create, inside two files : `page-name.vue` and `page-name.js`. Link them appropriately.
2. create one folder in the root. Inside, create a `index.html` that links to the `page-name.js`
3. add them in `vite.config.js`
4. don't forget to update `BaseNav.vue` if needed

If needed, you can see the commit `outreach page add`.

## Adding a new component

To add a component :

1. create a `ComponentName.vue` inside `./src/components/`.
   - put and complete this inside :
    ```
    <script setup></script>

    <template>
    // put html in here
    </template>

    <style scoped lang="scss">
    @use "../assets/base.scss";
    </style>
    ```
2. You can now add this component to a page by using `import ComponentName from '../../src/components/ComponentName.vue'` in the `<script setup>`, and using it with the `<ComponentName/>` tag inside the html.

If needed, you can see an example in the commit `main home page component add`



