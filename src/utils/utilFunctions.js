import _ from "lodash";

const mapMaqamCat = (maqamCat) => {
  const { name, id, singular, count, categories } = maqamCat;

  if (count > 1) {
    return {
      id,
      name,
      subtitle: count.toString() + " " + name,
      categories,
    };
  } else {
    return {
      id,
      name,
      subtitle: count.toString() + " " + singular,
      categories,
    };
  }
};

const toRadians = (deg) => {
  const rad = (deg * Math.PI) / 180;
  return rad;
};

const insertDistance = async (maqams, coords) => {
  //iterate over maqams and add distance data and return the data (to be inserted back into state)
  const updatedMaqams = [];
  maqams.forEach(function (maqam) {
    dist = calcDistance(
      maqam.latitude,
      maqam.longitude,
      coords.latitude,
      coords.longitude
    );
    maqam["dist"] = dist;
    updatedMaqams.push(maqam);
  });
  return updatedMaqams;
};

export const contains = ({ name, nameAr, type, country }, query) => {
  if (
    name.toLowerCase().includes(query) ||
    type.toLowerCase().includes(query) ||
    nameAr.toLowerCase().includes(query) ||
    country.toLowerCase().includes(query)
  ) {
    return true;
  }

  return false;
};

export const containsCat = ({ tariqa, type, country }, query) => {
  if (
    type.toLowerCase().includes(query) ||
    country.toLowerCase().includes(query) ||
    tariqa.toLowerCase().includes(query)
  ) {
    return true;
  }
  return false;
};

export const calcDistance = (lat1, long1, lat2, long2) => {
  const R = 6371e3; //Earth radius in meters
  const T1 = toRadians(lat1);
  const T2 = toRadians(lat2);
  const DT = toRadians(lat2 - lat1);
  const Dl = toRadians(long2 - long1);
  const a =
    Math.sin(DT / 2) * Math.sin(DT / 2) +
    Math.cos(T1) * Math.cos(T2) * Math.sin(Dl / 2) * Math.sin(Dl / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export const closest = (delta, range) => {
  if (delta <= range) {
    return true;
  }

  return false;
};

export const fetchCountry = async (coords) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${coords.coords.latitude}&lon=${coords.coords.longitude}&appid=bac0d9d4291a192a34aec3ba5e9aab43&units=metric`
    );
    const { sys, name, weather, main } = await response.json();
    return { sys, name, weather, main, error: false };
  } catch (error) {
    return { error: true };
  }
};

export const checkDirectionCountry = async () => {
  try {
    const response = await fetch(
      "https://maqamapp.netlify.com/json/directions-ios.json"
    );
    const returnData = await response.json();
    return { data: returnData, error: false };
  } catch (error) {
    return { error2: true };
  }
};
