# Earth textures

Used by the home globe (`src/scripts/globe.ts`). All maps are equirectangular (plate carrée), 2:1, with
Greenwich in the centre. They were resized and re-encoded to WebP with ImageMagick; nothing else was changed,
except the water mask, which is the alpha channel of its source.

All sources are NASA imagery. NASA content is not copyrighted and is in the public domain
(<https://www.nasa.gov/nasa-brand-center/images-and-media/>); credit is requested, not required.

| File | Size | Source | Credit |
| --- | --- | --- | --- |
| `day-4k.webp`, `day-2k.webp` | 4096×2048, 2048×1024 | Blue Marble Next Generation with topography and bathymetry, August 2004: `https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73776/world.topo.bathy.200408.3x5400x2700.jpg` (Visible Earth record 73776) | NASA Earth Observatory, Reto Stöckli |
| `night-4k.webp`, `night-2k.webp` | 4096×2048, 2048×1024 | Black Marble 2016 (Earth at Night), 3 km: `https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144898/BlackMarble_2016_3km.jpg` (Visible Earth record 144898) | NASA Earth Observatory, Joshua Stevens, Suomi NPP VIIRS data from Miguel Román, NASA GSFC |
| `relief-2k.webp` | 2048×1024 | Blue Marble topography (SRTM30 Plus elevation ramp): `https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73934/srtm_ramp2.world.5400x2700.jpg` (Visible Earth record 73934) | NASA Earth Observatory, Jesse Allen; data from NASA SRTM and USGS |
| `clouds-2k.webp` | 2048×1024 | Blue Marble clouds: `https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57747/cloud_combined_2048.jpg` (Visible Earth record 57747) | NASA Goddard Space Flight Center, Reto Stöckli |
| `water-2k.webp` | 2048×1024 | MODIS land/water mask (MOD44W), layer `MODIS_Water_Mask` of NASA GIBS: `https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=MODIS_Water_Mask&STYLES=&FORMAT=image/png&TRANSPARENT=TRUE&CRS=EPSG:4326&BBOX=-90,-180,90,180&WIDTH=4096&HEIGHT=2048` | NASA EOSDIS Global Imagery Browse Services (GIBS) |

The `eoimages.gsfc.nasa.gov` host did not answer when these were fetched (November 2026), so the four NASA
Earth Observatory files were downloaded from their unmodified Internet Archive copies, by prefixing the URL with
`https://web.archive.org/web/2id_/`.
