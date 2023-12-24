import "@/styles/components/menu/Social.css";

import {
  SiDiscord,
  SiInstagram,
  SiReddit,
  SiSpotify,
  SiTwitter,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export default function Social() {
  return (
    <>
      <div className="social-header">
        <h1>Social</h1>
        <p>Here's a list of my social media, just in case if you want to contact me</p>
      </div>

      {list.map((ctx, index) => {
        let color =
          ctx.colorArray.length > 1
            ? ctx.colorArray.map((val, i) => {
                let math = Math.min(
                  Math.max(Math.round((100 / ctx.colorArray.length) * i), 0),
                  100
                );

                return `${val} ${i === 1 && ctx.colorArray.length === 2 ? 90 : math}%`;
              })
            : ctx.colorArray[0];

        return (
          <div key={index} className="social-content">
            <a
              href={ctx.url}
              className="social-link"
              style={
                ctx.colorArray.length > 1
                  ? {
                      backgroundImage: `linear-gradient(45deg, ${color})`,
                    }
                  : { backgroundColor: ctx.colorArray[0] }
              }
            >
              <div className="inside">
                <ctx.logo />

                <h1>{ctx.title}</h1>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}

const list = [
  {
    title: "Instagram",
    logo: SiInstagram,
    url: "https://example.com",
    colorArray: ["#5851db", "#833ab4", "#c13584", "#e1306c", "#fd1d1d"],
  },
  {
    title: "Discord",
    logo: SiDiscord,
    url: "https://example.com",
    colorArray: ["#7289DA", "#99aab5", "#2c2f33", "#23272a"],
  },
  {
    title: "Twitter",
    logo: SiTwitter,
    url: "https://example.com",
    colorArray: ["#66757f", "#00ACEE", "#36D8FF", "#f5f8fa", "#ffffff"],
  },
  {
    title: "Spotify",
    logo: SiSpotify,
    url: "https://example.com",
    colorArray: ["#1db954", "#191414"],
  },
  {
    title: "Whatsapp",
    logo: SiWhatsapp,
    url: "https://example.com",
    colorArray: ["#E5FFCC", " #1EBEA5", " #00E676", "#D0E9EA", "#EDF8F5", "#ffffff"],
  },
  {
    title: "Reddit",
    logo: SiReddit,
    url: "https://example.com",
    colorArray: ["#ff4500", "#5f99cf", "#cee3f8"],
  },
  // {
  //   title: "null",
  //   url: "https://example.com",
  //   colorArray: ["#E7BCDE"],
  // },
  // {
  //   title: "null",
  //   url: "https://example.com",
  //   colorArray: ["#BB9CC0"],
  // },
];
