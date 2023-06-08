export const febricTypes = [
  { name: 'Cotton', code: 'cotton' },
  { name: 'Denim', code: 'denim' },
  { name: 'Fleece', code: 'fleece' },
  { name: 'Linen', code: 'linen' },
  { name: 'Lycra/Spandex', code: 'lycra_spandex' },
  { name: 'Nylon', code: 'nylon' },
  { name: 'Polyester', code: 'polyester' },
  { name: 'Rayon', code: 'rayon' },
  { name: 'Satin', code: 'satin' },
  { name: 'Silk', code: 'silk' },
  { name: 'Velvet', code: 'velvet' },
  { name: 'Wool', code: 'wool' }
];

export const febricSeasons = [
  { name: "Winter", code: "winter" },
  { name: "Spring", code: "spring" },
  { name: "Summer", code: "summer" },
  { name: "Fall", code: "fall" },
  { name: "Winter", code: "winter" },
];

export const threadTypes = [
  { name: "Cotton", code: "cotton" },
  { name: "Polyester", code: "polyester" },
  { name: "Silk", code: "silk" },
  { name: "Nylon", code: "nylon" },
  { name: "Metallic", code: "metallic" },
  { name: "Embroidery", code: "embroidery" },
  { name: "Quilting", code: "quilting" },
  { name: "Invisible", code: "invisible" },
  { name: "Upholstery", code: "upholstery" },
  { name: "Overlock", code: "overlock" },
];

/*
Reflectance: Reflectance measures the amount of light reflected by 
a fabric at a particular wavelength or range of wavelengths.
It is usually expressed as a percentage, ranging from 0% 
(no light reflected, complete absorption) 
to 100% (all light reflected, no absorption).
*/

/*
Luminance: Luminance refers to the perceived brightness of a 
fabric, taking into account the sensitivity of the human 
eye to different wavelengths of light. 
It is measured in candelas per square meter (cd/m²) or nits.
*/

export const brightness = [
  { name: "Reflectance", code: "reflectance" },
  { name: "Luminance", code: "luminance" },
];

export const superShiny = [
  { name: "Yes", code: true },
  { name: "No", code: false },
];

export const threadCounts = [
  { code: "200-400", name: "Standard Quality" },
  { code: "400-600", name: "Luxury Grade" },
  { code: "600+", name: "Premium Range" },
];

export const opacity = [
  { name: "Transparent (0%)", code: 0 },
  { name: "Semi-Transparent (25%)", code: 25 },
  { name: "Semi-Opaque (50%)", code: 50 },
  { name: "Opaque (75%)", code: 75 },
  { name: "Fully Opaque (100%)", code: 100 },
];

export const waterProof = [
  { name: "Not Waterproof", code: "not_waterproof" },
  { name: "Water-Resistant", code: "water_resistant" },
  { name: "Waterproof", code: "waterproof" },
];
