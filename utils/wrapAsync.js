//wrapAsync function code (for checking the server side error)

module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}