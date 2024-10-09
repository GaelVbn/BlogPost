const Img = ({ url, caption }) => {
  return (
    <div>
      <img src={url} alt={caption || "Image"} />{" "}
      {/* Meilleur alt pour accessibilité */}
      {caption && caption.length ? (
        <p className="w-full text-center my-3 md:mb-12 text-base text-dark-grey">
          {caption}
        </p>
      ) : null}{" "}
      {/* Utilise null plutôt que "" */}
    </div>
  );
};

const Quote = ({ quote, caption }) => {
  const formattedQuote = quote.replace(/\n/g, "<br />"); // Convertit les \n en <br />

  return (
    <div className="bg-purple/10 p-3 pl-5 border-l-4 border-purple">
      {/* Utilise dangerouslySetInnerHTML pour rendre le contenu avec <br> */}
      <p
        className="text-xl leading-10 md:text-2xl"
        dangerouslySetInnerHTML={{ __html: formattedQuote }}
      ></p>
      {caption && caption.length ? (
        <p className="w-full text-purple text-base">{caption}</p>
      ) : null}
    </div>
  );
};

const List = ({ style, items }) => {
  return (
    <ol
      className={`pl-5 ${style === "ordered" ? "list-decimal" : "list-disc"}`}
    >
      {items.map((listItem, i) => {
        return (
          <li
            key={i}
            className="my-4"
            dangerouslySetInnerHTML={{ __html: listItem }} // Sois sûr que le contenu est sécurisé
          ></li>
        );
      })}
    </ol>
  );
};

const BlogContent = ({ block }) => {
  let { type, data } = block;

  if (type === "paragraph") {
    return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>;
  }
  if (type === "header") {
    if (data.level === 3) {
      return (
        <h3
          className="text-3xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></h3>
      );
    }
    return (
      <h2
        className="text-4xl font-bold"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></h2>
    );
  }

  if (type === "image") {
    return <Img url={data.file.url} caption={data.caption} />;
  }

  if (type === "quote") {
    return <Quote quote={data.text} caption={data.caption} />;
  }

  if (type === "list") {
    return <List style={data.style} items={data.items} />;
  }

  // Rendu par défaut si le type ne correspond pas
  return null;
};

export default BlogContent;
