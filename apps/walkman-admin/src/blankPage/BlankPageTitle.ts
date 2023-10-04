import { BlankPage as TBlankPage } from "../api/blankPage/BlankPage";

export const BLANKPAGE_TITLE_FIELD = "title";

export const BlankPageTitle = (record: TBlankPage): string => {
  return record.title?.toString() || String(record.id);
};
