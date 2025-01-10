const zod = require("zod")

const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

function validateUser(payload) {
    return userSchema.safeParse(payload).success
}

module.exports = {
    validateUser
}