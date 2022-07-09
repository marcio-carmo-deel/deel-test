const adminsRepository = require('../repositories/adminsRepository');

module.exports = {
    getBestProfession: async (req, res) => {
        try {
            const { start, end } = req.query;

            const bestProfession = await adminsRepository.getBestProfession({
                start,
                end,
            });

            res.status(200).json(bestProfession);
        } catch (error) {
            res.status(error.code).json({ error: error.message });
        }
    },
};
