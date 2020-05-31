const isNumber = (value) => {
  if (typeof value !== "number" && typeof value !== "string") {
    return false;
  }

  if (isNaN(value)) {
    return false;
  }

  if (typeof value === "number") {
    return true;
  }

  const valueString = value.trim();
  if (valueString.length < 1) {
    return false;
  }

  const numericValue = Number(valueString);
  if (isNaN(numericValue)) {
    return false;
  }

  return true;
};

export default isNumber;
