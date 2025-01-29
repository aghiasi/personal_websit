import { Octokit } from "@octokit/core";
const token = process.env.SECRET_GIT_HUB;
const octokit = new Octokit({ auth: token });
interface something {
  name: string;
  url: string;
  date: string | null;
  language: string;
}
export const fetchGit = async () => {
  const req = await octokit.request("GET /user/repos", {
    owner: "aghiasi",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const someData = req.data.map((i: any) => {
    return {
      name: i.name,
      url: i.html_url,
      date: i.created_at,
      language: i.language,
    };
  });
  return someData;
};
