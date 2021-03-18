//létrhozunk egy objectet amit teletöltünk a configgal
module.exports = {
    port: process.env.PORT || 3000,
    mongo_uri:'mongodb+srv://Tibor:PostCloudPassword@postcloud.pcmad.mongodb.net/postcloud',
    secret: process.env.SECRET || 'SzakmaiVizsga'
}