import { Pageinfo } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const Pageinfo: Pageinfo = data.Pageinfo;

  return Pageinfo;
};
