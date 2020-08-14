import React from "react";
import Heatmap from "react-calendar-heatmap";

import { subYears, isBefore, isSameDay, addDays, subDays } from "date-fns";

import { Container } from "./styles";

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const values: HeatmapValue[] = [];

  values.push({ date: new Date(), count: 3 });
  values.push({ date: subDays(new Date(), 2), count: 3 });
  values.push({ date: subDays(new Date(), 311), count: 3 });
  values.push({ date: subDays(new Date(), 310), count: 3 });
  values.push({ date: subDays(new Date(), 309), count: 3 });
  values.push({ date: subDays(new Date(), 308), count: 3 });
  values.push({ date: subDays(new Date(), 307), count: 3 });
  values.push({ date: subDays(new Date(), 306), count: 3 });
  values.push({ date: subDays(new Date(), 305), count: 3 });

  values.push({ date: subDays(new Date(), 298), count: 3 });
  values.push({ date: subDays(new Date(), 291), count: 3 });

  values.push({ date: subDays(new Date(), 269), count: 3 });
  values.push({ date: subDays(new Date(), 268), count: 3 });
  values.push({ date: subDays(new Date(), 267), count: 3 });
  values.push({ date: subDays(new Date(), 266), count: 3 });
  values.push({ date: subDays(new Date(), 265), count: 3 });
  values.push({ date: subDays(new Date(), 264), count: 3 });

  values.push({ date: subDays(new Date(), 270), count: 3 });
  values.push({ date: subDays(new Date(), 263), count: 3 });

  values.push({ date: subDays(new Date(), 277), count: 3 });
  values.push({ date: subDays(new Date(), 278), count: 3 });
  values.push({ date: subDays(new Date(), 279), count: 3 });
  values.push({ date: subDays(new Date(), 280), count: 3 });
  values.push({ date: subDays(new Date(), 281), count: 3 });
  values.push({ date: subDays(new Date(), 282), count: 3 });
  values.push({ date: subDays(new Date(), 283), count: 3 });

  values.push({ date: subDays(new Date(), 249), count: 3 });
  values.push({ date: subDays(new Date(), 250), count: 3 });
  values.push({ date: subDays(new Date(), 251), count: 3 });
  values.push({ date: subDays(new Date(), 252), count: 3 });
  values.push({ date: subDays(new Date(), 253), count: 3 });
  values.push({ date: subDays(new Date(), 254), count: 3 });
  values.push({ date: subDays(new Date(), 255), count: 3 });

  values.push({ date: subDays(new Date(), 241), count: 3 });
  values.push({ date: subDays(new Date(), 234), count: 3 });
  values.push({ date: subDays(new Date(), 227), count: 3 });

  values.push({ date: subDays(new Date(), 226), count: 3 });
  values.push({ date: subDays(new Date(), 225), count: 3 });

  values.push({ date: subDays(new Date(), 237), count: 3 });
  values.push({ date: subDays(new Date(), 236), count: 3 });
  values.push({ date: subDays(new Date(), 235), count: 3 });

  values.push({ date: subDays(new Date(), 215), count: 3 });
  values.push({ date: subDays(new Date(), 205), count: 3 });

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;

            if (item != null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
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

const generateHeatmapValues = (startDate: Date, endDate: Date) => {};

export default RandomCalendar;
