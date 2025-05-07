const catchAsync = (controllerFn) => {
    return (req, res, next) => {
        Promise.resolve(controllerFn(req, res, next)).catch(next);
    };
};

export default catchAsync;
