module.exports = {
  "root": true,
  "env": {
    "node": true
    // eslint对_的忽略
    // lodash: true 
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "prettier/prettier": "off",
    "no-unused-vars": "off"
  }
}
