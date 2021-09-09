import _ from "lodash";

export default function parseCategories(maqamCats) {
  try {
    const cat1 = _.sortBy(maqamCats.results[0], ["name"]);
    const cat2 = _.sortBy(maqamCats.results[1], ["name"]);
    const cat3 = _.sortBy(maqamCats.results[2], ["name"]);
    const allcats = [];
    allcats.push(cat1);
    allcats.push(cat2);
    allcats.push(cat3);
    return allcats;
  } catch (error) {
    return { error: true };
  }
}
