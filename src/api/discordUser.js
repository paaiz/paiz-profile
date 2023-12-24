let discordUserId = "937876388554375188";

const getUserData = async () => {
  const rawRes = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);

  const { data } = await rawRes.json();

  let statusBeautify;
  switch (data.discord_status) {
    case "online":
      statusBeautify = data.active_on_discord_mobile ? "Online (Mobile)" : "Online";
      data.discord_status = data.active_on_discord_mobile ? "online-mobile" : "online";
      break;

    case "offline":
      statusBeautify = "Offline";
      break;

    case "idle":
      statusBeautify = "Idle";
      break;

    case "dnd":
      statusBeautify = "Do not disturb!";
      break;

    default:
      break;
  }

  return { data, statusBeautify };
};

export default getUserData;
