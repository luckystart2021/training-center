const Utils = {
  baseURL: "https://api.dtc-project.tk",
};

export const getAssetUrl = (uri: string): string =>
  uri ? Utils.baseURL + uri : "";

export default Utils;
