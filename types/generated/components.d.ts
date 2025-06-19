import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEnlace extends Struct.ComponentSchema {
  collectionName: 'components_shared_enlaces';
  info: {
    displayName: 'Enlace';
  };
  attributes: {
    Contenido: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SharedFondo extends Struct.ComponentSchema {
  collectionName: 'components_shared_fondos';
  info: {
    displayName: 'Fondo';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedTitulo extends Struct.ComponentSchema {
  collectionName: 'components_shared_titulos';
  info: {
    displayName: 'Titulo';
  };
  attributes: {
    Contenido: Schema.Attribute.String;
    Subtitulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.enlace': SharedEnlace;
      'shared.fondo': SharedFondo;
      'shared.titulo': SharedTitulo;
    }
  }
}
