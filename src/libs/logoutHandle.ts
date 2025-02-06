import { redirect } from "next/navigation";
export const logoutHandle = async () => {
  let redirectPath: string = "";
  try {
    const request = await fetch("/api/logout", {
      method: "POST",
    });
    if(request)
    redirectPath = "/";
  } catch (e) {
    console.log(e)
  } finally {
    redirect(redirectPath);
  }
};
