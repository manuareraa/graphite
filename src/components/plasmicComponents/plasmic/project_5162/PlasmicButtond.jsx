// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: 6TPZ3f8kLA
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_project_5162.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicButtond.module.css"; // plasmic-import: 6TPZ3f8kLA/css

export const PlasmicButtond__VariantProps = new Array("selected");

export const PlasmicButtond__ArgProps = new Array();

function PlasmicButtond__RenderFunc(props) {
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
        {"Return Tokens"}
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
      internalArgPropNames: PlasmicButtond__ArgProps,
      internalVariantPropNames: PlasmicButtond__VariantProps
    });

    return PlasmicButtond__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtond";
  } else {
    func.displayName = `PlasmicButtond.${nodeName}`;
  }
  return func;
}

export const PlasmicButtond = Object.assign(
  // Top-level PlasmicButtond renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicButtond
    internalVariantProps: PlasmicButtond__VariantProps,
    internalArgProps: PlasmicButtond__ArgProps
  }
);

export default PlasmicButtond;
/* prettier-ignore-end */
