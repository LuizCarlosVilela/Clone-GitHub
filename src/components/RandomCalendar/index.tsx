import React from "react";
import Heatmap from "react-calendar-heatmap";

import { subYears, isBefore, isSameDay, addDays, subDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;

            if (item != null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 5);
            }

            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>
      <span>Random Calendar</span>
    </Container>
  );
};

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 1 + 1;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  values.push({ date: addDays(startDate, 8), count: 5 });
  values.push({ date: addDays(startDate, 9), count: 5 });
  values.push({ date: addDays(startDate, 10), count: 5 });
  values.push({ date: addDays(startDate, 11), count: 5 });
  values.push({ date: addDays(startDate, 12), count: 5 });
  values.push({ date: addDays(startDate, 13), count: 5 });
  values.push({ date: addDays(startDate, 14), count: 5 });

  values.push({ date: addDays(startDate, 21), count: 5 });
  values.push({ date: addDays(startDate, 28), count: 5 });

  values.push({ date: addDays(startDate, 36), count: 5 });
  values.push({ date: addDays(startDate, 37), count: 5 });
  values.push({ date: addDays(startDate, 38), count: 5 });
  values.push({ date: addDays(startDate, 39), count: 5 });
  values.push({ date: addDays(startDate, 40), count: 5 });
  values.push({ date: addDays(startDate, 41), count: 5 });
  values.push({ date: addDays(startDate, 42), count: 5 });

  values.push({ date: addDays(startDate, 49), count: 5 });

  values.push({ date: addDays(startDate, 50), count: 5 });
  values.push({ date: addDays(startDate, 51), count: 5 });
  values.push({ date: addDays(startDate, 52), count: 5 });
  values.push({ date: addDays(startDate, 53), count: 5 });
  values.push({ date: addDays(startDate, 54), count: 5 });
  values.push({ date: addDays(startDate, 55), count: 5 });
  values.push({ date: addDays(startDate, 56), count: 5 });

  values.push({ date: addDays(startDate, 64), count: 5 });
  values.push({ date: addDays(startDate, 65), count: 5 });
  values.push({ date: addDays(startDate, 66), count: 5 });
  values.push({ date: addDays(startDate, 67), count: 5 });
  values.push({ date: addDays(startDate, 68), count: 5 });
  values.push({ date: addDays(startDate, 69), count: 5 });
  values.push({ date: addDays(startDate, 70), count: 5 });

  values.push({ date: addDays(startDate, 78), count: 5 });
  values.push({ date: addDays(startDate, 85), count: 5 });
  values.push({ date: addDays(startDate, 92), count: 5 });
  values.push({ date: addDays(startDate, 93), count: 5 });
  values.push({ date: addDays(startDate, 94), count: 5 });

  values.push({ date: addDays(startDate, 88), count: 5 });

  values.push({ date: addDays(startDate, 82), count: 5 });
  values.push({ date: addDays(startDate, 83), count: 5 });
  values.push({ date: addDays(startDate, 84), count: 5 });

  values.push({ date: addDays(startDate, 91), count: 5 });
  values.push({ date: addDays(startDate, 98), count: 5 });

  values.push({ date: addDays(startDate, 113), count: 5 });
  values.push({ date: addDays(startDate, 114), count: 5 });
  values.push({ date: addDays(startDate, 115), count: 5 });
  values.push({ date: addDays(startDate, 116), count: 5 });
  values.push({ date: addDays(startDate, 117), count: 5 });
  values.push({ date: addDays(startDate, 118), count: 5 });
  values.push({ date: addDays(startDate, 119), count: 5 });

  values.push({ date: addDays(startDate, 120), count: 5 });
  values.push({ date: addDays(startDate, 126), count: 5 });
  values.push({ date: addDays(startDate, 127), count: 5 });
  values.push({ date: addDays(startDate, 133), count: 5 });

  values.push({ date: addDays(startDate, 141), count: 5 });
  values.push({ date: addDays(startDate, 142), count: 5 });
  values.push({ date: addDays(startDate, 143), count: 5 });
  values.push({ date: addDays(startDate, 144), count: 5 });
  values.push({ date: addDays(startDate, 145), count: 5 });
  values.push({ date: addDays(startDate, 146), count: 5 });
  values.push({ date: addDays(startDate, 147), count: 5 });
  values.push({ date: addDays(startDate, 148), count: 5 });

  values.push({ date: addDays(startDate, 151), count: 5 });

  values.push({ date: addDays(startDate, 155), count: 5 });
  values.push({ date: addDays(startDate, 156), count: 5 });
  values.push({ date: addDays(startDate, 157), count: 5 });
  values.push({ date: addDays(startDate, 158), count: 5 });
  values.push({ date: addDays(startDate, 159), count: 5 });
  values.push({ date: addDays(startDate, 160), count: 5 });
  values.push({ date: addDays(startDate, 161), count: 5 });

  values.push({ date: addDays(startDate, 169), count: 5 });
  values.push({ date: addDays(startDate, 170), count: 5 });
  values.push({ date: addDays(startDate, 171), count: 5 });
  values.push({ date: addDays(startDate, 172), count: 5 });
  values.push({ date: addDays(startDate, 173), count: 5 });
  values.push({ date: addDays(startDate, 174), count: 5 });
  values.push({ date: addDays(startDate, 175), count: 5 });
  values.push({ date: addDays(startDate, 176), count: 5 });

  values.push({ date: addDays(startDate, 183), count: 5 });
  values.push({ date: addDays(startDate, 184), count: 5 });
  values.push({ date: addDays(startDate, 185), count: 5 });

  values.push({ date: addDays(startDate, 187), count: 5 });
  values.push({ date: addDays(startDate, 188), count: 5 });
  values.push({ date: addDays(startDate, 189), count: 5 });

  values.push({ date: addDays(startDate, 179), count: 5 });

  values.push({ date: addDays(startDate, 197), count: 5 });
  values.push({ date: addDays(startDate, 198), count: 5 });
  values.push({ date: addDays(startDate, 199), count: 5 });
  values.push({ date: addDays(startDate, 200), count: 5 });
  values.push({ date: addDays(startDate, 201), count: 5 });
  values.push({ date: addDays(startDate, 202), count: 5 });
  values.push({ date: addDays(startDate, 203), count: 5 });
  values.push({ date: addDays(startDate, 210), count: 5 });
  values.push({ date: addDays(startDate, 217), count: 5 });

  values.push({ date: addDays(startDate, 225), count: 5 });
  values.push({ date: addDays(startDate, 226), count: 5 });
  values.push({ date: addDays(startDate, 227), count: 5 });
  values.push({ date: addDays(startDate, 228), count: 5 });
  values.push({ date: addDays(startDate, 229), count: 5 });
  values.push({ date: addDays(startDate, 230), count: 5 });
  values.push({ date: addDays(startDate, 231), count: 5 });
  values.push({ date: addDays(startDate, 232), count: 5 });

  values.push({ date: addDays(startDate, 238), count: 5 });
  values.push({ date: addDays(startDate, 239), count: 5 });
  values.push({ date: addDays(startDate, 240), count: 5 });
  values.push({ date: addDays(startDate, 241), count: 5 });
  values.push({ date: addDays(startDate, 242), count: 5 });
  values.push({ date: addDays(startDate, 243), count: 5 });
  values.push({ date: addDays(startDate, 244), count: 5 });
  values.push({ date: addDays(startDate, 245), count: 5 });

  values.push({ date: addDays(startDate, 254), count: 5 });
  values.push({ date: addDays(startDate, 255), count: 5 });
  values.push({ date: addDays(startDate, 259), count: 5 });
  values.push({ date: addDays(startDate, 260), count: 5 });

  values.push({ date: addDays(startDate, 263), count: 5 });
  values.push({ date: addDays(startDate, 266), count: 5 });

  values.push({ date: addDays(startDate, 267), count: 5 });
  values.push({ date: addDays(startDate, 271), count: 5 });
  values.push({ date: addDays(startDate, 272), count: 5 });

  return values;
};

export default RandomCalendar;
