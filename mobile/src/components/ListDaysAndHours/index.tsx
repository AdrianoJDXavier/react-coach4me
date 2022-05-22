import { View, Image, Text, Linking } from "react-native";
import api from "../../services/api";
import convertMinutesToHour from "../../utils/convertMinutesToHour";
import convertNumberToDay from "../../utils/convertNumberToDay";
import styles from "./styles";

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
    <View>
      <Text style={styles.price}>
        Disponível{" "}
        <Text style={styles.priceValue}>
          {convertNumberToDay(parseInt(listDaysHour.week_day))}
        </Text>
      </Text>
      <Text style={styles.price}>
        Horário{" "}
        <Text style={styles.priceValue}>
          {convertMinutesToHour(parseInt(listDaysHour.from))}
        </Text>{" "}
        até{" "}
        <Text style={styles.priceValue}>
          {convertMinutesToHour(parseInt(listDaysHour.to))}
        </Text>
      </Text>
    </View>
  );
};

export default ListDaysAndHours;
