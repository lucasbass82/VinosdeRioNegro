import React, { useMemo, useState } from "react";

type Winery = {
  id: string;
  name: string;
  city: string; 
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

type TabKey = "home" | "map" | "search" | "agenda" | "profile";
type DetailState =
  | { kind: "wine"; id: string }
  | { kind: "winery"; id: string }
  | { kind: "shop"; id: string }
  | null;

const WINERIES: Winery[] = [
  {
    id: "w1",
    name: "Bodega Miras",
    city: "Mainqué",
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
    wines: ["Miras Pinot Noir", "Aniello 006", "Old Vineyard Pinot Noir"],
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
    wines: ["Miras Joven Malbec", "Aniello Pinot Noir"],
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

const quickChips = [
  "Cerca mío",
  "Pinot Noir",
  "Abiertas ahora",
  "Con descuento",
];

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
    if (detail.kind === "winery")
      return WINERIES.find((x) => x.id === detail.id);
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
      [w.name, w.city, w.description, ...w.wines]
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

  return (
    <div style={styles.page}>
      <div style={styles.phone}>
        <Header currentTab={tab} onSearchClick={() => setTab("search")} />

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
              onOpenWinery={openWinery}
              onOpenShop={openShop}
              onSetTab={setTab}
              setSearch={setSearch}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              requestUserLocation={requestUserLocation}
            />
          ) : tab === "map" ? (
            <MapScreen
              onOpenWinery={openWinery}
              onOpenShop={openShop}
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
          ) : (
            <ProfileScreen favorites={favorites} />
          )}
        </div>

        {!detail && <BottomNav tab={tab} setTab={setTab} />}
      </div>
    </div>
  );
}

function Header({
  currentTab,
  onSearchClick,
}: {
  currentTab: TabKey;
  onSearchClick: () => void;
}) {
  return (
    <div style={styles.header}>
      <div style={styles.headerEyebrow}>VINOS DE RIO NEGROOO</div>
      <div style={styles.headerTitle}>Descubrí Viedma</div>

      {currentTab !== "search" && (
        <button style={styles.searchBar} onClick={onSearchClick}>
          <SearchIcon />
          <span style={{ color: "#8a7d71", fontSize: 14 }}>
            Buscá vinos, bodegas o vinotecas
          </span>
        </button>
      )}
    </div>
  );
}

function HomeScreen({
  onOpenWinery,
  onOpenShop,
  onSetTab,
  setSearch,
  favorites,
  toggleFavorite,
  requestUserLocation,
}: {
  onOpenWinery: (id: string) => void;
  onOpenShop: (id: string) => void;
  onSetTab: (tab: TabKey) => void;
  setSearch: (value: string) => void;
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  requestUserLocation: () => void;
}) {
  const handleChipClick = (chip: string) => {
    if (chip === "Cerca mío") {
      requestUserLocation();
      onSetTab("map");
      return;
    }
    if (chip === "Pinot Noir") {
      setSearch("Pinot Noir");
      onSetTab("search");
      return;
    }
    if (chip === "Abiertas ahora") {
      setSearch("abiertas");
      onSetTab("search");
      return;
    }
    if (chip === "Con descuento") {
      setSearch("descuento");
      onSetTab("search");
      return;
    }
  };

  const handleQuickAction = (title: string) => {
    if (title === "Bodegas cerca") {
      onSetTab("map");
      return;
    }
    if (title === "Buscar un vino") {
      onSetTab("search");
      return;
    }
    if (title === "Eventos hoy") {
      onSetTab("agenda");
      return;
    }
    if (title === "Club del vino") {
      onSetTab("profile");
      return;
    }
  };

  const handleEventClick = (place: string) => {
    if (place === "Bodega Miras") {
      onOpenWinery("w1");
      return;
    }
    if (place === "Bodega Aniello") {
      onOpenWinery("w2");
      return;
    }
    if (place === "Vinoteca del Río") {
      onOpenShop("s1");
      return;
    }
    onSetTab("agenda");
  };

  return (
    <div style={styles.stack16}>
      <div style={styles.chipsRow}>
        {quickChips.map((chip) => (
          <button
            key={chip}
            style={styles.chip}
            onClick={() => handleChipClick(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      <div
        style={{
          ...styles.heroCard,
          backgroundImage:
            "linear-gradient(135deg, rgba(33,25,20,0.82), rgba(111,29,43,0.86)), url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={styles.heroBadge}>Experiencias cerca tuyo</div>
        <div style={styles.heroTitle}>
          Vino, lugares y actividades en un solo lugar
        </div>
        <div style={styles.heroText}>
          Descubrí bodegas, vinotecas, vinos y beneficios en Viedma.
        </div>
        <div style={styles.rowGap10Wrap}>
          <button
            style={styles.primaryLightButton}
            onClick={() => onSetTab("map")}
          >
            Explorar mapa
          </button>
          <button
            style={styles.secondaryDarkButton}
            onClick={() => onSetTab("agenda")}
          >
            Qué pasa hoy
          </button>
        </div>
      </div>

      <div style={styles.grid2}>
        {[
          ["Bodegas cerca", <WineIcon />],
          ["Buscar un vino", <SearchIcon />],
          ["Eventos hoy", <SparklesIcon />],
          ["Club del vino", <TicketIcon />],
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
          <div
            key={w.id}
            style={styles.imageCard}
            onClick={() => onOpenWinery(w.id)}
          >
            <div
              style={{
                ...styles.imageCardTop,
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.62)), url('${w.image}')`,
              }}
            >
              <div style={styles.rowBetweenTop}>
                <div style={styles.rowGap8}>
                  <Badge kind={w.openNow ? "open" : "closed"}>
                    {w.openNow ? "Abierta" : "Cerrada"}
                  </Badge>
                </div>
                <button
                  style={styles.iconGlassButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite({
                      id: w.id,
                      name: w.name,
                      city: w.city,
                      kind: "winery",
                    });
                  }}
                >
                  <HeartIcon active={favorites.some((f) => f.id === w.id)} />
                </button>
              </div>

              <div>
                <div style={styles.imageCardTitle}>{w.name}</div>
                <div style={styles.imageCardSub}>
                  {w.city} · {w.distance} · ★ {w.rating}
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
    </div>
  );
}

function MapScreen({
  onOpenWinery,
  onOpenShop,
  userLocation,
  locationStatus,
  locationError,
  requestUserLocation,
}: {
  onOpenWinery: (id: string) => void;
  onOpenShop: (id: string) => void;
  userLocation: { lat: number; lng: number } | null;
  locationStatus: "idle" | "loading" | "granted" | "error";
  locationError: string;
  requestUserLocation: () => void;
}) {
  const [filter, setFilter] = useState("Todos");

  const defaultCenter: [number, number] = [-40.8135, -62.9967];
  const mapCenter: [number, number] = userLocation
    ? [userLocation.lat, userLocation.lng]
    : defaultCenter;

  const wineryPoints = [
    {
      id: "w1",
      name: "Bodega Miras",
      position: [-40.76, -63.02] as [number, number],
    },
    {
      id: "w2",
      name: "Bodega Aniello",
      position: [-40.79, -63.01] as [number, number],
    },
  ];

  const shopPoints = [
    {
      id: "s1",
      name: "Vinoteca del Río",
      position: [-40.81, -62.99] as [number, number],
    },
    {
      id: "s2",
      name: "Patagonia Wine House",
      position: [-40.805, -63.005] as [number, number],
    },
  ];

  return (
    <div style={styles.stack16}>
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
        <div style={{ height: 420, width: "100%" }}>
    <div style={{ height: 420, width: "100%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <button onClick={() => window.open("https://www.google.com/maps", "_blank")}>
    Abrir mapa real
  </button>
</div>     
  ) ;
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
    <div style={styles.stack16}>
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
          {["Noemía", "Saurus", "Malbec", "vino para regalo"].map((chip) => (
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
              subtitle={item.city}
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
    <div style={styles.stack16}>
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
    <div style={styles.stack16}>
      <div style={styles.profileHeroCard}>
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
          “El vino que buscabas ya está disponible 🍷 Miras Pinot Noir volvió a
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
          "Copa de bienvenida en eventos adheridos",
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
    <div style={styles.stack16}>
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
            <InfoBox label="Ciudad" value="Viedma" />
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
    <div style={styles.stack16}>
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
              {winery.city} · {winery.distance}
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
            <InfoBox label="Beneficio" value={winery.benefit} />
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
    <div style={styles.stack16}>
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
    { key: "profile", label: "Perfil", icon: <UserIcon /> },
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

function QuickActionCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div style={styles.card}>
      <div style={styles.iconBadge}>{icon}</div>
      <div style={{ ...styles.itemTitle, marginTop: 12 }}>{title}</div>
      <div style={styles.itemSub}>Acceso rápido</div>
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

function MapPin({
  top,
  left,
  color,
  children,
  onClick,
}: {
  top: string;
  left: string;
  color: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      style={{
        ...styles.mapPin,
        top,
        left,
        background: color,
      }}
      onClick={onClick}
    >
      {children}
    </button>
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
function UserIcon() {
  return svgBase(
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
    </>
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
function StoreIcon({ white = false }: { white?: boolean }) {
  return (
    <span style={{ color: white ? "#fff" : "currentColor" }}>
      {svgBase(
        <>
          <path d="M3 9l2-5h14l2 5" />
          <path d="M4 9h16v12H4z" />
          <path d="M9 21v-6h6v6" />
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
        fill={active ? "#a11d43" : "transparent"}
        d="M12 20s-7-4.4-9-8.7C1.4 8 3.2 5 6.6 5c2 0 3.1 1 5.4 3.4C14.3 6 15.4 5 17.4 5 20.8 5 22.6 8 21 11.3 19 15.6 12 20 12 20z"
      />
      <path d="M12 20s-7-4.4-9-8.7C1.4 8 3.2 5 6.6 5c2 0 3.1 1 5.4 3.4C14.3 6 15.4 5 17.4 5 20.8 5 22.6 8 21 11.3 19 15.6 12 20 12 20z" />
    </>
  );
}
function StarIcon({ filled = false }: { filled?: boolean }) {
  return svgBase(
    <>
      <path
        fill={filled ? "currentColor" : "transparent"}
        d="m12 3 2.8 5.7L21 9.6l-4.5 4.3 1 6.1L12 17l-5.5 3 1-6.1L3 9.6l6.2-.9L12 3z"
      />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg,#f5f0ea,#efe7de)",
    display: "flex",
    justifyContent: "center",
    padding: 18,
    boxSizing: "border-box",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },
  phone: {
    width: "100%",
    maxWidth: 410,
    height: "92vh",
    maxHeight: 860,
    background: "#fcfaf7",
    border: "1px solid #eadfd4",
    borderRadius: 36,
    overflow: "hidden",
    boxShadow: "0 24px 80px rgba(33,22,16,0.14)",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: 18,
    background: "rgba(252,250,247,0.95)",
    borderBottom: "1px solid #ede4da",
  },
  headerEyebrow: {
    fontSize: 11,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    color: "#8b7b70",
    marginBottom: 6,
    fontWeight: 700,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 800,
    color: "#211914",
    letterSpacing: -0.7,
    marginBottom: 12,
  },
  searchBar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 18,
    border: "1px solid #e9dfd5",
    background: "#fff",
    boxShadow: "0 4px 18px rgba(17,12,9,0.04)",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    overflowY: "auto",
    padding: 16,
  },
  stack16: {
    display: "grid",
    gap: 16,
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
  center: {
    textAlign: "center",
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
    border: "1px solid #e7ddd3",
    background: "#fff",
    color: "#65584e",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  chipActive: {
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 700,
    border: "1px solid #211914",
    background: "#211914",
    color: "#fff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  heroCard: {
    border: "1px solid #5f1830",
    borderRadius: 24,
    padding: 20,
    color: "#fff",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  heroTitle: {
    marginTop: 12,
    fontSize: 31,
    lineHeight: 1.02,
    fontWeight: 800,
    letterSpacing: -1.1,
    maxWidth: 280,
  },
  heroText: {
    marginTop: 10,
    fontSize: 14,
    color: "rgba(255,255,255,0.86)",
    lineHeight: 1.55,
    maxWidth: 290,
  },
  primaryButton: {
    marginTop: 14,
    borderRadius: 16,
    padding: "12px 16px",
    border: "1px solid #211914",
    background: "#211914",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  primaryLightButton: {
    marginTop: 14,
    borderRadius: 16,
    padding: "12px 16px",
    border: "1px solid #fff",
    background: "#fff",
    color: "#211914",
    fontWeight: 700,
    cursor: "pointer",
  },
  secondaryButton: {
    marginTop: 14,
    borderRadius: 16,
    padding: "12px 16px",
    border: "1px solid #e7ddd3",
    background: "#fff",
    color: "#211914",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  secondaryDarkButton: {
    marginTop: 14,
    borderRadius: 16,
    padding: "12px 16px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  backButton: {
    borderRadius: 16,
    padding: "12px 16px",
    border: "1px solid #e7ddd3",
    background: "#fff",
    color: "#211914",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
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
    background: "#fff",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#221914",
    letterSpacing: -0.3,
  },
  sectionAction: {
    border: 0,
    background: "transparent",
    color: "#7d2237",
    fontWeight: 700,
    cursor: "pointer",
  },
  itemTitle: {
    fontWeight: 800,
    color: "#211914",
    fontSize: 15,
  },
  itemSub: {
    marginTop: 4,
    color: "#8b7b70",
    fontSize: 14,
  },
  itemMeta: {
    marginTop: 10,
    color: "#211914",
    fontSize: 14,
  },
  ratingText: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    color: "#8b7b70",
    fontSize: 12,
    fontWeight: 700,
  },
  placeText: {
    marginTop: 12,
    color: "#5f5249",
    lineHeight: 1.55,
    fontSize: 14,
  },
  featureText: {
    color: "#7d2237",
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
    background: "#f5f1eb",
    color: "#53473e",
    border: "1px solid #ece2d8",
  },
  badgeOpen: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#eaf7ee",
    color: "#18623a",
    border: "1px solid #d0e9d8",
  },
  badgeClosed: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#f9ece8",
    color: "#8a3f2f",
    border: "1px solid #efd7cf",
  },
  badgeBenefit: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 700,
    background: "#f9eef1",
    color: "#7d2237",
    border: "1px solid #f0d6de",
  },
  imageCard: {
    background: "#fff",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
    cursor: "pointer",
  },
  imageCardTop: {
    height: 180,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
  },
  imageCardBody: {
    padding: 16,
  },
  imageCardTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: -0.6,
  },
  imageCardSub: {
    marginTop: 4,
    color: "rgba(255,255,255,0.86)",
    fontSize: 14,
  },
  iconGlassButton: {
    width: 42,
    height: 42,
    borderRadius: 16,
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
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f6f1eb",
    color: "#211914",
  },
  iconBadgeWine: {
    width: 42,
    height: 42,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#6f1d2b",
    color: "#fff",
  },
  mapShellPro: {
    height: 540,
    borderRadius: 28,
    position: "relative",
    overflow: "hidden",
    border: "1px solid #eadfd4",
    background: "linear-gradient(180deg,#ede5d8 0%, #e8dece 50%, #e4d9c9 100%)",
  },
  mapTerrainOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 18%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.18), transparent 24%)",
  },
  mapRoad: {
    position: "absolute",
    top: "18%",
    left: "-10%",
    width: "120%",
    height: 10,
    background: "rgba(196,170,120,0.65)",
    transform: "rotate(15deg)",
    borderRadius: 999,
    boxShadow: "0 0 0 4px rgba(255,255,255,0.25)",
  },
  mapLabel: {
    position: "absolute",
    color: "#7a6c60",
    fontSize: 13,
    fontWeight: 700,
  },
  mapPin: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.22)",
    boxShadow: "0 10px 24px rgba(33,22,16,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  mapFloatingActions: {
    position: "absolute",
    right: 14,
    top: 14,
    display: "grid",
    gap: 10,
  },
  mapRoundButton: {
    width: 44,
    height: 44,
    borderRadius: 16,
    border: "1px solid #e8ddd3",
    background: "rgba(255,255,255,0.92)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  mapOverlayCard: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 14,
    background: "rgba(252,250,247,0.98)",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
    padding: 18,
  },
  mapOverlayEyebrow: {
    fontSize: 11,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: "#8b7b70",
    fontWeight: 700,
  },
  mapOverlayTitle: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 800,
    color: "#211914",
    letterSpacing: -0.5,
  },
  metricBox: {
    background: "#f6f1eb",
    border: "1px solid #ebe0d6",
    borderRadius: 16,
    padding: 12,
  },
  metricLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#8b7b70",
    fontWeight: 700,
  },
  metricValue: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 800,
    color: "#211914",
  },
  searchInputWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 18,
    border: "1px solid #e9dfd5",
    background: "#fff",
  },
  input: {
    border: 0,
    outline: "none",
    width: "100%",
    fontSize: 15,
    background: "transparent",
    color: "#211914",
  },
  resultRow: {
    background: "#fff",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
    padding: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  profileHeroCard: {
    background: "linear-gradient(135deg,#1f1814,#6f1d2b)",
    border: "1px solid #5f1830",
    borderRadius: 24,
    padding: 18,
    color: "#fff",
    display: "grid",
    gap: 16,
  },
  membershipEyebrow: {
    fontSize: 13,
    color: "rgba(255,255,255,0.76)",
    fontWeight: 700,
  },
  membershipTitle: {
    marginTop: 6,
    fontSize: 29,
    fontWeight: 800,
    letterSpacing: -0.7,
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
    borderRadius: 22,
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
    background: "#fff",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
    padding: 16,
  },
  infoBox: {
    background: "#f7f2ec",
    border: "1px solid #ede2d8",
    borderRadius: 18,
    padding: 14,
  },
  infoLabel: {
    fontSize: 12,
    color: "#8b7b70",
    fontWeight: 700,
  },
  infoValue: {
    marginTop: 6,
    color: "#211914",
    fontWeight: 800,
    fontSize: 14,
  },
  detailTitle: {
    fontSize: 30,
    lineHeight: 1.02,
    fontWeight: 800,
    color: "#211914",
    letterSpacing: -0.8,
    marginTop: 10,
  },
  wineHeroCard: {
    background: "#fff",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
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
    borderRadius: 28,
    background: "linear-gradient(180deg,#6f1d2b,#201814)",
    boxShadow: "0 12px 30px rgba(33,22,16,0.18)",
  },
  detailImageCard: {
    background: "#fff",
    border: "1px solid #eee5dc",
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(26,18,15,0.05)",
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
    borderTop: "1px solid #ede4da",
    background: "#fcfaf7",
  },
  bottomNav: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 8,
    padding: 8,
    borderRadius: 24,
    background: "#fff",
    border: "1px solid #eee4db",
    boxShadow: "0 10px 24px rgba(26,18,15,0.08)",
  },
  navItem: {
    border: 0,
    borderRadius: 18,
    padding: "10px 4px",
    background: "transparent",
    color: "#7f7267",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  navItemActive: {
    border: 0,
    borderRadius: 18,
    padding: "10px 4px",
    background: "#211914",
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
};
