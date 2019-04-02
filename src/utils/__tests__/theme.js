import theme from '../theme';

function isValidHex(h) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(h);
}

test('Default theme contains all required attributes', () => {
  expect(Object.keys(theme)).toEqual([
    'productMaskBackground',
    'productEmptyBackground',
    'productBorder',
    'productBackground',
    'productHeadingColor',
    'productHighlightColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonColor',
    'productFeaturedIconColor',
    'filterChipChosenBackground',
    'filterChipChosenColor',
    'filterHeaderBackground',
    'filterHeaderColor'
  ]);
});

test('Theme attributes are valid', () => {
  const colorAttributes = [
    'productMaskBackground',
    'productEmptyBackground',
    'productBorder',
    'productBackground',
    'productHeadingColor',
    'productHighlightColor',
    'applyButtonBackground',
    'applyButtonColor',
    'infoButtonColor',
    'productFeaturedIconColor',
    'filterChipChosenBackground',
    'filterChipChosenColor',
    'filterHeaderBackground',
    'filterHeaderColor'
  ];

  colorAttributes.forEach(color => {
    expect(
      [
        isValidHex(theme[color]),
        ['unset', 'inherit'].indexOf(theme[color]) !== -1,
        theme[color].startsWith('rgb')
      ].some(b => b === true)
    ).toBeTruthy();
  });
});
