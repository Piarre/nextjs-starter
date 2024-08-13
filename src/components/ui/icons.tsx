/* eslint-disable no-unused-labels */
import React from "react";

const Icons = {
  jsconfig: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#757575"
        d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"
        data-mit-no-recolor="true"
      />
      <path
        fill="#ffca28"
        d="M12 12v18h18V12zm8 12a2.006 2.006 0 0 1-2 2h-2a2.006 2.006 0 0 1-2-2v-2h2v2h2v-8h2zm8-6h-4v2h2a2.006 2.006 0 0 1 2 2v2a2.006 2.006 0 0 1-2 2h-4v-2h4v-2h-2a2.006 2.006 0 0 1-2-2v-2a2.006 2.006 0 0 1 2-2h4z"
      />
    </svg>
  ),
  tsconfig: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#757575"
        d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"
        data-mit-no-recolor="true"
      />
      <path
        fill="#0288d1"
        d="M12 12v18h18V12Zm8 6h-2v8h-2v-8h-2v-2h6Zm8 0h-4v2h2a2.006 2.006 0 0 1 2 2v2a2.006 2.006 0 0 1-2 2h-4v-2h4v-2h-2a2.006 2.006 0 0 1-2-2v-2a2.006 2.006 0 0 1 2-2h4Z"
      />
    </svg>
  ),
  readme: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="size-4">
      <path d="M0 0h24v24H0z" />
      <path
        fill="#42a5f5"
        d="M8 1C4.136 1 1 4.136 1 8s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm1 11H7V7.5h2zm0-6H7V4h2z"
      />
    </svg>
  ),
  postcss: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path fill="#e53935" d="M20 12v8h-8v-8h8m2-2H10v12h12V10Z" />
      <path fill="#e53935" d="M16 5.488 26.159 20H5.84L16 5.488M16 2 2 22h28L16 2Z" />
      <path
        fill="#e53935"
        d="M16 13a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3m0-2a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z"
      />
      <path
        fill="#e53935"
        d="M16 4A12 12 0 1 1 4 16 12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"
      />
    </svg>
  ),
  node: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#8bc34a"
        d="M16 20.003v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h4v-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2Z"
      />
      <path
        fill="#8bc34a"
        d="m16 3.003-12 7v14l4 2h6v-13.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v11.5H8l-2-1.034V11.15l10-5.833 10 5.833v11.703l-10 5.833-1.745-1.022L13 29.253l3 1.75 12-7v-14Z"
      />
    </svg>
  ),
  tsDef: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4">
      <g fill="#0288d1">
        <path d="M2 2v12h12V2zm.667.667h10.666v10.666H2.667z" />
        <path d="M10.659 6.874c-1.007 0-1.653.64-1.653 1.487 0 .92.54 1.353 1.353 1.7l.28.12c.52.227.827.366.827.753 0 .32-.3.553-.767.553-.553 0-.873-.286-1.113-.686l-.92.533c.334.653 1.007 1.153 2.06 1.153 1.067 0 1.866-.553 1.866-1.573 0-.94-.54-1.36-1.5-1.773l-.28-.12c-.486-.207-.692-.348-.692-.68 0-.274.205-.487.539-.487.32 0 .533.14.726.486l.874-.58c-.367-.64-.887-.886-1.6-.886zm-5.8.053v1h1v4.834h1.167V7.927h1.167v-1z" />
      </g>
    </svg>
  ),
  git: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#e64a19"
        d="M13.172 2.828 11.78 4.22l1.91 1.91 2 2A2.986 2.986 0 0 1 20 10.81a3.248 3.248 0 0 1-.31 1.31l2.06 2a2.683 2.683 0 0 1 3.37.57 2.86 2.86 0 0 1 .88 2.117 3.015 3.015 0 0 1-.856 2.109A2.893 2.893 0 0 1 23 19.81a2.93 2.93 0 0 1-2.13-.87 2.694 2.694 0 0 1-.56-3.38l-2-2.06a2.547 2.547 0 0 1-.31.12V20a3.024 3.024 0 0 1 1.44 1.09 2.921 2.921 0 0 1 .56 1.72 2.883 2.883 0 0 1-.878 2.128 2.982 2.982 0 0 1-2.048.871 2.981 2.981 0 0 1-2.514-4.719A3.024 3.024 0 0 1 16 20v-6.38a2.963 2.963 0 0 1-1.44-1.09 2.899 2.899 0 0 1-.56-1.72 2.868 2.868 0 0 1 .31-1.31l-3.9-3.9-7.579 7.572a4 4 0 0 0-.001 5.658l10.342 10.342a4 4 0 0 0 5.656 0l10.344-10.344a4 4 0 0 0 0-5.656L18.828 2.828a4 4 0 0 0-5.656 0Z"
      />
    </svg>
  ),
  eslint: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#3f51b5"
        d="M22.713 4H9.287a.5.5 0 0 0-.432.248l-6.708 11.5a.5.5 0 0 0 0 .504l6.708 11.5a.5.5 0 0 0 .432.248h13.426a.5.5 0 0 0 .432-.248l6.708-11.5a.5.5 0 0 0 0-.504l-6.708-11.5A.5.5 0 0 0 22.713 4Zm-6.937 20.888-7.5-3.75A.5.5 0 0 1 8 20.691v-9.382a.5.5 0 0 1 .276-.447l7.5-3.75a.5.5 0 0 1 .448 0l7.5 3.75a.5.5 0 0 1 .276.447v9.382a.5.5 0 0 1-.276.447l-7.5 3.75a.5.5 0 0 1-.448 0Z"
      />
      <path
        fill="#7986cb"
        d="M22 19.441v-6.882a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.882a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447Z"
      />
    </svg>
  ),
  json: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="size-4">
      <path
        fill="#f9a825"
        d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35H560Zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80H280Z"
      />
    </svg>
  ),
  css: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#42a5f5"
        d="m29.18 4-3.57 18.36-.33 1.64-4.74 1.57-3.28 1.09L13.21 28 2.87 24.05 4.05 18h4.2l-.44 2.85 6.34 2.42.78-.26 6.52-2.16.17-.83.79-4.02H4.44l.74-3.76.05-.24h17.96l.78-4H6l.78-4h22.4z"
      />
    </svg>
  ),
  tsx: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#0288d1"
        d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4-12-2.59-12-4 4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6 14-2.686 14-6-6.268-6-14-6Z"
      />
      <path fill="#0288d1" d="M16 14a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
      <path
        fill="#0288d1"
        d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493 3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.903.903 0 0 1 .458-.1m-.001-2A2.871 2.871 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124-3.284-5.69-7.72-9.493-10.74-9.493Z"
      />
      <path
        fill="#0288d1"
        d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369Z"
      />
    </svg>
  ),
  js: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4">
      <path
        fill="#ffca28"
        d="M2 2h12v12H2V2m3.153 10.027c.267.567.794 1.033 1.694 1.033 1 0 1.686-.533 1.686-1.7V7.507H7.4v3.827c0 .573-.233.72-.6.72-.387 0-.547-.267-.727-.58l-.92.553m3.987-.12c.333.653 1.007 1.153 2.06 1.153 1.067 0 1.867-.553 1.867-1.573 0-.94-.54-1.36-1.5-1.773l-.28-.12c-.487-.207-.694-.347-.694-.68 0-.274.207-.487.54-.487.32 0 .534.14.727.487l.873-.58c-.366-.64-.886-.887-1.6-.887-1.006 0-1.653.64-1.653 1.487 0 .92.54 1.353 1.353 1.7l.28.12c.52.226.827.366.827.753 0 .32-.3.553-.767.553-.553 0-.873-.286-1.113-.686z"
      />
    </svg>
  ),
  ts: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-4">
      <path
        fill="#0288d1"
        d="M2 2h12v12H2V2m7.14 9.907c.333.653 1.007 1.153 2.06 1.153 1.067 0 1.867-.553 1.867-1.573 0-.94-.54-1.36-1.5-1.774l-.28-.12c-.487-.206-.694-.346-.694-.68 0-.273.207-.486.54-.486.32 0 .534.14.727.486l.873-.58c-.366-.64-.886-.886-1.6-.886-1.006 0-1.653.64-1.653 1.486 0 .92.54 1.354 1.353 1.7l.28.12c.52.227.827.367.827.754 0 .32-.3.553-.767.553-.553 0-.873-.287-1.113-.687l-.92.534M8.667 7.5H5.333v1h1v4.833H7.5V8.5h1.167z"
      />
    </svg>
  ),
  yarn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#0288d1"
        d="M27.575 23.967a9.941 9.941 0 0 0-3.751 1.726 22.63 22.63 0 0 1-5.537 2.504 1.546 1.546 0 0 1-.931.52 58.935 58.935 0 0 1-6.11.548c-1.102.008-1.777-.282-1.965-.735a1.49 1.49 0 0 1 .82-1.965 3.567 3.567 0 0 1-.486-.359c-.163-.162-.334-.487-.385-.367-.213.52-.324 1.794-.897 2.366-.786.795-2.273.53-3.153.069-.965-.513.069-1.718.069-1.718a.692.692 0 0 1-.94-.324 4.592 4.592 0 0 1-.632-2.794 5.183 5.183 0 0 1 1.674-2.76 8.843 8.843 0 0 1 .624-4.17 9.896 9.896 0 0 1 3-3.469S7.136 11.015 7.82 9.177c.444-1.196.623-1.187.769-1.239a3.44 3.44 0 0 0 1.375-.811 4.988 4.988 0 0 1 4.178-1.607s1.094-3.357 2.12-2.7a17.388 17.388 0 0 1 1.452 2.735s1.213-.71 1.35-.445a10.738 10.738 0 0 1 .495 5.81 13.274 13.274 0 0 1-2.46 5.127c-.129.214 1.47.889 2.477 3.683.932 2.554.103 4.699.248 4.938.026.043.034.06.034.06s1.068.085 3.213-1.24a8.05 8.05 0 0 1 4.05-1.52 1.026 1.026 0 0 1 .453 2Z"
      />
    </svg>
  ),
  pnpm: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path fill="#e0e0e0" d="M2 22h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8zM12 12h8v8h-8z" />
      <path fill="#ffb300" d="M2 2h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8zm0 10h8v8h-8z" />
    </svg>
  ),
  bun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#FFF8E1"
        d="M30 17.045a9.785 9.785 0 0 0-.32-2.306l-.004.034a11.189 11.189 0 0 0-5.762-6.786c-3.495-1.89-5.243-3.326-6.8-3.811h.003c-1.95-.695-3.949.82-5.825 1.927-4.52 2.481-9.573 5.45-9.28 11.417.008-.029.017-.052.026-.08a9.966 9.966 0 0 0 3.934 7.257l-.01-.006C13.747 31.473 30.05 27.292 30 17.045Z"
      />
      <path
        fill="#37474f"
        d="M19.855 20.236A.81.81 0 0 0 19.26 20h-6.514a.792.792 0 0 0-.596.236.508.508 0 0 0-.137.463 4.365 4.365 0 0 0 1.641 2.339 4.187 4.187 0 0 0 2.349.926 4.186 4.186 0 0 0 2.343-.926 4.365 4.365 0 0 0 1.642-2.339.502.502 0 0 0-.132-.463Z"
      />
      <ellipse cx="22.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5" />
      <ellipse cx="9.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5" />
      <circle cx="10" cy="16" r="2" fill="#37474f" />
      <circle cx="22" cy="16" r="2" fill="#37474f" />
      <path fill="#455a64" d="M9.996 18A2 2 0 1 0 8 15.996V16a2 2 0 0 0 1.996 2Z" />
      <circle cx="9" cy="15" r="1" fill="#FAFAFA" />
      <circle cx="21" cy="15" r="1" fill="#FAFAFA" />
    </svg>
  ),
  next: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#cfd8dc"
        d="M16 2a14 14 0 1 0 5.816 26.723L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.434a1 1 0 0 1 .857.486l11.491 19.15A14 14 0 0 0 16 2Zm8 16h-4V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z"
      />
    </svg>
  ),
  tailwind: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#4db6ac"
        d="M23.5 12H8c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM14 12h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Zm3.5 8H2c.89-2.3 4.02-4 7.75-4 3.73 0 6.86 1.7 7.75 4ZM8 20h15.5c-.89 2.3-4.02 4-7.75 4-3.73 0-6.86-1.7-7.75-4Z"
      />
    </svg>
  ),
  svg: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path
        fill="#ffb300"
        d="M29.168 14.03a2.687 2.687 0 0 0-1.968-.83 2.51 2.51 0 0 0-1.929.8h-4.443l3.078-3.078a2.835 2.835 0 0 0 2.857-2.842 2.593 2.593 0 0 0-.831-1.969 2.823 2.823 0 0 0-2.014-.788 2.67 2.67 0 0 0-1.968.788 2.355 2.355 0 0 0-.812 1.922L18 11.17V6.726a2.51 2.51 0 0 0 .8-1.929 2.693 2.693 0 0 0-.832-1.968 2.745 2.745 0 0 0-3.936 0 2.687 2.687 0 0 0-.832 1.968 2.51 2.51 0 0 0 .8 1.93v4.443l-3.138-3.138a2.355 2.355 0 0 0-.812-1.922 2.66 2.66 0 0 0-1.968-.788 2.828 2.828 0 0 0-2.014.788 2.597 2.597 0 0 0-.831 1.969 2.742 2.742 0 0 0 .831 2.013 2.789 2.789 0 0 0 2.026.829l3.078 3.078H6.729a2.51 2.51 0 0 0-1.929-.8 2.694 2.694 0 0 0-1.968.831 2.745 2.745 0 0 0 0 3.937 2.688 2.688 0 0 0 1.968.832 2.51 2.51 0 0 0 1.929-.8h4.443l-3.078 3.077a2.835 2.835 0 0 0-2.857 2.842 2.593 2.593 0 0 0 .831 1.969 2.823 2.823 0 0 0 2.014.788 2.671 2.671 0 0 0 1.968-.788 2.355 2.355 0 0 0 .812-1.922L14 20.827v4.444a2.51 2.51 0 0 0-.8 1.929 2.784 2.784 0 0 0 4.768 1.968A2.687 2.687 0 0 0 18.8 27.2a2.51 2.51 0 0 0-.8-1.929v-4.444l3.138 3.138a2.355 2.355 0 0 0 .812 1.922 2.66 2.66 0 0 0 1.968.788 2.828 2.828 0 0 0 2.014-.788 2.597 2.597 0 0 0 .831-1.969 2.742 2.742 0 0 0-.831-2.013 2.788 2.788 0 0 0-2.026-.829L20.828 18h4.443a2.51 2.51 0 0 0 1.93.8 2.784 2.784 0 0 0 1.967-4.769Z"
      />
    </svg>
  ),
  favicon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
      <path fill="#ffd54f" d="m16 24 10 6-4-10 8-8-10-.032L16 2l-4 10H2l8 8-4 10Z" />
    </svg>
  ),
  public: {
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#039be5"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#b3e5fc"
          d="M22 10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm6.918 6H25.96a15.749 15.749 0 0 0-1.342-3.54 8.039 8.039 0 0 1 4.3 3.54ZM22 12a14.128 14.128 0 0 1 1.89 4h-3.78A14.128 14.128 0 0 1 22 12Zm-2.618.46A15.749 15.749 0 0 0 18.04 16h-2.958a8.039 8.039 0 0 1 4.3-3.54ZM14.263 22a7.727 7.727 0 0 1 0-4h3.407a15.45 15.45 0 0 0 0 4Zm.82 2h2.957a15.749 15.749 0 0 0 1.342 3.54 8.039 8.039 0 0 1-4.3-3.54ZM22 28a14.128 14.128 0 0 1-1.89-4h3.78A14.128 14.128 0 0 1 22 28Zm2.31-6h-4.62a13.412 13.412 0 0 1 0-4h4.62a13.412 13.412 0 0 1 0 4Zm.308 5.54A15.749 15.749 0 0 0 25.96 24h2.958a8.039 8.039 0 0 1-4.3 3.54ZM29.737 22H26.33a15.45 15.45 0 0 0 0-4h3.407a7.727 7.727 0 0 1 0 4Z"
        />
      </svg>
    ),
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#039be5"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#b3e5fc"
          d="M22 10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm6.918 6H25.96a15.749 15.749 0 0 0-1.342-3.54 8.039 8.039 0 0 1 4.3 3.54ZM22 12a14.128 14.128 0 0 1 1.89 4h-3.78A14.128 14.128 0 0 1 22 12Zm-2.618.46A15.749 15.749 0 0 0 18.04 16h-2.958a8.039 8.039 0 0 1 4.3-3.54ZM14.263 22a7.727 7.727 0 0 1 0-4h3.407a15.45 15.45 0 0 0 0 4Zm.82 2h2.957a15.749 15.749 0 0 0 1.342 3.54 8.039 8.039 0 0 1-4.3-3.54ZM22 28a14.128 14.128 0 0 1-1.89-4h3.78A14.128 14.128 0 0 1 22 28Zm2.31-6h-4.62a13.412 13.412 0 0 1 0-4h4.62a13.412 13.412 0 0 1 0 4Zm.308 5.54A15.749 15.749 0 0 0 25.96 24h2.958a8.039 8.039 0 0 1-4.3 3.54ZM29.737 22H26.33a15.45 15.45 0 0 0 0-4h3.407a7.727 7.727 0 0 1 0 4Z"
        />
      </svg>
    ),
  },
  src: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#4caf50"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#c8e6c9"
          d="M18.473 30a1.075 1.075 0 0 1-.238-.028 1.137 1.137 0 0 1-.828-1.323L20.5 12.905a1.13 1.13 0 0 1 .507-.744 1.057 1.057 0 0 1 .8-.134 1.139 1.139 0 0 1 .828 1.324l-3.101 15.744a1.124 1.124 0 0 1-.504.743 1.055 1.055 0 0 1-.557.162Zm6.2-2h-.077a1.075 1.075 0 0 1-.762-.412 1.164 1.164 0 0 1 .113-1.548l5.319-4.967-5.296-4.623a1.165 1.165 0 0 1-.162-1.544 1.08 1.08 0 0 1 .754-.437 1.058 1.058 0 0 1 .81.258l6.244 5.455a1.156 1.156 0 0 1 .003 1.723l-6.218 5.808a1.069 1.069 0 0 1-.729.289Zm-9.31 0a1.072 1.072 0 0 1-.728-.292l-6.226-5.811a1.159 1.159 0 0 1-.01-1.692l.02-.018 6.246-5.454a1.035 1.035 0 0 1 .8-.26 1.08 1.08 0 0 1 .76.436 1.165 1.165 0 0 1-.16 1.547l-5.294 4.62 5.32 4.964a1.156 1.156 0 0 1 .112 1.548 1.072 1.072 0 0 1-.762.412Z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#4caf50"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#c8e6c9"
          d="M18.435 30a1.075 1.075 0 0 1-.238-.028 1.137 1.137 0 0 1-.828-1.323l3.093-15.744a1.13 1.13 0 0 1 .507-.744 1.057 1.057 0 0 1 .8-.134 1.139 1.139 0 0 1 .828 1.324l-3.1 15.744a1.124 1.124 0 0 1-.505.743 1.055 1.055 0 0 1-.557.162Zm6.2-2h-.077a1.075 1.075 0 0 1-.762-.412 1.164 1.164 0 0 1 .113-1.548l5.32-4.967-5.297-4.623a1.165 1.165 0 0 1-.162-1.544 1.08 1.08 0 0 1 .754-.437 1.058 1.058 0 0 1 .81.258l6.244 5.455a1.156 1.156 0 0 1 .004 1.723l-6.22 5.808a1.069 1.069 0 0 1-.728.289Zm-9.31 0a1.072 1.072 0 0 1-.728-.292l-6.225-5.811a1.159 1.159 0 0 1-.01-1.692l.02-.018 6.246-5.454a1.035 1.035 0 0 1 .8-.26 1.08 1.08 0 0 1 .758.436 1.165 1.165 0 0 1-.16 1.547l-5.293 4.62 5.32 4.964a1.156 1.156 0 0 1 .112 1.548 1.072 1.072 0 0 1-.762.412Z"
        />
      </svg>
    ),
  },
  views: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#ff7043"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#ffccbc"
          d="m14 12 2 16 7 2 7-2 2-16Zm8 5.899L18.66 20 22 22.102V24l-5.235-3.386v-1.227L22 16Zm7.235 2.728L24 24v-1.898L27.363 20 24 17.899V16l5.235 3.373Z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#ff7043"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#ffccbc"
          d="m14 12 2 16 7 2 7-2 2-16Zm8 5.899L18.66 20 22 22.102V24l-5.235-3.386v-1.227L22 16Zm7.235 2.728L24 24v-1.898L27.363 20 24 17.899V16l5.235 3.373Z"
        />
      </svg>
    ),
  },
  cssFolder: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#42a5f5"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#bbdefb"
          d="m13.19 10-.79 4h15.33l-.49 2H12.01l-.79 4h15.3l-.84 3.99L18 26.36l-4-2.37.46-1.99h-3.63L10 26.2l8 3.8 10.75-3.64 1.31-6.57.26-1.32L32 10H13.19z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#42a5f5"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#bbdefb"
          d="m13.19 9.95-.79 4h15.33l-.49 2H12.01l-.79 4h15.3l-.84 3.99L18 26.31l-4-2.37.46-1.99h-3.63l-.83 4.2 8 3.8 10.75-3.64 1.31-6.57.26-1.32L32 9.95H13.19z"
        />
      </svg>
    ),
  },
  api: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#fbc02d"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#fffde7"
          d="M20 18h-4v2h6v-6h-2v4zm8 0v-4h-2v6h6v-2h-4zm-12 8h4v4h2v-6h-6v2zm10 0v4h2v-4h4v-2h-6v2z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#fbc02d"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#fffde7"
          d="M20 18h-4v2h6v-6h-2v4zm8 0v-4h-2v6h6v-2h-4zm-12 8h4v4h2v-6h-6v2zm10 0v4h2v-4h4v-2h-6v2z"
        />
      </svg>
    ),
  },
  app: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#ef5350"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#ffcdd2"
          d="M16 12h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#ef5350"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#ffcdd2"
          d="M16 12h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"
        />
      </svg>
    ),
  },
  lib: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#c0ca33"
          d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12Z"
        />
        <path
          fill="#f0f4c3"
          d="M23 16a3 3 0 0 0 .003-6H23a3 3 0 0 0-3 2.999V13a3 3 0 0 0 2.999 3H23m0 3.973c-2.225-2.078-5.955-3.978-9-3.973v10c3.19 0 6.85 2.004 9 4 2.225-2.078 5.955-4.005 9-4V16c-3.045-.005-6.775 1.895-9 3.973Z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#c0ca33"
          d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464Z"
        />
        <path
          fill="#f0f4c3"
          d="M22.931 16a3 3 0 0 0 .003-6h-.003a3 3 0 0 0-3 2.999V13a3 3 0 0 0 2.999 3h.001m0 3.973c-2.225-2.078-5.955-3.978-9-3.973v10c3.19 0 6.85 2.004 9 4 2.226-2.078 5.955-4.005 9-4V16c-3.044-.005-6.774 1.895-9 3.973Z"
        />
      </svg>
    ),
  },
  components: {
    open: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#00bcd4"
          d="M24.645 27.333H4.665A2.665 2.665 0 0 1 2 24.667v-16A2.656 2.656 0 0 1 4.646 6h8.01l2.665 2.667h9.324a2.678 2.678 0 0 1 2.664 2.666H4.664v13.334L7.514 14h22.739l-3.037 11.333a2.667 2.667 0 0 1-2.571 2Z"
        />
        <path
          fill="#b2ebf2"
          d="M21 18.035a1.923 1.923 0 1 1-.004 0H21m-4.738 10.284c.645.395 2.057-.208 3.685-1.768q-.82-.948-1.545-1.977a22.886 22.886 0 0 1-2.456-.373c-.522 2.224-.328 3.754.316 4.116m.727-5.966-.297-.532a8.323 8.323 0 0 0-.296.894c.277.062.583.116.9.168l-.307-.532m6.692-.79L24.51 20l-.83-1.559c-.305-.55-.633-1.039-.93-1.528-.554-.032-1.137-.032-1.749-.032-.614 0-1.199 0-1.75.032-.298.489-.624.978-.932 1.528L17.49 20l.83 1.56c.307.55.633 1.04.93 1.528.554.031 1.137.031 1.75.031s1.198 0 1.75-.03c.297-.49.623-.978.93-1.53M21 14.573c-.194.23-.4.467-.603.749h1.206c-.204-.282-.408-.52-.603-.75m0 10.856c.194-.228.4-.468.603-.748h-1.206c.204.282.408.519.603.748m4.728-13.746c-.635-.395-2.047.208-3.675 1.768a24.516 24.516 0 0 1 1.545 1.975 22.857 22.857 0 0 1 2.456.375c.523-2.225.328-3.753-.326-4.116m-.717 5.967.297.53a8.233 8.233 0 0 0 .296-.895 15.883 15.883 0 0 0-.9-.165l.307.53m1.483-7.33c1.505.873 1.668 3.17 1.035 5.854C30.128 16.955 32 18.245 32 20c0 1.758-1.872 3.047-4.473 3.828.635 2.682.472 4.98-1.033 5.854-1.493.873-3.53-.126-5.493-2.029-1.966 1.903-4.002 2.902-5.507 2.029-1.493-.874-1.656-3.172-1.023-5.854C11.874 23.048 10 21.758 10 20s1.874-3.045 4.473-3.825c-.635-2.683-.472-4.981 1.023-5.855 1.503-.873 3.54.125 5.504 2.029 1.964-1.904 4-2.902 5.494-2.029M26.198 20a23.383 23.383 0 0 1 .911 2.352c2.149-.656 3.355-1.592 3.355-2.352 0-.758-1.206-1.693-3.355-2.35a23.635 23.635 0 0 1-.91 2.35m-10.397 0a23.627 23.627 0 0 1-.911-2.35c-2.148.657-3.355 1.592-3.355 2.35 0 .76 1.207 1.696 3.355 2.352a24.249 24.249 0 0 1 .91-2.352m9.21 2.352-.306.53c.316-.052.624-.104.899-.168a8.45 8.45 0 0 0-.296-.894l-.297.532m-2.958 4.2c1.628 1.559 3.04 2.162 3.675 1.768.655-.364.85-1.892.326-4.118a23.324 23.324 0 0 1-2.455.375 25.19 25.19 0 0 1-1.544 1.975m-5.066-8.901.306-.53a14.44 14.44 0 0 0-.899.167 8.45 8.45 0 0 0 .296.894l.297-.531m2.958-4.2c-1.628-1.56-3.04-2.162-3.685-1.768-.644.364-.84 1.892-.316 4.117a23.327 23.327 0 0 1 2.455-.375 25.189 25.189 0 0 1 1.544-1.975Z"
        />
      </svg>
    ),
    closed: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-4">
        <path
          fill="#00bcd4"
          d="M12.656 6H4.664A2.656 2.656 0 0 0 2 8.648v16.019a2.678 2.678 0 0 0 2.664 2.666h21.313a2.678 2.678 0 0 0 2.664-2.666V11.333a2.665 2.665 0 0 0-2.664-2.666H15.321Z"
        />
        <path
          fill="#b2ebf2"
          d="M21 18.035a1.923 1.923 0 1 1-.004 0H21m-4.738 10.284c.645.395 2.057-.208 3.685-1.768q-.82-.948-1.545-1.977a22.886 22.886 0 0 1-2.456-.373c-.522 2.224-.328 3.754.316 4.116m.727-5.966-.297-.532a8.323 8.323 0 0 0-.296.894c.277.062.583.116.9.168l-.307-.532m6.692-.79L24.51 20l-.83-1.559c-.305-.55-.633-1.039-.93-1.528-.554-.032-1.137-.032-1.749-.032-.614 0-1.199 0-1.75.032-.298.489-.624.978-.932 1.528L17.49 20l.83 1.56c.307.55.633 1.04.93 1.528.554.031 1.137.031 1.75.031s1.198 0 1.75-.03c.297-.49.623-.978.93-1.53M21 14.573c-.194.23-.4.467-.603.749h1.206c-.204-.282-.408-.52-.603-.75m0 10.856c.194-.228.4-.468.603-.748h-1.206c.204.282.408.519.603.748m4.728-13.746c-.635-.395-2.047.208-3.675 1.768a24.516 24.516 0 0 1 1.545 1.975 22.857 22.857 0 0 1 2.456.375c.523-2.225.328-3.753-.326-4.116m-.717 5.967.297.53a8.233 8.233 0 0 0 .296-.895 15.883 15.883 0 0 0-.9-.165l.307.53m1.483-7.33c1.505.873 1.668 3.17 1.035 5.854C30.128 16.955 32 18.245 32 20c0 1.758-1.872 3.047-4.473 3.828.635 2.682.472 4.98-1.033 5.854-1.493.873-3.53-.126-5.493-2.029-1.966 1.903-4.002 2.902-5.507 2.029-1.493-.874-1.656-3.172-1.023-5.854C11.874 23.048 10 21.758 10 20s1.874-3.045 4.473-3.825c-.635-2.683-.472-4.981 1.023-5.855 1.503-.873 3.54.125 5.504 2.029 1.964-1.904 4-2.902 5.494-2.029M26.198 20a23.383 23.383 0 0 1 .911 2.352c2.149-.656 3.355-1.592 3.355-2.352 0-.758-1.206-1.693-3.355-2.35a23.635 23.635 0 0 1-.91 2.35m-10.397 0a23.627 23.627 0 0 1-.911-2.35c-2.148.657-3.355 1.592-3.355 2.35 0 .76 1.207 1.696 3.355 2.352a24.249 24.249 0 0 1 .91-2.352m9.21 2.352-.306.53c.316-.052.624-.104.899-.168a8.45 8.45 0 0 0-.296-.894l-.297.532m-2.958 4.2c1.628 1.559 3.04 2.162 3.675 1.768.655-.364.85-1.892.326-4.118a23.324 23.324 0 0 1-2.455.375 25.19 25.19 0 0 1-1.544 1.975m-5.066-8.901.306-.53a14.44 14.44 0 0 0-.899.167 8.45 8.45 0 0 0 .296.894l.297-.531m2.958-4.2c-1.628-1.56-3.04-2.162-3.685-1.768-.644.364-.84 1.892-.316 4.117a23.327 23.327 0 0 1 2.455-.375 25.189 25.189 0 0 1 1.544-1.975Z"
        />
      </svg>
    ),
  },
};

export default Icons;
