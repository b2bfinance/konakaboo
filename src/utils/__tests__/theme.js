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
    'productMaskBackground',
    'productEmptyBackground',
    'productOutlineBackground',
    'productOutlineColor',
    'productColBackground',
    'productHighlightOutlineBackground',
    'productHighlightOutlineColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonBackground',
    'infoButtonColor',
    'infoCheckColor',
    'filterHeaderBorder',
    'filterHeaderColor',
    'filterChosenBackground',
    'filterChosenColor'
  ]);
});

test('Color attributes are valid hex strings', () => {
  const colorAttributes = [
    'mainColor',
    'productMaskBackground',
    'productEmptyBackground',
    'productOutlineBackground',
    'productOutlineColor',
    'productColBackground',
    'productHighlightOutlineBackground',
    'productHighlightOutlineColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonBackground',
    'infoButtonColor',
    'infoCheckColor',
    'filterHeaderBorder',
    'filterHeaderColor',
    'filterChosenBackground',
    'filterChosenColor'
  ];

  colorAttributes.forEach(color => {
    expect(isValidHex(theme[color])).toBeTruthy();
  });
});
