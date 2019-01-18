import theme from '../theme';

function isValidHex(h) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(h);
}

test('Default theme contains all required attributes', () => {
  expect(Object.keys(theme)).toEqual([
    'productMaskBackground',
    'productEmptyBackground',
    'productBorder',
    'productHighlightColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonBackground',
    'infoButtonColor',
    'productFeaturedIconColor',
    'filterChipChosenBackground',
    'filterChipChosenColor',
    'filterHeaderBackground',
    'filterHeaderColor'
  ]);
});

test('Color attributes are valid hex strings', () => {
  const colorAttributes = [
    'productMaskBackground',
    'productEmptyBackground',
    'productBorder',
    'productHighlightColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonBackground',
    'infoButtonColor',
    'productFeaturedIconColor',
    'filterChipChosenBackground',
    'filterChipChosenColor',
    'filterHeaderBackground',
    'filterHeaderColor'
  ];

  colorAttributes.forEach(color => {
    expect(isValidHex(theme[color])).toBeTruthy();
  });
});
