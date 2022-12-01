import { React} from "react";
import Datepicker from "../DatePicker/Datepicker";

export default function calendariobanner({startDate, endDate, setDateRange}) {
    
    return (
    <div>
        <Datepicker
            placeholderText=" Check in - Check out"
            isInputWithCalendar={true}
            className="inputBanner"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            minDate={new Date()}
            locale="es"
            monthsShown={2}
            dateFormat="yyyy/M/d"
            changeMonth
        />
    </div>
  )
}
