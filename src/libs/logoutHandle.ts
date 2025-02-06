import { redirect } from "next/navigation";
export const logoutHandle = async () => {
  let redirectPath: string = "";
  try {
    const request = await fetch("/api/logout", {
      method: "POST",
    });
    redirectPath = "/";
  } catch (e) {
  } finally {
    redirect(redirectPath);
  }
};
