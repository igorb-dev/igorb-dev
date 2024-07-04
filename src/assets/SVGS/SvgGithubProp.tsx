import * as React from "react";
import { SVGProps } from "react";
const SvgGithubProp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <path
      fill="#CCC"
      d="M21.35 56.203A2.398 2.398 0 0 0 22.8 54v-6.48c0-.236.02-.482.05-.732a.733.733 0 0 1-.05.012h-4.32c-1.8 0-3.36-.72-4.08-2.16-.84-1.56-1.2-4.2-3.36-5.64-.36-.24-.12-.6.6-.6.72.12 2.28 1.08 3.24 2.4 1.08 1.32 2.16 2.4 4.08 2.4 2.984 0 4.584-.15 5.546-.666C25.627 40.867 27.18 39.6 28.8 39.6v-.03c-6.802-.218-11.147-2.48-13.17-5.97-4.398.05-8.227.486-10.412.848-.07-.392-.13-.787-.182-1.184 2.157-.355 5.812-.776 10.014-.857a9.795 9.795 0 0 1-.349-1.019c-4.213-.213-7.849-.046-9.824.117-.024-.399-.057-.796-.061-1.199 1.978-.162 5.516-.324 9.621-.133-.095-.6-.156-1.213-.156-1.852 0-2.04.72-4.2 2.04-6-.6-2.04-1.44-6.36.24-7.92 3.24 0 5.52 1.56 6.6 2.52C25.2 16.08 27.48 15.6 30 15.6c2.52 0 4.8.48 6.72 1.32 1.08-.96 3.36-2.52 6.6-2.52 1.8 1.68.84 6 .24 7.92 1.32 1.8 2.04 3.84 1.92 6 0 .58-.054 1.141-.132 1.69 4.199-.206 7.832-.04 9.845.123-.003.405-.04.8-.061 1.199-2.006-.166-5.73-.336-10.031-.107a9.926 9.926 0 0 1-.39 1.176c4.255.055 7.998.467 10.257.827-.051.398-.111.793-.18 1.184-2.295-.367-6.206-.796-10.656-.818-1.998 3.454-6.264 5.706-12.932 5.969v.037c3.12 0 6 4.68 6 7.92V54c0 .988.598 1.836 1.45 2.203C49.645 52.565 57.6 42.197 57.6 30 57.6 14.782 45.22 2.4 30 2.4S2.4 14.782 2.4 30c0 12.197 7.956 22.565 18.95 26.203Z"
    />
  </svg>
);
export default SvgGithubProp;