const buildQuery = (...conditions) => {
  const conditionString = conditions.join(` and `);
  return `@media ${conditionString}`;
};

const buildScreenSize = maxWidth => ({
  below: buildQuery(`screen`, `(max-width: ${maxWidth}px)`),
  above: buildQuery(`screen`, `(min-width: ${maxWidth + 1}px)`),
});

export const phone = buildScreenSize(759); // 720px content + 2 * 40px padding
export const mobile = buildScreenSize(899);
