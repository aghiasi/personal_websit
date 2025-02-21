import { Octokit } from "@octokit/core";
const token = process.env.SECRET_GIT_HUB;
const octokit = new Octokit({
  auth: token,
});
export const getAllLang = async (url: string) => {
  const data = await octokit.request(url);
  return data;
};
