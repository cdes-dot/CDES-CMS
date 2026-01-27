'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/equipo-tecnicos',
      handler: 'equipo-tecnico.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/equipo-tecnicos/:id',
      handler: 'equipo-tecnico.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/equipo-tecnicos',
      handler: 'equipo-tecnico.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/equipo-tecnicos/:id',
      handler: 'equipo-tecnico.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/equipo-tecnicos/:id',
      handler: 'equipo-tecnico.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
