import React from "react";

import api from "../../services/api";


export interface ListDaysAndHour {
  id: string;
  week_day: string;
  from: string;
  to: string;
  class_id: string;
}

interface DayHoursItemProps {
  listDaysHour: ListDaysAndHour;
}

const ListDaysAndHours: React.FC<DayHoursItemProps> = ({ listDaysHour }) => {
  
  const coach_id = listDaysHour.id;
  const response = api.get("ListDaysAndHours", {
    params: { coach_id },
  });

  console.log(response);
  return (
    <div>
      <div className="agenda">
        <div className="header-day">Dias Disponíveis</div>
        <div className="content-day">
          <p>{listDaysHour.week_day}</p>
          <p>{listDaysHour.from} até {listDaysHour.to}</p>
        </div>
      </div>
    </div>  
  );
};

export default ListDaysAndHours;
