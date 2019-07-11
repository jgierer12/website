let transition = (...properties) => ({
  transitionProperty: properties.join(`,`),
  transitionTimingFunction: `ease-in`,
});

transition.in = {
  transitionDuration: `50ms`,
};

transition.out = {
  transitionDuration: `250ms`,
};

export { transition };
