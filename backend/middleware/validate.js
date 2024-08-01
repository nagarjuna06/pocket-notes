const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ path: error.inner[0].path, message: error.inner[0].message });
  }
};

export default validate;
