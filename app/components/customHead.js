export default function CustomHeadData({
  title,
  description,
  keywords,
  image,
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
    </>
  );
}
