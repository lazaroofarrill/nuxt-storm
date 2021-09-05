import Vue from 'vue'
<%= options.getComponents().map(({ name, file }) => {
    return `import ${name} from '${file}'`
}).join('\n') %>

<%= options.getComponents().map(({ name, file }) => {
    return `Vue.component('${name}', ${name})`
    +`\nVue.component('Lazy${name}', ${name})`
}).join('\n') %>
