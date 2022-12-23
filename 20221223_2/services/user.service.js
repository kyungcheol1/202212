const userRepository = require("../repository/user.repository");

exports.getUser = async ({ user_id, user_pw }) => {
    const where = { user_id, user_pw };
    const user = await userRepository.findOne({ where });
    return user;
};

// const user_id = "web7722";
// const user_pw = "1234";
// this.getUser({ user_id, user_pw });

