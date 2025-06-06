const { Prisma } = require('../../../prismaclient')
const bcrypt = require('bcrypt');

module.exports = Prisma.defineExtension({
    name: 'hashPasswordExtension',
    query: {
        user: {
            create: async (args, query) => {
                try {
                    const hashedPassword = await bcrypt.hash(args.data.password, 10);
                    args.data.password = hashedPassword;
                    return query(args);
                } catch (error) {
                    throw error;
                }
            }
        }
    }
});