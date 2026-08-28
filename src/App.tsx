
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import wapisaPinotNoirPhoto from "./assets/vinos/wapisa-pinot-noir.jpg";
import wapisaCabernetSauvignonPhoto from "./assets/vinos/wapisa-cabernet-sauvignon.jpg";
import wapisaMalbecPhoto from "./assets/vinos/wapisa-malbec.jpg";

// Fotos reales de Antigua Bodega Patagónica (reemplazan las imágenes viejas /wines/antigua-*.png)
import antiguaUnSauvignonBlancPhoto from "./assets/vinos/antigua-bodega-patagonica-un-sauvignon-blanc.jpg";
import antiguaUnChardonnayPhoto from "./assets/vinos/antigua-bodega-patagonica-un-chardonnay.jpg";
import antiguaUnRosePhoto from "./assets/vinos/antigua-bodega-patagonica-un-rose.jpg";
import antiguaUnMalbecReservaPhoto from "./assets/vinos/antigua-bodega-patagonica-un-malbec-reserva.jpg";
import antiguaUnPinotNoirReservaPhoto from "./assets/vinos/antigua-bodega-patagonica-un-pinot-noir-reserva.jpg";
import antiguaUnGranCorteReservaPhoto from "./assets/vinos/antigua-bodega-patagonica-un-gran-corte-reserva.jpg";
import antiguaUnMalbecGranReservaPhoto from "./assets/vinos/antigua-bodega-patagonica-un-malbec-gran-reserva.jpg";
import antiguaUnMerlotGranReservaPhoto from "./assets/vinos/antigua-bodega-patagonica-un-merlot-gran-reserva.jpg";
import antiguaBellacoPinotNoirPhoto from "./assets/vinos/antigua-bodega-patagonica-bellaco-malcriado-pinot-noir.jpg";
import antiguaBellacoMerlotPhoto from "./assets/vinos/antigua-bodega-patagonica-bellaco-malcriado-merlot.jpg";
import antiguaBellacoMalbecPhoto from "./assets/vinos/antigua-bodega-patagonica-bellaco-malcriado-malbec.jpg";
import antiguaUnPinotNoirGranReservaPhoto from "./assets/vinos/antigua-bodega-patagonica-un-pinot-noir-gran-reserva.jpg";

// Prompt 2 — Alto Valle tanda 1 + Bodega Costa: fotos de portada
import bodegaCostaPhoto from "./assets/bodega-costa.jpg";
import chacrasDelFigaroPhoto from "./assets/chacras-del-figaro.png";
import bodegaFamiliaDellanzoPhoto from "./assets/bodega-familia-dellanzo.png";
import bodegaYVinedosSanSebastianPhoto from "./assets/bodega-y-viñedos-san-sebastian.png";
import bodegaGennariPhoto from "./assets/bodega-gennari.jpg";
import bodegaAonikenkPhoto from "./assets/bodega-aonikenk.jpg";
import bodegaAgrestisPhoto from "./assets/bodega-agrestis.jpg";
import bodegaHumbertoTronelliPhoto from "./assets/bodega-humberto-tronelli.png";

// Prompt 2 — Bodega Costa
import bodegaCostaChardonnayPhoto from "./assets/vinos/bodega-costa-chardonnay.jpg";
import bodegaCostaRieslingPhoto from "./assets/vinos/bodega-costa-riesling.jpg";
import bodegaCostaPinotNoirPhoto from "./assets/vinos/bodega-costa-pinot-noir.jpg";
import bodegaCostaMalbecPhoto from "./assets/vinos/bodega-costa-malbec.jpg";
import bodegaCostaPetitVerdotPhoto from "./assets/vinos/bodega-costa-petit-verdot.jpg";

// Prompt 2 — Chacras de Fígaro
import chacrasDelFigaroPrimoBacioMalbecPhoto from "./assets/vinos/chacras-del-figaro-primo-bacio-malbec.jpg";
import chacrasDelFigaroFigaro9Photo from "./assets/vinos/chacras-del-figaro-figaro-9.jpg";

// Prompt 2 — Familia Dellanzo
import dellanzoPuntaDeRielBlendEstibaUnicaPhoto from "./assets/vinos/bodega-familia-dellanzo-punta-de-riel-blend-estiba-unica.jpg";
import dellanzoPuntaDeRielMalbecPhoto from "./assets/vinos/bodega-familia-dellanzo-punta-de-riel-malbec.jpg";
import dellanzoBuonaTerraRosadoPhoto from "./assets/vinos/bodega-familia-dellanzo-buona-terra-rosado.jpg";
import dellanzoBuonaTerraTorrontesPhoto from "./assets/vinos/bodega-familia-dellanzo-buona-terra-torrontes.jpg";

// Prompt 2 — San Sebastián
import sanSebastianLechuzaReservaMalbecPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-lechuza-reserva-malbec.jpg";
import sanSebastianLechuzaReservaCabernetFrancPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-lechuza-reserva-cabernet-franc.jpg";
import sanSebastianLechuzaReservaMerlotPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-lechuza-reserva-merlot.jpg";
import sanSebastianLechuzaReservaTrousseauPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-lechuza-reserva-trousseau.jpg";
import sanSebastianGranReservaLechuzaBlendPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-gran-reserva-lechuza-blend-malbec-merlot.jpg";
import sanSebastianFenomenoMalbecRosePhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-fenómeno-malbec-rose.jpg";
import sanSebastianFenomenoMalbecPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-fenómeno-malbec.jpg";
import sanSebastianFenomenoNaranjoTorrontesPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-fenómeno-naranjo-torrontes.jpg";
import sanSebastianFenomenoMerlotPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-fenómeno-merlot.jpg";
import sanSebastianReservaHollejosCabernetFrancPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-reserva-hollejos-cabernet-franc.jpg";
import sanSebastianReservaHollejosMalbecPhoto from "./assets/vinos/bodega-y-viñedos-san-sebastian-reserva-hollejos-malbec.jpg";

// Prompt 2 — Gennari
import gennariMalbecPhoto from "./assets/vinos/bodega-gennari-malbec.jpg";
import gennariRosePhoto from "./assets/vinos/bodega-gennari-rose.jpg";
import gennariSingleVineyardPhoto from "./assets/vinos/bodega-gennari-single-vineyard.jpg";

// Prompt 2 — Aonikenk
import aonikenkPincenMerlotPhoto from "./assets/vinos/bodega-aonikenk-pincen-merlot.jpg";
import aonikenkPincenCabernetSauvignonPhoto from "./assets/vinos/bodega-aonikenk-pincen-cabernet-sauvignon.jpg";
import aonikenkPincenRosadoPhoto from "./assets/vinos/bodega-aonikenk-pincen-rosado.jpg";

// Prompt 2 — Agrestis
import agrestisMalbecPhoto from "./assets/vinos/bodega-agrestis-malbec.jpg";
import agrestisCabernetSauvignonPhoto from "./assets/vinos/bodega-agrestis-cabernet-sauvignon.jpg";
import agrestisTenuisPinotNoirPhoto from "./assets/vinos/bodega-agrestis-tenuis-pinot-noir.jpg";

// Prompt 2 — Tronelli
import tronelliGranReservaCabernetFrancPhoto from "./assets/vinos/bodega-humberto-tronelli-gran-reserva-cabernet-franc.jpg";
import tronelliGranReservaMalbecPhoto from "./assets/vinos/bodega-humberto-tronelli-gran-reserva-malbec.jpg";
import tronelliReservaMalbecPhoto from "./assets/vinos/bodega-humberto-tronelli-reserva-malbec.jpg";
import tronelliMalbecPhoto from "./assets/vinos/bodega-humberto-tronelli-malbec.jpg";
import tronelliMerlotPhoto from "./assets/vinos/bodega-humberto-tronelli-merlot.jpg";
import tronelliRosePhoto from "./assets/vinos/bodega-humberto-tronelli-rose.jpg";
import tronelliTorrontesPhoto from "./assets/vinos/bodega-humberto-tronelli-torrontes.jpg";
import tronelliCosechaTardiaPhoto from "./assets/vinos/bodega-humberto-tronelli-cosecha-tardia.jpg";
import tronelliBlendPhoto from "./assets/vinos/bodega-humberto-tronelli-blend-malbec-cabernet-franc-merlot.jpg";

// Prompt 3 — Alto Valle tanda final: fotos de portada
import bodegaWeinglasPhoto from "./assets/bodega-weinglas.jpeg";
import bodegaFabreMontmayouPhoto from "./assets/bodega-fabre-montmayou.jpeg";
import vinasDelLagoPhoto from "./assets/viñas-del-lago.jpeg";
import bodegaTierraDelVientoPhoto from "./assets/bodega-tierra-del-viento.jpeg";
import bodegaYVinedosMoschiniPhoto from "./assets/bodega-y-viñedos-moschini.jpeg";
import bodegaChacraPhoto from "./assets/bodega-chacra.jpeg";
import bodegaNoemiaPhoto from "./assets/bodega-noemia.jpeg";
import bodegaFavrettoPhoto from "./assets/bodega-favretto.jpeg";
import bodegaFlorDelPradoPhoto from "./assets/bodega-flor-del-prado.jpeg";
import bodegaBonomiYBernalPhoto from "./assets/bodega-bonomi-y-bernal.jpeg";
import bodegaPujanteVinedosPatagonicosPhoto from "./assets/bodega-pujante-viñedos-patagonicos.jpeg";
import bodegaDominioDeFerenezaPhoto from "./assets/bodega-dominio-de-fereneza.jpeg";
import bodegaGeromeMarteauPhoto from "./assets/bodega-gerome-marteau.jpeg";

// Prompt 3 — Weinglas
import weinglasQuinta12MerlotPhoto from "./assets/vinos/bodega-weinglas-quinta-12-merlot.jpg";
import weinglasQuinta12MalbecPhoto from "./assets/vinos/bodega-weinglas-quinta-12-malbec.jpg";
import weinglasBlackGranReservaMerlotPhoto from "./assets/vinos/bodega-weinglas-black-gran-reserva-merlot.jpg";
import weinglasBlackGranReservaCabernetSauvignonPhoto from "./assets/vinos/bodega-weinglas-black-gran-reserva-cabernet-sauvignon.jpg";
import weinglasBlackGranReservaMalbecPhoto from "./assets/vinos/bodega-weinglas-black-gran-reserva-malbec.jpg";

// Prompt 3 — Fabre Montmayou
import fabreMontmayouGranReservaMerlotPhoto from "./assets/vinos/bodega-fabre-montmayou-patagonia-gran-reserva-merlot.jpg";
import fabreMontmayouBarrelSelectMalbecPhoto from "./assets/vinos/bodega-fabre-montmayou-patagonia-gran-reserva-malbec.jpg";

// Prompt 3 — Viñas del Lago Pellegrini
import vinasDelLagoCabernetSauvignonPhoto from "./assets/vinos/viñas-del-lago-pellegrini-cabernet-sauvignon.jpg";
import vinasDelLagoMalbecPhoto from "./assets/vinos/viñas-del-lago-pellegrini-malbec.jpg";
import vinasDelLagoMerlotPhoto from "./assets/vinos/viñas-del-lago-pellegrini-merlot.jpg";

// Prompt 3 — Tierra del Viento
import tierraDelVientoReservaMalbecPhoto from "./assets/vinos/bodega-tierra-del-viento-reserva-malbec.jpg";
import tierraDelVientoReservaSyrahPhoto from "./assets/vinos/bodega-tierra-del-viento-reserva-syrah.jpg";
import tierraDelVientoMalbecPhoto from "./assets/vinos/bodega-tierra-del-viento-malbec.jpg";
import tierraDelVientoMerlotPhoto from "./assets/vinos/bodega-tierra-del-viento-merlot.jpg";

// Prompt 3 — Moschini
import moschiniKm1120MalbecReservaPhoto from "./assets/vinos/bodega-y-viñedos-moschini-km-1120-malbec-reserva.jpg";
import moschiniKm1120MalbecJovenPhoto from "./assets/vinos/bodega-y-viñedos-moschini-km-1120-malbec.jpg";
import moschiniKm1120MerlotPhoto from "./assets/vinos/bodega-y-viñedos-moschini-km-1120-merlot.jpg";
import moschiniKm1120CabernetFrancPhoto from "./assets/vinos/bodega-y-viñedos-moschini-km-1120-cabernet-franc.jpg";
import moschiniDolzoBlancoNaturalDulcePhoto from "./assets/vinos/bodega-y-viñedos-moschini-km-1120-dolzo-blanco-natural-dulce.jpg";
import moschiniBlancoPhoto from "./assets/vinos/bodega-y-viñedos-moschini-km-1120-blanco.jpg";

// Prompt 3 — Bodega Chacra
import chacraRokaMalbecPhoto from "./assets/vinos/bodega-chacra-roka-malbec.jpg";
import chacraLunitaPinotNoirPhoto from "./assets/vinos/bodega-chacra-lunita-pinot-noir.jpg";
import chacraMainqueChardonnayPhoto from "./assets/vinos/bodega-chacra-mainque-chardonnay.jpg";
import chacraChardonnayPhoto from "./assets/vinos/bodega-chacra-chardonnay.jpg";
import chacraCincuentaYCincoPinotNoirPhoto from "./assets/vinos/bodega-chacra-cincuenta-y-cinco-pinot-noir.jpg";
import chacraTreintaYDosPinotNoirPhoto from "./assets/vinos/bodega-chacra-treinta-y-dos-pinot-noir.jpg";
import chacraTroussseauPhoto from "./assets/vinos/bodega-chacra-trosseau.jpg";
import chacraSinAzufrePinotNoirPhoto from "./assets/vinos/bodega-chacra-sin-azufre-pinot-noir.jpg";
import chacraBardaPinotNoirPhoto from "./assets/vinos/bodega-chacra-barda-pinot-noir.jpg";

// Prompt 3 — Bodega Noemía
import noemiaALisaMalbecPhoto from "./assets/vinos/bodega-noemia-alisa-malbec.jpg";
import noemiaJAlbertoMalbecPhoto from "./assets/vinos/bodega-noemia-j-alberto-malbec.jpg";
import noemiaMalbecPhoto from "./assets/vinos/bodega-noemia-malbec.jpg";

// Prompt 3 — Favretto
import favretto70AniosPhoto from "./assets/vinos/bodega-favretto-ferruiccio-favretto-70-años-malbec-cabernet-sauvignon.jpg";
import favrettoGranMalbecPhoto from "./assets/vinos/bodega-favretto-ferruiccio-favretto-gran-malbec.jpg";
import favrettoOirMerlotPhoto from "./assets/vinos/bodega-favretto-oir-merlot.jpg";
import favrettoOirCabernetFrancPhoto from "./assets/vinos/bodega-favretto-oir-cabernet-franc.jpg";
import favrettoOirSauvignonBlancPhoto from "./assets/vinos/bodega-favretto-oir-sauvignon-blanc.jpg";
import favrettoOirSyrahPhoto from "./assets/vinos/bodega-favretto-oir-syrah.jpg";
import favrettoOirPinotNoirPhoto from "./assets/vinos/bodega-favretto-oir-pinot-noir.jpg";

// Prompt 3 — Flor del Prado
import florDelPradoPinotNoirPhoto from "./assets/vinos/bodega-flor-del-prado-pinot-noir.jpg";
import florDelPradoChardonnayPhoto from "./assets/vinos/bodega-flor-del-prado-chardonnay.jpg";
import florDelPradoSauvignonBlancPhoto from "./assets/vinos/bodega-flor-del-prado-sauvignon-blanc.jpg";
import florDelPradoMalbecRosePhoto from "./assets/vinos/bodega-flor-del-prado-malbec-rose.jpg";
import florDelPradoMalbecPhoto from "./assets/vinos/bodega-flor-del-prado-malbec.jpg";
import florDelPradoCabernetFrancPhoto from "./assets/vinos/bodega-flor-del-prado-cabernet-franc.jpg";

// Prompt 3 — Bonomi y Bernal
import bonomiYBernalTorminiBlancDeBlancsPhoto from "./assets/vinos/bodega-bonomi-y-bernal-tormini-blanc-de-blancs.jpg";
import bonomiYBernalVerziereMalbecPhoto from "./assets/vinos/bodega-bonomi-y-bernal-tormini-verziere-malbec.jpg";
import bonomiYBernalSelvapianaBlendDeGuardaPhoto from "./assets/vinos/bodega-bonomi-y-bernal-selvapiana-blend-de-guarda.jpeg";

// Prompt 3 — Pujante (Arrayán)
import pujanteArrayanGranPinotPhoto from "./assets/vinos/bodega-pujante-viñedos-patagonicos-arrayan-gran-pinot.jpg";
import pujanteArrayanGranMalbecPhoto from "./assets/vinos/bodega-pujante-viñedos-patagonicos-arrayan-gran-malbec.jpg";
import pujanteArrayanMalbecBurdeosEcoPhoto from "./assets/vinos/bodega-pujante-viñedos-patagonicos-arrayan-malbec-burdeos-eco.jpg";
import pujanteArrayanCabernetFrancMalbecBurdeosEcoPhoto from "./assets/vinos/bodega-pujante-viñedos-patagonicos-arrayan-cabernet-franc-malbec-burdeos-eco.jpg";

// Prompt 3 — Dominio de Fereneza
import ferenezaLaVojaPinotNoirPhoto from "./assets/vinos/bodega-dominio-de-fereneza-la-voja-pinot-noir.jpg";
import ferenezaLaVojaChardonnayPhoto from "./assets/vinos/bodega-dominio-de-fereneza-la-voja-chardonnay.jpg";
import ferenezaLaFerenezaPinotNoirPhoto from "./assets/vinos/bodega-dominio-de-fereneza-la-freneza-pinot-noir.jpg";
import ferenezaLaRufaPinotNoirRosePhoto from "./assets/vinos/bodega-dominio-de-fereneza-la-rufa-pinot-noir-rose.jpg";
import ferenezaIlKavaliroPhoto from "./assets/vinos/bodega-dominio-de-fereneza-il-kavaliro.jpg";

// Prompt 3 — Gérôme Marteau
import geromeMarteauJovenMalbecPhoto from "./assets/vinos/bodega-gerome-marteau-linea-joven-malbec.jpg";
import geromeMarteauRoseDeMalbecPhoto from "./assets/vinos/bodega-gerome-marteau-rose-de-malbec.jpg";
import geromeMarteauTorrontesTardioPhoto from "./assets/vinos/bodega-gerome-marteau-torrontes-tardio.jpg";
import geromeMarteauTorrontesPhoto from "./assets/vinos/bodega-gerome-marteau-torrontes.jpg";
import geromeMarteauPremiumMalbecPhoto from "./assets/vinos/bodega-gerome-marteau-premium-malbec.jpg";
import geromeMarteauPremiumMerlotPhoto from "./assets/vinos/bodega-gerome-marteau-premium-merlot.jpg";
import geromeMarteauReservaCabernetFrancPhoto from "./assets/vinos/bodega-gerome-marteau-reserva-cabernet-franc.jpg";
import geromeMarteauReservaMalbecPhoto from "./assets/vinos/bodega-gerome-marteau-reserva-malbec.jpg";
import geromeMarteauRebecaDeTerroirsPhoto from "./assets/vinos/bodega-gerome-marteau-rebeca-de-terroirs.jpg";

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

type EventTimeframe = "ahora" | "hoy" | "finde";

type EventItem = {
  id: string;
  title: string;
  place: string;
  when: string;
  city: string;
  benefit: string;
  organizer?: string;
  timeframe: EventTimeframe;
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

type DetailEntry =
  | { kind: "wine"; id: string; fromShop?: boolean }
  | { kind: "winery"; id: string }
  | { kind: "shop"; id: string };

type DetailState = DetailEntry | null;

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
      "Miras Trousseau Curioso",
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
  city: "Cervantes",
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
    "UN Pinot Noir Gran Reserva",
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
    wines: [
      "Wapisa Pinot Noir",
      "Wapisa Sauvignon Blanc",
      "Wapisa Cabernet Sauvignon",
      "Wapisa Malbec",
    ],
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
  openNow: false,
  wines: ["Tinto (Malbec y Cabernet Sauvignon)", "Blanco (Chenin)"],
  shops: [],
  activity: "Producción familiar, contactar por Facebook",
  benefit: "",
  distance: "",
  image: bodegaFamiliaHerreroPhoto,
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
  openNow: true,
  wines: ["Don Amaro Malbec"],
  shops: [],
  activity: "Recorrido por viñedos, olivares y bodega + degustación",
  benefit: "",
  distance: "",
  image: bodegaDonAmaroPhoto,
  address: "Cruce de Ruta 3 y Ruta 251, cerca de San Antonio Oeste (~10 km de Las Grutas)",
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
  openNow: true,
  wines: ["Trina Blend de Malbec", "Trina Naranjo de Criollas", "Trina Reserva de Malbec"],
  shops: [],
  activity: "Visitas guiadas, restaurante y alojamiento boutique",
  benefit: "",
  distance: "",
  image: bodegaTrinaPhoto,
  address: "Arturo Benini 1471, Colonia Reig, Río Colorado, Río Negro",
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
{
  id: "w14",
  name: "Bodega Costa",
  city: "Mainqué",
  region: "alto-valle",
  description: "Vinos de autor. Viticultura de precisión, producción limitada y biológica.",
  shortDescription: "Bodega de autor de Mainqué, con producción limitada y viticultura biológica.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Bodega Costa Chardonnay Patagónico",
    "Bodega Costa Riesling Patagónico",
    "Bodega Costa Sapo Pinot Noir",
    "Bodega Costa Sapo Malbec",
    "Bodega Costa Sapo Petit Verdot",
  ],
  shops: [],
  activity: "Vinos de autor, producción limitada y biológica",
  benefit: "",
  distance: "",
  image: bodegaCostaPhoto,
},
{
  id: "w15",
  name: "Chacras de Fígaro",
  city: "Allen",
  region: "alto-valle",
  description: "Bodega boutique de Allen, Alto Valle de Río Negro.",
  shortDescription: "Bodega boutique de Allen, Alto Valle de Río Negro.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: ["Primo Bacio Malbec", "Fígaro 9"],
  shops: [],
  activity: "Bodega boutique de Allen",
  benefit: "",
  distance: "",
  image: chacrasDelFigaroPhoto,
},
{
  id: "w16",
  name: "Bodega Familia Dellanzo",
  city: "Barda del Medio",
  region: "alto-valle",
  description: "Bodega familiar del Alto Valle, con producción en tres chacras propias y venta directa de sus vinos.",
  shortDescription: "Bodega familiar de Barda del Medio, con venta directa de sus vinos.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Punta de Riel Blend Estiba Única",
    "Punta de Riel Malbec",
    "Buona Terra Rosado",
    "Buona Terra Torrontés",
  ],
  shops: [],
  activity: "Venta directa en bodega",
  benefit: "",
  distance: "",
  image: bodegaFamiliaDellanzoPhoto,
  address: "Sección Chacras, Lote 69, Calle Rural 11, Campo Grande/Colonia El Manzano. CP 8305.",
},
{
  id: "w17",
  name: "Bodega y Viñedos San Sebastián",
  city: "Cervantes",
  region: "alto-valle",
  description: "Bodega familiar boutique de Cervantes, en el circuito Caminos del Vino, con las líneas Lechuza y Fenómeno.",
  shortDescription: "Bodega boutique de Cervantes, con las líneas Lechuza y Fenómeno.",
  hours: "Con reserva previa (sin horario fijo)",
  openNow: false,
  wines: [
    "Lechuza Reserva Malbec",
    "Lechuza Reserva Cabernet Franc",
    "Lechuza Reserva Merlot",
    "Lechuza Reserva Trousseau",
    "Gran Reserva Lechuza Blend Malbec Merlot",
    "Fenómeno Malbec Rosé",
    "Fenómeno Malbec",
    "Fenómeno Naranjo Torrontés",
    "Fenómeno Merlot",
    "Reserva Hollejos Cabernet Franc",
    "Reserva Hollejos Malbec",
  ],
  shops: [],
  activity: "Visita guiada y degustación con reserva previa",
  benefit: "",
  distance: "",
  image: bodegaYVinedosSanSebastianPhoto,
  address: "Chacra N° 297, Cervantes, Río Negro.",
},
{
  id: "w18",
  name: "Bodega Gennari",
  city: "Fernández Oro",
  region: "alto-valle",
  description: "Negocio familiar de Fernández Oro fundado en 1957, dedicado a la elaboración de vinos y frutos secos.",
  shortDescription: "Negocio familiar de Fernández Oro desde 1957, vinos y frutos secos.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: ["Gennari Malbec", "Gennari Rosé", "Gennari Single Vineyard"],
  shops: [],
  activity: "Local de venta de vinos y frutos secos",
  benefit: "",
  distance: "",
  image: bodegaGennariPhoto,
  address: "Ruta Provincial N° 65, Km 1181, General Fernández Oro.",
},
{
  id: "w19",
  name: "Bodega Aonikenk",
  city: "Fernández Oro",
  region: "alto-valle",
  description: "Bodega familiar de Fernández Oro (familia Rastrilla), con su línea Pincén, en el circuito Caminos del Vino.",
  shortDescription: "Bodega familiar de Fernández Oro, con su línea Pincén.",
  hours: "Mié a vie ~11:00, fines de semana ~12:00",
  openNow: true,
  wines: ["Pincén Merlot", "Pincén Cabernet Sauvignon", "Pincén Rosado"],
  shops: [],
  activity: "Visitas guiadas con reserva previa",
  benefit: "",
  distance: "",
  image: bodegaAonikenkPhoto,
  address: "Chacra 129, Ruta Provincial 65, General Fernández Oro (Barrio Los Frutales).",
},
{
  id: "w20",
  name: "Bodega Agrestis",
  city: "General Roca",
  region: "alto-valle",
  description: "Bodega de General Roca especializada en espumante (método champenoise) y Pinot Noir, con visitas y almuerzos con reserva previa.",
  shortDescription: "Bodega de General Roca especializada en espumante y Pinot Noir.",
  hours: "Con reserva previa",
  openNow: false,
  wines: ["Agrestis Malbec", "Agrestis Cabernet Sauvignon", "Tenuis Pinot Noir"],
  shops: [],
  activity: "Visitas, degustación y almuerzos con reserva previa",
  benefit: "",
  distance: "",
  image: bodegaAgrestisPhoto,
  address: "Gobernador Castello 1539, General Roca. CP 8334.",
},
{
  id: "w21",
  name: "Bodega Tronelli",
  city: "General Roca",
  region: "alto-valle",
  description: "Bodega familiar de General Roca, con casi 100 años de historia.",
  shortDescription: "Bodega familiar de General Roca, con casi 100 años de historia.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Tronelli Gran Reserva Cabernet Franc",
    "Tronelli Gran Reserva Malbec",
    "Reserva Malbec",
    "Tronelli Malbec",
    "Tronelli Merlot",
    "Tronelli Rosé",
    "Tronelli Torrontés",
    "Tronelli Cosecha Tardía",
    "Tronelli Blend (Malbec-Cabernet Franc-Merlot)",
  ],
  shops: [],
  activity: "Contactar por Instagram para visitas",
  benefit: "",
  distance: "",
  image: bodegaHumbertoTronelliPhoto,
  address: "Martín Miguel de Güemes 1614, General Roca (zona Stefenelli).",
},
{
  id: "w22",
  name: "Bodega Weinglas",
  city: "General Roca",
  region: "alto-valle",
  description: "Bodega de General Roca, Alto Valle de Río Negro.",
  shortDescription: "Bodega de General Roca, Alto Valle de Río Negro.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Quinta 12 Merlot",
    "Quinta 12 Malbec",
    "Black Gran Reserva Merlot",
    "Black Gran Reserva Cabernet Sauvignon",
    "Black Gran Reserva Malbec",
  ],
  shops: [],
  activity: "Sin datos de visitas confirmados",
  benefit: "",
  distance: "",
  image: bodegaWeinglasPhoto,
},
{
  id: "w23",
  name: "Bodega Fabre Montmayou",
  city: "General Roca",
  region: "alto-valle",
  description: "Bodega con sede en General Roca y viñedos en Allen, parte del grupo Fabre Montmayou (marca Infinitus).",
  shortDescription: "Bodega con sede en General Roca y viñedos en Allen, marca Infinitus.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Fabre Montmayou Patagonia Gran Reserva Merlot",
    "Fabre Montmayou Patagonia Barrel Select Malbec",
  ],
  shops: [],
  activity: "Contactar a través del sitio web",
  benefit: "",
  distance: "",
  image: bodegaFabreMontmayouPhoto,
  address: "Ruta 22 y Rajneri, General Roca, Río Negro. CP 8332. También tiene viñedos en Allen (~60 ha).",
},
{
  id: "w24",
  name: "Viñas del Lago Pellegrini",
  city: "Contralmirante Cordero",
  region: "alto-valle",
  description: "Viñedo junto al Lago Pellegrini, con visitas guiadas, degustaciones y alojamiento tipo hostel.",
  shortDescription: "Viñedo junto al Lago Pellegrini, con visitas guiadas y alojamiento tipo hostel.",
  hours: "Con reserva",
  openNow: false,
  wines: [
    "Viñas del Lago Pellegrini Cabernet Sauvignon",
    "Viñas del Lago Pellegrini Malbec",
    "Viñas del Lago Pellegrini Merlot",
  ],
  shops: [],
  activity: "Visitas guiadas, degustaciones y alojamiento",
  benefit: "",
  distance: "",
  image: vinasDelLagoPhoto,
  address: "A metros del Lago Pellegrini.",
},
{
  id: "w25",
  name: "Tierra del Viento",
  city: "Contralmirante Cordero",
  region: "alto-valle",
  description: "Proyecto artesanal de venta directa cerca del Lago Pellegrini, a cargo del enólogo Nicolás Ginóbili.",
  shortDescription: "Proyecto artesanal de venta directa cerca del Lago Pellegrini.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Tierra del Viento Reserva Malbec",
    "Tierra del Viento Reserva Syrah",
    "Tierra del Viento Malbec",
    "Tierra del Viento Merlot",
  ],
  shops: [],
  activity: "Venta directa",
  benefit: "",
  distance: "",
  image: bodegaTierraDelVientoPhoto,
},
{
  id: "w26",
  name: "Bodega y Viñedos Moschini",
  city: "Ingeniero Huergo",
  region: "alto-valle",
  description: "Bodega familiar de Ingeniero Huergo, con impronta italiana, recorridos con almuerzo y su tradicional Fiesta del Vino Patero.",
  shortDescription: "Bodega familiar de Ingeniero Huergo, con impronta italiana.",
  hours: "Con reserva previa",
  openNow: false,
  wines: [
    "Moschini Km1120 Malbec Reserva",
    "Moschini Km1120 Malbec Joven",
    "Moschini Km1120 Merlot",
    "Moschini Km1120 Cabernet Franc",
    "Moschini Dolzó Blanco Natural Dulce",
    "Moschini Blanco",
  ],
  shops: [],
  activity: "Visitas guiadas, degustación y almuerzo con reserva previa",
  benefit: "",
  distance: "",
  image: bodegaYVinedosMoschiniPhoto,
  address: "Chacra 433, Lote 6, Ingeniero Huergo.",
},
{
  id: "w27",
  name: "Bodega Chacra",
  city: "Mainqué",
  region: "alto-valle",
  description: "Productora de renombre mundial de Pinot Noir y Chardonnay biodinámicos, fundada en 2004 por Piero Incisa della Rocchetta (nieto del creador del Sassicaia). Sin sala de degustación pública.",
  shortDescription: "Productora de renombre mundial de Pinot Noir y Chardonnay biodinámicos.",
  hours: "Sin sala de degustación pública",
  openNow: false,
  wines: [
    "Roka Malbec",
    "Lunita Pinot Noir",
    "Mainqué Chardonnay",
    "Chacra Chardonnay",
    "Chacra Cincuenta y Cinco Pinot Noir",
    "Chacra Treinta y Dos Pinot Noir",
    "Chacra Trousseau",
    "Sin Azufre Pinot Noir",
    "Barda Pinot Noir",
  ],
  shops: [],
  activity: "Producción biodinámica, sin sala de degustación pública",
  benefit: "",
  distance: "",
  image: bodegaChacraPhoto,
  address: "Distrito Mainqué (zona Chacra 357). Sin dirección pública para visitas.",
},
{
  id: "w28",
  name: "Bodega Noemía",
  city: "Mainqué",
  region: "alto-valle",
  description: "Productora premium biodinámica fundada en 2001 por la condesa Noemi Marone Cinzano y el enólogo Hans Vinding-Diers, en Mainqué.",
  shortDescription: "Productora premium biodinámica fundada en 2001 en Mainqué.",
  hours: "Sin horario fijo",
  openNow: false,
  wines: ["A Lisa Malbec", "J Alberto Malbec", "Noemía Malbec"],
  shops: [],
  activity: "Producción biodinámica, visitas solo con cita previa",
  benefit: "",
  distance: "",
  image: bodegaNoemiaPhoto,
  address: "Chacra 357, Mainqué (junto a Bodega Chacra).",
},
{
  id: "w29",
  name: "Bodega Favretto",
  city: "Villa Regina",
  region: "alto-valle",
  description: "Bodega familiar de Villa Regina desde 1948, con horario de atención fijo y recorrido con degustación de 3 vinos.",
  shortDescription: "Bodega familiar de Villa Regina desde 1948.",
  hours: "Lunes a viernes 8:00-12:00 y 15:00-19:00 · Sábado 8:00-12:00 · Domingo cerrado",
  openNow: false,
  wines: [
    "Ferruccio Favretto 70 Años (Malbec y Cabernet Sauvignon)",
    "Ferruccio Favretto Gran Malbec",
    "OIR Merlot",
    "OIR Cabernet Franc",
    "OIR Sauvignon Blanc",
    "OIR Syrah",
    "OIR Pinot Noir",
  ],
  shops: [],
  activity: "Recorrido y degustación de 3 vinos",
  benefit: "",
  distance: "",
  image: bodegaFavrettoPhoto,
  address: "Chacra 104, Lote 4, Villa Regina (segunda chacra en General Godoy).",
},
{
  id: "w30",
  name: "Bodega Flor del Prado",
  city: "Cipolletti",
  region: "alto-valle",
  description: "Marca histórica cipoleña recuperada, con producción en Chacra El Puente, Cipolletti.",
  shortDescription: "Marca histórica cipoleña recuperada, en Chacra El Puente.",
  hours: "Sin horario público fijo",
  openNow: false,
  wines: [
    "Flor del Prado Pinot Noir",
    "Flor del Prado Chardonnay",
    "Flor del Prado Sauvignon Blanc",
    "Flor del Prado Malbec Rosé",
    "Flor del Prado Malbec",
    "Flor del Prado Cabernet Franc",
  ],
  shops: [],
  activity: "Contactar por Instagram para coordinar visita",
  benefit: "",
  distance: "",
  image: bodegaFlorDelPradoPhoto,
  address: "Chacra El Puente, Ruta Nacional 22 Km 1215 y Calle 225, CP 8324, Cipolletti.",
},
{
  id: "w31",
  name: "Bodega Bonomi y Bernal",
  city: "Cipolletti",
  region: "alto-valle",
  description: "Bodega de Cipolletti, se presenta como \"premium luxury winery\".",
  shortDescription: "Bodega de Cipolletti, se presenta como \"premium luxury winery\".",
  hours: "Horario a confirmar",
  openNow: false,
  wines: ["Tormini Blanc de Blancs", "Verziere Malbec", "Selvapiana Blend de Guarda"],
  shops: [],
  activity: "Sin datos de visitas confirmados",
  benefit: "",
  distance: "",
  image: bodegaBonomiYBernalPhoto,
},
{
  id: "w32",
  name: "Bodega Pujante Viñedos Patagónicos",
  city: "Allen",
  region: "alto-valle",
  description: "Proyecto joven entre Allen y Guerrico, marca Arrayán, aún sin bodega propia construida.",
  shortDescription: "Proyecto joven entre Allen y Guerrico, marca Arrayán.",
  hours: "Sin visitas públicas por ahora",
  openNow: false,
  wines: [
    "Arrayán Gran Pinot",
    "Arrayán Gran Malbec",
    "Arrayán Malbec Burdeos Eco",
    "Arrayán Cabernet Franc Malbec Burdeos Eco",
  ],
  shops: [],
  activity: "Sin visitas públicas por ahora",
  benefit: "",
  distance: "",
  image: bodegaPujanteVinedosPatagonicosPhoto,
  address: "Entre Allen y Guerrico, ~10 ha.",
},
{
  id: "w33",
  name: "Dominio de Fereneza",
  city: "Fernández Oro",
  region: "alto-valle",
  description: "Proyecto boutique a cargo del enólogo Agustín Lombroni, con viñedos en Mainqué y San Patricio del Chañar, vinificado en Bodega Gennari.",
  shortDescription: "Proyecto boutique con viñedos en Mainqué y San Patricio del Chañar.",
  hours: "Sin horarios públicos",
  openNow: false,
  wines: [
    "La Voja Pinot Noir",
    "La Voja Chardonnay",
    "La Freneza Pinot Noir",
    "La Rufa Pinot Noir Rosé",
    "Il Kavaliro",
  ],
  shops: [],
  activity: "Producción boutique",
  benefit: "",
  distance: "",
  image: bodegaDominioDeFerenezaPhoto,
},
{
  id: "w34",
  name: "Bodega Gérôme Marteau",
  city: "Fernández Oro",
  region: "alto-valle",
  description: "Bodega con orígenes en Fernández Oro, hoy con producción en General Roca y Allen, y el histórico espacio recuperado \"La Falda\" en Cipolletti.",
  shortDescription: "Bodega con orígenes en Fernández Oro, producción en General Roca y Allen.",
  hours: "Horario a confirmar",
  openNow: false,
  wines: [
    "Gérôme Marteau Joven Malbec",
    "Fresca Rosé de Malbec",
    "Fresca Torrontés Tardío",
    "Fresca Torrontés",
    "Premium Malbec",
    "Premium Merlot",
    "Gérôme Marteau Reserva Cabernet Franc",
    "Gérôme Marteau Reserva Malbec",
    "Rebeca Blend de Terroirs",
  ],
  shops: [],
  activity: "Espacio visitable La Falda en Cipolletti",
  benefit: "",
  distance: "",
  image: bodegaGeromeMarteauPhoto,
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
    image: wapisaPinotNoirPhoto
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
  image: antiguaUnSauvignonBlancPhoto
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
  image: antiguaUnChardonnayPhoto
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
  image: antiguaUnRosePhoto
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
  image: antiguaUnMalbecReservaPhoto
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
  image: antiguaUnPinotNoirReservaPhoto
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
  image: antiguaUnGranCorteReservaPhoto
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
  image: antiguaUnMalbecGranReservaPhoto
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
  image: antiguaUnMerlotGranReservaPhoto
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
  image: antiguaBellacoPinotNoirPhoto
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
  image: antiguaBellacoMerlotPhoto
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
  image: antiguaBellacoMalbecPhoto
},
{
  id: "v106",
  name: "UN Pinot Noir Gran Reserva",
  varietal: "Pinot Noir",
  winery: "Antigua Bodega Patagónica",
  style: "Gran Reserva de guarda",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Gran Reserva",
  image: antiguaUnPinotNoirGranReservaPhoto,
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
  name: "Miras Trousseau Curioso",
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
{
  id: "v104",
  name: "Wapisa Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Wapisa",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Atlántico",
  image: wapisaCabernetSauvignonPhoto,
},
{
  id: "v105",
  name: "Wapisa Malbec",
  varietal: "Malbec",
  winery: "Wapisa",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: ALL_SHOP_NAMES,
  tag: "Atlántico",
  image: wapisaMalbecPhoto,
},
{
  id: "v107",
  name: "Bodega Costa Chardonnay Patagónico",
  varietal: "Chardonnay",
  winery: "Bodega Costa",
  style: "Untuoso y cítrico",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: bodegaCostaChardonnayPhoto,
},
{
  id: "v108",
  name: "Bodega Costa Riesling Patagónico",
  varietal: "Riesling",
  winery: "Bodega Costa",
  style: "Fresco y mineral",
  description: "Blanco de acidez marcada y aromas florales, con notas cítricas, de durazno y un carácter mineral distintivo. Seco o semiseco según el estilo, ideal para climas fríos como el patagónico.",
  availableAt: [],
  tag: "Alto Valle",
  image: bodegaCostaRieslingPhoto,
},
{
  id: "v109",
  name: "Bodega Costa Sapo Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Costa",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: bodegaCostaPinotNoirPhoto,
},
{
  id: "v110",
  name: "Bodega Costa Sapo Malbec",
  varietal: "Malbec",
  winery: "Bodega Costa",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: bodegaCostaMalbecPhoto,
},
{
  id: "v111",
  name: "Bodega Costa Sapo Petit Verdot",
  varietal: "Petit Verdot",
  winery: "Bodega Costa",
  style: "Oscuro y estructurado",
  description: "Tinto de color muy oscuro e intenso, con taninos firmes y estructura robusta. Aromas a frutos negros, violetas y notas especiadas. Variedad usada tradicionalmente en cortes por el color y cuerpo que aporta, aquí expresada como varietal.",
  availableAt: [],
  tag: "Alto Valle",
  image: bodegaCostaPetitVerdotPhoto,
},
{
  id: "v112",
  name: "Primo Bacio Malbec",
  varietal: "Malbec",
  winery: "Chacras de Fígaro",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacrasDelFigaroPrimoBacioMalbecPhoto,
},
{
  id: "v113",
  name: "Fígaro 9",
  varietal: "Malbec",
  winery: "Chacras de Fígaro",
  style: "De guarda, con roble",
  description: "Malbec de guarda, criado en barricas de roble francés y americano, que suma notas de vainilla, especias y tostado sobre la fruta madura típica de la variedad. Tinto de cuerpo alto y buena estructura.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacrasDelFigaroFigaro9Photo,
},
{
  id: "v114",
  name: "Punta de Riel Blend Estiba Única",
  varietal: "Blend",
  winery: "Bodega Familia Dellanzo",
  style: "Corte con estructura",
  description: "Corte de varias variedades que combina la fruta y estructura de cada una, buscando equilibrio, complejidad y un perfil de cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: dellanzoPuntaDeRielBlendEstibaUnicaPhoto,
},
{
  id: "v115",
  name: "Punta de Riel Malbec",
  varietal: "Malbec",
  winery: "Bodega Familia Dellanzo",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: dellanzoPuntaDeRielMalbecPhoto,
},
{
  id: "v116",
  name: "Buona Terra Rosado",
  varietal: "Rosado",
  winery: "Bodega Familia Dellanzo",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: dellanzoBuonaTerraRosadoPhoto,
},
{
  id: "v117",
  name: "Buona Terra Torrontés",
  varietal: "Torrontés",
  winery: "Bodega Familia Dellanzo",
  style: "Aromático y floral",
  description: "Blanco muy aromático, con notas florales intensas (jazmín, geranio) y de frutas frescas como durazno y uva moscatel. Sorprende por ser seco en boca pese a lo perfumado, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: dellanzoBuonaTerraTorrontesPhoto,
},
{
  id: "v118",
  name: "Lechuza Reserva Malbec",
  varietal: "Malbec",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianLechuzaReservaMalbecPhoto,
},
{
  id: "v119",
  name: "Lechuza Reserva Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianLechuzaReservaCabernetFrancPhoto,
},
{
  id: "v120",
  name: "Lechuza Reserva Merlot",
  varietal: "Merlot",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianLechuzaReservaMerlotPhoto,
},
{
  id: "v121",
  name: "Lechuza Reserva Trousseau",
  varietal: "Trousseau",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Ligero y terroso",
  description: "Tinto ligero de color rubí pálido, con aromas a frutos rojos frescos, especias suaves y un carácter terroso. Taninos delicados y acidez marcada, de estilo cercano al Pinot Noir.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianLechuzaReservaTrousseauPhoto,
},
{
  id: "v122",
  name: "Gran Reserva Lechuza Blend Malbec Merlot",
  varietal: "Malbec y Merlot",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Corte con complejidad",
  description: "Corte de Malbec y Merlot que combina la fruta madura y untuosidad del Malbec con la suavidad y redondez del Merlot. Tinto de cuerpo medio a alto y buena complejidad.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianGranReservaLechuzaBlendPhoto,
},
{
  id: "v123",
  name: "Fenómeno Malbec Rosé",
  varietal: "Rosado",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: sanSebastianFenomenoMalbecRosePhoto,
},
{
  id: "v124",
  name: "Fenómeno Malbec",
  varietal: "Malbec",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: sanSebastianFenomenoMalbecPhoto,
},
{
  id: "v125",
  name: "Fenómeno Naranjo Torrontés",
  varietal: "Naranjo (Torrontés macerado)",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Ámbar y tánico",
  description: "Vino \"naranjo\", elaborado con uvas Torrontés maceradas con su piel, lo que le da un color ámbar/naranja y mayor estructura tánica que un blanco tradicional. Aromas a fruta madura, flores y notas herbales.",
  availableAt: [],
  tag: "Alto Valle",
  image: sanSebastianFenomenoNaranjoTorrontesPhoto,
},
{
  id: "v126",
  name: "Fenómeno Merlot",
  varietal: "Merlot",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: sanSebastianFenomenoMerlotPhoto,
},
{
  id: "v127",
  name: "Reserva Hollejos Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianReservaHollejosCabernetFrancPhoto,
},
{
  id: "v128",
  name: "Reserva Hollejos Malbec",
  varietal: "Malbec",
  winery: "Bodega y Viñedos San Sebastián",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: sanSebastianReservaHollejosMalbecPhoto,
},
{
  id: "v129",
  name: "Gennari Malbec",
  varietal: "Malbec",
  winery: "Bodega Gennari",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: gennariMalbecPhoto,
},
{
  id: "v130",
  name: "Gennari Rosé",
  varietal: "Rosado",
  winery: "Bodega Gennari",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: gennariRosePhoto,
},
{
  id: "v131",
  name: "Gennari Single Vineyard",
  varietal: "Malbec",
  winery: "Bodega Gennari",
  style: "Parcela única",
  description: "Malbec de una única parcela seleccionada de la bodega, sin corte con otras variedades. Color rojo violáceo intenso, aromas a ciruela madura y frutos negros, taninos suaves y buena expresión del terroir de Fernández Oro.",
  availableAt: [],
  tag: "Alto Valle",
  image: gennariSingleVineyardPhoto,
},
{
  id: "v132",
  name: "Pincén Merlot",
  varietal: "Merlot",
  winery: "Bodega Aonikenk",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: aonikenkPincenMerlotPhoto,
},
{
  id: "v133",
  name: "Pincén Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Bodega Aonikenk",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: aonikenkPincenCabernetSauvignonPhoto,
},
{
  id: "v134",
  name: "Pincén Rosado",
  varietal: "Rosado",
  winery: "Bodega Aonikenk",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: aonikenkPincenRosadoPhoto,
},
{
  id: "v135",
  name: "Agrestis Malbec",
  varietal: "Malbec",
  winery: "Bodega Agrestis",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: agrestisMalbecPhoto,
},
{
  id: "v136",
  name: "Agrestis Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Bodega Agrestis",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: agrestisCabernetSauvignonPhoto,
},
{
  id: "v137",
  name: "Tenuis Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Agrestis",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: agrestisTenuisPinotNoirPhoto,
},
{
  id: "v138",
  name: "Tronelli Gran Reserva Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega Tronelli",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Reserva",
  image: tronelliGranReservaCabernetFrancPhoto,
},
{
  id: "v139",
  name: "Tronelli Gran Reserva Malbec",
  varietal: "Malbec",
  winery: "Bodega Tronelli",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: tronelliGranReservaMalbecPhoto,
},
{
  id: "v140",
  name: "Reserva Malbec",
  varietal: "Malbec",
  winery: "Bodega Tronelli",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: tronelliReservaMalbecPhoto,
},
{
  id: "v141",
  name: "Tronelli Malbec",
  varietal: "Malbec",
  winery: "Bodega Tronelli",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: tronelliMalbecPhoto,
},
{
  id: "v142",
  name: "Tronelli Merlot",
  varietal: "Merlot",
  winery: "Bodega Tronelli",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: tronelliMerlotPhoto,
},
{
  id: "v143",
  name: "Tronelli Rosé",
  varietal: "Rosado",
  winery: "Bodega Tronelli",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: tronelliRosePhoto,
},
{
  id: "v144",
  name: "Tronelli Torrontés",
  varietal: "Torrontés",
  winery: "Bodega Tronelli",
  style: "Aromático y floral",
  description: "Blanco muy aromático, con notas florales intensas (jazmín, geranio) y de frutas frescas como durazno y uva moscatel. Sorprende por ser seco en boca pese a lo perfumado, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: tronelliTorrontesPhoto,
},
{
  id: "v145",
  name: "Tronelli Cosecha Tardía",
  varietal: "Cosecha tardía",
  winery: "Bodega Tronelli",
  style: "Dulce y untuoso",
  description: "Vino de cosecha tardía, dulce y untuoso, con aromas a fruta madura, miel y notas de pasas de uva. Ideal para acompañar postres o quesos de sabor intenso.",
  availableAt: [],
  tag: "Alto Valle",
  image: tronelliCosechaTardiaPhoto,
},
{
  id: "v146",
  name: "Tronelli Blend (Malbec-Cabernet Franc-Merlot)",
  varietal: "Malbec, Cabernet Franc y Merlot",
  winery: "Bodega Tronelli",
  style: "Corte con complejidad",
  description: "Corte de Malbec, Cabernet Franc y Merlot que combina fruta madura, frescura herbácea y suavidad, buscando equilibrio y complejidad. Tinto de cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: tronelliBlendPhoto,
},
{
  id: "v147",
  name: "Quinta 12 Merlot",
  varietal: "Merlot",
  winery: "Bodega Weinglas",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: weinglasQuinta12MerlotPhoto,
},
{
  id: "v148",
  name: "Quinta 12 Malbec",
  varietal: "Malbec",
  winery: "Bodega Weinglas",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: weinglasQuinta12MalbecPhoto,
},
{
  id: "v149",
  name: "Black Gran Reserva Merlot",
  varietal: "Merlot",
  winery: "Bodega Weinglas",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Reserva",
  image: weinglasBlackGranReservaMerlotPhoto,
},
{
  id: "v150",
  name: "Black Gran Reserva Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Bodega Weinglas",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Reserva",
  image: weinglasBlackGranReservaCabernetSauvignonPhoto,
},
{
  id: "v151",
  name: "Black Gran Reserva Malbec",
  varietal: "Malbec",
  winery: "Bodega Weinglas",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: weinglasBlackGranReservaMalbecPhoto,
},
{
  id: "v152",
  name: "Fabre Montmayou Patagonia Gran Reserva Merlot",
  varietal: "Merlot",
  winery: "Bodega Fabre Montmayou",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Reserva",
  image: fabreMontmayouGranReservaMerlotPhoto,
},
{
  id: "v153",
  name: "Fabre Montmayou Patagonia Barrel Select Malbec",
  varietal: "Malbec",
  winery: "Bodega Fabre Montmayou",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: fabreMontmayouBarrelSelectMalbecPhoto,
},
{
  id: "v154",
  name: "Viñas del Lago Pellegrini Cabernet Sauvignon",
  varietal: "Cabernet Sauvignon",
  winery: "Viñas del Lago Pellegrini",
  style: "Estructurado y herbáceo",
  description: "Tinto de cuerpo firme y estructurado, con aromas a cassis, pimiento verde y notas herbáceas que evolucionan hacia especias y tabaco con la crianza. Taninos marcados y buena capacidad de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: vinasDelLagoCabernetSauvignonPhoto,
},
{
  id: "v155",
  name: "Viñas del Lago Pellegrini Malbec",
  varietal: "Malbec",
  winery: "Viñas del Lago Pellegrini",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: vinasDelLagoMalbecPhoto,
},
{
  id: "v156",
  name: "Viñas del Lago Pellegrini Merlot",
  varietal: "Merlot",
  winery: "Viñas del Lago Pellegrini",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: vinasDelLagoMerlotPhoto,
},
{
  id: "v157",
  name: "Tierra del Viento Reserva Malbec",
  varietal: "Malbec",
  winery: "Tierra del Viento",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: tierraDelVientoReservaMalbecPhoto,
},
{
  id: "v158",
  name: "Tierra del Viento Reserva Syrah",
  varietal: "Syrah",
  winery: "Tierra del Viento",
  style: "Especiado y ahumado",
  description: "Tinto de fruta negra madura (moras, ciruela negra), con notas especiadas y a veces ahumadas. Cuerpo medio a alto, taninos firmes pero maduros.",
  availableAt: [],
  tag: "Reserva",
  image: tierraDelVientoReservaSyrahPhoto,
},
{
  id: "v159",
  name: "Tierra del Viento Malbec",
  varietal: "Malbec",
  winery: "Tierra del Viento",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: tierraDelVientoMalbecPhoto,
},
{
  id: "v160",
  name: "Tierra del Viento Merlot",
  varietal: "Merlot",
  winery: "Tierra del Viento",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: tierraDelVientoMerlotPhoto,
},
{
  id: "v161",
  name: "Moschini Km1120 Malbec Reserva",
  varietal: "Malbec",
  winery: "Bodega y Viñedos Moschini",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: moschiniKm1120MalbecReservaPhoto,
},
{
  id: "v162",
  name: "Moschini Km1120 Malbec Joven",
  varietal: "Malbec",
  winery: "Bodega y Viñedos Moschini",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: moschiniKm1120MalbecJovenPhoto,
},
{
  id: "v163",
  name: "Moschini Km1120 Merlot",
  varietal: "Merlot",
  winery: "Bodega y Viñedos Moschini",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: moschiniKm1120MerlotPhoto,
},
{
  id: "v164",
  name: "Moschini Km1120 Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega y Viñedos Moschini",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Alto Valle",
  image: moschiniKm1120CabernetFrancPhoto,
},
{
  id: "v165",
  name: "Moschini Dolzó Blanco Natural Dulce",
  varietal: "No especificado",
  winery: "Bodega y Viñedos Moschini",
  style: "Dulce y floral",
  description: "Blanco dulce natural, de aromas florales y frutados intensos (durazno, miel), con buena acidez que equilibra el dulzor. Ideal para acompañar postres o tomar solo, bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: moschiniDolzoBlancoNaturalDulcePhoto,
},
{
  id: "v166",
  name: "Moschini Blanco",
  varietal: "No especificado",
  winery: "Bodega y Viñedos Moschini",
  style: "Fresco y cítrico",
  description: "Blanco fresco de la Patagonia, con acidez natural marcada por el clima frío y ventoso de la región. Notas cítricas y florales, ideal para acompañar mariscos y pescados.",
  availableAt: [],
  tag: "Alto Valle",
  image: moschiniBlancoPhoto,
},
{
  id: "v167",
  name: "Roka Malbec",
  varietal: "Malbec",
  winery: "Bodega Chacra",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraRokaMalbecPhoto,
},
{
  id: "v168",
  name: "Lunita Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Chacra",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraLunitaPinotNoirPhoto,
},
{
  id: "v169",
  name: "Mainqué Chardonnay",
  varietal: "Chardonnay",
  winery: "Bodega Chacra",
  style: "Untuoso y cítrico",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraMainqueChardonnayPhoto,
},
{
  id: "v170",
  name: "Chacra Chardonnay",
  varietal: "Chardonnay",
  winery: "Bodega Chacra",
  style: "Untuoso y cítrico",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraChardonnayPhoto,
},
{
  id: "v171",
  name: "Chacra Cincuenta y Cinco Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Chacra",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca. Línea de viñedo identificada por el año de plantación, \"55\".",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraCincuentaYCincoPinotNoirPhoto,
},
{
  id: "v172",
  name: "Chacra Treinta y Dos Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Chacra",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca. Línea de viñedo identificada por el año de plantación, \"32\", una de las más antiguas y cotizadas de la bodega.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraTreintaYDosPinotNoirPhoto,
},
{
  id: "v173",
  name: "Chacra Trousseau",
  varietal: "Trousseau",
  winery: "Bodega Chacra",
  style: "Ligero y terroso",
  description: "Tinto ligero de color rubí pálido, con aromas a frutos rojos frescos, especias suaves y un carácter terroso. Taninos delicados y acidez marcada, de estilo cercano al Pinot Noir.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraTroussseauPhoto,
},
{
  id: "v174",
  name: "Sin Azufre Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Chacra",
  style: "Delicado y elegante",
  description: "Pinot Noir elaborado sin agregado de sulfitos. Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos, flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraSinAzufrePinotNoirPhoto,
},
{
  id: "v175",
  name: "Barda Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Chacra",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: chacraBardaPinotNoirPhoto,
},
{
  id: "v176",
  name: "A Lisa Malbec",
  varietal: "Malbec",
  winery: "Bodega Noemía",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: noemiaALisaMalbecPhoto,
},
{
  id: "v177",
  name: "J Alberto Malbec",
  varietal: "Malbec",
  winery: "Bodega Noemía",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: noemiaJAlbertoMalbecPhoto,
},
{
  id: "v178",
  name: "Noemía Malbec",
  varietal: "Malbec",
  winery: "Bodega Noemía",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto. Etiqueta insignia de la bodega, de alta cotización.",
  availableAt: [],
  tag: "Alto Valle",
  image: noemiaMalbecPhoto,
},
{
  id: "v179",
  name: "Ferruccio Favretto 70 Años (Malbec y Cabernet Sauvignon)",
  varietal: "Malbec y Cabernet Sauvignon",
  winery: "Bodega Favretto",
  style: "Corte con estructura",
  description: "Corte de Malbec y Cabernet Sauvignon que combina la fruta madura y untuosidad del Malbec con la estructura y frescura herbácea del Cabernet. Tinto de cuerpo medio a alto y buena complejidad.",
  availableAt: [],
  tag: "Alto Valle",
  image: favretto70AniosPhoto,
},
{
  id: "v180",
  name: "Ferruccio Favretto Gran Malbec",
  varietal: "Malbec",
  winery: "Bodega Favretto",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: favrettoGranMalbecPhoto,
},
{
  id: "v181",
  name: "OIR Merlot",
  varietal: "Merlot",
  winery: "Bodega Favretto",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: favrettoOirMerlotPhoto,
},
{
  id: "v182",
  name: "OIR Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega Favretto",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Alto Valle",
  image: favrettoOirCabernetFrancPhoto,
},
{
  id: "v183",
  name: "OIR Sauvignon Blanc",
  varietal: "Sauvignon Blanc",
  winery: "Bodega Favretto",
  style: "Fresco y cítrico",
  description: "Blanco de aromas frescos y herbáceos, con notas cítricas, hierba recién cortada y en ocasiones pomelo. En boca es seco, de acidez marcada y cuerpo liviano, ideal como aperitivo.",
  availableAt: [],
  tag: "Alto Valle",
  image: favrettoOirSauvignonBlancPhoto,
},
{
  id: "v184",
  name: "OIR Syrah",
  varietal: "Syrah",
  winery: "Bodega Favretto",
  style: "Especiado y ahumado",
  description: "Tinto de fruta negra madura (moras, ciruela negra), con notas especiadas y a veces ahumadas. Cuerpo medio a alto, taninos firmes pero maduros.",
  availableAt: [],
  tag: "Alto Valle",
  image: favrettoOirSyrahPhoto,
},
{
  id: "v185",
  name: "OIR Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Favretto",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: favrettoOirPinotNoirPhoto,
},
{
  id: "v186",
  name: "Flor del Prado Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Bodega Flor del Prado",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: florDelPradoPinotNoirPhoto,
},
{
  id: "v187",
  name: "Flor del Prado Chardonnay",
  varietal: "Chardonnay",
  winery: "Bodega Flor del Prado",
  style: "Untuoso y cítrico",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: florDelPradoChardonnayPhoto,
},
{
  id: "v188",
  name: "Flor del Prado Sauvignon Blanc",
  varietal: "Sauvignon Blanc",
  winery: "Bodega Flor del Prado",
  style: "Fresco y cítrico",
  description: "Blanco de aromas frescos y herbáceos, con notas cítricas, hierba recién cortada y en ocasiones pomelo. En boca es seco, de acidez marcada y cuerpo liviano, ideal como aperitivo.",
  availableAt: [],
  tag: "Alto Valle",
  image: florDelPradoSauvignonBlancPhoto,
},
{
  id: "v189",
  name: "Flor del Prado Malbec Rosé",
  varietal: "Rosado",
  winery: "Bodega Flor del Prado",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: florDelPradoMalbecRosePhoto,
},
{
  id: "v190",
  name: "Flor del Prado Malbec",
  varietal: "Malbec",
  winery: "Bodega Flor del Prado",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: florDelPradoMalbecPhoto,
},
{
  id: "v191",
  name: "Flor del Prado Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega Flor del Prado",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Alto Valle",
  image: florDelPradoCabernetFrancPhoto,
},
{
  id: "v192",
  name: "Tormini Blanc de Blancs",
  varietal: "Blend de blancas",
  winery: "Bodega Bonomi y Bernal",
  style: "Corte fresco y floral",
  description: "Blanco de corte, elaborado a partir de más de una variedad blanca. Perfil fresco, con notas cítricas y florales, y buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: bonomiYBernalTorminiBlancDeBlancsPhoto,
},
{
  id: "v193",
  name: "Verziere Malbec",
  varietal: "Malbec",
  winery: "Bodega Bonomi y Bernal",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: bonomiYBernalVerziereMalbecPhoto,
},
{
  id: "v194",
  name: "Selvapiana Blend de Guarda",
  varietal: "Blend",
  winery: "Bodega Bonomi y Bernal",
  style: "Corte con complejidad",
  description: "Corte de varias variedades tintas pensado para la guarda, que combina la fruta y estructura de cada una, buscando equilibrio y complejidad. Cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: bonomiYBernalSelvapianaBlendDeGuardaPhoto,
},
{
  id: "v195",
  name: "Arrayán Gran Pinot",
  varietal: "Pinot Noir",
  winery: "Bodega Pujante Viñedos Patagónicos",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: pujanteArrayanGranPinotPhoto,
},
{
  id: "v196",
  name: "Arrayán Gran Malbec",
  varietal: "Malbec",
  winery: "Bodega Pujante Viñedos Patagónicos",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: pujanteArrayanGranMalbecPhoto,
},
{
  id: "v197",
  name: "Arrayán Malbec Burdeos Eco",
  varietal: "Malbec",
  winery: "Bodega Pujante Viñedos Patagónicos",
  style: "Untuoso e intenso, producción ecológica",
  description: "Malbec de producción ecológica, con el perfil típico de la variedad: color rojo violáceo intenso, aromas a ciruela madura y frutos rojos, taninos suaves y buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: pujanteArrayanMalbecBurdeosEcoPhoto,
},
{
  id: "v198",
  name: "Arrayán Cabernet Franc Malbec Burdeos Eco",
  varietal: "Cabernet Franc y Malbec",
  winery: "Bodega Pujante Viñedos Patagónicos",
  style: "Corte con complejidad, producción ecológica",
  description: "Corte de Cabernet Franc y Malbec de producción ecológica, que combina frescura herbácea y fruta madura. Tinto de cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: pujanteArrayanCabernetFrancMalbecBurdeosEcoPhoto,
},
{
  id: "v199",
  name: "La Voja Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Dominio de Fereneza",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: ferenezaLaVojaPinotNoirPhoto,
},
{
  id: "v200",
  name: "La Voja Chardonnay",
  varietal: "Chardonnay",
  winery: "Dominio de Fereneza",
  style: "Untuoso y cítrico",
  description: "Blanco de cuerpo medio a alto, con aromas a fruta de pepita (manzana, pera) y cítricos, que puede sumar notas de manteca y vainilla si pasa por barrica. Untuoso en boca, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: ferenezaLaVojaChardonnayPhoto,
},
{
  id: "v201",
  name: "La Freneza Pinot Noir",
  varietal: "Pinot Noir",
  winery: "Dominio de Fereneza",
  style: "Delicado y elegante",
  description: "Tinto delicado y elegante, de color rubí claro, con aromas a frutos rojos (cereza, frambuesa), flores y notas terrosas. Cuerpo liviano, taninos suaves y acidez fresca.",
  availableAt: [],
  tag: "Alto Valle",
  image: ferenezaLaFerenezaPinotNoirPhoto,
},
{
  id: "v202",
  name: "La Rufa Pinot Noir Rosé",
  varietal: "Rosado",
  winery: "Dominio de Fereneza",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: ferenezaLaRufaPinotNoirRosePhoto,
},
{
  id: "v203",
  name: "Il Kavaliro",
  varietal: "No especificado",
  winery: "Dominio de Fereneza",
  style: "Vino de autor",
  description: "Vino de autor de la bodega, de perfil de cuerpo medio a alto, elaborado con especial cuidado enológico.",
  availableAt: [],
  tag: "Alto Valle",
  image: ferenezaIlKavaliroPhoto,
},
{
  id: "v204",
  name: "Gérôme Marteau Joven Malbec",
  varietal: "Malbec",
  winery: "Bodega Gérôme Marteau",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauJovenMalbecPhoto,
},
{
  id: "v205",
  name: "Fresca Rosé de Malbec",
  varietal: "Rosado",
  winery: "Bodega Gérôme Marteau",
  style: "Fresco y frutado",
  description: "Rosado fresco de color salmón o frambuesa pálido, con aromas a frutos rojos y flores. Liviano, seco y de acidez viva, ideal para tomar bien frío.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauRoseDeMalbecPhoto,
},
{
  id: "v206",
  name: "Fresca Torrontés Tardío",
  varietal: "Torrontés",
  winery: "Bodega Gérôme Marteau",
  style: "Dulce y floral",
  description: "Blanco de cosecha tardía elaborado con Torrontés, dulce y aromático, con notas florales y de fruta madura. Ideal para acompañar postres.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauTorrontesTardioPhoto,
},
{
  id: "v207",
  name: "Fresca Torrontés",
  varietal: "Torrontés",
  winery: "Bodega Gérôme Marteau",
  style: "Aromático y floral",
  description: "Blanco muy aromático, con notas florales intensas (jazmín, geranio) y de frutas frescas como durazno y uva moscatel. Sorprende por ser seco en boca pese a lo perfumado, con buena acidez.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauTorrontesPhoto,
},
{
  id: "v208",
  name: "Premium Malbec",
  varietal: "Malbec",
  winery: "Bodega Gérôme Marteau",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauPremiumMalbecPhoto,
},
{
  id: "v209",
  name: "Premium Merlot",
  varietal: "Merlot",
  winery: "Bodega Gérôme Marteau",
  style: "Suave y aterciopelado",
  description: "Tinto suave y aterciopelado, con aromas a ciruela, cereza y chocolate. Taninos redondeados y buena estructura, de perfil más amable que otros tintos de guarda.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauPremiumMerlotPhoto,
},
{
  id: "v210",
  name: "Gérôme Marteau Reserva Cabernet Franc",
  varietal: "Cabernet Franc",
  winery: "Bodega Gérôme Marteau",
  style: "Fresco y herbáceo",
  description: "Tinto de perfil más fresco y herbáceo que el Cabernet Sauvignon, con notas a frutos rojos, pimienta y un carácter vegetal elegante. Taninos suaves y acidez viva.",
  availableAt: [],
  tag: "Reserva",
  image: geromeMarteauReservaCabernetFrancPhoto,
},
{
  id: "v211",
  name: "Gérôme Marteau Reserva Malbec",
  varietal: "Malbec",
  winery: "Bodega Gérôme Marteau",
  style: "Untuoso e intenso",
  description: "Variedad insignia de Argentina. Tinto de color rojo violáceo intenso, con aromas a ciruela madura, frutos rojos y negros, y notas especiadas. En boca es untuoso, de taninos suaves y buena acidez, con cuerpo medio a alto.",
  availableAt: [],
  tag: "Reserva",
  image: geromeMarteauReservaMalbecPhoto,
},
{
  id: "v212",
  name: "Rebeca Blend de Terroirs",
  varietal: "Blend",
  winery: "Bodega Gérôme Marteau",
  style: "Corte con complejidad",
  description: "Corte que combina uvas de distintos terroirs de la bodega, buscando equilibrio y complejidad entre los distintos orígenes. Tinto de cuerpo medio a alto.",
  availableAt: [],
  tag: "Alto Valle",
  image: geromeMarteauRebecaDeTerroirsPhoto,
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
    timeframe: "hoy",
  },
  {
    id: "e2",
    title: "Noche de Vinos Patagónicos",
    organizer: "Antigua Bodega Patagónica",
    place: "Vinoteca Olivas y Sabores",
    when: "Sábado · 20:30",
    city: "Viedma",
    benefit: "10% OFF socios",
    timeframe: "finde",
  },
  {
    id: "e3",
    title: "Maridaje en la Vinoteca",
    organizer: "Antigua Bodega Patagónica",
    place: "Vinoteca Olivas y Sabores",
    when: "Este finde · 18:00",
    city: "Viedma",
    benefit: "Entrada libre",
    timeframe: "finde",
  },
];

// ---- Helpers de auditoría (I4–I11) ----

const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const openInMaps = (query: string) => {
  window.open(mapsUrl(query), "_blank", "noopener");
};

// Dirección para el "place" de un evento: primero vinoteca, luego bodega.
const addressForPlace = (place: string): string | null => {
  const shop = SHOPS.find((s) => s.name === place);
  if (shop) return `${shop.address}, ${shop.city}`;
  const winery = WINERIES.find((w) => w.name === place);
  if (winery && winery.address) return `${winery.address}, ${winery.city}`;
  return null;
};

// Campos con valor placeholder (dato no confirmado) que no deben mostrarse.
const isPlaceholderText = (value?: string) =>
  !value || /a confirmar|pendiente|no especificado/i.test(value);

const hasRealVarietal = (varietal?: string) =>
  !!varietal && varietal !== "No especificado";

// Subtítulo "Bodega · Varietal", sin el varietal cuando es placeholder.
const wineSubtitle = (wine: Wine) =>
  hasRealVarietal(wine.varietal)
    ? `${wine.winery} · ${wine.varietal}`
    : wine.winery;

const varietalOrDefault = (varietal: string | undefined, fallback: string) =>
  hasRealVarietal(varietal) ? (varietal as string) : fallback;

// ---- Recomendados de Home ----

const REGION_OF_WINERY: Record<string, RegionKey> = WINERIES.reduce(
  (acc, w) => {
    acc[w.name] = w.region;
    return acc;
  },
  {} as Record<string, RegionKey>
);

const ANTIGUA_NAME = "Antigua Bodega Patagónica";
// Las 4 zonas de RUTA_ZONES distintas de la de Antigua Bodega Patagónica (alto-valle).
const OTHER_ZONES: RegionKey[] = [
  "cordillera",
  "valle-medio",
  "mar",
  "linea-sur",
];

// 10 vinos: los primeros 3 de Antigua, luego 7 repartidos parejo entre las otras
// 4 zonas por round-robin. Criterio dentro de cada zona: orden del array WINES
// (determinístico, estable entre recargas).
const HOME_RECOMMENDED_WINES: Wine[] = (() => {
  const antiguaWines = WINES.filter((w) => w.winery === ANTIGUA_NAME).slice(0, 3);

  const byZone: Record<string, Wine[]> = {};
  OTHER_ZONES.forEach((zone) => {
    byZone[zone] = WINES.filter((w) => REGION_OF_WINERY[w.winery] === zone);
  });

  const picked: Wine[] = [];
  const cursor: Record<string, number> = {};
  OTHER_ZONES.forEach((zone) => {
    cursor[zone] = 0;
  });

  while (picked.length < 7) {
    let progressed = false;
    for (const zone of OTHER_ZONES) {
      if (picked.length >= 7) break;
      const next = byZone[zone][cursor[zone]];
      if (next) {
        picked.push(next);
        cursor[zone] += 1;
        progressed = true;
      }
    }
    if (!progressed) break;
  }

  return [...antiguaWines, ...picked];
})();

// 5 bodegas: Antigua primera, luego la primera bodega (orden del array WINERIES)
// de cada una de las otras 4 zonas.
const HOME_RECOMMENDED_WINERIES: Winery[] = (() => {
  const antigua = WINERIES.find((w) => w.name === ANTIGUA_NAME);
  const rest = OTHER_ZONES.map((zone) =>
    WINERIES.find((w) => w.region === zone)
  ).filter((w): w is Winery => Boolean(w));
  return [...(antigua ? [antigua] : []), ...rest];
})();

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
  const [detailStack, setDetailStack] = useState<DetailEntry[]>([]);
  const detail: DetailState = detailStack[detailStack.length - 1] ?? null;
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    { id: "v1", name: "Miras Pinot Noir Salvaje Curioso", kind: "wine" },
  ]);
  const [search, setSearch] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositions = useRef<number[]>([]);
  const prevStackLen = useRef(0);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setSplashFading(true), 3400);
    const hideTimer = setTimeout(() => setShowSplash(false), 3800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const len = detailStack.length;
    const wentBack = len < prevStackLen.current;
    prevStackLen.current = len;
    el.scrollTop = wentBack ? scrollPositions.current[len] ?? 0 : 0;
  }, [detailStack, tab]);

  const pushDetail = (entry: DetailEntry) =>
    setDetailStack((stack) => {
      if (scrollRef.current) {
        scrollPositions.current[stack.length] = scrollRef.current.scrollTop;
      }
      return [...stack, entry];
    });
  const openWine = (id: string, fromShop?: boolean) =>
    pushDetail({ kind: "wine", id, fromShop });
  const openWinery = (id: string) => pushDetail({ kind: "winery", id });
  const openShop = (id: string) => pushDetail({ kind: "shop", id });
  const closeDetail = () => setDetailStack((stack) => stack.slice(0, -1));
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const goToTab = (nextTab: TabKey) => {
    setDetailStack([]);
    setTab(nextTab);
  };

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
    const current = detailStack[detailStack.length - 1];
    if (!current) return null;
    if (current.kind === "wine") return WINES.find((x) => x.id === current.id);
    if (current.kind === "winery")
      return WINERIES.find((x) => x.id === current.id);
    return SHOPS.find((x) => x.id === current.id);
  }, [detailStack]);

  const results = useMemo(() => {
    const q = search.toLowerCase().trim();

    // Solo se compara contra: nombre de vino, bodega, varietal y nombre de
    // vinoteca. NO contra descripciones largas ni el catálogo completo de la
    // vinoteca (evita falsos positivos tipo "Chacra" por texto de descripción).
    const wines = WINES.filter((w) =>
      [w.name, w.winery, w.varietal].join(" ").toLowerCase().includes(q)
    );

    const wineries = WINERIES.filter((w) =>
      [w.name, ...w.wines].join(" ").toLowerCase().includes(q)
    );

    const shops = SHOPS.filter((s) => s.name.toLowerCase().includes(q));

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
    onProfile={() => goToTab("profile")}
  />
)}

         {!detail && tab !== "agenda" && tab !== "shop" && !(tab in PHOTO_HEADER_CONFIG) && (
  <Header
    currentTab={tab}
    onMenuClick={toggleMenu}
    onProfile={() => goToTab("profile")}
  />
)}

          {showMenu && !detail && (
            <div style={styles.menuDropdown}>
              <button
                style={styles.menuItem}
                onClick={() => {
                  goToTab("profile");
                  setShowMenu(false);
                }}
              >
                Perfil y beneficios
              </button>
              <button
                style={styles.menuItem}
                onClick={() => {
                  goToTab("home");
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
       <AgendaScreen
         onMenuClick={toggleMenu}
         onProfile={() => goToTab("profile")}
       />
     ) : tab === "shop" && !detail ? (
       <ShopScreen
         onOpenWine={(id) => openWine(id, true)}
         onMenuClick={toggleMenu}
         onProfile={() => goToTab("profile")}
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
  ref={scrollRef}
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
                  onOpenWinery={(name) => {
                    const found = WINERIES.find((w) => w.name === name);
                    if (found) openWinery(found.id);
                  }}
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
                onSetTab={goToTab}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ) : tab === "map" ? (
              <MapScreen onOpenWine={openWine} onSetTab={goToTab} />
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
              <WineListScreen onOpenWine={openWine} onSetTab={goToTab} />
            ) : (
              <ProfileScreen favorites={favorites} />
            )}
          </div>
     )}

          {!detail && <BottomNav tab={tab} setTab={goToTab} />}
        </div>
      </div>
    </>
  );
}
const SHOP_TABS = ["Cajas Experiencia", "Vinos", "Cursos"] as const;

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
  onProfile,
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
  onProfile?: () => void;
  cart: CartItem[];
  addToCart: (wine: Wine) => void;
  removeFromCart: (wineId: string) => void;
  updateQuantity: (wineId: string, qty: number) => void;
  clearCart: () => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  const [activeShopTab, setActiveShopTab] =
    useState<(typeof SHOP_TABS)[number]>("Cajas Experiencia");
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
          onProfile={onProfile}
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
          onProfile={onProfile}
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
          onProfile={onProfile}
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
        onProfile={onProfile}
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
  onProfile,
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
  onProfile?: () => void;
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
          title: "Cajas Experiencia",
          subtitle: "La provincia entera, en una caja.",
        }
      : activeShopTab === "Cursos"
      ? {
          title: "Cursos de Vino",
          subtitle: "Aprendé, descubrí y viví el vino Rionegrino.",
        }
      : {
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
      <PhotoHeader
        {...headerConfig}
        imageUrl={tiendaHeaderPhoto}
        onMenuClick={onMenuClick}
        onProfile={onProfile}
      />
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
  onProfile,
}: {
  currentTab: TabKey;
  onMenuClick: () => void;
  onProfile?: () => void;
}) {
 const title = currentTab === "profile" ? "Perfil" : "Buscar vinos";

  return (
    <div style={styles.header}>
      <div style={{ ...styles.headerTopRow, justifyContent: "space-between" }}>
        <button style={styles.menuButton} onClick={onMenuClick}>
          <MenuIcon />
        </button>
        {onProfile && (
          <button
            style={styles.menuButton}
            onClick={onProfile}
            aria-label="Perfil"
          >
            <PersonIcon />
          </button>
        )}
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
  onProfile,
  gradient,
  height = 230,
  backgroundSize = "cover",
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
  onMenuClick: () => void;
  onProfile?: () => void;
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
        <div style={styles.rowGap8}>
          {onProfile && (
            <button
              style={styles.glassButton}
              onClick={onProfile}
              aria-label="Perfil"
            >
              <PersonIcon />
            </button>
          )}
          <div style={styles.glassLogoBadge}>
            <img
              src={logoIcon}
              alt="Vinos de Río Negro"
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
          </div>
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
        {HOME_RECOMMENDED_WINES.map((wine) => (
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
        {HOME_RECOMMENDED_WINERIES.map((w) => (
          <div key={w.id} style={styles.horizontalImageCard}>
            <ImageCard
              title={w.name}
              subtitle={w.distance ? `${w.city} · ${w.distance}` : w.city}
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
  const varietals = Array.from(
    new Set(WINES.map((w) => w.varietal).filter(hasRealVarietal))
  );
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
  const hasQuery = search.trim().length > 0;
  const noResults =
    hasQuery &&
    !results.wines.length &&
    !results.wineries.length &&
    !results.shops.length;

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
        {["Pinot Noir", "Malbec", "Miras", "Chacra"].map((chip) => (
          <button key={chip} style={styles.chip} onClick={() => setSearch(chip)}>
            {chip}
          </button>
        ))}
      </div>

      {noResults ? (
        <div style={styles.card}>
          <div style={styles.itemTitle}>
            No encontramos resultados para tu búsqueda
          </div>
          <div style={styles.placeText}>
            Probá con el nombre de un vino, una bodega, un varietal o una
            vinoteca.
          </div>
        </div>
      ) : (
        <>
          {(!hasQuery || results.wines.length > 0) && (
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
          )}

          {(!hasQuery || results.wineries.length > 0) && (
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
          )}

          {(!hasQuery || results.shops.length > 0) && (
            <Block title="Dónde comprar">
              <div style={styles.stack12}>
                {results.shops.map((item) => (
                  <ResultRow
                    key={item.id}
                    title={item.name}
                    subtitle={
                      isPlaceholderText(item.benefit)
                        ? item.city
                        : `${item.city} · ${item.benefit}`
                    }
                    onClick={() => onOpenShop(item.id)}
                  />
                ))}
              </div>
            </Block>
          )}
        </>
      )}
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
          <div style={styles.wineVisualSub}>{wineSubtitle(wine)}</div>
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

      <SectionTitle
        title="Vinos cerca tuyo"
        action="Ver todos"
        onAction={() => onSetTab("winelist")}
      />

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
      subtitle={wineSubtitle(wine)}
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

const AGENDA_FILTERS: Array<{ key: EventTimeframe; label: string }> = [
  { key: "ahora", label: "Ahora" },
  { key: "hoy", label: "Hoy" },
  { key: "finde", label: "Este finde" },
];

const timeframeLabel = (tf: EventTimeframe) =>
  AGENDA_FILTERS.find((f) => f.key === tf)?.label ?? "";

function AgendaScreen({
  onMenuClick,
  onProfile,
}: {
  onMenuClick: () => void;
  onProfile?: () => void;
}) {
  const [filter, setFilter] = useState<EventTimeframe>("hoy");
  const [openEvent, setOpenEvent] = useState<EventItem | null>(null);
  const shownEvents = EVENTS.filter((e) => e.timeframe === filter);
  const nextEvent = shownEvents[0];

  const agendaScrollRef = useRef<HTMLDivElement>(null);
  const listScrollPos = useRef(0);

  useLayoutEffect(() => {
    const el = agendaScrollRef.current;
    if (!el) return;
    el.scrollTop = openEvent ? 0 : listScrollPos.current;
  }, [openEvent]);

  if (openEvent) {
    return (
      <>
        <PhotoHeader
          imageUrl={eventHeaderImage(openEvent.place)}
          title={openEvent.title}
          subtitle={`${openEvent.place} · ${openEvent.city}`}
          onMenuClick={onMenuClick}
          onProfile={onProfile}
        />
        <div ref={agendaScrollRef} style={styles.sheetSurface}>
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
        onProfile={onProfile}
      />
      <div ref={agendaScrollRef} style={styles.sheetSurface}>
        <div style={styles.stack22}>
          <div style={styles.gradientCard}>
            <div style={styles.locationStatusRow}>
              <span style={styles.locationDot} />
              <span style={styles.locationEyebrow}>Hoy en Río Negro</span>
            </div>
            <div style={styles.locationGreeting}>
              {shownEvents.length === 1
                ? "1 evento cerca tuyo"
                : `${shownEvents.length} eventos cerca tuyo`}
            </div>
            {nextEvent && (
              <div style={styles.locationBody}>
                {nextEvent.title} · {nextEvent.place} · {nextEvent.when}
              </div>
            )}
          </div>

          <div style={styles.rowGap10Wrap}>
            {AGENDA_FILTERS.map((f) => (
              <button
                key={f.key}
                style={filter === f.key ? styles.chipActive : styles.chip}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {shownEvents.length === 0 ? (
            <div style={styles.card}>
              <div style={styles.itemTitle}>Sin actividades</div>
              <div style={styles.placeText}>
                No hay actividades para este momento. Probá con otro filtro.
              </div>
            </div>
          ) : (
            shownEvents.map((e) => (
              <div key={e.id} style={styles.card}>
                <div style={styles.rowBetweenTop}>
                  <div>
                    <div style={styles.itemTitle}>{e.title}</div>
                    <div style={styles.itemSub}>
                      {e.organizer ? `${e.organizer} · ` : ""}
                      {e.place} · {e.city}
                    </div>
                  </div>
                  <Badge kind="neutral">{timeframeLabel(e.timeframe)}</Badge>
                </div>

                <div style={styles.grid2}>
                  <InfoBox label="Horario" value={e.when} />
                  <InfoBox label="Beneficio" value={e.benefit} />
                </div>

                <button
                  style={styles.primaryButton}
                  onClick={() => {
                    listScrollPos.current =
                      agendaScrollRef.current?.scrollTop ?? 0;
                    setOpenEvent(e);
                  }}
                >
                  Ver actividad
                </button>
              </div>
            ))
          )}
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
  const eventAddress = addressForPlace(event.place);

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

        {eventAddress && (
          <button
            style={{ ...styles.primaryButton, width: "100%" }}
            onClick={() => openInMaps(eventAddress)}
          >
            Quiero ir →
          </button>
        )}
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
  onOpenWinery,
  onOpenWine,
  toggleFavorite,
  isFavorite,
  fromShop,
  onAddToCart,
}: {
  wine: Wine;
  onBack: () => void;
  onOpenShop: (id: string) => void;
  onOpenWinery: (name: string) => void;
  onOpenWine: (name: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  fromShop?: boolean;
  onAddToCart: (wine: Wine) => void;
}) {
  const [justAdded, setJustAdded] = useState(false);

  const originWinery = WINERIES.find((w) => w.name === wine.winery);

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

  const availableShops = wine.availableAt
    .map((name) => SHOPS.find((s) => s.name === name))
    .filter((s): s is Shop => Boolean(s));

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
            {originWinery ? (
              <button
                style={styles.wineryLinkButton}
                onClick={() => onOpenWinery(wine.winery)}
              >
                {wine.winery}
              </button>
            ) : (
              wine.winery
            )}
            {hasRealVarietal(wine.varietal) ? ` · ${wine.varietal}` : ""}
          </div>

          <div style={styles.grid3}>
            {hasRealVarietal(wine.varietal) && (
              <InfoBox label="Varietal" value={wine.varietal} />
            )}
            <InfoBox label="Estilo" value={wine.style} />
            <InfoBox label="Origen" value="Río Negro" />
          </div>

          <div style={styles.placeText}>{wine.description || wine.note}</div>
        </div>
      </div>

      {originWinery && (
        <Block title="Bodega de origen">
          <ResultRow
            title={originWinery.name}
            subtitle={`${originWinery.city} · ${
              REGION_META[originWinery.region].title
            }`}
            onClick={() => onOpenWinery(originWinery.name)}
          />
        </Block>
      )}

      {fromShop ? (
        <div style={styles.wineCartCard}>
          <div style={styles.wineCartCardLabel}>Disponible en nuestra Tienda</div>
          <button style={styles.wineCartCardButton} onClick={handleAddToCart}>
            {justAdded ? "✓ Agregado" : "Agregar al carrito"}
          </button>
        </div>
      ) : (
        <Block title="Disponible en">
          {availableShops.length > 0 ? (
            <div style={styles.stack12}>
              {availableShops.map((found) => (
                <ResultRow
                  key={found.id}
                  title={found.name}
                  subtitle={
                    isPlaceholderText(found.benefit)
                      ? found.city
                      : `${found.city} · ${found.benefit}`
                  }
                  onClick={() => onOpenShop(found.id)}
                />
              ))}
            </div>
          ) : (
            <div style={styles.placeText}>Sin distribución confirmada</div>
          )}
        </Block>
      )}

      <Block title="También te pueden gustar">
        <div style={styles.wineCardGrid}>
          {similar.map((w) => (
            <WineGridCard
              key={w.id}
              image={w.image}
              title={w.name}
              subtitle={varietalOrDefault(w.varietal, "Vino")}
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
  const winesRef = useRef<HTMLDivElement>(null);

  const varietals = Array.from(
    new Set(
      winery.wines
        .map((w) => WINES.find((x) => x.name === w)?.varietal)
        .filter((v): v is string => hasRealVarietal(v))
    )
  );

  const directionsQuery = winery.address
    ? `${winery.address}, ${winery.city}`
    : null;

  const contactInfo = (
    [
      { label: "Dirección", value: winery.address },
      { label: "Horario de atención", value: winery.hours },
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
          {directionsQuery && (
            <button
              style={{ ...styles.secondarySoftButton, flex: 1 }}
              onClick={() => openInMaps(directionsQuery)}
            >
              Cómo llegar
            </button>
          )}
          <button
            style={{ ...styles.primaryButton, flex: 2 }}
            onClick={() =>
              winesRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Ver vinos →
          </button>
        </div>
      </div>

      {contactInfo.length > 0 && (
        <Block title="Dirección y horario">
          <div style={styles.stack12}>
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

      <div ref={winesRef}>
        <SectionTitle title="Vinos destacados" />
        <div style={styles.wineCardGrid}>
          {winery.wines.map((w) => {
            const wineData = WINES.find((x) => x.name === w);
            return (
              <WineGridCard
                key={w}
                image={wineData?.image || ""}
                title={w}
                subtitle={varietalOrDefault(wineData?.varietal, "Vino")}
                onClick={() => onOpenWine(w)}
              />
            );
          })}
        </div>
      </div>

      <Block title="Dónde conseguir sus vinos">
        {winery.shops.length > 0 ? (
          <div style={styles.stack12}>
            {winery.shops.map((s) => {
              const shop = SHOPS.find((x) => x.name === s);
              return (
                <ResultRow
                  key={s}
                  title={s}
                  subtitle={
                    shop
                      ? `${shop.address}, ${shop.city}`
                      : "Dirección a confirmar"
                  }
                  onClick={() => onOpenShop(s)}
                />
              );
            })}
          </div>
        ) : (
          <div style={styles.placeText}>Sin distribución confirmada</div>
        )}
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
            {shop.distance ? `${shop.city} · ${shop.distance}` : shop.city}
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
            <button
              style={{ ...styles.primaryButton, flex: 1 }}
              onClick={() => openInMaps(`${shop.address}, ${shop.city}`)}
            >
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

function PersonIcon() {
  return svgBase(
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
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
  wineryLinkButton: {
    border: 0,
    background: "transparent",
    padding: 0,
    margin: 0,
    color: theme.river,
    font: "inherit",
    fontWeight: 700,
    textDecoration: "underline",
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
