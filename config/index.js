//létrhozunk egy objectet amit teletöltünk a configgal
module.exports = {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cloudpost',
    secret: process.env.SECRET || 'SzakmaiVizsga'
}