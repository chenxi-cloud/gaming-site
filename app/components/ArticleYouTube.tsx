"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type ArticleYouTubeProps = {
  id: string;
  title: string;
};

/**
 * Paul Irish–style lite embed: thumbnail + play until click, then iframe.
 * IMPORTANT: `wrapperClass` must include `yt-lite` — it replaces the default
 * string entirely; omitting it breaks 16:9 layout and iframe positioning.
 */
export function ArticleYouTube({ id, title }: ArticleYouTubeProps) {
  return (
    <div className="article-youtube my-6 w-full max-w-full overflow-hidden rounded-xl border border-neutral-800 bg-black shadow-lg shadow-black/40">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        poster="maxresdefault"
        wrapperClass="yt-lite w-full max-w-full"
        iframeClass="rounded-b-xl"
        cookie
        params="rel=0"
      />
    </div>
  );
}
