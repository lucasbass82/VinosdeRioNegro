
import React, { useEffect, useMemo, useState } from "react";
import logoIcon from "./assets/logo-icon.png";
import rioNegroRiverPhoto from "./assets/rio-negro-river.jpg";
import mapaProvinciaPhoto from "./assets/mapa-provincia.jpg";
import agendaBrindisPhoto from "./assets/agenda-brindis.jpg";
import tiendaHeaderPhoto from "./assets/tienda-header.jpg";
import bodegaMirasPhoto from "./assets/bodega-miras.png";
import bodegaAnielloPhoto from "./assets/bodega-aniello.png";
import bodegaHumbertoCanalePhoto from "./assets/bodega-humberto-canale.png";
import bodegaVideladDornaPhoto from "./assets/bodega-videla-dorna.png";
import bodegaWapisaPhoto from "./assets/bodega-wapisa.png";
import fincaFraschettiPhoto from "./assets/finca-fraschetti.png";
import marEspiPhoto from "./assets/mar-espi.png";
import experienciaPinotPhoto from "./assets/experiencia-pinot.png";
import cursosPhoto from "./assets/cursos.png";
import oliviasYSaboresPhoto from "./assets/olivas-y-sabores.png";
import vinopolitanPhoto from "./assets/vinopolitan.png";
import piquillinPhoto from "./assets/piquillin.png";
import rioTintoPhoto from "./assets/rio-tinto.png";
import zonaCordilleraPhoto from "./assets/zona-cordillera.jpg";
import zonaAltoVallePhoto from "./assets/zona-alto-valle.jpg";
import zonaValleMedioPhoto from "./assets/zona-valle-medio.jpg";
import zonaMarPhoto from "./assets/zona-mar.jpg";
import zonaLineaSurPhoto from "./assets/zona-linea-sur.jpg";

import bodegaVinasDeLuciaPhoto from "./assets/bodega-vinas-de-lucia.jpg";
import bodegaFamiliaHerreroPhoto from "./assets/bodega-familia-herrero.jpg";
import bodegaDonAmaroPhoto from "./assets/bodega-don-amaro.jpg";
import bodegaEnclaveSurPhoto from "./assets/bodega-enclave-sur.jpg";
import bodegaTrinaPhoto from "./assets/bodega-trina.jpg";
import bodegaFamiliaDeBernardiPhoto from "./assets/bodega-familia-de-bernardi.jpg";
import bodegaRiberaDelCuarzoPhoto from "./assets/bodega-ribera-del-cuarzo.jpg";

import savuMalbecPhoto from "./assets/vinos/savu-malbec.jpg";
import savuMalbecRosadoPhoto from "./assets/vinos/savu-malbec-rosado.jpg";
import savuSyrahPhoto from "./assets/vinos/savu-syrah.jpg";
import savuCabernetSauvignonPhoto from "./assets/vinos/savu-cabernet-sauvignon.jpg";
import familiaHerreroTintoPhoto from "./assets/vinos/familia-herrero-tinto-malbec-y-cabernet-sauvignon.jpg";
import familiaHerreroBlancoPhoto from "./assets/vinos/familia-herrero-blanco-chenin.jpg";
import donAmaroMalbecPhoto from "./assets/vinos/bodega-amaro-don-amaro-malbec.jpg";
import enclaveSurPinotNoirPhoto from "./assets/vinos/enclave-sur-pinot-noir.jpg";
import enclaveSurRosadoPhoto from "./assets/vinos/enclave-sur-rosado.jpg";
import enclaveSurChardonnayPhoto from "./assets/vinos/enclave-sur-chardonnay.jpg";
import enclaveSurMalbecPhoto from "./assets/vinos/enclave-sur-malbec.jpg";
import enclaveSeleccionCabernetSauvignonPhoto from "./assets/vinos/enclave-seleccion-cabernet-sauvignon.jpg";
import enclaveSurReservaMalbecBlendPhoto from "./assets/vinos/enclave-sur-reserva-malbec-blend.jpg";
import enclaveSurReservaMalbecPhoto from "./assets/vinos/enclave-sur-reserva-malbec.jpg";
import enclaveSurReservaCabernetFrancPhoto from "./assets/vinos/enclave-sur-reserva-cabernet-franc.jpg";
import enclaveSurReservaCabernetSauvignonPhoto from "./assets/vinos/enclave-sur-reserva-cabernet-sauvignon.jpg";
import enclaveSurReservaMerlotPhoto from "./assets/vinos/enclave-sur-reserva-merlot.jpg";
import trinaBlendDeMalbecPhoto from "./assets/vinos/bodega-trina-blend-de-malbec.jpg";
import trinaNaranjoDeCriollasPhoto from "./assets/vinos/bodega-trina-naranjo-de-criollas.jpg";
import trinaReservaDeMalbecPhoto from "./assets/vinos/bodega-trina-reserva-de-malbec.jpg";
import deBernardiPinotNoirPhoto from "./assets/vinos/familia-de-bernardi-pinot-noir.jpg";
import deBernardiGewurztraminerPhoto from "./assets/vinos/familia-de-bernardi-gewurztraminer.jpg";
import deBernardiMerlotPhoto from "./assets/vinos/familia-de-bernardi-merlot.jpg";
import deBernardiMerlotRosePhoto from "./assets/vinos/familia-de-bernardi-merlot-rose.jpg";
import araucanaRioDeLosCiervosMalbecRosePhoto from "./assets/vinos/ribera-del-cuarzo-araucana-río-de-los-ciervos-malbec-rose.jpg";
import araucanaRioDeLosCiervosPinotNoirPhoto from "./assets/vinos/ribera-del-cuarzo-araucana-río-de-los-ciervos-pinot-noir.jpg";
import araucanaRioDeLosCiervosMalbecPhoto from "./assets/vinos/ribera-del-cuarzo-araucana-río-de-los-ciervos-malbec.jpg";
import araucanaAzulPhoto from "./assets/vinos/ribera-del-cuarzo-araucana-azul.jpg";
import clasicoPatinasBlancasPhoto from "./assets/vinos/ribera-del-cuarzo-clásico-patinas-blancas.jpg";
import clasicoMerlotRosePhoto from "./assets/vinos/ribera-del-cuarzo-clásico-merlot-rose.jpg";
import clasicoMerlotPhoto from "./assets/vinos/ribera-del-cuarzo-clásico-merlot.jpg";
import clasicoMalbecPhoto from "./assets/vinos/ribera-del-cuarzo-clásico-malbec.jpg";
import parcelaUnicaPhoto from "./assets/vinos/ribera-del-cuarzo-parcela-unica.jpg";

import mirasJovemMalbecPhoto from "./assets/vinos/bodega-miras-jovem-malbec.jpg";
import humbertoCanaleGranReservaMalbecPhoto from "./assets/vinos/bodega-humberto-canale-gran-reserva-malbec.jpg";
import wapisaSauvignonBlancPhoto from "./assets/vinos/wapisa-sauvignon-blanc.jpg";
import videlaDornaGranCalfuenMalbecPhoto from "./assets/vinos/videla-dorna-gran-calfuen-malbec.jpg";

// Fotos reales que reemplazan las imágenes viejas de fichas ya cargadas (Aniello, Miras, Humberto Canale, Videla Dorna)
import anielo006MerlotPhoto from "./assets/vinos/bodega-finca-anielo-006-merlot.jpg";
import anielo006PinotNoirPhoto from "./assets/vinos/bodega-finca-anielo-006-pinot-noir.jpg";
import mirasPinotSalvajeCuriosoPhoto from "./assets/vinos/bodega-miras-pinot-salvaje-curiosos.jpg";
import humbertoCanaleOldVineyardPinotNoirPhoto from "./assets/vinos/bodega-humberto-canale-old-vineyard-pinot-noir.jpg";
import videlaDornaCalfuenPinotNoirReservaPhoto from "./assets/vinos/videla-dorna-calfuen-pinot-noir-reserva.jpg";

// Catálogo nuevo — Bodega Finca Aniello
import anielo006ChardonnayPhoto from "./assets/vinos/bodega-finca-anielo-006-chardonnay.jpg";
import anielo006MalbecPhoto from "./assets/vinos/bodega-finca-anielo-006-malbec.jpg";
import anieloSoilPinotNoirPhoto from "./assets/vinos/bodega-finca-anielo-soil-pinot-noir.jpg";
import anieloSoilMalbecPhoto from "./assets/vinos/bodega-finca-anielo-soil-malbec.jpg";
import anieloSoilMerlotPhoto from "./assets/vinos/bodega-finca-anielo-soil-merlot.jpg";
import anieloSoilBlancoPinotNoirPhoto from "./assets/vinos/bodega-finca-anielo-soil-blanco-pinot-noir.jpg";
import anieloVina1932TrousseauPhoto from "./assets/vinos/bodega-finca-anielo-viña-1932-trousseau.jpg";

// Catálogo nuevo — Bodega Miras
import mirasCrianzaMalbecPhoto from "./assets/vinos/bodega-miras-crianza-malbec.jpg";
import mirasCrianzaMerlotPhoto from "./assets/vinos/bodega-miras-crianza-merlot.jpg";
import familiaMirasMalbecPhoto from "./assets/vinos/bodega-miras-familia-miras-malbec.jpg";
import familiaMirasSemillonPhoto from "./assets/vinos/bodega-miras-familia-miras-semillon.jpg";
import mirasJovemChardonnayPhoto from "./assets/vinos/bodega-miras-jovem-chardonnay.jpg";
import mirasJovemMerlotPhoto from "./assets/vinos/bodega-miras-jovem-merlot.jpg";
import mirasNaranjoCuriososPhoto from "./assets/vinos/bodega-miras-jovem-naranjo-curiosos.jpg";
import mirasJovemPinotNoirPhoto from "./assets/vinos/bodega-miras-jovem-pinot-noir.jpg";
import mirasJovemRosePhoto from "./assets/vinos/bodega-miras-jovem-rose.jpg";
import mirasJovemSemillonPhoto from "./assets/vinos/bodega-miras-jovem-semillon.jpg";
import mirasTrosseauCuriosoPhoto from "./assets/vinos/bodega-miras-jovem-trosseau-curiosos.jpg";
import mirasLivianoMalbecPhoto from "./assets/vinos/bodega-miras-liviano-malbec.jpg";

// Catálogo nuevo — Humberto Canale
import barziCanaleBlendDeFamiliaPhoto from "./assets/vinos/bodega-humberto-canale-barzi-canale-blend-de-familia.jpg";
import barziCanalePinotNoirPhoto from "./assets/vinos/bodega-humberto-canale-barzi-canale-pinot-noir.jpg";
import humbertoCanaleBlushPhoto from "./assets/vinos/bodega-humberto-canale-blush.jpg";
import estateCabernetFrancPhoto from "./assets/vinos/bodega-humberto-canale-estate-cabernet-franc.jpg";
import estateCabernetSauvignonPhoto from "./assets/vinos/bodega-humberto-canale-estate-cabernet-sauvignon.jpg";
import estateMalbecPhoto from "./assets/vinos/bodega-humberto-canale-estate-malbec.jpg";
import estateMerlotPhoto from "./assets/vinos/bodega-humberto-canale-estate-merlot.jpg";
import estatePinotNoirPhoto from "./assets/vinos/bodega-humberto-canale-estate-pinot-noir.jpg";
import estateSauvignonBlancPhoto from "./assets/vinos/bodega-humberto-canale-estate-sauvignon-blanc.jpg";
import estateSauvignonGrisPhoto from "./assets/vinos/bodega-humberto-canale-estate-sauvignon-gris.jpg";
import granReservaCabernetFrancPhoto from "./assets/vinos/bodega-humberto-canale-gran-reserva-cabernet-franc.jpg";
import granReservaMerlotPhoto from "./assets/vinos/bodega-humberto-canale-gran-reserva-merlot.jpg";
import granReservaPinotNoirPhoto from "./assets/vinos/bodega-humberto-canale-gran-reserva-pinot-noir.jpg";
import intimoCabernetSauvignonPhoto from "./assets/vinos/bodega-humberto-canale-intimo-cabernet-sauvignon.jpg";
import intimoMalbecMerlotCabernetPhoto from "./assets/vinos/bodega-humberto-canale-intimo-malbec-merlot-cabernet.jpg";
import intimoMalbecPhoto from "./assets/vinos/bodega-humberto-canale-intimo-malbec.jpg";
import intimoSauvignonSemillonPhoto from "./assets/vinos/bodega-humberto-canale-intimo-sauvignon-semillon.jpg";
import oldVineyardBlendPhoto from "./assets/vinos/bodega-humberto-canale-old-vineyard-blend.jpg";
import oldVineyardMalbecPhoto from "./assets/vinos/bodega-humberto-canale-old-vineyard-malbec.jpg";
import oldVineyardRieslingPhoto from "./assets/vinos/bodega-humberto-canale-old-vineyard-riesling.jpg";
import oldVineyardSemillonPhoto from "./assets/vinos/bodega-humberto-canale-old-vineyard-semillon.jpg";
import humbertoCanaleRoseNoirPhoto from "./assets/vinos/bodega-humberto-canale-rose-noir.jpg";

// Catálogo nuevo — Bodega Videla Dorna
import calfulenMalbecPhoto from "./assets/vinos/videla-dorna-calfuen-malbec.jpg";
import calfulenMerlotPhoto from "./assets/vinos/videla-dorna-calfuen-merlot.jpg";
import calfulenRieslingPhoto from "./assets/vinos/videla-dorna-calfuen-riesling.jpg";
import calfulenTorrontesPhoto from "./assets/vinos/videla-dorna-calfuen-torrontes.jpg";
import maromaBlendPhoto from "./assets/vinos/videla-dorna-maroma-blend.jpg";
import maromaRosadoPhoto from "./assets/vinos/videla-dorna-maroma-rosado.jpg";
import maromaSauvignonBlancPhoto from "./assets/vinos/videla-dorna-maroma-sauvignon-blanc.jpg";

type RegionKey =
  | "alto-valle"
  | "valle-medio"
  | "mar"
  | "linea-sur"
  | "cordillera";

type Winery = {
  id: string;
  name: string;
  city: string;
  region: RegionKey;
  description: string;
  shortDescription: string;
  hours: string;
  openNow: boolean;
  wines: string[];
  shops: string[];
  activity: string;
  benefit: string;
  rating?: number;
  distance: string;
  image: string;
  address?: string;
  whatsapp?: string;
  email?: string;
  instagram?: string;
  website?: string;
  visitNotes?: string;
};

type Shop = {
  id: string;
  name: string;
  city: string;
  address: string;
  description: string;
  hours: string;
  openNow: boolean;
  wines: string[];
  benefit: string;
  distance: string;
  image: string;
};

type Wine = {
  id: string;
  name: string;
  varietal: string;
  winery: string;
  style: string;
  note?: string;
  description?: string;
  availableAt: string[];
  tag: string;
  image: string;
};

type EventItem = {
  id: string;
  title: string;
  place: string;
  when: string;
  city: string;
  benefit: string;
  organizer?: string;
};

type FavoriteItem = {
  id: string;
  name: string;
  city?: string;
  kind: "wine" | "winery" | "shop";
};

type CartItem = {
  wine: Wine;
  quantity: number;
};

type TabKey =
  | "home"
  | "map"
  | "search"
  | "agenda"
  | "bodegas"
  | "profile"
  | "shop"
  | "winelist";

type DetailState =
  | { kind: "wine"; id: string; fromShop?: boolean }
  | { kind: "winery"; id: string }
  | { kind: "shop"; id: string }
  | null;

const theme = {
  bgTop: "#FBF8F3",
  bgBottom: "#FBF8F3",
  paper: "#FBF8F3",
  card: "#FBF8F3",
  text: "#141410",
  subtext: "#777777",
  line: "#E6DED5",
  wine: "#6b1a2c",
  wineDark: "#6b1a2c",
  cream: "#FBF8F3",
  river: "#0a3a5c",
  valley: "#3c7824",
};

const REGION_META: Record<
  RegionKey,
  { title: string; subtitle: string; image: string; tint: string }
> = {
  "alto-valle": {
    title: "Alto Valle",
    subtitle: "La cuna histórica del vino rionegrino.",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(168,182,111,0.20)",
  },
  "valle-medio": {
    title: "Valle Medio",
    subtitle: "Historia familiar y nuevos proyectos con identidad.",
    image:
      "https://images.unsplash.com/photo-1464638681273-0962e9b53566?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(63,142,78,0.10)",
  },
  "mar": {
    title: "Mar",
    subtitle: "Frescura atlántica y experiencias distintas.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(21,119,200,0.10)",
  },
  "linea-sur": {
    title: "Línea Sur",
    subtitle: "Territorio emergente para futuras experiencias.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(63,142,78,0.10)",
   },
  "cordillera": {
    title: "Cordillera",
    subtitle: "Vinos de montaña y paisajes Patagonicos",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    tint: "#efe7dc",
  },
};

const ALL_SHOP_NAMES = [
  "Vinoteca Vinopolitan",
  "Vinoteca Río Tinto",
  "Vinoteca Piquillín",
  "Vinoteca Olivas y Sabores",
];

const WINERIES_DATA: Winery[] = [
  {
    id: "w1",
    name: "Bodega Miras",
    city: "Mainqué",
    region: "alto-valle",
    description:
      "Bodega patagónica enfocada en Pinot Noir, visitas y degustaciones con identidad local.",
    shortDescription:
      "Bodega patagónica de Mainqué enfocada en Pinot Noir, con visitas y degustaciones.",
    hours: "10:00 a 18:00",
    openNow: true,
    wines: [
      "Miras Pinot Noir Salvaje Curioso",
      "Miras Joven Malbec",
      "Miras Crianza Malbec",
      "Miras Crianza Merlot",
      "Familia Miras Malbec",
      "Familia Miras Semillón",
      "Miras Joven Chardonnay",
      "Miras Joven Merlot",
      "Miras Naranjo Curioso",
      "Miras Joven Pinot Noir",
      "Miras Joven Rosé",
      "Miras Joven Semillón",
      "Miras Trosseau Curioso",
      "Miras Liviano Malbec",
    ],
    shops: ALL_SHOP_NAMES,
    activity: "Degustación hoy 19:00",
    benefit: "15% OFF socios",
    rating: 4.8,
    distance: "245 km",
    image: bodegaMirasPhoto,
  },
  {
    id: "w2",
    name: "Bodega Finca Aniello",
    city: "Mainqué",
    region: "alto-valle",
    description:
      "Proyecto del Alto Valle con experiencias, música en vivo y vinos muy buscados.",
    shortDescription:
      "Bodega familiar del Alto Valle con líneas 006 y Soil, música en vivo y vinos muy buscados.",
    hours: "11:00 a 19:00",
    openNow: false,
    wines: [
      "Aniello 006",
      "Aniello 006 Pinot Noir",
      "Aniello 006 Chardonnay",
      "Aniello 006 Malbec",
      "Aniello Soil Pinot Noir",
      "Aniello Soil Malbec",
      "Aniello Soil Merlot",
      "Aniello Soil Blanco de Pinot Noir",
      "Aniello Viña 1932 Trousseau",
    ],
    shops: ALL_SHOP_NAMES,
    activity: "Música en vivo sábado 20:30",
    benefit: "10% OFF socios",
    rating: 4.7,
    distance: "248 km",
    image: bodegaAnielloPhoto,
  },
 {
  id: "w2a",
  name: "Antigua Bodega Patagónica",
  city: "General Roca",
  region: "alto-valle",
  description:
    "Proyecto del Alto Valle con una amplia línea de vinos que combina tradición e innovación, desde la línea UN hasta Bellaco Malcriado.",
  shortDescription:
    "Bodega insignia de Cervantes, con las líneas Un y Bellaco Malcriado.",
  hours: "10:00 a 18:00",
  openNow: true,
  wines: [
    "UN Sauvignon Blanc",
    "UN Chardonnay",
    "UN Rosé",
    "UN Malbec Reserva",
    "UN Pinot Noir Reserva",
    "UN Gran Corte Reserva",
    "UN Malbec Gran Reserva",
    "UN Merlot Gran Reserva",
    "Bellaco Malcriado Pinot Noir",
    "Bellaco Malcriado Merlot",
    "Bellaco Malcriado Malbec"
  ],
  shops: ALL_SHOP_NAMES,
  activity: "Visitas y degustaciones",
  benefit: "10% OFF socios",
  rating: 4.8,
  distance: "",
  image: "/antigua-bodega-patagonica.png"
},
  
  
  {
    id: "w3",
    name: "Humberto Canale",
    city: "General Roca",
    region: "alto-valle",
    description:
      "Bodega histórica de Río Negro con etiquetas emblemáticas y visitas guiadas.",
    shortDescription:
      "Bodega histórica de Río Negro con etiquetas emblemáticas y visitas guiadas.",
    hours: "09:00 a 17:00",
    openNow: true,
    wines: [
      "Pinot Noir de viñedo antiguo",
      "Gran Reserva Malbec",
      "Barzi Canale Blend de Familia",
      "Barzi Canale Pinot Noir",
      "Humberto Canale Blush",
      "Estate Cabernet Franc",
      "Estate Cabernet Sauvignon",
      "Estate Malbec",
      "Estate Merlot",
      "Estate Pinot Noir",
      "Estate Sauvignon Blanc",
      "Estate Sauvignon Gris",
      "Gran Reserva Cabernet Franc",
      "Gran Reserva Merlot",
      "Gran Reserva Pinot Noir",
      "Intimo Cabernet Sauvignon",
      "Intimo Malbec Merlot Cabernet",
      "Intimo Malbec",
      "Intimo Sauvignon Semillón",
      "Old Vineyard Blend",
      "Old Vineyard Malbec",
      "Old Vineyard Riesling",
      "Old Vineyard Semillón",
      "Humberto Canale Rosé Noir",
    ],
    shops: ALL_SHOP_NAMES,
    activity: "Visita guiada mañana 11:00",
    benefit: "Copa de regalo para socios",
    rating: 4.9,
    distance: "285 km",
    image: bodegaHumbertoCanalePhoto,
  },
  {
    id: "w4",
    name: "Bodega Videla Dorna",
    city: "Luis Beltrán",
    region: "valle-medio",
    description:
      "Bodega familiar del Valle Medio con fuerte raíz territorial y vinos de perfil rionegrino.",
    shortDescription:
      "Bodega de Luis Beltrán en el Valle Medio, conocida por su línea Calfulén.",
    hours: "10:30 a 17:30",
    openNow: true,
    wines: [
      "Calfulen Pinot Noir Reserva",
      "Gran Calfuen Malbec",
      "Calfulen Malbec",
      "Calfulen Merlot",
      "Calfulen Riesling",
      "Calfulen Torrontés",
      "Maroma Blend",
      "Maroma Rosado",
      "Maroma Sauvignon Blanc",
    ],
    shops: ALL_SHOP_NAMES,
    activity: "Visita guiada y experiencia campestre",
    benefit: "10% OFF socios",
    rating: 4.8,
    distance: "170 km",
    image: bodegaVideladDornaPhoto,
  },
  {
    id: "w5",
    name: "Wapisa",
    city: "San Javier",
    region: "mar",
    description:
      "Bodega con impronta atlántica, vinos frescos y una propuesta singular vinculada al mar.",
    shortDescription:
      "Bodega de San Javier con cava submarina en el Golfo San Matías.",
    hours: "11:00 a 18:00",
    openNow: true,
    wines: ["Wapisa Pinot Noir", "Wapisa Sauvignon Blanc"],
    shops: ALL_SHOP_NAMES,
    activity: "Recorrido y degustación con perfil oceánico",
    benefit: "Beneficio especial para socios",
    rating: 4.9,
    distance: "32 km",
    image: bodegaWapisaPhoto,
},
 {
  id: "w6",
  name: "Finca Fraschetti",
  region: "cordillera",
  city: "San Carlos de Bariloche",
  description: "Bodega de montaña que combina tradición, naturaleza y pasión por el vino.",
  shortDescription:
    "Bodega de El Bolsón, en la Comarca Andina, con vinos de clima frío.",
  hours: "10:00 a 18:00",
  openNow: true,
  wines: ["Finca Fraschetti Pinot Noir"],
  shops: ALL_SHOP_NAMES,
  activity: "Degustación con vista a la cordillera",
  benefit: "Copa de cortesía",
  rating: 4.7,
  distance: "160 km",
  image: fincaFraschettiPhoto,
},
{
  id: "w7",
  name: "Viñas de Lucía",
  city: "San Javier",
  region: "mar",
  description:
    "Emprendimiento familiar que arrancó en 2004 con la plantación de sus primeros viñedos, a cargo del enólogo Juan Alberto Millamán. Elabora unas 30.000 botellas anuales bajo la marca Savu. Es de los pocos proyectos vitivinícolas del Valle Inferior de Río Negro, marcado por el viento y la influencia marítima de la Patagonia atlántica.",
  shortDescription:
    "Emprendimiento familiar de San Javier, sobre la costa, bajo la marca Savu.",
  hours: "Horario a confirmar",
  visitNotes: "Sin horario publicado. Aparece en el circuito municipal de agroturismo (chacras).",
  openNow: false,
  wines: ["Savu Malbec", "Savu Malbec Rosado", "Savu Syrah", "Savu Cabernet Sauvignon"],
  shops: [],
  activity: "Circuito municipal de agroturismo",
  benefit: "",
  distance: "",
  image: bodegaVinasDeLuciaPhoto,
  address: "Entrada de San Javier, ~25 km de Viedma, Valle de Viedma",
},
{
  id: "w8",
  name: "Familia Herrero",
  city: "Guardia Mitre",
  region: "mar",
  description:
    "Mini emprendimiento familiar en Guardia Mitre, sobre la costa del Río Negro. Producción a pequeña escala, sin visitas turísticas públicas confirmadas por el momento.",
  shortDescription:
    "Mini bodega familiar de Guardia Mitre, sobre la costa del Río Negro.",
  hours: "Sin visitas públicas confirmadas",
  visitNotes: "Sin horarios públicos. Mini emprendimiento familiar, sin visitas públicas confirmadas.",
  openNow: false,
  wines: ["Tinto (Malbec y Cabernet Sauvignon)", "Blanco (Chenin)"],
  shops: [],
  activity: "Producción familiar, contactar por Facebook",
  benefit: "",
  distance: "",
  image: bodegaFamiliaHerreroPhoto,
  instagram: "Facebook: Familia Herrero (Guardia Mitre)",
},
{
  id: "w9",
  name: "Bodega Don Amaro",
  city: "San Antonio Oeste",
  region: "mar",
  description:
    "Bodega y olivar de la familia Mañana, pionera en la olivicultura de San Antonio Oeste (marca Oleosan), en el cruce de Ruta 3 y Ruta 251. Es el primer vino elaborado en la región, hoy también bajo la marca Don Maro. Forma parte del circuito oficial Caminos del Vino (establecimiento N° 14, sumado en marzo 2025).",
  shortDescription:
    "Bodega y olivar de San Antonio Oeste, con recorrido por viñedos y degustación.",
  hours: "08:00 a 20:00, todos los días",
  visitNotes: "Abre todos los días de 8:00 a 20:00. Recorrido por viñedos, olivares y bodega + degustación de Malbec y aceite de oliva.",
  openNow: true,
  wines: ["Don Amaro Malbec"],
  shops: [],
  activity: "Recorrido por viñedos, olivares y bodega + degustación",
  benefit: "",
  distance: "",
  image: bodegaDonAmaroPhoto,
  address: "Cruce de Ruta 3 y Ruta 251, cerca de San Antonio Oeste (~10 km de Las Grutas)",
  website: "Turismo provincial / Oleosan",
},
{
  id: "w10",
  name: "Enclave Sur",
  city: "Choele Choel",
  region: "valle-medio",
  description:
    "Proyecto del Grupo Trafen, con chacras en la isla de Choele Choel, Darwin, Luis Beltrán y Paso Piedra, en pleno Valle Medio. Producción orientada a la venta directa y entrega a domicilio en Choele Choel.",
  shortDescription:
    "Bodega del Valle Medio, con vinos artesanales de Choele Choel.",
  hours: "Solo entrega a domicilio en Choele Choel",
  visitNotes: "Sin evidencia de visitas turísticas públicas. Entrega a domicilio en Choele Choel.",
  openNow: false,
  wines: [
    "Enclave Sur Pinot Noir",
    "Enclave Sur Rosado",
    "Enclave Sur Chardonnay",
    "Enclave Sur Malbec",
    "Enclave Sur Cabernet Sauvignon",
    "Enclave Sur Malbec Blend",
    "Enclave Sur Reserva Malbec",
    "Enclave Sur Reserva Cabernet Franc",
    "Enclave Sur Cabernet Sauvignon Reserva",
    "Enclave Sur Reserva Merlot",
  ],
  shops: [],
  activity: "Venta directa, sin visitas públicas",
  benefit: "",
  distance: "",
  image: bodegaEnclaveSurPhoto,
  instagram: "Facebook: Enclave Sur | Choele Choel",
},
{
  id: "w11",
  name: "Bodega Trina",
  city: "Río Colorado",
  region: "valle-medio",
  description:
    "Proyecto familiar que revitalizó viñedos antiguos del Valle de Río Colorado desde 2021. La chacra tiene tres tipos de suelo distintos (arcilloso con clones de Tupungato, calcáreo y rocoso con clones del Alto Valle, y arenoso característico de la costa de Río Colorado), y de esa combinación surge su blend de Malbec insignia. También suman Pinot Noir y Merlot para sumar acento patagónico a los cortes.",
  shortDescription:
    "Bodega de Río Colorado, con restaurante propio y alojamiento boutique junto al río.",
  hours: "Todos los días excepto sábados (reservar)",
  visitNotes: "Visitas guiadas, degustaciones, restaurante propio y alojamiento boutique. Restaurante abre todos los días excepto sábados. Se recomienda reservar. Fundada en 2020, orgánica/biodinámica.",
  openNow: true,
  wines: ["Trina Blend de Malbec", "Trina Naranjo de Criollas", "Trina Reserva de Malbec"],
  shops: [],
  activity: "Visitas guiadas, restaurante y alojamiento boutique",
  benefit: "",
  distance: "",
  image: bodegaTrinaPhoto,
  address: "Arturo Benini 1471, Colonia Reig, Río Colorado, Río Negro",
  whatsapp: "+54 9 2931 41-1915",
  email: "bodegatrina@gmail.com",
  instagram: "@bodegatrina",
  website: "bodegatrina.com.ar",
},
{
  id: "w12",
  name: "Familia De Bernardi",
  city: "El Bolsón",
  region: "cordillera",
  description:
    "Trabajan con prácticas orgánicas y biodinámicas, sin filtrar ni clarificar, con levaduras nativas y muy pocos sulfitos. La bodega más austral de Río Negro, fundada en 2011. El Pinot Noir 2020 fue reconocido con 95 puntos por el crítico internacional Tim Atkin, entre los 4 mejores Pinot Noir del país.",
  shortDescription:
    "La bodega más austral de Río Negro, en El Bolsón, con Pinot Noir premiado.",
  hours: "Con reserva previa (sin horario fijo)",
  visitNotes: "Visitas guiadas y degustaciones con reserva previa, maridaje con quesos y fiambres. Sin horario fijo. Ofrece alojamiento en la cabaña \"Las Viñas del Piltri\".",
  openNow: false,
  wines: [
    "De Bernardi Pinot Noir",
    "De Bernardi Gewürztraminer",
    "De Bernardi Merlot",
    "De Bernardi Merlot Rosé",
  ],
  shops: [],
  activity: "Visitas y degustaciones con reserva previa",
  benefit: "",
  distance: "",
  image: bodegaFamiliaDeBernardiPhoto,
  address: "Al pie del Cerro Piltriquitrón, \"Villa Turismo\", El Bolsón",
  whatsapp: "+54 9 2945 46-8170",
  email: "bodega@debernardi.com.ar",
  instagram: "@bodegadebernardi",
},
{
  id: "w13",
  name: "Ribera del Cuarzo",
  city: "El Cuy (Valle Azul)",
  region: "linea-sur",
  description:
    "Viñedo único en Valle Azul, sobre la barda del antiguo lecho del Río Negro, con suelos de ceniza, cuarzo y carbonato de calcio de origen eólico y volcánico. Filosofía de \"vigneron\" francés, con mínima intervención. Marca Araucana, boutique orientada a exportación (~180.000 botellas/año, 23 mercados), liderada por Felipe Menéndez desde 2018.",
  shortDescription:
    "Bodega boutique de Línea Sur, orientada a exportación, en la barda de Valle Azul.",
  hours: "Horario a confirmar",
  visitNotes: "Sin horario publicado.",
  openNow: false,
  wines: [
    "Araucana Río de los Ciervos Malbec Rosé",
    "Araucana Río de los Ciervos Pinot Noir",
    "Araucana Río de los Ciervos Malbec",
    "Araucana Azul",
    "Clásico Patinas Blancas",
    "Clásico Merlot Rosé",
    "Clásico Merlot",
    "Clásico Malbec",
    "Parcela Única",
  ],
  shops: [],
  activity: "Bodega boutique orientada a exportación",
  benefit: "",
  distance: "",
  image: bodegaRiberaDelCuarzoPhoto,
  address: "Ruta Provincial N° 7, Km 12, Valle Azul, Río Negro. CP 8336.",
},
];

const WINERIES = [...WINERIES_DATA].sort((a, b) => {
  const priority = "Antigua Bodega Patagónica";
  if (a.name === priority) return -1;
  if (b.name === priority) return 1;
  return 0;
});

const WINES: Wine[] = [
  {
    id: "v1",
    name: "Miras Pinot Noir Salvaje Curioso",
    varietal: "Pinot Noir",
    winery: "Bodega Miras",
    style: "Elegante y fresco",
    note: "Fruta roja, acidez equilibrada y perfil patagónico ideal para regalar.",
    availableAt: ALL_SHOP_NAMES,
    tag: "Ideal para regalar",
    image: mirasPinotSalvajeCuriosoPhoto
  },
  {
    id: "v2",
    name: "Aniello 006",
    varietal: "Merlot",
    winery: "Bodega Finca Aniello",
    style: "Amable y redondo",
    note: "Muy versátil, ideal para una cena y uno de los más buscados.",
    availableAt: ALL_SHOP_NAMES,
    tag: "Muy buscado",
    image: anielo006MerlotPhoto

  },
  {
    id: "v3", 
    name: "Pinot Noir de viñedo antiguo",
    varietal: "Pinot Noir",
    winery: "Humberto Canale",
    style: "Complejo y largo",
    note: "Etiqueta clásica, con personalidad y excelente estructura.",
    availableAt: ALL_SHOP_NAMES,
    tag: "Reserva",
    image: humbertoCanaleOldVineyardPinotNoirPhoto
  },
  {
    id: "v4",
    name: "Aniello 006 Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Bodega Finca Aniello",
    style: "Suave y expresivo",
    note: "Una etiqueta muy patagónica, perfecta para quienes buscan algo delicado.",
    availableAt: ALL_SHOP_NAMES,
    tag: "Descubrimiento",
    image: anielo006PinotNoirPhoto
  },
  {
    id: "v5",
    name: "Calfulen Pinot Noir Reserva",
    varietal: "Pinot Noir",
    winery: "Bodega Videla Dorna",
    style: "Patagónico y delicado",
    note: "Expresa la elegancia del Valle Medio con fruta fresca, tensión y perfil refinado.",
    availableAt: ALL_SHOP_NAMES,
    tag: "Valle Medio",
    image: videlaDornaCalfuenPinotNoirReservaPhoto
  },
  {
    id: "v6",
    name: "Wapisa Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Wapisa",
    style: "Fresco y oceánico",
    note: "Pinot Noir de perfil atlántico, con frescura e identidad distinta dentro de Río Negro.",
    availableAt: ALL_SHOP_NAMES,
    tag: "Atlántico",
    image:"/wines/wapisa-pinot-noir.png"
  },
  {
  id: "v7",
  name: "Finca Fraschetti Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Finca Fraschetti",
  style: "Elegante y de montaña",
  note: "Fruta roja fresca, acidez vibrante y final persistente.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Nuevo en Cordillera",
  image: "/wines/finca-fraschetti-pinot-noir.png"
},
{
  id: "v8",
  name: "UN Sauvignon Blanc",
  varietal: "Sauvignon Blanc",
  winery: "Antigua Bodega Patagónica",
  style: "Blanco fresco y aromático",
  note: "Vino blanco de gran frescura, con notas cítricas y herbales características del Alto Valle.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Blanco recomendado",
  image: "/wines/antigua-un-sauvignon-blanc.png"
},
{
  id: "v9",
  name: "UN Chardonnay",
  varietal: "Chardonnay",
  winery: "Antigua Bodega Patagónica",
  style: "Blanco equilibrado y elegante",
  note: "De gran expresión frutal, con buena estructura, frescura y un final persistente.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Blanco recomendado",
  image: "/wines/antigua-un-chardonnay.png"
},
{
  id: "v10",
  name: "UN Rosé",
  varietal: "Rosé",
  winery: "Antigua Bodega Patagónica",
  style: "Rosado fresco y frutado",
  note: "Elegante y refrescante, con aromas de frutas rojas y una acidez equilibrada que invita a seguir disfrutándolo.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Ideal para el verano",
  image: "/wines/antigua-un-rose.png"
},
  {
  id: "v11",
  name: "UN Malbec Reserva",
  varietal: "Malbec",
  winery: "Antigua Bodega Patagónica",
  style: "Tinto intenso y equilibrado",
  note: "Expresa el carácter del Alto Valle con notas de frutos negros, especias y taninos suaves. Crianza en roble que aporta complejidad sin perder frescura.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Reserva",
  image: "/wines/antigua-un-malbec-reserva.png"
},
{
  id: "v12",
  name: "UN Pinot Noir Reserva",
  varietal: "Pinot Noir",
  winery: "Antigua Bodega Patagónica",
  style: "Elegante y complejo",
  note: "Pinot Noir de gran expresión, con aromas de cerezas, frambuesas y delicadas notas especiadas. La crianza en roble aporta complejidad y un final persistente.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Reserva",
  image: "/wines/antigua-un-pinot-noir-reserva.png"
},
{
  id: "v13",
  name: "UN Gran Corte Reserva",
  varietal: "Blend",
  winery: "Antigua Bodega Patagónica",
  style: "Blend complejo y elegante",
  note: "Corte de variedades seleccionadas del Alto Valle, con gran concentración, equilibrio y una crianza en roble que aporta profundidad y persistencia.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Blend Reserva",
  image: "/wines/antigua-un-gran-corte-reserva.png"
},
{
  id: "v14",
  name: "UN Malbec Gran Reserva",
  varietal: "Malbec",
  winery: "Antigua Bodega Patagónica",
  style: "Gran Reserva de guarda",
  note: "Malbec de gran concentración y elegancia, con aromas de frutos negros maduros, cacao y especias. Su prolongada crianza en roble aporta complejidad, estructura y un final persistente.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Gran Reserva",
  image: "/wines/antigua-un-malbec-gran-reserva.png"
},
{
  id: "v15",
  name: "UN Merlot Gran Reserva",
  varietal: "Merlot",
  winery: "Antigua Bodega Patagónica",
  style: "Gran Reserva de guarda",
  note: "Merlot elegante y de gran complejidad, con notas de ciruelas maduras, frutos negros, vainilla y cacao. Su crianza en barricas aporta una textura sedosa y un final largo y armonioso.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Gran Reserva",
  image: "/wines/antigua-un-merlot-gran-reserva.png"
},
{
  id: "v16",
  name: "Bellaco Malcriado Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Antigua Bodega Patagónica",
  style: "Joven y expresivo",
  note: "Pinot Noir de perfil moderno, con aromas de cerezas y frambuesas, taninos suaves y una marcada frescura que invita a seguir disfrutándolo.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Edición especial",
  image: "/wines/antigua-bellaco-pinot-noir.png"
},  
{
  id: "v17",
  name: "Bellaco Malcriado Merlot",
  varietal: "Merlot",
  winery: "Antigua Bodega Patagónica",
  style: "Joven y frutado",
  note: "Merlot de gran expresión frutal, con notas de ciruelas maduras y frutas rojas, de cuerpo medio y final amable.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Edición especial",
  image: "/wines/antigua-bellaco-merlot.png"
},
{
  id: "v18",
  name: "Bellaco Malcriado Malbec",
  varietal: "Malbec",
  winery: "Antigua Bodega Patagónica",
  style: "Joven e intenso",
  note: "Malbec vibrante, con aromas de frutos negros y violetas, taninos redondos y un final fresco que refleja el carácter del Alto Valle.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Edición especial",
  image: "/wines/antigua-bellaco-malbec.png"
},
{
  id: "v19",
  name: "Savu Malbec",
  varietal: "Malbec",
  winery: "Viñas de Lucía",
  style: "Redondo y ahumado",
  description: "Malbec patagónico de zona marítima, con aromas frutados de ciruela dulce, notas ahumadas y un toque floral. En boca es redondo y sobrio, con buen equilibrio, taninos jóvenes y cuerpo medio elegante.",
  availableAt: [],
  tag: "Costa/Mar",
  image: savuMalbecPhoto,
},
{
  id: "v20",
  name: "Savu Malbec Rosado",
  varietal: "Rosado",
  winery: "Viñas de Lucía",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Costa/Mar",
  image: savuMalbecRosadoPhoto,
},
{
  id: "v21",
  name: "Savu Syrah",
  varietal: "Syrah",
  winery: "Viñas de Lucía",
  style: "Suave y especiado",
  description: "Syrah patagónico de zona marítima, con aromas de fruta negra, moras y un toque especiado. En boca es suave y delicado, con correcto equilibrio y cuerpo ligero.",
  availableAt: [],
  tag: "Costa/Mar",
  image: savuSyrahPhoto,
},
{
  id: "v22",
  name: "Savu Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Viñas de Lucía",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Costa/Mar",
  image: savuCabernetSauvignonPhoto,
},
{
  id: "v23",
  name: "Tinto (Malbec y Cabernet Sauvignon)",
  varietal: "Malbec y Cabernet Sauvignon",
  winery: "Familia Herrero",
  style: "Corte con cuerpo",
  description: "Corte de Malbec y Cabernet Sauvignon que combina la fruta madura y untuosidad del Malbec con la estructura y frescura herbácea del Cabernet. Tinto de cuerpo medio a alto y buena complejidad.",
  availableAt: [],
  tag: "Costa/Mar",
  image: familiaHerreroTintoPhoto,
},
{
  id: "v24",
  name: "Blanco (Chenin)",
  varietal: "Chenin Blanc",
  winery: "Familia Herrero",
  style: "Fresco y mineral",
  description: "Blanco versátil de acidez marcada, con aromas a manzana verde, membrillo y flores blancas. Fresco y mineral, ideal para climas fríos como el patagónico.",
  availableAt: [],
  tag: "Costa/Mar",
  image: familiaHerreroBlancoPhoto,
},
{
  id: "v25",
  name: "Don Amaro Malbec",
  varietal: "Malbec",
  winery: "Bodega Don Amaro",
  style: "Robusto e intenso",
  description: "Vino artesanal y orgánico que rinde tributo al espíritu pionero de la familia Mañana, pionera en la olivicultura de San Antonio Oeste (marca Oleosan). Es el primer vino elaborado en la región. Aromas a frutos rojos maduros, especias sutiles y notas terrosas, con elegancia en boca y taninos suaves. La influencia de los vientos marítimos y el cambio de mareas le aporta gran concentración de polifenoles, dando un vino de cuerpo robusto y color intenso.",
  availableAt: [],
  tag: "Costa/Mar",
  image: donAmaroMalbecPhoto,
},
{
  id: "v26",
  name: "Enclave Sur Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Enclave Sur",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Valle Medio",
  image: enclaveSurPinotNoirPhoto,
},
{
  id: "v27",
  name: "Enclave Sur Rosado",
  varietal: "Rosado",
  winery: "Enclave Sur",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Valle Medio",
  image: enclaveSurRosadoPhoto,
},
{
  id: "v28",
  name: "Enclave Sur Chardonnay",
  varietal: "Chardonnay",
  winery: "Enclave Sur",
  style: "Untuoso y cítrico",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: [],
  tag: "Valle Medio",
  image: enclaveSurChardonnayPhoto,
},
{
  id: "v29",
  name: "Enclave Sur Malbec",
  varietal: "Malbec",
  winery: "Enclave Sur",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Valle Medio",
  image: enclaveSurMalbecPhoto,
},
{
  id: "v30",
  name: "Enclave Sur Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Enclave Sur",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Valle Medio",
  image: enclaveSeleccionCabernetSauvignonPhoto,
},
{
  id: "v31",
  name: "Enclave Sur Malbec Blend",
  varietal: "Malbec Blend",
  winery: "Enclave Sur",
  style: "Corte con estructura",
  description: "Corte con base de Malbec, que aporta fruta madura y untuosidad, combinado con otras variedades para sumar estructura y complejidad. Tinto de cuerpo medio a alto.",
  availableAt: [],
  tag: "Valle Medio",
  image: enclaveSurReservaMalbecBlendPhoto,
},
{
  id: "v32",
  name: "Enclave Sur Reserva Malbec",
  varietal: "Malbec",
  winery: "Enclave Sur",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: enclaveSurReservaMalbecPhoto,
},
{
  id: "v33",
  name: "Enclave Sur Reserva Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Enclave Sur",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Reserva",
  image: enclaveSurReservaCabernetFrancPhoto,
},
{
  id: "v34",
  name: "Enclave Sur Cabernet Sauvignon Reserva",
  varietal: "Cabernet Sauvignon",
  winery: "Enclave Sur",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Reserva",
  image: enclaveSurReservaCabernetSauvignonPhoto,
},
{
  id: "v35",
  name: "Enclave Sur Reserva Merlot",
  varietal: "Merlot",
  winery: "Enclave Sur",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Reserva",
  image: enclaveSurReservaMerlotPhoto,
},
{
  id: "v36",
  name: "Trina Blend de Malbec",
  varietal: "Blend de Malbec",
  winery: "Bodega Trina",
  style: "Vino insignia",
  description: "Vino insignia de la bodega, resultado del corte de tres clones de Malbec provenientes de los tres suelos distintos de la chacra (arcilloso, calcáreo y arenoso).",
  availableAt: [],
  tag: "Valle Medio",
  image: trinaBlendDeMalbecPhoto,
},
{
  id: "v37",
  name: "Trina Naranjo de Criollas",
  varietal: "Naranjo (uvas blancas criollas)",
  winery: "Bodega Trina",
  style: "Ámbar y tánico",
  description: "Vino \"naranjo\", elaborado con uvas blancas maceradas con su piel, lo que le da un color ámbar/naranja y mayor estructura tánica que un blanco tradicional. Aromas a fruta madura, cáscara de naranja y notas herbales.",
  availableAt: [],
  tag: "Valle Medio",
  image: trinaNaranjoDeCriollasPhoto,
},
{
  id: "v38",
  name: "Trina Reserva de Malbec",
  varietal: "Malbec",
  winery: "Bodega Trina",
  style: "Decantación natural",
  description: "Vino de dos inviernos, de decantación natural de dos años, sin paso por madera. Malbec de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: trinaReservaDeMalbecPhoto,
},
{
  id: "v39",
  name: "De Bernardi Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Familia De Bernardi",
  style: "Delicado y terroso",
  description: "Vino tinto delicado, elegante y sutil, con notas de frutos rojos, flores, tierra húmeda y tostados, que expresa la elegancia y complejidad del terroir patagónico. No pasa por madera. 95 puntos Tim Atkin (2023).",
  availableAt: [],
  tag: "Cordillera",
  image: deBernardiPinotNoirPhoto,
},
{
  id: "v40",
  name: "De Bernardi Gewürztraminer",
  varietal: "Gewürztraminer",
  winery: "Familia De Bernardi",
  style: "Exótico y perfumado",
  description: "Vino blanco exótico, perfumado y complejo, con notas de lichi, rosas, jazmín y especias.",
  availableAt: [],
  tag: "Cordillera",
  image: deBernardiGewurztraminerPhoto,
},
{
  id: "v41",
  name: "De Bernardi Merlot",
  varietal: "Merlot",
  winery: "Familia De Bernardi",
  style: "Intenso y estructurado",
  description: "Vino tinto intenso, estructurado y complejo, con notas de frutos negros, chocolate, café y vainilla. Pasa dos años por barricas de primer uso de roble francés. 92 puntos Tim Atkin.",
  availableAt: [],
  tag: "Cordillera",
  image: deBernardiMerlotPhoto,
},
{
  id: "v42",
  name: "De Bernardi Merlot Rosé",
  varietal: "Merlot Rosé",
  winery: "Familia De Bernardi",
  style: "Fresco y aromático",
  description: "Fresco y aromático, con esencias de frutos rojos, especias y hierbas. Es la versión de Merlot que no pasa por madera: más frutado y ligero que el tinto.",
  availableAt: [],
  tag: "Cordillera",
  image: deBernardiMerlotRosePhoto,
},
{
  id: "v43",
  name: "Araucana Río de los Ciervos Malbec Rosé",
  varietal: "Malbec Rosé",
  winery: "Ribera del Cuarzo",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Línea Sur",
  image: araucanaRioDeLosCiervosMalbecRosePhoto,
},
{
  id: "v44",
  name: "Araucana Río de los Ciervos Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Ribera del Cuarzo",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Línea Sur",
  image: araucanaRioDeLosCiervosPinotNoirPhoto,
},
{
  id: "v45",
  name: "Araucana Río de los Ciervos Malbec",
  varietal: "Malbec",
  winery: "Ribera del Cuarzo",
  style: "Complejo y mineral",
  description: "Viñedos de más de 40 años de antigüedad en los suelos clásicos del Alto Valle. Tintos redondos, complejos y equilibrados, con taninos elegantes. Aromas a frutos negros con sutiles notas ahumadas y mentoladas, carácter frutal combinado con notas minerales y final persistente. 95% Malbec, 5% Petit Verdot, crianza en roble francés.",
  availableAt: [],
  tag: "Línea Sur",
  image: araucanaRioDeLosCiervosMalbecPhoto,
},
{
  id: "v46",
  name: "Araucana Azul",
  varietal: "Malbec, Merlot y Petit Verdot",
  winery: "Ribera del Cuarzo",
  style: "Blend elegante",
  description: "Blend elegante y exclusivo de Malbec, Merlot y Petit Verdot.",
  availableAt: [],
  tag: "Línea Sur",
  image: araucanaAzulPhoto,
},
{
  id: "v47",
  name: "Clásico Patinas Blancas",
  varietal: "Blanco",
  winery: "Ribera del Cuarzo",
  style: "Fresco y cítrico",
  description: "Blanco fresco de la Patagonia, con acidez natural marcada por el clima frío y ventoso de la región. Notas cítricas y florales, ideal para acompañar mariscos y pescados.",
  availableAt: [],
  tag: "Línea Sur",
  image: clasicoPatinasBlancasPhoto,
},
{
  id: "v48",
  name: "Clásico Merlot Rosé",
  varietal: "Merlot Rosé",
  winery: "Ribera del Cuarzo",
  style: "Suave y liviano",
  description: "Rosado elaborado a partir de Merlot, de color salmón vivo, con aromas a frutos rojos frescos y un perfil suave y liviano en boca.",
  availableAt: [],
  tag: "Línea Sur",
  image: clasicoMerlotRosePhoto,
},
{
  id: "v49",
  name: "Clásico Merlot",
  varietal: "Merlot",
  winery: "Ribera del Cuarzo",
  style: "Estructurado y expresivo",
  description: "100% Merlot de viñedos en ambas márgenes del Río Negro. Perfil estructurado y expresivo, con notas a frutos negros maduros, cassis y sutiles toques especiados. Cuerpo medio, taninos suaves y final redondo.",
  availableAt: [],
  tag: "Línea Sur",
  image: clasicoMerlotPhoto,
},
{
  id: "v50",
  name: "Clásico Malbec",
  varietal: "Malbec",
  winery: "Ribera del Cuarzo",
  style: "Fresco y con sentido de lugar",
  description: "Uvas de 8 viñedos antiguos de ambas márgenes del Río Negro. Busca mostrar la diversidad de la zona clásica del valle: frescura, elegancia y sentido de lugar.",
  availableAt: [],
  tag: "Línea Sur",
  image: clasicoMalbecPhoto,
},
{
  id: "v51",
  name: "Parcela Única",
  varietal: "Malbec, Merlot y Petit Verdot",
  winery: "Ribera del Cuarzo",
  style: "Composición única de suelo",
  description: "Blend de 48% Malbec, 40% Merlot, 12% Petit Verdot. Suelos de origen eólico, enriquecidos con ceniza volcánica y potasio, con alto contenido de carbonato de calcio — una composición química poco común incluso a nivel mundial.",
  availableAt: [],
  tag: "Línea Sur",
  image: parcelaUnicaPhoto,
},
{
  id: "v52",
  name: "Miras Joven Malbec",
  varietal: "Malbec",
  winery: "Bodega Miras",
  style: "Joven y frutado",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Joven",
  image: mirasJovemMalbecPhoto,
},
{
  id: "v53",
  name: "Gran Reserva Malbec",
  varietal: "Malbec",
  winery: "Humberto Canale",
  style: "Estructurado y de guarda",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Reserva",
  image: humbertoCanaleGranReservaMalbecPhoto,
},
{
  id: "v54",
  name: "Wapisa Sauvignon Blanc",
  varietal: "Sauvignon Blanc",
  winery: "Wapisa",
  style: "Fresco y herbáceo",
  description: "Blanco de aromas frescos y herbáceos, con notas cítricas, hierba recién cortada y en ocasiones pomelo. En boca es seco, de acidez marcada y cuerpo liviano, ideal como aperitivo.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Atlántico",
  image: wapisaSauvignonBlancPhoto,
},
{
  id: "v55",
  name: "Gran Calfuen Malbec",
  varietal: "Malbec",
  winery: "Bodega Videla Dorna",
  style: "Intenso y untuoso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Valle Medio",
  image: videlaDornaGranCalfuenMalbecPhoto,
},
{
  id: "v56",
  name: "Aniello 006 Chardonnay",
  varietal: "Chardonnay",
  winery: "Bodega Finca Aniello",
  style: "Riverside Estate",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: ALL_SHOP_NAMES,
  tag: "006",
  image: anielo006ChardonnayPhoto,
},
{
  id: "v57",
  name: "Aniello 006 Malbec",
  varietal: "Malbec",
  winery: "Bodega Finca Aniello",
  style: "Riverside Estate",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "006",
  image: anielo006MalbecPhoto,
},
{
  id: "v58",
  name: "Aniello Soil Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Finca Aniello",
  style: "Mineral y de suelo",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Soil",
  image: anieloSoilPinotNoirPhoto,
},
{
  id: "v59",
  name: "Aniello Soil Malbec",
  varietal: "Malbec",
  winery: "Bodega Finca Aniello",
  style: "Mineral y de suelo",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Soil",
  image: anieloSoilMalbecPhoto,
},
{
  id: "v60",
  name: "Aniello Soil Merlot",
  varietal: "Merlot",
  winery: "Bodega Finca Aniello",
  style: "Mineral y de suelo",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Soil",
  image: anieloSoilMerlotPhoto,
},
{
  id: "v61",
  name: "Aniello Soil Blanco de Pinot Noir",
  varietal: "Pinot Noir (vinificado en blanco)",
  winery: "Bodega Finca Aniello",
  style: "Mineral y de suelo",
  description: "Blanco elaborado a partir de uva tinta Pinot Noir vinificada sin contacto con los hollejos, de color pálido y perfil delicado. Aromas a frutas blancas y cítricos, con la textura y sutileza características de la variedad.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Soil",
  image: anieloSoilBlancoPinotNoirPhoto,
},
{
  id: "v62",
  name: "Aniello Viña 1932 Trousseau",
  varietal: "Trousseau",
  winery: "Bodega Finca Aniello",
  style: "Viñedo histórico",
  description: "Tinto ligero de color rubí pálido, con aromas a frutos rojos frescos, especias suaves y un carácter terroso. Taninos delicados y acidez marcada, de estilo cercano al Pinot Noir.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Viña 1932",
  image: anieloVina1932TrousseauPhoto,
},
{
  id: "v63",
  name: "Miras Crianza Malbec",
  varietal: "Malbec",
  winery: "Bodega Miras",
  style: "Con paso por madera",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Crianza",
  image: mirasCrianzaMalbecPhoto,
},
{
  id: "v64",
  name: "Miras Crianza Merlot",
  varietal: "Merlot",
  winery: "Bodega Miras",
  style: "Con paso por madera",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Crianza",
  image: mirasCrianzaMerlotPhoto,
},
{
  id: "v65",
  name: "Familia Miras Malbec",
  varietal: "Malbec",
  winery: "Bodega Miras",
  style: "Selección de familia",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Familia Miras",
  image: familiaMirasMalbecPhoto,
},
{
  id: "v66",
  name: "Familia Miras Semillón",
  varietal: "Semillón",
  winery: "Bodega Miras",
  style: "Selección de familia",
  description: "Blanco de cuerpo untuoso, con aromas a cera de abeja, frutos secos y flores blancas, y un fondo cítrico. Buena acidez y textura suave en boca; gana complejidad y notas a miel con el tiempo en botella.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Familia Miras",
  image: familiaMirasSemillonPhoto,
},
{
  id: "v67",
  name: "Miras Joven Chardonnay",
  varietal: "Chardonnay",
  winery: "Bodega Miras",
  style: "Fresco y accesible",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Joven",
  image: mirasJovemChardonnayPhoto,
},
{
  id: "v68",
  name: "Miras Joven Merlot",
  varietal: "Merlot",
  winery: "Bodega Miras",
  style: "Fresco y accesible",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Joven",
  image: mirasJovemMerlotPhoto,
},
{
  id: "v69",
  name: "Miras Naranjo Curioso",
  varietal: "Naranjo (uva blanca macerada)",
  winery: "Bodega Miras",
  style: "Experimental y curioso",
  description: "Vino \"naranjo\", elaborado con uvas blancas maceradas con su piel, lo que le da un color ámbar/naranja y mayor estructura tánica que un blanco tradicional. Aromas a fruta madura, cáscara de naranja y notas herbales.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Curiosos",
  image: mirasNaranjoCuriososPhoto,
},
{
  id: "v70",
  name: "Miras Joven Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Miras",
  style: "Fresco y accesible",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Joven",
  image: mirasJovemPinotNoirPhoto,
},
{
  id: "v71",
  name: "Miras Joven Rosé",
  varietal: "Rosado",
  winery: "Bodega Miras",
  style: "Fresco y accesible",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Joven",
  image: mirasJovemRosePhoto,
},
{
  id: "v72",
  name: "Miras Joven Semillón",
  varietal: "Semillón",
  winery: "Bodega Miras",
  style: "Fresco y accesible",
  description: "Blanco de cuerpo untuoso, con aromas a cera de abeja, frutos secos y flores blancas, y un fondo cítrico. Buena acidez y textura suave en boca; gana complejidad y notas a miel con el tiempo en botella.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Joven",
  image: mirasJovemSemillonPhoto,
},
{
  id: "v73",
  name: "Miras Trosseau Curioso",
  varietal: "Trousseau",
  winery: "Bodega Miras",
  style: "Experimental y curioso",
  description: "Tinto ligero de color rubí pálido, con aromas a frutos rojos frescos, especias suaves y un carácter terroso. Taninos delicados y acidez marcada, de estilo cercano al Pinot Noir.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Curiosos",
  image: mirasTrosseauCuriosoPhoto,
},
{
  id: "v74",
  name: "Miras Liviano Malbec",
  varietal: "Malbec",
  winery: "Bodega Miras",
  style: "Ligero y fácil de tomar",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Liviano",
  image: mirasLivianoMalbecPhoto,
},
{
  id: "v75",
  name: "Barzi Canale Blend de Familia",
  varietal: "Blend",
  winery: "Humberto Canale",
  style: "Elegante de familia",
  description: "Corte de varias variedades que combina la fruta y estructura de cada una, buscando equilibrio, complejidad y un perfil de cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Barzi Canale",
  image: barziCanaleBlendDeFamiliaPhoto,
},
{
  id: "v76",
  name: "Barzi Canale Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Humberto Canale",
  style: "Elegante de familia",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Barzi Canale",
  image: barziCanalePinotNoirPhoto,
},
{
  id: "v77",
  name: "Humberto Canale Blush",
  varietal: "Rosado",
  winery: "Humberto Canale",
  style: "Fresco y liviano",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Blush",
  image: humbertoCanaleBlushPhoto,
},
{
  id: "v78",
  name: "Estate Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estateCabernetFrancPhoto,
},
{
  id: "v79",
  name: "Estate Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estateCabernetSauvignonPhoto,
},
{
  id: "v80",
  name: "Estate Malbec",
  varietal: "Malbec",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estateMalbecPhoto,
},
{
  id: "v81",
  name: "Estate Merlot",
  varietal: "Merlot",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estateMerlotPhoto,
},
{
  id: "v82",
  name: "Estate Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estatePinotNoirPhoto,
},
{
  id: "v83",
  name: "Estate Sauvignon Blanc",
  varietal: "Sauvignon Blanc",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Blanco de aromas frescos y herbáceos, con notas cítricas, hierba recién cortada y en ocasiones pomelo. En boca es seco, de acidez marcada y cuerpo liviano, ideal como aperitivo.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estateSauvignonBlancPhoto,
},
{
  id: "v84",
  name: "Estate Sauvignon Gris",
  varietal: "Sauvignon Gris",
  winery: "Humberto Canale",
  style: "Accesible y frutado",
  description: "Blanco de perfil aromático intermedio entre el Sauvignon Blanc y el Pinot Gris, con notas a durazno, flores blancas y un toque mineral. Cuerpo medio y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Estate",
  image: estateSauvignonGrisPhoto,
},
{
  id: "v85",
  name: "Gran Reserva Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Humberto Canale",
  style: "Estructurado y de guarda",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Reserva",
  image: granReservaCabernetFrancPhoto,
},
{
  id: "v86",
  name: "Gran Reserva Merlot",
  varietal: "Merlot",
  winery: "Humberto Canale",
  style: "Estructurado y de guarda",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Reserva",
  image: granReservaMerlotPhoto,
},
{
  id: "v87",
  name: "Gran Reserva Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Humberto Canale",
  style: "Estructurado y de guarda",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Reserva",
  image: granReservaPinotNoirPhoto,
},
{
  id: "v88",
  name: "Intimo Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Humberto Canale",
  style: "Boutique y concentrado",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Intimo",
  image: intimoCabernetSauvignonPhoto,
},
{
  id: "v89",
  name: "Intimo Malbec Merlot Cabernet",
  varietal: "Malbec, Merlot y Cabernet Sauvignon",
  winery: "Humberto Canale",
  style: "Boutique y concentrado",
  description: "Corte de varias variedades que combina la fruta y estructura de cada una, buscando equilibrio, complejidad y un perfil de cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Intimo",
  image: intimoMalbecMerlotCabernetPhoto,
},
{
  id: "v90",
  name: "Intimo Malbec",
  varietal: "Malbec",
  winery: "Humberto Canale",
  style: "Boutique y concentrado",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Intimo",
  image: intimoMalbecPhoto,
},
{
  id: "v91",
  name: "Intimo Sauvignon Semillón",
  varietal: "Sauvignon Blanc y Semillón",
  winery: "Humberto Canale",
  style: "Boutique y concentrado",
  description: "Corte de varias variedades que combina la fruta y estructura de cada una, buscando equilibrio, complejidad y un perfil de cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Intimo",
  image: intimoSauvignonSemillonPhoto,
},
{
  id: "v92",
  name: "Old Vineyard Blend",
  varietal: "Blend",
  winery: "Humberto Canale",
  style: "Carácter de viñedo antiguo",
  description: "Corte de varias variedades que combina la fruta y estructura de cada una, buscando equilibrio, complejidad y un perfil de cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Viñedo antiguo",
  image: oldVineyardBlendPhoto,
},
{
  id: "v93",
  name: "Old Vineyard Malbec",
  varietal: "Malbec",
  winery: "Humberto Canale",
  style: "Carácter de viñedo antiguo",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Viñedo antiguo",
  image: oldVineyardMalbecPhoto,
},
{
  id: "v94",
  name: "Old Vineyard Riesling",
  varietal: "Riesling",
  winery: "Humberto Canale",
  style: "Carácter de viñedo antiguo",
  description: "Blanco de acidez marcada y aromas florales, con notas cítricas, de durazno y un carácter mineral distintivo. Seco o semiseco según el estilo, ideal para climas fríos como el patagónico.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Viñedo antiguo",
  image: oldVineyardRieslingPhoto,
},
{
  id: "v95",
  name: "Old Vineyard Semillón",
  varietal: "Semillón",
  winery: "Humberto Canale",
  style: "Carácter de viñedo antiguo",
  description: "Blanco de cuerpo untuoso, con aromas a cera de abeja, frutos secos y flores blancas, y un fondo cítrico. Buena acidez y textura suave en boca; gana complejidad y notas a miel con el tiempo en botella.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Viñedo antiguo",
  image: oldVineyardSemillonPhoto,
},
{
  id: "v96",
  name: "Humberto Canale Rosé Noir",
  varietal: "Pinot Noir (vinificado en rosado)",
  winery: "Humberto Canale",
  style: "Fresco y liviano",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Rosé Noir",
  image: humbertoCanaleRoseNoirPhoto,
},
{
  id: "v97",
  name: "Calfulen Malbec",
  varietal: "Malbec",
  winery: "Bodega Videla Dorna",
  style: "Fresco del Valle Medio",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Valle Medio",
  image: calfulenMalbecPhoto,
},
{
  id: "v98",
  name: "Calfulen Merlot",
  varietal: "Merlot",
  winery: "Bodega Videla Dorna",
  style: "Fresco del Valle Medio",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Valle Medio",
  image: calfulenMerlotPhoto,
},
{
  id: "v99",
  name: "Calfulen Riesling",
  varietal: "Riesling",
  winery: "Bodega Videla Dorna",
  style: "Fresco del Valle Medio",
  description: "Blanco de acidez marcada y aromas florales, con notas cítricas, de durazno y un carácter mineral distintivo. Seco o semiseco según el estilo, ideal para climas fríos como el patagónico.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Valle Medio",
  image: calfulenRieslingPhoto,
},
{
  id: "v100",
  name: "Calfulen Torrontés",
  varietal: "Torrontés",
  winery: "Bodega Videla Dorna",
  style: "Fresco del Valle Medio",
  description: "Blanco muy aromático, con notas florales intensas (jazmín, geranio) y de frutas frescas como durazno y uva moscatel. Sorprende por ser seco en boca pese a lo perfumado, con buena acidez.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Valle Medio",
  image: calfulenTorrontesPhoto,
},
{
  id: "v101",
  name: "Maroma Blend",
  varietal: "Blend",
  winery: "Bodega Videla Dorna",
  style: "Suave y versátil",
  description: "Corte de varias variedades que combina la fruta y estructura de cada una, buscando equilibrio, complejidad y un perfil de cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Maroma",
  image: maromaBlendPhoto,
},
{
  id: "v102",
  name: "Maroma Rosado",
  varietal: "Rosado",
  winery: "Bodega Videla Dorna",
  style: "Suave y versátil",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Maroma",
  image: maromaRosadoPhoto,
},
{
  id: "v103",
  name: "Maroma Sauvignon Blanc",
  varietal: "Sauvignon Blanc",
  winery: "Bodega Videla Dorna",
  style: "Suave y versátil",
  description: "Blanco de aromas frescos y herbáceos, con notas cítricas, hierba recién cortada y en ocasiones pomelo. En boca es seco, de acidez marcada y cuerpo liviano, ideal como aperitivo.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Maroma",
  image: maromaSauvignonBlancPhoto,
},
].sort((a, b) => {
  const priority = "Antigua Bodega Patagónica";
  const aPriority = a.winery === priority;
  const bPriority = b.winery === priority;
  if (aPriority && !bPriority) return -1;
  if (!aPriority && bPriority) return 1;
  return 0;
});

// Datos reales de contacto/ubicación; el resto de los campos son placeholders
// hasta confirmar catálogo, horarios y beneficios con cada comercio.
const SHOPS: Shop[] = [
  {
    id: "s1",
    name: "Vinoteca Vinopolitan",
    city: "Viedma",
    address: "Rivadavia 890",
    description: "Descripción pendiente de confirmar con el comercio.",
    hours: "Horario a confirmar",
    openNow: false,
    wines: WINES.map((w) => w.name),
    benefit: "Beneficio a confirmar",
    distance: "Distancia a confirmar",
    image: "/grapes.png",
  },
  {
    id: "s2",
    name: "Vinoteca Río Tinto",
    city: "Viedma",
    address: "San Martín 420",
    description: "Descripción pendiente de confirmar con el comercio.",
    hours: "Horario a confirmar",
    openNow: false,
    wines: WINES.map((w) => w.name),
    benefit: "Beneficio a confirmar",
    distance: "Distancia a confirmar",
    image: "/grapes.png",
  },
  {
    id: "s3",
    name: "Vinoteca Piquillín",
    city: "Viedma",
    address: "Colón 508",
    description: "Descripción pendiente de confirmar con el comercio.",
    hours: "Horario a confirmar",
    openNow: false,
    wines: WINES.map((w) => w.name),
    benefit: "Beneficio a confirmar",
    distance: "Distancia a confirmar",
    image: "/grapes.png",
  },
  {
    id: "s4",
    name: "Vinoteca Olivas y Sabores",
    city: "Viedma",
    address: "Moreno 973",
    description: "Descripción pendiente de confirmar con el comercio.",
    hours: "Horario a confirmar",
    openNow: false,
    wines: WINES.map((w) => w.name),
    benefit: "Beneficio a confirmar",
    distance: "Distancia a confirmar",
    image: "/grapes.png",
  },
].sort((a, b) => {
  const priority = "Vinoteca Olivas y Sabores";
  if (a.name === priority) return -1;
  if (b.name === priority) return 1;
  return 0;
});

const EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Cata de Malbecs Rionegrinos",
    organizer: "Antigua Bodega Patagónica",
    place: "Vinoteca Olivas y Sabores",
    when: "Hoy · 19:00",
    city: "Viedma",
    benefit: "1 copa de regalo",
  },
  {
    id: "e2",
    title: "Noche de Vinos Patagónicos",
    organizer: "Antigua Bodega Patagónica",
    place: "Vinoteca Olivas y Sabores",
    when: "Sábado · 20:30",
    city: "Viedma",
    benefit: "10% OFF socios",
  },
  {
    id: "e3",
    title: "Maridaje en la Vinoteca",
    organizer: "Antigua Bodega Patagónica",
    place: "Vinoteca Olivas y Sabores",
    when: "Este finde · 18:00",
    city: "Viedma",
    benefit: "Entrada libre",
  },
];

function GlobalStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; }

      html, body, #root {
        margin: 0;
        min-height: 100%;
        background: ${theme.bgTop};
      }

      body {
        font-family: "Inter", sans-serif;
      }

      button, input {
        font-family: "Inter", sans-serif;
      }

      @keyframes splashLogoIn {
        0% { opacity: 0; transform: scale(0.85); }
        55% { opacity: 1; transform: scale(0.85); }
        100% { opacity: 1; transform: scale(1); }
      }

      @keyframes splashTextIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background: #D9D1C8;
        border-radius: 999px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }
    `}</style>
  );
}

export default function App() {
  const [tab, setTab] = useState<TabKey>("home");
  const [detail, setDetail] = useState<DetailState>(null);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    { id: "v1", name: "Miras Pinot Noir Salvaje Curioso", kind: "wine" },
  ]);
  const [search, setSearch] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setSplashFading(true), 3400);
    const hideTimer = setTimeout(() => setShowSplash(false), 3800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const openWine = (id: string, fromShop?: boolean) =>
    setDetail({ kind: "wine", id, fromShop });
  const openWinery = (id: string) => setDetail({ kind: "winery", id });
  const openShop = (id: string) => setDetail({ kind: "shop", id });
  const closeDetail = () => setDetail(null);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === item.id)
        ? prev.filter((f) => f.id !== item.id)
        : [...prev, item]
    );
  };

  const addToCart = (wine: Wine) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.wine.id === wine.id);
      if (existing) {
        return prev.map((item) =>
          item.wine.id === wine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { wine, quantity: 1 }];
    });
  };

  const removeFromCart = (wineId: string) => {
    setCart((prev) => prev.filter((item) => item.wine.id !== wineId));
  };

  const updateQuantity = (wineId: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.wine.id === wineId
          ? { ...item, quantity: Math.max(1, qty) }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const detailView = useMemo(() => {
    if (!detail) return null;
    if (detail.kind === "wine") return WINES.find((x) => x.id === detail.id);
    if (detail.kind === "winery") return WINERIES.find((x) => x.id === detail.id);
    return SHOPS.find((x) => x.id === detail.id);
  }, [detail]);

  const results = useMemo(() => {
    const q = search.toLowerCase().trim();

    const wines = WINES.filter((w) =>
      [w.name, w.varietal, w.winery, w.style, w.tag]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );

    const wineries = WINERIES.filter((w) =>
      [w.name, w.city, w.region, w.description, ...w.wines]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );

    const shops = SHOPS.filter((s) =>
      [s.name, s.city, s.description, ...s.wines]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );

    return {
      wines: q ? wines : WINES,
      wineries: q ? wineries : WINERIES,
      shops: q ? shops : SHOPS,
    };
  }, [search]);

  if (showSplash) {
    return (
      <>
        <GlobalStyles />
        <div
          style={{
            ...styles.splashPage,
            opacity: splashFading ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <div style={styles.splashLogoCircle}>
            <img
              src={logoIcon}
              alt="Vinos de Río Negro"
              style={styles.splashLogo}
            />
          </div>
          <div style={styles.splashText}>Vinos de Río Negro</div>
        </div>
      </>
    );
  }
  return (
    <>
      <GlobalStyles />
      <div style={styles.page}>
        <div style={styles.backgroundBlurOne} />
        <div style={styles.backgroundBlurTwo} />
        <div style={styles.backgroundDots} />

        <div style={styles.phone}>
         {!detail && tab !== "agenda" && tab !== "shop" && tab in PHOTO_HEADER_CONFIG && (
  <PhotoHeader
    {...PHOTO_HEADER_CONFIG[tab as keyof typeof PHOTO_HEADER_CONFIG]}
    onMenuClick={toggleMenu}
  />
)}

         {!detail && tab !== "agenda" && tab !== "shop" && !(tab in PHOTO_HEADER_CONFIG) && (
  <Header
    currentTab={tab}
    onMenuClick={toggleMenu}
  />
)}

          {showMenu && !detail && (
            <div style={styles.menuDropdown}>
              <button
                style={styles.menuItem}
                onClick={() => {
                  setTab("profile");
                  setShowMenu(false);
                }}
              >
                Perfil y beneficios
              </button>
              <button
                style={styles.menuItem}
                onClick={() => {
                  setTab("home");
                  setShowMenu(false);
                }}
              >
                Volver al inicio
              </button>
            </div>
          )}

         {detail?.kind === "winery" && detailView && (
           <div
             style={{
               ...styles.homePhoto,
               height: 210,
               backgroundImage: `linear-gradient(180deg, rgba(20,20,16,0.15) 0%, rgba(20,20,16,0.55) 100%), url('${
                 (detailView as Winery).image
               }')`,
             }}
           >
             <div style={styles.homePhotoTopRow}>
               <button style={styles.glassButton} onClick={closeDetail}>
                 <ArrowLeftIcon />
               </button>
             </div>
           </div>
         )}

     {tab === "agenda" && !detail ? (
       <AgendaScreen onMenuClick={toggleMenu} />
     ) : tab === "shop" && !detail ? (
       <ShopScreen
         onOpenWine={(id) => openWine(id, true)}
         onMenuClick={toggleMenu}
         cart={cart}
         addToCart={addToCart}
         removeFromCart={removeFromCart}
         updateQuantity={updateQuantity}
         clearCart={clearCart}
         toggleFavorite={toggleFavorite}
         isFavorite={isFavorite}
       />
     ) : (
     <div
  style={
    (!detail && tab in PHOTO_HEADER_CONFIG) || detail?.kind === "winery"
      ? styles.sheetSurface
      : styles.content
  }
>
            {detail && detailView ? (
              detail.kind === "wine" ? (
                <WineDetail
                  wine={detailView as Wine}
                  onBack={closeDetail}
                  onOpenShop={openShop}
                  onOpenWine={(name) => {
                    const found = WINES.find((w) => w.name === name);
                    if (found) openWine(found.id);
                  }}
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                  fromShop={detail.fromShop}
                  onAddToCart={addToCart}
                />
              ) : detail.kind === "winery" ? (
                <WineryDetail
                  winery={detailView as Winery}
                  onOpenWine={(name) => {
                    const found = WINES.find((w) => w.name === name);
                    if (found) openWine(found.id);
                  }}
                  onOpenShop={(name) => {
                    const found = SHOPS.find((s) => s.name === name);
                    if (found) openShop(found.id);
                  }}
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />
              ) : (
                <ShopDetail
                  shop={detailView as Shop}
                  onBack={closeDetail}
                  onOpenWine={(name) => {
                    const found = WINES.find((w) => w.name === name);
                    if (found) openWine(found.id);
                  }}
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />
              )
            ) : tab === "home" ? (
              <HomeScreen
                onOpenWine={openWine}
                onOpenWinery={openWinery}
                onOpenShop={openShop}
                onSetTab={setTab}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ) : tab === "map" ? (
              <MapScreen onOpenWine={openWine} onSetTab={setTab} />
            ) : tab === "search" ? (
              <SearchScreen
                search={search}
                setSearch={setSearch}
                results={results}
                onOpenWine={openWine}
                onOpenWinery={openWinery}
                onOpenShop={openShop}
              />
            ) : tab === "bodegas" ? (
              <RegionsScreen onOpenWinery={openWinery} />
            ) : tab === "winelist" ? (
              <WineListScreen onOpenWine={openWine} onSetTab={setTab} />
            ) : (
              <ProfileScreen favorites={favorites} />
            )}
          </div>
     )}

          {!detail && <BottomNav tab={tab} setTab={setTab} />}
        </div>
      </div>
    </>
  );
}
const SHOP_TABS = ["Vinos", "Cajas Experiencia", "Cursos"] as const;

const SHOP_VARIETAL_BANNERS: Array<{
  label: string;
  varietal: string;
  gradient: string;
}> = [
  {
    label: "Pinot Noir",
    varietal: "Pinot Noir",
    gradient: "linear-gradient(135deg, #6b1a2c, #4a1220)",
  },
  {
    label: "Malbec",
    varietal: "Malbec",
    gradient: "linear-gradient(135deg, #5c1522, #3d0f18)",
  },
  {
    label: "Merlot",
    varietal: "Merlot",
    gradient: "linear-gradient(135deg, #7d2436, #57182a)",
  },
  {
    label: "Cabernet",
    varietal: "Cabernet Sauvignon",
    gradient: "linear-gradient(135deg, #4a1535, #2d0d22)",
  },
];

const EXPERIENCE_BOXES: Array<{ name: string; description: string }> = [
  {
    name: "Experiencia Pinot Noir",
    description:
      "6 Pinot Noir de toda la provincia, de la cordillera al mar.",
  },
  {
    name: "Experiencia Malbec",
    description:
      "6 Malbec rionegrinos para descubrir el carácter patagónico.",
  },
  {
    name: "Experiencia Merlot",
    description:
      "6 Merlot seleccionados de las mejores bodegas del Alto y Valle Medio.",
  },
];

const WINE_COURSES: Array<{ name: string; description: string }> = [
  {
    name: "Introducción al Vino Rionegrino",
    description:
      "Descubrí las regiones, varietales y estilos únicos de Río Negro. Ideal para principiantes.",
  },
  {
    name: "Maridaje Patagónico",
    description:
      "Aprendé a combinar los mejores vinos locales con la gastronomía de la región.",
  },
  {
    name: "Sommelier Nivel 1",
    description:
      "El primer paso para convertirte en un experto en vinos. Certificación incluida.",
  },
];

function ShopScreen({
  onOpenWine,
  onMenuClick,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleFavorite,
  isFavorite,
}: {
  onOpenWine: (id: string) => void;
  onMenuClick: () => void;
  cart: CartItem[];
  addToCart: (wine: Wine) => void;
  removeFromCart: (wineId: string) => void;
  updateQuantity: (wineId: string, qty: number) => void;
  clearCart: () => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  const [activeShopTab, setActiveShopTab] =
    useState<(typeof SHOP_TABS)[number]>("Vinos");
  const [activeVarietal, setActiveVarietal] = useState<string | null>(null);
  const [openProduct, setOpenProduct] = useState<{
    name: string;
    description: string;
  } | null>(null);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [cartView, setCartView] = useState<
    "none" | "cart" | "checkout" | "confirm"
  >("none");

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartView === "confirm") {
    return (
      <OrderConfirmScreen
        onBackToShop={() => {
          clearCart();
          setCartView("none");
        }}
      />
    );
  }

  let body: React.ReactNode;

  if (activeVarietal) {
    body = (
      <VarietalDetailScreen
        varietal={activeVarietal}
        onBack={() => setActiveVarietal(null)}
        onOpenWine={onOpenWine}
        onAddToCart={addToCart}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    );
  } else if (cartView === "cart") {
    body = (
      <>
        <PhotoHeader
          imageUrl={experienciaPinotPhoto}
          title="Tu carrito"
          subtitle="Revisá los vinos que elegiste antes de confirmar."
          onMenuClick={onMenuClick}
        />
        <div style={styles.sheetSurface}>
          <CartScreen
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onBack={() => setCartView("none")}
            onCheckout={() => setCartView("checkout")}
          />
        </div>
      </>
    );
  } else if (cartView === "checkout") {
    body = (
      <>
        <PhotoHeader
          imageUrl={experienciaPinotPhoto}
          title="Finalizar compra"
          subtitle="Últimos pasos para completar tu pedido."
          onMenuClick={onMenuClick}
        />
        <div style={styles.sheetSurface}>
          <CheckoutScreen
            cart={cart}
            onBack={() => setCartView("cart")}
            onConfirm={() => setCartView("confirm")}
          />
        </div>
      </>
    );
  } else if (openProduct) {
    body = (
      <>
        <PhotoHeader
          imageUrl={experienciaPinotPhoto}
          title={openProduct.name}
          subtitle="La Patagonia en una caja"
          onMenuClick={onMenuClick}
        />
        <div style={styles.sheetSurface}>
          <ProductDetailScreen
            name={openProduct.name}
            description={openProduct.description}
            onBack={() => setOpenProduct(null)}
          />
        </div>
      </>
    );
  } else {
    body = (
      <ShopMainView
        onOpenWine={onOpenWine}
        onMenuClick={onMenuClick}
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        activeShopTab={activeShopTab}
        setActiveShopTab={setActiveShopTab}
        setActiveVarietal={setActiveVarietal}
        setOpenProduct={setOpenProduct}
        search={search}
        setSearch={setSearch}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />
    );
  }

  return (
    <>
      {body}
      {cartView === "none" && cart.length > 0 && (
        <CartBar
          totalQuantity={totalQuantity}
          onPress={() => setCartView("cart")}
        />
      )}
    </>
  );
}

function ShopMainView({
  onOpenWine,
  onMenuClick,
  addToCart,
  toggleFavorite,
  isFavorite,
  activeShopTab,
  setActiveShopTab,
  setActiveVarietal,
  setOpenProduct,
  search,
  setSearch,
  filterOpen,
  setFilterOpen,
}: {
  onOpenWine: (id: string) => void;
  onMenuClick: () => void;
  addToCart: (wine: Wine) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  activeShopTab: (typeof SHOP_TABS)[number];
  setActiveShopTab: (tab: (typeof SHOP_TABS)[number]) => void;
  setActiveVarietal: (varietal: string) => void;
  setOpenProduct: (product: { name: string; description: string }) => void;
  search: string;
  setSearch: (value: string) => void;
  filterOpen: boolean;
  setFilterOpen: (updater: (prev: boolean) => boolean) => void;
}) {
  const headerConfig =
    activeShopTab === "Cajas Experiencia"
      ? {
          imageUrl: experienciaPinotPhoto,
          title: "Cajas Experiencia",
          subtitle: "La provincia entera, en una caja.",
        }
      : activeShopTab === "Cursos"
      ? {
          imageUrl: cursosPhoto,
          title: "Cursos de Vino",
          subtitle: "Aprendé, descubrí y viví el vino Rionegrino.",
        }
      : {
          imageUrl: tiendaHeaderPhoto,
          title: "Tienda",
          subtitle: "Nuestros vinos, para vos — con envío a todo el país.",
        };

  const filteredShopWines = WINES.filter((w) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return [w.name, w.winery, w.varietal].join(" ").toLowerCase().includes(q);
  });

  return (
    <>
      <PhotoHeader {...headerConfig} onMenuClick={onMenuClick} />
      <div style={styles.sheetSurface}>
        <div style={styles.stack22}>
          <div style={styles.chipsRow}>
            {SHOP_TABS.map((t) => (
              <button
                key={t}
                style={activeShopTab === t ? styles.chipActive : styles.chip}
                onClick={() => setActiveShopTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {activeShopTab === "Vinos" ? (
            <>
              <div style={styles.rowGap10}>
                <div style={{ ...styles.searchBar, marginTop: 0, flex: 1 }}>
                  <SearchIcon />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.inputBig}
                    placeholder="Busca tu vino, bodega o experiencia."
                  />
                </div>
                <button
                  style={
                    filterOpen ? styles.menuButtonActive : styles.menuButton
                  }
                  onClick={() => setFilterOpen((prev) => !prev)}
                >
                  <FunnelIcon />
                </button>
              </div>

              <div
                style={{
                  ...styles.gradientCard,
                  background: `linear-gradient(rgba(20,20,16,0.55), rgba(20,20,16,0.55)), url('${experienciaPinotPhoto}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div style={styles.locationStatusRow}>
                  <span style={styles.locationDot} />
                  <span style={styles.locationEyebrow}>Nuevo</span>
                </div>
                <div style={styles.locationGreeting}>Experiencia Pinot 🍷</div>
                <div style={styles.locationBody}>
                  6 Pinot Noir de distintas bodegas de la provincia, en una
                  sola caja. Envío a todo el país.
                </div>
                <button
                  style={styles.primaryButton}
                  onClick={() =>
                    setOpenProduct({
                      name: "Experiencia Pinot",
                      description:
                        "Una selección de 6 Pinot Noir de las mejores bodegas de Río Negro, curada especialmente para descubrir la diversidad de esta variedad en la Patagonia. Cada botella cuenta una historia diferente, desde la cordillera hasta el mar.",
                    })
                  }
                >
                  Ver la caja →
                </button>
              </div>

              <div style={styles.horizontalScroller}>
                {SHOP_VARIETAL_BANNERS.map((banner) => (
                  <button
                    key={banner.label}
                    style={{
                      ...styles.varietalBannerTile,
                      background: banner.gradient,
                    }}
                    onClick={() => setActiveVarietal(banner.varietal)}
                  >
                    {banner.label}
                  </button>
                ))}
              </div>

              <SectionTitle title="Vinos disponibles" action="Ver todos" />

              <div style={styles.shopWineGrid}>
                {filteredShopWines.map((wine) => (
                  <ShopWineCard
                    key={wine.id}
                    wine={wine}
                    onClick={() => onOpenWine(wine.id)}
                    onAddToCart={addToCart}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                  />
                ))}
              </div>
            </>
          ) : activeShopTab === "Cajas Experiencia" ? (
            <div style={styles.stack12}>
              {EXPERIENCE_BOXES.map((box) => (
                <ShopListCard
                  key={box.name}
                  image={experienciaPinotPhoto}
                  name={box.name}
                  description={box.description}
                  actionLabel="Ver →"
                  onAction={() => setOpenProduct(box)}
                />
              ))}
            </div>
          ) : (
            <div style={styles.stack12}>
              {WINE_COURSES.map((course) => (
                <ShopListCard
                  key={course.name}
                  image={cursosPhoto}
                  name={course.name}
                  description={course.description}
                  actionLabel="Ver curso →"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function VarietalDetailScreen({
  varietal,
  onBack,
  onOpenWine,
  onAddToCart,
  toggleFavorite,
  isFavorite,
}: {
  varietal: string;
  onBack: () => void;
  onOpenWine: (id: string) => void;
  onAddToCart: (wine: Wine) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  const [activeWinery, setActiveWinery] = useState("Todos");

  const matchingWines = WINES.filter((w) => w.varietal === varietal);
  const wineries = Array.from(new Set(matchingWines.map((w) => w.winery)));

  const shownWines =
    activeWinery === "Todos"
      ? matchingWines
      : matchingWines.filter((w) => w.winery === activeWinery);

  return (
    <div style={styles.stack22}>
      <div style={styles.rowBetweenCenter}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeftIcon /> Volver
        </button>
      </div>

      <div>
        <div style={styles.sectionTitle}>{varietal}</div>
        <div style={styles.placeText}>
          Todos los {varietal} de la provincia, de todas las bodegas.
        </div>
      </div>

      <div style={styles.chipsRow}>
        <button
          style={activeWinery === "Todos" ? styles.chipActive : styles.chip}
          onClick={() => setActiveWinery("Todos")}
        >
          Todos
        </button>
        {wineries.map((w) => (
          <button
            key={w}
            style={activeWinery === w ? styles.chipActive : styles.chip}
            onClick={() => setActiveWinery(w)}
          >
            {w}
          </button>
        ))}
      </div>

      {shownWines.length ? (
        <div style={styles.shopWineGrid}>
          {shownWines.map((wine) => (
            <ShopWineCard
              key={wine.id}
              wine={wine}
              onClick={() => onOpenWine(wine.id)}
              onAddToCart={onAddToCart}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      ) : (
        <div style={styles.card}>
          <div style={styles.itemTitle}>Sin resultados</div>
          <div style={styles.placeText}>
            Todavía no tenemos cargado ningún {varietal} de la provincia.
          </div>
        </div>
      )}
    </div>
  );
}

function ShopWineCard({
  wine,
  onClick,
  onAddToCart,
  toggleFavorite,
  isFavorite,
}: {
  wine: Wine;
  onClick: () => void;
  onAddToCart: (wine: Wine) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  return (
    <div style={styles.shopWineCard} onClick={onClick}>
      <div
        style={{
          ...styles.shopWineThumb,
          backgroundImage: `url('${wine.image}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <button
          style={styles.shopCardHeartButton}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite({ id: wine.id, name: wine.name, kind: "wine" });
          }}
        >
          <HeartIcon active={isFavorite(wine.id)} />
        </button>
      </div>
      <div style={styles.shopWineName}>{wine.name}</div>
      <div style={styles.shopWineWinery}>{wine.winery}</div>
      <div style={styles.rowBetweenCenter}>
        <span style={styles.shopWinePrice}>$</span>
        <button
          style={styles.addToCartButton}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(wine);
          }}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

function ShopListCard({
  image,
  name,
  description,
  actionLabel,
  onAction,
}: {
  image: string;
  name: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
}) {
  return (
    <div style={styles.card}>
      <div
        style={{
          ...styles.shopListCardImage,
          backgroundImage: `url('${image}')`,
        }}
      />
      <div style={styles.itemTitle}>{name}</div>
      <div style={styles.placeText}>{description}</div>
      <button style={styles.sectionAction} onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  );
}

function ProductDetailScreen({
  name,
  description,
  onBack,
}: {
  name: string;
  description: string;
  onBack: () => void;
}) {
  return (
    <div style={styles.stack22}>
      <button style={styles.backButton} onClick={onBack}>
        <ArrowLeftIcon /> Volver
      </button>

      <div style={styles.card}>
        <div style={styles.detailTitle}>{name}</div>
        <div style={styles.placeText}>{description}</div>
        <div style={{ ...styles.itemSub, marginTop: 12 }}>
          6 botellas · Envío a todo el país · Selección curada
        </div>
        <button style={{ ...styles.primaryButton, width: "100%" }}>
          Comprar — $
        </button>
      </div>
    </div>
  );
}

function CartBar({
  totalQuantity,
  onPress,
}: {
  totalQuantity: number;
  onPress: () => void;
}) {
  return (
    <div style={styles.cartBar} onClick={onPress}>
      <div style={styles.cartBarLeft}>
        <span style={styles.cartBarBadge}>{totalQuantity}</span>
        <ShoppingBagIcon white />
        <span style={styles.cartBarLabel}>Ver carrito →</span>
      </div>
      <span style={styles.cartBarTotal}>$</span>
    </div>
  );
}

function CartScreen({
  cart,
  onUpdateQuantity,
  onRemove,
  onBack,
  onCheckout,
}: {
  cart: CartItem[];
  onUpdateQuantity: (wineId: string, qty: number) => void;
  onRemove: (wineId: string) => void;
  onBack: () => void;
  onCheckout: () => void;
}) {
  return (
    <div style={styles.stack22}>
      <button style={styles.backButton} onClick={onBack}>
        <ArrowLeftIcon /> Volver
      </button>

      {cart.length === 0 ? (
        <div style={styles.card}>
          <div style={styles.itemTitle}>Tu carrito está vacío</div>
          <div style={styles.placeText}>
            Agregá vinos desde la Tienda para verlos acá.
          </div>
        </div>
      ) : (
        <>
          <div style={styles.stack12}>
            {cart.map((item) => (
              <div key={item.wine.id} style={styles.cartItemRow}>
                <div
                  style={{
                    ...styles.wineThumbSmall,
                    backgroundImage: `url('${item.wine.image}')`,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={styles.itemTitle}>{item.wine.name}</div>
                  <div style={styles.itemSub}>{item.wine.winery}</div>
                  <div style={styles.cartQuantityRow}>
                    <button
                      style={styles.cartQtyButton}
                      onClick={() =>
                        onUpdateQuantity(item.wine.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span style={styles.cartQtyValue}>{item.quantity}</span>
                    <button
                      style={styles.cartQtyButton}
                      onClick={() =>
                        onUpdateQuantity(item.wine.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div style={styles.cartItemRight}>
                  <span style={styles.shopWinePrice}>$</span>
                  <button
                    style={styles.cartRemoveButton}
                    onClick={() => onRemove(item.wine.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            style={{ ...styles.primaryButton, width: "100%" }}
            onClick={onCheckout}
          >
            Finalizar compra →
          </button>
        </>
      )}
    </div>
  );
}

function CheckoutScreen({
  cart,
  onBack,
  onConfirm,
}: {
  cart: CartItem[];
  onBack: () => void;
  onConfirm: () => void;
}) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.stack22}>
      <button style={styles.backButton} onClick={onBack}>
        <ArrowLeftIcon /> Volver
      </button>

      <div style={styles.stack12}>
        <input style={styles.inputField} placeholder="Nombre" />
        <input style={styles.inputField} placeholder="Email" />
        <input style={styles.inputField} placeholder="Dirección" />
        <input style={styles.inputField} placeholder="Ciudad y provincia" />
      </div>

      <div style={styles.card}>
        <div style={styles.itemTitle}>Resumen del pedido</div>
        <div style={{ ...styles.rowBetweenCenter, marginTop: 10 }}>
          <span style={styles.placeText}>{totalItems} vinos</span>
          <span style={styles.shopWinePrice}>$</span>
        </div>
      </div>

      <button
        style={{ ...styles.primaryButton, width: "100%" }}
        onClick={onConfirm}
      >
        Confirmar pedido →
      </button>
    </div>
  );
}

function OrderConfirmScreen({ onBackToShop }: { onBackToShop: () => void }) {
  return (
    <div style={styles.orderConfirmPage}>
      <div style={styles.orderConfirmIcon}>
        <CheckIcon white size={40} />
      </div>
      <div style={styles.orderConfirmTitle}>¡Pedido recibido!</div>
      <div style={styles.orderConfirmText}>
        Te contactaremos pronto para coordinar el envío. Los vinos de Río
        Negro ya están en camino.
      </div>
      <button style={styles.orderConfirmButton} onClick={onBackToShop}>
        Volver a la tienda
      </button>
    </div>
  );
}

function Header({
  currentTab,
  onMenuClick,
}: {
  currentTab: TabKey;
  onMenuClick: () => void;
}) {
 const title = currentTab === "profile" ? "Perfil" : "Buscar vinos";

  return (
    <div style={styles.header}>
      <div style={styles.headerTopRow}>
        <button style={styles.menuButton} onClick={onMenuClick}>
          <MenuIcon />
        </button>
      </div>

      <div
        style={{
          ...styles.headerTitleWrap,
          minHeight: 118,
          paddingRight: 0,
        }}
      >
        <div
          style={{
            ...styles.headerTitle,
            whiteSpace: "pre-line",
            fontSize: 36,
            lineHeight: 1.02,
            marginTop: 10,
            maxWidth: 320,
          }}
        >
          {title}
        </div>

        <img
          src="/logo-vinos-rn.png"
          alt="Arte uvas"
          style={{
            ...styles.headerBrandArt,
            width: 285,
            height: 285,
            top: -112,
            right: -84,
            opacity: 0.94,
          }}
        />
      </div>
    </div>
  );
  }

const HOME_PHOTO_URL =
  "https://images.unsplash.com/photo-1763786470689-5ff88c985885?fm=jpg&q=70&w=1400&auto=format&fit=crop";

const DEFAULT_HEADER_GRADIENT =
  "linear-gradient(135deg, rgba(20,20,16,0.55) 0%, rgba(23,48,63,0.5) 55%, rgba(10,58,92,0.72) 100%)";

function PhotoHeader({
  imageUrl,
  title,
  subtitle,
  onMenuClick,
  gradient,
  height = 230,
  backgroundSize = "cover",
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
  onMenuClick: () => void;
  gradient?: string;
  height?: number;
  backgroundSize?: string;
}) {
  return (
    <div
      style={{
        ...styles.homePhoto,
        height,
        backgroundSize,
        backgroundImage: `${gradient || DEFAULT_HEADER_GRADIENT}, url('${imageUrl}')`,
      }}
    >
      <div style={styles.homePhotoTopRow}>
        <button style={styles.glassButton} onClick={onMenuClick}>
          <MenuIcon />
        </button>
        <div style={styles.glassLogoBadge}>
          <img
            src={logoIcon}
            alt="Vinos de Río Negro"
            style={{ width: 28, height: 28, objectFit: "contain" }}
          />
        </div>
      </div>

      <div style={styles.homePhotoTextWrap}>
        <div style={styles.homePhotoTitle} translate="no">
          {title}
        </div>
        <div style={styles.homePhotoSubtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

const RUTA_DEL_VINO_GRADIENT =
  "linear-gradient(to bottom, rgba(10,10,8,0.02) 0%, rgba(10,10,8,0.05) 55%, rgba(10,10,8,0.72) 100%)";

// "agenda" y "shop" NO están acá: esas pantallas tienen sub-navegación propia
// (EventDetailScreen / tabs de Tienda + ProductDetailScreen) y necesitan un
// PhotoHeader distinto según su estado interno, así que cada una renderiza
// el suyo (ver AgendaScreen y ShopScreen).
const PHOTO_HEADER_CONFIG: Record<
  "home" | "map" | "bodegas" | "winelist",
  {
    imageUrl: string;
    title: string;
    subtitle: string;
    gradient?: string;
    height?: number;
    backgroundSize?: string;
  }
> = {
  home: {
    imageUrl: HOME_PHOTO_URL,
    title: "Viví el Vino Rionegrino",
    subtitle: "Descubrí bodegas, vinos y experiencias, de la cordillera al mar.",
  },
  map: {
    imageUrl: rioNegroRiverPhoto,
    title: "Mapa",
    subtitle: "Encontrá vinos, bodegas y experiencias cerca tuyo.",
  },
  bodegas: {
    imageUrl: mapaProvinciaPhoto,
    title: "Ruta del Vino",
    subtitle: "Nuestros vinos, para vos.",
    gradient: RUTA_DEL_VINO_GRADIENT,
    height: 180,
    backgroundSize: "contain",
  },
  winelist: {
    imageUrl: HOME_PHOTO_URL,
    title: "Buscá tu Vino",
    subtitle: "Todos los vinos Rionegrinos, en un solo lugar.",
  },
};

function HomeScreen({
  onOpenWine,
  onOpenWinery,
  onOpenShop,
  onSetTab,
  favorites,
  toggleFavorite,
}: {
  onOpenWine: (id: string) => void;
  onOpenWinery: (id: string) => void;
  onOpenShop: (id: string) => void;
  onSetTab: (tab: TabKey) => void;
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
}) {
  const handleEventClick = (place: string) => {
    if (place === "Bodega Miras") return onOpenWinery("w1");
    if (place === "Bodega Finca Aniello") return onOpenWinery("w2");
    if (place === "Vinoteca Vinopolitan") return onOpenShop("s1");
    onSetTab("agenda");
  };

  return (
    <div style={styles.stack22}>
      <button
        style={{ ...styles.searchBar, marginTop: 0 }}
        onClick={() => onSetTab("search")}
      >
        <SearchIcon />
        <span style={styles.searchBarText}>
          Busca tu vino, bodega o experiencia.
        </span>
      </button>

      <div style={styles.gradientCard}>
        <div style={styles.locationStatusRow}>
          <span style={styles.locationDot} />
          <span style={styles.locationEyebrow}>Ubicación detectada</span>
        </div>
        <div style={styles.locationGreeting}>¡Hola, Viedma!</div>
        <div style={styles.locationBody}>
          Más de {WINES.length} etiquetas de los mejores vinos Rionegrinos
          disponibles ahora mismo
        </div>
        <div style={styles.rowGap10Wrap}>
          <button
            style={styles.primaryButton}
            onClick={() => onSetTab("winelist")}
          >
            Ver disponibles cerca →
          </button>
          <button style={styles.secondarySoftButton}>Cambiar ciudad</button>
        </div>
      </div>

      <SectionTitle
        title="Actividades destacadas"
        action="Ver todo"
        onAction={() => onSetTab("agenda")}
      />

      <div style={styles.horizontalScroller}>
        {EVENTS.map((e) => (
          <div
            key={e.id}
            style={{
              ...styles.card,
              ...styles.horizontalCard,
              cursor: "pointer",
            }}
            onClick={() => handleEventClick(e.place)}
          >
            <div style={styles.rowGap12}>
              <div style={styles.iconBadgeWine}>
                <SparklesIcon white />
              </div>
              <div style={{ flex: 1 }}>
                <div style={styles.itemTitle}>{e.title}</div>
                <div style={styles.itemSub}>
                  {e.place} · {e.city}
                </div>
                <div style={styles.itemMeta}>{e.when}</div>
                <div style={{ marginTop: 10 }}>
                  <Badge kind="benefit">{e.benefit}</Badge>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle
        title="Vinos recomendados"
        action="Ver todos"
        onAction={() => onSetTab("winelist")}
      />

      <div style={styles.horizontalScroller}>
        {WINES.map((wine) => (
          <div key={wine.id} style={styles.horizontalImageCard}>
            <WineVisualRow wine={wine} onClick={() => onOpenWine(wine.id)} />
          </div>
        ))}
      </div>

      <SectionTitle
        title="Bodegas recomendadas"
        action="Ver todas"
        onAction={() => onSetTab("bodegas")}
      />

      <div style={styles.horizontalScroller}>
        {WINERIES.map((w) => (
          <div key={w.id} style={styles.horizontalImageCard}>
            <ImageCard
              title={w.name}
              subtitle={`${w.city} · ${w.distance}`}
              description={w.description}
              feature={w.activity}
              image={w.image}
              badge={
                <Badge kind={w.openNow ? "open" : "closed"}>
                  {w.openNow ? "Abierta" : "Cerrada"}
                </Badge>
              }
              onFavorite={(e) => {
                e.stopPropagation();
                toggleFavorite({
                  id: w.id,
                  name: w.name,
                  city: w.city,
                  kind: "winery",
                });
              }}
              favoriteActive={favorites.some((f) => f.id === w.id)}
              onClick={() => onOpenWinery(w.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function WineListScreen({
  onOpenWine,
  onSetTab,
}: {
  onOpenWine: (id: string) => void;
  onSetTab: (tab: TabKey) => void;
}) {
  const varietals = Array.from(new Set(WINES.map((w) => w.varietal)));
  const [activeVarietal, setActiveVarietal] = useState("Todos");

  const shownWines =
    activeVarietal === "Todos"
      ? WINES
      : WINES.filter((w) => w.varietal === activeVarietal);

  return (
    <div style={styles.stack22}>
      <button
        style={{ ...styles.searchBar, marginTop: 0 }}
        onClick={() => onSetTab("search")}
      >
        <SearchIcon />
        <span style={styles.searchBarText}>
          Busca tu vino, bodega o experiencia.
        </span>
      </button>

      <div style={styles.chipsRow}>
        <button
          style={activeVarietal === "Todos" ? styles.chipActive : styles.chip}
          onClick={() => setActiveVarietal("Todos")}
        >
          Todos
        </button>
        {varietals.map((v) => (
          <button
            key={v}
            style={activeVarietal === v ? styles.chipActive : styles.chip}
            onClick={() => setActiveVarietal(v)}
          >
            {v}
          </button>
        ))}
      </div>

      <div style={styles.stack12}>
        {shownWines.map((wine) => (
          <WineVisualRow
            key={wine.id}
            wine={wine}
            onClick={() => onOpenWine(wine.id)}
          />
        ))}
      </div>
    </div>
  );
}

function SearchScreen({
  search,
  setSearch,
  results,
  onOpenWine,
  onOpenWinery,
  onOpenShop,
}: {
  search: string;
  setSearch: (value: string) => void;
  results: {
    wines: Wine[];
    wineries: Winery[];
    shops: Shop[];
  };
  onOpenWine: (id: string) => void;
  onOpenWinery: (id: string) => void;
  onOpenShop: (id: string) => void;
}) {
  return (
    <div style={styles.stack22}>
      <div style={styles.searchHeroCard}>
        <img src="/logo-vinos-rn.png" alt="Arte uvas" style={styles.searchHeroArt} />
        <div style={styles.searchInputWrapBig}>
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.inputBig}
            placeholder="Busca tu vino, bodega o experiencia"
          />
        </div>
      </div>

      <div style={styles.chipsRow}>
        {["Pinot Noir", "Regalo", "Atlántico", "Bodega Miras"].map((chip) => (
          <button key={chip} style={styles.chip} onClick={() => setSearch(chip)}>
            {chip}
          </button>
        ))}
      </div>

      <Block title="Vinos">
        <div style={styles.stack12}>
          {results.wines.map((wine) => (
            <WineVisualRow
              key={wine.id}
              wine={wine}
              onClick={() => onOpenWine(wine.id)}
            />
          ))}
        </div>
      </Block>

      <Block title="Bodegas">
        <div style={styles.stack12}>
          {results.wineries.map((item) => (
            <ResultRow
              key={item.id}
              title={item.name}
              subtitle={`${item.city} · ${REGION_META[item.region].title}`}
              onClick={() => onOpenWinery(item.id)}
            />
          ))}
        </div>
      </Block>

      <Block title="Dónde comprar">
        <div style={styles.stack12}>
          {results.shops.map((item) => (
            <ResultRow
              key={item.id}
              title={item.name}
              subtitle={`${item.city} · ${item.benefit}`}
              onClick={() => onOpenShop(item.id)}
            />
          ))}
        </div>
      </Block>
    </div>
  );
}

function WineVisualRow({
  wine,
  onClick,
}: {
  wine: Wine;
  onClick: () => void;
}) {
  return (
    <div style={styles.wineVisualRow} onClick={onClick}>
      <div
        style={{
          ...styles.wineVisualImage,
          backgroundImage: `url('${wine.image}')`,
        }}
      />

      <div style={styles.wineVisualBody}>
        <div>
          <div style={styles.wineVisualTitle}>{wine.name}</div>
          <div style={styles.wineVisualSub}>
            {wine.winery} · {wine.varietal}
          </div>
        </div>

        <div style={styles.rowBetweenCenter}>
          <span style={styles.wineVisualTag}>{wine.tag}</span>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}
function ImageCard({
  title,
  subtitle,
  description,
  feature,
  image,
  badge,
  onFavorite,
  favoriteActive,
  onClick,
}: {
  title: string;
  subtitle: string;
  description: string;
  feature: string;
  image: string;
  badge: React.ReactNode;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  favoriteActive: boolean;
  onClick: () => void;
}) {
  return (
    <div style={styles.imageCard} onClick={onClick}>
      <div
        style={{
          ...styles.imageCardTop,
          backgroundImage: `linear-gradient(180deg, rgba(16,10,9,0.10), rgba(24,12,12,0.62)), url('${image}')`,
        }}
      >
        <div style={styles.rowBetweenTop}>
          <div style={styles.rowGap8}>{badge}</div>
          <button style={styles.iconGlassButton} onClick={onFavorite}>
            <HeartIcon active={favoriteActive} />
          </button>
        </div>

        <div>
          <div style={styles.imageCardTitle}>{title}</div>
          <div style={styles.imageCardSub}>{subtitle}</div>
        </div>
      </div>

      <div style={styles.imageCardBody}>
        <div style={styles.placeText}>{description}</div>
        <div style={styles.rowBetweenCenter}>
          <div style={styles.featureText}>{feature}</div>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}
const RUTA_ZONES: Array<{
  label: string;
  region: RegionKey;
  image: string;
  aspectRatio: string;
}> = [
  {
    label: "Cordillera",
    region: "cordillera",
    image: zonaCordilleraPhoto,
    aspectRatio: "5.58 / 1",
  },
  {
    label: "Alto Valle",
    region: "alto-valle",
    image: zonaAltoVallePhoto,
    aspectRatio: "6.64 / 1",
  },
  {
    label: "Valle Medio",
    region: "valle-medio",
    image: zonaValleMedioPhoto,
    aspectRatio: "6.78 / 1",
  },
  {
    label: "Mar",
    region: "mar",
    image: zonaMarPhoto,
    aspectRatio: "6.47 / 1",
  },
  {
    label: "Línea Sur",
    region: "linea-sur",
    image: zonaLineaSurPhoto,
    aspectRatio: "6.61 / 1",
  },
];

function RegionsScreen({
  onOpenWinery,
}: {
  onOpenWinery: (id: string) => void;
}) {
  const [activeRegion, setActiveRegion] = useState<RegionKey | "todas">("todas");

  const regionButtons: Array<{ key: RegionKey; label: string }> = [
    { key: "cordillera", label: "Cordillera" },
    { key: "alto-valle", label: "Alto Valle" },
    { key: "valle-medio", label: "Valle Medio" },
    { key: "mar", label: "Mar" },
    { key: "linea-sur", label: "Línea Sur" },
  ];

  const wineries =
    activeRegion === "todas"
      ? WINERIES
      : WINERIES.filter((w) => w.region === activeRegion);

  const title =
    activeRegion === "todas"
      ? "Bodegas de Río Negro"
      : `Bodegas del ${REGION_META[activeRegion].title}`;

  return (
    <div style={styles.stack22}>
      <div style={styles.zoneGrid}>
        {RUTA_ZONES.map((zone) => (
          <div
            key={zone.label}
            style={{
              ...styles.zoneTile,
              aspectRatio: zone.aspectRatio,
              backgroundImage: `linear-gradient(135deg, rgba(20,20,16,0.5) 0%, rgba(23,48,63,0.4) 55%, rgba(10,58,92,0.65) 100%), url('${zone.image}')`,
              outline:
                activeRegion === zone.region
                  ? `3px solid ${theme.text}`
                  : "3px solid transparent",
            }}
            onClick={() => setActiveRegion(zone.region)}
          >
            <span style={styles.zoneTileLabel}>{zone.label}</span>
          </div>
        ))}
      </div>
      <div style={styles.zoneHint}>Tocá una zona para filtrar sus bodegas</div>

      <SectionTitle title="Explorá por región" />

      <div style={styles.chipsRow}>
        {regionButtons.map((region) => (
          <button
            key={region.key}
            style={activeRegion === region.key ? styles.chipActive : styles.chip}
            onClick={() => setActiveRegion(region.key)}
          >
            {region.label}
          </button>
        ))}
      </div>

      <SectionTitle
        title={title}
        action="Ver todas"
        onAction={() => setActiveRegion("todas")}
      />

      <div style={styles.stack12}>
        {wineries.map((w) => (
          <div
            key={w.id}
            style={styles.resultRow}
            onClick={() => onOpenWinery(w.id)}
          >
            <div
              style={{
                width: 92,
                height: 78,
                borderRadius: 18,
                backgroundImage: `url('${w.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
              }}
            />

            <div style={{ flex: 1 }}>
              <div style={styles.itemTitle}>{w.name}</div>
              <div style={styles.itemSub}>
                {w.city} · {REGION_META[w.region].title}
              </div>
              <div style={styles.placeText}>{w.shortDescription}</div>
            </div>

            <ChevronRightIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

function MapScreen({
  onOpenWine,
  onSetTab,
}: {
  onOpenWine: (id: string) => void;
  onSetTab: (tab: TabKey) => void;
}) {
  const [varietalFilter, setVarietalFilter] = useState("Cerca mío");
  const [search, setSearch] = useState("");

  const mapVarietalChips = [
    "Cerca mío",
    "Pinot Noir",
    "Merlot",
    "Malbec",
    "Blend",
    "Rosé",
    "Chardonnay",
  ];

  const filteredWines = WINES.filter((w) => {
    const matchesVarietal =
      varietalFilter === "Cerca mío" || w.varietal === varietalFilter;
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      [w.name, w.winery, w.varietal].join(" ").toLowerCase().includes(q);
    return matchesVarietal && matchesSearch;
  });

  return (
    <div style={styles.stack22}>
      <div style={{ ...styles.searchBar, marginTop: 0 }}>
        <SearchIcon />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.inputBig}
          placeholder="Busca tu vino, bodega o experiencia."
        />
      </div>

      <div style={styles.compactLocationBar}>
        <span style={styles.itemTitle}>📍 Estás en Viedma</span>
        <button style={styles.sectionAction}>Cambiar</button>
      </div>

      <div style={styles.gradientCard}>
        <div style={styles.locationStatusRow}>
          <span style={styles.locationDot} />
          <span style={styles.locationEyebrow}>Ubicación detectada</span>
        </div>
        <div style={styles.locationGreeting}>Estás en Viedma</div>
        <div style={styles.locationBody}>
          Más de {WINES.length} etiquetas de los mejores vinos Rionegrinos
          cerca tuyo
        </div>
        <div style={styles.rowGap10Wrap}>
          <button
            style={styles.primaryButton}
            onClick={() => onSetTab("winelist")}
          >
            Ver disponibles →
          </button>
          <button style={styles.secondarySoftButton}>Cambiar ciudad</button>
        </div>
      </div>

      <div style={styles.chipsRow}>
        {mapVarietalChips.map((chip) => (
          <button
            key={chip}
            style={varietalFilter === chip ? styles.chipActive : styles.chip}
            onClick={() => setVarietalFilter(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      <SectionTitle title="Vinos cerca tuyo" action="Ver todos" />

      {filteredWines.length ? (
        <div style={styles.stack12}>
          {filteredWines.map((wine) => (
            <MapWineRow
              key={wine.id}
              wine={wine}
              onClick={() => onOpenWine(wine.id)}
            />
          ))}
        </div>
      ) : (
        <div style={styles.card}>
          <div style={styles.itemTitle}>Sin resultados</div>
          <div style={styles.placeText}>
            Todavía no tenemos cargado ningún vino de este varietal.
          </div>
        </div>
      )}
    </div>
  );
}

function WineThumbRow({
  image,
  title,
  subtitle,
  extra,
  onClick,
}: {
  image: string;
  title: string;
  subtitle: string;
  extra?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div style={styles.resultRow} onClick={onClick}>
      <div
        style={{
          ...styles.wineThumbSmall,
          backgroundImage: `url('${image}')`,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={styles.itemTitle}>{title}</div>
        <div style={styles.itemSub}>{subtitle}</div>
        {extra}
      </div>
      <ChevronRightIcon />
    </div>
  );
}

function WineGridCard({
  image,
  title,
  subtitle,
  tag,
  onClick,
}: {
  image: string;
  title: string;
  subtitle: string;
  tag?: string;
  onClick?: () => void;
}) {
  return (
    <div style={styles.wineGridCard} onClick={onClick}>
      <div
        style={{
          ...styles.wineGridCardPhoto,
          backgroundImage: `url('${image}')`,
        }}
      />
      <div style={styles.wineGridCardBody}>
        <div style={styles.wineGridCardTitle}>{title}</div>
        <div style={styles.wineGridCardSubtitle}>{subtitle}</div>
        {tag && (
          <div style={{ marginTop: 6 }}>
            <Badge kind="neutral">{tag}</Badge>
          </div>
        )}
      </div>
    </div>
  );
}

function MapWineRow({ wine, onClick }: { wine: Wine; onClick: () => void }) {
  const shopName = wine.availableAt.includes("Vinoteca Olivas y Sabores")
    ? "Vinoteca Olivas y Sabores"
    : wine.availableAt[0] || "Vinoteca a confirmar";
  return (
    <WineThumbRow
      image={wine.image}
      title={wine.name}
      subtitle={`${wine.winery} · ${wine.varietal}`}
      onClick={onClick}
      extra={
        <div style={styles.mapPinRow}>
          <MapPinIcon />
          <span style={styles.mapPinText}>{shopName}</span>
        </div>
      }
    />
  );
}

const GENERIC_VINOTECA_PHOTO =
  "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?fm=jpg&q=70&w=1400&auto=format&fit=crop";

function eventHeaderImage(place: string): string {
  if (place.includes("Olivas y Sabores")) return oliviasYSaboresPhoto;
  const winery = WINERIES.find((w) => w.name === place);
  if (winery) return winery.image;
  return GENERIC_VINOTECA_PHOTO;
}

const SHOP_HEADER_IMAGES: Record<string, string> = {
  "Vinoteca Olivas y Sabores": oliviasYSaboresPhoto,
  "Vinoteca Vinopolitan": vinopolitanPhoto,
  "Vinoteca Piquillín": piquillinPhoto,
  "Vinoteca Río Tinto": rioTintoPhoto,
};

function shopHeaderImage(name: string): string {
  return SHOP_HEADER_IMAGES[name] || GENERIC_VINOTECA_PHOTO;
}

function AgendaScreen({ onMenuClick }: { onMenuClick: () => void }) {
  const [filter, setFilter] = useState("Hoy");
  const [openEvent, setOpenEvent] = useState<EventItem | null>(null);
  const nextEvent = EVENTS[0];

  if (openEvent) {
    return (
      <>
        <PhotoHeader
          imageUrl={eventHeaderImage(openEvent.place)}
          title={openEvent.title}
          subtitle={`${openEvent.place} · ${openEvent.city}`}
          onMenuClick={onMenuClick}
        />
        <div style={styles.sheetSurface}>
          <EventDetailScreen
            event={openEvent}
            onBack={() => setOpenEvent(null)}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <PhotoHeader
        imageUrl={agendaBrindisPhoto}
        title="Agenda"
        subtitle="Eventos y degustaciones para vivir el vino en tu ciudad."
        onMenuClick={onMenuClick}
      />
      <div style={styles.sheetSurface}>
        <div style={styles.stack22}>
          <div style={styles.gradientCard}>
            <div style={styles.locationStatusRow}>
              <span style={styles.locationDot} />
              <span style={styles.locationEyebrow}>Hoy en Río Negro</span>
            </div>
            <div style={styles.locationGreeting}>
              {EVENTS.length} eventos cerca tuyo
            </div>
            {nextEvent && (
              <div style={styles.locationBody}>
                {nextEvent.title} · {nextEvent.place} · {nextEvent.when}
              </div>
            )}
          </div>

          <div style={styles.rowGap10Wrap}>
            {["Ahora", "Hoy", "Este finde"].map((x) => (
              <button
                key={x}
                style={filter === x ? styles.chipActive : styles.chip}
                onClick={() => setFilter(x)}
              >
                {x}
              </button>
            ))}
          </div>

          {EVENTS.map((e) => (
            <div key={e.id} style={styles.card}>
              <div style={styles.rowBetweenTop}>
                <div>
                  <div style={styles.itemTitle}>{e.title}</div>
                  <div style={styles.itemSub}>
                    {e.organizer ? `${e.organizer} · ` : ""}
                    {e.place} · {e.city}
                  </div>
                </div>
                <Badge kind="neutral">{filter}</Badge>
              </div>

              <div style={styles.grid2}>
                <InfoBox label="Horario" value={e.when} />
                <InfoBox label="Beneficio" value={e.benefit} />
              </div>

              <button
                style={styles.primaryButton}
                onClick={() => setOpenEvent(e)}
              >
                Ver actividad
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function EventDetailScreen({
  event,
  onBack,
}: {
  event: EventItem;
  onBack: () => void;
}) {
  return (
    <div style={styles.stack22}>
      <button style={styles.backButton} onClick={onBack}>
        <ArrowLeftIcon /> Volver
      </button>

      <div style={styles.card}>
        <div style={styles.detailTitle}>{event.title}</div>
        {event.organizer && (
          <div style={{ ...styles.itemSub, marginTop: 6 }}>
            Organiza: {event.organizer}
          </div>
        )}
        <div style={styles.itemSub}>
          {event.place} · {event.city}
        </div>

        <div style={styles.grid2}>
          <InfoBox label="Horario" value={event.when} />
          <InfoBox label="Beneficio" value={event.benefit} />
        </div>

        <div style={styles.placeText}>
          Una experiencia única para descubrir los mejores vinos de Río Negro.
        </div>

        <button style={{ ...styles.primaryButton, width: "100%" }}>
          Quiero ir →
        </button>
      </div>
    </div>
  );
}

function ProfileScreen({ favorites }: { favorites: FavoriteItem[] }) {
  return (
    <div style={styles.stack22}>
      <div style={styles.profileHeroCard}>
        <img src="/logo-vinos-rn.png" alt="Arte uvas" style={styles.profileArtImage} />
        <div>
          <div style={styles.membershipEyebrow}>Membresía activa</div>
          <div style={styles.membershipTitle}>Tus Beneficios</div>
          <div style={styles.membershipText}>
            Descuentos en vinotecas, actividades y bodegas adheridas.
          </div>
        </div>

        <div style={styles.savingsBigCard}>
          <div style={styles.savingsBigLabel}>Ahorraste este mes</div>
          <div style={styles.savingsBigValue}>$12.400</div>
          <div style={styles.savingsBigSub}>6 beneficios usados</div>
        </div>
      </div>

      {favorites.length > 0 && (
        <Block title="Tus guardados">
          <div style={styles.stack12}>
            {favorites.map((f) => (
              <div key={f.id} style={styles.card}>
                <div style={styles.itemTitle}>{f.name}</div>
                <div style={styles.itemSub}>
                  {f.city ? `${f.city} · ` : ""}
                  {f.kind === "wine"
                    ? "Vino"
                    : f.kind === "winery"
                    ? "Bodega"
                    : "Vinoteca"}
                </div>
              </div>
            ))}
          </div>
        </Block>
      )}

      <Block title="Beneficios disponibles">
        <div style={styles.stack12}>
          {[
            "10% OFF en Vinoteca Vinopolitan",
            "15% OFF en degustaciones en Bodega Miras",
            "Beneficios especiales en bodegas adheridas",
          ].map((b) => (
            <div key={b} style={styles.card}>
              <div style={styles.rowGap12}>
                <div style={styles.iconBadgeWine}>
                  <CheckIcon white />
                </div>
                <div style={styles.itemTitle}>{b}</div>
              </div>
            </div>
          ))}
        </div>
      </Block>
    </div>
  );
}

function WineDetail({
  wine,
  onBack,
  onOpenShop,
  onOpenWine,
  toggleFavorite,
  isFavorite,
  fromShop,
  onAddToCart,
}: {
  wine: Wine;
  onBack: () => void;
  onOpenShop: (id: string) => void;
  onOpenWine: (name: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  fromShop?: boolean;
  onAddToCart: (wine: Wine) => void;
}) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(wine);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1000);
  };

  const similar = WINES.filter(
    (w) =>
      w.id !== wine.id &&
      (w.varietal === wine.varietal || w.winery === wine.winery)
  ).slice(0, 2);

  return (
    <div style={styles.stack22}>
      <div style={styles.rowBetweenCenter}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeftIcon /> Volver
        </button>
        <button
          style={styles.secondaryButton}
          onClick={() =>
            toggleFavorite({
              id: wine.id,
              name: wine.name,
              kind: "wine",
            })
          }
        >
          <HeartIcon active={isFavorite(wine.id)} />{" "}
          {isFavorite(wine.id) ? "Guardado" : "Guardar"}
        </button>
      </div>

      <div style={styles.wineHeroCard}>
        <div
          style={{
            ...styles.wineDetailImage,
            backgroundImage: `url('${wine.image}')`,
          }}
        />
        <div style={styles.wineInfoArea}>
          <Badge kind="neutral">{wine.tag}</Badge>
          <div style={styles.detailTitle}>{wine.name}</div>
          <div style={styles.itemSub}>
            {wine.winery} · {wine.varietal}
          </div>

          <div style={styles.grid3}>
            <InfoBox label="Varietal" value={wine.varietal} />
            <InfoBox label="Estilo" value={wine.style} />
            <InfoBox label="Origen" value="Río Negro" />
          </div>

          <div style={styles.placeText}>{wine.description || wine.note}</div>
        </div>
      </div>

      {fromShop ? (
        <div style={styles.wineCartCard}>
          <div style={styles.wineCartCardLabel}>Disponible en nuestra Tienda</div>
          <button style={styles.wineCartCardButton} onClick={handleAddToCart}>
            {justAdded ? "✓ Agregado" : "Agregar al carrito"}
          </button>
        </div>
      ) : (
        <Block title="Disponible en">
          <div style={styles.stack12}>
            {wine.availableAt.map((name) => {
              const found = SHOPS.find((s) => s.name === name);
              if (!found) return null;
              return (
                <ResultRow
                  key={name}
                  title={name}
                  subtitle={`${found.city} · ${found.benefit}`}
                  onClick={() => onOpenShop(found.id)}
                />
              );
            })}
          </div>
        </Block>
      )}

      <Block title="También te pueden gustar">
        <div style={styles.wineCardGrid}>
          {similar.map((w) => (
            <WineGridCard
              key={w.id}
              image={w.image}
              title={w.name}
              subtitle={w.varietal}
              tag={w.tag}
              onClick={() => onOpenWine(w.name)}
            />
          ))}
        </div>
      </Block>
    </div>
  );
}

function WineryDetail({
  winery,
  onOpenWine,
  onOpenShop,
  toggleFavorite,
  isFavorite,
}: {
  winery: Winery;
  onOpenWine: (name: string) => void;
  onOpenShop: (name: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  const varietals = Array.from(
    new Set(
      winery.wines
        .map((w) => WINES.find((x) => x.name === w)?.varietal)
        .filter((v): v is string => Boolean(v))
    )
  );

  const contactInfo = (
    [
      { label: "Dirección", value: winery.address },
      { label: "Horario / visitas", value: winery.visitNotes || winery.hours },
      { label: "WhatsApp", value: winery.whatsapp },
      { label: "Email", value: winery.email },
      { label: "Instagram", value: winery.instagram },
      { label: "Sitio web", value: winery.website },
    ] as Array<{ label: string; value?: string }>
  ).filter((item): item is { label: string; value: string } => Boolean(item.value));

  return (
    <div style={styles.stack22}>
      <div style={styles.gradientCard}>
        <div style={styles.rowBetweenCenter}>
          <Badge kind={winery.openNow ? "open" : "closed"}>
            {winery.openNow ? "Abierta ahora" : "Cerrada ahora"}
          </Badge>
          <button
            style={styles.iconGlassButton}
            onClick={() =>
              toggleFavorite({
                id: winery.id,
                name: winery.name,
                city: winery.city,
                kind: "winery",
              })
            }
          >
            <HeartIcon active={isFavorite(winery.id)} />
          </button>
        </div>

        <div style={styles.locationGreeting}>{winery.name}</div>
        <div style={styles.locationEyebrow}>
          {winery.city} · {REGION_META[winery.region].title}
        </div>
        <div style={styles.locationBody}>{winery.description}</div>

        {winery.benefit && (
          <div style={{ marginTop: 10 }}>
            <Badge kind="benefit">🎁 {winery.benefit}</Badge>
          </div>
        )}

        <div style={styles.rowGap10Wrap}>
          <button style={{ ...styles.secondarySoftButton, flex: 1 }}>
            Cómo llegar
          </button>
          <button style={{ ...styles.primaryButton, flex: 2 }}>
            Ver vinos →
          </button>
        </div>
      </div>

      {contactInfo.length > 0 && (
        <Block title="Contacto y visitas">
          <div style={styles.grid2}>
            {contactInfo.map((item) => (
              <InfoBox key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </Block>
      )}

      {varietals.length > 0 && (
        <Block title="Varietales">
          <div style={styles.chipsRow}>
            {varietals.map((v) => (
              <span key={v} style={styles.chip}>
                {v}
              </span>
            ))}
          </div>
        </Block>
      )}

      <SectionTitle title="Vinos destacados" action="Ver todos" />
      <div style={styles.wineCardGrid}>
        {winery.wines.map((w) => {
          const wineData = WINES.find((x) => x.name === w);
          return (
            <WineGridCard
              key={w}
              image={wineData?.image || ""}
              title={w}
              subtitle={wineData?.varietal || "Vino"}
              onClick={() => onOpenWine(w)}
            />
          );
        })}
      </div>

      <Block title="Dónde conseguir sus vinos">
        <div style={styles.stack12}>
          {winery.shops.map((s) => {
            const shop = SHOPS.find((x) => x.name === s);
            return (
              <ResultRow
                key={s}
                title={s}
                subtitle={
                  shop ? `${shop.address}, ${shop.city}` : "Dirección a confirmar"
                }
                onClick={() => onOpenShop(s)}
              />
            );
          })}
        </div>
      </Block>
    </div>
  );
}

function ShopDetail({
  shop,
  onBack,
  onOpenWine,
  toggleFavorite,
  isFavorite,
}: {
  shop: Shop;
  onBack: () => void;
  onOpenWine: (name: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  return (
    <div style={styles.stack22}>
      <div style={styles.rowBetweenCenter}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeftIcon /> Volver
        </button>
        <button
          style={styles.secondaryButton}
          onClick={() =>
            toggleFavorite({
              id: shop.id,
              name: shop.name,
              city: shop.city,
              kind: "shop",
            })
          }
        >
          <HeartIcon active={isFavorite(shop.id)} />{" "}
          {isFavorite(shop.id) ? "Guardado" : "Guardar"}
        </button>
      </div>

      <div style={styles.detailImageCard}>
        <div
          style={{
            ...styles.shopLogoPanel,
            backgroundImage: `url('${shopHeaderImage(shop.name)}')`,
          }}
        />

        <div style={styles.imageCardBody}>
          <div style={styles.sectionTitle}>{shop.name}</div>
          <div style={styles.itemSub}>
            {shop.city} · {shop.distance}
          </div>

          <div style={{ ...styles.rowGap8, marginTop: 10 }}>
            <Badge kind={shop.openNow ? "open" : "closed"}>
              {shop.openNow ? "Abierta ahora" : "Cerrada ahora"}
            </Badge>
            <Badge kind="benefit">{shop.benefit}</Badge>
          </div>

          <div style={styles.placeText}>{shop.description}</div>

          <div style={styles.grid2}>
            <InfoBox label="Horario" value={shop.hours} />
            <InfoBox label="Beneficio" value={shop.benefit} />
          </div> 

          <div style={styles.rowGap10Wrap}>
            <button style={{ ...styles.primaryButton, flex: 1 }}>
              Cómo llegar
            </button>
            <button style={{ ...styles.secondaryButton, flex: 1 }}>
              Usar beneficio
            </button>
          </div>
        </div>
      </div>

      <Block title="Vinos disponibles">
        <div style={styles.wineCardGrid}>
          {shop.wines.map((w) => {
            const wineData = WINES.find((x) => x.name === w);
            return (
              <WineGridCard
                key={w}
                image={wineData?.image || ""}
                title={w}
                subtitle={wineData?.varietal || ""}
                onClick={() => onOpenWine(w)}
              />
            );
          })}
        </div>
      </Block>
    </div>
  );
}

function BottomNav({
  tab,
  setTab,
}: {
  tab: TabKey;
  setTab: (tab: TabKey) => void;
}) {
  const items: Array<{ key: TabKey; label: string; icon: React.ReactNode }> = [
    { key: "home", label: "Inicio", icon: <HomeIcon /> },
    { key: "map", label: "Mapa", icon: <MapIcon /> },
    { key: "agenda", label: "Agenda", icon: <CalendarIcon /> },
    { key: "bodegas", label: "Ruta del Vino", icon: <WineIcon /> },
    { key: "shop", label: "Tienda", icon: <ShoppingBagIcon /> },
  ];

  return (
    <div style={styles.bottomNavWrap}>
      <div style={styles.bottomNav}>
        {items.map((item) => {
          const active = tab === item.key;
          return (
            <button
              key={item.key}
              style={active ? styles.navItemActive : styles.navItem}
              onClick={() => setTab(item.key)}
            >
              {item.icon}
              <span style={styles.navLabel} translate="no">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={styles.stack12}>
      <SectionTitle title={title} />
      {children}
    </div>
  );
}

function SectionTitle({
  title,
  action,
  onAction,
}: {
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div style={styles.rowBetweenCenter}>
      <div style={styles.sectionTitle}>{title}</div>
      {action ? (
        <button style={styles.sectionAction} onClick={onAction}>
          {action}
        </button>
      ) : null}
    </div>
  );
}

function ResultRow({
  title,
  subtitle,
  tag,
  onClick,
}: {
  title: string;
  subtitle: string;
  tag?: string;
  onClick?: () => void;
}) {
  return (
    <div style={styles.resultRow} onClick={onClick}>
      <div style={{ flex: 1 }}>
        <div style={styles.itemTitle}>{title}</div>
        <div style={styles.itemSub}>{subtitle}</div>
        {tag ? (
          <div style={{ marginTop: 8 }}>
            <Badge kind="neutral">{tag}</Badge>
          </div>
        ) : null}
      </div>
      <ChevronRightIcon />
    </div>
  );
}

function Badge({
  children,
  kind,
}: {
  children: React.ReactNode;
  kind: "neutral" | "open" | "closed" | "benefit";
}) {
  const style =
    kind === "open"
      ? styles.badgeOpen
      : kind === "closed"
      ? styles.badgeClosed
      : kind === "benefit"
      ? styles.badgeBenefit
      : styles.badgeNeutral;

  return <span style={style}>{children}</span>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.metricBox}>
      <div style={styles.metricLabel}>{label}</div>
      <div style={styles.metricValue}>{value}</div>
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.infoBox}>
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value}</div>
    </div>
  );
}

function svgBase(path: React.ReactNode, props?: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {path}
    </svg>
  );
}

function MenuIcon() {
  return svgBase(
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  );
}

function HomeIcon() {
  return svgBase(
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </>
  );
}

function MapIcon() {
  return svgBase(
    <>
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </>
  );
}

function SearchIcon() {
  return svgBase(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  );
}

function CalendarIcon({ white = false }: { white?: boolean }) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </>
      )}
    </span>
  );
}

function WineIcon({ white = false }: { white?: boolean }) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <path d="M7 3h10c0 5-2 8-5 8s-5-3-5-8z" />
          <path d="M12 11v8" />
          <path d="M8 21h8" />
        </>
      )}
    </span>
  );
}

function SparklesIcon({ white = false }: { white?: boolean }) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
        </>
      )}
    </span>
  );
}

function CheckIcon({
  white = false,
  size,
}: {
  white?: boolean;
  size?: number;
}) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <path d="M5 12l4 4 10-10" />
        </>,
        size ? { width: size, height: size } : undefined
      )}
    </span>
  );
}

function TrashIcon() {
  return svgBase(
    <>
      <path d="M4 7h16" />
      <path d="M10 11v6M14 11v6" />
      <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </>
  );
}

function ArrowLeftIcon() {
  return svgBase(
    <>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </>
  );
}

function ChevronRightIcon() {
  return svgBase(
    <>
      <path d="m9 18 6-6-6-6" />
    </>
  );
}

function HeartIcon({ active }: { active: boolean }) {
  return svgBase(
    <>
      <path
        fill={active ? theme.text : "transparent"}
        d="M12 20s-7-4.4-9-8.7C1.4 8 3.2 5 6.6 5c2 0 3.1 1 5.4 3.4C14.3 6 15.4 5 17.4 5 20.8 5 22.6 8 21 11.3 19 15.6 12 20 12 20z"
      />
      <path d="M12 20s-7-4.4-9-8.7C1.4 8 3.2 5 6.6 5c2 0 3.1 1 5.4 3.4C14.3 6 15.4 5 17.4 5 20.8 5 22.6 8 21 11.3 19 15.6 12 20 12 20z" />
    </>
  );
}

function FunnelIcon() {
  return svgBase(
    <>
      <path d="M4 5h16l-6 7.5V19l-4 2v-8.5z" />
    </>
  );
}

function PlusIcon() {
  return svgBase(
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>,
    { width: 16, height: 16 }
  );
}

function MapPinIcon({ color }: { color?: string }) {
  return svgBase(
    <>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>,
    { width: 16, height: 16, stroke: color || theme.river }
  );
}

function ShoppingBagIcon({ white = false }: { white?: boolean }) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </>
      )}
    </span>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: `linear-gradient(180deg, ${theme.bgTop} 0%, ${theme.bgBottom} 100%)`,
    display: "flex",
    justifyContent: "center",
    padding: 18,
    position: "relative",
    overflow: "hidden",
  },
  backgroundBlurOne: {
    position: "absolute",
    width: 340,
    height: 340,
    borderRadius: "50%",
    background: "rgba(63,142,78,0.10)",
    top: -90,
    left: -90,
    filter: "blur(30px)",
  },
  backgroundBlurTwo: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: "50%",
    background: "rgba(21,119,200,0.10)",
    right: -70,
    bottom: -60,
    filter: "blur(30px)",
  },
  backgroundDots: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(63,142,78,0.12) 1px, transparent 1px)",
    backgroundSize: "22px 22px",
    opacity: 0.25,
    pointerEvents: "none",
  },
  phone: {
    width: "100%",
    maxWidth: 410,
    height: "100dvh",
    maxHeight: 860,
    background: "rgba(255,253,251,0.95)",
    border: `1px solid ${theme.line}`,
    borderRadius: 38,
    overflow: "hidden",
    boxShadow: "0 24px 80px rgba(61, 23, 35, 0.12)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backdropFilter: "blur(10px)",
  },
  header: {
    padding: "16px 18px 18px 18px",
    paddingTop: 28,
    background: "rgba(255,253,251,0.94)",
    borderBottom: `1px dashed ${theme.line}`,
    position: "relative",
    overflow: "hidden",
    zIndex: 4,
  },
  headerTopRow: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    border: `1px solid ${theme.line}`,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: theme.text,
    boxShadow: "0 10px 24px rgba(61, 23, 35, 0.06)",
    position: "relative",
    zIndex: 3,
  },
  menuButtonActive: {
    width: 44,
    height: 44,
    borderRadius: 14,
    border: `1px solid ${theme.text}`,
    background: theme.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    boxShadow: "0 10px 24px rgba(61, 23, 35, 0.06)",
    position: "relative",
    zIndex: 3,
  },
  shopListCardImage: {
    height: 140,
    borderRadius: 16,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: 12,
  },
  menuDropdown: {
    position: "absolute",
    top: 78,
    left: 18,
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 22,
    boxShadow: "0 16px 34px rgba(61, 23, 35, 0.12)",
    padding: 10,
    display: "grid",
    gap: 6,
    zIndex: 10,
  },
  menuItem: {
    border: 0,
    background: "transparent",
    padding: "10px 12px",
    borderRadius: 12,
    textAlign: "left",
    cursor: "pointer",
    color: theme.text,
    fontWeight: 700,
  },
  headerTitleWrap: {
    position: "relative",
    marginBottom: 18,
    overflow: "visible",
  },
  headerBrandArt: {
    display: "none",
    position: "absolute",
    objectFit: "contain",
    pointerEvents: "none",
    transform: "rotate(4deg)",
    zIndex: 1,
  },
  headerTitle: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -1.2,
    position: "relative",
    zIndex: 2,
    textAlign: "left",
  },
  searchBar: {
    marginTop: -33 ,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 16,
    borderRadius: 20,
    border: `1px solid ${theme.line}`,
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
    cursor: "pointer",
    position: "relative",
    zIndex: 2,
  },
  searchBarText: {
    color: theme.subtext,
    fontSize: 14,
  },
  content: {
    flex: 1,
    overflowY: "auto",
    padding: "18px 16px 16px 16px",
  },
  stack22: {
    display: "grid",
    gap: 22,
  },
  stack12: {
    display: "grid",
    gap: 12,
  },
  horizontalScroller: {
    display: "flex",
    gap: 14,
    overflowX: "auto",
    paddingBottom: 10,
    scrollSnapType: "x mandatory",
  },
  horizontalCard: {
    minWidth: 245,
    scrollSnapAlign: "start",
  },
  horizontalImageCard: {
    minWidth: 285,
    scrollSnapAlign: "start",
  },
  varietalBannerTile: {
    width: 100,
    height: 76,
    borderRadius: 16,
    border: 0,
    display: "flex",
    alignItems: "flex-end",
    padding: 10,
    color: "#fff",
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    flexShrink: 0,
    textAlign: "left",
  },
  shopWineGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  shopWineCard: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 20,
    padding: 12,
    cursor: "pointer",
  },
  shopWineThumb: {
    position: "relative",
    height: 110,
    borderRadius: 14,
    background: theme.cream,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  shopCardHeartButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: 0,
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
  },
  shopWineName: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    fontSize: 15,
    color: theme.text,
    lineHeight: 1.2,
  },
  shopWineWinery: {
    marginTop: 4,
    fontSize: 13,
    color: theme.subtext,
  },
  shopWinePrice: {
    marginTop: 10,
    fontWeight: 800,
    fontSize: 14,
    color: theme.text,
  },
  addToCartButton: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: 0,
    background: theme.wine,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: 10,
  },
  cartBar: {
    margin: "0 14px 10px 14px",
    background: theme.text,
    borderRadius: 20,
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 14px 30px rgba(20,20,16,0.25)",
    position: "relative",
    zIndex: 6,
    cursor: "pointer",
  },
  cartBarLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  cartBarBadge: {
    background: theme.wine,
    color: "#fff",
    borderRadius: 999,
    minWidth: 20,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 800,
    padding: "0 6px",
  },
  cartBarLabel: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 14,
  },
  cartBarTotal: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 15,
  },
  cartItemRow: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 22,
    padding: 14,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  cartQuantityRow: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  cartQtyButton: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: `1px solid ${theme.line}`,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: 700,
    color: theme.text,
  },
  cartQtyValue: {
    fontWeight: 700,
    color: theme.text,
    minWidth: 18,
    textAlign: "center",
  },
  cartItemRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 8,
  },
  cartRemoveButton: {
    border: 0,
    background: "transparent",
    cursor: "pointer",
    color: theme.subtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
    padding: 14,
    borderRadius: 16,
    border: `1px solid ${theme.line}`,
    background: "#fff",
    fontSize: 14,
    color: theme.text,
    outline: "none",
  },
  orderConfirmPage: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 32,
    background: `linear-gradient(135deg, ${theme.text} 0%, ${theme.river} 100%)`,
  },
  orderConfirmIcon: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.16)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  orderConfirmTitle: {
    fontFamily: '"Lora", serif',
    color: "#fff",
    fontSize: 28,
    fontWeight: 700,
  },
  orderConfirmText: {
    marginTop: 12,
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    lineHeight: 1.5,
    maxWidth: 280,
  },
  orderConfirmButton: {
    marginTop: 24,
    background: "#fff",
    color: theme.text,
    border: 0,
    borderRadius: 999,
    padding: "14px 22px",
    fontWeight: 700,
    cursor: "pointer",
  },
  rowGap12: {
    display: "flex",
    gap: 12,
  },
  rowGap10: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  rowGap10Wrap: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  rowGap8: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  rowBetweenTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  rowBetweenCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  chipsRow: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    paddingBottom: 2,
  },
  chip: {
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 700,
    border: `1px solid ${theme.line}`,
    background: theme.paper,
    color: theme.subtext,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  chipActive: {
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 700,
    border: `1px solid ${theme.text}`,
    background: theme.text,
    color: "#fff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  zoneGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  zoneTile: {
    width: "100%",
    borderRadius: 16,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "0 0 6px 10px",
    cursor: "pointer",
  },
  zoneTileLabel: {
    color: "#fff",
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
    fontSize: 13,
    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
  },
  zoneHint: {
    fontSize: 13,
    color: theme.subtext,
    textAlign: "center",
  },
  homePhoto: {
    position: "relative",
    width: "100%",
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "18px 18px 34px 18px",
    zIndex: 1,
  },
  homePhotoTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  glassButton: {
    width: 44,
    height: 44,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.35)",
    background: "rgba(255,255,255,0.22)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
  },
  glassLogoBadge: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    padding: 2,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
  },
  homePhotoTextWrap: {
    position: "relative",
    zIndex: 2,
  },
  homePhotoTitle: {
    fontFamily: '"Lora", serif',
    color: "#fff",
    fontSize: 30,
    lineHeight: 1.05,
    fontWeight: 700,
    letterSpacing: -0.6,
    textShadow: "0 2px 10px rgba(0,0,0,0.35)",
  },
  homePhotoSubtitle: {
    marginTop: 8,
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    lineHeight: 1.5,
    maxWidth: 300,
    textShadow: "0 1px 6px rgba(0,0,0,0.3)",
  },
  sheetSurface: {
    flex: 1,
    overflowY: "auto",
    background: theme.cream,
    borderRadius: "24px 24px 0 0",
    marginTop: -20,
    padding: "22px 16px 16px 16px",
    position: "relative",
    zIndex: 5,
    boxShadow: "0 -14px 24px rgba(20,20,16,0.08)",
  },
  gradientCard: {
    borderRadius: 24,
    padding: 20,
    color: "#fff",
    background: `linear-gradient(135deg, ${theme.text} 0%, #17303f 55%, ${theme.river} 100%)`,
    boxShadow: "0 20px 40px rgba(10, 20, 30, 0.18)",
  },
  locationStatusRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  locationDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: theme.valley,
    flexShrink: 0,
  },
  locationEyebrow: {
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.8)",
  },
  locationGreeting: {
    marginTop: 10,
    fontFamily: '"Lora", serif',
    fontSize: 23,
    fontWeight: 600,
  },
  locationBody: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 280,
  },
  compactLocationBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 18,
    padding: "12px 16px",
  },
  mapPinRow: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  mapPinText: {
    fontSize: 13,
    color: theme.subtext,
  },
  primaryButton: {
    marginTop: 14,
    borderRadius: 999,
    padding: "12px 18px",
    border: `1px solid ${theme.wineDark}`,
    background: theme.wineDark,
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  secondaryButton: {
    marginTop: 14,
    borderRadius: 999,
    padding: "12px 18px",
    border: `1px solid ${theme.line}`,
    background: theme.paper,
    color: theme.text,
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  secondarySoftButton: {
    marginTop: 14,
    borderRadius: 999,
    padding: "12px 18px",
    border: "1px solid rgba(255,255,255,0.24)",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  backButton: {
    borderRadius: 999,
    padding: "12px 18px",
    border: `1px solid ${theme.line}`,
    background: theme.paper,
    color: theme.text,
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 10px 24px rgba(61, 23, 35, 0.06)",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 10,
  },
  card: {
    background: `linear-gradient(135deg, ${theme.card}, #f9f3ee)`,
    border: `1px solid ${theme.line}`,
    borderRadius: 28,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    padding: 16,
  },
  sectionTitle: {
    fontFamily: '"Lora", serif',
    fontSize: 23,
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -0.4,
  },
  sectionAction: {
    border: 0,
    background: "transparent",
    color: theme.river,
    fontWeight: 700,
    cursor: "pointer",
  },
  itemTitle: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    color: theme.text,
    fontSize: 15,
  },
  itemSub: {
    marginTop: 4,
    color: theme.subtext,
    fontSize: 14,
  },
  itemMeta: {
    marginTop: 10,
    color: theme.text,
    fontSize: 14,
  },
  placeText: {
    marginTop: 12,
    color: "#777777",
    lineHeight: 1.6,
    fontSize: 14,
  },
  featureText: {
    color: theme.text,
    fontWeight: 700,
    fontSize: 13,
    marginTop: 14,
  },
  badgeNeutral: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: theme.cream,
    color: "#777777",
    border: `1px solid ${theme.line}`,
  },
  badgeOpen: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#EEF4EA",
    color: theme.valley,
    border: "1px solid #D7E7D9",
  },
  badgeClosed: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#F1EEEA",
    color: theme.text,
    border: `1px solid ${theme.line}`,
  },
  badgeBenefit: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#F5E9EC",
    color: theme.text,
    border: "1px solid #E6DED5",
  },
  imageCard: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    cursor: "pointer",
  },
  imageCardTop: {
    height: 120,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
  },
  regionCardTop: {
    height: 196,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
    position: "relative",
    overflow: "hidden",
  },
  regionArtImage: {
    position: "absolute",
    top: 6,
    right: -6,
    width: 150,
    opacity: 0.16,
    pointerEvents: "none",
  },
  imageCardBody: {
    padding: 16,
  },
  imageCardTitle: {
    fontFamily: '"Lora", serif',
    fontSize: 26,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: -0.8,
    lineHeight: 1.04,
  },
  imageCardSub: {
    marginTop: 4,
    color: "rgba(255,255,255,0.88)",
    fontSize: 14,
  },
  iconGlassButton: {
    width: 42,
    height: 42,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.16)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
  },
  iconBadgeWine: {
    width: 42,
    height: 42,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.wine,
    color: "#fff",
  },
  regionPill: {
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 999,
    padding: "7px 12px",
    fontSize: 12,
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.18)",
    color: "#fff",
    backdropFilter: "blur(4px)",
  },
  searchHeroCard: {
    position: "relative",
    background: `linear-gradient(135deg, ${theme.paper}, #f8f2ed)`,
    border: `1px solid ${theme.line}`,
    borderRadius: 30,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    padding: 18,
    overflow: "hidden",
  },
  searchHeroArt: {
    display: "none",
    position: "absolute",
    top: -8,
    right: -10,
    width: 170,
    opacity: 0.14,
    pointerEvents: "none",
  },
  searchInputWrapBig: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 18, 
    borderRadius: 999,
    border: `1px solid ${theme.line}`,
    background: "#fff",
    boxShadow: "0 8px 24px rgba(40,24,22,0.04)",
    position: "relative",
    zIndex: 2,
  },
  inputBig: {
    border: 0,
    outline: "none",
    width: "100%",
    fontSize: 16,
    background: "transparent",
    color: theme.text,
  },
  wineVisualRow: {
  background: theme.paper,
  border: `1px solid ${theme.line}`,
  borderRadius: 28,
  boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  minHeight: 340,
},

wineVisualImage: {
  width: "120",
  height: 160,
  borderRadius: 0,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flexShrink: 0,
},

wineVisualBody: {
  padding: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 16,
  flex: 1,
},

wineVisualTitle: {
  fontFamily: '"Lora", serif',
  fontWeight: 700,
  color: theme.text,
  fontSize: 17,
  lineHeight: 1.2,
},

wineVisualSub: {
  marginTop: 6,
  color: theme.subtext,
  fontSize: 14,
  lineHeight: 1.45,
},

wineVisualTag: {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 12,
  fontWeight: 700,
  background: theme.cream,
  color: "#777777",
  border: `1px solid ${theme.line}`,
},
  metricBox: {
    background: "#FAF8F5",
    border: `1px solid ${theme.line}`,
    borderRadius: 18,
    padding: 12,
  },
  metricLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: theme.subtext,
    fontWeight: 700,
  },
  metricValue: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 800,
    color: theme.text,
  },
  detailTitle: {
    fontFamily: '"Lora", serif',
    fontSize: 31,
    lineHeight: 1.02,
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -0.9,
    marginTop: 10,
  },
  wineHeroCard: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 28,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    overflow: "hidden",
  },
  wineCartCard: {
    background: theme.wine,
    borderRadius: 24,
    padding: 20,
    textAlign: "center",
  },
  wineCartCardLabel: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 14,
  },
  wineCartCardButton: {
    width: "100%",
    background: "#fff",
    color: theme.wine,
    border: 0,
    borderRadius: 999,
    padding: "14px 18px",
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
  },
  wineDetailImage: {
    width: "100%" ,
    height: 260,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  },
  wineInfoArea: {
    padding: 18,
  },
  detailImageCard: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
  },
  detailImageTop: {
    height: 210,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: 18,
    display: "flex",
    alignItems: "end",
  },
  shopLogoPanel: {
    height: 140,
    background: theme.cream,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderBottom: `1px solid ${theme.line}`,
  },
  profileHeroCard: {
    background: `linear-gradient(135deg, ${theme.wineDark}, ${theme.wine})`,
    border: "1px solid rgba(108,21,39,0.35)",
    borderRadius: 28,
    padding: 18,
    color: "#fff",
    display: "grid",
    gap: 16,
    position: "relative",
    overflow: "hidden",
  },
  profileArtImage: {
    display: "none",
    position: "absolute",
    right: -6,
    top: 6,
    width: 170,
    opacity: 0.12,
    pointerEvents: "none",
  },
  membershipEyebrow: {
    fontSize: 13,
    color: "rgba(255,255,255,0.76)",
    fontWeight: 700,
  },
  membershipTitle: {
    marginTop: 6,
    fontFamily: '"Lora", serif',
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: -0.8,
  },
  membershipText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)",
  },
  savingsBigCard: {
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 24,
    padding: 18,
  },
  savingsBigLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.72)",
    fontWeight: 700,
  },
  savingsBigValue: {
    marginTop: 8,
    fontSize: 34,
    fontWeight: 800,
    lineHeight: 1,
  },
  savingsBigSub: {
    marginTop: 8,
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
  },
  infoBox: {
    background: "#FAF8F5",
    border: `1px solid ${theme.line}`,
    borderRadius: 18,
    padding: 14,
  },
  infoLabel: {
    fontSize: 12,
    color: theme.subtext,
    fontWeight: 700,
  },
  infoValue: {
    marginTop: 6,
    color: theme.text,
    fontWeight: 800,
    fontSize: 14,
  },
  resultRow: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 26,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    padding: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  wineThumbSmall: {
    width: 56,
    height: 56,
    borderRadius: 14,
    background: theme.cream,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    flexShrink: 0,
  },
  wineCardGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  wineGridCard: {
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    borderRadius: 12,
    overflow: "hidden",
    cursor: "pointer",
  },
  wineGridCardPhoto: {
    height: 136,
    background: theme.cream,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  wineGridCardBody: {
    padding: 10,
  },
  wineGridCardTitle: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    color: theme.text,
    fontSize: 13,
    lineHeight: 1.3,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  wineGridCardSubtitle: {
    marginTop: 4,
    color: theme.subtext,
    fontSize: 11,
  },
  bottomNavWrap: {
    padding: 14,
    borderTop: `1px dashed ${theme.line}`,
    background: "rgba(255,253,251,0.95)",
  },
  bottomNav: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 8,
    padding: 8,
    borderRadius: 30,
    background: theme.paper,
    border: `1px solid ${theme.line}`,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
  },
  navItem: {
    border: 0,
    borderRadius: 22,
    padding: "10px 4px",
    background: "transparent",
    color: "#9a8f85",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  navItemActive: {
    border: 0,
    borderRadius: 22,
    padding: "10px 4px",
    background: theme.text,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  navLabel: {
    fontSize: 10.5,
    fontWeight: 700,
    textAlign: "center",
    lineHeight: 1.1,
  },
  splashPage: {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(135deg, ${theme.text} 0%, ${theme.river} 100%)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  splashLogoCircle: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    overflow: "hidden",
    background: "#fff",
    animation: "splashLogoIn 1.4s ease-out",
  },
  splashText: {
    marginTop: 18,
    fontFamily: '"Lora", serif',
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    opacity: 0,
    animation: "splashTextIn 1s ease-out 0.6s forwards",
  },
  splashLogo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
