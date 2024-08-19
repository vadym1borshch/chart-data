import { v4 } from 'uuid';

export const cardData = [
  {
    id: v4(),
    title: 'Total Sales',
    description: 'Total Sales',
    value: '600',
  },
  {
    id: v4(),
    title: 'Total Value',
    description: 'Total Value',
    value: '$12,340',
  },
  {
    id: v4(),
    title: 'Avg. Order Value',
    description: 'Avg. Order Value',
    value: '$1234',
  },
  {
    id: v4(),
    title: 'Conversation rate',
    description: 'Conversation rate',
    value: '0.9%',
  },
];

export const pieChartData = [
  {
    id: v4(),
    data: [
      { id: v4(), value: 10, label: 'series A' },
      { id: v4(), value: 30, label: 'series B' },
      { id: v4(), value: 20, label: 'series C' },
    ],
  },
  {
    id: v4(),
    data: [
      { id: v4(), value: 20, label: 'series D' },
      { id: v4(), value: 40, label: 'series E' },
      { id: v4(), value: 5, label: 'series F' },
    ],
  },
  {
    id: v4(),
    data: [
      { id: v4(), value: 15, label: 'series G' },
      { id: v4(), value: 2, label: 'series H' },
      { id: v4(), value: 90, label: 'series I' },
    ],
  },
];
export const barChartData = {
  month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  data: [{ data: [32, 34, 53, 12, 56, 46, 67, 98, 65, 32, 23, 56] }],
};
