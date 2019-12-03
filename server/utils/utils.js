export const applyMiddleware = (server, middlewareWrappers) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(server);
  }
};

export const applyRoutes = (server, routes) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    server[method](path, handler);
  }
};
