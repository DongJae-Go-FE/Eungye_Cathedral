"use client";

import { useState, KeyboardEvent } from "react";
import Button from "../Button";

type SearchType = {
  handleSearch?: (e: string) => void;
  isLoading?: boolean;
};

export default function SearchBar({ handleSearch, isLoading }: SearchType) {
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = () => {
    if (handleSearch) handleSearch(search || "");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && handleSearch) {
      e.preventDefault();
      handleSearch(e.currentTarget.value);
    }
  };

  const handleReset = () => {
    if (handleSearch) {
      setSearch((prev) => {
        prev = "";
        return prev;
      });
      handleSearch("");
    }
  };

  return (
    <form className="mobile:sticky mobile:top-[64px] desktop:static desktop:top-auto desktop:max-w-[700px] mobile:pt-[3dvw] desktop:pt-[0] w-full bg-white pb-[3dvw]">
      <label htmlFor="search" className="text-heading03b mb-3 block">
        검색
      </label>
      <div className="flex gap-x-4">
        <div
          className={`text-body1m flex h-12 w-full items-center justify-between rounded-sm border px-4 ${isFocus ? "border-black" : "border-gray-300"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 43 43"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19ZM19 4C10.7157 4 4 10.7157 4 19C4 27.2843 10.7157 34 19 34C27.2843 34 34 27.2843 34 19C34 10.7157 27.2843 4 19 4Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.8075 29.8075C30.5885 29.0265 31.8548 29.0265 32.6359 29.8075L41.1212 38.2928C41.9022 39.0739 41.9022 40.3402 41.1212 41.1212C40.3401 41.9023 39.0738 41.9023 38.2927 41.1212L29.8075 32.636C29.0264 31.8549 29.0264 30.5886 29.8075 29.8075Z"
              fill={isFocus ? "#000" : "#ddd"}
            />
          </svg>
          <input
            type="search"
            name="search"
            id="search"
            className="h-full w-[calc(100%-30px)] text-black placeholder:text-gray-300 focus:outline-0"
            disabled={isLoading}
            placeholder="제목을 입력해주세요."
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
        </div>
        <div className="before:w[1px] relative flex gap-x-4 before:absolute before:top-1/2 before:-left-[9px] before:block before:h-[21px] before:w-[1px] before:-translate-y-1/2 before:bg-gray-200 before:content-['']">
          <button
            type="button"
            className="flex h-full w-[62px] cursor-pointer items-center gap-x-1"
            onClick={handleReset}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7114 2.28661C10.5057 1.08091 8.83817 0.333984 6.9974 0.333984C3.3155 0.333984 0.330735 3.31875 0.330735 7.00065C0.330735 10.6826 3.3155 13.6673 6.9974 13.6673C8.83817 13.6673 10.5057 12.9204 11.7114 11.7147C11.9718 11.4543 11.9718 11.0322 11.7114 10.7719C11.4511 10.5115 11.029 10.5115 10.7686 10.7719C9.80277 11.7378 8.47035 12.334 6.9974 12.334C4.05188 12.334 1.66407 9.94617 1.66407 7.00065C1.66407 4.05513 4.05188 1.66732 6.9974 1.66732C8.47035 1.66732 9.80277 2.26354 10.7686 3.22941C11.0317 3.49252 11.4606 3.95809 11.8322 4.36778C12.0161 4.57055 12.1829 4.75628 12.3038 4.89134C12.3642 4.95885 12.4131 5.01363 12.4468 5.05149L12.4987 5.10978L12.9974 4.66732C13.4959 4.22466 13.4959 4.22465 13.4959 4.22463L13.4423 4.1644C13.408 4.12591 13.3584 4.07039 13.2973 4.00207C13.175 3.86549 13.0061 3.67752 12.8198 3.47205C12.4509 3.06525 12.001 2.57617 11.7114 2.28661ZM13.4401 5.16581C13.7154 4.92134 13.7403 4.49994 13.4959 4.22463L12.9974 4.66732L12.4987 5.10978C12.7432 5.38509 13.1648 5.41029 13.4401 5.16581Z"
                fill="#111111"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9974 1C12.6292 1 12.3307 1.29848 12.3307 1.66667V4H9.9974C9.62921 4 9.33073 4.29848 9.33073 4.66667C9.33073 5.03486 9.62921 5.33333 9.9974 5.33333L12.9974 5.33333C13.3656 5.33333 13.6641 5.03486 13.6641 4.66667V1.66667C13.6641 1.29848 13.3656 1 12.9974 1Z"
                fill="#111111"
              />
            </svg>
            초기화
          </button>
          <Button type="button" size="lg" onClick={handleSubmit}>
            검색
          </Button>
        </div>
      </div>
    </form>
  );
}
