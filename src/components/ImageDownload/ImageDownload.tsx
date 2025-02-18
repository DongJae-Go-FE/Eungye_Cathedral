import Link from "next/link";

type ImageDownloadType = {
  fileName: string;
  fileUrl: string;
};

export default function ImageDownload({
  fileName,
  fileUrl,
}: ImageDownloadType) {
  return (
    <Link
      className="flex h-[72px] w-full items-center gap-x-[9px] rounded-lg border border-gray-200 px-5"
      href={fileUrl}
    >
      <span className="flex h-10 w-10 items-center justify-center gap-x-4 rounded-lg border border-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          viewBox="0 0 12 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.99935C0 1.26297 0.596954 0.666016 1.33333 0.666016H8C8.36819 0.666016 8.66667 0.964492 8.66667 1.33268V3.99935H11.3333C11.7015 3.99935 12 4.29783 12 4.66602V13.9993C12 14.7357 11.403 15.3327 10.6667 15.3327H1.33333C0.596954 15.3327 0 14.7357 0 13.9993V1.99935ZM7.33333 1.99935L1.33333 1.99935V13.9993H10.6667V5.33268H8C7.63181 5.33268 7.33333 5.03421 7.33333 4.66602V1.99935Z"
            fill="#111"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5312 0.861278C7.79155 0.600928 8.21366 0.600928 8.47401 0.861278L11.8073 4.19461C12.0677 4.45496 12.0677 4.87707 11.8073 5.13742C11.547 5.39777 11.1249 5.39777 10.8645 5.13742L7.5312 1.80409C7.27085 1.54374 7.27085 1.12163 7.5312 0.861278Z"
            fill="#111"
          />
        </svg>
      </span>
      <p className="flex w-[calc(100%-50px)] justify-between">
        <span
          className="text-body01m w-3/4 truncate text-black"
          title={fileName}
        >
          {fileName}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.33594 14.0007C1.33594 13.6325 1.63441 13.334 2.0026 13.334L14.0026 13.334C14.3708 13.334 14.6693 13.6325 14.6693 14.0007C14.6693 14.3688 14.3708 14.6673 14.0026 14.6673L2.0026 14.6673C1.63441 14.6673 1.33594 14.3688 1.33594 14.0007Z"
            fill="#111"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5312 7.19526C4.79155 6.93491 5.21366 6.93491 5.47401 7.19526L8.0026 9.72386L10.5312 7.19526C10.7915 6.93491 11.2137 6.93491 11.474 7.19526C11.7344 7.45561 11.7344 7.87772 11.474 8.13807L8.47401 11.1381C8.21366 11.3984 7.79155 11.3984 7.5312 11.1381L4.5312 8.13807C4.27085 7.87772 4.27085 7.45561 4.5312 7.19526Z"
            fill="#111"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99479 1.33398C8.36298 1.33398 8.66146 1.63246 8.66146 2.00065L8.66146 10.6673C8.66146 11.0355 8.36298 11.334 7.99479 11.334C7.6266 11.334 7.32813 11.0355 7.32813 10.6673L7.32812 2.00065C7.32812 1.63246 7.6266 1.33398 7.99479 1.33398Z"
            fill="#111"
          />
        </svg>
      </p>
    </Link>
  );
}
