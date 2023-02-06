//Basic error handling
export const serverError = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
      name: err.name || "Unknown error",
      msg: err.message || "An error occurred on the server.",
    });
  }