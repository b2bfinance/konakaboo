export function buyToLetInitialState() {
  return [
    {
      title: 'Maximum LTV',
      multiChoice: false,
      filterKey: 'ltv',
      choices: [
        {
          label: '60% LTV +',
          value: 60,
        },
        {
          label: '70% LTV +',
          value: 70,
        },
        {
          label: '80% LTV +',
          value: 80,
        },
        {
          label: '85% LTV +',
          value: 85,
        },
        {
          label: '90% LTV +',
          value: 90,
        },
      ],
    },
    {
      title: 'Initial Rate Type',
      multiChoice: true,
      filterKey: 'rateType',
      choices: [
        {
          label: 'Fixed',
          value: 'FIXED',
        },
        {
          label: 'Variable',
          value: 'VARIABLE',
        },
        {
          label: 'Tracker',
          value: 'TRACKER',
        },
      ],
    }
  ];
}
