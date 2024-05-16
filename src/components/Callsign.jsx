import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

import "@/styles/components/Callsign.css";

import getUserData from "@/api/discordUser";

export default function Callsign() {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const requestUserData = () => {
    const requestInterval = setInterval(async () => {
      let userData = [];
      const { data, statusBeautify } = await getUserData();

      userData.push({
        user: data.discord_user,
        image: `/assets/discord_status/${data.discord_status}.png`,
        status: statusBeautify,
        onMobile: data.active_on_discord_mobile,
      });

      setUser(userData);

      setLoading(false);
    }, 5 * 1000);

    return () => {
      clearInterval(requestInterval);
    };
  };

  useEffect(() => {
    const cleanupRequestUserData = requestUserData();

    return () => {
      cleanupRequestUserData();
    };
  });

  return (
    <div className="callsign">
      {isLoading ? (
        <Skeleton variant="circular" width={32} height={32} sx={{ bgcolor: "grey.900" }} />
      ) : (
        <img
          src={`https://cdn.discordapp.com/avatars/937876388554375188/${user[0].user.avatar}`}
          alt="DISCORD_PROFILE"
        />
      )}

      {isLoading ? (
        <Skeleton variant="text" sx={{ bgcolor: "grey.900", width: "80px", marginLeft: "5px" }} />
      ) : (
        <p>@{user[0].user.username}</p>
      )}

      <div className="status-container">
        <p>Is currently</p>
        <div className="discord-status">
          {isLoading ? (
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              sx={{ bgcolor: "grey.900", marginLeft: "5px" }}
            />
          ) : (
            <img src={user[0].image} alt="STATUS_IMAGE" />
          )}

          {isLoading ? (
            <Skeleton
              variant="text"
              sx={{ bgcolor: "grey.900", width: "80px", marginLeft: "5px" }}
            />
          ) : (
            <i>{user[0].status}</i>
          )}
        </div>
      </div>
    </div>
  );
}
