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
  values.push({ date: subDays(new Date(), 2), count: 4 });

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
