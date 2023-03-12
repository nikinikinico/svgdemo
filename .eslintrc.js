module.exports ={
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
    extends: [
        'plugin:vue/recommended'
    ],
    rules:{
    "vue/multi-word-component-names":"off",
  }
}