module.exports = {
    RESPONSE_LAUTAPELIT: [
    {
      Tuote: 'Dungeon Petz (ENG)',
      Koodi: '8594156310158',
      EAN: 'LPDPETZ',
      ALV: '24',
      Kuva: 'images/tuotekuvat/kuva100/2014/dungeon-petz-14.jpg',
      'Myyntiyksikkö': 'kpl',
      SivuID: 16588,
      TuoteID: 15613,
      Myynnissa: 1,
      Kapasiteetit: 0,
      'MyyntiyksikköID': 15644,
      Hinta: 45,
      Uutuus: false,
      Tiedustelu: false,
      isAlennusTuote: false,
      isMyynnissa: true,
      showHinta: true
    },
    {
      Tuote: 'Dungeon Petz: Dark Alleys (ENG)',
      Kuvaus: 'Bringing you more than just new pets, cages and magic items, the Dungeon Petz: Dark Alleys has a whole new district in the town.',
      Koodi: '0681706170930',
      EAN: '8594156310240',
      ALV: '24',
      Kuva: 'kuva100/lautapelit/Dungeon-petz-dark-alleys.jpg',
      'Myyntiyksikkö': 'kpl',
      SivuID: 21297,
      TuoteID: 20227,
      Myynnissa: 1,
      Kapasiteetit: 0,
      'MyyntiyksikköID': 20267,
      Hinta: 29.9,
      Uutuus: false,
      Tiedustelu: false,
      isAlennusTuote: false,
      isMyynnissa: true,
      showHinta: true
    }
  ],

  RESPONSE_LAUTAPELIT_AVAILABILITY_AVAILABLE: {
    Mera: [
      {
        Nimi: 'Dungeon Petz (ENG)',
        MyyntiYksikko: 'kpl',
        VarastoSaldo: 1,
        VarastoNimi: 'Paikka1',
        HalytysPUN: 0
      }
    ],
    Laji: []
  },

    RESPONSE_LAUTAPELIT_AVAILABILITY_NOT_AVAILABLE: {
    Mera: [
      {
        Nimi: 'Dungeon Petz (ENG)',
        MyyntiYksikko: 'kpl',
        VarastoSaldo: 0,
        VarastoNimi: 'Paikka1',
        HalytysPUN: 0
      }
    ],
    Laji: []
  },

  RESPONSE_FANTASIAPELIT: `
  <!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:image" content="https://www.fantasiapelit.com/site_images/fp-logo-3D-240.jpg"/><meta property="og:image:secure_url" content="https://www.fantasiapelit.com/site_images/fp-logo-3D-240.jpg"/><meta property="og:image:width" content="240"/><meta property="og:image:height" content="240"/><meta property="og:image:alt" content="Fantasiapelit logo"/><meta property="og:description" content="Tuotehaku"/><meta name="keywords" content="verkkokauppa, peli, miniatyyri, manga, sarjakuva" /><meta name="description" content="Tuotehaku" /><meta name="title" content="Fantasiapelit - verkkokauppa" /><link rel="image_src" href="https://www.fantasiapelit.com/site_images/fp-logo-3D-240.jpg" /><link rel="shortcut icon" href="favicon.ico"><link rel="stylesheet" href="jquery-ui.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script><script>
        $(function() {
                $("#haku_ac").autocomplete({
                        source: "ennakoi.php",
                        minLength: 2,
			select: function(event, ui) {
				$("#haku_ac").val(ui.item.label);
				$("#haku_acForm").submit();
			}
                })
		.autocomplete( "instance" )._renderMenu = function( ul, items ) {
		  var that = this;
		  $.each( items, function( index, item ) {
		    that._renderItemData( ul, item );
		  });
		  $( ul ).find( "li:odd" ).addClass( "auto_odd" );
		}
        });
	</script>
	<link href="fantasiapelit19071101.css" rel="stylesheet" type="text/css" media="all">
<title>Fantasiapelit - verkkokauppa</title>
</head>
<body><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-49481243-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<div class="max"><span class="fontbase"><div class="row" style="background-color: #4C8942;"><div class="col-12">
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
	<td class="bardiv">
	<div width="100%"><a href="index.php"><img src="site_images/fantasiapelit-ei-txt.jpg" class="barpic"></a></div>
	</td>
	<td class="o_palkki" align="left" valign="center"><a href="index.php?main=international&lc=EN&lang=en" title="International info + English on"><img src="kuvat/lippu-en.jpg" alt="English info" width="32" height="21"></a>
	<a href="index.php?main=international&lc=RUS" title="Russian info"><img src="kuvat/lippu-ru.jpg" alt="Russian info" width="32" height="21"></a>
	</td>
	<td class="o_palkki" align="left" valign="center" width="100%"> &nbsp; <form name="qs" method="post" action="index.php" id="haku_acForm">
	<input type="hidden" name="main" value="ai">
	<input type="hidden" name="mista" value="*">
	<input type="hidden" name="yhteen" value="eri">
	<input type="hidden" name="alue" value="">
	<div class="ui-widget"><input type="text" name="etsittava" value="dungeon lords" size="15" maxlength="100" class="search" id="haku_ac">
		<input type="submit" name="hae" value="HAE" alt="hae"></div>
	</form>
	</td>
	</tr>
	</table>
	</div></div><div class="row" style="background-color: #4C8942;"><div class="col-12"><ul>
		<li class="dropdown">
			<a href="#" class="dropbtn" aria-haspopup="true">Tuotteet</a>
			<div class="dropdown-content">
				<a href="index.php?main=kat">Tuotevalikoima</a>
				<a href="index.php?main=kat&kat=uutuus">Uutuudet</a>
				<a href="index.php?main=kat&kat=sekal">Pelit</a>
				<a href="index.php?main=kat&kat=sekal&sel=noppa">Nopat</a>
				<a href="index.php?main=kat&kat=sekal&sel=miniatyyri">Miniatyyrit</a>
				<a href="index.php?main=kat&kat=kirja">Kirjat ja sarjakuvat</a>
				<a href="index.php?main=lahjakortti">Lahjakortit</a>
				<a href="index.php?main=selaa">Selaa valikoimaa</a>
				<a href="index.php?main=tarjous">Tarjouksessa</a>
			</div>
		</li>
		<li class="dropdown">
			<a href="#" class="dropbtn" aria-haspopup="true">Ajankohtaista</a>
			<div class="dropdown-content">
				<a href="index.php?main=news">Uutiset</a>
				<a href="index.php?main=kalenteri">Kalenteri</a>
				<a href="index.php">Etusivu</a>
			</div>
		</li>
		<li class="dropdown">
			<a href="#" class="dropbtn" aria-haspopup="true">Info</a>
			<div class="dropdown-content">
				<a href="index.php?main=info">Yhteystiedot</a>
				<a href="index.php?main=info&sub=tilaus">Tilaamisesta</a>
				<a href="index.php?main=info&sub=FAQ">Usein kysytyt</a>
				<a href="index.php?main=info&sub=histo">Fantasiapelit</a>
				<a href="index.php?main=info&sub=sivut">Kotisivuista</a>
				<a href="index.php?main=info&sub=policy">Tietoturva</a>
			</div>
		</li>
		<li class="dropdown">
			<a href="#" class="dropbtn" aria-haspopup="true">Omat tiedot</a>
			<div class="dropdown-content"><a href="index.php?main=login&sub=login">Kirjaudu sivuille</a>
				<a href="index.php?main=info&sub=omattiedot&op=yhteys" style="opacity:.2;">Yhteystiedot</a>
				<a href="index.php?main=info&sub=omattiedot&op=tuotteet" style="opacity:.2;">Varaukset</a>
				<a href="index.php?main=info&sub=omattiedot&op=tilaus" style="opacity:.2;">Tilaukset</a>
				<a href="index.php?main=info&sub=omattiedot&op=muutasala" style="opacity:.2;">Salasana</a>
				</div>
		</li><li class="dropdown">
			<a href="#" class="dropbtn" aria-haspopup="true">Palaute</a>
			<div class="dropdown-content">
			<a href="index.php?main=info&sub=palautelomake">Palautelomake</a>
			</div>
		</li>
		</ul>
	</div></div><div class="row"><div class="col-9"><div class="kontti">
			<div width="100%" class="o2_palkki" height="25"><h1>Tuotehaku</h1></div>
			<p>
			Tuotteiden saatavuudessa lukee <i>heti</i> jos sit&auml; on Helsingin varastossa. P&auml;iv&auml;m&auml;&auml;r&auml; tarkoittaa arvioitua saapumista varastoon. Jos pvm meni jo, tuotteen ilmestyminen tai tilauksen saapuminen
on ilmeisestikin my&ouml;h&auml;ss&auml;.
Tilap&auml;isesti lopussa olevan tuotteen arvioitu toimitusaika on ilmoitettu kuten <i>1-5 p&auml;iv&auml;&auml;</i> tai <i>2-3 viikkoa</i> jne.<p>
Ruutun&auml;kym&auml;n liikennevaloissa vihre&auml; on heti saatavilla, punainen juuri nyt loppu varastosta, keltainen ei viel&auml; ilmestynyt tai
huutomerkin kera ei hyllyvalikoimaa, eli me tilaamme sitten, kun sin&auml; olet tilannut meilt&auml;.
<a href="index.php?main=info&sub=FAQ#saatavuus">Saatavuusinfossa</a> kerrotaan tarkemmin saatavuustiedoista.

		<p><b><i>Haun tulokset 1 - 3 / 3</i></b><p><form action="index.php" method="get"><input type="radio" name="kuvariveja" title="sivukoko" value=24 checked>24<input type="radio" name="kuvariveja" title="sivukoko" value=60>60<input type="radio" name="kuvariveja" title="sivukoko" value=120>120 <select name="jarj" size="0" title="J&auml;rjestys hinnan mukaan / vain aakkostus"><option value="tuotteen_nimi" selected>abc</option><option value="halvin">halvin</option><option value="kallein">kallein</option></select>  <input type="radio" name="ruutukaava" value="1" checked> ruutu
				<input type="radio" name="ruutukaava" value="0"> rivi <br><input type="checkbox" name="varastotuote" value="1" > heti saatavilla  <input type="submit" name="submit" value="muuta" alt="muuta">
		<input type="hidden" name="main" value="ai">
		<input type="hidden" name="yhteen" value=eri>
        	<input type="hidden" name="etsittava" value="dungeon lords">
        	<input type="hidden" name="offset" value=0>
        	<input type="hidden" name="kat" value=kaikki>
        	<input type="hidden" name="mista" value="*">
		<input type="hidden" name="jamista" value="luokka">
		<input type="hidden" name="jamika" value="lautapeli/seurapeli">
		<input type="hidden" name="luokka" value="">
		</form><p><div class="row"><div class="col-grid"><div style="padding-right: 5px;"> <div class="centruutu" ><a href="index.php?main=ai&kat=single&mista=indeksi&etsittava=_165665" class="ruutulink"><div class="ruutu"><div width="100%" class="o2_palkki" style="margin-bottom: 3px;" height="20">Dungeon Lords</div>
			<img class="ruutuimg, himmeli" src="pikkukuva.php?xy=1&img=larg9/165665.jpg" alt="Dungeon Lords" title="Dungeon Lords">
			<span  class="himmeli"><div class="ruutuinfo">Säännöt valmistajan sivuilta.
<p>
They meet in a tavern. The strong warrior, the wily wizard, the committed priest, and the sneaky thief. Several hours and many quaffed ales later, they form an inseparable party of adventurers, ready to rid the world of evil. And there is some, just within easy walking distance &#8211; a dark lord has filled a nearby hill with tunnels, traps, treasure and trolls. The heroes set out to attack the dungeon and to punish the wicked lord.
<p>
Are you ready for heroic deeds that win you fame, wealth and the hearts of beautiful maidens?
<p>
Well, then go and play another game! This one is for people who want to know what it takes to build and run a dungeon. Where to get all those minions and monsters, and how to keep them satisfied. And how it feels when some band of do-gooders try to ruin all that work! Are you ready for this challenge?
<p>
Dungeon Lords is a game for 2 to 4 aspiring Dungeon Lords. You get to dig tunnels, mine gold, hire monsters, create traps and care about all the things a proper dungeon needs. It is not easy, as the competition for resources is stiff and sometimes you have to get a bit evil to get what you want &#8211; and the more evil you get, the stronger the adventurers your dungeon attracts.
<p>
Twice a game, these adventurers set off to conquer your dungeon. Command your monsters and use your traps to stop them, before they do too much damage.
<p>
In the end, you score based on your achievements: constructing and defending your dungeon, and perhaps winning some prestigious titles.
<p>
Game components
<br>
*    Central Board
<br>
*    Progress Board (with a Building side and a Combat side)
<br>
*    Distant Lands Board
<br>
*    4 two-sided Dungeon Boards (in 4 colors)
<br>
*    32 Orders Cards (8 in each color)
<br>
*    8 Overview Cards (2 in each color)
<br>
*    18 Combat Cards
<br>
*    27 Trap Cards
<br>
*    9 Special Event Cards
<br>
*    24 Monster (or Ghost) Tiles
<br>
*    16 Room Tiles
<br>
*    32 Adventurer Tiles
<br>
*    2 Paladin Tiles
<br>
*    3 Event Tiles
<br>
*    42 Tunnel Tiles
<br>
*    3 Troll Tokens
<br>
*    20 Item Tiles
<br>
*    12 Minion Figures (3 in each color)
<br>
*    4 Evil Counters (1 in each color)
<br>
*    Starting Player Token
<br>
*    Progress Marker
<br>
*    about 40 Imp Figures
<br>
*    about 30 Food Tokens
<br>
*    about 30 Gold Tokens
<br>
*    about 40 Damage Counters
<br>
*    rulebook
<p>
Players: 	2&#8211;4
<br>
Age: 	12+
<br>
Time: 	90 mins
<p>
Author: 	Vlaada Chvátil</div></span>
			</div></a><div class="ruutuhinta"><div class="saapalat" valign="center"><form name="ostos" action="index.php" method="post">
				<input type="hidden" name="main" value="kori">
				<input type="hidden" name="sub" value="add">
				<input type="hidden" name="add" value="_165665">
				<input type="hidden" name="kat" value="kaikki">
				<input type="submit" name="submit" class="korikori" value="&nbsp; &nbsp; &nbsp; &nbsp;" alt="tilattavissa" title="tilattavissa">
				</form></div><div class="saapalat"><div class="saayellow"> &nbsp; &excl; &nbsp; <span class="tooltiptext">tilattava tuote</span></div></div><div class="saapalat">50.00 &euro;</div></div></div> </div></div><div class="col-grid"><div style="padding-right: 5px;"> <div class="centruutu" ><a href="index.php?main=ai&kat=single&mista=indeksi&etsittava=_165671" class="ruutulink"><div class="ruutu"><div width="100%" class="o2_palkki" style="margin-bottom: 3px;" height="20">Dungeon Lords: Happy Anniversary!</div>
			<img class="ruutuimg, himmeli" src="pikkukuva.php?xy=1&img=larg9/165671.jpg" alt="Dungeon Lords: Happy Anniversary!" title="Dungeon Lords: Happy Anniversary!">
			<span  class="himmeli"><div class="ruutuinfo">Dungeon Lords: Happy Anniversary includes the Dungeon Lords base game, the Festival Season expansion, stickers for food tokens, metal coins, a new "Dungeon Set-up" mini-expansion, and other items.</div></span>
			</div></a><div class="ruutuhinta"><div class="saapalat" valign="center"><form name="ostos" action="index.php" method="post">
				<input type="hidden" name="main" value="kori">
				<input type="hidden" name="sub" value="add">
				<input type="hidden" name="add" value="_165671">
				<input type="hidden" name="kat" value="kaikki">
				<input type="submit" name="submit" class="korikori" value="&nbsp; &nbsp; &nbsp; &nbsp;" alt="tilattavissa" title="tilattavissa">
				</form></div><div class="saapalat"><div class="saayellow"> &nbsp; &excl; &nbsp; <span class="tooltiptext">tilattava tuote</span></div></div><div class="saapalat">120.00 &euro;</div></div></div> </div></div><div class="col-grid"><div style="padding-right: 5px;"> <div class="centruutu" ><a href="index.php?main=ai&kat=single&mista=indeksi&etsittava=_159172" class="ruutulink"><div class="ruutu"><div width="100%" class="o2_palkki" style="margin-bottom: 3px;" height="20">Dungeon Petz</div>
			<img class="ruutuimg, himmeli" src="pikkukuva.php?xy=1&img=larga/159172.jpg" alt="Dungeon Petz" title="Dungeon Petz">
			<span  class="himmeli"><div class="ruutuinfo">Säännöt valmistajan sivuilta.
<p>
&#8220;What this town needs is a pet store.&#8221; No one knows which imp said it, but every imp recognized the idea was pure genius: &#8220;A pet shop for dungeon lords? What a great idea! Yeah, and no one else is doing it! No competition! We&#8217;ll be rich!&#8221;
<p>
And now you have just opened the first pet shop in town. Right next door to the other first pet shop in town. Across the street from two more.
<p>
Buy baby monsters! Feed them and watch them grow! Clean their cages!
<p>
Yes, running a pet store is exciting for an imp. But it can also be mentally challenging: What is the smartest way to win the upcoming exhibition? Which pet is best suited for your dungeon lord customer? How strong a cage do you need, and if you guess wrong, how many family members will be maimed?
<p>
Win or lose, you are sure to enjoy the grand opening of Dungeon Petz.
<p>
Components:
<br>
*    1 two-sided Central Board
<br>
*    1 two-sided Progress Board
<br>
*    4 Burrow Boards in 4 colors
<br>
*    4 Pet Display Boards
<br>
*    18 pets with rotating wheels
<br>
*    20 plastic fasteners for assembling Pets
<br>
*    11 Cage tiles
<br>
*    6 Addon tiles
<br>
*    10 Artifact tiles
<br>
*    8 Exhibition tiles
<br>
*    8 Customer tiles
<br>
*    104 Need cards of four types
<br>
*    5 Potion cards
<br>
*    8 wooden Minion Figures in 4 colors
<br>
*    40 plastic Imp Figures in 4 colors
<br>
*    4 Achievement tiles in 4 colors
<br>
*    40 wooden Gold Tokens
<br>
*    14 wooden Vegetable Tokens
<br>
*    11 wooden Meat Tokens
<br>
*    30 wooden Manure Tokens
<br>
*    20 plastic Suffering Tokens
<br>
*    8 cardboard Mutation Tokens
<br>
*    1 Progress Marker
<br>
*    1 Starting Player Token
<br>
*    1 Rulebook
<p>
Players: 	2-4
<br>
Age: 	13+
<br>
Time: 	90 mins
<p>
Author: 	Vlaada Chvátil</div></span>
			</div></a><div class="ruutuhinta"><div class="saapalat" valign="center"><form name="ostos" action="index.php" method="post">
				<input type="hidden" name="main" value="kori">
				<input type="hidden" name="sub" value="add">
				<input type="hidden" name="add" value="_159172">
				<input type="hidden" name="kat" value="kaikki">
				<input type="submit" name="submit" class="korikori" value="&nbsp; &nbsp; &nbsp; &nbsp;" alt="tilattavissa" title="tilattavissa">
				</form></div><div class="saapalat"><div class="saayellow"> &nbsp; &excl; &nbsp; <span class="tooltiptext">tilattava tuote</span></div></div><div class="saapalat">50.00 &euro;</div></div></div> </div></div></div><p> Hakusivu: 1 <div class="center"><table width="100%"><tr><th width="25%">&nbsp;</th><th width="25%">&nbsp;</th><th width="25%">&nbsp;</th><th width="25%">&nbsp;</th></tr></table></div></div></div><div class="col-3"><div class="ittnok"><div class="o2_palkki"><h3>Rajaa hakua</h3></div>LUOKKA<br><a href="index.php?main=ai&jamista=luokka&jamika=lautapeli/seurapeli&mista=*&yhteen=eri&alue=&etsittava=dungeon lords">lautapeli/seurapeli</a><br><a href="index.php?main=ai&jamista=luokka&jamika=roolipeli&mista=*&yhteen=eri&alue=&etsittava=dungeon lords">roolipeli</a><br><br>VALMISTAJA<br><a href="index.php?main=ai&jamista=valmistaja&jamika=Czech Games&mista=*&yhteen=eri&alue=&etsittava=dungeon lords">Czech Games</a><br><a href="index.php?main=ai&jamista=valmistaja&jamika=Goodman Games&mista=*&yhteen=eri&alue=&etsittava=dungeon lords">Goodman Games</a><br><div class="o2_palkki"><h3>Uutuuksia</h3></div><div class="footer">Kingdomino: Age of Giants (suomeksi)<br>
				<a href="index.php?main=ai&kat=single&mista=indeksi&etsittava=_200391">
				<img class="uutuus" src="pikkukuva.php?xy=1&img=largm/200391.jpg" alt="Kingdomino: Age of Giants (suomeksi)" title="Kingdomino: Age of Giants (suomeksi)"></a>
				</div><div class="footer">Rumble 6: Last Knight<br>
				<a href="index.php?main=ai&kat=single&mista=indeksi&etsittava=_199516">
				<img class="uutuus" src="pikkukuva.php?xy=1&img=largm/199516.jpg" alt="Rumble 6: Last Knight" title="Rumble 6: Last Knight"></a>
				</div><div class="footer">World War III: Team Yankee Rulebook<br>
				<a href="index.php?main=ai&kat=single&mista=indeksi&etsittava=_181436">
				<img class="uutuus" src="pikkukuva.php?xy=1&img=largm/181436.jpg" alt="World War III: Team Yankee Rulebook" title="World War III: Team Yankee Rulebook"></a>
				</div><div class="footer"><img border="0" src="kuvat/vihr_nuoli.gif" width="8" height="7">
			<a href="index.php?main=kat&kat=uutuus">HAE UUTUUKSIA</a>
		</div><div class="elder">
		<form name="ostoskori" action="index.php" method="get">
		<input type="hidden" name="main" value="kori">
		<input type="submit" name="kori" value="Kori tyhj&auml;" alt="ostoskoriin">
		</form>
		</div></div
		</div></div><div class="row"><div class="col-6"><table width="100%" margin="0" border="0" cellspacing="0"><tr>
		<td width="60%" valign="top" class="o3_palkki">
			<p><a href="index.php?main=info">LIIKKEET</a><p>
			<table width="100%">
			<tr><td width="50%" valign="top">
			<a href="index.php?main=info&sub=helsinki">Helsinki</a><br>
			<a href="index.php?main=info&sub=joensuu">Joensuu</a><br>
			<a href="index.php?main=info&sub=jkl">Jyv&auml;skyl&auml;</a><br>
			<a href="index.php?main=info&sub=kuopio">Kuopio</a><br>
			</td><td width="50%" valign="top">
			<a href="index.php?main=info&sub=oulu">Oulu</a><br>
			<a href="index.php?main=info&sub=tampere">Tampere</a><br>
			<a href="index.php?main=info&sub=turku">Turku</a><br>
			</td></tr>
			</table>
		</td>
		<td width="40%" valign="top" class="o3_palkki">
			<p>TILAAMISESTA<p>
			<a href="index.php?main=info&sub=tilaus">Maksu, toimitus ja yleist&auml;</a><br>
			<a href="index.php?main=info&sub=FAQ">UKK</a><br>
			<a href="index.php?main=info&sub=policy">Tietoturva</a><br>
			<a href="index.php?main=kori">Ostoskoriin</a><br>
			<a href="index.php?main=kat">Tuotevalikoima</a> 
		</td>
		</tr></table>
		</div><div class="col-6">
		<table width="100%" margin="0" border="0" cellspacing="0"><tr>
		<td width="50%" valign="top" class="o3_palkki">
			<p>INFO<br>
			Y-tunnus: 0604011-8<br>
			<a href="index.php?main=info&sub=yhteys">Yhteystiedot</a><br>
			<a href="index.php?main=info&sub=omattiedot">Omat tiedot</a><br>
			<a href="index.php?main=info&sub=histo">Yritys</a><br>
			<a href="index.php?main=linkit">Linkit</a><br>
			<a href="index.php?main=info&sub=palautelomake">Palautelomake</a>
		</td>
		<td width="50%" valign="center" class="o3_palkki">
			<div class="center">
			<a target="_blank" href="https://www.facebook.com/pages/Helsinki-Finland/Fantasiapelit/360696535367"><img src="kuvat/Facebook_badge.gif" height="44" width="144" title="Fantasiapelit on Facebookissa" border="0"></a>
			</div>
		</td>
		</tr></table>
		</div></div></span></div><script type="text/javascript">
        var refreshSn = function ()
        {
            var time = 600000; // 10 mins
            var timerId = setTimeout(
                function ()
                {
                $.ajax({
                   url: 'refresh_session.php',
                   cache: false,
                   complete: function () {refreshSn();}
                });
                },
                time
            );
        };
        refreshSn();
        </script></body></html>
  `
}
