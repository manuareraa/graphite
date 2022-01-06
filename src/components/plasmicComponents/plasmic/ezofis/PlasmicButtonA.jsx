// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5GT6nVB5WgvLWb2iBXTk1E
// Component: oO9WDKxuzZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_ezofis.module.css"; // plasmic-import: 5GT6nVB5WgvLWb2iBXTk1E/projectcss
import sty from "./PlasmicButtonA.module.css"; // plasmic-import: oO9WDKxuzZ/css

export const PlasmicButtonA__VariantProps = new Array("orange");

export const PlasmicButtonA__ArgProps = new Array("children");

function PlasmicButtonA__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <button
        data-plasmic-name={"signButton"}
        data-plasmic-override={overrides.signButton}
        className={classNames(projectcss.button, sty.signButton, {
          [sty.signButton__orange]: hasVariant(variants, "orange", "orange")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Sign with Graphite",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren__orange]: hasVariant(
              variants,
              "orange",
              "orange"
            )
          })
        })}
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "signButton"],
  signButton: ["signButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonA__ArgProps,
      internalVariantPropNames: PlasmicButtonA__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButtonA__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonA";
  } else {
    func.displayName = `PlasmicButtonA.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonA = Object.assign(
  // Top-level PlasmicButtonA renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    signButton: makeNodeComponent("signButton"),
    // Metadata about props expected for PlasmicButtonA
    internalVariantProps: PlasmicButtonA__VariantProps,
    internalArgProps: PlasmicButtonA__ArgProps
  }
);

export default PlasmicButtonA;
/* prettier-ignore-end */
