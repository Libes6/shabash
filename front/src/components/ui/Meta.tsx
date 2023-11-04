import Head from "next/head";
import { useRouter } from 'next/router';
import * as process from 'process';
import React, { FC, PropsWithChildren } from 'react';

interface ISeo {
  title: string;
  description?: string;
  image?: string;
}

export const titleMerge = (title: string) =>
  `${title} | maxShop`;

const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  image,
  children,
}) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;
  return (
    <>
      <Head>
        <title itemProp={'headline'}>
          {titleMerge(title)}
        </title>
        {description ? (
          <>
            <meta
              itemProp={'description'}
              name={description}
              content={description}
            />
            <link rel="shortcut icon" href={image || './rocket.png'}/>
              <link rel={'canonical'} href={currentUrl}/>
              <meta property={'og:locale'} content={'ru'}/>
              <meta property={'og:title'} content={titleMerge(title)}/>
              <meta property={'og:url'} content={currentUrl}/>
              <meta property={'og:image'} content={image || './next.svg'}/>
              <meta property={'og:description'} content={description}/>
          </>
        ) : (
            <meta name='robots' content='noindex,nofolow'/>
        )}
      </Head>
        {children}
    </>
  );
};

export default Meta;
