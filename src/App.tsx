import React, { useEffect, useMemo, useState } from "react";

type RegionKey =
  | "alto-valle"
  | "valle-medio"
  | "valle-inferior"
  | "linea-sur";

type Winery = {
  id: string;
  name: string;
  city: string;
  region: RegionKey;
  description: string;
  hours: string;
  openNow: boolean;
  wines: string[];
  shops: string[];
  activity: string;
  benefit: string;
  rating: number;
  distance: string;
  image: string;
};

type Shop = {
  id: string;
  name: string;
  city: string;
  description: string;
  hours: string;
  openNow: boolean;
  wines: string[];
  benefit: string;
  rating: number;
  distance: string;
  image: string;
};

type Wine = {
  id: string;
  name: string;
  varietal: string;
  winery: string;
  style: string;
  note: string;
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
};

type FavoriteItem = {
  id: string;
  name: string;
  city?: string;
  kind: "wine" | "winery" | "shop";
};

type TabKey = "home" | "map" | "search" | "agenda" | "bodegas" | "profile";

type DetailState =
  | { kind: "wine"; id: string }
  | { kind: "winery"; id: string }
  | { kind: "shop"; id: string }
  | null;

const theme = {
  backgroundTop: "#f7f0eb",
  backgroundBottom: "#f4e7e5",
  surface: "#fffdfb",
  card: "#fffdfb",
  primary: "#6f1d2b",
  primaryDark: "#4f1320",
  accentLeaf: "#a9b679",
  accentLeafSoft: "#dbe3c0",
  accentGrape: "#dfbcc5",
  text: "#1f1815",
  secondaryText: "#7f7065",
  border: "#eadfd5",
  borderSoft: "#efe5dc",
  successBg: "#eef5e5",
  successText: "#5b6a34",
  successBorder: "#dce7bc",
  dangerBg: "#f6e8eb",
  dangerText: "#8a4252",
  dangerBorder: "#ead0d7",
  neutralBg: "#f5f1eb",
  neutralText: "#53473e",
  neutralBorder: "#eadfd5",
};

const REGION_META: Record<
  RegionKey,
  {
    title: string;
    subtitle: string;
    image: string;
    tint: string;
  }
> = {
  "alto-valle": {
    title: "Alto Valle",
    subtitle: "La región vitivinícola más consolidada de Río Negro.",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(169,182,121,0.20)",
  },
  "valle-medio": {
    title: "Valle Medio",
    subtitle: "Historia, familia y vinos con identidad propia.",
    image:
      "https://images.unsplash.com/photo-1464638681273-0962e9b53566?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(223,188,197,0.22)",
  },
  "valle-inferior": {
    title: "Valle Inferior",
    subtitle: "Vinos con impronta atlántica y nuevas experiencias.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(169,182,121,0.18)",
  },
  "linea-sur": {
    title: "Línea Sur",
    subtitle: "Territorio preparado para seguir creciendo.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    tint: "rgba(223,188,197,0.18)",
  },
};

const WINERIES: Winery[] = [
  {
    id: "w1",
    name: "Bodega Miras",
    city: "Mainqué",
    region: "alto-valle",
    description:
      "Bodega patagónica enfocada en Pinot Noir, visitas y degustaciones con identidad local.",
    hours: "10:00 a 18:00",
    openNow: true,
    wines: ["Miras Pinot Noir", "Miras Joven Malbec"],
    shops: ["Vinoteca del Río", "Patagonia Wine House"],
    activity: "Degustación hoy 19:00",
    benefit: "15% OFF socios",
    rating: 4.8,
    distance: "245 km",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "w2",
    name: "Bodega Aniello",
    city: "Mainqué",
    region: "alto-valle",
    description:
      "Proyecto del Alto Valle con experiencias, música en vivo y vinos muy buscados.",
    hours: "11:00 a 19:00",
    openNow: false,
    wines: ["Aniello 006", "Aniello Pinot Noir"],
    shops: ["Vinoteca del Río", "Patagonia Wine House"],
    activity: "Música en vivo sábado 20:30",
    benefit: "10% OFF socios",
    rating: 4.7,
    distance: "248 km",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "w3",
    name: "Humberto Canale",
    city: "General Roca",
    region: "alto-valle",
    description:
      "Bodega histórica de Río Negro con etiquetas emblemáticas y visitas guiadas.",
    hours: "09:00 a 17:00",
    openNow: true,
    wines: ["Old Vineyard Pinot Noir", "Gran Reserva Malbec"],
    shops: ["Vinoteca del Río"],
    activity: "Visita guiada mañana 11:00",
    benefit: "Copa de regalo para socios",
    rating: 4.9,
    distance: "285 km",
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "w4",
    name: "Bodega Videla Dorna",
    city: "Luis Beltrán",
    region: "valle-medio",
    description:
      "Bodega familiar del Valle Medio, ligada a la historia vitivinícola regional y al desarrollo del vino con fuerte raíz territorial.",
    hours: "10:30 a 17:30",
    openNow: true,
    wines: ["Calfulen Pinot Noir", "Calfulen Malbec Reserva"],
    shops: ["Vinoteca del Río", "Patagonia Wine House"],
    activity: "Visita guiada y experiencia campestre",
    benefit: "10% OFF socios",
    rating: 4.8,
    distance: "170 km",
    image:
      "https://images.unsplash.com/photo-1502741126161-b048400d85b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "w5",
    name: "Wapisa",
    city: "San Javier",
    region: "valle-inferior",
    description:
      "Bodega del Valle Inferior con impronta atlántica, vinos frescos y una propuesta singular vinculada al mar.",
    hours: "11:00 a 18:00",
    openNow: true,
    wines: ["Wapisa Pinot Noir", "Wapisa Sauvignon Blanc"],
    shops: ["Vinoteca del Río", "Patagonia Wine House"],
    activity: "Recorrido y degustación con perfil oceánico",
    benefit: "Beneficio especial para socios",
    rating: 4.9,
    distance: "32 km",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
];

const SHOPS: Shop[] = [
  {
    id: "s1",
    name: "Vinoteca del Río",
    city: "Viedma",
    description:
      "Selección de vinos patagónicos, catas guiadas y beneficios para miembros.",
    hours: "10:00 a 13:00 y 17:00 a 21:00",
    openNow: true,
    wines: [
      "Miras Pinot Noir",
      "Aniello 006",
      "Old Vineyard Pinot Noir",
      "Calfulen Pinot Noir",
      "Wapisa Pinot Noir",
    ],
    benefit: "10% OFF socios",
    rating: 4.8,
    distance: "1.2 km",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "s2",
    name: "Patagonia Wine House",
    city: "Viedma",
    description:
      "Vinoteca boutique con etiquetas regionales, recomendaciones y experiencias.",
    hours: "11:00 a 20:30",
    openNow: true,
    wines: [
      "Miras Joven Malbec",
      "Aniello Pinot Noir",
      "Calfulen Malbec Reserva",
      "Wapisa Sauvignon Blanc",
    ],
    benefit: "2x1 en degustación jueves",
    rating: 4.7,
    distance: "2.7 km",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
  },
];

const WINES: Wine[] = [
  {
    id: "v1",
    name: "Miras Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Bodega Miras",
    style: "Elegante y fresco",
    note: "Fruta roja, acidez equilibrada y perfil patagónico ideal para regalar.",
    availableAt: ["Vinoteca del Río", "Patagonia Wine House"],
    tag: "Ideal para regalar",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v2",
    name: "Aniello 006",
    varietal: "Merlot",
    winery: "Bodega Aniello",
    style: "Amable y redondo",
    note: "Muy versátil, ideal para una cena y uno de los más buscados.",
    availableAt: ["Vinoteca del Río"],
    tag: "Muy buscado",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v3",
    name: "Old Vineyard Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Humberto Canale",
    style: "Complejo y largo",
    note: "Etiqueta clásica, con personalidad y excelente estructura.",
    availableAt: ["Vinoteca del Río"],
    tag: "Reserva",
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v4",
    name: "Miras Joven Malbec",
    varietal: "Malbec",
    winery: "Bodega Miras",
    style: "Frutado y amable",
    note: "Entrada ideal al mundo del vino rionegrino, fresco y accesible.",
    availableAt: ["Patagonia Wine House"],
    tag: "Recomendado",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v5",
    name: "Aniello Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Bodega Aniello",
    style: "Suave y expresivo",
    note: "Una etiqueta muy patagónica, perfecta para quienes buscan algo delicado.",
    availableAt: ["Patagonia Wine House"],
    tag: "Descubrimiento",
    image:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v6",
    name: "Calfulen Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Bodega Videla Dorna",
    style: "Patagónico y delicado",
    note: "Expresa la elegancia del Valle Medio con fruta fresca, tensión y perfil refinado.",
    availableAt: ["Vinoteca del Río"],
    tag: "Valle Medio",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v7",
    name: "Calfulen Malbec Reserva",
    varietal: "Malbec",
    winery: "Bodega Videla Dorna",
    style: "Estructurado y profundo",
    note: "Malbec con carácter, historia y una impronta muy marcada del valle rionegrino.",
    availableAt: ["Patagonia Wine House"],
    tag: "Reserva",
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v8",
    name: "Wapisa Pinot Noir",
    varietal: "Pinot Noir",
    winery: "Wapisa",
    style: "Fresco y oceánico",
    note: "Pinot Noir de perfil atlántico, con tensión, frescura y una identidad distinta dentro de Río Negro.",
    availableAt: ["Vinoteca del Río"],
    tag: "Atlántico",
    image:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "v9",
    name: "Wapisa Sauvignon Blanc",
    varietal: "Sauvignon Blanc",
    winery: "Wapisa",
    style: "Vibrante y salino",
    note: "Blanco de gran frescura, con perfil costero y expresión singular del Valle Inferior.",
    availableAt: ["Patagonia Wine House"],
    tag: "Costa atlántica",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80",
  },
];

const EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Degustación de Pinot Noir",
    place: "Bodega Miras",
    when: "Hoy · 19:00",
    city: "Mainqué",
    benefit: "15% OFF socios",
  },
  {
    id: "e2",
    title: "Cata guiada Patagonia",
    place: "Vinoteca del Río",
    when: "Hoy · 20:30",
    city: "Viedma",
    benefit: "1 copa de regalo",
  },
  {
    id: "e3",
    title: "Música en vivo + vinos",
    place: "Bodega Aniello",
    when: "Sábado · 20:30",
    city: "Mainqué",
    benefit: "10% OFF socios",
  },
];

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

      @keyframes splashLogoIn {
        0% {
          opacity: 0;
          transform: scale(0.82) translateY(12px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @keyframes floatSoft {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
        100% { transform: translateY(0px); }
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: ${theme.backgroundTop};
      }

      button, input {
        font-family: "Manrope", sans-serif;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background: #d9cbc3;
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
    { id: "v1", name: "Miras Pinot Noir", kind: "wine" },
  ]);
  const [search, setSearch] = useState("Pinot Noir");
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "granted" | "error"
  >("idle");
  const [locationError, setLocationError] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<RegionKey | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tab !== "bodegas") {
      setSelectedRegion(null);
    }
  }, [tab]);

  const openWine = (id: string) => setDetail({ kind: "wine", id });
  const openWinery = (id: string) => setDetail({ kind: "winery", id });
  const openShop = (id: string) => setDetail({ kind: "shop", id });
  const closeDetail = () => setDetail(null);

  const requestUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      setLocationError("Tu navegador no soporta geolocalización.");
      return;
    }

    setLocationStatus("loading");
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationStatus("granted");
      },
      () => {
        setLocationStatus("error");
        setLocationError("No pudimos obtener tu ubicación.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === item.id)
        ? prev.filter((f) => f.id !== item.id)
        : [...prev, item]
    );
  };

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
    return { wines, wineries, shops };
  }, [search]);

  if (showSplash) {
    return (
      <>
        <GlobalStyles />
        <SplashScreen />
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div style={styles.page}>
        <div style={styles.backgroundPaintA} />
        <div style={styles.backgroundPaintB} />
        <div style={styles.backgroundArt} />

        <div style={styles.phone}>
          <Header
            currentTab={tab}
            onSearchClick={() => setTab("search")}
            onMenuClick={() => setShowMenu((prev) => !prev)}
          />

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

          <div style={styles.content}>
            {detail && detailView ? (
              detail.kind === "wine" ? (
                <WineDetail
                  wine={detailView as Wine}
                  onBack={closeDetail}
                  onOpenShop={openShop}
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />
              ) : detail.kind === "winery" ? (
                <WineryDetail
                  winery={detailView as Winery}
                  onBack={closeDetail}
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
                requestUserLocation={requestUserLocation}
              />
            ) : tab === "map" ? (
              <MapScreen
                userLocation={userLocation}
                locationStatus={locationStatus}
                locationError={locationError}
                requestUserLocation={requestUserLocation}
              />
            ) : tab === "search" ? (
              <SearchScreen
                search={search}
                setSearch={setSearch}
                results={results}
                onOpenWine={openWine}
                onOpenWinery={openWinery}
                onOpenShop={openShop}
              />
            ) : tab === "agenda" ? (
              <AgendaScreen />
            ) : tab === "bodegas" ? (
              selectedRegion ? (
                <RegionWineriesScreen
                  region={selectedRegion}
                  onBack={() => setSelectedRegion(null)}
                  onOpenWinery={openWinery}
                />
              ) : (
                <RegionsScreen onOpenRegion={setSelectedRegion} />
              )
            ) : (
              <ProfileScreen favorites={favorites} />
            )}
          </div>

          {!detail && <BottomNav tab={tab} setTab={setTab} />}
        </div>
      </div>
    </>
  );
}

function Header({
  currentTab,
  onSearchClick,
  onMenuClick,
}: {
  currentTab: TabKey;
  onSearchClick: () => void;
  onMenuClick: () => void;
}) {
  return (
    <div style={styles.header}>
      <div style={styles.headerTopRow}>
        <button style={styles.menuButton} onClick={onMenuClick}>
          <MenuIcon />
        </button>
      </div>

      <div style={styles.headerBrandRow}>
        <img src="/Grapes.png" alt="Arte uvas" style={styles.headerBrandArt} />
        <div style={styles.headerTitle}>Viví el Vino Rionegrino</div>
      </div>

      {currentTab !== "search" && (
        <button style={styles.searchBar} onClick={onSearchClick}>
          <SearchIcon />
          <span style={{ color: theme.secondaryText, fontSize: 14 }}>
            Busca tu vino, bodega o experiencia
          </span>
        </button>
      )}
    </div>
  );
}

function SplashScreen() {
  return (
    <div style={styles.splashPage}>
      <div style={styles.splashGlowOne} />
      <div style={styles.splashGlowTwo} />
      <img src="/Grapes.png" alt="Arte uvas" style={styles.splashArt} />

      <div style={styles.splashLogoWrap}>
        <img src="/logo-app.png" style={styles.splashLogo} alt="Logo app" />
      </div>
    </div>
  );
}

function HomeScreen({
  onOpenWine,
  onOpenWinery,
  onOpenShop,
  onSetTab,
  favorites,
  toggleFavorite,
  requestUserLocation,
}: {
  onOpenWine: (id: string) => void;
  onOpenWinery: (id: string) => void;
  onOpenShop: (id: string) => void;
  onSetTab: (tab: TabKey) => void;
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  requestUserLocation: () => void;
}) {
  const handleQuickAction = (title: string) => {
    if (title === "Bodegas cerca") return onSetTab("map");
    if (title === "Buscar un vino") return onSetTab("search");
    if (title === "Eventos hoy") return onSetTab("agenda");
    if (title === "Club del vino") return onSetTab("profile");
  };

  const handleEventClick = (place: string) => {
    if (place === "Bodega Miras") return onOpenWinery("w1");
    if (place === "Bodega Aniello") return onOpenWinery("w2");
    if (place === "Vinoteca del Río") return onOpenShop("s1");
    onSetTab("agenda");
  };

  return (
    <div style={styles.stack18}>
      <div style={styles.heroCard}>
        <img src="/Grapes.png" alt="Arte uvas" style={styles.heroArtImage} />
        <div style={styles.heroBadge}>La Ruta del Vino en tu celular</div>
        <div style={styles.heroTitle}>Vinos y actividades en un solo lugar</div>
        <div style={styles.heroText}>
          Descubrí bodegas, vinotecas, vinos y beneficios con una experiencia más
          cálida, artesanal y rionegrina.
        </div>

        <div style={styles.rowGap10Wrap}>
          <button
            style={styles.primaryLightButton}
            onClick={() => {
              requestUserLocation();
              onSetTab("map");
            }}
          >
            Explorar mapa
          </button>
          <button
            style={styles.secondarySoftButton}
            onClick={() => onSetTab("agenda")}
          >
            Qué pasa hoy
          </button>
        </div>
      </div>

      <div style={styles.grid2}>
        {[
          ["Bodegas cerca", <WineIcon key="wine" />],
          ["Buscar un vino", <SearchIcon key="search" />],
          ["Eventos hoy", <SparklesIcon key="sparkles" />],
          ["Club del vino", <TicketIcon key="ticket" />],
        ].map(([title, icon]) => (
          <div
            key={String(title)}
            style={{ ...styles.card, cursor: "pointer" }}
            onClick={() => handleQuickAction(String(title))}
          >
            <div style={styles.iconBadge}>{icon}</div>
            <div style={{ ...styles.itemTitle, marginTop: 12 }}>{title}</div>
            <div style={styles.itemSub}>Acceso rápido</div>
          </div>
        ))}
      </div>

      <SectionTitle
        title="Actividades destacadas"
        action="Ver todo"
        onAction={() => onSetTab("agenda")}
      />

      <div style={styles.stack12}>
        {EVENTS.slice(0, 2).map((e) => (
          <div
            key={e.id}
            style={{ ...styles.card, cursor: "pointer" }}
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
        title="Bodegas recomendadas"
        action="Ver mapa"
        onAction={() => onSetTab("map")}
      />

      <div style={styles.stack12}>
        {WINERIES.map((w) => (
          <ImageCard
            key={w.id}
            title={w.name}
            subtitle={`${w.city} · ${w.distance} · ★ ${w.rating}`}
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
        ))}
      </div>

      <SectionTitle
        title="Vinos recomendados"
        action="Ver mapa"
        onAction={() => onSetTab("map")}
      />

      <div style={styles.stack12}>
        {WINES.map((wine) => (
          <ImageCard
            key={wine.id}
            title={wine.name}
            subtitle={`${wine.winery} · ${wine.varietal}`}
            description={wine.note}
            feature={wine.style}
            image={wine.image}
            badge={<Badge kind="benefit">{wine.tag}</Badge>}
            onFavorite={(e) => {
              e.stopPropagation();
              toggleFavorite({
                id: wine.id,
                name: wine.name,
                kind: "wine",
              });
            }}
            favoriteActive={favorites.some((f) => f.id === wine.id)}
            onClick={() => onOpenWine(wine.id)}
          />
        ))}
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

function RegionsScreen({
  onOpenRegion,
}: {
  onOpenRegion: (region: RegionKey) => void;
}) {
  const regionOrder: RegionKey[] = [
    "alto-valle",
    "valle-medio",
    "valle-inferior",
    "linea-sur",
  ];

  return (
    <div style={styles.stack18}>
      <SectionTitle title="Descubrí por región" />
      <div style={styles.stack12}>
        {regionOrder.map((region) => {
          const wineries = WINERIES.filter((w) => w.region === region);
          const meta = REGION_META[region];

          return (
            <div
              key={region}
              style={styles.imageCard}
              onClick={() => onOpenRegion(region)}
            >
              <div
                style={{
                  ...styles.regionCardTop,
                  backgroundImage: `linear-gradient(180deg, rgba(16,10,9,0.12), rgba(24,12,12,0.58)), url('${meta.image}')`,
                }}
              >
                <img
                  src="/Grapes.png"
                  alt="Arte uvas"
                  style={styles.regionArtImage}
                />

                <div
                  style={{
                    ...styles.regionPill,
                    background: meta.tint,
                  }}
                >
                  {wineries.length} {wineries.length === 1 ? "bodega" : "bodegas"}
                </div>

                <div>
                  <div style={styles.imageCardTitle}>{meta.title}</div>
                  <div style={styles.imageCardSub}>{meta.subtitle}</div>
                </div>
              </div>

              <div style={styles.imageCardBody}>
                <div style={styles.placeText}>
                  Explorá las bodegas de esta región y conocé sus vinos, propuestas
                  y experiencias.
                </div>
                <div style={styles.rowBetweenCenter}>
                  <div style={styles.featureText}>Ver bodegas</div>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RegionWineriesScreen({
  region,
  onBack,
  onOpenWinery,
}: {
  region: RegionKey;
  onBack: () => void;
  onOpenWinery: (id: string) => void;
}) {
  const wineries = WINERIES.filter((w) => w.region === region);
  const meta = REGION_META[region];

  return (
    <div style={styles.stack18}>
      <div style={styles.rowBetweenCenter}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeftIcon /> Volver
        </button>
      </div>

      <div style={styles.card}>
        <div style={styles.sectionTitle}>{meta.title}</div>
        <div style={styles.placeText}>{meta.subtitle}</div>
      </div>

      {wineries.length ? (
        <div style={styles.stack12}>
          {wineries.map((w) => (
            <div
              key={w.id}
              style={styles.imageCard}
              onClick={() => onOpenWinery(w.id)}
            >
              <div
                style={{
                  ...styles.imageCardTop,
                  backgroundImage: `linear-gradient(180deg, rgba(16,10,9,0.10), rgba(24,12,12,0.58)), url('${w.image}')`,
                }}
              >
                <div style={styles.bodegaLogoBadge}>{w.name}</div>

                <div>
                  <div style={styles.imageCardTitle}>{w.name}</div>
                  <div style={styles.imageCardSub}>
                    {w.city} · ★ {w.rating}
                  </div>
                </div>
              </div>

              <div style={styles.imageCardBody}>
                <div style={styles.placeText}>{w.description}</div>
                <div style={styles.rowBetweenCenter}>
                  <div style={styles.featureText}>{w.activity}</div>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.card}>
          <div style={styles.itemTitle}>Próximamente</div>
          <div style={styles.placeText}>
            Dejé esta región lista para completar cuando sumemos una bodega
            verificada de Línea Sur.
          </div>
        </div>
      )}
    </div>
  );
}

function MapScreen({
  userLocation,
  locationStatus,
  locationError,
  requestUserLocation,
}: {
  userLocation: { lat: number; lng: number } | null;
  locationStatus: "idle" | "loading" | "granted" | "error";
  locationError: string;
  requestUserLocation: () => void;
}) {
  const [filter, setFilter] = useState("Todos");

  const openGoogleMaps = () => {
    if (userLocation) {
      const url = `https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}`;
      window.open(url, "_blank");
      return;
    }
    requestUserLocation();
  };

  return (
    <div style={styles.stack18}>
      <div style={styles.rowBetweenCenter}>
        <div style={styles.chipsRow}>
          {["Todos", "Bodegas", "Vinotecas", "Eventos", "Hoy"].map((item) => (
            <button
              key={item}
              style={filter === item ? styles.chipActive : styles.chip}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button style={styles.secondaryButton} onClick={requestUserLocation}>
          {locationStatus === "loading" ? "Buscando..." : "Mi ubicación"}
        </button>
      </div>

      <div style={{ ...styles.card, padding: 0, overflow: "hidden" }}>
        <div style={styles.mapArea}>
          <img src="/Grapes.png" alt="Arte uvas" style={styles.mapArtImage} />
          <button style={styles.primaryButton} onClick={openGoogleMaps}>
            Abrir mapa real
          </button>
        </div>

        <div style={{ padding: 18 }}>
          <div style={styles.mapOverlayEyebrow}>Mapa activo</div>

          {locationStatus === "granted" && userLocation ? (
            <>
              <div style={styles.mapOverlayTitle}>Ubicación detectada</div>
              <div style={styles.itemSub}>
                Lat {userLocation.lat.toFixed(4)} · Lng{" "}
                {userLocation.lng.toFixed(4)}
              </div>
              <div style={styles.placeText}>
                Ya podemos usar tu ubicación y abrir Google Maps con tu posición real.
              </div>
            </>
          ) : locationStatus === "error" ? (
            <>
              <div style={styles.mapOverlayTitle}>No pudimos ubicarte</div>
              <div style={styles.placeText}>{locationError}</div>
            </>
          ) : (
            <>
              <div style={styles.mapOverlayTitle}>Activá tu ubicación</div>
              <div style={styles.placeText}>
                Permití acceso a tu ubicación para abrir un mapa real cerca tuyo.
              </div>
            </>
          )}

          <div style={styles.grid3}>
            <Metric label="Estado" value={locationStatus} />
            <Metric label="Bodegas" value="5" />
            <Metric label="Vinotecas" value="2" />
          </div>
        </div>
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
    <div style={styles.stack18}>
      <div style={styles.card}>
        <div style={styles.searchInputWrap}>
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
            placeholder="Buscá un vino, bodega o vinoteca"
          />
        </div>

        <div style={{ ...styles.chipsRow, marginTop: 12 }}>
          {["Noemía", "Wapisa", "Malbec", "vino para regalo"].map((chip) => (
            <button
              key={chip}
              style={styles.chip}
              onClick={() => setSearch(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <Block title="Vinos">
        {results.wines.length ? (
          results.wines.map((wine) => (
            <ResultRow
              key={wine.id}
              title={wine.name}
              subtitle={`${wine.winery} · ${wine.varietal}`}
              tag={wine.tag}
              onClick={() => onOpenWine(wine.id)}
            />
          ))
        ) : (
          <Empty text="No encontramos vinos con esa búsqueda." />
        )}
      </Block>

      <Block title="Bodegas">
        {results.wineries.length ? (
          results.wineries.map((item) => (
            <ResultRow
              key={item.id}
              title={item.name}
              subtitle={`${item.city} · ${REGION_META[item.region].title}`}
              onClick={() => onOpenWinery(item.id)}
            />
          ))
        ) : (
          <Empty text="No encontramos bodegas." />
        )}
      </Block>

      <Block title="Dónde comprar">
        {results.shops.length ? (
          results.shops.map((item) => (
            <ResultRow
              key={item.id}
              title={item.name}
              subtitle={`${item.city} · ${item.benefit}`}
              onClick={() => onOpenShop(item.id)}
            />
          ))
        ) : (
          <Empty text="No encontramos vinotecas." />
        )}
      </Block>
    </div>
  );
}

function AgendaScreen() {
  const [filter, setFilter] = useState("Hoy");

  return (
    <div style={styles.stack18}>
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
                {e.place} · {e.city}
              </div>
            </div>
            <Badge kind="neutral">{filter}</Badge>
          </div>

          <div style={styles.grid2}>
            <InfoBox label="Horario" value={e.when} />
            <InfoBox label="Beneficio" value={e.benefit} />
          </div>

          <button style={styles.primaryButton}>Ver actividad</button>
        </div>
      ))}
    </div>
  );
}

function ProfileScreen({ favorites }: { favorites: FavoriteItem[] }) {
  return (
    <div style={styles.stack18}>
      <div style={styles.profileHeroCard}>
        <img src="/Grapes.png" alt="Arte uvas" style={styles.profileArtImage} />
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

      <div style={styles.notificationPreviewCard}>
        <div style={styles.itemTitle}>Notificación ejemplo</div>
        <div style={styles.placeText}>
          “El vino que buscabas ya está disponible. Miras Pinot Noir volvió a
          Vinoteca del Río. Aprovechá: 10% OFF por ser miembro.”
        </div>
      </div>

      {favorites.length > 0 && (
        <Block title="Tus guardados">
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
        </Block>
      )}

      <Block title="Beneficios disponibles">
        {[
          "10% OFF en Vinoteca del Río",
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
      </Block>
    </div>
  );
}

function WineDetail({
  wine,
  onBack,
  onOpenShop,
  toggleFavorite,
  isFavorite,
}: {
  wine: Wine;
  onBack: () => void;
  onOpenShop: (id: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  const similar = WINES.filter(
    (w) =>
      w.id !== wine.id &&
      (w.varietal === wine.varietal || w.winery === wine.winery)
  ).slice(0, 2);

  return (
    <div style={styles.stack18}>
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
        <div style={styles.wineBottleArea}>
          <div style={styles.bottleMockLarge} />
        </div>
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

          <div style={styles.placeText}>{wine.note}</div>
        </div>
      </div>

      <Block title="Disponible en">
        {wine.availableAt.length ? (
          wine.availableAt.map((name) => {
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
          })
        ) : (
          <>
            <div style={styles.card}>
              <div style={styles.itemTitle}>{wine.winery}</div>
              <div style={styles.itemSub}>Bodega</div>
              <div style={styles.placeText}>
                No disponible en vinotecas cercanas ahora.
              </div>
            </div>

            <Block title="También te pueden gustar">
              {similar.map((w) => (
                <ResultRow
                  key={w.id}
                  title={w.name}
                  subtitle={`${w.winery} · ${w.varietal}`}
                  tag={w.tag}
                />
              ))}
            </Block>
          </>
        )}
      </Block>
    </div>
  );
}

function WineryDetail({
  winery,
  onBack,
  onOpenWine,
  onOpenShop,
  toggleFavorite,
  isFavorite,
}: {
  winery: Winery;
  onBack: () => void;
  onOpenWine: (name: string) => void;
  onOpenShop: (name: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}) {
  return (
    <div style={styles.stack18}>
      <div style={styles.rowBetweenCenter}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeftIcon /> Volver
        </button>
        <button
          style={styles.secondaryButton}
          onClick={() =>
            toggleFavorite({
              id: winery.id,
              name: winery.name,
              city: winery.city,
              kind: "winery",
            })
          }
        >
          <HeartIcon active={isFavorite(winery.id)} />{" "}
          {isFavorite(winery.id) ? "Guardado" : "Guardar"}
        </button>
      </div>

      <div style={styles.detailImageCard}>
        <div
          style={{
            ...styles.detailImageTop,
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.58)), url('${winery.image}')`,
          }}
        >
          <div>
            <div style={styles.imageCardTitle}>{winery.name}</div>
            <div style={styles.imageCardSub}>
              {winery.city} · {REGION_META[winery.region].title}
            </div>
          </div>
        </div>
        <div style={styles.imageCardBody}>
          <div style={styles.rowGap8}>
            <Badge kind={winery.openNow ? "open" : "closed"}>
              {winery.openNow ? "Abierta ahora" : "Cerrada ahora"}
            </Badge>
            <Badge kind="benefit">{winery.benefit}</Badge>
          </div>

          <div style={styles.placeText}>{winery.description}</div>

          <div style={styles.grid2}>
            <InfoBox label="Horario" value={winery.hours} />
            <InfoBox label="Región" value={REGION_META[winery.region].title} />
          </div>

          <div style={styles.rowGap10}>
            <button style={{ ...styles.primaryButton, flex: 1 }}>
              Cómo llegar
            </button>
            <button style={{ ...styles.secondaryButton, flex: 1 }}>
              Ver vinos
            </button>
          </div>
        </div>
      </div>

      <Block title="Vinos destacados">
        {winery.wines.map((w) => (
          <ResultRow
            key={w}
            title={w}
            subtitle={WINES.find((x) => x.name === w)?.varietal || "Vino"}
            onClick={() => onOpenWine(w)}
          />
        ))}
      </Block>

      <Block title="Dónde conseguir sus vinos">
        {winery.shops.map((s) => (
          <ResultRow
            key={s}
            title={s}
            subtitle={`${SHOPS.find((x) => x.name === s)?.city || "Viedma"} · ${
              SHOPS.find((x) => x.name === s)?.benefit || ""
            }`}
            onClick={() => onOpenShop(s)}
          />
        ))}
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
    <div style={styles.stack18}>
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
            ...styles.detailImageTop,
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.58)), url('${shop.image}')`,
          }}
        >
          <div>
            <div style={styles.imageCardTitle}>{shop.name}</div>
            <div style={styles.imageCardSub}>
              {shop.city} · {shop.distance}
            </div>
          </div>
        </div>
        <div style={styles.imageCardBody}>
          <div style={styles.rowGap8}>
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

          <div style={styles.rowGap10}>
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
        {shop.wines.map((w) => (
          <ResultRow
            key={w}
            title={w}
            subtitle={`${WINES.find((x) => x.name === w)?.winery || ""}`}
            onClick={() => onOpenWine(w)}
          />
        ))}
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
    { key: "search", label: "Buscar", icon: <SearchIcon /> },
    { key: "agenda", label: "Agenda", icon: <CalendarIcon /> },
    { key: "bodegas", label: "Bodegas", icon: <WineIcon /> },
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
              <span style={styles.navLabel}>{item.label}</span>
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

function Empty({ text }: { text: string }) {
  return <div style={styles.card}>{text}</div>;
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

function TicketIcon() {
  return svgBase(
    <>
      <path d="M3 9a2 2 0 1 0 0 4v5h18v-5a2 2 0 1 0 0-4V4H3z" />
      <path d="M13 4v14" />
    </>
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

function CheckIcon({ white = false }: { white?: boolean }) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <path d="M5 12l4 4 10-10" />
        </>
      )}
    </span>
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
        fill={active ? theme.primary : "transparent"}
        d="M12 20s-7-4.4-9-8.7C1.4 8 3.2 5 6.6 5c2 0 3.1 1 5.4 3.4C14.3 6 15.4 5 17.4 5 20.8 5 22.6 8 21 11.3 19 15.6 12 20 12 20z"
      />
      <path d="M12 20s-7-4.4-9-8.7C1.4 8 3.2 5 6.6 5c2 0 3.1 1 5.4 3.4C14.3 6 15.4 5 17.4 5 20.8 5 22.6 8 21 11.3 19 15.6 12 20 12 20z" />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: `linear-gradient(180deg, ${theme.backgroundTop} 0%, ${theme.backgroundBottom} 100%)`,
    display: "flex",
    justifyContent: "center",
    padding: 18,
    boxSizing: "border-box",
    fontFamily: '"Manrope", sans-serif',
    position: "relative",
    overflow: "hidden",
  },
  backgroundPaintA: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(223,188,197,0.18)",
    top: -70,
    left: -90,
    filter: "blur(28px)",
  },
  backgroundPaintB: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    background: "rgba(169,182,121,0.16)",
    bottom: -50,
    right: -60,
    filter: "blur(28px)",
  },
  backgroundArt: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(223,188,197,0.25) 1px, transparent 1px)",
    backgroundSize: "22px 22px",
    opacity: 0.28,
    pointerEvents: "none",
  },
  phone: {
    width: "100%",
    maxWidth: 410,
    height: "92vh",
    maxHeight: 860,
    background: "rgba(255,253,251,0.94)",
    border: `1px solid ${theme.border}`,
    borderRadius: 36,
    overflow: "hidden",
    boxShadow: "0 22px 70px rgba(74, 31, 43, 0.12)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backdropFilter: "blur(10px)",
  },
  header: {
    padding: "16px 18px 18px 18px",
    background: "rgba(255,253,251,0.94)",
    borderBottom: `1px dashed ${theme.border}`,
    position: "relative",
    zIndex: 4,
  },
  headerTopRow: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 8,
  },
  headerBrandRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  headerBrandArt: {
    width: 28,
    height: 28,
    objectFit: "contain",
    opacity: 0.75,
  },
  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 16,
    border: `1px solid ${theme.border}`,
    background: theme.card,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: theme.text,
    boxShadow: "0 10px 24px rgba(74, 31, 43, 0.06)",
  },
  menuDropdown: {
    position: "absolute",
    top: 78,
    left: 18,
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: 22,
    boxShadow: "0 14px 30px rgba(74, 31, 43, 0.12)",
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
  headerTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 34,
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -1.1,
    lineHeight: 1.02,
  },
  searchBar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 16,
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    background: "rgba(255,255,255,0.92)",
    boxShadow: "0 8px 24px rgba(40,24,22,0.05)",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    overflowY: "auto",
    padding: "18px 16px 16px 16px",
  },
  stack18: {
    display: "grid",
    gap: 18,
  },
  stack12: {
    display: "grid",
    gap: 12,
  },
  rowGap12: {
    display: "flex",
    gap: 12,
  },
  rowGap10: {
    display: "flex",
    gap: 10,
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
    padding: "11px 15px",
    fontSize: 13,
    fontWeight: 700,
    border: `1px solid ${theme.border}`,
    background: theme.card,
    color: theme.secondaryText,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  chipActive: {
    borderRadius: 999,
    padding: "11px 15px",
    fontSize: 13,
    fontWeight: 700,
    border: `1px solid ${theme.primary}`,
    background: theme.primary,
    color: "#fff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  heroCard: {
    border: `1px solid rgba(111,29,43,0.22)`,
    borderRadius: 30,
    padding: 22,
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, rgba(79,19,32,0.94), rgba(111,29,43,0.88) 48%, rgba(130,54,73,0.84) 100%)",
    boxShadow: "0 20px 40px rgba(73,20,34,0.16)",
  },
  heroArtImage: {
    position: "absolute",
    top: 10,
    right: -10,
    width: 180,
    opacity: 0.14,
    pointerEvents: "none",
  },
  heroBadge: {
    position: "relative",
    zIndex: 2,
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "8px 13px",
    fontSize: 12,
    fontWeight: 700,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  heroTitle: {
    position: "relative",
    zIndex: 2,
    marginTop: 16,
    fontFamily: '"Playfair Display", serif',
    fontSize: 34,
    lineHeight: 1.02,
    fontWeight: 700,
    letterSpacing: -1.2,
    maxWidth: 300,
  },
  heroText: {
    position: "relative",
    zIndex: 2,
    marginTop: 12,
    fontSize: 15,
    color: "rgba(255,255,255,0.88)",
    lineHeight: 1.55,
    maxWidth: 300,
  },
  primaryButton: {
    marginTop: 14,
    borderRadius: 999,
    padding: "12px 18px",
    border: `1px solid ${theme.primaryDark}`,
    background: theme.primaryDark,
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  primaryLightButton: {
    marginTop: 14,
    borderRadius: 999,
    padding: "12px 18px",
    border: "1px solid #fff",
    background: "#fff",
    color: theme.text,
    fontWeight: 700,
    cursor: "pointer",
  },
  secondaryButton: {
    marginTop: 14,
    borderRadius: 999,
    padding: "12px 18px",
    border: `1px solid ${theme.border}`,
    background: theme.card,
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
    border: "1px solid rgba(255,255,255,0.22)",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  backButton: {
    borderRadius: 999,
    padding: "12px 18px",
    border: `1px solid ${theme.border}`,
    background: theme.card,
    color: theme.text,
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 10px 24px rgba(74, 31, 43, 0.06)",
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
    background: `linear-gradient(135deg, ${theme.card}, #f8f1ec)`,
    border: `1px solid ${theme.border}`,
    borderRadius: 28,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    padding: 16,
  },
  sectionTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 23,
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -0.5,
  },
  sectionAction: {
    border: 0,
    background: "transparent",
    color: theme.primary,
    fontWeight: 700,
    cursor: "pointer",
  },
  itemTitle: {
    fontWeight: 800,
    color: theme.text,
    fontSize: 15,
  },
  itemSub: {
    marginTop: 4,
    color: theme.secondaryText,
    fontSize: 14,
  },
  itemMeta: {
    marginTop: 10,
    color: theme.text,
    fontSize: 14,
  },
  placeText: {
    marginTop: 12,
    color: "#60554b",
    lineHeight: 1.6,
    fontSize: 14,
  },
  featureText: {
    color: theme.primary,
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
    background: theme.neutralBg,
    color: theme.neutralText,
    border: `1px solid ${theme.neutralBorder}`,
  },
  badgeOpen: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: theme.successBg,
    color: theme.successText,
    border: `1px solid ${theme.successBorder}`,
  },
  badgeClosed: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: theme.dangerBg,
    color: theme.dangerText,
    border: `1px solid ${theme.dangerBorder}`,
  },
  badgeBenefit: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#f3ebef",
    color: theme.primary,
    border: "1px solid #ead3db",
  },
  imageCard: {
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    cursor: "pointer",
  },
  imageCardTop: {
    height: 188,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    right: -8,
    width: 150,
    opacity: 0.12,
    pointerEvents: "none",
  },
  imageCardBody: {
    padding: 16,
  },
  imageCardTitle: {
    fontFamily: '"Playfair Display", serif',
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
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f6f1eb",
    color: theme.text,
  },
  iconBadgeWine: {
    width: 42,
    height: 42,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.primary,
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
  bodegaLogoBadge: {
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 16,
    padding: "8px 12px",
    fontSize: 12,
    fontWeight: 800,
    background: "rgba(255,255,255,0.88)",
    color: theme.primary,
    border: "1px solid rgba(255,255,255,0.9)",
    animation: "floatSoft 5s ease-in-out infinite",
  },
  mapArea: {
    height: 420,
    width: "100%",
    background: "linear-gradient(180deg, #f3eadf 0%, #e9ddcf 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  mapArtImage: {
    position: "absolute",
    right: -10,
    top: 20,
    width: 190,
    opacity: 0.12,
    pointerEvents: "none",
  },
  mapOverlayEyebrow: {
    fontSize: 11,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: theme.secondaryText,
    fontWeight: 700,
  },
  mapOverlayTitle: {
    marginTop: 6,
    fontFamily: '"Playfair Display", serif',
    fontSize: 28,
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -0.6,
  },
  metricBox: {
    background: "#faf6f0",
    border: `1px solid ${theme.border}`,
    borderRadius: 18,
    padding: 12,
  },
  metricLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: theme.secondaryText,
    fontWeight: 700,
  },
  metricValue: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 800,
    color: theme.text,
  },
  searchInputWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    background: "#fff",
  },
  input: {
    border: 0,
    outline: "none",
    width: "100%",
    fontSize: 15,
    background: "transparent",
    color: theme.text,
  },
  resultRow: {
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: 26,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    padding: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  profileHeroCard: {
    background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})`,
    border: "1px solid rgba(111,29,43,0.35)",
    borderRadius: 28,
    padding: 18,
    color: "#fff",
    display: "grid",
    gap: 16,
    position: "relative",
    overflow: "hidden",
  },
  profileArtImage: {
    position: "absolute",
    right: -10,
    top: 8,
    width: 170,
    opacity: 0.10,
    pointerEvents: "none",
  },
  membershipEyebrow: {
    fontSize: 13,
    color: "rgba(255,255,255,0.76)",
    fontWeight: 700,
  },
  membershipTitle: {
    marginTop: 6,
    fontFamily: '"Playfair Display", serif',
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
  notificationPreviewCard: {
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: 28,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    padding: 16,
  },
  infoBox: {
    background: "#faf6f0",
    border: `1px solid ${theme.border}`,
    borderRadius: 18,
    padding: 14,
  },
  infoLabel: {
    fontSize: 12,
    color: theme.secondaryText,
    fontWeight: 700,
  },
  infoValue: {
    marginTop: 6,
    color: theme.text,
    fontWeight: 800,
    fontSize: 14,
  },
  detailTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: 31,
    lineHeight: 1.02,
    fontWeight: 700,
    color: theme.text,
    letterSpacing: -0.9,
    marginTop: 10,
  },
  wineHeroCard: {
    background: theme.card,
    border: `1px solid ${theme.border}`,
    borderRadius: 28,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
    overflow: "hidden",
  },
  wineBottleArea: {
    background: "linear-gradient(135deg,#f7efe8,#efe2d6)",
    padding: 24,
    display: "flex",
    justifyContent: "center",
  },
  wineInfoArea: {
    padding: 18,
  },
  bottleMockLarge: {
    width: 92,
    height: 160,
    borderRadius: 30,
    background: `linear-gradient(180deg, ${theme.primary}, ${theme.primaryDark})`,
    boxShadow: "0 12px 30px rgba(33,22,16,0.18)",
  },
  detailImageCard: {
    background: theme.card,
    border: `1px solid ${theme.border}`,
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
  bottomNavWrap: {
    padding: 14,
    borderTop: `1px dashed ${theme.border}`,
    background: "rgba(255,253,251,0.94)",
  },
  bottomNav: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 8,
    padding: 8,
    borderRadius: 28,
    background: theme.card,
    border: `1px solid ${theme.border}`,
    boxShadow: "0 14px 34px rgba(89, 36, 47, 0.08)",
  },
  navItem: {
    border: 0,
    borderRadius: 20,
    padding: "10px 4px",
    background: "transparent",
    color: theme.secondaryText,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  navItemActive: {
    border: 0,
    borderRadius: 20,
    padding: "10px 4px",
    background: theme.primaryDark,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: 700,
  },
  splashPage: {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(180deg, ${theme.backgroundTop} 0%, ${theme.backgroundBottom} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  splashGlowOne: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    background: "rgba(223,188,197,0.20)",
    filter: "blur(30px)",
    top: 80,
    left: 40,
  },
  splashGlowTwo: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: "50%",
    background: "rgba(169,182,121,0.18)",
    filter: "blur(30px)",
    bottom: 90,
    right: 40,
  },
  splashArt: {
    position: "absolute",
    width: 240,
    opacity: 0.10,
    top: 120,
    right: 40,
    pointerEvents: "none",
  },
  splashLogoWrap: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  splashLogo: {
    width: 150,
    height: "auto",
    animation: "splashLogoIn 1.4s ease-out",
  },
};
