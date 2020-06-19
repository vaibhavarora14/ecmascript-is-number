const isNumber = (value) => {
  if (typeof value !== "number" && typeof value !== "string") {
    return false;
  }

  if (typeof value === "string" && value.trim().length < 1) {
    return false;
  }

  if (isNaN(value)) {
    return false;
  }

  return true;
};

module.exports = isNumber;
