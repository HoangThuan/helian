module.exports = {
    transpileDependencies: ["@vueform"],
    publicPath: process.env.NODE_ENV === 'production'
    ? '/helian/' // Thay tên repository của các bạn vào đây nhé
    : '/'
}