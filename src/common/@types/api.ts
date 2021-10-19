export interface OHomeCliente {
  datcliente: string;
  imagencliente: string;
  idcondicion: boolean;
}

export interface OHomeDireccion {
  direccion: string;
  latitude: number;
  longitude: number;
}

export interface OHomeCarrito {
  cuenta: number;
}

export interface AHomeTienda {
  idsucursal: number;
  idtienda: number;
  tienda: string;
  logosucursal: string;
  latitude: number;
  longitude: number;
}

export interface Categorie {
  idcategoria: number;
  categoria: string;
  categoriaimagen: string;
}

export interface Product {
  idproducto: number;
  producto: string;
  unidadmedida: string;
  costoproducto: number;
  detalle: string;
  // La cantidad minima de producto
  compraminima: number;
  //
  compramaxima: number;
  // +1 + 1
  incremento: number;
  imagenproducto: string;
  idtienda: number;
  idsucursal: number;
  logosucursal: string;
  tiponegocio: string;
  cingrediente: boolean;
}

export interface HomeAll {
  detalle: string;
  OHomeCliente: OHomeCliente;
  OHomeDireccion: OHomeDireccion;
  OHomeCarrito: OHomeCarrito;
  AHomeTiendas: AHomeTienda[];
  AHomeOfertas: Product[];
  AHomeMaspedidos: Product[];
  AHomeCercademi: Product[];
  AHomeNuevosproductos: Product[];
  estatus: number;
  message: string;
  msystem: string;
}
