import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Editor from './pages/Editor.vue';
import Preview from './pages/Preview.vue';
import Settings from './pages/Settings.vue';
import Tree from './pages/Tree.vue';

export default  [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/editor', component: Editor },
    { path: '/preview', component: Preview },
    { path: '/settings', component: Settings },
    { path: '/tree', component: Tree },
];
