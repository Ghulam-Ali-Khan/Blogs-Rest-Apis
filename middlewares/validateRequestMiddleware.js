// middlewares/validate.js
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body, { abortEarly: true });
        next();
    } catch (error) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: error.errors,
        });
    }
};

export default validate;
