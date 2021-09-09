import _ from "lodash";
import { closest, containsCat, contains, calcDistance } from "./utilFunctions";

export default function parseMaqams(
  maqamData,
  cat = "",
  query = "",
  coords = {}
) {
  try {
    if (cat == "") {
      if (query.length === 0) {
        if (coords.hasOwnProperty("coords")) {
          const updatedMaqams = [];
          maqamData.results.forEach(function (maqam) {
            dist = calcDistance(
              maqam.latitude,
              maqam.longitude,
              coords.coords.latitude,
              coords.coords.longitude
            );
            maqam["dist"] = dist;
            updatedMaqams.push(maqam);
          });
          const results = _.filter(updatedMaqams, (maqam) => {
            return closest(maqam.dist, 400e3);
          });
          return _.sortBy(_.take(results, 100), ["dist"]);
        } else {
          return _.sortBy(_.take(maqamData.results, 100), ["name"]);
        }
      } else {
        const formattedQuery = query.toLowerCase();
        if (coords.hasOwnProperty("coords")) {
          const updatedMaqams = [];
          maqamData.results.forEach(function (maqam) {
            dist = calcDistance(
              maqam.latitude,
              maqam.longitude,
              coords.coords.latitude,
              coords.coords.longitude
            );
            maqam["dist"] = dist;
            updatedMaqams.push(maqam);
          });
          const results = _.filter(updatedMaqams, (maqam) => {
            return closest(maqam.dist, 400e3);
          });
          const resultsF = _.filter(results, (maqam) => {
            return contains(maqam, formattedQuery);
          });
          return _.sortBy(_.take(resultsF, 100), ["dist"]);
        } else {
          const results = _.filter(maqamData.results, (maqam) => {
            return contains(maqam, formattedQuery);
          });
          return _.sortBy(_.take(results, 100), ["name"]);
        }
      }
    } else {
      const formattedCat = cat.toLowerCase();
      const resultsCat = _.filter(maqamData.results, (maqam) => {
        return containsCat(maqam, formattedCat);
      });
      if (query.length === 0) {
        return _.sortBy(_.take(resultsCat, 100), ["name"]);
      } else {
        const formattedQuery = query.toLowerCase();
        const results = _.filter(resultsCat, (maqam) => {
          return contains(maqam, formattedQuery);
        });
        return _.sortBy(_.take(results, 100), ["name"]);
      }
    }
  } catch (error) {
    return { error: true };
  }
}
