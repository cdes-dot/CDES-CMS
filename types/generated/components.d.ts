import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBoton extends Struct.ComponentSchema {
  collectionName: 'components_shared_botons';
  info: {
    displayName: 'Boton';
  };
  attributes: {
    Contenido: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SharedContacto extends Struct.ComponentSchema {
  collectionName: 'components_shared_contactos';
  info: {
    displayName: 'Contacto';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    Telefono: Schema.Attribute.String;
    Titulo: Schema.Attribute.String;
  };
}

export interface SharedDynamic extends Struct.ComponentSchema {
  collectionName: 'components_shared_dynamics';
  info: {
    displayName: 'dynamic';
  };
  attributes: {};
}

export interface SharedEncabezado extends Struct.ComponentSchema {
  collectionName: 'components_shared_encabezados';
  info: {
    displayName: 'Encabezado';
  };
  attributes: {
    articulos: Schema.Attribute.Relation<'oneToMany', 'api::articulo.articulo'>;
    Subtitulo: Schema.Attribute.Text;
    Titulo: Schema.Attribute.String;
  };
}

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

export interface SharedEvento extends Struct.ComponentSchema {
  collectionName: 'components_shared_eventos';
  info: {
    displayName: 'Evento';
  };
  attributes: {};
}

export interface SharedEventoHistoriaco extends Struct.ComponentSchema {
  collectionName: 'components_shared_evento_historiacos';
  info: {
    displayName: 'Evento Historico';
  };
  attributes: {
    Descripcion: Schema.Attribute.Text;
    Fecha: Schema.Attribute.Date;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Titulo: Schema.Attribute.String;
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

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
    icon: 'earth';
  };
  attributes: {
    enlace: Schema.Attribute.String & Schema.Attribute.Required;
    Nombre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPlanEstrategico extends Struct.ComponentSchema {
  collectionName: 'components_shared_plan_estrategicos';
  info: {
    displayName: 'Plan estrategico';
  };
  attributes: {
    Contenido: Schema.Attribute.Blocks;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Titulo: Schema.Attribute.String;
  };
}

export interface SharedRedesSociales extends Struct.ComponentSchema {
  collectionName: 'components_shared_redes_sociales';
  info: {
    displayName: 'Redes Sociales';
  };
  attributes: {
    Url: Schema.Attribute.String;
  };
}

export interface SharedSeccionDeVideos extends Struct.ComponentSchema {
  collectionName: 'components_shared_seccion_de_videos';
  info: {
    displayName: 'Seccion de Videos';
  };
  attributes: {
    Titulo: Schema.Attribute.String;
    Videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedTitulo extends Struct.ComponentSchema {
  collectionName: 'components_shared_titulos';
  info: {
    displayName: 'Diapositiva';
  };
  attributes: {
    Contenido: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Enlace: Schema.Attribute.Component<'shared.boton', false>;
    Fondo: Schema.Attribute.Media<'images'>;
    Subtitulo: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    Contenido: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.boton': SharedBoton;
      'shared.contacto': SharedContacto;
      'shared.dynamic': SharedDynamic;
      'shared.encabezado': SharedEncabezado;
      'shared.enlace': SharedEnlace;
      'shared.evento': SharedEvento;
      'shared.evento-historiaco': SharedEventoHistoriaco;
      'shared.fondo': SharedFondo;
      'shared.logo': SharedLogo;
      'shared.plan-estrategico': SharedPlanEstrategico;
      'shared.redes-sociales': SharedRedesSociales;
      'shared.seccion-de-videos': SharedSeccionDeVideos;
      'shared.titulo': SharedTitulo;
      'shared.video': SharedVideo;
    }
  }
}
