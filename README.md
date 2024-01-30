# React + TypeScript + Vite<br/>
<br/>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.<br/>
<br/>
Currently, two official plugins are available:<br/>
<br/>
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh<br/>
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh<br/>
<br/>
## Expanding the ESLint configuration<br/>
<br/>
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:<br/>
<br/>
- Configure the top-level `parserOptions` property like this:<br/>
<br/>
```js<br/>
export default {<br/>
  // other rules...<br/>
  parserOptions: {<br/>
    ecmaVersion: 'latest',<br/>
    sourceType: 'module',<br/>
    project: ['./tsconfig.json', './tsconfig.node.json'],<br/>
    tsconfigRootDir: __dirname,<br/>
  },<br/>
}<br/>
```<br/>
<br/>
- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`<br/>
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`<br/>
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list<br/>
#   r e a c t - s h o p p i n g m a l l <br/>
 
 
