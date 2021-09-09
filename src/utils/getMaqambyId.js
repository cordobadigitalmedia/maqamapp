import _ from "lodash";
import { containsId, containsCat } from "./utilFunctions";

export default function getMaqambyId(maqamData, id) {
  try {
    const results = _.filter(maqamData.results, (maqam) => {
      return containsId(maqam, id);
    });
    if (results.length > 0) {
      return results[0];
    } else {
      return { error: "not found" };
    }
  } catch (error) {
    return { error: true };
  }
}
