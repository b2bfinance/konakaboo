import theme from '../theme';

function isValidHex(h) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(h);
}

test('Default theme contains all required attributes', () => {
  expect(Object.keys(theme)).toEqual([
    'mainColor',
    'mainFontFamily',
    'mainNormalFontWeight',
    'mainFontSize',
    'mainBoldFontWeight',
    'mainLineHeight',
    'productMaskBackground',
    'productEmptyBackground',
    'productOutlineBackground',
    'productBorder',
    'productOutlineColor',
    'productHighlightOutlineBackground',
    'productHighlightBorder',
    'productHighlightOutlineColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonBackground',
    'infoButtonColor',
    'infoCheckColor',
    'productFeaturedIconColor',
    'filterChipChosenBackground',
    'filterChipChosenColor',
    'filterHeaderBackground',
    'filterHeaderColor'
  ]);
});

test('Color attributes are valid hex strings', () => {
  const colorAttributes = [
    'mainColor',
    'productMaskBackground',
    'productEmptyBackground',
    'productOutlineBackground',
    'productBorder',
    'productOutlineColor',
    'productHighlightOutlineBackground',
    'productHighlightBorder',
    'productHighlightOutlineColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonBackground',
    'infoButtonColor',
    'infoCheckColor',
    'filterChipChosenBackground',
    'filterChipChosenColor',
    'filterHeaderBackground',
    'filterHeaderColor'
  ];

  colorAttributes.forEach(color => {
    expect(isValidHex(theme[color])).toBeTruthy();
  });
});
