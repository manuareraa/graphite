// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: 1vHlwVANzy
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_project_5162.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicButtonc.module.css"; // plasmic-import: 1vHlwVANzy/css

export const PlasmicButtonc__VariantProps = new Array("selected");

export const PlasmicButtonc__ArgProps = new Array();

function PlasmicButtonc__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return true ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.rootselected]: hasVariant(variants, "selected", "selected")
      })}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textselected]: hasVariant(variants, "selected", "selected")
        })}
      >
        {"Bridge Tokens"}
      </div>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonc__ArgProps,
      internalVariantPropNames: PlasmicButtonc__VariantProps
    });

    return PlasmicButtonc__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonc";
  } else {
    func.displayName = `PlasmicButtonc.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonc = Object.assign(
  // Top-level PlasmicButtonc renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicButtonc
    internalVariantProps: PlasmicButtonc__VariantProps,
    internalArgProps: PlasmicButtonc__ArgProps
  }
);

export default PlasmicButtonc;
/* prettier-ignore-end */
