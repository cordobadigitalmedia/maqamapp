import _ from "lodash";
import { containsIds, containsCat } from "./utilFunctions";

export default function getMaqambyIds(maqamData, ids) {
  try {
    console.log(maqamData,ids);
    const results = _.filter(maqamData.results, (maqam) => {
      return containsIds(maqam, ids);
    });
    if (results.length > 0) {
      return results;
    } else {
      return { error: "not found" };
    }
  } catch (error) {
    return { error: true };
  }
}
