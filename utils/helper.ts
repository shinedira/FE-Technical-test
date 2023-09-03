import { Featured } from "~/types/home";

export const parseImage = (feature: Featured | undefined) => {
  if (!feature) return "";

  return `${feature.aws_file_url}/${feature.path}/${feature.filename.big}`;
};
