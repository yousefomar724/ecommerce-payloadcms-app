import React from "react";
import payload from "payload";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { Type as PageType } from "../collections/Page";
import NotFound from "../components/NotFound";
import Head from "../components/Head";
import classes from "../css/page.module.css";
import Card from "../components/card";
import Link from "next/link";

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

export type Props = {
  page?: PageType;
  statusCode: number;
  data: any;
};

const Page: React.FC<Props> = (props) => {
  const { page, data } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <main>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <header className="px-2 py-4 bg-slate-800 text-white w-full">
        <nav className="container m-auto flex justify-between items-center">
          <h3 className="font-bold text-2xl">HOME</h3>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <a className="snipcart-checkout text-2xl cursor-pointer">
              <span className="snipcart-total-price">$0.00</span>(
              <span className="snipcart-items-count">0</span>)
              {/* ${cart.subtotal?.toFixed(2)} */}
            </a>
          </ul>
        </nav>
      </header>
      <div className="flex justify-center items-center gap-4 mt-12">
        {data.docs.map((product: any) => {
          return (
            <Card
              product={{
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image.url,
                id: product.id,
              }}
            />
          );
        })}
      </div>
      <footer className={classes.footer}>
        <hr />
        NextJS + Payload Server Boilerplate made by{" "}
        <a
          href="https://payloadcms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Payload
        </a>
      </footer>
    </main>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/products`
  );
  const data = await res.json();
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join("/")
    : "home";

  const pageQuery = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
      data,
    },
  };
};
