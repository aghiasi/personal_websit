import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ActiveRooms from "./components/ActiveRooms";

type Mail = {
  id?: string;
  email: string;
  subject: string;
  message: string;
  unseen?: boolean;
  createdAt?: string;
};

type MailResponse = {
  success?: boolean;
  messages?: Mail[];
  message?: Mail[];
};
const getMails = async (): Promise<Mail[]> => {
  try {
    const baseUrl = process.env.BASE_URL;

    if (!baseUrl) {
      console.error("BASE_URL is not configured.");
      return [];
    }

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/mail`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch mails:", response.status);
      return [];
    }

    const data: MailResponse = await response.json();

    // Supports both the old "message" response
    // and the newer "messages" response.
    return data.messages ?? data.message ?? [];
  } catch (error) {
    console.error("Failed to get mails:", error);
    return [];
  }
};

export default async function Page() {
  const mails = await getMails();

  const unseenCount = mails.filter((mail) => mail.unseen).length;

  return (
    <section
      className="
        min-h-screen
        w-full
        bg-[#070b12]
        px-4
        py-6
        text-white
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mb-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
            Admin Panel
          </p>

          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your website and monitor incoming activity.
          </p>
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-7">
          {/* Messages */}
          <div className="xl:col-span-3">
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                shadow-2xl
                shadow-black/10
                backdrop-blur-xl
              "
            >
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-sky-400/20
                      bg-sky-400/10
                      text-sky-300
                    "
                  >
                    <MailOutlineIcon fontSize="small" />
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-white">
                      Messages
                    </h2>

                    <p className="text-xs text-gray-500">
                      {mails.length} total messages
                    </p>
                  </div>
                </div>

                {unseenCount > 0 && (
                  <span
                    className="
                      rounded-full
                      border
                      border-sky-400/20
                      bg-sky-400/10
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-sky-300
                    "
                  >
                    {unseenCount} new
                  </span>
                )}
              </div>

              {/* Messages */}
              <div className="h-[450px] overflow-y-auto p-3">
                {mails.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <MailOutlineIcon
                      className="mb-3 text-gray-700"
                      sx={{ fontSize: 42 }}
                    />

                    <p className="text-sm font-medium text-gray-400">
                      No messages
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Contact messages will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {mails.slice(0, 10).map((item, index) => (
                      <Link
                        key={item.id ?? index}
                        href="/admin/messages"
                        className={`
                          block
                          rounded-xl
                          border
                          p-4
                          transition-all
                          ${
                            item.unseen
                              ? "border-sky-400/20 bg-sky-400/[0.06] hover:bg-sky-400/[0.1]"
                              : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                          }
                        `}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-gray-200">
                              {item.email}
                            </p>

                            <p className="mt-1 truncate text-sm text-gray-400">
                              {item.subject}
                            </p>
                          </div>

                          {item.unseen && (
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                          )}
                        </div>

                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600">
                          {item.message}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 p-3">
                <Link
                  href="/admin/messages"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-2.5
                    text-sm
                    text-gray-400
                    transition-all
                    hover:border-sky-400/20
                    hover:bg-sky-400/[0.05]
                    hover:text-sky-300
                  "
                >
                  View all messages
                  <ArrowForwardIcon fontSize="small" />
                </Link>
              </div>
            </div>
          </div>

          {/* Active Rooms */}
          <div className="xl:col-span-4">
            <ActiveRooms />
          </div>
        </div>
      </div>
    </section>
  );
}
