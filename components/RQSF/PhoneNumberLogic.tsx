export const formatPhoneNumber = (rawValue: string) => {
  const digits = rawValue.replace(/\D/g, "");
  if (digits.length > 6) {
    return (
      digits.slice(0, 3) + "-" + digits.slice(3, 6) + "-" + digits.slice(6, 10)
    );
  } else if (digits.length > 3) {
    return digits.slice(0, 3) + "-" + digits.slice(3, 6);
  } else {
    return digits;
  }
};
