export const fetchCart = async () => {
  const module = await import("__mock__/cart.json");
  return module.default;
};
