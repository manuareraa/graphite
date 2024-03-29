// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: -IFVXjvXAy
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Walletstatus from "../../Walletstatus"; // plasmic-import: yl_7FX-no3/component
import Navbuttons from "../../Navbuttons"; // plasmic-import: en6sGenXXJ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../project_5162/plasmic_project_5162.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: -IFVXjvXAy/css
import imageedit06595945666PngGAp4VAj from "../project_5162/images/imageedit06595945666Png.png"; // plasmic-import: G_ap4vAJ-/picture

export const PlasmicNavBar__VariantProps = new Array();

export const PlasmicNavBar__ArgProps = new Array();

function PlasmicNavBar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <div
            data-plasmic-name={"frame3"}
            data-plasmic-override={overrides.frame3}
            className={classNames(projectcss.all, sty.frame3)}
          >
            <div
              data-plasmic-name={"graphiteLogo2"}
              data-plasmic-override={overrides.graphiteLogo2}
              className={classNames(projectcss.all, sty.graphiteLogo2)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: imageedit06595945666PngGAp4VAj,
                  fullWidth: 1316,
                  fullHeight: 322,
                  aspectRatio: undefined
                }}
              />
            </div>

            {false ? (
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"POWERED BY"}
              </div>
            ) : null}
          </div>

          <Walletstatus
            data-plasmic-name={"walletbar"}
            data-plasmic-override={overrides.walletbar}
            address={null}
            className={classNames("__wab_instance", sty.walletbar)}
          />

          {false ? (
            <Navbuttons
              data-plasmic-name={"navbarbuttons"}
              data-plasmic-override={overrides.navbarbuttons}
              className={classNames("__wab_instance", sty.navbarbuttons)}
            />
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "frame3",
    "graphiteLogo2",
    "img",
    "text",
    "walletbar",
    "navbarbuttons"
  ],

  freeBox: [
    "freeBox",
    "frame3",
    "graphiteLogo2",
    "img",
    "text",
    "walletbar",
    "navbarbuttons"
  ],

  frame3: ["frame3", "graphiteLogo2", "img", "text"],
  graphiteLogo2: ["graphiteLogo2", "img"],
  img: ["img"],
  text: ["text"],
  walletbar: ["walletbar"],
  navbarbuttons: ["navbarbuttons"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavBar__ArgProps,
      internalVariantPropNames: PlasmicNavBar__VariantProps
    });

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    frame3: makeNodeComponent("frame3"),
    graphiteLogo2: makeNodeComponent("graphiteLogo2"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    walletbar: makeNodeComponent("walletbar"),
    navbarbuttons: makeNodeComponent("navbarbuttons"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
