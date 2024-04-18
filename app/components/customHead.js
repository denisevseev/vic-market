export default function CustomHeadData({
  title,
  productSlug,
  description,
  keywords,
  image,
  imageMime,
  price,
  id,
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={`${keywords}, sell, buy, products`}></meta>
      <meta
        name="description"
        content={`${description} | victorum-marketplace`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          process.env.NEXT_PUBLIC_FRONT_LINK + "/product/" + productSlug + "/" + id
        }
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          title + " " + price
            ? price
            : "Price on request" + " victorum-marketplace"
        }
      />
      {image && <meta property="og:image" content={image} />}
      {imageMime && (
        <meta property="og:image:type" content={`image/${imageMime}`} />
      )}

      {!image && (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_FRONT_LINK}/logoTrade-whiteBG.png`}
        />
      )}

      {!image && <meta property="og:image:width" content="1200" />}

      {!image && <meta property="og:image:height" content="630" />}

      {image && <meta property="og:image:width" content="200" />}
      {image && <meta property="og:image:height" content="200" />}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
