import type { Jersey, JerseyCategory } from '../types/catalog';

/**
 * Jersey catalog — Category 01: Premium Jersey Designs.
 *
 * To update the catalog, edit the entries below: swap the `image` URL,
 * `itemCode`, `name`, `description` or `category` of any item.
 * Item codes follow the format 3MJ-0XX and are quoted on WhatsApp enquiries.
 */
export const jerseys: Jersey[] = [
{
  id: 'polygon-ice',
  itemCode: '3M-001',
  name: 'POLYGON ICE',
  description: 'Blue and white polygon sublimation with a logo panel on the chest.',
  category: 'CUSTOM',
  image: "/MOCKUP_FILE_001.png"
},
{
  id: 'red-strike',
  itemCode: '3M-002',
  name: 'RED STRIKE',
  description: 'Black base with red shard graphics and contrast red sleeves.',
  category: 'CRICKET',
  image: "/MOCKUP_FILE_002.png"
},
{
  id: 'amber-rise',
  itemCode: '3M-004',
  name: 'AMBER RISE',
  description: 'Black upper fading into bold amber and red diagonal blades.',
  category: 'CRICKET',
  image: "/MOCKUP_FILE_004.png"
},
{
  id: 'lion-roar',
  itemCode: '3M-005',
  name: 'LION ROAR',
  description: 'Royal blue camo with a full-colour lion crest and yellow trim.',
  category: 'CRICKET',
  image: "/MOCKUP_FILE_005.png"
},
{
  id: 'shatter',
  itemCode: '3M-006',
  name: 'SHATTER',
  description: 'Black body with a rising shard burst in lime and orange.',
  category: 'FOOTBALL',
  image: "/MOCKUP_FILE_006.png"
},
{
  id: 'eagle-force',
  itemCode: '3M-007',
  name: 'EAGLE FORCE',
  description: 'Navy and orange colour block with a line-art eagle graphic.',
  category: 'FOOTBALL',
  image: "/MOCKUP_FILE_007.png"
},
{
  id: 'volt-grid',
  itemCode: '3M-008',
  name: 'VOLT GRID',
  description: 'Black kit with lime shoulder panels and a triangular grid fade.',
  category: 'ESPORTS',
  image: "/MOCKUP_FILE_008.png"
},
{
  id: 'tribal-gold',
  itemCode: '3M-009',
  name: 'TRIBAL GOLD',
  description: 'Gold and black tribal artwork with a dedicated logo placement.',
  category: 'CUSTOM',
  image: "/MOCKUP_FILE_009.png"
},
{
  id: 'crimson-fade',
  itemCode: '3M-010',
  name: 'CRIMSON FADE',
  description: 'Red to black fade with a batsman silhouette and shoulder spikes.',
  category: 'CRICKET',
  image: "/MOCKUP_FILE_010.png"
},
{
  id: 'tribal-navy',
  itemCode: '3M-011',
  name: 'TRIBAL NAVY',
  description: 'Full navy tribal sublimation with a subtle poly-line shoulder.',
  category: 'BASKETBALL',
  image: "/MOCKUP_FILE_011.png"
},
{
  id: 'grunge-royale',
  itemCode: '3M-012',
  name: 'GRUNGE ROYALE',
  description: 'Purple and gold splatter texture with maroon fade panels.',
  category: 'ESPORTS',
  image: "/MOCKUP_FILE_012.png"
}];


export const jerseyFilters: Array<'ALL' | JerseyCategory> = [
'ALL',
'FOOTBALL',
'CRICKET',
'BASKETBALL',
'ESPORTS',
'CUSTOM'];