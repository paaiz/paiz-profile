import "@/styles/components/menu/Social.css";

import socialMediaArray from "../../assets/socialMedia";
export default function Social() {
  return (
    <>
      <div className="social-header">
        <h1 className="title">Social</h1>
        <p className="paragraph">
          Here's a list of my social media, just in case if you want to contact me
        </p>
      </div>

      {socialMediaArray.map((ctx, index) => {
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
              target="_blank"
              rel="noreferrer"
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
