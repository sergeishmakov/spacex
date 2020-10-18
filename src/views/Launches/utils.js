import moment from "moment";
import omit from "lodash/omit";

export function launchDecorator(launch, forPast = false) {
  return launch
    .map(item => {
      if (!forPast && new Date(item.launch_date_local) < new Date())
        return null;
      return {
        ...omit(item, ["launch_date_local"]),
        mission_name: item.mission_name
          .replace(/[A-Za-z1-9]*/, x => {
            return `${x}]`;
          })
          .split("]")[0],
        date: moment(item.launch_date_local).format("lll"),
        from_now: moment(item.launch_date_local).fromNow()
      };
    })
    .filter(Boolean);
}
