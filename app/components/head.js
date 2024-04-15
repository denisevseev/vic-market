export default function HeadData({ title, description, keywords }) {
  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_LINK} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_FRONT_LINK}/logoTrade-whiteBG.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}
