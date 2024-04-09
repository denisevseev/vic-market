export default function HeadData({ title, description, keywords }) {
  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}
