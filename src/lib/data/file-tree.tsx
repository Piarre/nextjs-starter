import { File, Folder } from "@/components/magicui/file-tree";
import { CLI } from "../types/next";
import { ReactNode } from "react";
import Icons from "@/components/ui/icons";

interface NextFileTreeProps {
  name: string;
  eslint?: boolean;
  tailwind?: boolean;
  srcDir?: boolean;
  app?: boolean;
  cli?: CLI;
  lang: "js" | "ts";
  shadcUi?: boolean;
}

const ext = (value: string, lang: "js" | "ts") => `${value}.${lang}`;
const extX = (value: string, lang: "js" | "ts") => `${value}.${lang == "js" ? "js" : "tsx"}`;

const FileItem = ({
  name,
  id,
  icon,
}: {
  name: string;
  id: string | (string & readonly string[]);
  icon?: ReactNode;
}) => (
  <File value={id} fileIcon={icon}>
    <p>{name}</p>
  </File>
);

const LockFileItem = ({ cli }: { cli: CLI }) => {
  switch (cli) {
    case "npm":
      return <FileItem name="package-lock.json" id="99" icon={<Icons.node />} />;
    case "yarn":
      return <FileItem name="yarn.lock" id="99" icon={<Icons.yarn />} />;
    case "pnpm":
      return <FileItem name="pnpm-lock.yaml" id="99" icon={<Icons.pnpm />} />;
    case "bun":
      return <FileItem name="bun.lock" id="99" icon={<Icons.bun />} />;
    default:
      return <FileItem name="package-lock.json" id="9" icon={<Icons.node />} />;
  }
};
const AppContent = ({
  app,
  tailwind,
  lang,
}: Pick<NextFileTreeProps, "app" | "tailwind" | "lang">) => {
  return (
    <>
      {app ? (
        <>
          <Folder value="0" element="app">
            <FileItem name="favicon.ico" id="1" />
            <FileItem name="globals.css" id="2" icon={<Icons.css />} />
            <FileItem
              name={extX("layout", lang)}
              id="3"
              icon={lang == "js" ? <Icons.js /> : <Icons.tsx />}
            />
            {!tailwind && <FileItem name="page.module.css" id="4" icon={<Icons.css />} />}
            <FileItem
              name={extX("page", lang)}
              id="5"
              icon={lang == "js" ? <Icons.js /> : <Icons.tsx />}
            />
          </Folder>
        </>
      ) : (
        <>
          <Folder value="6" element="pages">
            <Folder value="7" element="api">
              <FileItem
                name={ext("hello", lang)}
                id="8"
                icon={lang == "js" ? <Icons.js /> : <Icons.ts />}
              />
            </Folder>
            <FileItem
              name={extX("_app", lang)}
              id="9"
              icon={lang == "js" ? <Icons.js /> : <Icons.tsx />}
            />
            <FileItem
              name={extX("_document", lang)}
              id="10"
              icon={lang == "js" ? <Icons.js /> : <Icons.tsx />}
            />
            <FileItem
              name={extX("index", lang)}
              id="11"
              icon={lang == "js" ? <Icons.js /> : <Icons.tsx />}
            />
          </Folder>
          <Folder value="14" element="styles">
            <FileItem name="globals.css" id="12" icon={<Icons.css />} />
            {!tailwind && <FileItem name="Home.module.css" id="13" icon={<Icons.css />} />}
          </Folder>
        </>
      )}
    </>
  );
};

export const NextFileTree = ({
  name,
  eslint,
  tailwind,
  srcDir,
  app,
  cli = "npm",
  lang = "ts",
  shadcUi,
}: NextFileTreeProps) => {
  return (
    <Folder element={name} value="15">
      <Folder value="16" element="public">
        {!app && <FileItem name="favicon.ico" id="17" icon={<Icons.favicon />} />}
        <FileItem name="next.svg" id="18" icon={<Icons.svg />} />
        <FileItem name="vercel.svg" id="19" icon={<Icons.svg />} />
      </Folder>
      {srcDir ? (
        <Folder value="20" element="src">
          <AppContent app={app} tailwind={tailwind} lang={lang} />
        </Folder>
      ) : (
        <AppContent app={app} tailwind={tailwind} lang={lang} />
      )}
      {eslint && <FileItem name=".eslintrc.json" id="21" icon={<Icons.eslint />} />}
      <FileItem name=".gitignore" id="22" icon={<Icons.git />} />
      <LockFileItem cli={cli} />
      {shadcUi && <FileItem name="components.json" id="23" />}
      {lang == "ts" && <FileItem name="next-env.d.ts" id="24" icon={<Icons.tsDef />} />}
      <FileItem name="next.config.mjs" id="25" icon={<Icons.next />} />
      <FileItem name="package.json" id="26" icon={<Icons.node />} />
      {tailwind && <FileItem name="postcss.config.mjs" id="27" icon={<Icons.postcss />} />}
      <FileItem name="README.md" id="28" icon={<Icons.readme />} />
      {tailwind && (
        <FileItem name={ext("tailwind.config", lang)} id="29" icon={<Icons.tailwind />} />
      )}
      {lang == "js" ? (
        <FileItem name="tsconfig.json" id="30" icon={<Icons.tsconfig />} />
      ) : (
        <FileItem name="jsconfig.json" id="30" icon={<Icons.jsconfig />} />
      )}
    </Folder>
  );
};
