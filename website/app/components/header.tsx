import { Link } from "@remix-run/react";

import { Github, NPM, Symbols } from "@react-symbols/icons";

import { cn } from "@/utils";

import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";
import Divider from "@/ui/divider";

import { Figma, VSCode } from "@/ui/icons/svgl";
import { ArrowUpRightIcon } from "@/ui/icons/feather";

import ExternalLink from "@/components/externalLink";
import InstallCommand from "@/components/installCommand";

const svgLogoSize = {
  width: 14,
  height: 14,
};

const svgIconSize = {
  width: 16,
  height: 16,
};

const linkClasses = buttonVariants({
  variant: "outline",
  className: "rounded-3xl w-auto group",
});

interface iHeaderProps {
  npmVersion: string;
}

const Header = (props: iHeaderProps) => {
  return (
    <section
      className={cn(
        "pb-4 pt-8 md:py-10",
        "flex flex-col space-y-6",
        containerClasses,
      )}
    >
      <div className="flex items-center gap-4">
        <Symbols height={50} className="hover:animate-pulse" />
        <div className="flex flex-col space-y-[2px]">
          <Link
            to="/"
            className="w-auto text-2xl font-semibold tracking-tight transition-opacity hover:opacity-75"
          >
            React-Symbols
          </Link>
          <div className="flex flex-col items-start space-x-0 space-y-2 text-sm text-zinc-400 md:flex-row md:space-x-2 md:space-y-0 md:text-[16px]">
            <span>
              Beautifully File & Folder Icons for your React projects.
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center space-x-0 space-y-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0">
        <InstallCommand className="w-full md:w-auto" />
        <Divider className="hidden md:block" />
        <nav className="container flex items-center space-x-2 overflow-y-auto md:w-auto">
          <ExternalLink
            href="https://www.npmjs.com/package/@react-symbols/icons"
            className={linkClasses}
          >
            <NPM width={svgIconSize.width} height={svgIconSize.height} />
            <span>v{props.npmVersion}</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className="text-zinc-400 group-hover:text-white"
            />
          </ExternalLink>
          <ExternalLink
            href="https://github.com/pheralb/react-symbols"
            className={linkClasses}
          >
            <Github width={svgIconSize.width} height={svgIconSize.height} />
            <span>Docs</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className="text-zinc-400 group-hover:text-white"
            />
          </ExternalLink>
          <ExternalLink
            href="https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?type=design&node-id=20537-804&t=F5YRpTBiNwKqtOsT-0"
            className={linkClasses}
          >
            <Figma width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>Figma</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className="text-zinc-400 group-hover:text-white"
            />
          </ExternalLink>
          <ExternalLink
            href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
            className={linkClasses}
          >
            <VSCode width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>VS Code</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className="text-zinc-400 group-hover:text-white"
            />
          </ExternalLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
