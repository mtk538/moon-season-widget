    // --- Moon phase code ---
    const emojis = ['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'];
    const phaseNames = [
      'New Moon','Waxing Crescent','First Quarter','Waxing Gibbous',
      'Full Moon','Waning Gibbous','Last Quarter','Waning Crescent'
    ];

    function julianDate(date) {
      return date.getTime() / 86400000.0 + 2440587.5;
    }

    function moonPhaseInfo(date = new Date()) {
      const synodicMonth = 29.53058867;
      const knownNewMoonJD = 2451550.1;
      const jd = julianDate(date);
      const daysSinceNew = jd - knownNewMoonJD;
      const newMoons = daysSinceNew / synodicMonth;
      const fraction = newMoons - Math.floor(newMoons);
      const age = fraction * synodicMonth;
      const phaseAngle = fraction * 2 * Math.PI;
      const illumination = Math.round(((1 - Math.cos(phaseAngle)) / 2) * 100);
      const index = (Math.floor(fraction * 8 + 0.5) % 8);
      return { fraction, age: Number(age.toFixed(2)), illumination, index };
    }

    // --- Season / Sekki / Micro-season code ---
    const sekki = [
      { name: "Risshun",     start: { month: 2, day: 4 } },
      { name: "Usui",        start: { month: 2, day: 19 } },
      { name: "Keichitsu",   start: { month: 3, day: 6 } },
      { name: "Shunbun",     start: { month: 3, day: 21 } },
      { name: "Seimei",      start: { month: 4, day: 5 } },
      { name: "Kokuu",       start: { month: 4, day: 20 } },
      { name: "Rikka",       start: { month: 5, day: 5 } },
      { name: "Shōman",      start: { month: 5, day: 21 } },
      { name: "Bōshu",       start: { month: 6, day: 6 } },
      { name: "Geshi",       start: { month: 6, day: 21 } },
      { name: "Shōsho",      start: { month: 7, day: 7 } },
      { name: "Taisho",      start: { month: 7, day: 23 } },
      { name: "Risshū",      start: { month: 8, day: 8 } },
      { name: "Shosho",      start: { month: 8, day: 23 } },
      { name: "Hakuro",      start: { month: 9, day: 8 } },
      { name: "Shūbun",      start: { month: 9, day: 23 } },
      { name: "Kanro",       start: { month: 10, day: 8 } },
      { name: "Sōkō",        start: { month: 10, day: 23 } },
      { name: "Rittō",       start: { month: 11, day: 7 } },
      { name: "Shōsetsu",    start: { month: 11, day: 22 } },
      { name: "Taisetsu",    start: { month: 12, day: 7 } },
      { name: "Tōji",        start: { month: 12, day: 22 } },
      { name: "Shōkan",      start: { month: 1, day: 5 } },
      { name: "Daikan",      start: { month: 1, day: 20 } }
    ];

    const microSeasons = [
      { name: "East wind melts the ice",       sekki: "Risshun",    start: {month:2, day:4} },
      { name: "Bush warblers start singing",    sekki: "Risshun",    start: {month:2, day:9} },
      { name: "Fish emerge from the ice",       sekki: "Risshun",    start: {month:2, day:14} },
      { name: "Rain moistens the soil",         sekki: "Usui",       start: {month:2, day:19} },
      { name: "Mist starts to linger",          sekki: "Usui",       start: {month:2, day:24} },
      { name: "Grass sprouts, trees bud",        sekki: "Usui",       start: {month:3, day:1} },
      { name: "Hibernating insects surface",    sekki: "Keichitsu",  start: {month:3, day:6} },
      { name: "First peach blossoms",            sekki: "Keichitsu",  start: {month:3, day:11} },
      { name: "Caterpillars become butterflies", sekki: "Keichitsu",  start: {month:3, day:16} },
      { name: "Sparrows start to nest",          sekki: "Shunbun",    start: {month:3, day:21} },
      { name: "First cherry blossoms",           sekki: "Shunbun",    start: {month:3, day:26} },
      { name: "Distant thunder",                  sekki: "Shunbun",    start: {month:3, day:31} },
      { name: "Swallows return",                 sekki: "Seimei",     start: {month:4, day:5} },
      { name: "Wild geese fly north",             sekki: "Seimei",     start: {month:4, day:10} },
      { name: "First rainbows",                   sekki: "Seimei",     start: {month:4, day:15} },
      { name: "First reeds sprout",               sekki: "Kokuu",      start: {month:4, day:20} },
      { name: "Last frost, rice seedlings grow",  sekki: "Kokuu",      start: {month:4, day:25} },
      { name: "Peonies bloom",                    sekki: "Kokuu",      start: {month:4, day:30} },
      { name: "Frogs start singing",              sekki: "Rikka",      start: {month:5, day:5} },
      { name: "Worms surface",                     sekki: "Rikka",      start: {month:5, day:10} },
      { name: "Bamboo shoots sprout",              sekki: "Rikka",      start: {month:5, day:15} },
      { name: "Silkworms feast on mulberry leaves", sekki: "Shōman", start: {month:5, day:21} },
      { name: "Safflowers bloom",                   sekki: "Shōman",    start: {month:5, day:26} },
      { name: "Wheat ripens and is harvested",      sekki: "Shōman",    start: {month:5, day:31} },
      { name: "Praying mantises hatch",             sekki: "Bōshu",     start: {month:6, day:6} },
      { name: "Rotten grass becomes fireflies",     sekki: "Bōshu",     start: {month:6, day:11} },
      { name: "Plums turn yellow",                   sekki: "Bōshu",     start: {month:6, day:16} },
      { name: "Self-heal withers",                    sekki: "Geshi",     start: {month:6, day:21} },
      { name: "Irises bloom",                         sekki: "Geshi",     start: {month:6, day:27} },
      { name: "Crow-dipper sprouts",                  sekki: "Geshi",     start: {month:7, day:2} },
      { name: "Warm winds blow",                       sekki: "Shōsho",    start: {month:7, day:7} },
      { name: "Lotus blooms",                          sekki: "Shōsho",    start: {month:7, day:12} },
      { name: "Hawks learn to fly",                     sekki: "Shōsho",    start: {month:7, day:17} },
      { name: "Paulownia seeds form",                   sekki: "Taisho",    start: {month:7, day:23} },
      { name: "Earth is damp, air humid",               sekki: "Taisho",    start: {month:7, day:29} },
      { name: "Great rains sometimes fall",             sekki: "Taisho",    start: {month:8, day:3} },
      { name: "Cool winds blow",                         sekki: "Risshū",    start: {month:8, day:8} },
      { name: "Cicadas sing at dusk",                    sekki: "Risshū",    start: {month:8, day:13} },
      { name: "Thick fog descends",                      sekki: "Risshū",    start: {month:8, day:18} },
      { name: "Cotton flowers bloom",                    sekki: "Shosho",    start: {month:8, day:23} },
      { name: "Heat starts to die down",                  sekki: "Shosho",    start: {month:8, day:28} },
      { name: "Rice ripens",                             sekki: "Shosho",    start: {month:9, day:2} },
      { name: "Dew glistens on grass",                    sekki: "Hakuro",    start: {month:9, day:8} },
      { name: "Wagtails sing",                            sekki: "Hakuro",    start: {month:9, day:13} },
      { name: "Swallows leave",                           sekki: "Hakuro",    start: {month:9, day:18} },
      { name: "Thunder ceases",                           sekki: "Shūbun",    start: {month:9, day:23} },
      { name: "Insects hole up underground",              sekki: "Shūbun",    start: {month:9, day:28} },
      { name: "Farmers drain fields",                      sekki: "Shūbun",    start: {month:10, day:3} },
      { name: "Wild geese return",                         sekki: "Kanro",     start: {month:10, day:8} },
      { name: "Chrysanthemums bloom",                       sekki: "Kanro",     start: {month:10, day:13} },
      { name: "Crickets chirp by the door",                  sekki: "Kanro",     start: {month:10, day:18} },
      { name: "First frost",                                 sekki: "Sōkō",      start: {month:10, day:23} },
      { name: "Light rains sometimes fall",                   sekki: "Sōkō",      start: {month:10, day:28} },
      { name: "Maple & ivy leaves turn yellow",               sekki: "Sōkō",      start: {month:11, day:2} },
      { name: "Camellias bloom",                               sekki: "Rittō",     start: {month:11, day:7} },
      { name: "Land starts to freeze",                         sekki: "Rittō",     start: {month:11, day:12} },
      { name: "Narcissus bloom",                               sekki: "Rittō",     start: {month:11, day:17} },
      { name: "Rainbows hide",                                 sekki: "Shōsetsu",  start: {month:11, day:22} },
      { name: "North wind blows leaves",                       sekki: "Shōsetsu",  start: {month:11, day:27} },
      { name: "Ice thickens on streams",                        sekki: "Taisetsu",  start: {month:12, day:12} },
      { name: "Bears hibernate",                                sekki: "Taisetsu",  start: {month:12, day:17} },
      { name: "Self-heal sprouts",                              sekki: "Tōji",      start: {month:12, day:22} },
      { name: "Deer shed antlers",                               sekki: "Tōji",      start: {month:12, day:27} },
      { name: "Wheat sprouts under snow",                        sekki: "Tōji",      start: {month:1, day:1} },
      { name: "Parsley flourishes",                              sekki: "Shōkan",    start: {month:1, day:5} },
      { name: "Springs thaw",                                    sekki: "Shōkan",    start: {month:1, day:10} },
      { name: "Pheasants call",                                  sekki: "Shōkan",    start: {month:1, day:15} },
      { name: "Butterburs bud",                                  sekki: "Daikan",    start: {month:1, day:20} },
      { name: "Ice thickens in streams",                          sekki: "Daikan",    start: {month:1, day:25} },
      { name: "Hens begin laying",                               sekki: "Daikan",    start: {month:1, day:30} }
    ];

    function meteorologicalSeason(date) {
      const m = date.getMonth() + 1;
      if (m >= 3 && m <= 5) return "Spring";
      if (m >= 6 && m <= 8) return "Summer";
      if (m >= 9 && m <= 11) return "Autumn";
      return "Winter";
    }

    function currentSekki(date) {
      const year = date.getFullYear();
      let current = null;
      let prev = null;

      for (const s of sekki) {
        let y = year;
        if (s.start.month === 1 && date.getMonth() === 11) y++;
        const startDate = new Date(y, s.start.month - 1, s.start.day);
        if (date >= startDate) {
          prev = current;
          current = s.name;
        } else {
          break;
        }
      }

      if (!current && date.getMonth() === 0) {
        current = "Daikan";
      }
      return current || "Daikan";
    }

    function currentMicroseason(date) {
      const year = date.getFullYear();
      for (let i = 0; i < microSeasons.length; i++) {
        const k = microSeasons[i];
        let y = year;
        if (k.start.month === 1 && date.getMonth() === 11) y++;
        const start = new Date(y, k.start.month - 1, k.start.day);

        const nextIdx = (i + 1) % microSeasons.length;
        const next = microSeasons[nextIdx];
        let ny = year;
        if (next.start.month === 1 && date.getMonth() === 11) ny++;
        const end = new Date(ny, next.start.month - 1, next.start.day);

        if (date >= start && date < end) {
          return { name: k.name, sekki: k.sekki };
        }
      }
      return { name: "Hens begin laying", sekki: "Daikan" };
    }

    // Sekki English meanings
    const sekkiEnglish = {
      "Risshun": "Beginning of spring",
      "Usui": "Rain water",
      "Keichitsu": "Awakening of insects",
      "Shunbun": "Spring equinox",
      "Seimei": "Pure and clear",
      "Kokuu": "Grain rain",
      "Rikka": "Beginning of summer",
      "Shōman": "Grain full",
      "Bōshu": "Grain in ear",
      "Geshi": "Summer solstice",
      "Shōsho": "Lesser heat",
      "Taisho": "Greater heat",
      "Risshū": "Beginning of autumn",
      "Shosho": "Limit of heat",
      "Hakuro": "White dew",
      "Shūbun": "Autumn equinox",
      "Kanro": "Cold dew",
      "Sōkō": "Frost descent",
      "Rittō": "Beginning of winter",
      "Shōsetsu": "Lesser snow",
      "Taisetsu": "Greater snow",
      "Tōji": "Winter solstice",
      "Shōkan": "Lesser cold",
      "Daikan": "Greater cold"
    };

    function updateWidget() {
      const now = new Date();

      // Moon
      const mp = moonPhaseInfo(now);
      document.getElementById('moonEmoji').textContent = emojis[mp.index];
      document.getElementById('phaseName').textContent = phaseNames[mp.index];
      document.getElementById('phaseName').textContent = `${phaseNames[mp.index]} - illumination ${mp.illumination}%`;

      // Seasons
      const metSeason = meteorologicalSeason(now);
      const sekName = currentSekki(now);
      const micro = currentMicroseason(now);
      const sekEn = sekkiEnglish[sekName] || "";

      document.getElementById('season').textContent =
        `${metSeason} - ${sekName} (${sekEn})`;

      document.getElementById('seasonDetails').textContent = micro.name;
    }

    updateWidget();
    setInterval(updateWidget, 60_000);
