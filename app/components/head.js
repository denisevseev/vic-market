import Head from "next/head";

export default function HeadData({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="trade, product, food, pet supplies, drugstore, electronics, fashion, home, garden, toys, sports, leisure, beauty, health, baby, tools, building, household, office, multimedia, garden, furniture, lighting, DIY, construction, renovation, hobby, leisure, fashion, clothing, shoes, accessories, jewelry, watches, bags, luggage, underwear"
      />

      <meta
        name="description"
        content="Victorum Trade is a platform that allows you to buy and sell products online. We offer a wide range of products from various categories such as food, pet supplies, drugstore, electronics, fashion, home, garden, toys, sports, leisure, beauty, health, baby, tools, building, household, office, multimedia, garden, furniture, lighting, DIY, construction, renovation, hobby, leisure, fashion, clothing, shoes, accessories, jewelry, watches, bags, luggage, underwear."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
}
