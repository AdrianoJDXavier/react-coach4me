import React from "react";
import api from "../../services/api";
import convertMinutesToHour from "../../utils/convertMinutesToHour";
import convertNumberToDay from "../../utils/convertNumberToDay";

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
          <p>{convertNumberToDay(parseInt(listDaysHour.week_day))}</p>
          <p>{convertMinutesToHour(parseInt(listDaysHour.from))} até {convertMinutesToHour(parseInt(listDaysHour.to))}</p>
        </div>
      </div>
    </div>  
  );
};

export default ListDaysAndHours;
