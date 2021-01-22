const path = require('path')
import vue from '@vitejs/plugin-vue'

module.exports = {
  plugins: [vue()],
  alias: {
    '@': path.resolve(__dirname, './src')
  },
}