import { MessageChain, MessageType } from "../features/chat/types";

export const RESPONSE_DATA: Record<string, MessageChain> = {
  "What is my top-performing dish this month?": [
    {
      type: MessageType.text,
      data: "The top-performing dish this month is Grilled Salmon with 450 orders, generating $11,250 in revenue.",
    },
    {
      type: MessageType.table,
      data: [
        { category: "Grilled Salmon", performance: "450 ($11,250)" },
        { category: "Ribeye Steak", performance: "400 ($10,000)" },
        { category: "Caesar Salad", performance: "300 ($4,500)" },
      ],
      columns: [
        { title: "Dish", dataIndex: "category", key: "category" },
        { title: "Performance", dataIndex: "performance", key: "performance" },
      ],
    },
    {
      type: MessageType.text,
      data: "Would you like to see how this compares to last month or view trends over time?",
    },
  ],
  "Which day of the week is performing the best?": [
    {
      type: MessageType.text,
      data: "Friday is your best-performing day with total sales of $12,000 and 300 customers served. Following it are Saturday ($10,500) and Sunday ($9,800).",
    },
    {
      type: MessageType.chart,
      data: [
        { category: "Monday", performance: 4000 },
        { category: "Tuesday", performance: 5000 },
        { category: "Wednesday", performance: 6000 },
        { category: "Thursday", performance: 7000 },
        { category: "Friday", performance: 12000 },
        { category: "Saturday", performance: 10500 },
        { category: "Sunday", performance: 9800 },
      ],
    },
    {
      type: MessageType.text,
      data: "Would you like to explore why Friday is performing the best or analyze trends for specific time periods?",
    },
  ],
  "How is the performance of Grilled Salmon?": [
    {
      type: MessageType.text,
      data: "Grilled Salmon has been ordered 150 times this week, generating $3,750 in revenue and contributing 15% to your total food sales.",
    },
  ],
  "What is the average table turnover rate?": [
    {
      type: MessageType.text,
      data: "Your average table turnover rate is 45 minutes, meaning each table serves approximately 1.3 parties per hour.",
    },
    {
      type: MessageType.chart,
      data: [
        { category: "Lunch (11 AM - 2 PM)", performance: 40 },
        { category: "Dinner (6 PM - 9 PM)", performance: 50 },
        { category: "Weekend Brunch", performance: 60 },
      ],
    },
    {
      type: MessageType.text,
      data: "Would you like to see turnover rates by specific times or compare peak hours to off-peak hours?",
    },
  ],
};

export const SUGGESTIONS = [
  "What is my top-performing dish this month?",
  "Which day of the week is performing the best?",
  "How is the performance of Grilled Salmon?",
  "What is the average table turnover rate?",
];
